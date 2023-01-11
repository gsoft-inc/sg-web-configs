/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Rule } from "eslint";
import ESTree from "estree";

const rule: Rule.RuleModule = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Prevent importing the entirety of a package.",
            category: "Best Practices",
            recommended: false,
            url: "https://github.com/gsoft-inc/sg-web-configs/blob/main/packages/eslint-plugin/docs/rules/restrict-full-import.md"
        },
        schema: [
            {
                restricted: {
                    type: "array",
                    items: {
                        type: "string"
                    },
                    uniqueItems: true
                }
            }
        ]
    },

    create(context) {
        const restricted: string[] = context.options[0] || [];

        function isRestrictedModule(mod: string) {
            return restricted.indexOf(mod) >= 0;
        }

        function isPotentiallyProblematicLeft(left: ESTree.Pattern) {
            return (
                left.type === "Identifier" ||
                (left.type === "ObjectPattern" &&
                    left.properties.some(prop => {
                        return (
                            // @ts-ignore is needed because this codes comme from another repo, and the typing let us know that SpreadProperty isn't a valid type, but i don't want to change the code, so we need to ignore it
                            prop.type === "SpreadProperty" || 
                            prop.type === "RestElement"
                        );
                    })) ||
                (left.type === "ArrayPattern" &&
                    left.elements.some(element => {
                        return (
                            element != null && element.type === "RestElement"
                        );
                    }))
            );
        }

        function isPotentiallyProblematicRight(right?: ESTree.Expression | null) {
            return (
                right &&
                right.type === "CallExpression" &&
                right.callee.type === "Identifier" &&
                right.callee.name === "require" &&
                // @ts-ignore is needed because this codes comme from another repo, and i'm not sure why it's not working
                isRestrictedModule((right as ESTree.CallExpression).arguments[0].value)
            );
        }

        function isFullImportSpecifier(specifier: ESTree.ImportSpecifier | ESTree.ImportDefaultSpecifier | ESTree.ImportNamespaceSpecifier) {
            return (
                specifier.type === "ImportDefaultSpecifier" ||
                specifier.type === "ImportNamespaceSpecifier" ||
                (specifier.type === "ImportSpecifier" &&
                    specifier.imported.name === "default")
            );
        }

        function hasFullImport(specifiers: (ESTree.ImportSpecifier | ESTree.ImportDefaultSpecifier | ESTree.ImportNamespaceSpecifier)[]) {
            return specifiers.some(isFullImportSpecifier);
        }

        function checkImportDeclaration(node: ESTree.ImportDeclaration) {
            const specifiers = node.specifiers;

            if (
                isRestrictedModule(node.source.value as string) &&
                hasFullImport(specifiers)
            ) {
                context.report({
                    node:
                        specifiers.length > 1
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            ? specifiers.find(isFullImportSpecifier)!
                            : node,
                    message: `Unexpected full import of restricted module '${
                        node.source.value
                    }'.`
                });
            }
        }

        function checkRequire(node: ESTree.VariableDeclarator | ESTree.AssignmentExpression, left: ESTree.Pattern, right?: ESTree.Expression | null) {
            if (
                isPotentiallyProblematicLeft(left) &&
                isPotentiallyProblematicRight(right)
            ) {
                context.report({
                    node,
                    message: `Unexpected full import of restricted module '${
                        // @ts-ignore is needed because this codes comme from another repo, and i'm not sure why it's not working
                        right?.arguments[0].value
                    }'.`
                });
            }
        }

        function checkVariableDeclarator(node: ESTree.VariableDeclarator) {
            checkRequire(node, node.id, node.init);
        }

        function checkAssignmentExpression(node: ESTree.AssignmentExpression) {
            checkRequire(node, node.left, node.right);
        }

        return {
            ImportDeclaration: checkImportDeclaration,
            VariableDeclarator: checkVariableDeclarator,
            AssignmentExpression: checkAssignmentExpression
        };
    }
};

export = rule;

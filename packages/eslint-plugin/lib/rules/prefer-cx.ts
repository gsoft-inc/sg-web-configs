import { Rule } from "eslint";

const rule: Rule.RuleModule = {
    meta: {
        type: "suggestion",
        docs: {
            description:
                "Prefer cx over classnames as the name of classnames imports.",
            category: "Strict Imports",
            recommended: false,
            url: "https://github.com/gsoft-inc/sg-web-configs/blob/main/packages/eslint-plugin/docs/rules/prefer-cx.md"
        },
        fixable: "code",
        schema: []
    },

    create: function(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value !== "classnames") {
                    return;
                }
                node.specifiers.forEach(specifier => {
                    if (specifier.type !== "ImportDefaultSpecifier") {
                        return;
                    }
                    if (specifier.local.name !== "cx") {
                        context.report({
                            node,
                            message: "You should use \"cx\" as the reference name when importing classnames.",
                            fix(fixer) {
                                return fixer.replaceText(specifier.local, "cx");
                            }
                        });
                    }
                });
            }
        };
    }
};

export = rule;
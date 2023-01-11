import type { Linter } from "eslint";

const config: Linter.Config = {
    plugins: ["import"],
    extends: ["eslint:recommended"],
    parserOptions: {
        sourceType: "module"
    },
    env: {
        browser: true,
        es6: true
    },
    rules: {
        // https://eslint.org/docs/rules
        "max-len": ["warn", { tabWidth: 4, code: 300 }],
        "indent": [
            "warn",
            4,
            {
                SwitchCase: 1,
                CallExpression: { arguments: "first" }
            }
        ],
        "semi": ["warn", "always"],
        "quotes": ["warn", "double"],
        "comma-dangle": ["warn", "never"],
        "object-curly-spacing": ["warn", "always"],
        "array-callback-return": "warn",
        "dot-location": ["warn", "property"],
        "eqeqeq": ["warn", "smart"],
        "new-parens": "warn",
        "arrow-parens": ["warn", "as-needed"],
        "linebreak-style": "off",
        "quote-props": "off",
        "no-array-constructor": "warn",
        "no-caller": "warn",
        "no-cond-assign": ["warn", "except-parens"],
        "no-const-assign": "warn",
        "no-control-regex": "warn",
        "no-debugger": "warn",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty-character-class": "warn",
        "no-empty-pattern": "warn",
        "no-eval": "warn",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-fallthrough": "warn",
        "no-func-assign": "warn",
        "no-implied-eval": "warn",
        "no-invalid-regexp": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-mixed-operators": [
            "warn",
            {
                groups: [
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                allowSamePrecedence: false
            }
        ],
        "no-multi-str": "warn",
        "no-native-reassign": "warn",
        "no-negated-in-lhs": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "warn",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-regex-spaces": "warn",
        "no-restricted-syntax": ["warn", "WithStatement"],
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "warn",
        "no-this-before-super": "warn",
        "no-throw-literal": "warn",
        "no-undef": "error",
        "no-restricted-globals": ["error"],
        "no-unexpected-multiline": "warn",
        "no-unreachable": "warn",
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        "no-unused-labels": "warn",
        "no-use-before-define": [
            "warn",
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": [
            "warn",
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false
            }
        ],
        "no-with": "warn",
        "no-whitespace-before-property": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": ["warn", "never"],
        "strict": ["warn", "never"],
        "unicode-bom": ["warn", "never"],
        "use-isnan": "warn",
        "valid-typeof": "warn",
        "getter-return": "warn",
        "no-console": "off",
        "curly": "warn",
        "no-prototype-builtins": "off",
        "default-case": "off",
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "*", next: "return" }
        ],
        "no-shadow": "warn",
        "prefer-const": "warn",
        "no-var": "warn",
        "no-multi-spaces": "warn",
        "no-unused-vars": "warn",
        "no-restricted-properties": "warn",
        "no-unneeded-ternary": "warn",
        "no-param-reassign": "warn",
        "no-duplicate-imports": "off",
        "comma-spacing": ["warn", { "before": false, "after": true }],
        "no-multiple-empty-lines": "warn",
        "keyword-spacing": ["warn", { before: true, after: true }],
        "arrow-spacing": ["warn", { before: true, after: true }],
        "space-before-blocks": ["warn", "always"],
        "space-infix-ops": "warn",
        "space-in-parens": ["warn", "never"],
        "padded-blocks": ["warn", "never"],
        "brace-style":["warn", "1tbs", { "allowSingleLine": true }],

        // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
        "import/no-amd": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/no-self-import": "error",
        "import/newline-after-import" : "warn",
        "import/no-duplicates": "warn"
    }
};

export = config;
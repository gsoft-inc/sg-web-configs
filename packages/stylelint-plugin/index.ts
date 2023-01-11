import type { Config } from "stylelint";

const config: Config = {
    extends: "stylelint-config-recommended",
    rules: {
        // Avoid Errors
        "no-descending-specificity": null,
        "declaration-block-no-duplicate-properties": true,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global"]
            }
        ],

        // Enforce non-stylistic conventions
        "length-zero-no-unit": true,
        "unit-allowed-list": [
            "em",
            "rem",
            "px",
            "%",
            "fr",
            "deg",
            "vh",
            "vw",
            "s",
            "ch"
        ],

        "max-nesting-depth": 2,
        "declaration-block-single-line-max-declarations": 1,

        "font-weight-notation": "numeric",

        // Enforce stylistic conventions
        "rule-empty-line-before": ["always", { except: ["after-single-line-comment", "inside-block-and-after-rule", "first-nested"] }],

        // Enforce stylistic conventions
        // Stylelint recommends to use a pretty printer (like Prettier) alongside Stylelint rather than these rules
        // but we do not like prettier and we want to keep these rules
        "indentation"  : 4,
        "max-line-length": 200,
        "property-case": "lower",
        "color-hex-case": "upper",
        "no-eol-whitespace": true,
        "no-empty-first-line": true,
        "max-empty-lines": [1, { ignore: ["comments"] }],
        "unit-case": "lower",
        "string-quotes": "double",
        "at-rule-name-space-after": "always-single-line",
        "number-no-trailing-zeros": true,
        "color-hex-length": "long",

        "declaration-empty-line-before": "never",
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-before": "never",
        "declaration-colon-space-after": "always-single-line",
        "declaration-bang-space-before": "always",
        "declaration-bang-space-after": "never",
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-semicolon-space-after": "always-single-line",

        "function-comma-space-after": "always",
        "function-parentheses-space-inside": "never",
        "function-whitespace-after": "always",

        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-before": "always",
        "block-closing-brace-newline-after": "always",
        "block-opening-brace-newline-before": "never-single-line",
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-space-before": "always",
        "block-opening-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-closing-brace-space-after": "always-single-line",

        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-class-case": "lower",
        "selector-max-empty-lines": 0,
        "selector-descendant-combinator-no-non-space": true,
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-combinator-space-before": "always",
        "selector-combinator-space-after": "always",

        "media-feature-name-case": "lower",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-colon-space-before": "never",
        "media-feature-colon-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-feature-range-operator-space-after": "always"
    }
};

export = config;
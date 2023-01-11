//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
import { RuleTester, Linter } from "eslint";
import rule from "../../../lib/rules/prefer-cx";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ruleTester = new RuleTester();

const parserOptions: Linter.ParserOptions = { ecmaVersion: 6, sourceType: "module" };

const errors = [
    {
        type: "ImportDeclaration",
        message:
            "You should use \"cx\" as the reference name when importing classnames."
    }
];

ruleTester.run("prefer-cx", rule, {
    valid: [
        { code: "import cx from \"classnames\";", parserOptions },
        { code: "import foo from \"bar\"", parserOptions }
    ],

    invalid: [
        { 
            code: "import classnames from \"classnames\";",
            output: "import cx from \"classnames\";",
            errors,
            parserOptions
        },
        { 
            code: "import foo from \"classnames\";",
            output: "import cx from \"classnames\";",
            errors,
            parserOptions
        }
    ]
});

import type { PluginCreator } from "postcss";
import postcssPresetEnv, { pluginOptions as postcssPresetEnvOptions } from "postcss-preset-env";
import postcssFlexBugsFixes from "postcss-flexbugs-fixes";
import postcssPxtorem from "postcss-pxtorem";
import postcss from "postcss";

const PRESET_ENV_OPTIONS: postcssPresetEnvOptions = {
    autoprefixer: {
        flexbox: "no-2009"
    },
    stage: 3,
    features: {
        "nesting-rules": true
    }
};

// px to rem has no type definition
const PXTOREM_OPTIONS: unknown = {
    rootValue: 16,
    propList: [
        "font-size",
        "line-height",
        "letter-spacing",
        "margin",
        "margin-top",
        "margin-bottom",
        "margin-left",
        "margin-right",
        "padding",
        "padding-top",
        "padding-bottom",
        "padding-left",
        "padding-right",
        "width",
        "height",
        "border",
        "border-top",
        "border-bottom",
        "border-left",
        "border-right"
    ]
};

const DEFAULT_OPTIONS = {	
    presetEnvOptions: PRESET_ENV_OPTIONS,
    pxtoremOptions: PXTOREM_OPTIONS
};

const plugin: PluginCreator<typeof DEFAULT_OPTIONS> = ({ presetEnvOptions, pxtoremOptions } = DEFAULT_OPTIONS) => {
    return {
        postcssPlugin: "@sharegate/postcss-plugin",
        ...postcss([
            postcssFlexBugsFixes(),
            postcssPresetEnv(presetEnvOptions),
            postcssPxtorem(pxtoremOptions)
        ])
    };
};

plugin.postcss = true;

export = plugin;
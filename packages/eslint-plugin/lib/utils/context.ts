import { Rule } from "eslint";
import { sanitizePath } from "./path";
import { basename } from "path";

export function getOptions(context: Rule.RuleContext) {
    return context.options[0] || [];
}

export function getFilePath(context: Rule.RuleContext) {
    return sanitizePath(context.getFilename());
}

export function getFileName(context: Rule.RuleContext) {
    return basename(getFilePath(context));
}

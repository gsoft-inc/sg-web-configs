import { sep, dirname } from "path";

export const sanitizePath = (filePath: string) => {
    return filePath.replace(/\//g, sep).trim();
};

export const splitPath = (filePath: string) => {
    return sanitizePath(filePath).split(sep);
};

export const getImmediateParentFolderName = (filePath: string) => {
    const parts = splitPath(dirname(filePath));

    return parts.length >= 1 ? parts.pop() : "";
};


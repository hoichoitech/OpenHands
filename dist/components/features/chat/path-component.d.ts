import { ReactNode } from "react";
/**
 * When false, PathComponent renders a non-interactive span. EventGroup's
 * header wraps titles in a toggle <button>, so nested path buttons would be
 * invalid markup — that context sets this to false.
 */
export declare const PathInteractiveContext: import("react").Context<boolean>;
/**
 * Checks if a path is likely a directory
 * @param path The full path
 * @returns True if the path is likely a directory
 */
declare const isLikelyDirectory: (path: string) => boolean;
/**
 * Displays only the filename, with the full path on hover.
 * Click opens the Files drawer on that path (when interactive).
 */
declare function PathComponent(props: {
    children?: ReactNode;
}): import("react").JSX.Element;
export { PathComponent, isLikelyDirectory };

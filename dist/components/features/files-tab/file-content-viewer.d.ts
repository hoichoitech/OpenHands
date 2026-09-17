import type { ViewMode } from "./view-mode";
interface FileContentViewerProps {
    path: string;
    viewMode: ViewMode;
}
/**
 * Renders the contents of a single workspace file. In `rich` mode we point
 * an iframe / <img> straight at the agent server's static workspace
 * fileserver for HTML / SVG / images / PDFs, so relative asset references
 * load naturally. In `plain` mode we always show the raw bytes as text (or
 * a fallback message for binaries).
 */
export declare function FileContentViewer({ path, viewMode }: FileContentViewerProps): import("react").JSX.Element;
export {};

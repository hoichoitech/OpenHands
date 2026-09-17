import type { ActionEvent, OpenHandsEvent } from "#/types/agent-server/core";
export { isMarkdownFilePath } from "#/utils/is-markdown-file-path";
interface MarkdownFilePreviewProps {
    content: string;
    path: string;
    /** When omitted (e.g. in-flight create), the View affordance is hidden. */
    onView?: () => void;
}
/**
 * True for file-editor *create* events whose path is a markdown artifact.
 *
 * Used to keep those cards expanded and outside collapsed action groups so
 * the clipped preview is visible by default. Reads/edits of `.md` files stay
 * on the normal groupable path.
 */
export declare function isMarkdownFileEditorEvent(event: OpenHandsEvent, correspondingAction?: ActionEvent): boolean;
/**
 * Height-clipped markdown card with an optional View bar that opens the file.
 */
export declare function MarkdownFilePreview({ content, path, onView, }: MarkdownFilePreviewProps): import("react").JSX.Element;

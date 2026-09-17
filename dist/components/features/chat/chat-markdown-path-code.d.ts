import React from "react";
import type { ExtraProps } from "react-markdown";
/**
 * Workspace paths available for chat Markdown linking. Absent outside
 * ChatInterface (e.g. unit tests) so ChatCode never requires QueryClient.
 */
export declare const WorkspaceFilesForChatContext: React.Context<string[] | undefined>;
/** Fetches workspace files once for the chat tree and exposes them to path links. */
export declare function WorkspaceFilesForChatProvider({ children, }: {
    children: React.ReactNode;
}): React.JSX.Element;
type CodeProps = React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & ExtraProps;
type AnchorProps = React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;
type StrongProps = React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & ExtraProps;
/**
 * Chat-only inline code: existing workspace paths become Files-drawer buttons.
 * Nested under an existing Markdown link → stay plain `<code>`.
 */
export declare function ChatCode(props: CodeProps): React.JSX.Element;
/**
 * Agents often emphasize paths with `**file.md**` instead of backticks.
 * Link those only when the whole strong span is an existing workspace file.
 */
export declare function ChatStrong(props: StrongProps): React.JSX.Element;
/** Marks descendants so nested path tokens are not turned into a button. */
export declare function ChatAnchor(props: AnchorProps): React.JSX.Element;
export {};

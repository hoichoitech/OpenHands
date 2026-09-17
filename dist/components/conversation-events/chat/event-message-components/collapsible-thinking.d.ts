import React from "react";
interface CollapsibleThinkingProps {
    /** The thinking / reasoning content to display when expanded. */
    content: string;
}
/**
 * Renders agent thinking or extended reasoning content inside a collapsible
 * section.  Collapsed by default so the chat stays compact — especially
 * useful when the thinking language differs from the conversation language.
 */
export declare function CollapsibleThinking({ content }: CollapsibleThinkingProps): React.JSX.Element | null;
export {};

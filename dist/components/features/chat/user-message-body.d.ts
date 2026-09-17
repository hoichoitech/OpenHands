import React from "react";
import { ChatAnchor, ChatCode, ChatStrong } from "./chat-markdown-path-code";
export declare const USER_MESSAGE_LINE_HEIGHT_PX = 24;
export declare const chatBubbleMarkdownComponents: {
    p: ({ children }: React.ComponentProps<"p">) => React.JSX.Element;
    code: typeof ChatCode;
    a: typeof ChatAnchor;
    strong: typeof ChatStrong;
};
export declare function UserMessageBody({ message, isHovering, isExpanded, onTruncatableChange, }: {
    message: string;
    isHovering: boolean;
    isExpanded: boolean;
    onTruncatableChange: (truncatable: boolean) => void;
}): React.JSX.Element;

export type ConversationCardTitleMode = "view" | "edit";
export type ConversationCardTitleProps = {
    titleMode: ConversationCardTitleMode;
    title: string;
    onSave: (title: string) => void;
    isConversationArchived?: boolean;
};
export declare function ConversationCardTitle({ titleMode, title, onSave, isConversationArchived, }: ConversationCardTitleProps): import("react").JSX.Element;

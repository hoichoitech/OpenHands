import { ReactNode } from "react";
type ConversationTabContentCrossfadeProps = {
    showAgentLoading: boolean;
    tabKey: string;
    children: ReactNode;
};
export declare function ConversationTabContentCrossfade({ showAgentLoading, tabKey, children, }: ConversationTabContentCrossfadeProps): import("react").JSX.Element;
export {};

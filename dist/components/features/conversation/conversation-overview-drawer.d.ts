import type { RefObject } from "react";
interface ConversationOverviewDrawerProps {
    isMobile: boolean;
    resizeContainerRef?: RefObject<HTMLElement | null>;
}
export declare function ConversationOverviewDrawer({ isMobile, resizeContainerRef, }: ConversationOverviewDrawerProps): import("react").JSX.Element | null;
export {};

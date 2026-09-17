import React from "react";
import type { ConversationOverviewDrawerOpenOptions, ConversationOverviewDrawerSection } from "./conversation-overview-drawer.types";
interface ConversationOverviewDrawerContextValue {
    section: ConversationOverviewDrawerSection | null;
    openAdd: boolean;
    /** Increments when the drawer header Add control is clicked. */
    addRequestKey: number;
    openSection: (section: ConversationOverviewDrawerSection, options?: ConversationOverviewDrawerOpenOptions) => void;
    closeDrawer: () => void;
    requestAdd: () => void;
}
export declare function ConversationOverviewDrawerProvider({ children, }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useConversationOverviewDrawer(): ConversationOverviewDrawerContextValue;
export declare function useConversationOverviewDrawerOptional(): ConversationOverviewDrawerContextValue | null;
export {};

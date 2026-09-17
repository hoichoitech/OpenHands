import { type SidebarOnboardingChecklistItemId } from "./sidebar-onboarding-checklist.constants";
export interface SidebarOnboardingChecklistItemState {
    id: SidebarOnboardingChecklistItemId;
    isComplete: boolean;
}
export declare function useSidebarOnboardingChecklist(): {
    items: SidebarOnboardingChecklistItemState[];
    completedCount: number;
    totalCount: number;
    isVisible: boolean;
    isMinimized: boolean;
    dismiss: () => void;
    toggleMinimized: () => void;
    markJoinSlackComplete: () => void;
};

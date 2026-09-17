import { type SidebarOnboardingChecklistItemId } from "./sidebar-onboarding-checklist.constants";
interface SidebarOnboardingChecklistItemPreviewProps {
    id: SidebarOnboardingChecklistItemId;
    onActionClick?: () => void;
    onDocsClick?: () => void;
}
export declare function SidebarOnboardingChecklistItemPreview({ id, onActionClick, onDocsClick, }: SidebarOnboardingChecklistItemPreviewProps): import("react").JSX.Element;
export {};

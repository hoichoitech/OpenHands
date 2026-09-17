import type { SubPageNavItem } from "#/components/features/manifest/manifest-subpage-layout";
export interface AutomationSubPageNav {
    heading: string;
    items: SubPageNavItem[];
}
/**
 * The manifest's sub-page navigation resolved for rendering, or null when the
 * manifest declares none. The templates item is hidden on cloud backends: the
 * catalog launcher it hosts is a local-backend feature and renders nothing
 * there.
 */
export declare function useAutomationSubPageNav(): AutomationSubPageNav | null;

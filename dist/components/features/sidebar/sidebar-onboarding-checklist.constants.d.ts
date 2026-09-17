import { I18nKey } from "#/i18n/declaration";
import type { OnboardingLinkDestinationType, OnboardingLinkId } from "#/hooks/use-tracking";
/** Canonical Slack invite redirect from openhands.dev. */
export declare const OPENHANDS_SLACK_COMMUNITY_URL = "https://openhands.dev/joinslack";
export declare const SIDEBAR_ONBOARDING_CHECKLIST_DISMISSED_STORAGE_KEY = "openhands-sidebar-onboarding-checklist-dismissed";
export declare const SIDEBAR_ONBOARDING_CHECKLIST_DISMISSED_CHANGE_EVENT = "openhands-sidebar-onboarding-checklist-dismissed-change";
export declare const SIDEBAR_ONBOARDING_CHECKLIST_MINIMIZED_STORAGE_KEY = "openhands-sidebar-onboarding-checklist-minimized";
export declare const SIDEBAR_ONBOARDING_CHECKLIST_CUSTOMIZE_EXPLORED_STORAGE_KEY = "openhands-sidebar-onboarding-checklist-customize-explored";
export declare const SIDEBAR_ONBOARDING_CHECKLIST_SLACK_JOINED_STORAGE_KEY = "openhands-sidebar-onboarding-checklist-slack-joined";
export declare const SIDEBAR_ONBOARDING_CHECKLIST_ITEM_IDS: readonly ["configure-llm", "start-conversation", "schedule-task", "customize-agent", "connect-mcp", "join-slack"];
export type SidebarOnboardingChecklistItemId = (typeof SIDEBAR_ONBOARDING_CHECKLIST_ITEM_IDS)[number];
export type SidebarOnboardingChecklistInternalItemId = Exclude<SidebarOnboardingChecklistItemId, "join-slack">;
export declare const SIDEBAR_ONBOARDING_CHECKLIST_ROUTES: Record<SidebarOnboardingChecklistInternalItemId, string>;
/** Semantic `link_id` values for `onboarding_link_clicked` (no `open_docs`). */
export declare const SIDEBAR_ONBOARDING_CHECKLIST_LINK_IDS: Record<SidebarOnboardingChecklistItemId, Exclude<OnboardingLinkId, "open_docs">>;
export declare const SIDEBAR_ONBOARDING_CHECKLIST_DESTINATION_TYPES: Record<SidebarOnboardingChecklistItemId, OnboardingLinkDestinationType>;
export declare function isExternalSidebarOnboardingChecklistItem(id: SidebarOnboardingChecklistItemId): id is "join-slack";
export declare function getSidebarOnboardingChecklistHref(id: SidebarOnboardingChecklistItemId): {
    kind: "internal" | "external";
    href: string;
};
export declare const SIDEBAR_ONBOARDING_CHECKLIST_I18N_KEYS: Record<SidebarOnboardingChecklistItemId, I18nKey>;
export declare const SIDEBAR_ONBOARDING_CHECKLIST_DESCRIPTION_I18N_KEYS: Record<SidebarOnboardingChecklistItemId, I18nKey>;
export declare const SIDEBAR_ONBOARDING_CHECKLIST_ACTION_I18N_KEYS: Record<SidebarOnboardingChecklistItemId, I18nKey>;
export declare const SIDEBAR_ONBOARDING_CHECKLIST_DOCS_URLS: Record<SidebarOnboardingChecklistItemId, string>;
export declare function isCustomizeChecklistPath(path: string): boolean;

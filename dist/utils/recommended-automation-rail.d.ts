import { type RecommendedAutomation } from "@openhands/extensions/automations";
import type { Automation } from "#/types/automation";
export declare function getAutomationsByPopularity(catalog: RecommendedAutomation[]): RecommendedAutomation[];
/**
 * Slug used to match a catalog entry against an installed automation name.
 * Catalog ids are already kebab-case; installed names are human titles.
 */
export declare function normalizeAutomationKey(value: string): string;
export declare function isCatalogAutomationAdded(entry: RecommendedAutomation, installed: readonly Pick<Automation, "name">[]): boolean;
/** Catalog cards that launch a conversation instead of a host setup form. */
export declare function isConversationLaunchAutomation(entry: RecommendedAutomation): boolean;
export interface RecommendedRailGroups {
    proven: RecommendedAutomation[];
    conversation: RecommendedAutomation[];
}
/**
 * Home / dashboard rail: remaining proven workflows, then other useful
 * automations that open in a new conversation. Already-created automations
 * are dropped from both groups.
 */
export declare function getRecommendedRailGroups(installed: readonly Pick<Automation, "name">[]): RecommendedRailGroups;
export declare function flattenRecommendedRailGroups(groups: RecommendedRailGroups): RecommendedAutomation[];

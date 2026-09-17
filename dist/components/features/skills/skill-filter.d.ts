import type { SkillCategoryId } from "@openhands/extensions/skills";
import { I18nKey } from "#/i18n/declaration";
import type { SkillInfo, SkillType } from "#/types/settings";
import { type SkillScope } from "#/utils/skill-scope";
export declare const SKILL_FILTER_QUERY_PARAM = "q";
export type SkillEnabledState = "enabled" | "disabled";
export type SkillRecommendation = "recommended" | "other";
export type SkillFacetGroupId = "state" | "recommendation" | "source" | "category" | "type";
export interface SkillFilterState {
    query: string;
    sources: Set<SkillScope>;
    categories: Set<SkillCategoryId>;
    types: Set<SkillType>;
    states: Set<SkillEnabledState>;
    recommendations: Set<SkillRecommendation>;
}
export interface SkillFacetRowModel {
    value: string;
    labelKey: I18nKey;
    count: number;
    checked: boolean;
    disabled: boolean;
}
export interface SkillFacetGroup {
    id: SkillFacetGroupId;
    labelKey: I18nKey;
    rows: SkillFacetRowModel[];
}
export declare const EMPTY_SKILL_FILTER_STATE: SkillFilterState;
/** Resolving the two lists behind enablement is the caller's job, not this module's. */
type SkillEnabledPredicate = (skill: SkillInfo) => boolean;
export declare function parseSkillFilterState(params: URLSearchParams): SkillFilterState;
export declare function toSkillFilterSearchParams(state: SkillFilterState): URLSearchParams;
export declare function applySkillFilters(skills: SkillInfo[], isEnabled: SkillEnabledPredicate, state: SkillFilterState): SkillInfo[];
export declare function buildSkillFacetGroups(skills: SkillInfo[], isEnabled: SkillEnabledPredicate, state: SkillFilterState): SkillFacetGroup[];
export declare function toggleSkillFilterValue(state: SkillFilterState, groupId: SkillFacetGroupId, value: string): SkillFilterState;
export declare function clearSkillFilterFacets(state: SkillFilterState): SkillFilterState;
export declare function countActiveFilters(state: SkillFilterState): number;
export {};

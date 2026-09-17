import { type LucideIcon } from "lucide-react";
import { type SkillCategoryId } from "@openhands/extensions/skills";
import { I18nKey } from "#/i18n/declaration";
import type { SkillInfo } from "#/types/settings";
/** Display order in the facet rail. `other` last. */
export declare const SKILL_CATEGORY_ORDER: readonly SkillCategoryId[];
export declare const SKILL_CATEGORY_LABEL_KEYS: Record<SkillCategoryId, I18nKey>;
export declare const SKILL_CATEGORY_ICONS: Record<SkillCategoryId, LucideIcon>;
/** The catalog uses `other` for a skill with no marketplace entry, so it means "uncategorized" there exactly as it does for a local skill. */
export declare const UNCATEGORIZED_SKILL_CATEGORY: SkillCategoryId;
/** Local skills carry no category and a stale bundled catalog could carry one this build does not know; both degrade to `other` rather than an unrenderable facet value. */
export declare function getSkillCategory(skill: SkillInfo): SkillCategoryId;

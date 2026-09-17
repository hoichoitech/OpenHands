/** Every skill bundled from `@openhands/extensions`, in catalog order. */
export declare const CATALOG_SKILL_NAMES: readonly string[];
export declare function isCatalogSkill(name: string): boolean;
export declare function isRecommendedSkill(name: string): boolean;
/**
 * The two persisted lists. They cover different populations: `enabledSkills`
 * allow-lists the bundled catalog, whose every future addition would otherwise
 * be on for everyone (#16302), while `disabledSkills` keeps denying user- and
 * project-authored skills, which should be on the moment they appear.
 *
 * `undefined` means "never migrated" and must survive settings hydration.
 */
export interface SkillEnablement {
    enabledSkills?: string[];
    disabledSkills?: string[];
}
export declare function resolveEnabledCatalogSkills(enablement: SkillEnablement): string[];
/**
 * The one rule for "will this skill be loaded", resolved once per caller so
 * per-skill checks stay cheap.
 *
 * The deny-list still wins over the allow-list, which only matters before the
 * migration runs: until then a pre-existing "I turned this off" lives in the
 * deny-list alone.
 */
export declare function buildSkillEnablementFilter(enablement: SkillEnablement): (skillName: string) => boolean;
/**
 * One-shot conversion from "all catalog skills on, minus a deny-list" to an
 * explicit allow-list; `undefined` once already migrated.
 *
 * A fresh workspace is migrated too, even though the resolver's fallback would
 * give it the same set: persisting an explicit list is what stops a later
 * `defaultEnabled` catalog addition from switching itself on.
 */
export declare function migrateSkillEnablement(enablement: SkillEnablement): {
    enabled_skills: string[];
    disabled_skills: string[];
} | undefined;
export declare function toSkillEnablement(settings: {
    enabled_skills?: string[];
    disabled_skills?: string[];
}): SkillEnablement;
/**
 * The catalog skill a message invokes by name, if any.
 *
 * 18 of the catalog's 24 slash commands belong to skills that are off by
 * default, so without this an automation card would send its command with none
 * of the instructions behind it. Only the leading token counts: matching a
 * `/word` anywhere in prose would re-admit most of the catalog.
 */
export declare function findInvokedCatalogSkill(query?: string): string | undefined;

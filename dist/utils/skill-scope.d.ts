import type { SkillInfo } from "#/types/settings";
export type SkillScope = "project" | "personal" | "public";
export declare const SKILL_SCOPE_ORDER: SkillScope[];
export declare function getSkillScope(skill: SkillInfo, projectDir?: string | null): SkillScope;
export declare function groupSkillsByScope(skills: SkillInfo[], projectDir?: string | null): Record<SkillScope, SkillInfo[]>;

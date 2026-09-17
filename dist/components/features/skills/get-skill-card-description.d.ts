import type { SkillInfo } from "#/types/settings";
/**
 * Subtitle text for skill cards: prefer API `description`, then YAML
 * frontmatter inside `content`, then the first body paragraph.
 */
export declare function getSkillCardDescription(skill: SkillInfo): string;

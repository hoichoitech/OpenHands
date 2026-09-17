import { TextContent } from "#/types/agent-server/core/base/common";
/**
 * Represents a single activated skill with its name and associated content.
 */
export interface SkillReadyItem {
    name: string;
    content: string;
}
/**
 * Formats activated skills and extended content into markdown for display.
 * Each skill is paired with its corresponding <EXTRA_INFO> block by index.
 */
export declare const getSkillReadyContent: (activatedSkills: string[], extendedContent: TextContent[]) => string;
/**
 * Returns structured skill items with their names and associated content.
 * Each skill is paired with its corresponding <EXTRA_INFO> block by index.
 */
export declare const getSkillReadyItems: (activatedSkills: string[], extendedContent: TextContent[]) => SkillReadyItem[];

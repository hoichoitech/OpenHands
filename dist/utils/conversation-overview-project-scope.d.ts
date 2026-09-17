import type { Automation } from "#/types/automation";
import type { SkillInfo } from "#/types/settings";
export declare const CONVERSATION_OVERVIEW_PROJECT_SCOPE: {
    readonly project: "project";
    readonly all: "all";
};
export type ConversationOverviewProjectScope = (typeof CONVERSATION_OVERVIEW_PROJECT_SCOPE)[keyof typeof CONVERSATION_OVERVIEW_PROJECT_SCOPE];
export declare function normalizeRepositoryName(repository: string | null | undefined): string | null;
export declare function isAutomationForRepository(automation: Pick<Automation, "repository">, repository: string | null | undefined): boolean;
export declare function isSkillForProject(skill: SkillInfo, projectDir?: string | null): boolean;
export declare function filterAutomationsByProjectScope(automations: Automation[], scope: ConversationOverviewProjectScope, repository: string | null | undefined): Automation[];
export declare function filterSkillsByProjectScope(skills: SkillInfo[], scope: ConversationOverviewProjectScope, projectDir?: string | null): SkillInfo[];
export declare function sortAutomationsByProjectRelevance(automations: Automation[], repository: string | null | undefined): Automation[];
export declare function sortSkillsByProjectRelevance(skills: SkillInfo[], projectDir?: string | null): SkillInfo[];
export declare function countAutomationsForRepository(automations: readonly Automation[], repository: string | null | undefined): number;
export declare function countSkillsForProject(skills: readonly SkillInfo[], projectDir?: string | null): number;

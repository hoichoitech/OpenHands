import { OpenHandsEvent } from "#/types/agent-server/core";
export interface DetectedSkillInstall {
    /** Id of the bash observation event carrying the success marker. */
    eventId: string;
    skillName: string;
    /** Workspace root the skill was installed into (forward slashes). */
    workspacePath: string;
}
/**
 * Skills the agent installed during this conversation via the add-skill
 * flow. The SDK loads skills once at conversation start, so these are on
 * disk but inert until a new conversation starts in `workspacePath`.
 * Deduped per workspace+skill; a re-install (--force) keeps the latest
 * event id and moves the entry to the end.
 */
export declare function detectSkillInstalls(events: OpenHandsEvent[]): DetectedSkillInstall[];

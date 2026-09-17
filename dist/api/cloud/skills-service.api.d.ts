import type { SkillInfo } from "#/types/settings";
/**
 * Fetch the full list of skills from the cloud backend. The cloud endpoint is
 * paginated (page_id cursor); we walk all pages so the settings UI gets a
 * complete list in one call. The cloud SkillInfo shape
 * (name/type/source/triggers) matches the GUI's SkillInfo type, so items are
 * passed through unchanged.
 */
export declare function fetchCloudSkills(): Promise<SkillInfo[]>;
/**
 * Fetch the skills loaded into a running cloud conversation from the
 * per-conversation route (the one the OpenHands web UI's own "Show Available
 * Skills" modal uses). Unlike `/api/v1/skills/search`, which only scans the
 * API host's built-in skills directory, this resolves the conversation's
 * sandbox and asks its agent-server for the merged set: public catalog,
 * user/org repos, project skills and auto-loaded marketplace plugins. The
 * route reports no `source`, so it is `null`.
 */
export declare function fetchCloudConversationSkills(conversationId: string): Promise<SkillInfo[]>;

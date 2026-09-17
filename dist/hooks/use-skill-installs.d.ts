/**
 * Skill installs performed by the agent in this conversation (via the
 * bundled add-skill flow), minus the ones the user dismissed. The event
 * store is global, so results are scoped to the conversation it currently
 * holds — a mismatched id (remount race) yields no installs.
 */
export declare const useSkillInstalls: (conversationId: string | null | undefined) => {
    installs: import("#/utils/skill-install-events").DetectedSkillInstall[];
    dismissAll: () => void;
};

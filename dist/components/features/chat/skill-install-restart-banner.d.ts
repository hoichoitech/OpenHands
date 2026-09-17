export interface SkillInstallRestartBannerProps {
    conversationId: string | null | undefined;
}
/**
 * Pinned notice shown after the agent installs a skill via the bundled
 * add-skill flow. The SDK loads skills once at conversation start, so a
 * chat-installed skill can't activate in the running conversation — this
 * banner says so and offers one action: start a new conversation in the
 * directory the skill was installed to.
 */
export declare function SkillInstallRestartBanner({ conversationId, }: SkillInstallRestartBannerProps): import("react").JSX.Element | null;

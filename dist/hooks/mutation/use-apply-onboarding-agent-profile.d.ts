import { type AgentProfileSaveInput } from "#/api/agent-profiles-service/agent-profiles-service.api";
/**
 * The well-known agent profile onboarding configures. Conversations launch from
 * the active AGENT profile (#1571), so onboarding must land the user's choice on
 * an active profile — not just global agent_settings / a standalone LLM profile,
 * which the active profile wouldn't reference. Reusing the seeded "default" name
 * upserts that one profile (its id is preserved on overwrite) rather than
 * spawning a parallel one.
 */
export declare const ONBOARDING_AGENT_PROFILE_NAME = "default";
/**
 * Configure and activate the onboarding agent profile from the user's choices:
 * an OpenHands profile pointing at the LLM profile onboarding just created, or
 * an ACP profile for the chosen provider (which owns its own LLM — no key).
 *
 * Best-effort: a failure (e.g. an older backend without `/api/agent-profiles`)
 * is swallowed so onboarding is never blocked — the global agent_settings the
 * setup steps already wrote remain the fallback.
 */
export declare function useApplyOnboardingAgentProfile(): (profile: AgentProfileSaveInput) => Promise<void>;

import type { AgentProfile, AgentProfileSummary, AgentProfileSaveInput, AgentProfileListResponse, AgentProfileDetailResponse, AgentProfileMutationResponse, ActivateAgentProfileResponse, ExposeSecretsMode } from "@openhands/typescript-client";
/**
 * The seeded, well-known baseline agent profile. The backend lazily seeds it to
 * mirror the user's global config (#3719), and onboarding configures it from the
 * user's choice. It stands in for global `agent_settings`, so the home-launch
 * path treats it as the enriched baseline rather than a deliberate profile
 * selection (see `useCreateConversation`).
 */
export declare const WELL_KNOWN_DEFAULT_AGENT_PROFILE_NAME = "default";
export type { AgentProfile, AgentProfileSummary, AgentProfileSaveInput, AgentProfileListResponse, AgentProfileDetailResponse, AgentProfileMutationResponse, ActivateAgentProfileResponse, };
declare class AgentProfilesService {
    static listProfiles(): Promise<AgentProfileListResponse>;
    static getProfile(name: string, exposeSecrets?: ExposeSecretsMode): Promise<AgentProfileDetailResponse>;
    /** Create or overwrite a profile by name (upsert). */
    static saveProfile(name: string, profile: AgentProfileSaveInput): Promise<AgentProfileMutationResponse>;
    static deleteProfile(name: string): Promise<AgentProfileMutationResponse>;
    static renameProfile(name: string, newName: string): Promise<AgentProfileMutationResponse>;
    /** Activate by the profile's stable UUID `id` (pointer-only; never writes
     * agent_settings). */
    static activateProfile(profileId: string): Promise<ActivateAgentProfileResponse>;
}
export default AgentProfilesService;

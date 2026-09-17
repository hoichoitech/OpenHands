import type { ProfileInfo as ClientProfileInfo, ProfileListResponse as ClientProfileListResponse, ProfileDetailResponse, ProfileMutationResponse, ActivateProfileResponse, SaveProfileRequest, ExposeSecretsMode, ValidateProfileResponse } from "@openhands/typescript-client";
/**
 * Profile summaries carry an optional `provider_connection_id` (the shared
 * provider connection a profile links to), but `@openhands/typescript-client`
 * predates that field. Widen the client types here so consumers can read it; it
 * stays optional, so a client response without the field is still assignable.
 */
export interface ProfileInfo extends ClientProfileInfo {
    provider_connection_id?: string | null;
    /** True when provider_connection_id is set but the referenced connection no longer exists. */
    provider_connection_broken?: boolean;
}
export interface ProfileListResponse extends Omit<ClientProfileListResponse, "profiles"> {
    profiles: ProfileInfo[];
}
export type { ProfileDetailResponse, ProfileMutationResponse, ActivateProfileResponse, SaveProfileRequest, ExposeSecretsMode, ValidateProfileResponse, };
declare class ProfilesService {
    static listProfiles(): Promise<ProfileListResponse>;
    static getProfile(name: string, exposeSecrets?: ExposeSecretsMode): Promise<ProfileDetailResponse>;
    static saveProfile(name: string, request: SaveProfileRequest): Promise<ProfileMutationResponse>;
    static deleteProfile(name: string): Promise<ProfileMutationResponse>;
    static renameProfile(name: string, newName: string): Promise<ProfileMutationResponse>;
    static activateProfile(name: string): Promise<ActivateProfileResponse>;
    /**
     * Pre-flight check: fire a minimal LLM completion to catch misconfigurations
     * (invalid model names, missing provider prefixes, bad base URLs, invalid
     * API keys) before a profile is saved.
     *
     * Returns `{ valid: true }` when the LLM responds, or
     * `{ valid: false, error: { type, message } }` on a blocking error.
     * Transient errors (rate limits, timeouts) are non-blocking.
     *
     * Cloud backends do not implement this endpoint; `null` signals
     * "no verdict" so callers fall through to the normal save path.
     */
    static validateProfile(name: string, request: SaveProfileRequest): Promise<ValidateProfileResponse | null>;
}
export default ProfilesService;

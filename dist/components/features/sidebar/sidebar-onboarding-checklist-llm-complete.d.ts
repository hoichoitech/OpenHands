import type { ProfileListResponse } from "#/api/profiles-service/profiles-service.api";
import type { Settings } from "#/types/settings";
export declare function isConfigureLlmChecklistItemComplete(settings: Settings | undefined, isLlmConfigured: boolean, isLlmConfiguredLoading: boolean, profilesData: ProfileListResponse | undefined, isProfilesLoading: boolean): boolean;

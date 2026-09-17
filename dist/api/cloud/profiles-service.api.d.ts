import type { ActivateProfileResponse, ProfileDetailResponse, ProfileListResponse, ProfileMutationResponse, SaveProfileRequest } from "@openhands/typescript-client";
export declare function fetchCloudProfiles(): Promise<ProfileListResponse>;
export declare function fetchCloudProfile(name: string): Promise<ProfileDetailResponse>;
export declare function saveCloudProfile(name: string, request: SaveProfileRequest): Promise<ProfileMutationResponse>;
export declare function deleteCloudProfile(name: string): Promise<ProfileMutationResponse>;
export declare function renameCloudProfile(name: string, newName: string): Promise<ProfileMutationResponse>;
export declare function activateCloudProfile(name: string): Promise<ActivateProfileResponse>;

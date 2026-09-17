import type { AgentProfileSaveInput, AgentProfileListResponse, AgentProfileDetailResponse, AgentProfileMutationResponse, ActivateAgentProfileResponse } from "@openhands/typescript-client";
export declare function listCloudAgentProfiles(): Promise<AgentProfileListResponse>;
export declare function getCloudAgentProfile(name: string): Promise<AgentProfileDetailResponse>;
export declare function saveCloudAgentProfile(name: string, profile: AgentProfileSaveInput): Promise<AgentProfileMutationResponse>;
export declare function deleteCloudAgentProfile(name: string): Promise<AgentProfileMutationResponse>;
export declare function renameCloudAgentProfile(name: string, newName: string): Promise<AgentProfileMutationResponse>;
export declare function activateCloudAgentProfile(profileId: string): Promise<ActivateAgentProfileResponse>;

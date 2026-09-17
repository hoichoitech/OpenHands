import type { GitChangeStatus, AgentServerGitChangeStatus } from "#/api/open-hands.types";
type ClientGitChangeStatus = "added" | "modified" | "deleted" | "renamed";
type SupportedGitStatus = AgentServerGitChangeStatus | ClientGitChangeStatus;
export declare function mapAnyGitStatusToClientStatus(status: SupportedGitStatus): GitChangeStatus;
export declare function mapAgentServerToClientGitStatus(agentServerStatus: AgentServerGitChangeStatus): GitChangeStatus;
export {};

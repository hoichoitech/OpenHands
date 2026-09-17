import { LocalWorkspace, LocalWorkspaceParent } from "#/types/workspace";
export interface WorkspacesListResponse {
    workspaces: LocalWorkspace[];
    workspaceParents: LocalWorkspaceParent[];
}
declare class WorkspacesService {
    static listWorkspaces(): Promise<WorkspacesListResponse>;
    static addWorkspaces(items: LocalWorkspace[]): Promise<WorkspacesListResponse>;
    static removeWorkspace(path: string): Promise<void>;
    static addWorkspaceParents(items: LocalWorkspaceParent[]): Promise<WorkspacesListResponse>;
    static removeWorkspaceParent(path: string): Promise<void>;
}
export default WorkspacesService;

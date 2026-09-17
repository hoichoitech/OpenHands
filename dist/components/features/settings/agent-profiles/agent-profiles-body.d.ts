import { type AgentProfileSummary } from "#/api/agent-profiles-service/agent-profiles-service.api";
interface AgentProfilesBodyProps {
    isLoading: boolean;
    loadError: Error | null;
    profiles: AgentProfileSummary[];
    activeId: string | null;
    /** When false, rows are read-only and the actions menu is hidden. */
    canManage: boolean;
    onActivate: (profile: AgentProfileSummary) => void;
    onEdit: (profile: AgentProfileSummary) => void;
    onDelete: (profile: AgentProfileSummary) => void;
    isActivating: boolean;
}
export declare function AgentProfilesBody({ isLoading, loadError, profiles, activeId, canManage, onActivate, onEdit, onDelete, isActivating, }: AgentProfilesBodyProps): import("react").JSX.Element;
export {};

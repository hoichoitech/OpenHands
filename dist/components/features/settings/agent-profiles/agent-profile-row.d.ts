import { type AgentProfileSummary } from "#/api/agent-profiles-service/agent-profiles-service.api";
interface AgentProfileRowProps {
    profile: AgentProfileSummary;
    isActive: boolean;
    /** When false, the row is read-only and the actions menu is hidden. */
    canManage: boolean;
    onActivate: (profile: AgentProfileSummary) => void;
    onEdit: (profile: AgentProfileSummary) => void;
    onDelete: (profile: AgentProfileSummary) => void;
    isActivating: boolean;
}
export declare function AgentProfileRow({ profile, isActive, canManage, onActivate, onEdit, onDelete, isActivating, }: AgentProfileRowProps): import("react").JSX.Element;
export {};

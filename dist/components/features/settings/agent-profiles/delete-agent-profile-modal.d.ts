import { type AgentProfileSummary } from "#/api/agent-profiles-service/agent-profiles-service.api";
interface DeleteAgentProfileModalProps {
    profile: AgentProfileSummary | null;
    onClose: () => void;
}
export declare function DeleteAgentProfileModal({ profile, onClose, }: DeleteAgentProfileModalProps): import("react").JSX.Element | null;
export {};

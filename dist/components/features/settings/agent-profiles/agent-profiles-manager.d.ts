import { type AgentProfileSummary } from "#/api/agent-profiles-service/agent-profiles-service.api";
interface AgentProfilesManagerProps {
    onAddProfile?: () => void;
    onEditProfile?: (profile: AgentProfileSummary) => void;
}
export declare function AgentProfilesManager({ onAddProfile, onEditProfile, }: AgentProfilesManagerProps): import("react").JSX.Element;
export {};

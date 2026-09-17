export interface AgentStatusProps {
    className?: string;
    handleStop: () => void;
    handleResumeAgent: () => void;
    disabled?: boolean;
    isPausing?: boolean;
}
export declare function AgentStatus({ className, handleStop, handleResumeAgent, disabled, isPausing, }: AgentStatusProps): import("react").JSX.Element | null;
export default AgentStatus;

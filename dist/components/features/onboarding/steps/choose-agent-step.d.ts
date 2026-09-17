import React from "react";
export type OnboardingAgentId = "openhands" | "claude-code" | "codex" | "gemini-cli";
export declare function AgentOptionIcon({ id, muted }: {
    id: string;
    muted: boolean;
}): React.JSX.Element;
interface ChooseAgentStepProps {
    selectedAgentId: OnboardingAgentId;
    onSelect: (agentId: OnboardingAgentId) => void;
    onBack?: () => void;
    onNext: () => void;
}
export declare function ChooseAgentStep({ selectedAgentId, onSelect, onBack, onNext, }: ChooseAgentStepProps): React.JSX.Element;
export {};

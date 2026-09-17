import type { ACPProviderIcon } from "#/constants/acp-providers";
/**
 * Icons the conversation chip + onboarding tiles can render. Strictly broader
 * than {@link ACPProviderIcon} — that type covers ACP CLI subprocesses only
 * (Claude Code, Codex, Gemini, generic terminal fallback), whereas this type
 * additionally includes the native OpenHands harness.
 */
export type AgentBrandIconKind = "openhands" | ACPProviderIcon;
interface AgentBrandIconProps {
    kind: AgentBrandIconKind;
    size?: number;
    className?: string;
    "data-testid"?: string;
}
export declare function AgentBrandIcon({ kind, size, className, "data-testid": testId, }: AgentBrandIconProps): import("react").JSX.Element;
export {};

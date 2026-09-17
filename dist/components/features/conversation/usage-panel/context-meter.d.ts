/** Context fill percentage above which the meter warns and the compact CTA becomes prominent. */
export declare const CONTEXT_FILL_WARNING_PERCENT = 70;
/** Context fill percentage above which the meter signals danger. */
export declare const CONTEXT_FILL_DANGER_PERCENT = 90;
export type ContextFillTone = "neutral" | "warning" | "danger";
export declare function getContextFillTone(usagePercentage: number): ContextFillTone;
interface ContextMeterProps {
    /** Tokens currently held in the agent's context (`per_turn_token`). */
    perTurnToken: number;
    /** Model context window size in tokens. */
    contextWindow: number;
}
/**
 * Context-fill progress bar: neutral below
 * {@link CONTEXT_FILL_WARNING_PERCENT}, amber above it, red above
 * {@link CONTEXT_FILL_DANGER_PERCENT}. Shows the raw token numbers underneath.
 */
export declare function ContextMeter({ perTurnToken, contextWindow, }: ContextMeterProps): import("react").JSX.Element;
export {};

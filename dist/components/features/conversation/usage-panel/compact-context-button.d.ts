interface CompactContextButtonProps {
    /** Current context fill percentage; past the warning threshold the button becomes a prominent CTA. */
    fillPercent: number;
    /** Optional live per-turn token count used as a fallback snapshot before compaction. */
    perTurnToken?: number;
}
/**
 * "Compact context" action: POSTs `/api/conversations/{id}/condense` with a
 * spinner while in flight and toasts for start, completion (with tokens
 * freed), and failure. Disabled while the agent is actively running (the
 * server would race the active step) and promoted to a primary
 * call-to-action once the context fill passes
 * {@link CONTEXT_FILL_WARNING_PERCENT}.
 */
export declare function CompactContextButton({ fillPercent, perTurnToken, }: CompactContextButtonProps): import("react").JSX.Element;
export {};

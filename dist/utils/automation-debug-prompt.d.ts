export interface AutomationDebugPromptInput {
    /** Human-readable automation name, if known. */
    automationName?: string;
    /** The automation's instructions (what it was set up to do). */
    automationPrompt?: string | null;
    /** Run-level error string; the durable fallback when stderr is unavailable. */
    errorDetail?: string | null;
    /** The run's captured stderr (the traceback shown in the Error tab). */
    stderr?: string | null;
    /** The failed run's id, included as a reference. */
    runId: string;
}
/**
 * Build the first message for a "Debug with OpenHands" conversation started
 * from a failed automation run. This is an instruction to the agent (not
 * user-facing UI copy), so it is intentionally in English and not localized.
 */
export declare function buildAutomationDebugPrompt({ automationName, automationPrompt, errorDetail, stderr, runId, }: AutomationDebugPromptInput): string;

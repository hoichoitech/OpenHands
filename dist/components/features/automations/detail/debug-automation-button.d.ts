import type { Automation, AutomationRun } from "#/types/automation";
interface DebugAutomationButtonProps {
    /** The failed run being debugged. */
    run: AutomationRun;
    /** The parent automation, used to add context to the debug prompt. */
    automation?: Automation;
    /** The run's stderr, already computed by the enclosing logs modal. */
    stderr: string;
}
/**
 * Starts a new OpenHands conversation seeded with the failed run's error
 * details so the agent begins debugging immediately. Kept as its own component
 * (rather than inlined into the logs modal) so `useCreateConversation` — which
 * requires a QueryClientProvider — only mounts for failed runs.
 */
export declare function DebugAutomationButton({ run, automation, stderr, }: DebugAutomationButtonProps): import("react").JSX.Element;
export {};

import { type Automation, type AutomationRun } from "#/types/automation";
interface RunLogsModalProps {
    /** Conversation that owns the bash command. */
    conversationId: string | null;
    /** Bash command id to fetch logs for. */
    bashCommandId: string | null;
    isOpen: boolean;
    onClose: () => void;
    /** The run these logs belong to; enables the debug action for failed runs. */
    run?: AutomationRun;
    /** The parent automation, used to add context to the debug prompt. */
    automation?: Automation;
}
export declare function RunLogsModal({ conversationId, bashCommandId, isOpen, onClose, run, automation, }: RunLogsModalProps): import("react").JSX.Element | null;
export {};

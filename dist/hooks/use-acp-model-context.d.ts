declare const AGENT_SETTINGS_PATH = "/settings/agents";
declare const LLM_SETTINGS_PATH = "/settings/llm";
export interface AcpModelContext {
    /** The active conversation runs an ACP agent. */
    isActiveAcpConversation: boolean;
    /**
     * No active conversation (home page) but the saved agent settings already
     * select an ACP agent — the next conversation created here inherits it, so
     * the model UI should reflect that now.
     */
    isHomeAcp: boolean;
    /** Either of the above: the model affordance should defer to the ACP picker. */
    isAcpContext: boolean;
    /** Where the model/settings link should navigate. */
    destinationPath: typeof AGENT_SETTINGS_PATH | typeof LLM_SETTINGS_PATH;
    /** Translated label for that link. */
    destinationLabel: string;
}
/**
 * Shared source of truth for "is this an ACP model context, and where does
 * the model affordance link?". The chat model affordance consumes this through
 * ``useChatInputModelState`` so inline and overflow surfaces can't drift on the
 * home-page-ACP rule or on the destination path/label.
 */
export declare function useAcpModelContext(): AcpModelContext;
export {};

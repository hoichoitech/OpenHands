import { AgentState } from "#/types/agent-state";
/**
 * Intercepts "/plan [task]" and "/code [task]" and toggles the conversation's
 * mode like the Code/Plan button, instead of sending them as a chat message.
 * A bare command only switches mode; "<task>" is sent immediately (mode is
 * set synchronously first, so the send routes to the new mode — see
 * conversation-websocket-context.tsx's `getState().conversationMode` read),
 * or becomes the new planner's `initial_message` if it doesn't exist yet.
 *
 * Swallows the command while the relevant agent is running, a planner is
 * being created, or the socket it needs is disconnected — "/code" gates on
 * the main socket alone (not the main+planning merged status) so a momentary
 * planning reconnect can't swallow it, and "/plan <task>" also checks the
 * planner's own running state so it can't be routed into one still mid-run.
 */
export declare const usePlanModeInterceptor: (conversationId: string | null | undefined, curAgentState: AgentState, onSubmit: (message: string) => void) => (message: string) => void;

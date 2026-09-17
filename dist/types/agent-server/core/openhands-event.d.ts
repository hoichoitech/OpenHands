import { ACPToolCallEvent, ActionEvent, MessageEvent, ObservationEvent, UserRejectObservation, AgentErrorEvent, SystemPromptEvent, CondensationEvent, CondensationRequestEvent, CondensationSummaryEvent, ConversationStateUpdateEvent, ConversationErrorEvent, HookExecutionEvent, PauseEvent, ServerErrorEvent, StreamingDeltaEvent } from "./events/index";
/**
 * Union type representing all possible OpenHands events.
 * This includes all main event types that can occur in the system.
 */
export type OpenHandsEvent = ActionEvent | MessageEvent | ObservationEvent | UserRejectObservation | AgentErrorEvent | SystemPromptEvent | ACPToolCallEvent | HookExecutionEvent | CondensationEvent | CondensationRequestEvent | CondensationSummaryEvent | ConversationStateUpdateEvent | ConversationErrorEvent | PauseEvent | ServerErrorEvent | StreamingDeltaEvent;

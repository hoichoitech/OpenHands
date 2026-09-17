import { OpenHandsEvent, ObservationEvent, BaseEvent, ExecuteBashAction, TerminalAction, ExecuteBashObservation, PlanningFileEditorObservation, TerminalObservation, BrowserObservation, BrowserNavigateAction, SwitchLLMObservation, CanvasUIAction, LaunchChildConversationAction } from "./core";
import { AgentErrorEvent } from "./core/events/observation-event";
import { MessageEvent } from "./core/events/message-event";
import { ActionEvent } from "./core/events/action-event";
import { ConversationStateUpdateEvent, ConversationStateUpdateEventAgentStatus, ConversationStateUpdateEventFullState, ConversationStateUpdateEventStats, ConversationStateUpdateEventGoal, ConversationErrorEvent, ServerErrorEvent } from "./core/events/conversation-state-event";
import { HookExecutionEvent } from "./core/events/hook-execution-event";
import { ACPToolCallEvent } from "./core/events/acp-tool-call-event";
import { StreamingDeltaEvent } from "./core/events/streaming-delta-event";
import { SystemPromptEvent } from "./core/events/system-event";
import { CondensationEvent } from "./core/events/condensation-event";
/**
 * Type guard to check if an unknown value is a valid BaseEvent
 * @param value - The value to check
 * @returns true if the value is a valid BaseEvent
 */
export declare function isBaseEvent(value: unknown): value is BaseEvent;
/**
 * Type guard function to check if an event is an observation event
 */
export declare const isObservationEvent: (event: OpenHandsEvent) => event is ObservationEvent;
/**
 * Type guard function to check if an event is an agent error event
 */
export declare const isAgentErrorEvent: (event: OpenHandsEvent) => event is AgentErrorEvent;
/**
 * Type guard function to check if an event is a message event (user or assistant)
 */
export declare const isMessageEvent: (event: OpenHandsEvent) => event is MessageEvent;
/**
 * Type guard function to check if an event is a user message event
 */
export declare const isUserMessageEvent: (event: OpenHandsEvent) => event is MessageEvent;
/**
 * Type guard function to check if an event is an action event
 */
export declare const isActionEvent: (event: OpenHandsEvent) => event is ActionEvent;
/**
 * Type guard function to check if an action event is an ExecuteBashAction
 */
export declare const isExecuteBashActionEvent: (event: OpenHandsEvent) => event is ActionEvent<ExecuteBashAction | TerminalAction>;
/**
 * Type guard function to check if an observation event contains terminal output
 */
export declare const isExecuteBashObservationEvent: (event: OpenHandsEvent) => event is ObservationEvent<ExecuteBashObservation | TerminalObservation>;
/**
 * Type guard function to check if an observation event is a PlanningFileEditorObservation
 */
export declare const isPlanningFileEditorObservationEvent: (event: OpenHandsEvent) => event is ObservationEvent<PlanningFileEditorObservation>;
/**
 * Type guard function to check if an observation event is a BrowserObservation
 */
export declare const isBrowserObservationEvent: (event: OpenHandsEvent) => event is ObservationEvent<BrowserObservation>;
/**
 * Type guard function to check if an observation event is a SwitchLLMObservation
 */
export declare const isSwitchLLMObservationEvent: (event: OpenHandsEvent) => event is ObservationEvent<SwitchLLMObservation>;
/**
 * Type guard function to check if an action event is a BrowserNavigateAction
 */
export declare const isBrowserNavigateActionEvent: (event: OpenHandsEvent) => event is ActionEvent<BrowserNavigateAction>;
/**
 * Type guard for Canvas UI tool ActionEvents.
 *
 * Discriminating on tool_name supports legacy CanvasUIAction events and the
 * SDK-generated action kind without leaking that generated name here.
 */
export declare const isCanvasUIActionEvent: (event: OpenHandsEvent) => event is ActionEvent<CanvasUIAction>;
/**
 * Type guard for launch-child-conversation tool ActionEvents.
 *
 * Discriminates on tool_name, like `isCanvasUIActionEvent`, so the
 * SDK-generated action kind stays contained in the constants module.
 */
export declare const isLaunchChildConversationActionEvent: (event: OpenHandsEvent) => event is ActionEvent<LaunchChildConversationAction>;
/**
 * Type guard function to check if an event is a system prompt event
 */
export declare const isSystemPromptEvent: (event: OpenHandsEvent) => event is SystemPromptEvent;
/**
 * Type guard function to check if an event is a conversation state update event
 */
export declare const isConversationStateUpdateEvent: (event: OpenHandsEvent) => event is ConversationStateUpdateEvent;
export declare const isFullStateConversationStateUpdateEvent: (event: ConversationStateUpdateEvent) => event is ConversationStateUpdateEventFullState;
export declare const isAgentStatusConversationStateUpdateEvent: (event: ConversationStateUpdateEvent) => event is ConversationStateUpdateEventAgentStatus;
export declare const isStatsConversationStateUpdateEvent: (event: ConversationStateUpdateEvent) => event is ConversationStateUpdateEventStats;
export declare const isGoalConversationStateUpdateEvent: (event: ConversationStateUpdateEvent) => event is ConversationStateUpdateEventGoal;
/**
 * Type guard function to check if an event is a conversation error event
 */
export declare const isConversationErrorEvent: (event: OpenHandsEvent) => event is ConversationErrorEvent;
/**
 * Type guard function to check if an event is a server error event
 */
export declare const isServerErrorEvent: (event: OpenHandsEvent) => event is ServerErrorEvent;
/**
 * Type guard function to check if an event is a displayable error event
 * (ConversationErrorEvent or ServerErrorEvent) - both should show as error banners
 */
export declare const isDisplayableErrorEvent: (event: OpenHandsEvent) => boolean;
/**
 * Type guard function to check if an event is a hook execution event
 */
export declare const isHookExecutionEvent: (event: OpenHandsEvent) => event is HookExecutionEvent;
/**
 * Type guard function to check if an event is an ACP tool call event
 */
export declare const isACPToolCallEvent: (event: OpenHandsEvent) => event is ACPToolCallEvent;
export declare const isStreamingDeltaEvent: (event: OpenHandsEvent) => event is StreamingDeltaEvent;
/**
 * Type guard for condensation completion events (history was compacted).
 */
export declare const isCondensationEvent: (event: OpenHandsEvent) => event is CondensationEvent;
/**
 * Type guard to check if an event is an agent-server OpenHandsEvent.
 * Uses isBaseEvent to validate the complete event structure.
 */
export declare function isAgentServerEvent(event: unknown): event is OpenHandsEvent;

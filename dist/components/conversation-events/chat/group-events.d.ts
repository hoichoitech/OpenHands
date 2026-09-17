import { ActionEvent, OpenHandsEvent } from "#/types/agent-server/core";
/** Minimum run-length before consecutive actions get folded into a single
 *  collapsible group. Even pairs are folded so the chat scroll stays compact
 *  when the agent fires off back-to-back tool calls. */
export declare const EVENT_GROUP_MIN_SIZE = 2;
/**
 * Returns true if the given event is one of the action / observation cards
 * that we want to fold into an `EventGroup` when several appear in a row.
 *
 * Events that have their own dedicated rendering (FinishAction, ThinkAction,
 * HookExecution, AgentError, MessageEvent, PlanPreview, markdown file
 * artifacts, TaskTracker) are treated as group breakers.
 */
export declare const isGroupableEvent: (event: OpenHandsEvent, correspondingAction?: ActionEvent) => boolean;
export type RenderedItem = {
    kind: "single";
    event: OpenHandsEvent;
    index: number;
} | {
    kind: "thought";
    action: ActionEvent;
    index: number;
} | {
    kind: "group";
    events: OpenHandsEvent[];
    startIndex: number;
};
/**
 * Walk a list of UI events and bucket consecutive groupable events into
 * `group` items. Anything that breaks the run, or runs shorter than
 * `EVENT_GROUP_MIN_SIZE`, is emitted as `single` items so they keep rendering
 * the way they always have.
 *
 * Whenever a groupable event carries an agent thought (either an
 * `ActionEvent.thought` or the corresponding action of an
 * `ObservationEvent`), the thought is hoisted out as its own `thought`
 * `RenderedItem`, the current run is flushed, and a new run is started with
 * the event itself. This keeps reasoning text in the main message stream
 * instead of buried inside a collapsed action group.
 *
 * `allEvents` should be the full event history so observations can find
 * their matching action; if omitted, it defaults to `events`.
 */
export declare const groupEvents: (events: OpenHandsEvent[], minSize?: number, allEvents?: OpenHandsEvent[]) => RenderedItem[];

import { ActionEvent, OpenHandsEvent } from "#/types/agent-server/core";
/**
 * Returns the displayable thought text of an `ActionEvent`, or an empty
 * string if the event has no usable thought content.
 *
 * Mirrors the logic used by `ThoughtEventMessage` so callers stay in sync
 * with what gets rendered.
 */
export declare const getActionThoughtText: (action: ActionEvent) => string;
/**
 * Extracts extended thinking / reasoning content from an `ActionEvent`.
 *
 * Prefers `reasoning_content` (a plain string produced by many reasoning
 * models). Falls back to the text from `thinking_blocks` (Anthropic
 * extended thinking). Returns an empty string when neither is available.
 */
export declare const getReasoningContent: (action: ActionEvent) => string;
export declare const hasNonEmptyThought: (action: ActionEvent) => boolean;
/**
 * Splits a leading `<think>…</think>` reasoning block out of assistant content
 * so it renders in the collapsible thinking section, not the message bubble.
 * Some models stream reasoning inline instead of via `reasoning_content`.
 *
 * Conservative to avoid mangling normal messages: only a `<think>` at the very
 * start is touched (later occurrences, e.g. quoted in docs, stay verbatim),
 * only the first block is peeled, and an unclosed leading `<think>` is reasoning
 * only while `streaming` — in a finalized message it's literal output.
 */
export declare const splitInlineThink: (content: string, options?: {
    streaming?: boolean;
}) => {
    reasoning: string;
    message: string;
};
/**
 * Find the `ActionEvent` whose thought should be rendered alongside the
 * given UI event. For an `ActionEvent` the thought belongs to itself; for
 * an `ObservationEvent` we look up the matching action in `allEvents`.
 *
 * `ThinkAction` is intentionally excluded because its thought IS the
 * action body and is rendered through a separate codepath.
 */
export declare const getThoughtSourceAction: (event: OpenHandsEvent, allEvents: OpenHandsEvent[]) => ActionEvent | null;

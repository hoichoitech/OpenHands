import { OpenHandsEvent } from "#/types/agent-server/core";
export declare function recordModelSwitchMessage(conversationId: string, profileName: string, anchorEventId?: string | null): void;
/**
 * The active-profile stamp for a conversation: the optimistic in-memory entry
 * (read first by the chat-input pill) plus the persisted per-conversation
 * `active_profile` metadata (survives reloads, round-tripped onto the
 * conversation by the agent-server adapter — issue #1082). Every path that
 * learns of a successful switch — the user `/model` mutation, the live
 * WebSocket handler, and the history seed below — must write through this one
 * function so the live and reload paths can't drift.
 *
 * `stampedAt` is persisted alongside the profile so the history seed can tell
 * a stale observation apart from a newer manual switch (see below). The live
 * WebSocket handler passes the observation's own (server) timestamp; the user
 * `/model` mutation has no event and defaults to the client clock.
 */
export declare function stampActiveLlmProfile(conversationId: string, profileName: string, stampedAt?: string): void;
/**
 * Rebuilds the inline "Switched to" messages for a conversation from its loaded
 * history.
 *
 * The live messages live in an in-memory store written only by the WebSocket
 * handler and the user `/model` action. Existing conversations load via REST
 * history, which bypasses that handler, so without this replay no past agent
 * switches would render after a reload (the SwitchLLMObservation events are
 * also hidden as cards by `shouldRenderEvent`).
 *
 * `uiEvents` MUST be the event store's `uiEvents` (the same list the renderer
 * and the live `getLastRenderableEventId()` use) — NOT the raw history. The
 * renderer anchors a message after an event only if that event's id is in
 * `uiEvents.filter(shouldRenderEvent)`, and `uiEvents` differs from raw history:
 * actions are replaced by their observations and `ThinkObservation` /
 * `FinishObservation` are dropped. Anchoring off raw history would point at ids
 * that never mount (e.g. a dropped `ThinkObservation`), orphaning the message.
 *
 * Each successful switch is anchored to the last renderable event before it,
 * matching where the live handler would have placed it. Idempotent: entries are
 * keyed by the observation event id, so re-seeding on every reload is a no-op.
 *
 * Also re-derives the active-profile stamp from the latest successful
 * SwitchLLM observation. The stamp is otherwise written only by the live
 * WebSocket handler and the user `/model` mutation, so a switch that fired
 * while the socket was down would never be stamped — after a reload the pill
 * showed the stale profile while the panel showed the server's true model.
 *
 * The re-stamp is gated on the stored `stamped_at`: manual `/model` switches
 * go through REST and leave NO observation in history, so an unconditional
 * re-stamp would roll a newer manual switch back to an older tool switch.
 * The seed therefore only stamps when there is no existing stamp, the stamp
 * predates this field (legacy — treated as older than any observation so it
 * still gets repaired), or the latest observation is strictly newer.
 * Observation timestamps are server-generated while `stamped_at` from the
 * mutation path is client-generated, so the cross-clock comparison is a
 * heuristic — acceptable here since the alternative is a silent rollback.
 */
export declare function seedModelSwitchesFromHistory(conversationId: string, uiEvents: OpenHandsEvent[]): void;

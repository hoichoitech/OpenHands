import React from "react";
import { OpenHandsEvent } from "#/types/agent-server/core";
interface EventGroupProps {
    /** The events represented by this group. Used to compute the summary. */
    events: OpenHandsEvent[];
    /**
     * Full event history. Used to resolve the action that produced the latest
     * observation in the group so the summary title matches what the individual
     * card would show (e.g. "Editing path/to/file"). Falls back to `events` when
     * omitted.
     */
    allEvents?: OpenHandsEvent[];
    /**
     * `true` once an event outside this group has been emitted after it, so the
     * group is no longer the "live" tail of the chat. While `false` (the
     * default), the group keeps showing the most recent action's title as its
     * prominent summary, with the count of completed actions shown subtly on
     * the right.
     */
    isFinalized?: boolean;
    /** The fully-rendered event messages to show when the group is expanded. */
    children: React.ReactNode;
}
/**
 * Collapsible container that wraps a run of consecutive agent action/observation
 * events into a single summary card.
 *
 * Collapsed, while the group is still the live tail of the chat
 * (`isFinalized=false`):
 *   - Left (prominent): the title of the most recent action/observation in
 *     the group — i.e. either the action currently in flight, or the latest
 *     completed step.
 *   - Right (subdued):  "{completed}/{total} actions completed" while at
 *     least one action is still pending (with a spinner), otherwise
 *     "{count} actions completed" followed by a success check.
 *
 * Collapsed, after the group has been "moved past" (`isFinalized=true`):
 *   - "{count} actions completed" is promoted to the prominent foreground
 *     style and the count is the only thing shown next to the chevron.
 *
 * Expanded:
 *   - Renders the children verbatim, so each individual action/observation can
 *     still be expanded the way it was before grouping.
 */
export declare function EventGroup({ events, allEvents, isFinalized, children, }: EventGroupProps): React.JSX.Element | null;
export {};

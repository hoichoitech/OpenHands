import React from "react";
interface ConversationTagChipsProps {
    tags: Array<[string, string]>;
}
/**
 * Single-row tag chips for a conversation card. Chip labels are value-only
 * (bare tags with an empty value show the key; the full ``key: value`` pair
 * lives in the tooltip); chips that do not fit fold behind a ``+N``
 * button that opens a key/value popover.
 *
 * The overflow popover is portaled with ``position: fixed`` so it is not
 * clipped by the chip row's ``overflow-hidden`` or the sidebar scroller.
 */
export declare function ConversationTagChips({ tags }: ConversationTagChipsProps): React.JSX.Element | null;
export {};

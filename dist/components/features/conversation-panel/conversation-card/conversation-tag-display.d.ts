/**
 * Display helpers for conversation tag chips. Pure (no React) so fit/truncate
 * behavior can be unit-tested without laying out the sidebar card.
 */
import { I18nKey } from "#/i18n/declaration";
/** Max characters shown on a chip before hard truncation with an ellipsis. */
export declare const TAG_CHIP_VALUE_MAX_LENGTH = 14;
/** Horizontal gap between chips (matches Tailwind ``gap-1`` = 4px). */
export declare const TAG_CHIP_GAP_PX = 4;
/**
 * Reserved width for the ``+N`` overflow control when deciding how many chips
 * fit on one row. Slightly generous so the button never wraps under a chip.
 */
export declare const TAG_CHIP_OVERFLOW_WIDTH_PX = 36;
/** Known tag keys that already have a dedicated hovercard label. */
export type ConversationTagLabelKind = "git" | "repo" | "branch" | "workspace" | "app_mode" | "work_tools" | "work_wsid" | "other";
/**
 * Map a server tag key to a hovercard label kind. ``archiveworkspacepath`` is
 * treated as "workspace" — the sandbox working directory for the conversation.
 * ACM / Work stamps (``Appmode``, ``Worktools``, ``Workwsid``) get dedicated
 * kinds so chips and hovercards show friendly labels instead of the wire key.
 *
 * ``origin`` / ``source`` deliberately stay "other" (humanized to "Origin" /
 * "Source"): they name where a conversation came from — Slack, an API call, an
 * automation — which is not a git fact. Only ``git_provider`` is "Git".
 */
export declare function getConversationTagLabelKind(key: string): ConversationTagLabelKind;
/**
 * Soften unknown snake_case / kebab-case keys for tooltips and overflow rows
 * (``selected_branch`` is mapped above; this covers free-form keys like
 * ``env`` → ``Env``).
 */
export declare function humanizeConversationTagKey(key: string): string;
/**
 * Localized label for a tag key (chip tooltip, overflow popover, hovercard).
 * Known keys use the preview copy; everything else is humanized.
 */
export declare function getConversationTagLabel(key: string, t: (key: I18nKey) => string): string;
/** ``Branch: main`` — used by chip ``title`` tooltips. Bare tags (empty
 * value) show the label alone, no dangling colon. */
export declare function formatConversationTagTooltip(key: string, value: string, t: (key: I18nKey) => string): string;
/**
 * Hard-truncate a tag value for the chip label. The full ``key: value`` string
 * stays available via tooltip / overflow popover.
 *
 * Measures and slices by code point rather than UTF-16 code unit: values
 * stamped by Slack / Discord automations carry emoji, and cutting between the
 * halves of a surrogate pair leaves a lone surrogate that browsers draw as a
 * replacement glyph.
 */
export declare function truncateTagChipValue(value: string, maxLength?: number): string;
/**
 * How many chips fit in ``containerWidth`` while keeping a single nowrap row
 * and reserving space for a ``+N`` overflow control when any chips would hide.
 *
 * Returns ``widths.length`` when ``containerWidth <= 0`` (not laid out yet /
 * jsdom) so callers can show every chip until a real measurement arrives.
 * Returns ``0`` when the row is too narrow for even one chip + overflow — the
 * UI then shows only the ``+N`` control with the full list in the popover.
 */
export declare function computeVisibleTagChipCount(widths: number[], containerWidth: number, options?: {
    gapPx?: number;
    overflowWidthPx?: number;
}): number;

import { I18nKey } from "#/i18n/declaration";
import { AutomationRunStatus } from "#/types/automation";
/**
 * Whether a run's phase is worth showing at all: it answers "what is it doing
 * now" or "where did it stop", so a finished, cancelled or skipped run has
 * nothing to add. Shared by every surface, so one run cannot show a phase on
 * one screen and hide it on another.
 */
export declare function shouldShowRunPhase(status: AutomationRunStatus | null | undefined): boolean;
/**
 * Whether the phase's age is worth showing. Only for a run still in flight:
 * the age exists to separate a moving run from a stalled one, and a run that
 * has failed is neither — its phase is the place it stopped. Left in, the age
 * of an old failure degrades to an absolute date (`formatRelativeTime` gives
 * up past a week), which reads as a second timestamp beside the one the row
 * already shows.
 */
export declare function shouldShowRunPhaseAge(status: AutomationRunStatus | null | undefined): boolean;
interface RunPhaseFields {
    /** `AutomationRun.status` — decides whether the age is meaningful. */
    status: AutomationRunStatus | null | undefined;
    /** `AutomationRun.phase_code` — `null`/absent means no phase reported. */
    code: string | null | undefined;
    /** `AutomationRun.phase_label` — free-form author text, not interface copy. */
    label: string | null | undefined;
    /** `AutomationRun.phase_updated_at` — when this phase was last written. */
    updatedAt?: string | null;
}
interface RunPhaseProps extends RunPhaseFields {
    /** More width before clipping, for rows far wider than a card. */
    wide?: boolean;
}
/**
 * The one place a stored phase becomes text, so a run cannot read one way on
 * a card and another way in that card's own tooltip. An absent code counts as
 * unrecognized rather than as an absent phase: the service accepts a phase
 * carrying only a label, and dropping those would hide a real phase.
 *
 * `code` and `label` are independently optional in the service's contract, so
 * the last resort is the raw code — a code-only phase is a real phase and
 * must reach the screen. It is shown as stored rather than prettified: the
 * code is data like the label, and turning `poll_prs` into "Poll prs" would
 * invent English-shaped copy no automation author wrote.
 *
 * Both fields are author-supplied, which is why the lookup is an own-property
 * check and both are trimmed. A code of `toString` would otherwise resolve to
 * `Object.prototype.toString` and be handed to `t()`, and the service stores
 * a whitespace-only field as sent — it rejects only a phase blank on *both*.
 */
export declare function resolveRunPhaseText(t: (key: I18nKey) => string, code: string | null | undefined, label: string | null | undefined): string | null;
/**
 * How long the run has been in this phase, as localized relative time.
 *
 * This is the half of the phase that separates progress from a stall: the
 * phase text alone says a run is "Running agent", and only its age says
 * whether it entered that phase seconds ago or forty minutes ago. Returns
 * `null` when the service reported no usable timestamp — an older service
 * omits the field entirely, and an unset datetime arrives as the epoch — so
 * an age nobody can compute never surfaces as "Invalid Date" or "Jan 1, 1970".
 */
export declare function formatRunPhaseAge(updatedAt: string | null | undefined, locale: string, t: (key: I18nKey, options?: Record<string, unknown>) => string): string | null;
/**
 * The resolved phase of a run, or `null` when it has none worth showing.
 * Every surface goes through this — the clipped row below, the home
 * hovercard's wrapping one — so they cannot drift into resolving a phase, or
 * deciding to show its age, on their own terms.
 */
export declare function useRunPhase({ status, code, label, updatedAt, }: RunPhaseFields): {
    text: string;
    age: string | null;
} | null;
/**
 * A run's current or last-known phase and how long it has held it, clipped to
 * the room the surface has with the full text one hover away — author-supplied
 * labels routinely outgrow any row. The label is data, not interface copy, so
 * it is rendered as-is: passing it through `t()` would be wrong, it is not a
 * key. The age sits outside the clipped text so a long label can never push it
 * out of sight — it is the part that stays legible when everything else is cut.
 *
 * The text stays in the accessibility tree rather than hiding behind an
 * accessible name on a focusable wrapper. Every surface nests this inside a
 * link — the activity log's `<a>`, the cards' `role="link"` — where a tab
 * stop is invalid interactive nesting, and Enter on it bubbled to the card
 * and navigated the user away from the text they were trying to read.
 * Truncation is CSS only, so the full label is already in the DOM and reads
 * in full; the tooltip is the sighted mouse user's route to it.
 */
export declare function RunPhase({ status, code, label, updatedAt, wide, }: RunPhaseProps): import("react").JSX.Element | null;
export {};

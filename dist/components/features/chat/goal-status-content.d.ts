import { GoalStatus } from "#/types/agent-server/core/events/conversation-state-event";
/**
 * Goal-status row: objective, round count, status word, the judge's score, the
 * judge's "missing" note (expandable), and an indicator — spinner while running,
 * green check when complete, muted cross when it ends without completing
 * (capped/interrupted).
 *
 * Also exposes the loop controls at the end of the row: a Stop button while the
 * loop is active and a Resume button once it is interrupted. Stop both cancels
 * the loop (`stopGoal`) and interrupts the conversation, because the backend's
 * stop deliberately leaves the in-flight agent turn running.
 *
 * Used in two places: the live bottom banner (GoalStatusBanner) while a loop is
 * active, and inline in the message timeline for the terminal status, so a
 * finished `/goal` settles into the conversation. Because the inline copy mounts
 * fresh once terminal, `initiallyExpanded={!active}` expands the note there
 * without any re-mount trickery.
 */
export declare function GoalStatusContent({ status }: {
    status: GoalStatus;
}): import("react").JSX.Element;

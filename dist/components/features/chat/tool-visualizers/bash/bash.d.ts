/**
 * Bash / terminal visualizer. The action card shows the command (plus a risk
 * warning for HIGH/MEDIUM actions); the observation card shows the command and
 * its output (with an exit-code badge). Both the command and the output carry a
 * hover copy button. Covers both the `execute_bash` and `terminal` tools, which
 * carry the same `command` / `content` / `exit_code` fields.
 */
export declare const bashVisualizer: import("../define").RegisteredVisualizer;

import { ACPToolCallEvent } from "#/types/agent-server/core/events/acp-tool-call-event";
/**
 * Pick the translation key used for the ACP tool call title row. Mirrors
 * ACTION_MESSAGE$RUN / $EDIT / $READ etc.
 */
export declare const getACPToolCallTitleKey: (event: ACPToolCallEvent) => string;
/**
 * Strip a leading verb from ``event.title`` that would duplicate the
 * verb baked into the i18n template (see ``REDUNDANT_TITLE_PREFIXES``).
 *
 * The match is anchored, case-sensitive, and requires the prefix to be
 * followed by whitespace so a token like ``"Reads"`` (an actual verb
 * elsewhere in the title) is left alone. If no prefix matches, the title
 * is returned verbatim.
 */
export declare const stripRedundantTitlePrefix: (event: ACPToolCallEvent) => string;
/**
 * Build the markdown-flavored body for an ACP tool call card. Mirrors the
 * shape of ``getTerminalObservationContent`` (``Command:`` + ``Output:``
 * fenced blocks) so the rendered card lines up with regular OpenHands
 * observations.
 *
 * For ``tool_kind === "execute"`` we surface ``raw_input.command`` as the
 * command line; for others we fall back to a pretty-printed JSON dump of
 * the input. Output is always dumped as a fenced block, with the same
 * "(no output)" fallback copy used by the bash observation renderer.
 */
export declare const getACPToolCallContent: (event: ACPToolCallEvent) => string;

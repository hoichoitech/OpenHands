/**
 * Parse a single-string command into argv tokens for ``acp_command``.
 *
 * Used by the Settings → Agent textarea — the user types one human-readable
 * command (e.g. ``bash -c "echo hello world"``) and we convert it into the
 * ``string[]`` shape that the agent-server's ``ACPAgent.acp_command``
 * expects. The agent-server passes that array straight to
 * ``subprocess.create_subprocess_exec``; no shell is involved on the spawn
 * side, so this parser only needs to handle argv-style word splitting
 * with quote/escape support — *not* shell metasyntax.
 *
 * Why a custom tokenizer and **not** ``shell-quote.parse``:
 *
 * ``shell-quote.parse`` treats ``?``, ``*``, ``$VAR``, redirects, and
 * comments as shell syntax and emits non-string AST nodes for them.
 * Filtering to strings would silently drop entire argv tokens. The
 * concrete data-corruption case is a URL with a query string —
 *
 *     node acp.js --endpoint https://example.com/acp?tenant=abc
 *
 * ``shell-quote`` reads ``?tenant=abc`` as a glob pattern and returns
 * ``["node","acp.js","--endpoint",{op:"glob",…}]``, so the saved
 * ``acp_command`` becomes ``["node","acp.js","--endpoint"]`` — the URL
 * vanishes. The agent-server then spawns a broken command and the user
 * gets a confusing runtime error far from the configuration UI.
 *
 * The replacement tokenizer treats every non-whitespace, non-quote
 * character as part of the current token: ``?``, ``*``, ``$``, ``|``,
 * ``>``, ``#``, backticks all round-trip verbatim. Shell-only constructs
 * (pipes, redirects, env-var expansion, command substitution) would
 * land as literal argv entries — which is what the user typed and what
 * ``subprocess.create_subprocess_exec`` will see. That's correct: a
 * user who types ``foo | bar`` into the Settings → Agent textarea is
 * configuring a literal command, not a shell pipeline; ``foo`` doesn't
 * actually pipe into ``bar``, but neither does it silently disappear.
 *
 * Quoting rules supported:
 *   - whitespace separates tokens
 *   - single quotes: literal until the next ``'`` (no escapes inside,
 *     matching POSIX shell)
 *   - double quotes: literal until the next ``"`` (with ``\\"`` and
 *     ``\\\\`` honored as escapes; no $-expansion)
 *   - backslash outside quotes: escapes the next character (whitespace,
 *     quote, or anything else — turns it into a literal)
 *   - explicit empty quoted segments (``""`` / ``''``) produce an
 *     empty-string token, matching the round-trip rule in
 *     ``formatCommand``
 *
 * Unterminated quotes are tolerated: the current token closes at EOF
 * with whatever was accumulated. A throw here would crash the
 * Settings → Agent page mid-render; the Save button is already gated
 * on a non-empty argv so a recoverable miss can't be silently saved
 * either way.
 */
export declare function parseCommand(value: string): string[];
/**
 * Render a ``string[]`` argv back into a single string the textarea
 * can display. Tokens that *would* need shell quoting (whitespace,
 * quotes, redirects, …) go through ``shell-quote.quote`` for correct
 * escaping; tokens that are already shell-safe (the overwhelming
 * majority of package names and CLI flags) round-trip verbatim. The
 * output remains a valid input to {@link parseCommand}.
 */
export declare function formatCommand(command: readonly string[]): string;

/**
 * Strip workspace prefix from file paths
 * Removes /workspace/ and the next directory level from paths
 *
 * @param path - The file path to process
 * @returns The path with workspace prefix removed
 *
 * @example
 * stripWorkspacePrefix("/workspace/repo/src/file.py") // returns "src/file.py"
 * stripWorkspacePrefix("/workspace/my-project/components/Button.tsx") // returns "components/Button.tsx"
 */
export declare const stripWorkspacePrefix: (path: string) => string;
/**
 * Convert an agent/chat file path into a workspace-relative path for the Files
 * drawer / workspace file APIs.
 *
 * Strips editor `:line` / `:start-end` suffixes, then removes the conversation
 * working directory (or `DEFAULT_WORKING_DIR`) when present as a prefix.
 * Nested roots must match `workingDir` first — the generic `/workspace/<name>/`
 * heuristic is only a fallback when no root matches.
 */
export declare const toFilesTabPath: (path: string, workingDir?: string | null) => string;
/**
 * Conservative check for inline chat tokens that should open in Files.
 * Rejects URLs, MIME types, versions, and dotted identifiers like `console.log`.
 */
export declare const looksLikeWorkspaceFilePath: (text: string) => boolean;
/**
 * Returns the basename (top-level folder/file name) from a path string,
 * tolerating POSIX and Windows separators and trailing slashes.
 */
export declare const getPathBasename: (path: string) => string;

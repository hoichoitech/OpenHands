/**
 * Resolve a path (and optionally a MIME type) to a Prism grammar name.
 * Returns `null` when no grammar matches — the caller should then render
 * the source as plain text rather than feeding "unknown" to Prism (which
 * still produces an extra wrapper with no highlighting).
 */
export declare function getPrismLanguageForFile(path: string, mimeType?: string): string | null;

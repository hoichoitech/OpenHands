interface HighlightedSourceViewProps {
    path: string;
    text: string;
    mimeType?: string;
}
/**
 * Renders the raw bytes of a workspace text file with Prism syntax
 * highlighting. Used both in:
 *   - Rich mode for actual source files (.ts, .py, .yaml, …) — there is
 *     no "rich" rendering of source code, so highlighted source IS the
 *     rich view.
 *   - Plain mode for source code AND for the source form of markdown /
 *     HTML files (so users can inspect the markup behind a rich preview).
 *
 * When we don't have a Prism grammar for the file we fall through to a
 * plain `<pre>` so the bytes still show. The wrapper styling matches the
 * right-pane background so the highlighted block reads as part of the
 * surrounding chrome instead of a floating card.
 */
export declare function HighlightedSourceView({ path, text, mimeType, }: HighlightedSourceViewProps): import("react").JSX.Element;
export {};

import React from "react";
interface OutputPaneProps {
    output: string;
    /** Process exit code, when known. `0` and `-1` (timeout) are not badged —
     *  the card's success indicator already conveys those. */
    exitCode?: number | null;
    /** Show a hover copy button that yields the full, untruncated output.
     *  Defaults to true; suppressed automatically when there is no output. */
    copy?: boolean;
}
/**
 * Monospace output block for command results, with a failure exit-code badge
 * and an optional hover copy button. Long content is truncated in the display
 * to the same limit the markdown path uses, with an inline control to reveal
 * the full output. The copy button always yields the untruncated output.
 */
export declare function OutputPane({ output, exitCode, copy }: OutputPaneProps): React.JSX.Element;
export {};

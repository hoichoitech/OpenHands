import React from "react";
interface CodeBlockProps {
    code: string;
    /** Prism language hint (e.g. "bash", "python"). */
    language?: string;
    /** Show a copy button on hover. Defaults to true. */
    copy?: boolean;
    /** Text shown when code is empty. */
    placeholder?: string;
    /** Let truncated content be expanded inline. Defaults to false. */
    expandable?: boolean;
    /** Wrap long lines instead of horizontal-only scrolling. Defaults to false. */
    wrapLongLines?: boolean;
}
/**
 * Syntax-highlighted code block with an optional hover copy button. Long
 * content is truncated to the same limit the markdown path uses, optionally
 * with an inline expand control. The copy button always yields the full,
 * untruncated text.
 */
export declare function CodeBlock({ code, language, copy, placeholder, expandable, wrapLongLines, }: CodeBlockProps): React.JSX.Element;
export {};

import { Components } from "react-markdown";
import type { Schema } from "hast-util-sanitize";
export declare const MARKDOWN_SANITIZE_SCHEMA: Schema;
interface MarkdownRendererProps {
    /**
     * The markdown content to render. Can be passed as children (string) or content prop.
     */
    children?: string;
    content?: string;
    /**
     * Additional or override components for markdown elements.
     * Default components (code, ul, ol) are always included unless overridden.
     */
    components?: Partial<Components>;
    /**
     * Whether to include standard components (anchor, paragraph).
     * Defaults to false.
     */
    includeStandard?: boolean;
    /**
     * Whether to include heading components (h1-h6).
     * Defaults to false.
     */
    includeHeadings?: boolean;
    /**
     * Whether to parse and render inline HTML embedded in the markdown
     * source. When `true`, raw HTML is parsed via `rehype-raw` and then
     * sanitized via `rehype-sanitize` with a schema that strips scripts,
     * event handlers, and dangerous URL schemes. Defaults to `true` — the
     * sanitizer makes this safe by construction, and most markdown
     * authoring relies on at least some inline HTML (badges, details
     * blocks, anchor targets, etc.).
     */
    allowHtml?: boolean;
}
/**
 * A reusable Markdown renderer component that provides consistent
 * markdown rendering across the application.
 *
 * By default, includes:
 * - code, ul, ol components
 * - remarkGfm and remarkBreaks plugins
 *
 * Can be extended with:
 * - includeStandard: adds anchor and paragraph components
 * - includeHeadings: adds h1-h6 heading components
 * - components prop: allows custom overrides or additional components
 */
export declare function MarkdownRenderer({ children, content, components: customComponents, includeStandard, includeHeadings, allowHtml, }: MarkdownRendererProps): import("react").JSX.Element;
export {};

interface ParsedSkillContent {
    matchInfo: string | null;
    filePath: string | null;
    body: string;
}
/**
 * Parses skill content into metadata (keyword match info, file path)
 * and the actual skill body.
 */
export declare function parseSkillContent(content: string): ParsedSkillContent;
/**
 * Wraps `<important>...</important>` tags in the content with bold markers
 * so the markdown renderer displays them as bold text.
 */
export declare function styleImportantTags(text: string): string;
interface SkillItemExpandedProps {
    content: string;
}
export declare function SkillItemExpanded({ content }: SkillItemExpandedProps): import("react").JSX.Element;
export {};

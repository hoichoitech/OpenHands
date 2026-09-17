import React from "react";
import { SlashCommandItem } from "#/hooks/chat/use-slash-command";
/**
 * Strip common inline Markdown syntax so descriptions render as plain text.
 * Handles: bold, italic, inline code, links, and images.
 */
export declare function stripMarkdown(text: string): string;
/**
 * Extract a short description from skill content.
 * Tries YAML frontmatter "description:" first, then falls back
 * to the first meaningful line after headers and frontmatter.
 * Returns plain text with Markdown formatting stripped.
 */
export declare function getSkillDescription(content: string): string | null;
interface SlashCommandMenuProps {
    items: SlashCommandItem[];
    selectedIndex: number;
    onSelect: (item: SlashCommandItem) => void;
}
export declare function SlashCommandMenu({ items, selectedIndex, onSelect, }: SlashCommandMenuProps): React.JSX.Element | null;
export {};

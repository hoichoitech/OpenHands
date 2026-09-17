import { SkillInfo } from "#/types/settings";
export type SlashCommandSkill = SkillInfo;
export interface SlashCommandItem {
    skill: SlashCommandSkill;
    /** The slash command string, e.g. "/random-number" */
    command: string;
}
/**
 * Hook for managing slash command autocomplete in the chat input.
 * Detects when user types "/" and provides filtered skill suggestions.
 * Only skills with explicit "/" triggers (TaskTrigger) appear in the menu.
 */
export declare const useSlashCommand: (chatInputRef: React.RefObject<HTMLDivElement | null>) => {
    isMenuOpen: boolean;
    filteredItems: SlashCommandItem[];
    selectedIndex: number;
    updateSlashMenu: () => void;
    selectItem: (item: SlashCommandItem) => void;
    handleSlashKeyDown: (e: React.KeyboardEvent) => boolean;
    closeMenu: () => void;
};

interface SkillsToolbarProps {
    search: string;
    onSearchChange: (value: string) => void;
    activeFilterCount: number;
    onOpenFilters: () => void;
}
export declare function SkillsToolbar({ search, onSearchChange, activeFilterCount, onOpenFilters, }: SkillsToolbarProps): import("react").JSX.Element;
export {};

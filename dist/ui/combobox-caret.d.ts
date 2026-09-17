export declare function ComboboxCaretIcon({ className }: {
    className?: string;
}): import("react").JSX.Element;
/** Matches HeroUI Autocomplete selectorButton styling. */
export declare const comboboxCaretButtonClassName: string;
/** HeroUI Autocomplete selectorButton slot — keep only chevron rotation animated. */
export declare const heroUiAutocompleteSelectorButtonClassName: string;
interface ComboboxCaretButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isOpen?: boolean;
}
export declare function ComboboxCaretButton({ isOpen, className, disabled, children, ...props }: ComboboxCaretButtonProps): import("react").JSX.Element;
/** Inline caret for buttons where only the icon rotates, not the whole control. */
export declare function ComboboxCaretInline({ isOpen, className, }: {
    isOpen?: boolean;
    className?: string;
}): import("react").JSX.Element;
export {};

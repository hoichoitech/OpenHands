import { type VariantProps } from "class-variance-authority";
/** 12px slot (4px + 1px line + 4px at default rem) inside `px-1` menus/popovers. */
export declare const MENU_DIVIDER_VERTICAL_CLASS = "h-3";
declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | null | undefined;
    color?: "light" | null | undefined;
    size?: "thin" | null | undefined;
    inset?: "none" | "menu" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface DividerProps extends VariantProps<typeof dividerVariants> {
    className?: string;
    testId?: string;
}
export declare function Divider({ orientation, color, size, inset, className, testId, }: DividerProps): import("react").JSX.Element;
export {};

import React from "react";
import { type VariantProps } from "class-variance-authority";
declare const contextMenuVariants: (props?: ({
    theme?: "default" | "popover" | "naked" | null | undefined;
    size?: "default" | "compact" | null | undefined;
    layout?: "vertical" | null | undefined;
    position?: "none" | "bottom" | "top" | null | undefined;
    spacing?: "none" | "default" | null | undefined;
    alignment?: "none" | "left" | "right" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface ContextMenuProps {
    ref?: React.RefObject<HTMLUListElement | null>;
    testId?: string;
    children: React.ReactNode;
    className?: React.HTMLAttributes<HTMLUListElement>["className"];
    style?: React.CSSProperties;
    onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
    theme?: VariantProps<typeof contextMenuVariants>["theme"];
    size?: VariantProps<typeof contextMenuVariants>["size"];
    layout?: VariantProps<typeof contextMenuVariants>["layout"];
    position?: VariantProps<typeof contextMenuVariants>["position"];
    spacing?: VariantProps<typeof contextMenuVariants>["spacing"];
    alignment?: VariantProps<typeof contextMenuVariants>["alignment"];
}
export declare function ContextMenu({ testId, children, className, style, onKeyDown, ref, theme, size, layout, position, spacing, alignment, }: ContextMenuProps): React.JSX.Element;
export {};

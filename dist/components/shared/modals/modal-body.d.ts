import React from "react";
/** Shared modal content widths (sm / md / lg / xl). */
export type ModalWidth = "sm" | "md" | "lg" | "xl";
export declare const MODAL_WIDTH_CLASS: Record<ModalWidth, string>;
export declare const MODAL_MAX_WIDTH_VIEWPORT = "max-w-[90vw]";
export declare function modalWidthClassName(width: ModalWidth): string;
interface ModalBodyProps {
    testID?: string;
    children: React.ReactNode;
    className?: React.HTMLProps<HTMLDivElement>["className"];
    width?: ModalWidth;
}
export declare function ModalBody({ testID, children, className, width, }: ModalBodyProps): React.JSX.Element;
export {};

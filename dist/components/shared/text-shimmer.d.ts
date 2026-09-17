import React from "react";
export type TextShimmerProps = {
    children: string;
    as?: React.ElementType;
    className?: string;
    duration?: number;
    spread?: number;
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">;
declare function TextShimmerComponent({ children, as: Component, className, duration, spread, style, ...rest }: TextShimmerProps): React.JSX.Element;
export declare const TextShimmer: React.MemoExoticComponent<typeof TextShimmerComponent>;
export {};

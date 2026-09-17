import { type VariantProps } from "class-variance-authority";
declare const preVariants: (props?: ({
    size?: "small" | "default" | null | undefined;
    font?: "default" | "mono" | null | undefined;
    lineHeight?: "default" | "relaxed" | null | undefined;
    background?: "default" | "dark" | null | undefined;
    textColor?: "default" | "light" | null | undefined;
    padding?: "default" | "medium" | "large" | null | undefined;
    borderRadius?: "default" | "medium" | null | undefined;
    shadow?: "default" | "inner" | null | undefined;
    maxHeight?: "small" | "default" | "large" | null | undefined;
    overflow?: "default" | "auto" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface PreProps extends VariantProps<typeof preVariants> {
    className?: string;
    testId?: string;
    children: React.ReactNode;
}
export declare function Pre({ size, font, lineHeight, background, textColor, padding, borderRadius, shadow, maxHeight, overflow, className, testId, children, }: PreProps): import("react").JSX.Element;
export {};

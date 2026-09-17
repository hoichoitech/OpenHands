import { type VariantProps } from "class-variance-authority";
declare const typographyVariants: (props?: ({
    variant?: "span" | "h1" | "h2" | "h3" | "p" | "codeBlock" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface TypographyProps extends VariantProps<typeof typographyVariants> {
    className?: string;
    testId?: string;
    children: React.ReactNode;
}
export declare function Typography({ variant, className, testId, children, }: TypographyProps): import("react").JSX.Element;
export declare namespace Typography {
    var H1: typeof import("./typography").H1;
    var H2: typeof import("./typography").H2;
    var H3: typeof import("./typography").H3;
    var Text: typeof import("./typography").Text;
    var CodeBlock: typeof import("./typography").CodeBlock;
    var Paragraph: typeof import("./typography").Paragraph;
}
export declare function H1({ className, testId, children, }: Omit<TypographyProps, "variant">): import("react").JSX.Element;
export declare function H2({ className, testId, children, }: Omit<TypographyProps, "variant">): import("react").JSX.Element;
export declare function H3({ className, testId, children, }: Omit<TypographyProps, "variant">): import("react").JSX.Element;
export declare function Text({ className, testId, children, }: Omit<TypographyProps, "variant">): import("react").JSX.Element;
export declare function CodeBlock({ className, testId, children, }: Omit<TypographyProps, "variant">): import("react").JSX.Element;
export declare function Paragraph({ className, testId, children, }: Omit<TypographyProps, "variant">): import("react").JSX.Element;
export {};

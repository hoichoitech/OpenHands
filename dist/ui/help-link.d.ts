import { type VariantProps } from "class-variance-authority";
declare const helpLinkVariants: (props?: ({
    size?: "default" | "settings" | null | undefined;
    linkColor?: "default" | "white" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface HelpLinkProps extends VariantProps<typeof helpLinkVariants> {
    testId: string;
    text: string;
    linkText: string;
    href: string;
    suffix?: string;
    /** Optional second link rendered after the suffix. */
    suffixLinkText?: string;
    suffixLinkHref?: string;
    /** Trailing text rendered after the second link (e.g. a period). */
    trailing?: string;
    className?: string;
    linkTextClassName?: string;
    suffixClassName?: string;
}
export declare function HelpLink({ testId, text, linkText, href, suffix, suffixLinkText, suffixLinkHref, trailing, size, linkColor, className, linkTextClassName, suffixClassName, }: HelpLinkProps): import("react").JSX.Element;
export {};

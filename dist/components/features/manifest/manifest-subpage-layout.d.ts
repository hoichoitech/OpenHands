import type { LucideIcon } from "lucide-react";
export interface SubPageNavItem {
    to: string;
    label: string;
    Icon: LucideIcon;
    testId: string;
}
interface ManifestSubpageLayoutProps {
    /** The section heading above the desktop navigation. */
    heading: string;
    /** Prefix for the desktop/mobile nav testids. */
    navTestIdBase: string;
    items: SubPageNavItem[];
    children: React.ReactNode;
}
/**
 * The shell of a manifest-declared sub-page: a sticky desktop aside and a
 * horizontal mobile strip around a settings-like scrolling content column.
 * Purely presentational — what the items are, and whether any exist at all,
 * is the caller's (ultimately the manifest's) statement.
 */
export declare function ManifestSubpageLayout({ heading, navTestIdBase, items, children, }: ManifestSubpageLayoutProps): import("react").JSX.Element;
export {};

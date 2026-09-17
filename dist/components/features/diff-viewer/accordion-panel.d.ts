import type { ReactNode } from "react";
interface AccordionPanelProps {
    open: boolean;
    children: ReactNode;
    testId?: string;
    className?: string;
}
/**
 * Height/opacity expand-collapse wrapper for Diffs / Commits accordion rows.
 * Honors prefers-reduced-motion by skipping animation.
 */
export declare function AccordionPanel({ open, children, testId, className, }: AccordionPanelProps): import("react").JSX.Element | null;
export {};

import React from "react";
interface ElementProps {
    children?: React.ReactNode;
    className?: string;
}
interface ListProps extends ElementProps {
    start?: number;
}
interface AnchorProps extends ElementProps {
    href?: string;
}
/**
 * Creates custom markdown components for plan views with reduced font sizes and tighter spacing.
 * Accepts an optional extraClassName that will be applied to all elements.
 */
export declare function createPlanComponents(extraClassName?: string): {
    h1: ({ children, className }: ElementProps) => React.JSX.Element;
    h2: ({ children, className }: ElementProps) => React.JSX.Element;
    h3: ({ children, className }: ElementProps) => React.JSX.Element;
    h4: ({ children, className }: ElementProps) => React.JSX.Element;
    h5: ({ children, className }: ElementProps) => React.JSX.Element;
    h6: ({ children, className }: ElementProps) => React.JSX.Element;
    p: ({ children, className }: ElementProps) => React.JSX.Element;
    ul: ({ children, className }: ElementProps) => React.JSX.Element;
    ol: ({ children, className, start }: ListProps) => React.JSX.Element;
    li: ({ children, className }: ElementProps) => React.JSX.Element;
    a: ({ children, className, href }: AnchorProps) => React.JSX.Element;
    code: ({ children, className }: ElementProps) => React.JSX.Element;
};
export declare const planComponents: {
    h1: ({ children, className }: ElementProps) => React.JSX.Element;
    h2: ({ children, className }: ElementProps) => React.JSX.Element;
    h3: ({ children, className }: ElementProps) => React.JSX.Element;
    h4: ({ children, className }: ElementProps) => React.JSX.Element;
    h5: ({ children, className }: ElementProps) => React.JSX.Element;
    h6: ({ children, className }: ElementProps) => React.JSX.Element;
    p: ({ children, className }: ElementProps) => React.JSX.Element;
    ul: ({ children, className }: ElementProps) => React.JSX.Element;
    ol: ({ children, className, start }: ListProps) => React.JSX.Element;
    li: ({ children, className }: ElementProps) => React.JSX.Element;
    a: ({ children, className, href }: AnchorProps) => React.JSX.Element;
    code: ({ children, className }: ElementProps) => React.JSX.Element;
};
/**
 * @deprecated Use planComponents instead
 */
export declare const planHeadings: {
    h1: ({ children, className }: ElementProps) => React.JSX.Element;
    h2: ({ children, className }: ElementProps) => React.JSX.Element;
    h3: ({ children, className }: ElementProps) => React.JSX.Element;
    h4: ({ children, className }: ElementProps) => React.JSX.Element;
    h5: ({ children, className }: ElementProps) => React.JSX.Element;
    h6: ({ children, className }: ElementProps) => React.JSX.Element;
    p: ({ children, className }: ElementProps) => React.JSX.Element;
    ul: ({ children, className }: ElementProps) => React.JSX.Element;
    ol: ({ children, className, start }: ListProps) => React.JSX.Element;
    li: ({ children, className }: ElementProps) => React.JSX.Element;
    a: ({ children, className, href }: AnchorProps) => React.JSX.Element;
    code: ({ children, className }: ElementProps) => React.JSX.Element;
};
export {};

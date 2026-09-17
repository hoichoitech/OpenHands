interface GitControlBarTooltipWrapperProps {
    tooltipMessage: string;
    testId: string;
    children: React.ReactNode;
    shouldShowTooltip: boolean;
}
export declare function GitControlBarTooltipWrapper({ children, tooltipMessage, testId, shouldShowTooltip, }: GitControlBarTooltipWrapperProps): string | number | bigint | boolean | import("react").JSX.Element | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | null | undefined;
export {};

import React from "react";
interface ArchivedDisabledTooltipProps {
    isDisabled: boolean;
    children: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right";
}
export declare function ArchivedDisabledTooltip({ isDisabled, children, placement, }: ArchivedDisabledTooltipProps): string | number | bigint | boolean | React.JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
export {};

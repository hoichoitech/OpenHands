import { TooltipProps } from "@heroui/react";
import React, { ReactNode } from "react";
export interface StyledTooltipProps {
    children: ReactNode;
    content: string | ReactNode;
    tooltipClassName?: React.HTMLAttributes<HTMLDivElement>["className"];
    placement?: TooltipProps["placement"];
    showArrow?: boolean;
    closeDelay?: number;
    offset?: number;
    shouldFlip?: boolean;
    isOpen?: TooltipProps["isOpen"];
}
export declare function StyledTooltip({ children, content, tooltipClassName, placement, showArrow, closeDelay, shouldFlip, offset, isOpen, }: StyledTooltipProps): React.JSX.Element;

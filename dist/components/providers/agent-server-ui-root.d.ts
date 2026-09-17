import React from "react";
import { type AgentServerUIStyleOverrides, type AgentServerUITheme } from "#/styles/agent-server-ui-style-scope";
export interface AgentServerUIRootProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
    children: React.ReactNode;
    theme?: AgentServerUITheme;
    style?: React.CSSProperties;
    styleOverrides?: AgentServerUIStyleOverrides;
    contentClassName?: string;
}
export declare function AgentServerUIRoot({ children, theme, className, style, styleOverrides, contentClassName, ...divProps }: AgentServerUIRootProps): React.JSX.Element;

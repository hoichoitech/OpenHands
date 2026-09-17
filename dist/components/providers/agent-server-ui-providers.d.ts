import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { type i18n as I18nInstance } from "i18next";
import type { TelemetryConfig } from "#/services/telemetry";
import { type AgentServerUIRootProps } from "./agent-server-ui-root";
export interface AgentServerUIPostHogAnalyticsConfig extends TelemetryConfig {
    provider: "posthog";
}
export type AgentServerUIAnalyticsConfig = AgentServerUIPostHogAnalyticsConfig | false | null;
export declare const DEFAULT_AGENT_SERVER_ANALYTICS: AgentServerUIAnalyticsConfig;
export interface AgentServerUIProvidersProps extends Pick<AgentServerUIRootProps, "className" | "contentClassName" | "style" | "styleOverrides" | "theme"> {
    children: React.ReactNode;
    queryClient?: QueryClient;
    analytics?: AgentServerUIAnalyticsConfig;
    i18n?: I18nInstance;
    withStyleRoot?: boolean;
}
export declare function AgentServerUIProviders({ children, queryClient, analytics, i18n, className, contentClassName, style, styleOverrides, theme, withStyleRoot, }: AgentServerUIProvidersProps): React.JSX.Element;

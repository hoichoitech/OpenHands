import React from "react";
import { type TelemetryConfiguration } from "#/services/telemetry";
export declare function TelemetryProvider({ children, config, }: {
    children: React.ReactNode;
    config?: TelemetryConfiguration;
}): React.JSX.Element;

import React from "react";
interface BackendStatusDotProps {
    /** `null` while the first probe is in flight. */
    isConnected: boolean | null | "unavailable";
    className?: string;
}
/**
 * Small colored dot that reflects backend reachability:
 *   - green when connected
 *   - red when disconnected
 *   - dim gray while the first probe is in flight
 */
export declare function BackendStatusDot({ isConnected, className, }: BackendStatusDotProps): React.JSX.Element;
export {};

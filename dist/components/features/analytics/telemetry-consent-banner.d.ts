import React from "react";
interface TelemetryConsentBannerProps {
    onChoice?: (granted: boolean) => void;
}
export declare function TelemetryConsentBanner({ onChoice, }: TelemetryConsentBannerProps): React.JSX.Element | null;
export {};

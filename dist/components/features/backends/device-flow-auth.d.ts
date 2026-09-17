import React from "react";
import type { CloudConnectionSource } from "#/services/cloud-funnel-analytics";
type DeviceFlowButtonVariant = "primary" | "secondary" | "tertiary" | "unstyled";
type DeviceFlowStatusDisplay = "inline" | "modal";
interface DeviceFlowAuthProps {
    /** The host URL for the cloud backend */
    host: string;
    /** Callback when authentication succeeds with the API key */
    onSuccess: (apiKey: string) => void;
    /** Test ID prefix for the component */
    testIdRoot: string;
    /** Whether the login button should be disabled (e.g., when no host is entered) */
    isDisabled?: boolean;
    /** Override for the idle button label and icon-only accessible name. */
    idleButtonLabel?: string;
    /** Optional visible content for the idle button. Defaults to the idle label. */
    idleButtonContent?: React.ReactNode;
    /** Optional content shown only before authentication starts. */
    idleDescription?: React.ReactNode;
    /**
     * Optional content rendered under the idle button and, like
     * `idleDescription`, only before authentication starts — so secondary
     * controls step aside once the flow takes over the surface.
     */
    idleFooter?: React.ReactNode;
    /** Optional classes for the root wrapper. */
    className?: string;
    /** Optional classes for the idle button. */
    buttonClassName?: string;
    /** Visual variant for the idle button. */
    buttonVariant?: DeviceFlowButtonVariant;
    /** Whether in-progress auth content should render inline or in a modal. */
    statusDisplay?: DeviceFlowStatusDisplay;
    /** Product surface that initiated this authorization attempt. */
    analyticsSource?: CloudConnectionSource;
}
export declare function DeviceFlowAuth({ host, onSuccess, testIdRoot, isDisabled, idleButtonLabel, idleButtonContent, idleDescription, idleFooter, className, buttonClassName, buttonVariant, statusDisplay, analyticsSource, }: DeviceFlowAuthProps): React.JSX.Element;
export {};

import React from "react";
import type { CloudConnectionSource } from "#/services/cloud-funnel-analytics";
import type { Backend, BackendKind } from "#/api/backend-registry/types";
export type BackendFormMode = "add" | "edit";
interface BackendConnectionTestMetadata {
    agentServerVersion: string | null;
}
interface BackendFormModalProps {
    mode: BackendFormMode;
    /** Required when `mode === "edit"`. */
    backend?: Backend;
    onClose: () => void;
    /** Analytics surface for the `backend_added` event (add mode only). */
    source?: BackendAddedSource;
    /** Hide the close button and disable backdrop/escape dismissal. Used for locked Cloud first-run. */
    hideCloseButton?: boolean;
}
export type BackendConnectionMethod = "manual" | "cloud_login";
export type BackendAddedSource = CloudConnectionSource;
export interface BackendFormSubmitPayload {
    name: string;
    host: string;
    apiKey: string;
    kind: BackendKind;
}
export interface BackendFormProps {
    mode: BackendFormMode;
    /** Required when `mode === "edit"`. */
    backend?: Backend;
    /**
     * Called after the form is submitted and the backend has been
     * persisted. Use this to dismiss a containing modal, advance an
     * onboarding step, etc.
     */
    onSubmitted: () => void;
    /**
     * Optional render slot rendered in place of the default
     * Save / Cancel button row, so callers (e.g. the onboarding flow)
     * can re-skin the action area while still owning submission via the
     * standard `<form onSubmit>` flow. Receives the form's submit-ready
     * state.
     */
    renderActions?: (state: {
        canSubmit: boolean;
        isSubmitting: boolean;
        testIdRoot: string;
    }) => React.ReactNode;
    /** Used to disambiguate test ids across the same screen. */
    testIdRoot?: string;
    /** When true, the host field is pre-filled and disabled. */
    hostReadOnly?: boolean;
    /**
     * When true, a non-empty API key is required for submission regardless
     * of the inferred backend kind.  The standard add form allows empty
     * keys for local backends; the auth-gate screen needs to enforce one.
     */
    requireApiKey?: boolean;
    /**
     * When true, hides the name/host/API-key inputs (and related inline
     * errors) while keeping the action row visible — used by onboarding
     * after a successful connection probe.
     */
    hideConfigurationFields?: boolean;
    /**
     * Replace the default synchronous add/update-and-close submit with a
     * custom async handler.  The form builds the payload, validates
     * client-side, then hands it to this callback. If the callback throws,
     * the form remains open so the caller can surface errors.
     */
    onSubmitOverride?: (payload: BackendFormSubmitPayload) => Promise<void>;
}
/**
 * Reusable form body for adding / editing a backend. Renders the
 * common name / host / API-key inputs plus the kind selector
 * (radio buttons in `add` mode, status badge in `edit` mode).
 *
 * Rendered as a `<form>`, so consumers should put any extra controls
 * either inside `renderActions` or as siblings inside a wrapping
 * element — but submission flows through the standard form submit so
 * Enter-to-submit still works.
 */
export declare function BackendForm({ mode, backend, onSubmitted, renderActions, testIdRoot: explicitTestIdRoot, hostReadOnly, requireApiKey, hideConfigurationFields, onSubmitOverride, }: BackendFormProps): React.JSX.Element;
interface BackendConnectionOptionsProps {
    onConnected: (payload: BackendFormSubmitPayload, connectionMethod: BackendConnectionMethod, metadata?: BackendConnectionTestMetadata) => void;
    testIdRoot?: string;
    initialManualBackend?: Partial<Pick<BackendFormSubmitPayload, "name" | "host" | "apiKey">>;
    requireManualApiKey?: boolean;
    manualSubmitLabel?: React.ReactNode;
    manualSubmittingLabel?: React.ReactNode;
    manualSubmitTestId?: string;
    analyticsSource?: CloudConnectionSource;
}
/**
 * Manual agent-server connection plus OpenHands Cloud OAuth login.
 * Used by both the Add Backend modal and the onboarding backend step so
 * supported backend choices stay consistent across first-run and settings UI.
 */
export declare function BackendConnectionOptions({ onConnected, testIdRoot, initialManualBackend, requireManualApiKey, manualSubmitLabel, manualSubmittingLabel, manualSubmitTestId, analyticsSource, }: BackendConnectionOptionsProps): React.JSX.Element;
/**
 * Modal wrapper. In **add** mode it renders a two-column layout
 * (manual connection | OR | Cloud login). In **edit** mode it wraps
 * the standard `BackendForm`.
 */
export declare function BackendFormModal({ mode, backend, onClose, source, hideCloseButton, }: BackendFormModalProps): React.JSX.Element;
export {};

import React from "react";
import { SdkSectionSaveControl } from "#/components/features/settings/sdk-settings/sdk-section-page";
import { SettingsScope } from "#/types/settings";
import { type SettingsFormValues } from "#/utils/sdk-settings-schema";
/** Form-values key for the shared provider connection a profile links to. */
export declare const LLM_PROVIDER_CONNECTION_KEY = "llm.provider_connection_id";
export declare function LlmSettingsScreen({ scope, onSaveSuccess, initialValueOverrides, markInitialOverridesDirty, embedded, hideSaveButton, suppressSuccessToast, onSaveControlChange, showProviderConnection, }: {
    scope?: SettingsScope;
    /** Optional hook fired after a successful save (e.g. advance an onboarding step). */
    onSaveSuccess?: () => void;
    /** Forwarded to {@link SdkSectionPage}. */
    initialValueOverrides?: SettingsFormValues;
    /** Forwarded to {@link SdkSectionPage}. */
    markInitialOverridesDirty?: boolean;
    /** Forwarded to {@link SdkSectionPage}. */
    embedded?: boolean;
    /** Forwarded to {@link SdkSectionPage}. */
    hideSaveButton?: boolean;
    /** Forwarded to {@link SdkSectionPage}. */
    suppressSuccessToast?: boolean;
    /** Forwarded to {@link SdkSectionPage}. */
    onSaveControlChange?: (control: SdkSectionSaveControl) => void;
    /**
     * When true (the local profile editor), show a "Provider connection" selector
     * that links this profile to a shared connection. Only rendered when at least
     * one connection exists, so the form is unchanged until the user creates one.
     */
    showProviderConnection?: boolean;
}): React.JSX.Element;
/**
 * Default export for the route renders the LLM-profile management view for both
 * backend types. Both manage the LLM through named profiles — local via the
 * agent-server (`/api/profiles`), cloud via the app-server
 * (`/api/v1/settings/profiles`) — and the view is backend-agnostic because it
 * goes through ProfilesService, which routes per active backend.
 *
 * The LlmSettingsScreen component is also exported for embedded use cases
 * (e.g., onboarding, the profile create/edit form).
 *
 * Note: This is a route file, only the router should import the default export.
 * Other consumers should use the named export `LlmSettingsScreen` for embedded
 * use cases.
 */
export default function LlmSettingsRoute(): React.JSX.Element;

import { type ACPProviderSecretField } from "#/constants/acp-providers";
export interface AcpCredentialForm {
    /** Credential fields for ``providerKey`` (see {@link getAcpProviderSecrets}). */
    fields: ACPProviderSecretField[];
    /** Current (unsaved) input values, keyed by field name. */
    values: Record<string, string>;
    setValue: (name: string, value: string) => void;
    /** Whether a secret with this name is already saved on the backend. */
    secretExists: (name: string) => boolean;
    /** Typed now (non-blank) or previously saved. */
    hasValueFor: (name: string) => boolean;
    /** ``[credential, conflicting]`` pairs currently both set (typed or saved). */
    conflicts: Array<[string, string]>;
    /** Whether a credential (a ``secret`` field — API key, OAuth token, or
     * file-content blob) is already saved on the backend for this provider. This
     * is the backend-truthful auth signal that works on Docker/cloud, where the
     * host-login probe can't run (agent-canvas#1244). A non-credential field (a
     * base URL or GCP scalar) being set does not count. */
    credentialsConfigured: boolean;
    /** Whether the active backend can materialise file-content (``multiline``)
     * credentials to disk. False on cloud (agent-canvas#1016), where such a
     * credential would be orphaned. */
    consumesFileCredentials: boolean;
    /** At least one field has a non-blank typed value. */
    isDirty: boolean;
    /** Persist the filled fields; resolves ``true`` when everything saved.
     * ``silent`` suppresses the success toast so a caller saving credentials
     * alongside other state can emit a single combined confirmation. */
    save: (options?: {
        silent?: boolean;
    }) => Promise<boolean>;
    reset: () => void;
    isSaving: boolean;
}
/**
 * Shared state + derived values for the ACP credential forms (the onboarding
 * step and the Settings → Agent section): the provider's field list, the typed
 * values, existing-secret lookups, the credential-conflict pairs, and the save
 * flow ({@link useSaveAcpSecrets}). Values reset when ``providerKey`` changes —
 * typed-but-unsaved input belongs to the previous provider's fields.
 */
export declare function useAcpCredentialForm(providerKey: string | null | undefined): AcpCredentialForm;

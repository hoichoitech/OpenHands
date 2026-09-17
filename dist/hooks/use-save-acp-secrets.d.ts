import { type ACPProviderSecretField } from "#/constants/acp-providers";
/**
 * Shared save flow for the ACP credential forms (the onboarding step and the
 * Settings → Agent section): persists each filled field as a global secret,
 * refreshes the secret queries, and toasts the outcome — a warning instead of
 * "Saved" when a file-content credential landed on a backend that can't
 * materialise it to disk (cloud, pending agent-canvas#1016), so we don't claim
 * success for an orphaned credential.
 *
 * ``saveFilled`` resolves ``true`` when every filled field saved (or nothing
 * needed saving) and ``false`` on failure, so callers can gate navigation /
 * form resets on it. Empty fields are never written — a blank input is a
 * deliberate skip, not a request to clear an existing secret.
 *
 * ``consumesFileCredentials`` — whether the backend materialises ``multiline``
 * credentials to disk — comes from the caller (``useAcpCredentialForm``
 * computes it), so the save warning and the form's required-gate can't
 * disagree on the capability.
 */
export declare function useSaveAcpSecrets(fields: ACPProviderSecretField[], consumesFileCredentials: boolean): {
    saveFilled: (values: Record<string, string>, { silent }?: {
        silent?: boolean;
    }) => Promise<boolean>;
    isSaving: boolean;
};

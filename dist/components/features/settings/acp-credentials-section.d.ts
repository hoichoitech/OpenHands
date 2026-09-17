import type { AcpCredentialForm } from "#/hooks/use-acp-credential-form";
/**
 * Settings → Agent credentials section for a built-in ACP provider: renders the
 * same fields the onboarding step collects (and the same "already signed in"
 * auth banner), so credentials can be added or rotated after onboarding. The
 * form state and the save are owned by the parent (Settings → Agent) so the
 * page has a single Save button for both agent settings and credentials.
 * Renders nothing for providers without credential fields.
 */
export declare function AcpCredentialsSection({ form, providerKey, }: {
    form: AcpCredentialForm;
    providerKey: string;
}): import("react").JSX.Element | null;

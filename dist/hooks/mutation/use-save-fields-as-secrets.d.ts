import type { MarketplaceField } from "@openhands/extensions/integrations";
/**
 * Returns a stable function that upserts checked envFields into the Secrets
 * store. Callers may ignore the returned promise for background saves or await
 * it when later work depends on the secret being present. MCP server config
 * and the Secrets store are separate — this bridges the gap so Automation
 * Server can access credentials without a separate manual step. Internally,
 * `SecretsService.createSecret` is an upsert, so existing secrets with the
 * same name are overwritten safely.
 */
export declare function useSaveFieldsAsSecrets(): (envFields: MarketplaceField[], values: Record<string, string>, savedAsSecret: Record<string, boolean>) => Promise<void>;

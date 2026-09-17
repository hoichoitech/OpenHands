import { type IntegrationCatalogEntry as MarketplaceEntry } from "@openhands/extensions/integrations";
import type { SetupEntry, SetupIntegrationRequirement } from "#/manifests/types";
export interface MissingSetupIntegration {
    id: string;
    requirement: SetupIntegrationRequirement;
    /** The catalog entry, when the id resolves to one. */
    entry: MarketplaceEntry | null;
}
export interface SetupPrerequisitesResult {
    /** Unconnected integrations the manifest declares as required. */
    blockingIntegrations: MissingSetupIntegration[];
    /** Unconnected integrations the manifest is willing to proceed without. */
    warningIntegrations: MissingSetupIntegration[];
    isBlocked: boolean;
    isLoading: boolean;
}
/**
 * Stage 3 — which of the accounts this manifest needs are already connected.
 *
 * A requirement is blocking unless it opts out with `required: false`, which is
 * the manifest's way of saying the integration can be connected later, during
 * setup itself.
 */
export declare function useSetupPrerequisites(entry: SetupEntry): SetupPrerequisitesResult;

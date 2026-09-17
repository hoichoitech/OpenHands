import { type SetupCapabilitySupport } from "#/manifests/manifest-capabilities";
import type { DeploymentCapabilities, SetupEntry } from "#/manifests/types";
export interface SetupCapabilitiesResult {
    /** The discovery response, or null when there is nothing to report. */
    capabilities: DeploymentCapabilities | null;
    supported: SetupCapabilitySupport;
    /** Which requirements a `false` verdict came from; empty otherwise. */
    unmet: string[];
    isLoading: boolean;
}
/** Fetch the deployment-owned automation limits and feature set. */
export declare function useDeploymentCapabilities(): import("@tanstack/react-query").UseQueryResult<NoInfer<DeploymentCapabilities>, import("axios").AxiosError<unknown, any>>;
/**
 * Ask the deployment what it supports, then compare that against what the
 * manifest requires.
 *
 * A deployment that does not answer resolves to "unknown" rather than
 * unsupported. Discovery is not implemented on every deployment yet, and
 * refusing to render on a failed probe would block every manifest on the ones
 * that simply cannot be asked. Nothing is resolved into the form in that case
 * either, so the manifest's own defaults stand.
 */
export declare function useSetupCapabilities(entry: SetupEntry): SetupCapabilitiesResult;

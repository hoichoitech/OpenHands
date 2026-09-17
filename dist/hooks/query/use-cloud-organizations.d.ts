import type { Backend } from "#/api/backend-registry/types";
/**
 * Fetch organizations for every registered cloud backend in parallel.
 *
 * Used by the BackendSelector to flatten each cloud backend into per-org
 * rows. Each query is keyed by the backend ID so React Query caches
 * responses independently and a switch (which clears the cache) refetches.
 */
export declare function useAllCloudOrganizations(): Record<string, {
    backend: Backend;
    isLoading: boolean;
    orgs: {
        id: string;
        name: string;
        is_personal?: boolean;
    }[];
    currentOrgId: string | null;
}>;

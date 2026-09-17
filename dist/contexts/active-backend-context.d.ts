import React from "react";
import { type Backend, type ResolvedActiveBackend } from "#/api/backend-registry/types";
type BackendInput = Omit<Backend, "id" | "connectionRevision">;
interface ActiveBackendContextValue {
    backends: Backend[];
    active: ResolvedActiveBackend;
    setActive: (backendId: string, orgId?: string | null) => void;
    addBackend: (backend: BackendInput) => Backend;
    updateBackend: (id: string, patch: Partial<BackendInput>) => void;
    removeBackend: (id: string) => void;
}
export declare function ActiveBackendProvider({ children, }: {
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useActiveBackendContext(): ActiveBackendContextValue;
/**
 * Read the resolved active backend.
 *
 * Falls back to a synthesized env-derived local backend when called
 * outside an `<ActiveBackendProvider>` (e.g. from a unit test that
 * mounts a narrow component without the full provider stack). That
 * synthesized backend is identical to the seed used on first install.
 *
 * Components that need to mutate state (`setActive`, `addBackend`,
 * etc.) must use `useActiveBackendContext()` directly — that throws if
 * the provider is missing, since mutation requires the live store.
 */
export declare function useActiveBackend(): ResolvedActiveBackend;
export {};

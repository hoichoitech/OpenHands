import { Provider } from "#/types/settings";
/**
 * Get the first page of app installations for the provider given.
 *
 * The query key includes the active backend identity so switching
 * between backends (Local ↔ Cloud, Cloud A ↔ Cloud B) naturally produces
 * a fresh query — no `clear()`/`invalidate` orchestration required.
 */
export declare const useAppInstallations: (selectedProvider: Provider | null) => import("@tanstack/react-query").UseQueryResult<NoInfer<import("../../types/git").InstallationPage>, import("axios").AxiosError<unknown, any>>;

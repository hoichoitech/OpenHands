import { type MarketplacePlugin } from "#/api/plugins-service";
/**
 * Query hook for the dynamic plugins marketplace catalog. The catalog is global
 * (not project-scoped), and currently local-backend only — a cloud backend
 * yields an empty list. Mirrors `useSkills`.
 */
export declare const usePluginsMarketplace: () => import("@tanstack/react-query").UseQueryResult<NoInfer<MarketplacePlugin[]>, import("axios").AxiosError<unknown, any>>;

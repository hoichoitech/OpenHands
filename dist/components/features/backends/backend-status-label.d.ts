import type { TFunction } from "i18next";
interface BackendStatusLabelHealth {
    isConnected?: boolean | null;
    lastError?: string | null;
}
export declare function getBackendStatusLabel(t: TFunction<"openhands">, backend: {
    kind?: "local" | "cloud";
    apiKey?: string | null;
} | undefined, health: BackendStatusLabelHealth | undefined): string;
export {};

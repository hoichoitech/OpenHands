import { Settings, SettingsScope } from "#/types/settings";
type SettingsUpdate = Partial<Settings> & Record<string, unknown>;
export declare const useSaveSettings: (scope?: SettingsScope, { retry }?: {
    retry?: number;
}) => import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, SettingsUpdate, unknown>;
export {};

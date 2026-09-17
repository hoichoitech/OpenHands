import { SettingsSchema } from "#/types/settings";
export declare const useAgentSettingsSchema: (fallbackSchema?: SettingsSchema | null) => {
    data: SettingsSchema | null | undefined;
    error: import("axios").AxiosError<unknown, any> | null;
    isLoading: boolean;
    isFetching: boolean;
};
export declare const useConversationSettingsSchema: (fallbackSchema?: SettingsSchema | null) => {
    data: SettingsSchema | null | undefined;
    error: import("axios").AxiosError<unknown, any> | null;
    isLoading: boolean;
    isFetching: boolean;
};

import type { Automation, AutomationSpec } from "#/types/automation";
export declare const AUTOMATIONS_QUERY_KEY: readonly ["automations"];
interface UseAutomationsOptions {
    limit?: number;
    offset?: number;
    enabled?: boolean;
}
export declare function useAutomations(options?: UseAutomationsOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/types/automation").AutomationsResponse>, import("axios").AxiosError<unknown, any>>;
export declare function useToggleAutomation(): import("@tanstack/react-query").UseMutationResult<Automation, import("axios").AxiosError<unknown, any>, {
    id: string;
    enabled: boolean;
}, unknown>;
export declare function useImportAutomation(): import("@tanstack/react-query").UseMutationResult<Automation, import("axios").AxiosError<unknown, any>, AutomationSpec, unknown>;
export declare function useUpdateAutomation(): import("@tanstack/react-query").UseMutationResult<Automation, import("axios").AxiosError<unknown, any>, {
    id: string;
    body: Partial<Automation>;
}, unknown>;
export declare function useDeleteAutomation(): import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, string, unknown>;
export declare function useDispatchAutomation(): import("@tanstack/react-query").UseMutationResult<import("#/types/automation").AutomationRun, import("axios").AxiosError<unknown, any>, string, unknown>;
export declare function useCancelAutomationRun(): import("@tanstack/react-query").UseMutationResult<import("#/types/automation").AutomationRun, import("axios").AxiosError<unknown, any>, {
    automationId: string;
    runId: string;
}, unknown>;
export {};

import { type AutomationRunsResponse } from "#/types/automation";
export declare const AUTOMATION_DETAIL_QUERY_KEY: readonly ["automation-detail"];
export declare const AUTOMATION_RUNS_QUERY_KEY: readonly ["automation-runs"];
interface UseAutomationDetailOptions {
    id: string;
    enabled?: boolean;
}
export declare function useAutomationDetail(options: UseAutomationDetailOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/types/automation").Automation>, import("axios").AxiosError<unknown, any>>;
interface UseAutomationRunsOptions {
    id: string;
    limit?: number;
    offset?: number;
    enabled?: boolean;
}
export declare function useAutomationRuns(options: UseAutomationRunsOptions): import("@tanstack/react-query").UseQueryResult<NoInfer<AutomationRunsResponse>, import("axios").AxiosError<unknown, any>>;
export {};

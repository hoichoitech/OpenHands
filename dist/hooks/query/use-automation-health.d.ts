export declare const AUTOMATION_HEALTH_QUERY_KEY: readonly ["automation-health"];
export declare function useAutomationHealth(): import("@tanstack/react-query").UseQueryResult<NoInfer<import("#/api/automation-service/automation-service.api").AutomationHealthResponse>, import("axios").AxiosError<unknown, any>>;

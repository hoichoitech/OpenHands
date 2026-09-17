interface VSCodeUrlResult {
    url: string | null;
}
export declare const useUnifiedVSCodeUrl: () => {
    data: {
        error: string | null;
        url: string | null;
    } | undefined;
    error: unknown;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    isUnavailable: boolean;
    status: "error" | "pending" | "success";
    refetch: () => Promise<{
        data: VSCodeUrlResult | undefined;
    }>;
};
export {};

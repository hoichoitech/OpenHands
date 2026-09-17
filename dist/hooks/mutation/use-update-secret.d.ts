export declare const useUpdateSecret: () => import("@tanstack/react-query").UseMutationResult<void, import("axios").AxiosError<unknown, any>, {
    secretToEdit: string;
    name: string;
    description?: string;
    value?: string;
}, unknown>;

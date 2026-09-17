interface UseRespondToConfirmationVariables {
    conversationId: string;
    conversationUrl: string;
    sessionApiKey?: string | null;
    accept: boolean;
}
export declare const useRespondToConfirmation: () => import("@tanstack/react-query").UseMutationResult<import("#/api/event-service/event-service.types").ConfirmationResponseResponse, import("axios").AxiosError<unknown, any>, UseRespondToConfirmationVariables, unknown>;
export {};

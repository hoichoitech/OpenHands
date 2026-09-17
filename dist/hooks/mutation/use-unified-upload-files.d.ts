import { FileUploadSuccessResponse } from "#/api/open-hands.types";
interface UnifiedUploadFilesVariables {
    conversationId: string;
    files: File[];
}
/**
 * Uploads files for the active conversation (local agent-server or cloud runtime).
 */
export declare const useUnifiedUploadFiles: () => import("@tanstack/react-query").UseMutationResult<FileUploadSuccessResponse, import("axios").AxiosError<unknown, any>, UnifiedUploadFilesVariables, unknown>;
export {};

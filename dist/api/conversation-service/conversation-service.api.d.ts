import { GetVSCodeUrlResponse, GetTrajectoryResponse, FileUploadSuccessResponse } from "../open-hands.types";
import { AppConversation } from "./agent-server-conversation-service.types";
declare class ConversationService {
    private static currentConversation;
    static setCurrentConversation(currentConversation: AppConversation | null): void;
    static getCurrentConversation(): AppConversation | null;
    private static getClientOverrides;
    static getVSCodeUrl(conversationId: string): Promise<GetVSCodeUrlResponse>;
    static getTrajectory(conversationId: string): Promise<GetTrajectoryResponse>;
    static uploadFiles(conversationId: string, files: File[]): Promise<FileUploadSuccessResponse>;
}
export default ConversationService;

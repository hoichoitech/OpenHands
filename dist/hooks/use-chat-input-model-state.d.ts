import { type AcpModelContext } from "#/hooks/use-acp-model-context";
import { type ACPModelOption } from "#/constants/acp-providers";
export interface ChatInputModelState {
    isAcpContext: boolean;
    displayModel: string | null;
    currentModelId: string | null;
    availableAcpModels: ACPModelOption[];
    showAcpPicker: boolean;
    switchConversationId: string | null;
    destinationPath: AcpModelContext["destinationPath"];
    destinationLabel: string;
}
export declare function useChatInputModelState(): ChatInputModelState;

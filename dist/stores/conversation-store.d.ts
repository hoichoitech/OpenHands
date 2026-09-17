export type ConversationTab = "files" | "commits" | "browser" | "terminal" | "planner" | "tasklist" | "usage";
export type ConversationMode = "code" | "plan";
export type CommitsPaneSection = "uncommitted";
export interface IMessageToSend {
    text: string;
    timestamp: number;
}
interface ConversationState {
    isRightPanelShown: boolean;
    isOverviewPanelShown: boolean;
    isOverviewPanelPeeked: boolean;
    selectedTab: ConversationTab | null;
    commitsAutoExpandSection: CommitsPaneSection | null;
    images: File[];
    files: File[];
    /** Image file names (e.g. pasted screenshots) to send via file upload instead of vision embed. */
    imagesMarkedUploadAsFile: string[];
    /** Image file names attached in chat (controls per-image upload-as-file UI). */
    pastedImageNames: string[];
    loadingFiles: string[];
    loadingImages: string[];
    messageToSend: IMessageToSend | null;
    /** One-shot restore request consumed by the chat input when empty. */
    messageRestoreIfEmpty: IMessageToSend | null;
    shouldShownAgentLoading: boolean;
    submittedMessage: string | null;
    shouldHideSuggestions: boolean;
    hasRightPanelToggled: boolean;
    planContent: string | null;
    conversationMode: ConversationMode;
    subConversationTaskId: string | null;
    localPlanningConversationId: string | null;
}
interface ConversationActions {
    setIsRightPanelShown: (isRightPanelShown: boolean) => void;
    setIsOverviewPanelShown: (isOverviewPanelShown: boolean) => void;
    setIsOverviewPanelPeeked: (isOverviewPanelPeeked: boolean) => void;
    setSelectedTab: (selectedTab: ConversationTab | null) => void;
    setCommitsAutoExpandSection: (commitsAutoExpandSection: CommitsPaneSection | null) => void;
    setShouldShownAgentLoading: (shouldShownAgentLoading: boolean) => void;
    setShouldHideSuggestions: (shouldHideSuggestions: boolean) => void;
    addImages: (images: File[]) => void;
    addFiles: (files: File[]) => void;
    toggleImageUploadAsFile: (fileName: string) => void;
    markImagesAsPasted: (fileNames: string[]) => void;
    removeImage: (index: number) => void;
    removeFile: (index: number) => void;
    clearImages: () => void;
    clearFiles: () => void;
    clearAllFiles: () => void;
    addFileLoading: (fileName: string) => void;
    removeFileLoading: (fileName: string) => void;
    addImageLoading: (imageName: string) => void;
    removeImageLoading: (imageName: string) => void;
    clearAllLoading: () => void;
    setMessageToSend: (text: string) => void;
    clearMessageToSend: () => void;
    restoreMessageToInputIfEmpty: (text: string) => void;
    clearMessageRestoreIfEmpty: () => void;
    setSubmittedMessage: (message: string | null) => void;
    resetConversationState: () => void;
    setHasRightPanelToggled: (hasRightPanelToggled: boolean) => void;
    setConversationMode: (conversationMode: ConversationMode) => void;
    setSubConversationTaskId: (taskId: string | null) => void;
    setLocalPlanningConversationId: (conversationId: string | null) => void;
    setPlanContent: (planContent: string | null) => void;
}
type ConversationStore = ConversationState & ConversationActions;
export declare const useConversationStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ConversationStore>, "setState" | "devtools"> & {
    setState(partial: ConversationStore | Partial<ConversationStore> | ((state: ConversationStore) => ConversationStore | Partial<ConversationStore>), replace?: false | undefined, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    setState(state: ConversationStore | ((state: ConversationStore) => ConversationStore), replace: true, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    devtools: {
        cleanup: () => void;
    };
}>;
export {};

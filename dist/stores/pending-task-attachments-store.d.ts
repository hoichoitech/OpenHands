export interface PendingTaskAttachments {
    content: string;
    images: File[];
    files: File[];
    imagesMarkedUploadAsFile: string[];
}
interface PendingTaskAttachmentsState {
    byTaskId: Record<string, PendingTaskAttachments>;
    setPendingTaskAttachments: (taskId: string, payload: PendingTaskAttachments) => void;
    consumePendingTaskAttachments: (taskId: string) => PendingTaskAttachments | null;
}
export declare const usePendingTaskAttachmentsStore: import("zustand").UseBoundStore<import("zustand").StoreApi<PendingTaskAttachmentsState>>;
export declare function setPendingTaskAttachments(taskId: string, payload: PendingTaskAttachments): void;
export declare function consumePendingTaskAttachments(taskId: string): PendingTaskAttachments | null;
export {};

/**
 * Shows the user's first message immediately on cloud start-task routes
 * (`/conversations/task-{uuid}`) while the sandbox provisions.
 */
export declare function enqueueHomeTaskPendingMessage(options: {
    conversationId: string;
    text: string;
    images: File[];
    imagesMarkedUploadAsFile: string[];
}): Promise<void>;

/**
 * Sends attachments queued during cloud start-task provisioning once the
 * real conversation UUID is available.
 */
export declare function flushPendingTaskAttachments(taskId: string, conversationId: string): Promise<void>;

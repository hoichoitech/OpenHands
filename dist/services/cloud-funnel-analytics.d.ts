export type CloudConnectionSource = "onboarding" | "add_backend_modal" | "manage_backends_modal" | "cloud_auto_connect";
export declare function trackCloudDeviceAuthorizationStarted(_host: string, source?: CloudConnectionSource): void;
export declare function trackCloudDeviceAuthorizationSucceeded(_host: string, source?: CloudConnectionSource): void;
export declare function trackCloudConversationReady(taskId: string, conversationId: string): void;

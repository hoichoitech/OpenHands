import ActionType from "#/types/action-type";
export declare function createChatMessage(message: string, image_urls: string[], file_urls: string[], timestamp: string): {
    action: ActionType;
    args: {
        content: string;
        image_urls: string[];
        file_urls: string[];
        timestamp: string;
    };
};

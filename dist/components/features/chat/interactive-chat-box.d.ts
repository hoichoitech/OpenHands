interface InteractiveChatBoxProps {
    onSubmit: (message: string, images: File[], files: File[]) => void;
    disabled?: boolean;
    hasStartedConversation?: boolean;
}
export declare function InteractiveChatBox({ onSubmit, disabled, hasStartedConversation, }: InteractiveChatBoxProps): import("react").JSX.Element;
export {};

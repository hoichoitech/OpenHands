import React from "react";
interface TranscriptExportModalProps {
    conversationId: string;
    conversationUrl?: string | null;
    sessionApiKey?: string | null;
    conversationTitle?: string | null;
    model?: string | null;
    onClose: () => void;
}
export declare function TranscriptExportModal({ conversationId, conversationUrl, sessionApiKey, conversationTitle, model, onClose, }: TranscriptExportModalProps): React.JSX.Element;
export {};

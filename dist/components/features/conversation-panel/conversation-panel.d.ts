import React from "react";
interface ConversationPanelProps {
    onClose?: () => void;
    /**
     * Render a minimal icon-only variant of each conversation row (used by the
     * collapsed sidebar). Each row is a single status dot with a hover preview
     * containing the full card content.
     */
    compact?: boolean;
}
export declare function ConversationPanel({ onClose, compact, }: ConversationPanelProps): React.JSX.Element;
export {};

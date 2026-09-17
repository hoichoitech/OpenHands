import React from "react";
import type { ConversationMode } from "#/stores/conversation-store";
interface ChangeAgentContextMenuProps {
    activeMode: ConversationMode;
    onClose: () => void;
    onCodeClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onPlanClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare function ChangeAgentContextMenu({ activeMode, onClose, onCodeClick, onPlanClick, }: ChangeAgentContextMenuProps): React.JSX.Element;
export {};

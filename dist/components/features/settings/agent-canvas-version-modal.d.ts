import React from "react";
interface AgentCanvasVersionModalProps {
    installedVersion: string;
    latestVersion: string | null;
    updateAvailable: boolean;
    isChecking: boolean;
    onCheckForUpdates: () => void;
    onClose: () => void;
}
export declare function AgentCanvasVersionModal({ installedVersion, latestVersion, updateAvailable, isChecking, onCheckForUpdates, onClose, }: AgentCanvasVersionModalProps): React.JSX.Element;
export {};

interface ResponderDeploymentModalProps {
    isOpen: boolean;
    isPending: boolean;
    onClose: () => void;
    /** Fired for the "Continue with local setup" action. */
    onContinueLocal: () => void;
    /** Fired for an external-URL action (e.g. OpenHands Cloud integrations). */
    onOpenUrl: (url: string) => void;
}
export declare function ResponderDeploymentModal({ isOpen, isPending, onClose, onContinueLocal, onOpenUrl, }: ResponderDeploymentModalProps): import("react").JSX.Element | null;
export {};

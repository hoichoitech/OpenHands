interface SystemMessageHeaderProps {
    agentClass: string | null;
    openhandsVersion: string | null;
    onClose: () => void;
}
export declare function SystemMessageHeader({ agentClass, openhandsVersion, onClose, }: SystemMessageHeaderProps): import("react").JSX.Element;
export {};

import { SystemMessageForModal } from "#/utils/system-message-adapter";
interface SystemMessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    systemMessage: SystemMessageForModal | null;
}
export declare function SystemMessageModal({ isOpen, onClose, systemMessage, }: SystemMessageModalProps): false | import("react").JSX.Element | null;
export {};

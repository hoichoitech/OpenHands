import React from "react";
interface ManageBackendsModalProps {
    onClose: () => void;
    /**
     * Recovery mode is used by the root unavailable-backend gate. There is no
     * app shell behind the modal, so dismiss controls would be misleading.
     */
    recoveryMode?: boolean;
}
export declare function ManageBackendsModal({ onClose, recoveryMode, }: ManageBackendsModalProps): React.JSX.Element;
export {};

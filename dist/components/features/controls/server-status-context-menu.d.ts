import type { MouseEvent, RefObject } from "react";
import { ExecutionStatus } from "#/types/agent-server/core/base/common";
interface ServerStatusContextMenuProps {
    onClose: () => void;
    onStopServer?: (event: MouseEvent<HTMLButtonElement>) => void;
    onStartServer?: (event: MouseEvent<HTMLButtonElement>) => void;
    executionStatus: ExecutionStatus | null;
    position?: "top" | "bottom";
    className?: string;
    isPausing?: boolean;
    ignoreOutsideClickRef?: RefObject<HTMLElement | null>;
}
export declare function ServerStatusContextMenu({ onClose, onStopServer, onStartServer, executionStatus, position, className, isPausing, ignoreOutsideClickRef, }: ServerStatusContextMenuProps): import("react").JSX.Element;
export {};

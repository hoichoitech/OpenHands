import { ExecutionStatus } from "#/types/agent-server/core/base/common";
export interface ServerStatusProps {
    className?: string;
    executionStatus: ExecutionStatus | null;
    isPausing?: boolean;
}
export declare function ServerStatus({ className, executionStatus, isPausing, }: ServerStatusProps): import("react").JSX.Element;
export default ServerStatus;

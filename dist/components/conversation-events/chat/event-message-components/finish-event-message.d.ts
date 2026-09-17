import { ActionEvent } from "#/types/agent-server/core";
import { FinishAction } from "#/types/agent-server/core/base/action";
interface FinishEventMessageProps {
    event: ActionEvent<FinishAction>;
    isFromPlanningAgent?: boolean;
}
export declare function FinishEventMessage({ event, isFromPlanningAgent, }: FinishEventMessageProps): import("react").JSX.Element;
export {};

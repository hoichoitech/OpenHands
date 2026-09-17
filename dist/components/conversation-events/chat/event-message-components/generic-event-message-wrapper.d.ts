import { OpenHandsEvent, ActionEvent } from "#/types/agent-server/core";
import { SkillReadyEvent } from "../event-content-helpers/create-skill-ready-event";
interface GenericEventMessageWrapperProps {
    event: OpenHandsEvent | SkillReadyEvent;
    isLastMessage: boolean;
    correspondingAction?: ActionEvent;
}
export declare function GenericEventMessageWrapper({ event, correspondingAction, }: GenericEventMessageWrapperProps): import("react").JSX.Element;
export {};

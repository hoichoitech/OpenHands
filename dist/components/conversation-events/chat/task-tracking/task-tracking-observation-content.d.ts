import React from "react";
import { ObservationEvent } from "#/types/agent-server/core";
import { TaskTrackerObservation } from "#/types/agent-server/core/base/observation";
interface TaskTrackingObservationContentProps {
    event: ObservationEvent<TaskTrackerObservation>;
}
export declare function TaskTrackingObservationContent({ event, }: TaskTrackingObservationContentProps): React.ReactNode;
export {};

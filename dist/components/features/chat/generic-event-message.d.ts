import React from "react";
import { ObservationResultStatus } from "#/components/conversation-events/chat/event-content-helpers/get-observation-result";
interface GenericEventMessageProps {
    title: React.ReactNode;
    details: string | React.ReactNode;
    success?: ObservationResultStatus;
    initiallyExpanded?: boolean;
    /** Where to place the expand/collapse chevron relative to the title. */
    chevronPosition?: "before" | "after";
    /** Extra content rendered at the end of the title row (right side). */
    titleTrailing?: React.ReactNode;
    /** Optional icon rendered before the title text. */
    titleIcon?: React.ReactNode;
    timestamp?: string;
}
export declare function GenericEventMessage({ title, details, success, initiallyExpanded, chevronPosition, titleTrailing, titleIcon, timestamp, }: GenericEventMessageProps): React.JSX.Element;
export {};

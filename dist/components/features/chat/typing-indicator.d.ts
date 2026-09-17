import type { OHEvent } from "#/stores/use-event-store";
import { type EventTitleDescriptor } from "#/components/conversation-events/chat/event-content-helpers/get-action-event-title";
export declare const deriveLiveActivity: (events: readonly OHEvent[]) => EventTitleDescriptor;
interface TypingIndicatorProps {
    readonly events: readonly OHEvent[];
}
export declare function TypingIndicator({ events }: TypingIndicatorProps): import("react").JSX.Element;
export {};

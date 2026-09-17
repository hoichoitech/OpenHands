import { HookEvent } from "#/api/conversation-service/agent-server-conversation-service.types";
interface HookEventItemProps {
    hookEvent: HookEvent;
    isExpanded: boolean;
    onToggle: (eventType: string) => void;
}
export declare function HookEventItem({ hookEvent, isExpanded, onToggle, }: HookEventItemProps): import("react").JSX.Element;
export {};

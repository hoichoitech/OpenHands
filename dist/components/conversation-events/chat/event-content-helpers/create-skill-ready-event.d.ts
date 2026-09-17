import { MessageEvent } from "#/types/agent-server/core";
import { BaseEvent } from "#/types/agent-server/core/base/event";
import { SkillReadyItem } from "./get-skill-ready-content";
export type { SkillReadyItem };
/**
 * Synthetic event type for Skill Ready events.
 * This extends BaseEvent and includes a marker to identify it as a skill ready event.
 */
export interface SkillReadyEvent extends BaseEvent {
    _isSkillReadyEvent: true;
    _skillReadyContent: string;
    _skillReadyItems: SkillReadyItem[];
}
/**
 * Type guard for Skill Ready events.
 */
export declare const isSkillReadyEvent: (event: unknown) => event is SkillReadyEvent;
/**
 * Creates a synthetic "Skill Ready" event from a user MessageEvent.
 * This event appears as originating from the agent and contains formatted
 * information about activated skills and extended content.
 */
export declare const createSkillReadyEvent: (userEvent: MessageEvent) => SkillReadyEvent;

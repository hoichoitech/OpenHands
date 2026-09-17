import { type LatestAutomationRunState } from "#/hooks/query/use-latest-automation-runs";
import { type Automation } from "#/types/automation";
/**
 * Local preview of every pinned-card + activity-list state.
 *
 * Enable with either:
 * - `HOME_AUTOMATIONS_FORCE_DEMO = true` below
 * - `VITE_HOME_AUTOMATIONS_DEMO=true`
 */
export declare const HOME_AUTOMATIONS_FORCE_DEMO = false;
export declare const HOME_AUTOMATIONS_DEMO_KEY = "oh:home-automations-demo";
export declare function isHomeAutomationsDemoEnabled(): boolean;
/** Returns a demo conversation title, or `undefined` if not a demo id. */
export declare function getDemoConversationTitle(conversationId: string): string | null | undefined;
export declare const HOME_AUTOMATIONS_DEMO_PINNED_IDS: string[];
export declare const HOME_AUTOMATIONS_DEMO_AUTOMATIONS: Automation[];
export declare const HOME_AUTOMATIONS_DEMO_RUN_STATES: Map<string, LatestAutomationRunState>;

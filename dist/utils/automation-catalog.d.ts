import { type RecommendedAutomation } from "@openhands/extensions/automations";
import type { LucideIcon } from "lucide-react";
import type { Automation } from "#/types/automation";
/**
 * The glyph a card shows in place of its integration logos, or null when it
 * has none to show and the logos speak for it.
 *
 * An entry naming the service it talks to is recognised by that service's
 * logo; one whose identity is the work itself declares a slug instead. The
 * lookup is a guard as much as a mapping — the catalog is published elsewhere,
 * so a slug this host has no artwork for falls back rather than rendering
 * nothing.
 */
export declare function getAutomationIcon(automation: RecommendedAutomation): LucideIcon | null;
/** Every integration the entry declares, in declaration order. */
export declare function getIntegrationIds(automation: RecommendedAutomation): string[];
/**
 * The integrations that gate this automation. One marked `required: false` can
 * be connected later, during setup, so it is still worth showing on the card
 * but must never stand between the user and a launch.
 */
export declare function getRequiredIntegrationIds(automation: RecommendedAutomation): string[];
/**
 * The command that invokes this automation's skill, or null when that skill is
 * invoked by description instead.
 *
 * The command is declared once, in the owning skill's own `triggers`; the
 * catalog names that skill only where it differs from the entry id.
 */
export declare function findAutomationCommand(automation: Pick<RecommendedAutomation, "id" | "skill">): string | null;
/**
 * What launching an automation card hands to the agent.
 *
 * The resolved command is passed through as-is: API routing (host, auth) is
 * discovered by the agent at runtime from `<RUNTIME_SERVICES>` in the system
 * prompt, and the skills themselves carry the instructions for reading that
 * block. An automation whose skill declares no command has the request spelled
 * out instead. Both are instructions to the agent rather than user-facing UI
 * copy, so they are intentionally in English and not localized.
 */
export declare function getAutomationLaunchPrompt(automation: RecommendedAutomation): string;
/**
 * The value statement an automation card shows for its completed runs, or
 * null when there is nothing defensible to say: no template provenance, no
 * honored `impact` declaration, an unknown count (older service with more
 * history than the sample), or a count of zero — absence, never a zero-value
 * claim. Provenance persists across prompt edits, so a reworked automation
 * keeps its template's phrase; the phrases are run-shaped, which keeps them
 * true for as long as the automation runs at all.
 */
export declare function resolveAutomationImpactStatement(automation: Automation, completedTotal: number | null): string | null;

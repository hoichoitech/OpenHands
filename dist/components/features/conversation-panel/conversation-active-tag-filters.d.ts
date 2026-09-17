interface ConversationActiveTagFiltersProps {
    selectedFacets: readonly string[];
    onToggleFacet: (facet: string) => void;
    /** Automation names narrowing the list in `only-automations` mode. */
    selectedAutomationNames: readonly string[];
    onToggleAutomationName: (name: string) => void;
    onClearAll: () => void;
}
/**
 * Always-visible record of which facet selections are narrowing the list —
 * both families: user tags and automation names.
 *
 * The facet rows live two levels inside a menu (tag facets behind a toggle in
 * the layouts menu, automation names inside the advanced-options modal).
 * Without this strip a filter left switched on just makes conversations
 * disappear, with nothing on screen to say why or how to get them back — and
 * both selections are persisted, so a reload brings the narrowing back with
 * the explanation still buried.
 *
 * The automation *mode* deliberately has no chip here: it is a scope, not a
 * facet selection, and `onClearAll` leaves it alone for the same reason —
 * this strip must not silently switch a surface it doesn't show.
 *
 * Renders nothing when nothing is selected — an empty bar would cost a row
 * of a narrow sidebar to say "no news".
 */
export declare function ConversationActiveTagFilters({ selectedFacets, onToggleFacet, selectedAutomationNames, onToggleAutomationName, onClearAll, }: ConversationActiveTagFiltersProps): import("react").JSX.Element | null;
export {};

import React from "react";
import type { BackendKind } from "#/api/backend-registry/types";
export interface AdvancedConversationOptionsModalProps {
    open: boolean;
    onClose: () => void;
    backendKind: BackendKind;
    /**
     * Distinct automation names among the loaded conversations. Rendered as
     * selectable rows under the Automations section in `only-automations`
     * mode — the only control for `selectedAutomationNames`, which is
     * persisted and narrows the list on its own.
     */
    automationNameFacets: readonly string[];
}
/**
 * The full preference surface, promoted from the old hamburger filter menu
 * into its own modal (design from the 2026-08-14 PM walkthrough video).
 * Rows apply immediately and stay open — the modal closes only via the
 * top-right X, footer Close, Escape, or backdrop click.
 */
export declare function AdvancedConversationOptionsModal({ open, onClose, backendKind, automationNameFacets, }: AdvancedConversationOptionsModalProps): React.JSX.Element | null;

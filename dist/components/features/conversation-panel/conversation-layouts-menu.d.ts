import React from "react";
import { I18nKey } from "#/i18n/declaration";
import type { BackendKind } from "#/api/backend-registry/types";
import { type LayoutSettingsSlice } from "#/stores/conversation-panel-preferences-store";
interface LayoutPreset {
    id: string;
    icon: React.ComponentType<{
        className?: string;
        "aria-hidden"?: boolean;
    }>;
    /** Omitted for the backend-dependent first preset (workspace vs repo). */
    labelKey?: I18nKey;
    settings: LayoutSettingsSlice;
}
export declare function getActiveLayoutPreset(settings: LayoutSettingsSlice): LayoutPreset | null;
export interface ConversationLayoutsMenuProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    menuRef: React.RefObject<HTMLDivElement | null>;
    backendKind: BackendKind;
    /** Distinct user-facing `key=value` facets among the loaded conversations. */
    tagFacets: readonly string[];
    /** Distinct automation names; the advanced modal owns their facet rows. */
    automationNameFacets: readonly string[];
    totalConversationsCount: number;
    onRequestDeleteAll: () => void;
}
export declare function ConversationLayoutsMenu({ menuOpen, setMenuOpen, menuRef, backendKind, tagFacets, automationNameFacets, totalConversationsCount, onRequestDeleteAll, }: ConversationLayoutsMenuProps): React.JSX.Element;
export {};

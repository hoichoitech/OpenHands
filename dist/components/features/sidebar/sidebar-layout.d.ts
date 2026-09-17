/** Nav rows and side nav links — hover color/background snap instantly (no fade). */
export declare const navInteractiveTransitionClassName = "transition-none motion-reduce:transition-none";
/** Expanded sidebar icon column beside labels (matches 36px nav rows). */
export declare const SIDEBAR_ICON_SLOT_CLASS = "flex h-9 w-[18px] shrink-0 items-center justify-center";
/** Collapsed rail: 36px-tall hit target; width follows the row (full rail). */
export declare const SIDEBAR_COLLAPSED_ICON_SLOT_CLASS = "relative h-9 min-h-9 max-h-9 w-full shrink-0";
export declare const SIDEBAR_HEADER_ROW_CLASS = "flex h-10 min-h-10 shrink-0 items-center gap-2 pl-2.5 pr-2.5 w-full";
export declare function sidebarHeaderRowClassName(collapsed: boolean): string;
export declare const SIDEBAR_ROW_INTERACTIVE_CLASS: {
    readonly active: "bg-tertiary text-white font-normal";
    readonly idle: "text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)]";
};
export declare function sidebarNavListClassName(collapsed: boolean): string;
export declare function sidebarNavRowClassName(options?: {
    indent?: boolean;
    collapsed?: boolean;
}): string;
export declare function sidebarCollapsedIconBgClassName(active: boolean): string;
/** Matches expanded row `px-2.5` + 18px icon column alignment. */
export declare function sidebarCollapsedIconGlyphClassName(active: boolean): string;
export declare function sidebarNavLabelClassName(collapsed: boolean): string;
export declare const SIDEBAR_ICON_BUTTON_CLASS: string;
/** Logo + expand overlay when the desktop rail is collapsed. */
export declare const SIDEBAR_COLLAPSED_LOGO_WRAPPER_CLASS: string;
export declare const SIDEBAR_COLLAPSE_TOGGLE_OVERLAY_CLASS: string;

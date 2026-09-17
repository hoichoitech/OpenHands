/**
 * Full Tailwind candidates for fine-hover media — devices where CSS `:hover`
 * is a reliable primary interaction (mouse/trackpad). Coarse-pointer /
 * touch-primary devices match the inverse and keep overflow actions always
 * visible + clickable. Kept as complete string literals so the production CSS
 * scanner can emit the arbitrary-variant rules (dynamic prefix concatenation
 * is not discoverable).
 */
export declare const FINE_HOVER_ACTION_CLASSES: readonly ["[@media(hover:hover)_and_(pointer:fine)]:pointer-events-none", "[@media(hover:hover)_and_(pointer:fine)]:invisible", "[@media(hover:hover)_and_(pointer:fine)]:opacity-0", "[@media(hover:hover)_and_(pointer:fine)]:group-hover:pointer-events-auto", "[@media(hover:hover)_and_(pointer:fine)]:group-hover:visible", "[@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100", "[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:pointer-events-auto", "[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:visible", "[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:opacity-100"];
export declare const FINE_HOVER_YIELD_CLASSES: readonly ["[@media(hover:hover)_and_(pointer:fine)]:opacity-100", "[@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-0", "[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:opacity-0"];
export declare const FINE_HOVER_RESERVE_CLASSES: readonly ["[@media(hover:hover)_and_(pointer:fine)]:min-w-0", "[@media(hover:hover)_and_(pointer:fine)]:group-hover:min-w-[3.75rem]", "[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:min-w-[3.75rem]"];
export declare const FINE_HOVER_PINNED_TIMESTAMP_CLASSES: readonly ["[@media(hover:hover)_and_(pointer:fine)]:flex", "[@media(hover:hover)_and_(pointer:fine)]:group-hover:hidden", "[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:hidden"];
/**
 * Overlay action chrome (ellipsis, pin, etc.): always interactable on touch;
 * hover/focus-reveal only on fine-pointer hover devices.
 */
export declare function hoverRevealActionClassName(forceVisible?: boolean): string;
/**
 * Companion for timestamps that yield space to hover-reveal actions:
 * hidden on touch (actions stay visible); on fine-pointer devices, visible
 * until the row is hovered / focused / menu-open.
 */
export declare function hoverRevealYieldClassName(forceHidden?: boolean): string;
/**
 * Reserve trailing space for hover-reveal actions. Always reserved on touch;
 * on fine-pointer devices, reserved on hover / focus / open.
 */
export declare function hoverRevealReserveClassName(forceReserved?: boolean): string;
/**
 * Absolute-positioned timestamp that sits under a pinned-card ellipsis slot:
 * shown at rest on fine-pointer devices, hidden when the row reveals actions
 * (or when the menu is open / on touch where the ellipsis stays visible).
 */
export declare function hoverRevealPinnedTimestampClassName(forceHidden?: boolean): string;

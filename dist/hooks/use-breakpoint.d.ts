/**
 * Inclusive max width where the primary sidebar rail is hidden (`max-md:hidden`)
 * and the slide-out drawer is used. Matches typical Tailwind `md` (48rem): rail
 * shows from 768px upward, so we treat width <= 767 as drawer-only.
 */
export declare const SIDEBAR_RAIL_COLLAPSE_MAX_WIDTH = 767;
/**
 * Returns true when window width is at or below the breakpoint.
 * Only triggers a re-render when the boolean value changes (i.e., when the
 * width crosses the breakpoint), NOT on every pixel of resize.
 *
 * This replaces useWindowSize() for breakpoint detection, avoiding
 * unnecessary re-renders during drag resize.
 */
export declare function useBreakpoint(breakpoint?: number): boolean;

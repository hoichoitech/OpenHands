/**
 * Opacity of the ring's unfilled track, as a fraction of `--oh-foreground`.
 *
 * The track is derived from the foreground rather than pinned to a scale stop.
 * It carries information (the arc's proportion is only readable against it), so
 * it is a foreground element, and every stop in the surface family sits close
 * to the surfaces it delimits. Drawing it with `--oh-border` put it in that
 * family: it was 1.57:1 against the composer at rest, and the trigger's hover
 * fill resolves to the same stop, taking it to 1.00:1. No stop in that family
 * fixes it, and no fixed stop holds across the three palettes in
 * `color-themes.ts`, whose scales differ.
 *
 * Compositing the foreground over whatever the active theme paints keeps the
 * track between surface and arc by construction rather than by coincidence.
 * 42% is the value that maximises the worst case across the shipped palettes;
 * `context-window-ring.test.tsx` asserts it per theme.
 */
export declare const CONTEXT_WINDOW_RING_TRACK_ALPHA = 0.42;
/** Shared by the ring's track and the popover's usage bar, which had the same defect. */
export declare const CONTEXT_WINDOW_TRACK_COLOR = "color-mix(in srgb, var(--oh-foreground) 42%, transparent)";
interface ContextWindowRingProps {
    percentage: number;
    className?: string;
}
export declare function ContextWindowRing({ percentage, className, }: ContextWindowRingProps): import("react").JSX.Element;
export {};

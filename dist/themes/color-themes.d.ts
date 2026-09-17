export type ColorThemeKey = "openhands-deepsea" | "openhands-neutral" | "openhands-neo";
export interface ColorThemeDefinition {
    label: string;
    /** Overrides for --cool-grey-* CSS custom properties (our semantic scale) */
    scale: Record<string, string>;
    /**
     * Overrides for --heroui-* CSS custom properties.
     * HeroUI stores colors as space-separated HSL channels ("H S% L%") so Tailwind
     * utilities like bg-default-200 resolve to hsl(var(--heroui-default-200)).
     * These vars are set by the heroui() plugin on :root, [data-theme=dark] at
     * build time, so they must be overridden at the same or lower specificity
     * from a later stylesheet to pick up theme changes at runtime.
     */
    heroui: Record<string, string>;
    /** Overrides for --oh-* semantic tokens such as brand / button colors. */
    tokens?: Record<string, string>;
}
/** CSS custom properties overridden by color themes (see applyColorTheme). */
export declare const COLOR_THEME_TOKEN_KEYS: readonly ["--oh-color-primary", "--oh-accent", "--oh-warning"];
export declare const COLOR_THEMES: Record<ColorThemeKey, ColorThemeDefinition>;
export declare const DEFAULT_COLOR_THEME: ColorThemeKey;
export declare const AVAILABLE_COLOR_THEMES: {
    key: ColorThemeKey;
    label: string;
}[];
/** Read the persisted theme key from localStorage, falling back to the default. */
export declare function readPersistedColorTheme(): ColorThemeKey;
/** Persist the theme key to localStorage. */
export declare function persistColorTheme(key: ColorThemeKey): void;
/**
 * Apply a theme by injecting (or replacing) a <style> tag that overrides
 * both our custom --cool-grey-* primitives and HeroUI's --heroui-* tokens.
 *
 * Why a <style> tag:
 *   PostCSS transforms :root / body to [data-agent-server-ui], so --cool-grey-*
 *   is set on EVERY element carrying that attribute. A body inline-style only
 *   overrides body itself — inner matching elements keep the stylesheet value.
 *
 * Why heroui variables:
 *   HeroUI stores colors as HSL channels in --heroui-* vars on [data-theme=dark].
 *   They reference their own token system and are unaffected by --cool-grey-*
 *   changes, so we override them from the same injected sheet.
 *
 * Why doubled selectors + re-append on every call:
 *   "Later sheet wins the tie" cannot be relied on: in the built SPA
 *   (ssr:false, prerendered shell) React 19 re-creates the <head> elements it
 *   manages (<Meta/>/<Links/>) whenever the tree above the router remounts.
 *   That can re-insert the base stylesheet <link> AFTER this tag, allowing its
 *   unlayered [data-agent-server-ui] variable rules (0,1,0) to win every tie.
 *   Doubling the attribute selectors ([x][x], 0,2,0) beats them from any
 *   position in <head>; re-appending on each apply keeps document order
 *   favorable as well.
 */
export declare function applyColorTheme(key: ColorThemeKey): void;

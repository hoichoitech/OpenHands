export type OpenHandsLogoButtonProps = {
    className?: string;
    /** Applied to the root `<svg>` (e.g. `max-w-none` so Tailwind preflight doesn’t clamp wide marks inside a narrow flex slot). */
    logoClassName?: string;
    logoWidth?: number;
    logoHeight?: number;
};
export declare function OpenHandsLogoButton({ className, logoClassName, logoWidth, logoHeight, }?: OpenHandsLogoButtonProps): import("react").JSX.Element;

import type { LucideIcon } from "lucide-react";
export interface OverviewTileView {
    key: string;
    label: string;
    value: string;
    detail: string;
    Icon: LucideIcon;
}
interface ManifestOverviewTilesProps {
    /** Names the section for assistive technology. */
    label: string;
    tiles: OverviewTileView[];
}
/**
 * A grid of summary tiles. Purely presentational — which tiles exist, their
 * captions, and their computed values arrive fully resolved from the caller.
 */
export declare function ManifestOverviewTiles({ label, tiles, }: ManifestOverviewTilesProps): import("react").JSX.Element;
export {};

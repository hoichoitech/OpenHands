interface FilePathChipProps {
    path: string;
    /** Optional line-range suffix, e.g. "12-48". */
    range?: string;
    /**
     * Opens the referenced file when the surrounding visualizer can navigate.
     * Defaults to `openWorkspaceFile` so chips without a parent handler still
     * deep-link into the Files drawer.
     */
    onClick?: () => void;
}
/**
 * Monospace file-path pill with an optional navigation affordance.
 *
 * Passing `onClick` upgrades the same visual language to a custom handler
 * (e.g. markdown artifact View). Without it, click opens the Files drawer.
 */
export declare function FilePathChip({ path, range, onClick }: FilePathChipProps): import("react").JSX.Element;
export {};

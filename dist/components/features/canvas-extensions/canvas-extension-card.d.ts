import type { InstalledCanvasExtensionInfo } from "#/types/canvas-extension";
interface CanvasExtensionCardProps {
    extension: InstalledCanvasExtensionInfo;
    isBusy: boolean;
    onToggle: () => void;
    onUninstall: () => void;
}
export declare function CanvasExtensionCard({ extension, isBusy, onToggle, onUninstall, }: CanvasExtensionCardProps): import("react").JSX.Element;
export {};

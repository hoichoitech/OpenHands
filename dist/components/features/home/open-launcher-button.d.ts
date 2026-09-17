interface OpenLauncherButtonProps {
    kind: "local" | "cloud";
    onClick: () => void;
    disabled?: boolean;
    disabledTooltip?: string | null;
}
export declare function OpenLauncherButton({ kind, onClick, disabled, disabledTooltip, }: OpenLauncherButtonProps): import("react").JSX.Element;
export {};

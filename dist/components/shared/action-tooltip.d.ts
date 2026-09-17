interface ActionTooltipProps {
    type: "confirm" | "reject";
    onClick: () => void;
}
export declare function ActionTooltip({ type, onClick }: ActionTooltipProps): import("react").JSX.Element;
export {};

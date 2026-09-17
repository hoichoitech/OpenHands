import { ReactNode } from "react";
interface MetricRowProps {
    label: ReactNode;
    value: ReactNode;
    labelClassName?: string;
    valueClassName?: string;
    showBorder?: boolean;
}
export declare function MetricRow({ label, value, labelClassName, valueClassName, showBorder, }: MetricRowProps): import("react").JSX.Element;
export {};

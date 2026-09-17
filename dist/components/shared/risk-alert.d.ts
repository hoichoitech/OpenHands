import { ReactNode } from "react";
interface RiskAlertProps {
    className?: string;
    content: ReactNode;
    icon?: ReactNode;
    severity: "high" | "medium" | "low";
    title: string;
}
export declare function RiskAlert({ className, content, icon, severity, title, }: RiskAlertProps): import("react").JSX.Element | null;
export {};

import type { ReactNode } from "react";
import type { IntegrationCatalogEntry } from "@openhands/extensions/integrations";
type McpLogoEntry = Pick<IntegrationCatalogEntry, "id" | "name" | "iconBg" | "iconColor" | "logoUrl">;
export type { McpLogoEntry };
interface McpLogoBadgeProps {
    entry?: McpLogoEntry | null;
    size?: "xs" | "sm" | "base" | "md";
    className?: string;
    fallback?: ReactNode;
    testId?: string;
}
export declare function McpLogoBadge({ entry, size, className, fallback, testId, }: McpLogoBadgeProps): import("react").JSX.Element;

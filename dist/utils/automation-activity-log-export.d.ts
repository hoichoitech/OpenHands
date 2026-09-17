import type { ActivityLogExportFormat, Automation, AutomationRun, AutomationRunExportRow } from "#/types/automation";
export declare function getActivityLogExportFilename(automation: Pick<Automation, "id" | "name">, format: ActivityLogExportFormat): string;
export declare function serializeActivityLogRowsCsv(rows: AutomationRunExportRow[]): string;
export declare function buildConversationUrl(conversationId: string | null, conversationBaseUrl?: string): string | null;
export declare function mapAutomationRunToExportRow(run: AutomationRun, automation: Pick<Automation, "id" | "name" | "trigger">, conversationBaseUrl?: string): AutomationRunExportRow;
/**
 * Page ``GET /v1/{id}/runs`` until complete, then project export rows locally.
 */
export declare function fetchAllActivityLogExportRows(automation: Pick<Automation, "id" | "name" | "trigger">, conversationBaseUrl?: string): Promise<AutomationRunExportRow[]>;
/**
 * Page the runs list endpoint and download one CSV or JSON file.
 */
export declare function downloadActivityLogExport(options: {
    automation: Pick<Automation, "id" | "name" | "trigger">;
    format: ActivityLogExportFormat;
    conversationBaseUrl?: string;
}): Promise<void>;

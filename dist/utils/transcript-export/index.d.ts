import type { OpenHandsEvent } from "#/types/agent-server/core";
export type TranscriptExportFormat = "markdown" | "html";
export interface TranscriptExportOptions {
    includeToolDetails: boolean;
    includeTimestamps: boolean;
    title?: string | null;
    model?: string | null;
}
export declare const eventsToMarkdown: (events: OpenHandsEvent[], options: TranscriptExportOptions) => string;
export declare const eventsToHtml: (events: OpenHandsEvent[], options: TranscriptExportOptions) => string;

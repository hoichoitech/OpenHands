import type { ErrorClassification } from "@openhands/typescript-client";
interface ErrorDetails {
    source?: string;
    metadata?: Record<string, unknown>;
    classification?: ErrorClassification | null;
}
export declare function trackError({ source, metadata, classification, }: ErrorDetails): void;
export {};

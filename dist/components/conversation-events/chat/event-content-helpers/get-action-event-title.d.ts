import type { ActionEvent } from "#/types/agent-server/core";
export type EventTitleDescriptor = {
    readonly kind: "translation";
    readonly key: string;
    readonly values: Readonly<Record<string, unknown>>;
} | {
    readonly kind: "text";
    readonly text: string;
};
export declare const trimEventTitleText: (text: string, maxLength: number) => string;
export declare const getActionSummaryTitle: (event: ActionEvent) => string | null;
export declare const getActionEventTitleDescriptor: (event: ActionEvent) => EventTitleDescriptor;

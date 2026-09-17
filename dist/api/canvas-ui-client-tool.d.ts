export { CANVAS_UI_CLIENT_ACTION_KIND, CANVAS_UI_CLIENT_TOOL_NAME, LEGACY_CANVAS_UI_TOOL_NAME, } from "#/constants/canvas-ui";
export interface ClientToolSpec {
    name: string;
    description: string;
    parameters: Record<string, unknown>;
    annotations?: {
        title?: string | null;
        readOnlyHint: boolean;
        destructiveHint: boolean;
        idempotentHint: boolean;
        openWorldHint: boolean;
    };
}
export declare const CANVAS_UI_CLIENT_TOOL: ClientToolSpec;

import type { CanvasExtensionModule } from "#/types/canvas-extension";
export declare class InvalidCanvasExtensionModuleError extends Error {
    constructor(message: string);
}
export declare function assertCanvasExtensionModule(value: unknown): asserts value is CanvasExtensionModule;
/**
 * Import an authenticated, self-contained ESM bundle without putting the
 * Agent Server session key in a URL. The source has already been fetched by
 * Canvas through its authenticated HTTP client.
 */
export declare function loadCanvasExtensionModule(source: string): Promise<CanvasExtensionModule>;

import React from "react";
import { type CanvasExtensionModule, type CanvasExtensionPageContribution, type CanvasExtensionPageMount, type InstalledCanvasExtensionInfo } from "#/types/canvas-extension";
export interface RegisteredCanvasExtensionPage {
    extension: InstalledCanvasExtensionInfo;
    contribution: CanvasExtensionPageContribution;
    mount: CanvasExtensionPageMount;
    href: string;
}
interface CanvasExtensionsRuntimeValue {
    pages: RegisteredCanvasExtensionPage[];
    activating: boolean;
    errors: ReadonlyMap<string, string>;
}
export declare function useCanvasExtensionsRuntime(): CanvasExtensionsRuntimeValue;
export declare function buildCanvasExtensionPageHref(extensionName: string, contributionPath: string): string;
type CanvasExtensionModuleLoader = (source: string) => Promise<CanvasExtensionModule>;
interface CanvasExtensionsRuntimeProviderProps {
    children: React.ReactNode;
    /** Test seam for environments that cannot import browser Blob URLs. */
    moduleLoader?: CanvasExtensionModuleLoader;
}
export declare function CanvasExtensionsRuntimeProvider({ children, moduleLoader, }: CanvasExtensionsRuntimeProviderProps): React.JSX.Element;
export {};

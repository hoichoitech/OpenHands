interface BrowserState {
    url: string;
    screenshotSrc: string;
}
interface BrowserStore extends BrowserState {
    setUrl: (url: string) => void;
    setScreenshotSrc: (screenshotSrc: string) => void;
    reset: () => void;
}
export declare const useBrowserStore: import("zustand").UseBoundStore<import("zustand").StoreApi<BrowserStore>>;
export {};

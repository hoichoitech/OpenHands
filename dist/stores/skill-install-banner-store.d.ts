interface SkillInstallBannerState {
    /**
     * Install observation event ids the user dismissed. Session-only by
     * design: the "skill not active in this conversation" condition persists
     * across reloads, so the banner truthfully reappearing then is fine. A
     * new install (new event id) resurfaces the banner after a dismissal;
     * replays of the same event stay dismissed.
     */
    dismissedEventIds: Record<string, true>;
}
interface SkillInstallBannerActions {
    dismiss: (eventIds: string[]) => void;
}
type SkillInstallBannerStore = SkillInstallBannerState & SkillInstallBannerActions;
export declare const useSkillInstallBannerStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<SkillInstallBannerStore>, "setState" | "devtools"> & {
    setState(partial: SkillInstallBannerStore | Partial<SkillInstallBannerStore> | ((state: SkillInstallBannerStore) => SkillInstallBannerStore | Partial<SkillInstallBannerStore>), replace?: false | undefined, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    setState(state: SkillInstallBannerStore | ((state: SkillInstallBannerStore) => SkillInstallBannerStore), replace: true, action?: (string | {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
        type: string;
    }) | undefined): void;
    devtools: {
        cleanup: () => void;
    };
}>;
export {};

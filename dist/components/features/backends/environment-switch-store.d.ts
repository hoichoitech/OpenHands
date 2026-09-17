export declare const ENVIRONMENT_SWITCH_DURATION_MS = 980;
export declare const ENVIRONMENT_SWITCH_SETACTIVE_DELAY_MS = 400;
export interface EnvironmentSwitchSnapshot {
    visible: boolean;
    target: string;
}
export declare function triggerEnvironmentSwitch(target: string): void;
export declare function dismissEnvironmentSwitch(): void;
export declare function subscribeEnvironmentSwitch(listener: () => void): () => void;
export declare function getEnvironmentSwitchSnapshot(): EnvironmentSwitchSnapshot;
/** Test-only: clear the pending hide timer and reset the snapshot. */
export declare function __resetEnvironmentSwitchOverlayForTests(): void;

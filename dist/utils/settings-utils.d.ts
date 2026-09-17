import { WebClientFeatureFlags } from "#/api/option-service/option.types";
import { Settings } from "#/types/settings";
export declare const parseMaxBudgetPerTask: (value: string) => number | null;
export declare const extractSettings: (formData: FormData) => Partial<Settings> & Record<string, unknown>;
export declare function isSettingsPageHidden(path: string, featureFlags: WebClientFeatureFlags | undefined): boolean;
export declare function getFirstAvailablePath(featureFlags: WebClientFeatureFlags | undefined): string | null;

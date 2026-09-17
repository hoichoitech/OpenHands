import { I18nKey } from "#/i18n/declaration";
export type SchedulePresetKind = "daily" | "weekdays" | "weekly";
export interface PresetSchedule {
    kind: SchedulePresetKind;
    hour: number;
    minute: number;
    weekday?: number;
}
export interface CustomSchedule {
    kind: "custom";
    raw: string;
    hour?: number;
    minute?: number;
}
export type ParsedSchedule = PresetSchedule | CustomSchedule;
export declare function parseCronSchedule(cron: string | undefined | null): ParsedSchedule;
export declare function buildCronSchedule(input: PresetSchedule): string;
export declare function formatTimeOfDay(hour: number, minute: number): string;
export declare function parseTimeOfDay(value: string): {
    hour: number;
    minute: number;
} | null;
export declare function formatEventOn(on: string | string[] | undefined): string;
/** Example expression shown when the cron field is empty. */
export declare const CRON_EXPRESSION_EXAMPLE = "*/10 * * * *";
export type CronScheduleValidation = {
    schedule: string;
} | {
    errorKey: I18nKey;
};
/**
 * Validate a raw cron expression from the edit form — `parseCronSchedule` only
 * classifies against the presets, reporting arbitrary text as `custom`.
 *
 * One-sided by design: rejects only what croniter certainly rejects, and defers
 * on anything it does not model.
 */
export declare function validateCronSchedule(raw: string): CronScheduleValidation;

import type { TFunction } from "i18next";
import type { SkillInfo } from "#/types/settings";
import { type SkillCardPill } from "./skill-card-pill-row";
type SkillPillVariant = "card" | "detail";
interface BuildSkillPillsOptions {
    variant?: SkillPillVariant;
    testIdPrefix?: string;
}
export declare function buildSkillPills(skill: SkillInfo, translate: TFunction, options?: BuildSkillPillsOptions): SkillCardPill[];
export {};

import { I18nKey } from "#/i18n/declaration";
import type { SkillType } from "#/types/settings";
interface SkillTypeBadgeProps {
    type: SkillType;
}
export declare function getSkillTypeLabelKey(type: SkillType): I18nKey;
export declare function SkillTypeBadge({ type }: SkillTypeBadgeProps): import("react").JSX.Element;
export {};

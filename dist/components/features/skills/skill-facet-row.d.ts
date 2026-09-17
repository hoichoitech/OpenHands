import { type LucideIcon } from "lucide-react";
import { I18nKey } from "#/i18n/declaration";
interface SkillFacetRowProps {
    labelKey: I18nKey;
    count: number;
    checked: boolean;
    disabled: boolean;
    icon?: LucideIcon;
    testId: string;
    onToggle: () => void;
}
export declare function SkillFacetRow({ labelKey, count, checked, disabled, icon: Icon, testId, onToggle, }: SkillFacetRowProps): import("react").JSX.Element;
export {};

import React from "react";
/** @deprecated Use {@link extensionModuleCardPillClassName} from `#/utils/extension-module-card-classes`. */
export declare const SKILL_CARD_PILL_CLASS = "inline-flex max-w-full shrink-0 items-center whitespace-nowrap rounded-full bg-[rgba(255,255,255,0.04)] px-2 py-0.5 text-[11px] leading-4 text-tertiary-light";
export interface SkillCardPill {
    id: string;
    node: React.ReactNode;
}
interface SkillCardPillRowProps {
    pills: SkillCardPill[];
    testId: string;
}
export declare function SkillCardPillRow({ pills, testId }: SkillCardPillRowProps): React.JSX.Element | null;
export {};

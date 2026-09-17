import React from "react";
import { I18nKey } from "#/i18n/declaration";
import { SkillReadyItem } from "../event-content-helpers/create-skill-ready-event";
interface SkillReadyContentListProps {
    items: SkillReadyItem[];
    /**
     * Translation key for the list header. Defaults to the "Triggered Skill
     * Knowledge:" label used by Skill Ready events; invoke-skill observations
     * pass "Invoked Skill Knowledge:" instead.
     */
    titleKey?: I18nKey;
}
export declare function SkillReadyContentList({ items, titleKey, }: SkillReadyContentListProps): React.JSX.Element;
export {};

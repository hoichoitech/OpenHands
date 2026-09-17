import React from "react";
import { I18nKey } from "#/i18n/declaration";
interface CirclePlusCheckToggleProps {
    testId?: string;
    isSelected: boolean;
    onToggle: (selected: boolean) => void;
    isDisabled?: boolean;
    className?: string;
    enableLabelKey?: I18nKey;
    disableLabelKey?: I18nKey;
    enableTooltipKey?: I18nKey;
    disableTooltipKey?: I18nKey;
    removeTooltipKey?: I18nKey;
}
export declare function CirclePlusBadge({ className, testId, tooltipKey, }: {
    className?: string;
    testId?: string;
    tooltipKey?: I18nKey;
}): React.JSX.Element;
export declare function CirclePlusCheckToggle({ testId, isSelected, onToggle, isDisabled, className, enableLabelKey, disableLabelKey, enableTooltipKey, disableTooltipKey, removeTooltipKey, }: CirclePlusCheckToggleProps): React.JSX.Element;
export {};

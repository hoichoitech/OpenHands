import { I18nKey } from "#/i18n/declaration";
export type Suggestion = {
    label: I18nKey | string;
    value: string;
};
interface SuggestionItemProps {
    suggestion: Suggestion;
    onClick: (value: string) => void;
}
export declare function SuggestionItem({ suggestion, onClick }: SuggestionItemProps): import("react").JSX.Element;
export {};

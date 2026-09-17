import { type Suggestion } from "./suggestion-item";
interface SuggestionsProps {
    suggestions: Suggestion[];
    onSuggestionClick: (value: string) => void;
}
export declare function Suggestions({ suggestions, onSuggestionClick, }: SuggestionsProps): import("react").JSX.Element;
export {};

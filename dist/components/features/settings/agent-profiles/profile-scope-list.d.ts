export interface ProfileScopeItem {
    name: string;
    description?: string | null;
}
interface ProfileScopeListProps {
    /** Prefix: the list is `<testId>-list`, each row `<testId>-<name>`. */
    testId: string;
    items: ProfileScopeItem[];
    selected: string[];
    isDisabled?: boolean;
    onToggle: (name: string, checked: boolean) => void;
}
/**
 * Per-item toggles for a profile scope field such as `mcp_server_refs`.
 *
 * Rows are keyed by the wire name — the same identifier the API takes — so an
 * entry this build has no description for is still legible and selectable.
 */
export declare function ProfileScopeList({ testId, items, selected, isDisabled, onToggle, }: ProfileScopeListProps): import("react").JSX.Element;
export {};

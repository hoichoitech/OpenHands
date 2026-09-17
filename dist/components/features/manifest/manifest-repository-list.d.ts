import type { SetupFormField as SetupFormFieldDefinition } from "#/manifests/types";
export interface SetupRepositoryListProps {
    name: string;
    field: SetupFormFieldDefinition;
    values: string[];
    /** Whether this backend can list the user's repositories to pick from. */
    canListRepositories: boolean;
    placeholder?: string;
    disabled: boolean;
    onChange: (values: string[]) => void;
    onBlur: () => void;
}
/**
 * A repository field that collects several repositories.
 *
 * One automation polling several repositories is the shape the entry asked
 * for; the alternative is one automation each, with the trigger label, tone and
 * schedule restated every time. Added repositories are listed above the input
 * that adds them, each removable, because the list is the answer and the input
 * is only how it is built.
 *
 * A repository already in the list is not added twice: the entry would poll it
 * twice per run for one result.
 */
export declare function SetupRepositoryList({ name, field, values, canListRepositories, placeholder, disabled, onChange, onBlur, }: SetupRepositoryListProps): import("react").JSX.Element;

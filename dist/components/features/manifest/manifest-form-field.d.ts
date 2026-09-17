import type { GitRepository } from "#/types/git";
import type { SetupFieldOption, SetupFormField as SetupFormFieldDefinition, SetupFormValue } from "#/manifests/types";
export interface SetupFormFieldProps {
    /** The record key the field is declared under, and what `{{form.x}}` reads. */
    name: string;
    field: SetupFormFieldDefinition;
    /** A list for a field collecting several values, a string for the rest. */
    value: SetupFormValue;
    /** Already-resolved copy: local checks and service errors look the same here. */
    error?: string;
    /** Declared options, or the ones the deployment supplied. */
    options: SetupFieldOption[];
    /** Whether dynamic options for this field are still loading. */
    isOptionsLoading?: boolean;
    /** The picked repository, kept so the picker can show what is selected. */
    repository: GitRepository | null;
    disabled: boolean;
    onChange: (value: SetupFormValue) => void;
    onRepositoryChange: (repository: GitRepository | null) => void;
    onBlur: () => void;
}
/**
 * Render one manifest-declared field.
 *
 * The host knows how to render a field *type*; what any field means is the
 * manifest's business. Every field's own copy comes from the manifest and is
 * never translated by the host; the only host string is the format hint the
 * repository fallback below needs, because no manifest declares it.
 */
export declare function SetupFormField({ name, field, value, error, options, isOptionsLoading, repository, disabled, onChange, onRepositoryChange, onBlur, }: SetupFormFieldProps): import("react").JSX.Element;

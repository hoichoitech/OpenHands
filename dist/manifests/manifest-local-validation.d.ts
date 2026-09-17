/**
 * The form model, and the host's own check of what the user typed into it.
 *
 * Local validation is a convenience, not the authority: it is instant and needs
 * no round trip, so it catches empty required fields and obvious typos.
 * Deployment-specific questions ("is a one-minute schedule allowed here?")
 * belong to preflight, which is authoritative.
 *
 * Errors are returned as codes rather than sentences so the host can render
 * them through its own translations; only manifest-authored copy is literal.
 */
import type { DeploymentCapabilities, SetupActionKind, SetupBlock, SetupFieldOption, SetupFormField, SetupFormFields, SetupFormValue, SetupFormValues } from "./types";
export type SetupFieldError = {
    code: "required";
} | {
    code: "minLength";
    length: number;
} | {
    code: "maxLength";
    length: number;
} | {
    code: "min";
    value: number;
} | {
    code: "max";
    value: number;
} | {
    code: "invalidOption";
} | {
    code: "unsafeExpressionLiteral";
};
export type SetupFieldErrors = Record<string, SetupFieldError>;
/** Field constraints supplied by the deployment rather than by the manifest. */
export interface SetupFieldOverride {
    options?: SetupFieldOption[];
}
export declare function triggerKinds(setup: SetupBlock): string[];
export declare function initialTriggerKind(setup: SetupBlock): string | null;
export declare function actionKinds(setup: SetupBlock): SetupActionKind[];
export declare function initialActionKind(setup: SetupBlock): SetupActionKind | null;
export type SetupFieldOverrides = Record<string, SetupFieldOverride>;
/**
 * Every input the form declares, keyed by name, whichever half it is in.
 *
 * Trigger inputs come first so the user is asked when it runs before what it
 * runs on, and so every derived view of the form keeps that order. Admission
 * rejects a name declared in both halves, so the merge cannot lose a field.
 */
export declare function collectFields(setup: SetupBlock, selectedTrigger?: string | null, selectedAction?: string | null): SetupFormFields;
/**
 * Feed deployment values into form field constraints, so the form offers only
 * what the deployment accepts.
 *
 * A `timezone` field is the case that needs it: a manifest declares no options
 * for one, because the accepted zones belong to the deployment. The cron
 * interval floor is deliberately left to preflight — the deployment owns that
 * limit and states it in its own words, and a local approximation would
 * pre-empt the authoritative message with a worse one.
 */
export declare function resolveFieldOverrides(setup: SetupBlock, capabilities: DeploymentCapabilities | null, selectedTrigger?: string | null, selectedAction?: string | null): SetupFieldOverrides;
/** The options a field offers, after deployment constraints are applied. */
export declare function getFieldOptions(name: string, field: SetupFormField, overrides?: SetupFieldOverrides): SetupFieldOption[];
export declare function fieldValues(value: SetupFormValue | undefined): string[];
/** The single value a field holds, or "" for a field collecting several. */
export declare function fieldText(value: SetupFormValue | undefined): string;
/** Initial form state: every declared field, seeded with its declared default. */
export declare function getInitialFormValues(setup: SetupBlock, selectedTrigger?: string | null, selectedAction?: string | null): SetupFormValues;
/** Check every declared field. Returns only the fields that failed. */
export declare function validateFormValues(setup: SetupBlock, values: SetupFormValues, overrides?: SetupFieldOverrides, selectedTrigger?: string | null, selectedAction?: string | null): SetupFieldErrors;

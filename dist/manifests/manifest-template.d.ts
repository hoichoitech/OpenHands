/**
 * Placeholder interpolation for setup copy and request-body strings.
 *
 * A setup block declares what the user sees and the two request strings the
 * host cannot derive as templates over a small set of namespaces. Interpolation
 * is plain substitution — there is no expression language, so a setup block
 * cannot express behavior here.
 */
import type { SetupEntry, SetupFormValues, SetupPayloadValue } from "./types";
export interface SetupScope {
    form?: SetupFormValues;
    /** The catalog entry the setup block belongs to. */
    automation?: SetupEntry;
}
/** Walk a dotted path through plain objects. */
export declare function getByPath(source: unknown, path: string): unknown;
/**
 * Substitute placeholders, keeping the resolved value's own type when the
 * template is nothing but that placeholder.
 *
 * This is what lets a request body state `"repos": "{{form.repositories}}"` and
 * get an array. Inside a sentence the same placeholder still reads as text,
 * because there is nowhere for a list to go in a string.
 *
 * Plain JSON form values are kept whole. A placeholder naming anything else -
 * for example `{{automation.setup}}`, or a browser `File` selected by the user -
 * reads as text like it does inside a sentence, so a manifest cannot state one
 * value and put its own object graph into the request body.
 */
export declare function interpolateValue(template: string, scope: SetupScope): SetupPayloadValue;
/** Substitute placeholders inside a template string. */
export declare function interpolateText(template: string, scope: SetupScope): string;
/** Substitute placeholders from a flat name → value record. */
export declare function interpolateValues(template: string, values: Record<string, string | number>): string;

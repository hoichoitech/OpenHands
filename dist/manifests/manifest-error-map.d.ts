/**
 * Translate service-reported errors back to the form field that produced them.
 *
 * The host validates and submits the *derived payload*, so errors come back
 * addressed by payload path (`trigger.schedule`) rather than by form field
 * (`schedule`). The reverse lookup is derived from the same builder that made
 * the payload; the mapping is lossy by nature, since one payload value can be
 * built from several fields.
 */
import type { SetupRequestBody } from "./types";
/** An error the service reported, addressed by payload path where it gave one. */
export interface ManifestServiceError {
    path: string;
    message: string;
}
export interface MappedManifestErrors {
    /** Keyed by form field name. */
    fieldErrors: Record<string, string>;
    /** Errors with no field to attach to; shown against the form as a whole. */
    formErrors: string[];
}
/**
 * Turn a service `loc` array into a path into the payload actually sent.
 *
 * A validation framework may address a value through segments that are not keys
 * of the request body — a discriminated union reports
 * `["body","trigger","cron","schedule"]` for a body whose trigger has no `cron`
 * key. Walking the payload and skipping segments that do not resolve reduces
 * that to `trigger.schedule` without knowing anything about the payload's
 * meaning.
 */
export declare function locToPayloadPath(loc: readonly (string | number)[], payload: unknown): string;
/**
 * Read errors out of a service response body, whichever of the two shapes it
 * uses: a preflight result keyed by field, or a validation failure keyed by
 * `loc`.
 */
export declare function normalizeServiceErrors(body: unknown, payload: SetupRequestBody | null): ManifestServiceError[];
/** Apply the derived payload-path map, falling back to a form-level error. */
export declare function mapServiceErrors(errors: readonly ManifestServiceError[], errorMap: Record<string, string[]>): MappedManifestErrors;

import { type MappedManifestErrors } from "#/manifests/manifest-error-map";
import type { SetupEntry, SetupFormValues } from "#/manifests/types";
/**
 * Stage 6 — ask the service whether a draft is valid before anything is created.
 *
 * The service is the authoritative validator, so what it receives is the derived
 * payload rather than the raw form values: what is checked is exactly what would
 * be sent. Errors come back addressed by payload path and are translated back to
 * fields through the map derived from that same builder.
 *
 * Resolves to null when there is no verdict — the entry has no draft to check,
 * the deployment does not implement preflight, a newer run has already
 * superseded this one, or the request failed. A missing preflight is not a
 * failure: local checks and the create response still stand between the user
 * and a bad configuration. Only a deployment without the endpoint is an
 * expected failure though, so any other one is reported.
 */
export declare function useSetupPreflight(entry: SetupEntry): (formValues: SetupFormValues, selectedTrigger?: string | null, selectedAction?: string | null) => Promise<MappedManifestErrors | null>;

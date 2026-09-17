/**
 * The only module that knows a setup entry configures an *automation*.
 *
 * The published contract states just what varies between entries; everything
 * derivable is the host's to generate. That derivation is here, and nowhere
 * else, so the rest of `src/manifests/` stays about forms rather than about
 * automations.
 *
 * The algorithm mirrors `tests/test_automation_setup.py::_render_payload` in
 * `OpenHands/extensions`, which is the authoritative reference: it produces the
 * request bodies published in that repository's contract fixtures, and those
 * were verified against the live service. The create model is `extra="forbid"`,
 * so any divergence is a hard 422 rather than a dropped field.
 */
import type { SetupActionKind, SetupEntry, SetupFormValues, SetupRequestBody } from "./types";
/**
 * The creation endpoint a derived draft would be posted to. Resolved on call
 * rather than at import, because the endpoint is the interface manifest's and
 * this module loads whether or not one was admitted.
 *
 * A bundle entry is created through the raw endpoint, because what it sends is
 * a tarball it uploaded rather than arguments to a preset. Called without an
 * entry - as the import path does - it answers for a prompt.
 */
export declare function automationCreateEndpoint(entry?: SetupEntry, selectedAction?: string | null): string;
/** Where a bundle's tarball is uploaded, before the create call. */
export declare function automationUploadEndpoint(): string;
export declare function missingCreateEndpoints(entry: SetupEntry, selectedAction?: string | null): string[];
/** Whether this entry ships a script tarball instead of a prompt. */
export declare function isBundleEntry(entry: SetupEntry): boolean;
export declare function isUploadAction(entry: SetupEntry, selectedAction?: string | null): boolean;
export declare function selectedActionKind(entry: SetupEntry | undefined, selectedAction?: string | null): SetupActionKind | "bundle" | "prompt";
/**
 * The `tarball_path` a preflight draft carries.
 *
 * Preflight runs on every field blur and the upload happens once, at submit,
 * so there is no real path to send yet. The service checks this field's scheme
 * at preflight and its ownership only at creation, so a well-formed stand-in
 * validates exactly what preflight is for - the rest of the body - without
 * uploading an archive per keystroke.
 */
export declare const PREFLIGHT_TARBALL_PATH = "oh-internal://uploads/00000000-0000-0000-0000-000000000000";
/**
 * The create request body these form values produce.
 *
 * No entry declares it: `name` comes from the entry, `repos` from the
 * repo-picker field and its declared provider, and `trigger` from the key and
 * fields under `form.triggers`. Only `prompt` and an event `filter` are
 * declared, because only they cannot be read off the form.
 *
 * Returns null for an assisted entry, which hands setup to a conversation
 * instead of sending a body.
 */
export declare function buildCreatePayload(entry: SetupEntry, values: SetupFormValues, 
/** Bundle/upload entries only: what the upload returned. */
tarballPath?: string, selectedTrigger?: string | null, selectedActionKey?: string | null): SetupRequestBody | null;
/**
 * The preflight body the host sends. The same shape for every entry, so no
 * entry declares it.
 */
export declare function buildPreflightBody(entry: SetupEntry, values: SetupFormValues, selectedTrigger?: string | null, selectedAction?: string | null): SetupRequestBody | null;
/**
 * What an assisted entry sends into the conversation that finishes setup.
 *
 * The command is not declared either: it lives once, in the owning skill's own
 * `triggers` frontmatter, and the skill defaults to the entry's id. An entry
 * whose skill is invoked by description rather than by command contributes
 * nothing here, and the answers alone open the conversation.
 */
export declare function buildAssistedMessage(entry: SetupEntry, values: SetupFormValues): string;
/**
 * Which form fields built each payload path.
 *
 * Preflight and the create endpoint reject a draft by payload path, and the
 * host has to turn that back into a highlighted input. Building the body with
 * each field standing in for its own value recovers the mapping exactly, so an
 * entry does not declare it.
 */
export declare function deriveErrorMap(entry: SetupEntry, selectedTrigger?: string | null, selectedAction?: string | null): Record<string, string[]>;

import type { CustomSecretWithoutValue } from "../secrets-service.types";
/**
 * Walk every page of the cloud `/api/v1/secrets/search` endpoint and return
 * the merged list. The cloud shape (name + description) matches
 * `CustomSecretWithoutValue`, so items pass through unchanged.
 */
export declare function fetchCloudSecrets(): Promise<CustomSecretWithoutValue[]>;
export interface SaveCloudSecretOptions {
    /** Name the secret should have after saving. */
    name: string;
    /** New value. Omit to leave the stored value untouched. */
    value?: string;
    description?: string;
    /** Name the secret is currently stored under, when editing an existing one. */
    previousName?: string;
}
/**
 * Create a cloud secret, or save changes to an existing one.
 *
 * The cloud splits a save across two endpoints, so this issues up to two
 * requests to cover the whole operation:
 *
 * - `PUT /api/v1/secrets/{previousName}` applies the name and description. It
 *   is the only endpoint that can rename, and the only one that rejects a
 *   collision with `400`. It never touches the value.
 * - `POST /api/v1/secrets` writes the value. It is a documented upsert
 *   ("creates a new custom secret, or overwrites it if it already exists") but
 *   it is keyed by the name in its body, so it cannot rename, and its `value`
 *   field is required, so it cannot express a metadata-only edit.
 *
 * The `PUT` runs first so a rejected rename fails before the value is
 * overwritten — the cloud exposes no way to read a value back, so a value lost
 * to a half-applied save is unrecoverable. Each request is retried on its own:
 * re-running the `PUT` after a failed `POST` would `404` once the rename has
 * landed.
 */
export declare function saveCloudSecret({ name, value, description, previousName, }: SaveCloudSecretOptions): Promise<void>;
export declare function deleteCloudSecret(name: string): Promise<void>;

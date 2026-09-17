import type { ProviderConnection } from "#/api/provider-connections-service/provider-connections-service.api";
interface ProviderConnectionModalProps {
    /** When `null` the modal is closed; otherwise it edits that connection. */
    connection?: ProviderConnection | null;
    /** When true the modal creates a new connection. */
    isCreate: boolean;
    onClose: () => void;
    /** Called with the saved connection so a caller can select it (create flow). */
    onSaved?: (connection: ProviderConnection) => void;
}
/**
 * Single modal for creating, editing, and rotating a provider connection. Create
 * is a POST; every edit (rename, base_url, key rotation) is a single PATCH. The
 * key field follows the same "empty means unchanged" convention as the profile
 * form, so a blank key on edit is simply omitted from the request — the
 * agent-server rejects `api_key: null`, so we never send it.
 */
export declare function ProviderConnectionModal({ connection, isCreate, onClose, onSaved, }: ProviderConnectionModalProps): import("react").JSX.Element | null;
export {};

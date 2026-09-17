import type { ProviderConnection } from "#/api/provider-connections-service/provider-connections-service.api";
interface DeleteProviderConnectionModalProps {
    connection: ProviderConnection | null;
    onClose: () => void;
}
export declare function DeleteProviderConnectionModal({ connection, onClose, }: DeleteProviderConnectionModalProps): import("react").JSX.Element | null;
export {};

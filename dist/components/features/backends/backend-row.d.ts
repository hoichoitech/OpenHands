import { type Backend } from "#/api/backend-registry/types";
import { type BackendHealth } from "#/hooks/query/use-backends-health";
interface BackendRowProps {
    backend: Backend;
    health: BackendHealth | undefined;
    orgLabel?: string;
    onSelect: () => void;
    onEdit: () => void;
    onRemove: () => void;
    onLogin?: (apiKey: string) => void;
}
export declare function BackendRow({ backend, health, orgLabel, onSelect, onEdit, onRemove, onLogin, }: BackendRowProps): import("react").JSX.Element;
export {};

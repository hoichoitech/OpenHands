import { ProfileInfo } from "#/api/profiles-service/profiles-service.api";
interface ProfilesBodyProps {
    isLoading: boolean;
    loadError: Error | null;
    profiles: ProfileInfo[];
    active: string | null;
    /** When false, rows render read-only (no actions menu) — cloud members. */
    canManage: boolean;
    /**
     * Display name per provider-connection id. When non-empty, profiles are
     * grouped under their connection's name so models sharing a provider are
     * visually clustered. Empty (the default, e.g. a cloud backend with no org
     * bound) renders a flat list identical to before.
     */
    connectionNamesById?: Record<string, string>;
    onActivate: (name: string) => void;
    onEdit: (profile: ProfileInfo) => void;
    onRename: (profile: ProfileInfo) => void;
    onDuplicate: (profile: ProfileInfo) => void;
    onDelete: (profile: ProfileInfo) => void;
    isActivating: boolean;
}
interface ProfileGroup {
    /** Connection id, or null for profiles with no provider connection. */
    connectionId: string | null;
    label: string | null;
    profiles: ProfileInfo[];
}
/**
 * Bucket profiles by their `provider_connection_id`, preserving input order
 * within each group and ordering groups by first appearance. Unlinked profiles
 * collect under a trailing `null` group.
 */
export declare function groupProfilesByConnection(profiles: ProfileInfo[], connectionNamesById: Record<string, string>): ProfileGroup[];
export declare function ProfilesBody({ isLoading, loadError, profiles, active, canManage, connectionNamesById, onActivate, onEdit, onRename, onDuplicate, onDelete, isActivating, }: ProfilesBodyProps): import("react").JSX.Element;
export {};

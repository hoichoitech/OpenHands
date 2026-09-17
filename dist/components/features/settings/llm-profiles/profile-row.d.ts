import { ProfileInfo } from "#/api/profiles-service/profiles-service.api";
interface ProfileRowProps {
    profile: ProfileInfo;
    isActive: boolean;
    /** When false, the row is read-only and the actions menu is hidden. */
    canManage: boolean;
    onActivate: (name: string) => void;
    onEdit: (profile: ProfileInfo) => void;
    onRename: (profile: ProfileInfo) => void;
    onDuplicate: (profile: ProfileInfo) => void;
    onDelete: (profile: ProfileInfo) => void;
    isActivating: boolean;
}
export declare function ProfileRow({ profile, isActive, canManage, onActivate, onEdit, onRename, onDuplicate, onDelete, isActivating, }: ProfileRowProps): import("react").JSX.Element;
export {};

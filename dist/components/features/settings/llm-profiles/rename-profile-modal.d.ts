import { ProfileInfo } from "#/api/profiles-service/profiles-service.api";
interface RenameProfileModalProps {
    profile: ProfileInfo | null;
    onClose: () => void;
}
export declare function RenameProfileModal({ profile, onClose, }: RenameProfileModalProps): import("react").JSX.Element | null;
export {};

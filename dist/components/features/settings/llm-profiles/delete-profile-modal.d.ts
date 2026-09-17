import { ProfileInfo } from "#/api/profiles-service/profiles-service.api";
interface DeleteProfileModalProps {
    profile: ProfileInfo | null;
    onClose: () => void;
}
export declare function DeleteProfileModal({ profile, onClose, }: DeleteProfileModalProps): import("react").JSX.Element | null;
export {};

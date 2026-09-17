import { ProfileInfo } from "#/api/profiles-service/profiles-service.api";
interface LlmProfilesManagerProps {
    onAddProfile?: () => void;
    onEditProfile?: (profile: ProfileInfo) => void;
}
export declare function LlmProfilesManager({ onAddProfile, onEditProfile, }: LlmProfilesManagerProps): import("react").JSX.Element;
export {};

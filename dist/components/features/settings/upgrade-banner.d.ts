interface UpgradeBannerProps {
    message: string;
    onUpgradeClick?: () => void;
    className?: string;
    isDisabled?: boolean;
}
export declare function UpgradeBanner({ message, onUpgradeClick, className, isDisabled, }: UpgradeBannerProps): import("react").JSX.Element;
export {};

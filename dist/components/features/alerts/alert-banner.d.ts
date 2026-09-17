interface AlertBannerProps {
    maintenanceStartTime?: string | null;
    faultyModels?: string[];
    errorMessage?: string | null;
    updatedAt: string;
}
export declare function AlertBanner({ maintenanceStartTime, faultyModels, errorMessage, updatedAt, }: AlertBannerProps): import("react").JSX.Element | null;
export {};

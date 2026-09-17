interface UploadedFileProps {
    file: File;
    onRemove: () => void;
    isLoading?: boolean;
}
export declare function UploadedFile({ file, onRemove, isLoading, }: UploadedFileProps): import("react").JSX.Element;
export {};

import React from "react";
interface UploadedImageProps {
    image: File;
    onRemove: () => void;
    isLoading?: boolean;
    showUploadAsFileToggle?: boolean;
    uploadAsFileActive?: boolean;
    onToggleUploadAsFile?: () => void;
}
export declare function UploadedImage({ image, onRemove, isLoading, showUploadAsFileToggle, uploadAsFileActive, onToggleUploadAsFile, }: UploadedImageProps): React.JSX.Element;
export {};

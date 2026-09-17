import React from "react";
interface ImagePreviewProps {
    src: string;
    onRemove?: () => void;
    size?: "small" | "large";
}
export declare function ImagePreview({ src, onRemove, size, }: ImagePreviewProps): React.JSX.Element;
export {};

import React from "react";
interface ImageLightboxProps {
    src: string;
    onClose: () => void;
}
/**
 * Full-size overlay for an image attachment. The thumbnail is a CSS downscale
 * of the same source, so no refetch is needed.
 */
export declare function ImageLightbox({ src, onClose }: ImageLightboxProps): React.JSX.Element;
export {};

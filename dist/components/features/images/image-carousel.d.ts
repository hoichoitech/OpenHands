import React from "react";
interface ImageCarouselProps {
    size: "small" | "large";
    images: string[];
    onRemove?: (index: number) => void;
}
export declare function ImageCarousel({ size, images, onRemove, }: ImageCarouselProps): React.JSX.Element;
export {};

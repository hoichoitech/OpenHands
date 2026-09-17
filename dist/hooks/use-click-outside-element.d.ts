import React from "react";
/**
 * Hook to call a callback function when an element is clicked outside
 * @param callback The callback function to call when the element is clicked outside
 */
export declare const useClickOutsideElement: <T extends HTMLElement>(callback: () => void, ignoreOutsideClickRef?: React.RefObject<HTMLElement | null>) => React.RefObject<T | null>;

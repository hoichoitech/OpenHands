import { RefObject } from "react";
export declare function useScrollToBottom(scrollRef: RefObject<HTMLDivElement | null>): {
    scrollRef: RefObject<HTMLDivElement | null>;
    autoScroll: boolean;
    setAutoScroll: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    scrollDomToBottom: () => void;
    hitBottom: boolean;
    setHitBottom: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    onChatBodyScroll: (e: HTMLElement) => void;
};

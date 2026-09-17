import React, { ReactNode, RefObject } from "react";
interface ScrollContextType {
    scrollRef: RefObject<HTMLDivElement | null>;
    autoScroll: boolean;
    setAutoScroll: (value: boolean) => void;
    scrollDomToBottom: () => void;
    hitBottom: boolean;
    setHitBottom: (value: boolean) => void;
    onChatBodyScroll: (e: HTMLElement) => void;
}
export declare const ScrollContext: React.Context<ScrollContextType | undefined>;
interface ScrollProviderProps {
    children: ReactNode;
    value?: ScrollContextType;
}
export declare function ScrollProvider({ children, value }: ScrollProviderProps): React.JSX.Element;
export declare function useScrollContext(): ScrollContextType;
export declare function useOptionalScrollContext(): ScrollContextType | undefined;
export {};

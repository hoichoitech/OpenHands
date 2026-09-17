import { ComponentType } from "react";
type ConversationTabNavProps = {
    tabValue: string;
    icon: ComponentType<{
        className: string;
    }>;
    onClick(): void;
    isActive?: boolean;
    label?: string;
    className?: string;
    /** Omit test id (e.g. offscreen width measurement clones). */
    measureOnly?: boolean;
    /** Disable layout-driven shifts while the drawer width is being dragged. */
    suppressLayoutAnimation?: boolean;
};
export declare function ConversationTabNav({ tabValue, icon: Icon, onClick, isActive, label, className, measureOnly, suppressLayoutAnimation, }: ConversationTabNavProps): import("react").JSX.Element;
export {};

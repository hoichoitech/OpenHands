interface ContextMenuIconTextProps {
    icon: React.ComponentType<{
        className?: string;
    }>;
    text: string;
    className?: string;
    iconClassName?: string;
    isActive?: boolean;
}
export declare function ContextMenuIconText({ icon: Icon, text, className, iconClassName, isActive, }: ContextMenuIconTextProps): import("react").JSX.Element;
export {};

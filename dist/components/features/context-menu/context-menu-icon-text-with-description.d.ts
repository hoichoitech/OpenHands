import React from "react";
interface ContextMenuIconTextWithDescriptionProps {
    icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    description: string;
    className?: string;
    iconClassName?: string;
    isActive?: boolean;
}
export declare function ContextMenuIconTextWithDescription({ icon, title, description, className, iconClassName, isActive, }: ContextMenuIconTextWithDescriptionProps): React.JSX.Element;
export {};

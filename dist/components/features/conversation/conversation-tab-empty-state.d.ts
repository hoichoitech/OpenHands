import type { ReactNode } from "react";
type ConversationTabEmptyStateProps = {
    icon: ReactNode;
    children: ReactNode;
    action?: ReactNode;
    className?: string;
};
/**
 * Shared empty state for right-drawer conversation tabs: small muted icon,
 * centered caption, optional action (use {@link BrandButton} variant="secondary").
 */
export declare function ConversationTabEmptyState({ icon, children, action, className, }: ConversationTabEmptyStateProps): import("react").JSX.Element;
export {};

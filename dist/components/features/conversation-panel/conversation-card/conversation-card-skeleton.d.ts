interface ConversationCardSkeletonProps {
    compact?: boolean;
}
/**
 * Loading placeholders for the conversation list. Non-compact: three bars;
 * compact: three small bars for the icon rail. Pulse stagger comes from
 * `.skeleton-stagger` in `tailwind.css`.
 */
export declare function ConversationCardSkeleton({ compact, }: ConversationCardSkeletonProps): import("react").JSX.Element;
export {};

interface SidebarConversationListProps {
    /**
     * Whether the surrounding sidebar rail is rendering in its collapsed icon-
     * only variant. Passed from `SidebarRailBody` so the mobile drawer (which
     * renders an expanded rail regardless of the persisted desktop state) can
     * force this list back on.
     */
    collapsed: boolean;
}
/**
 * Conversation list section rendered inside the sidebar nav. The list itself
 * scrolls independently from the rest of the nav.
 *
 * In the collapsed sidebar variant the list reduces each row to a status
 * indicator + hover-preview.
 *
 * On desktop the aside uses `pr-0` so this list is full width to the rail;
 * nav links above keep their own horizontal padding.
 */
export declare function SidebarConversationList({ collapsed, }: SidebarConversationListProps): import("react").JSX.Element | null;
export {};

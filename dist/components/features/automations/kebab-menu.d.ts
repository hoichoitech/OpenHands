export interface KebabMenuItem {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}
interface KebabMenuProps {
    items: KebabMenuItem[];
    triggerClassName?: string;
}
export declare function KebabMenu({ items, triggerClassName }: KebabMenuProps): import("react").JSX.Element;
export {};

interface MenuItemProps {
    index: number;
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    onKeyDown: (e: React.KeyboardEvent, index: number) => void;
    menuItemsRef: React.MutableRefObject<(HTMLButtonElement | null)[]>;
    disabled?: boolean;
    testId: string;
}
export declare function MenuItem({ index, icon, label, onClick, onKeyDown, menuItemsRef, disabled, testId, }: MenuItemProps): import("react").JSX.Element;
export {};

interface ContextMenuListItemProps {
    testId?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
    className?: string;
    ref?: React.Ref<HTMLButtonElement>;
}
export declare function ContextMenuListItem({ children, testId, onClick, isDisabled, className, ref, }: React.PropsWithChildren<ContextMenuListItemProps>): import("react").JSX.Element;
export {};

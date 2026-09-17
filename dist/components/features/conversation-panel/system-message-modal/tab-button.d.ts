interface TabButtonProps {
    isActive: boolean;
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}
export declare function TabButton({ isActive, children, onClick, className, disabled, }: TabButtonProps): import("react").JSX.Element;
export {};

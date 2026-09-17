interface HooksModalHeaderProps {
    isLoading: boolean;
    isRefetching: boolean;
    onRefresh: () => void;
    onClose: () => void;
}
export declare function HooksModalHeader({ isLoading, isRefetching, onRefresh, onClose, }: HooksModalHeaderProps): import("react").JSX.Element;
export {};

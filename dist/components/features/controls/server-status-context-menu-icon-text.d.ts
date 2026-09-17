interface ServerStatusContextMenuIconTextProps {
    icon: React.ReactNode;
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    testId?: string;
}
export declare function ServerStatusContextMenuIconText({ icon, text, onClick, testId, }: ServerStatusContextMenuIconTextProps): import("react").JSX.Element;
export {};

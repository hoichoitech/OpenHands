interface CopyToClipboardButtonProps {
    isHidden: boolean;
    isDisabled: boolean;
    onClick: () => void;
    mode: "copy" | "copied";
}
export declare function CopyToClipboardButton({ isHidden, isDisabled, onClick, mode, }: CopyToClipboardButtonProps): import("react").JSX.Element;
export {};

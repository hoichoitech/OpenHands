import React from "react";
interface HiddenFileInputProps {
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function HiddenFileInput({ fileInputRef, onChange, }: HiddenFileInputProps): React.JSX.Element;
export {};

interface DropdownInputProps {
    placeholder?: string;
    isDisabled: boolean;
    getInputProps: (props?: object) => object;
    /** When false, placeholder hint keeps upright type (e.g. backend selector). */
    italicPlaceholder?: boolean;
    fitContent?: boolean;
}
export declare function DropdownInput({ placeholder, isDisabled, getInputProps, italicPlaceholder, fitContent, }: DropdownInputProps): import("react").JSX.Element;
export {};

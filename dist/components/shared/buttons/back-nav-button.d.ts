import React from "react";
type BackNavButtonBaseProps = {
    children: React.ReactNode;
    testId?: string;
    className?: string;
};
type BackNavButtonAsButtonProps = BackNavButtonBaseProps & {
    onClick: () => void;
};
type BackNavButtonAsLinkProps = BackNavButtonBaseProps & {
    to: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};
export type BackNavButtonProps = BackNavButtonAsButtonProps | BackNavButtonAsLinkProps;
export declare function BackNavButton(props: BackNavButtonAsLinkProps): React.JSX.Element;
export declare function BackNavButton(props: BackNavButtonAsButtonProps): React.JSX.Element;
export {};

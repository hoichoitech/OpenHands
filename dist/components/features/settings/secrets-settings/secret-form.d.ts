import React from "react";
interface SecretFormProps {
    mode: "add" | "edit";
    selectedSecret: string | null;
    onCancel: () => void;
}
export declare function SecretForm({ mode, selectedSecret, onCancel, }: SecretFormProps): React.JSX.Element;
export {};

import React from "react";
interface FileListProps {
    files: string[];
    onRemove?: (index: number) => void;
}
export declare function FileList({ files, onRemove }: FileListProps): React.JSX.Element;
export {};

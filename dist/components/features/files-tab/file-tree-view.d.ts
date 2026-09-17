interface FileTreeViewProps {
    paths: string[];
    selectedPath: string | null;
    onSelectFile: (path: string) => void;
}
export declare function FileTreeView({ paths, selectedPath, onSelectFile, }: FileTreeViewProps): import("react").JSX.Element;
export {};

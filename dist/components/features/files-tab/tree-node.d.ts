import { FileTreeNode } from "#/utils/file-tree";
interface TreeNodeProps {
    node: FileTreeNode;
    depth: number;
    selectedPath: string | null;
    onSelectFile: (path: string) => void;
}
export declare function TreeNode({ node, depth, selectedPath, onSelectFile, }: TreeNodeProps): import("react").JSX.Element;
export {};

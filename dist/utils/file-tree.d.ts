export interface FileTreeNode {
    name: string;
    path: string;
    isDirectory: boolean;
    children: FileTreeNode[];
}
export declare function buildFileTree(paths: string[]): FileTreeNode;

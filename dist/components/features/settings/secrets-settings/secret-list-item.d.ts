export declare function SecretListItemSkeleton(): import("react").JSX.Element;
interface SecretListItemProps {
    title: string;
    description?: string;
    onEdit: () => void;
    onDelete: () => void;
}
export declare function SecretListItem({ title, description, onEdit, onDelete, }: SecretListItemProps): import("react").JSX.Element;
export {};

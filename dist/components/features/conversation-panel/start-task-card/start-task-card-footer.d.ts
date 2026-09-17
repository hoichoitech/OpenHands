import type { RepositorySelection } from "#/api/open-hands.types";
interface StartTaskCardFooterProps {
    selectedRepository: RepositorySelection | null;
    createdAt: string;
    detail: string | null;
}
export declare function StartTaskCardFooter({ selectedRepository, createdAt, detail, }: StartTaskCardFooterProps): import("react").JSX.Element;
export {};

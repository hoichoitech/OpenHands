interface TaskItemProps {
    task: {
        id: string;
        title: string;
        status: "todo" | "in_progress" | "done";
        notes?: string;
    };
}
export declare function TaskItem({ task }: TaskItemProps): import("react").JSX.Element;
export {};

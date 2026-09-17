export interface TaskListItem {
    id: string;
    title: string;
    status: "todo" | "in_progress" | "done";
    notes?: string;
}
export declare function useTaskList(): {
    taskList: TaskListItem[];
    hasTaskList: boolean;
};

type SubmittedEventId = string | number;
interface EventMessageState {
    submittedEventIds: SubmittedEventId[];
}
interface EventMessageStore extends EventMessageState {
    addSubmittedEventId: (id: SubmittedEventId) => void;
    removeSubmittedEventId: (id: SubmittedEventId) => void;
}
export declare const useEventMessageStore: import("zustand").UseBoundStore<import("zustand").StoreApi<EventMessageStore>>;
export {};

import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/event-message-store.ts
var t = e((e) => ({
	submittedEventIds: [],
	addSubmittedEventId: (t) => e((e) => ({ submittedEventIds: [...e.submittedEventIds, t] })),
	removeSubmittedEventId: (t) => e((e) => ({ submittedEventIds: e.submittedEventIds.filter((e) => e !== t) }))
}));
//#endregion
export { t as useEventMessageStore };

//# sourceMappingURL=event-message-store.js.map
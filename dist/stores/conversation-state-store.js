import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/conversation-state-store.ts
var t = e((e) => ({
	executionStatusByConversation: {},
	setExecutionStatus: (t, n) => e((e) => ({ executionStatusByConversation: {
		...e.executionStatusByConversation,
		[t]: n
	} })),
	reset: () => e({ executionStatusByConversation: {} })
}));
//#endregion
export { t as useConversationStateStore };

//# sourceMappingURL=conversation-state-store.js.map
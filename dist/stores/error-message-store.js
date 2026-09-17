import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/error-message-store.ts
var t = {
	errorMessage: null,
	errorType: null,
	errorCode: null,
	errorClassification: null
}, n = e((e) => ({
	...t,
	setErrorMessage: (t, n = "conversation", r = null, i = null) => e(() => ({
		errorMessage: t,
		errorType: n,
		errorCode: r,
		errorClassification: i
	})),
	removeErrorMessage: () => e(() => ({ ...t })),
	clearConnectionError: () => e((e) => e.errorType === "connection" ? { ...t } : e)
}));
//#endregion
export { n as useErrorMessageStore };

//# sourceMappingURL=error-message-store.js.map
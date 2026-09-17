import e from "../types/action-type.js";
//#region src/services/chat-service.ts
function t(t, n, r, i) {
	return {
		action: e.MESSAGE,
		args: {
			content: t,
			image_urls: n,
			file_urls: r,
			timestamp: i
		}
	};
}
//#endregion
export { t as createChatMessage };

//# sourceMappingURL=chat-service.js.map
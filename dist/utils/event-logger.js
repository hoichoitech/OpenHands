//#region src/utils/event-logger.ts
var e = class {
	static isDevMode = process.env.NODE_ENV === "development";
	static message(e) {
		this.isDevMode && console.warn(JSON.stringify(JSON.parse(e.data.toString()), null, 2));
	}
	static event(e, t) {
		this.isDevMode && console.warn(t || "EVENT", e);
	}
	static warning(e) {
		this.isDevMode && console.warn(e);
	}
	static error(e) {
		this.isDevMode && console.error(e);
	}
};
//#endregion
export { e as default };

//# sourceMappingURL=event-logger.js.map
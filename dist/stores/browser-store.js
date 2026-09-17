import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/browser-store.ts
var t = {
	url: "",
	screenshotSrc: ""
}, n = e((e) => ({
	...t,
	setUrl: (t) => e({ url: t }),
	setScreenshotSrc: (t) => e({ screenshotSrc: t }),
	reset: () => e(t)
}));
//#endregion
export { n as useBrowserStore };

//# sourceMappingURL=browser-store.js.map
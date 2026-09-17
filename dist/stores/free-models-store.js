import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/free-models-store.ts
var t = /* @__PURE__ */ new Set(), n = e()((e) => ({
	freeModels: t,
	defaultModel: null,
	defaultModelReady: !1,
	setFlags: (t) => e({
		freeModels: t.freeModels,
		defaultModel: t.defaultModel,
		defaultModelReady: !0
	}),
	markDefaultModelReady: () => e({ defaultModelReady: !0 }),
	resetFlags: () => e({
		freeModels: t,
		defaultModel: null,
		defaultModelReady: !1
	})
}));
//#endregion
export { n as useFreeModelsStore };

//# sourceMappingURL=free-models-store.js.map
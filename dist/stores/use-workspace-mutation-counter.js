import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/use-workspace-mutation-counter.ts
var t = e((e) => ({
	count: 0,
	bump: () => e((e) => ({ count: e.count + 1 }))
}));
function n(e, t) {
	return e === null ? null : `${e}${e.includes("?") ? "&" : "?"}v=${t}`;
}
//#endregion
export { t as useWorkspaceMutationCounter, n as withWorkspaceCacheBuster };

//# sourceMappingURL=use-workspace-mutation-counter.js.map
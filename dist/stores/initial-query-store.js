import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/initial-query-store.ts
var t = {
	files: [],
	initialPrompt: null,
	selectedRepository: null,
	selectedRepositoryProvider: null,
	replayJson: null
}, n = e((e) => ({
	...t,
	addFile: (t) => e((e) => ({ files: [...e.files, t] })),
	removeFile: (t) => e((e) => ({ files: e.files.filter((e, n) => n !== t) })),
	clearFiles: () => e(() => ({ files: [] })),
	setInitialPrompt: (t) => e(() => ({ initialPrompt: t })),
	clearInitialPrompt: () => e(() => ({ initialPrompt: null })),
	setSelectedRepository: (t) => e(() => ({ selectedRepository: t })),
	clearSelectedRepository: () => e(() => ({ selectedRepository: null })),
	setSelectedRepositoryProvider: (t) => e(() => ({ selectedRepositoryProvider: t })),
	setReplayJson: (t) => e(() => ({ replayJson: t })),
	reset: () => e(() => t)
}));
//#endregion
export { n as useInitialQueryStore };

//# sourceMappingURL=initial-query-store.js.map
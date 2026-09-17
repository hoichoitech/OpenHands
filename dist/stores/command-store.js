import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/command-store.ts
var t = e((e) => ({
	commands: [],
	appendInput: (t) => e((e) => ({ commands: [...e.commands, {
		content: t,
		type: "input"
	}] })),
	appendOutput: (t) => e((e) => ({ commands: [...e.commands, {
		content: t,
		type: "output"
	}] })),
	clearTerminal: () => e({ commands: [] })
}));
//#endregion
export { t as useCommandStore };

//# sourceMappingURL=command-store.js.map
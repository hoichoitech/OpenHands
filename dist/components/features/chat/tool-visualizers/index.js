import { bashVisualizer as e } from "./bash/bash.js";
import { fileEditorVisualizer as t } from "./file-editor/file-editor.js";
import { searchVisualizer as n } from "./search/search.js";
import { taskVisualizer as r } from "./task/task.js";
//#region src/components/features/chat/tool-visualizers/index.ts
var i = [
	e,
	t,
	n,
	r
], a = (e) => new Map(i.flatMap((t) => (e(t) ?? []).map((e) => [e, t]))), o = a((e) => e.actionKinds), s = a((e) => e.observationKinds);
//#endregion
export { o as actionVisualizers, s as observationVisualizers };

//# sourceMappingURL=index.js.map
import { useConversationId as e } from "../../../../../hooks/use-conversation-id.js";
import { useConversationStore as t } from "../../../../../stores/conversation-store.js";
import { TabWrapper as n } from "./tab-wrapper.js";
import { TabContainer as r } from "./tab-container.js";
import { TabContentArea as i } from "./tab-content-area.js";
import { ConversationTabContentCrossfade as a } from "./conversation-tab-content-crossfade.js";
import { lazy as o, useMemo as s } from "react";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-tabs/conversation-tab-content/conversation-tab-content.tsx
var l = o(() => import("../../../../../routes/files-tab.js")), u = o(() => import("../../../../../routes/commits-tab.js")), d = o(() => import("../../../../../routes/browser-tab.js")), f = o(() => import("../../../../../routes/planner-tab.js")), p = o(() => import("../../../../../routes/task-list-tab.js")), m = o(() => import("../../../../../routes/usage-tab.js")), h = o(() => import("../../../terminal/terminal.js")), g = {
	tasklist: { component: p },
	files: { component: l },
	commits: { component: u },
	browser: { component: d },
	terminal: { component: h },
	planner: { component: f },
	usage: { component: m }
};
function _() {
	let { selectedTab: o, shouldShownAgentLoading: l } = t(), { conversationId: u } = e(), d = s(() => g[o] ?? g.files, [o]).component, f = o === "terminal" ? `${o}-${u}` : o ?? "files";
	return /* @__PURE__ */ c(r, { children: /* @__PURE__ */ c(i, { children: /* @__PURE__ */ c(a, {
		showAgentLoading: l,
		tabKey: f,
		children: /* @__PURE__ */ c(n, { children: /* @__PURE__ */ c(d, {}) }, f)
	}) }) });
}
//#endregion
export { _ as ConversationTabContent };

//# sourceMappingURL=conversation-tab-content.js.map
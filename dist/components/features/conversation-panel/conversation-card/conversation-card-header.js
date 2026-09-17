import { isArchivedSandboxStatus as e } from "../../../../utils/conversation-archive-status.js";
import { ConversationCardTitle as t } from "./conversation-card-title.js";
import { ConversationStatusDot as n } from "../conversation-status-dot.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-card-header.tsx
function a({ title: a, titleMode: o, onTitleSave: s, executionStatus: c, sandboxStatus: l }) {
	let u = e(l);
	return /* @__PURE__ */ i("div", {
		className: "flex items-center gap-2 flex-1 min-w-0 overflow-hidden",
		children: [c !== void 0 && /* @__PURE__ */ r("div", {
			className: "flex w-[18px] shrink-0 items-center justify-center",
			children: /* @__PURE__ */ r(n, {
				executionStatus: c,
				sandboxStatus: l,
				showTooltip: !1
			})
		}), /* @__PURE__ */ r(t, {
			title: a,
			titleMode: o,
			onSave: s,
			isConversationArchived: u
		})]
	});
}
//#endregion
export { a as ConversationCardHeader };

//# sourceMappingURL=conversation-card-header.js.map
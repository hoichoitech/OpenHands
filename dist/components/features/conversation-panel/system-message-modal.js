import { ModalBackdrop as e } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as t } from "../../shared/modals/modal-body.js";
import { SystemMessageHeader as n } from "./system-message-modal/system-message-header.js";
import { TabNavigation as r } from "./system-message-modal/tab-navigation.js";
import { TabContent as i } from "./system-message-modal/tab-content.js";
import { useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal.tsx
function c({ isOpen: c, onClose: l, systemMessage: u }) {
	let [d, f] = a("system"), [p, m] = a({});
	return u ? c && /* @__PURE__ */ o(e, {
		onClose: l,
		children: /* @__PURE__ */ s(t, {
			width: "lg",
			className: "relative max-h-[80vh] flex flex-col items-start border border-[var(--oh-border)]",
			testID: "system-message-modal",
			children: [/* @__PURE__ */ o(n, {
				agentClass: u.agent_class,
				openhandsVersion: u.openhands_version,
				onClose: l
			}), /* @__PURE__ */ s("div", {
				className: "w-full",
				children: [/* @__PURE__ */ o(r, {
					activeTab: d,
					onTabChange: f,
					hasTools: !!(u.tools && u.tools.length > 0)
				}), /* @__PURE__ */ o("div", {
					className: "h-[60vh] overflow-auto rounded-md border border-[var(--oh-border)] bg-surface-raised custom-scrollbar-always",
					children: /* @__PURE__ */ o(i, {
						activeTab: d,
						systemMessage: u,
						expandedTools: p,
						onToggleTool: (e) => {
							m((t) => ({
								...t,
								[e]: !t[e]
							}));
						}
					})
				})]
			})]
		})
	}) : null;
}
//#endregion
export { c as SystemMessageModal };

//# sourceMappingURL=system-message-modal.js.map
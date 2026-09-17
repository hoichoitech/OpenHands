import { cn as e } from "../../../utils/utils.js";
import { extensionModuleCardGridClassName as t, extensionModuleCardGridContainerClassName as n } from "../../../utils/extension-module-card-classes.js";
import { automationActivityListClassName as r } from "./automation-view-mode.js";
import { AutomationCard as i } from "./automation-card.js";
import { AutomationListRow as a } from "./automation-list-row.js";
import { StatusBadge as o } from "./status-badge.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/automations/automation-group.tsx
function l({ title: l, count: u, automations: d, view: f, onToggle: p, onRunNow: m, runPendingId: h = null, onDelete: g, onExport: _, onEdit: v, insights: y }) {
	return d.length === 0 ? null : /* @__PURE__ */ c("section", { children: [/* @__PURE__ */ c("div", {
		className: "flex items-center",
		children: [/* @__PURE__ */ s("h2", {
			className: "text-base font-semibold text-foreground",
			children: l
		}), /* @__PURE__ */ s(o, { count: u })]
	}), f === "grid" ? /* @__PURE__ */ s("div", {
		className: e("mt-3", n),
		children: /* @__PURE__ */ s("div", {
			className: t,
			children: d.map((e) => /* @__PURE__ */ s(i, {
				automation: e,
				onToggle: p,
				onRunNow: m,
				isRunPending: h === e.id,
				onDelete: g,
				onExport: _,
				onEdit: v,
				insights: y && {
					spec: y.spec,
					state: y.byId.get(e.id)
				}
			}, e.id))
		})
	}) : /* @__PURE__ */ s("ul", {
		className: e(r, "mt-3"),
		children: d.map((e) => /* @__PURE__ */ s(a, {
			automation: e,
			onToggle: p,
			onRunNow: m,
			isRunPending: h === e.id,
			onDelete: g,
			onExport: _,
			onEdit: v,
			insights: y && {
				spec: y.spec,
				state: y.byId.get(e.id)
			}
		}, e.id))
	})] });
}
//#endregion
export { l as AutomationGroup };

//# sourceMappingURL=automation-group.js.map
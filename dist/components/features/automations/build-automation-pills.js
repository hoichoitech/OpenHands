import { Plug as e } from "../../../node_modules/lucide-react/dist/esm/icons/plug.js";
import { Zap as t } from "../../../node_modules/lucide-react/dist/esm/icons/zap.js";
import { cn as n } from "../../../utils/utils.js";
import { extensionModuleCardPillClassName as r } from "../../../utils/extension-module-card-classes.js";
import i from "../../../icons/folder.js";
import a from "../../../icons/clock.js";
import o from "../../../icons/sparkle.js";
import s from "../../../node_modules/@openhands/extensions/integrations/index.js";
import { McpLogoBadge as c } from "../mcp-logo-badge.js";
import { getMarketplaceEntryById as l } from "../../../utils/mcp-marketplace-utils.js";
import { formatTriggerSourceLabel as u, getTriggerEventLabel as d, getTriggerSource as f } from "../home/featured-automations/automation-run-health.js";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/automations/build-automation-pills.tsx
function h(h, g) {
	let _ = [];
	if (h.repository && _.push({
		id: "repository",
		node: /* @__PURE__ */ m("span", {
			className: n(r, "gap-1"),
			children: [/* @__PURE__ */ p(i, { className: "size-3 shrink-0" }), h.repository]
		})
	}), h.trigger.type === "event") {
		let i = d(h);
		i && _.push({
			id: "event-trigger",
			node: /* @__PURE__ */ m("span", {
				className: n(r, "gap-1"),
				children: [/* @__PURE__ */ p(t, {
					className: "size-3 shrink-0",
					"aria-hidden": "true"
				}), i]
			})
		});
		let a = f(h);
		if (a) {
			let t = l(a.toLowerCase(), s);
			_.push({
				id: "event-source",
				node: /* @__PURE__ */ m("span", {
					className: n(r, "gap-1"),
					children: [t ? /* @__PURE__ */ p(c, {
						entry: t,
						size: "xs",
						testId: "automation-source-logo"
					}) : /* @__PURE__ */ p(e, {
						className: "size-3 shrink-0",
						"aria-hidden": "true",
						"data-testid": "automation-source-logo"
					}), u(a)]
				})
			});
		}
	} else _.push({
		id: "schedule",
		node: /* @__PURE__ */ m("span", {
			className: n(r, "gap-1"),
			children: [/* @__PURE__ */ p(a, { className: "size-3 shrink-0" }), g]
		})
	});
	return h.model && _.push({
		id: "model",
		node: /* @__PURE__ */ m("span", {
			className: n(r, "gap-1"),
			children: [/* @__PURE__ */ p(o, { className: "size-3 shrink-0" }), h.model]
		})
	}), _;
}
//#endregion
export { h as buildAutomationMetadataPills };

//# sourceMappingURL=build-automation-pills.js.map
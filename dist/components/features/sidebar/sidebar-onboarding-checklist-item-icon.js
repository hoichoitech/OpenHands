import { Plus as e } from "../../../node_modules/lucide-react/dist/esm/icons/plus.js";
import { cn as t } from "../../../utils/utils.js";
import n from "../../../icons/clock.js";
import r from "../../../icons/slack.js";
import i from "../../../icons/server-process.js";
import a from "../../../icons/key.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-onboarding-checklist-item-icon.tsx
var c = 18;
function l() {
	return /* @__PURE__ */ s("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: c,
		height: c,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ o("path", { d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" }),
			/* @__PURE__ */ o("path", { d: "m7 16.5-4.74-2.85" }),
			/* @__PURE__ */ o("path", { d: "m7 16.5 5-3" }),
			/* @__PURE__ */ o("path", { d: "M7 16.5v5.17" }),
			/* @__PURE__ */ o("path", { d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" }),
			/* @__PURE__ */ o("path", { d: "m17 16.5-5-3" }),
			/* @__PURE__ */ o("path", { d: "m17 16.5 4.74-2.85" }),
			/* @__PURE__ */ o("path", { d: "m17 16.5v5.17" }),
			/* @__PURE__ */ o("path", { d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" }),
			/* @__PURE__ */ o("path", { d: "M12 8 7.26 5.15" }),
			/* @__PURE__ */ o("path", { d: "m12 8 4.74-2.85" }),
			/* @__PURE__ */ o("path", { d: "M12 13.5V8" })
		]
	});
}
function u({ id: s, className: u }) {
	let d = t("shrink-0 text-white", u), f = `sidebar-onboarding-checklist-icon-${s}`;
	switch (s) {
		case "configure-llm": return /* @__PURE__ */ o("span", {
			"data-testid": f,
			className: "inline-flex shrink-0",
			children: /* @__PURE__ */ o(a, {
				width: c,
				height: c,
				className: d,
				"aria-hidden": !0
			})
		});
		case "start-conversation": return /* @__PURE__ */ o("span", {
			"data-testid": f,
			className: "inline-flex shrink-0",
			children: /* @__PURE__ */ o(e, {
				size: c,
				strokeWidth: 2,
				className: d,
				"aria-hidden": !0
			})
		});
		case "schedule-task": return /* @__PURE__ */ o("span", {
			"data-testid": f,
			className: "inline-flex shrink-0",
			children: /* @__PURE__ */ o(n, {
				width: c,
				height: c,
				className: d,
				"aria-hidden": !0
			})
		});
		case "customize-agent": return /* @__PURE__ */ o("span", {
			"data-testid": f,
			className: t("inline-flex shrink-0", d),
			children: /* @__PURE__ */ o(l, {})
		});
		case "connect-mcp": return /* @__PURE__ */ o("span", {
			"data-testid": f,
			className: "inline-flex shrink-0",
			children: /* @__PURE__ */ o(i, {
				width: c,
				height: c,
				className: d,
				"aria-hidden": !0
			})
		});
		case "join-slack": return /* @__PURE__ */ o("span", {
			"data-testid": f,
			className: "inline-flex shrink-0",
			children: /* @__PURE__ */ o(r, {
				width: c,
				height: c,
				className: d,
				"aria-hidden": !0
			})
		});
		default: return s;
	}
}
//#endregion
export { u as SidebarOnboardingChecklistItemIcon };

//# sourceMappingURL=sidebar-onboarding-checklist-item-icon.js.map
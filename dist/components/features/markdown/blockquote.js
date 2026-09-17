import { cn as e } from "../../../utils/utils.js";
import { FaCircleExclamation as t, FaCircleInfo as n, FaCircleStop as r, FaLightbulb as i, FaTriangleExclamation as a } from "../../../node_modules/react-icons/fa6/index.js";
import "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/markdown/blockquote.tsx
var c = {
	note: {
		label: "Note",
		icon: n,
		containerClass: "border-l-blue-500 bg-blue-500/10",
		titleClass: "text-blue-300",
		iconClass: "text-blue-400"
	},
	tip: {
		label: "Tip",
		icon: i,
		containerClass: "border-l-emerald-500 bg-emerald-500/10",
		titleClass: "text-emerald-300",
		iconClass: "text-emerald-400"
	},
	important: {
		label: "Important",
		icon: t,
		containerClass: "border-l-purple-500 bg-purple-500/10",
		titleClass: "text-purple-300",
		iconClass: "text-purple-400"
	},
	warning: {
		label: "Warning",
		icon: a,
		containerClass: "border-l-yellow-500 bg-yellow-500/10",
		titleClass: "text-yellow-300",
		iconClass: "text-yellow-400"
	},
	caution: {
		label: "Caution",
		icon: r,
		containerClass: "border-l-rose-500 bg-rose-500/10",
		titleClass: "text-rose-300",
		iconClass: "text-rose-400"
	}
}, l = /(?:^|\s)markdown-alert-(note|tip|important|warning|caution)(?:\s|$)/i;
function u(e) {
	if (!e) return null;
	let t = e.match(l);
	return t ? t[1].toLowerCase() : null;
}
function d({ children: t, className: n }) {
	let r = u(n);
	if (r) {
		let n = c[r], i = n.icon;
		return /* @__PURE__ */ s("div", {
			"data-testid": `markdown-alert-${r}`,
			className: e("my-3 rounded-r-sm border-l-4 px-3 py-2", n.containerClass),
			children: [/* @__PURE__ */ s("p", {
				className: e("flex items-center gap-2 font-semibold", n.titleClass),
				children: [/* @__PURE__ */ o(i, {
					"aria-hidden": !0,
					className: e("shrink-0", n.iconClass)
				}), /* @__PURE__ */ o("span", { children: n.label })]
			}), /* @__PURE__ */ o("div", {
				className: "text-content",
				children: t
			})]
		});
	}
	return /* @__PURE__ */ o("blockquote", {
		className: "my-2 border-l-4 border-border pl-3 italic text-content-muted",
		children: t
	});
}
//#endregion
export { d as blockquote };

//# sourceMappingURL=blockquote.js.map
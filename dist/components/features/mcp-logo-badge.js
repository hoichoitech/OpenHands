import { Bot as e } from "../../node_modules/lucide-react/dist/esm/icons/bot.js";
import { cn as t } from "../../utils/utils.js";
import n from "../../icons/slack.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/mcp-logo-badge.tsx
var i = {
	xs: "h-4 w-4 rounded [&>svg]:h-2.5 [&>svg]:w-2.5",
	sm: "h-5 w-5 rounded-md [&>svg]:h-3 [&>svg]:w-3",
	base: "h-7 w-7 rounded-lg [&>svg]:h-3.5 [&>svg]:w-3.5",
	md: "h-10 w-10 rounded-lg [&>svg]:h-5 [&>svg]:w-5"
}, a = { slack: n };
function o({ entry: n, size: o = "md", className: s, fallback: c, testId: l }) {
	let u = n ? a[n.id] : void 0;
	return /* @__PURE__ */ r("span", {
		"aria-hidden": "true",
		title: n?.name,
		"data-testid": l,
		className: t("inline-flex shrink-0 items-center justify-center overflow-hidden", "border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]", i[o], s),
		style: {
			backgroundColor: n?.iconBg ?? "var(--oh-color-tertiary)",
			color: n?.iconColor ?? "#FFFFFF"
		},
		children: u ? /* @__PURE__ */ r(u, {}) : n?.logoUrl ? /* @__PURE__ */ r("img", {
			src: n.logoUrl,
			alt: `${n.name} logo`,
			className: "h-full w-full object-contain p-[22%]",
			onError: (e) => {
				let t = e.currentTarget;
				t.style.display = "none";
			}
		}) : c ?? /* @__PURE__ */ r(e, {
			className: "h-5 w-5",
			strokeWidth: 2.25
		})
	});
}
//#endregion
export { o as McpLogoBadge };

//# sourceMappingURL=mcp-logo-badge.js.map
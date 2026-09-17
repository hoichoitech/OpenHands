import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { METADATA_PREFIXES as n } from "../../../../utils/constants.js";
import { MarkdownRenderer as r } from "../../../features/markdown/markdown-renderer.js";
import { Typography as i } from "../../../../ui/typography.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/skill-item-expanded.tsx
function s(e) {
	let t = e.split("\n"), r = null, i = null, a = 0;
	for (let e = 0; e < t.length; e += 1) {
		let o = t[e];
		if (o.startsWith(n[0])) r = o.trim(), a = e + 1;
		else if (o.startsWith(n[2])) i = o.replace(n[2], "").trim(), a = e + 1;
		else if (o.startsWith(n[1]) || o.startsWith(n[3])) a = e + 1;
		else if (o.trim() === "" && e <= a) a = e + 1;
		else break;
	}
	return {
		matchInfo: r,
		filePath: i,
		body: t.slice(a).join("\n").trim()
	};
}
function c(e) {
	return e.replace(/<important>([\s\S]*?)<\/important>/gi, (e, t) => `**${t.trim()}**`);
}
function l({ content: n }) {
	let { t: l } = e("openhands"), { matchInfo: u, filePath: d, body: f } = s(n), p = u || d;
	return /* @__PURE__ */ o("div", {
		className: "pl-6 pr-2 pt-2 pb-2",
		children: [
			p && /* @__PURE__ */ o("div", {
				className: "mb-3 text-sm text-[var(--oh-muted)] space-y-1",
				children: [u && /* @__PURE__ */ a("p", { children: u }), d && /* @__PURE__ */ o("p", { children: [/* @__PURE__ */ o(i.Text, {
					className: "text-[var(--oh-text-subtle)]",
					children: [l(t.COMMON$PATH), " "]
				}), /* @__PURE__ */ a("code", {
					className: "bg-[var(--oh-surface)] px-1.5 py-0.5 rounded text-[var(--oh-text-tertiary)]",
					children: d
				})] })]
			}),
			p && f && /* @__PURE__ */ a("hr", { className: "border-[var(--oh-border-subtle)] mb-3" }),
			f && /* @__PURE__ */ a(r, { children: c(f) })
		]
	});
}
//#endregion
export { l as SkillItemExpanded };

//# sourceMappingURL=skill-item-expanded.js.map
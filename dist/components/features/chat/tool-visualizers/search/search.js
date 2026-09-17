import { useTranslation as e } from "../../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../../i18n/declaration.js";
import { defineVisualizer as n } from "../define.js";
import { textFromContent as r } from "../text-content.js";
import { KeyValueGrid as i } from "../primitives/key-value-grid.js";
import "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/search/search.tsx
var s = n({
	actionKinds: ["GrepAction", "GlobAction"],
	observationKinds: ["GrepObservation", "GlobObservation"],
	Body: function({ action: n, observation: s }) {
		let { t: c } = e("openhands"), l = s?.observation, u = n?.action, d = l?.pattern ?? u?.pattern ?? "", f = l?.search_path ?? u?.path ?? "", p = l ? "include_pattern" in l ? l.include_pattern : null : u && "include" in u ? u.include : null, m = l ? "matches" in l ? l.matches : l.files : [];
		return /* @__PURE__ */ o("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ a(i, { rows: [
				{
					label: c(t.COMMON$PATTERN),
					value: d
				},
				...f ? [{
					label: c(t.COMMON$PATH),
					value: f
				}] : [],
				...p ? [{
					label: c(t.COMMON$INCLUDE),
					value: p
				}] : []
			] }), l && (l.is_error ? /* @__PURE__ */ a("span", {
				className: "whitespace-pre-wrap text-xs text-danger",
				children: r(l.content)
			}) : m.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-xs text-muted",
				children: c(t.COMMON$NO_RESULTS)
			}) : /* @__PURE__ */ o("div", {
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ a("span", {
						className: "text-xs text-muted",
						children: c(t.COMMON$RESULTS, { count: m.length })
					}),
					/* @__PURE__ */ a("div", {
						className: "flex flex-col gap-0.5 font-mono text-xs text-foreground",
						children: m.map((e) => /* @__PURE__ */ a("span", {
							className: "break-all",
							children: e
						}, e))
					}),
					l.truncated && /* @__PURE__ */ a("span", {
						className: "text-xs text-muted",
						children: c(t.COMMON$TRUNCATED)
					})
				]
			}))]
		});
	}
});
//#endregion
export { s as searchVisualizer };

//# sourceMappingURL=search.js.map
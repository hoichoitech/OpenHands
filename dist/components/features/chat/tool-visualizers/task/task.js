import { useTranslation as e } from "../../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../../i18n/declaration.js";
import { CopyableContentWrapper as n } from "../../../../shared/buttons/copyable-content-wrapper.js";
import { MarkdownRenderer as r } from "../../../markdown/markdown-renderer.js";
import { defineVisualizer as i } from "../define.js";
import { textFromContent as a } from "../text-content.js";
import { KeyValueGrid as o } from "../primitives/key-value-grid.js";
import "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/task/task.tsx
function l({ label: e, text: t, isError: i = !1 }) {
	return /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ s("span", {
			className: "text-xs text-muted",
			children: e
		}), /* @__PURE__ */ s(n, {
			text: t,
			children: /* @__PURE__ */ s("div", {
				className: `overflow-auto rounded border border-surface-raised bg-surface-raised p-2 text-xs ${i ? "text-danger" : "text-foreground"}`,
				children: /* @__PURE__ */ s(r, {
					includeStandard: !0,
					includeHeadings: !0,
					children: t
				})
			})
		})]
	});
}
var u = i({
	actionKinds: ["TaskAction"],
	observationKinds: ["TaskObservation"],
	Body: function({ action: n, observation: r }) {
		let { t: i } = e("openhands"), u = n?.action, d = r?.observation, f = d?.subagent ?? u?.subagent_type ?? "", p = d?.task_id, m = u?.prompt?.trim() ?? "", h = d ? a(d.content).trim() : "", g = [...f ? [{
			label: i(t.TASK$SUBAGENT),
			value: f
		}] : [], ...p ? [{
			label: i(t.TASK$TASK_ID),
			value: p
		}] : []];
		return /* @__PURE__ */ c("div", {
			className: "flex flex-col gap-2",
			children: [
				g.length > 0 && /* @__PURE__ */ s(o, { rows: g }),
				m && /* @__PURE__ */ s(l, {
					label: i(t.TASK$QUERY),
					text: m
				}),
				h && /* @__PURE__ */ s(l, {
					label: i(t.TASK$RESULT),
					text: h,
					isError: d?.is_error
				})
			]
		});
	}
});
//#endregion
export { u as taskVisualizer };

//# sourceMappingURL=task.js.map
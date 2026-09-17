import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { Typography as r } from "../../../../ui/typography.js";
import i from "../../../../icons/u-circle.js";
import a from "../../../../icons/u-check-circle.js";
import o from "../../../../icons/u-check-circle-half.js";
import { useMemo as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/chat/task-tracking/task-item.tsx
function u({ task: u }) {
	let { t: d } = e("openhands"), f = s(() => {
		switch (u.status) {
			case "todo": return /* @__PURE__ */ c(i, { className: "w-4 h-4 text-[#ffffff]" });
			case "in_progress": return /* @__PURE__ */ c(o, { className: "w-4 h-4 text-[#ffffff]" });
			case "done": return /* @__PURE__ */ c(a, { className: "w-4 h-4 text-[var(--oh-muted)]" });
			default: return /* @__PURE__ */ c(i, { className: "w-4 h-4 text-[#ffffff]" });
		}
	}, [u.status]), p = u.status === "done";
	return /* @__PURE__ */ l("div", {
		className: "flex gap-2 items-center w-full",
		"data-name": "item",
		children: [/* @__PURE__ */ c("div", {
			className: "shrink-0",
			children: f
		}), /* @__PURE__ */ l("div", {
			className: "flex flex-col items-start justify-center leading-[16px] text-nowrap whitespace-pre font-normal",
			children: [/* @__PURE__ */ c(r.Text, {
				className: n("text-[12px]", p ? "text-[var(--oh-muted)]" : "text-white"),
				children: u.title
			}), u.notes && /* @__PURE__ */ l(r.Text, {
				className: "text-[10px] text-[var(--oh-muted)]",
				children: [
					d(t.TASK_TRACKING_OBSERVATION$TASK_NOTES),
					": ",
					u.notes
				]
			})]
		})]
	});
}
//#endregion
export { u as TaskItem };

//# sourceMappingURL=task-item.js.map
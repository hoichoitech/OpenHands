import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { StartTaskCardHeader as r } from "./start-task-card-header.js";
import { StartTaskCardFooter as i } from "./start-task-card-footer.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/start-task-card/start-task-card.tsx
function s({ task: s, onClick: c }) {
	let { t: l } = e("openhands"), u = s.request.title || s.detail || l(t.CONVERSATION$STARTING_CONVERSATION), d = s.request.selected_repository ? {
		selected_repository: s.request.selected_repository,
		selected_branch: s.request.selected_branch || null,
		git_provider: s.request.git_provider || null
	} : null;
	return /* @__PURE__ */ o("div", {
		"data-testid": "start-task-card",
		onClick: c,
		className: n("relative h-auto w-full p-3.5 border-b border-[var(--oh-border)] cursor-pointer", "hover:bg-tertiary"),
		children: [/* @__PURE__ */ a("div", {
			className: "flex items-center justify-between w-full",
			children: /* @__PURE__ */ a(r, {
				title: u,
				taskStatus: s.status
			})
		}), /* @__PURE__ */ a(i, {
			selectedRepository: d,
			createdAt: s.created_at,
			detail: s.detail
		})]
	});
}
//#endregion
export { s as StartTaskCard };

//# sourceMappingURL=start-task-card.js.map
import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { getAgentServerWorkingDir as n } from "../../../api/agent-server-config.js";
import { useConversationSkills as r } from "../../../hooks/query/use-conversation-skills.js";
import { ModalBackdrop as i } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as a } from "../../shared/modals/modal-body.js";
import { useSkillEnabledFilter as o } from "../../../hooks/use-skill-enablement.js";
import { SKILL_SCOPE_ORDER as s, groupSkillsByScope as c } from "../../../utils/skill-scope.js";
import { SkillsModalHeader as l } from "./skills-modal-header.js";
import { SkillsModalSection as u } from "./skills-modal-section.js";
import { SkillsLoadingState as d } from "./skills-loading-state.js";
import { SkillsEmptyState as f } from "./skills-empty-state.js";
import { SkillItem as p } from "./skill-item.js";
import { useMemo as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/skills-modal.tsx
var v = {
	project: t.SKILLS_MODAL$SECTION_PROJECT,
	personal: t.SKILLS_MODAL$SECTION_USER,
	public: t.SKILLS_MODAL$SECTION_PUBLIC
};
function y({ onClose: t }) {
	let { t: y } = e("openhands"), b = n(), [x, S] = h({}), { data: C, isLoading: w, isError: T, refetch: E, isRefetching: D } = r(), O = o(), k = m(() => (C ?? []).filter(O), [C, O]), A = m(() => c(k, b), [k, b]), j = (e) => {
		S((t) => ({
			...t,
			[e]: !t[e]
		}));
	};
	return /* @__PURE__ */ g(i, {
		onClose: t,
		children: /* @__PURE__ */ _(a, {
			width: "lg",
			className: "relative max-h-[80vh] flex flex-col items-start border border-[var(--oh-border)]",
			testID: "skills-modal",
			children: [/* @__PURE__ */ g(l, {
				isLoading: w,
				isRefetching: D,
				onRefresh: E,
				onClose: t
			}), /* @__PURE__ */ g("div", {
				className: "w-full h-[60vh] overflow-auto rounded-md border border-[var(--oh-border)] bg-surface-raised custom-scrollbar-always",
				children: w ? /* @__PURE__ */ g(d, {}) : T || !C || k.length === 0 ? /* @__PURE__ */ g(f, { isError: T }) : A && /* @__PURE__ */ g("div", {
					className: "divide-y divide-[var(--oh-border)]",
					children: s.map((e) => {
						let t = A[e];
						return t.length === 0 ? null : /* @__PURE__ */ g(u, {
							title: y(v[e]),
							count: t.length,
							children: t.map((t) => /* @__PURE__ */ g(p, {
								skill: t,
								isExpanded: x[t.name] || !1,
								onToggle: j
							}, `${e}-${t.name}`))
						}, e);
					})
				})
			})]
		})
	});
}
//#endregion
export { y as SkillsModal };

//# sourceMappingURL=skills-modal.js.map
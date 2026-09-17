import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useSettings as r } from "../../../hooks/query/use-settings.js";
import { useActiveConversation as i } from "../../../hooks/query/use-active-conversation.js";
import { useConversationSkills as a } from "../../../hooks/query/use-conversation-skills.js";
import { useSkillEnablement as o } from "../../../hooks/use-skill-enablement.js";
import { useConversationOverviewDrawerOptional as s } from "./conversation-overview-drawer-context.js";
import { extensionModuleCardGridClassName as c, extensionModuleCardGridContainerClassName as l, extensionModuleEmptyStateClassName as u } from "../../../utils/extension-module-card-classes.js";
import { SkillCard as d } from "../skills/skill-card.js";
import { SkillDetailModal as f } from "../skills/skill-detail-modal.js";
import { AddSkillModal as p } from "../skills/add-skill-modal.js";
import { SkillsToolbar as m } from "../skills/skills-toolbar.js";
import { SkillFiltersModal as h } from "../skills/skill-filters-modal.js";
import { EMPTY_SKILL_FILTER_STATE as g, applySkillFilters as _, buildSkillFacetGroups as v, clearSkillFilterFacets as y, countActiveFilters as b, toggleSkillFilterValue as x } from "../skills/skill-filter.js";
import { CONVERSATION_OVERVIEW_PROJECT_SCOPE as S, filterSkillsByProjectScope as C, sortSkillsByProjectRelevance as w } from "../../../utils/conversation-overview-project-scope.js";
import { ConversationOverviewProjectScopeToggle as T } from "./conversation-overview-project-scope-toggle.js";
import { useEffect as E, useMemo as D, useState as O } from "react";
import { jsx as k, jsxs as A } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-skills-panel.tsx
function j({ openAdd: j }) {
	let { t: M } = e("openhands"), { isLoading: N } = r(), { data: P } = i(), { data: F, isLoading: I } = a(), { isEnabled: L, setEnabled: R } = o(), z = s()?.addRequestKey ?? 0, B = P?.selected_workspace ?? null, [V, H] = O(S.project), [U, W] = O(g), [G, K] = O(!1), [q, J] = O(null), [Y, X] = O(!1);
	E(() => {
		j && X(!0);
	}, [j]), E(() => {
		z !== 0 && X(!0);
	}, [z]);
	let Z = D(() => {
		if (!F) return [];
		let e = C(F, V, B);
		return V === S.all ? w(e, B) : e;
	}, [
		F,
		V,
		B
	]), Q = D(() => _(Z, L, U), [
		Z,
		L,
		U
	]);
	return I || N ? /* @__PURE__ */ k("div", {
		"data-testid": "conversation-overview-skills-panel",
		className: "text-sm text-muted",
		children: "…"
	}) : !F || F.length === 0 ? /* @__PURE__ */ A("div", {
		"data-testid": "conversation-overview-skills-panel",
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ k("div", {
			"data-testid": "conversation-overview-skills-empty",
			className: u,
			children: /* @__PURE__ */ k("p", {
				className: "text-sm text-tertiary-light",
				children: M(t.SETTINGS$SKILLS_NO_SKILLS)
			})
		}), Y ? /* @__PURE__ */ k(p, { onClose: () => X(!1) }) : null]
	}) : /* @__PURE__ */ A("div", {
		"data-testid": "conversation-overview-skills-panel",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ k(T, {
				value: V,
				onChange: H,
				testId: "conversation-overview-skills-scope"
			}),
			/* @__PURE__ */ k(m, {
				search: U.query,
				onSearchChange: (e) => W((t) => ({
					...t,
					query: e
				})),
				activeFilterCount: b(U),
				onOpenFilters: () => K(!0)
			}),
			Z.length === 0 ? /* @__PURE__ */ k("div", {
				"data-testid": "conversation-overview-skills-project-empty",
				className: u,
				children: /* @__PURE__ */ k("p", {
					className: "text-sm text-tertiary-light",
					children: M(t.CONVERSATION$OVERVIEW_SCOPE_PROJECT_EMPTY_SKILLS)
				})
			}) : Q.length === 0 ? /* @__PURE__ */ k("div", {
				"data-testid": "conversation-overview-skills-no-match",
				className: u,
				children: /* @__PURE__ */ k("p", {
					className: "text-sm text-tertiary-light",
					children: M(t.SETTINGS$SKILLS_NO_MATCH)
				})
			}) : /* @__PURE__ */ k("section", {
				className: n("flex min-w-0 flex-col gap-3", l),
				children: /* @__PURE__ */ k("div", {
					className: n(c, "grid-cols-1"),
					children: Q.map((e) => /* @__PURE__ */ k(d, {
						skill: e,
						enabled: L(e),
						onOpen: () => J(e),
						onToggle: (t) => R(e.name, t)
					}, e.name))
				})
			}),
			q ? /* @__PURE__ */ k(f, {
				skill: q,
				enabled: L(q),
				onToggle: (e) => R(q.name, e),
				onClose: () => J(null)
			}) : null,
			Y ? /* @__PURE__ */ k(p, { onClose: () => X(!1) }) : null,
			G ? /* @__PURE__ */ k(h, {
				groups: v(Z, L, U),
				activeCount: b(U),
				onToggle: (e, t) => W((n) => x(n, e, t)),
				onClearAll: () => W((e) => y(e)),
				onClose: () => K(!1)
			}) : null
		]
	});
}
//#endregion
export { j as ConversationOverviewSkillsPanel };

//# sourceMappingURL=conversation-overview-skills-panel.js.map
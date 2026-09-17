import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { ModalBackdrop as r } from "../../shared/modals/modal-backdrop.js";
import { MODAL_MAX_WIDTH_VIEWPORT as i, ModalBody as a } from "../../shared/modals/modal-body.js";
import { BrandButton as o } from "../settings/brand-button.js";
import { SkillFacetRail as s } from "./skill-facet-rail.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/skills/skill-filters-modal.tsx
function u({ groups: u, activeCount: d, onToggle: f, onClearAll: p, onClose: m }) {
	let { t: h } = e("openhands");
	return /* @__PURE__ */ c(r, {
		onClose: m,
		"aria-label": h(t.SETTINGS$SKILLS_FILTERS_MODAL_TITLE),
		children: /* @__PURE__ */ l(a, {
			testID: "skill-filters-modal",
			className: n("items-stretch", i),
			children: [
				/* @__PURE__ */ c("h3", {
					className: "text-lg font-semibold text-foreground",
					children: h(t.SETTINGS$SKILLS_FILTERS_MODAL_TITLE)
				}),
				/* @__PURE__ */ c("div", {
					className: "max-h-[60vh] overflow-y-auto custom-scrollbar-always",
					children: /* @__PURE__ */ c(s, {
						groups: u,
						onToggle: f
					})
				}),
				/* @__PURE__ */ l("div", {
					className: "flex items-center justify-end gap-2",
					children: [d > 0 ? /* @__PURE__ */ c(o, {
						type: "button",
						variant: "secondary",
						testId: "skill-filters-modal-clear",
						onClick: p,
						children: h(t.SETTINGS$SKILLS_CLEAR_FILTERS)
					}) : null, /* @__PURE__ */ c(o, {
						type: "button",
						variant: "primary",
						testId: "skill-filters-modal-done",
						onClick: m,
						children: h(t.BUTTON$CLOSE)
					})]
				})
			]
		})
	});
}
//#endregion
export { u as SkillFiltersModal };

//# sourceMappingURL=skill-filters-modal.js.map
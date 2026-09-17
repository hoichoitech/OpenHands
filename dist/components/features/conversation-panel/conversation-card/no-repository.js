import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Folder as n } from "../../../../node_modules/lucide-react/dist/esm/icons/folder.js";
import { getPathBasename as r } from "../../../../utils/path-utils.js";
import i from "../../../../icons/repo-forked.js";
import { CONVERSATION_CARD_META_CHIP_CLASSNAME as a, CONVERSATION_CARD_META_CHIP_ICON_CLASSNAME as o, CONVERSATION_CARD_META_CHIP_ICON_SLOT_CLASSNAME as s } from "./conversation-card-meta-chip.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/no-repository.tsx
function u({ workspaceWorkingDir: u }) {
	let { t: d } = e("openhands"), f = u ? r(u).trim() : "";
	return f ? /* @__PURE__ */ l("span", {
		"data-testid": "conversation-card-workspace-folder",
		className: a,
		title: u ?? void 0,
		children: [/* @__PURE__ */ c("span", {
			className: s,
			"aria-hidden": !0,
			children: /* @__PURE__ */ c(n, { className: o })
		}), /* @__PURE__ */ c("span", {
			className: "truncate leading-4",
			children: f
		})]
	}) : /* @__PURE__ */ l("span", {
		"data-testid": "conversation-card-no-repository",
		className: a,
		children: [/* @__PURE__ */ c("span", {
			className: s,
			"aria-hidden": !0,
			children: /* @__PURE__ */ c(i, { className: o })
		}), /* @__PURE__ */ c("span", {
			className: "truncate leading-4",
			children: d(t.COMMON$NO_REPOSITORY)
		})]
	});
}
//#endregion
export { u as NoRepository };

//# sourceMappingURL=no-repository.js.map
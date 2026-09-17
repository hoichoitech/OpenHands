import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n, constructBranchUrl as r } from "../../../utils/utils.js";
import { useSettings as i } from "../../../hooks/query/use-settings.js";
import a from "../../../icons/u-code-branch.js";
import { GitExternalLinkIcon as o } from "./git-external-link-icon.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/chat/git-control-bar-branch-button.tsx
function l({ selectedBranch: l, selectedRepository: u, gitProvider: d }) {
	let { t: f } = e("openhands"), { data: p } = i(), m = d ? p?.provider_tokens_set[d] : null, h = !!l && !!u && !!d, g = h ? r(d, u, l, m) : void 0, _ = l || f(t.COMMON$NO_BRANCH);
	return /* @__PURE__ */ c("a", {
		href: h ? g : void 0,
		target: "_blank",
		rel: "noopener noreferrer",
		className: n("group flex flex-row items-center justify-between gap-2 pl-2.5 pr-2.5 py-1 rounded-[100px] w-fit flex-shrink-0 max-w-[200px] truncate relative", h ? "border border-[var(--oh-border)] bg-transparent hover:border-[var(--oh-border-subtle)] cursor-pointer" : "border border-[rgba(71,74,84,0.50)] bg-transparent cursor-not-allowed min-w-[108px]"),
		children: [
			/* @__PURE__ */ s("div", {
				className: "w-3 h-3 flex items-center justify-center flex-shrink-0",
				children: /* @__PURE__ */ s(a, {
					width: 12,
					height: 12,
					color: "white"
				})
			}),
			/* @__PURE__ */ s("div", {
				className: "font-normal text-white text-sm leading-5 truncate",
				title: _,
				children: _
			}),
			h && /* @__PURE__ */ s(o, {})
		]
	});
}
//#endregion
export { l as GitControlBarBranchButton };

//# sourceMappingURL=git-control-bar-branch-button.js.map
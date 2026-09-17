import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { FolderOpen as n } from "../../../node_modules/lucide-react/dist/esm/icons/folder-open.js";
import { cn as r, constructRepositoryUrl as i } from "../../../utils/utils.js";
import { useSettings as a } from "../../../hooks/query/use-settings.js";
import { GitProviderIcon as o } from "../../shared/git-provider-icon.js";
import { GitExternalLinkIcon as s } from "./git-external-link-icon.js";
import c from "../../../icons/repo-forked.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/chat/git-control-bar-repo-button.tsx
function d({ selectedRepository: d, gitProvider: f, workspaceName: p, emptyStateLabel: m, onClick: h, disabled: g }) {
	let { t: _ } = e("openhands"), { data: v } = a(), y = !!d && !!f, b = f ? v?.provider_tokens_set[f] : null, x = y ? i(f, d, b) : void 0, S = !d && !p, C = d || p || _(t.COMMON$CONNECT_REPO);
	return y ? /* @__PURE__ */ u("a", {
		href: x,
		target: "_blank",
		rel: "noopener noreferrer",
		className: r("group flex flex-row items-center justify-between gap-2 pl-2.5 pr-2.5 py-1 rounded-[100px] flex-1 truncate relative", "border border-[var(--oh-border)] bg-transparent hover:border-[var(--oh-border-subtle)] cursor-pointer"),
		children: [
			/* @__PURE__ */ l("div", {
				className: "w-3 h-3 flex items-center justify-center flex-shrink-0",
				children: /* @__PURE__ */ l(o, {
					gitProvider: f,
					className: "w-3 h-3 inline-flex"
				})
			}),
			/* @__PURE__ */ l("div", {
				className: "font-normal text-white text-sm leading-5 truncate flex-1 min-w-0",
				title: C,
				children: C
			}),
			/* @__PURE__ */ l(s, {})
		]
	}) : /* @__PURE__ */ u("button", {
		type: "button",
		onClick: h,
		disabled: g,
		className: r("group flex flex-row items-center justify-between gap-2 pl-2.5 pr-2.5 py-1 rounded-[100px] truncate relative", "border border-[rgba(71,74,84,0.50)] bg-transparent", g ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:border-[var(--oh-border-subtle)]"),
		children: [/* @__PURE__ */ l("div", {
			className: "w-3 h-3 flex items-center justify-center flex-shrink-0 text-white",
			children: S ? /* @__PURE__ */ l(n, {
				className: "w-3 h-3",
				strokeWidth: 2,
				"aria-hidden": !0,
				"data-testid": "git-control-bar-connect-repo-icon"
			}) : /* @__PURE__ */ l(c, {
				width: 12,
				height: 12,
				color: "white"
			})
		}), /* @__PURE__ */ l("div", {
			className: "font-normal text-white text-sm leading-5 truncate flex-1 min-w-0",
			title: C,
			children: C
		})]
	});
}
//#endregion
export { d as GitControlBarRepoButton };

//# sourceMappingURL=git-control-bar-repo-button.js.map
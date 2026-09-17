import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useUserProviders as n } from "../../../hooks/use-user-providers.js";
import { ModalBackdrop as r } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as i } from "../../shared/modals/modal-body.js";
import { BaseModalTitle as a } from "../../shared/modals/confirmation-modals/base-modal.js";
import { ModalCloseButton as o } from "../../shared/modals/modal-close-button.js";
import { BrandButton as s } from "../settings/brand-button.js";
import { GitRepoDropdown as c } from "../home/git-repo-dropdown/git-repo-dropdown.js";
import { GitBranchDropdown as l } from "../home/git-branch-dropdown/git-branch-dropdown.js";
import { GitProviderDropdown as u } from "../home/git-provider-dropdown/git-provider-dropdown.js";
import { useCallback as d, useEffect as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/features/chat/open-repository-modal.tsx
function g({ isOpen: g, onClose: _, onLaunch: v, defaultProvider: y = "github" }) {
	let { t: b } = e("openhands"), { providers: x } = n(), [S, C] = p(null), [w, T] = p(null), [E, D] = p(null);
	f(() => {
		x.length === 1 && !S ? C(x[0]) : x.length > 1 && !S && y && x.includes(y) && C(y);
	}, [
		x,
		S,
		y
	]);
	let O = d((e) => {
		e !== S && (C(e), T(null), D(null));
	}, [S]), k = d((e) => {
		e ? (T(e), D(null)) : (T(null), D(null));
	}, []), A = d((e) => {
		D(e);
	}, []), j = () => {
		!w || !E || (v(w, E), T(null), D(null), _());
	}, M = () => {
		C(null), T(null), D(null), _();
	};
	if (!g) return null;
	let N = w?.git_provider || S || y, P = !!w && !!E;
	return /* @__PURE__ */ m(r, {
		onClose: M,
		children: /* @__PURE__ */ h(i, {
			width: "sm",
			className: "relative items-start border border-[var(--oh-border)] !gap-4",
			children: [
				/* @__PURE__ */ m(o, {
					onClose: M,
					testId: "close-open-repository-modal"
				}),
				/* @__PURE__ */ m("div", {
					className: "w-full pr-6",
					children: /* @__PURE__ */ m(a, { title: b(t.CONVERSATION$OPEN_REPOSITORY) })
				}),
				/* @__PURE__ */ h("div", {
					className: "flex flex-col gap-4 w-full",
					children: [/* @__PURE__ */ h("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ m("span", {
							className: "text-sm text-white font-normal leading-[22px]",
							children: b(t.CONVERSATION$SELECT_OR_INSERT_LINK)
						}), x.length > 1 && /* @__PURE__ */ m(u, {
							providers: x,
							value: S,
							onChange: O
						})]
					}), /* @__PURE__ */ h("div", {
						className: "flex flex-col gap-[10px] w-full",
						children: [/* @__PURE__ */ m(c, {
							provider: N,
							value: w?.id || null,
							repositoryName: w?.full_name || null,
							onChange: k,
							className: "w-full"
						}), /* @__PURE__ */ m(l, {
							repository: w?.full_name || null,
							provider: N,
							selectedBranch: E,
							onBranchSelect: A,
							defaultBranch: w?.main_branch || null,
							disabled: !w,
							className: "w-full"
						})]
					})]
				}),
				/* @__PURE__ */ h("div", {
					className: "flex justify-end gap-2 w-full",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ m(s, {
						type: "button",
						variant: "secondary",
						onClick: M,
						children: b(t.BUTTON$CANCEL)
					}), /* @__PURE__ */ m(s, {
						type: "button",
						variant: "primary",
						onClick: j,
						isDisabled: !P,
						children: b(t.BUTTON$LAUNCH)
					})]
				})
			]
		})
	});
}
//#endregion
export { g as OpenRepositoryModal };

//# sourceMappingURL=open-repository-modal.js.map
import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { GitProviderIcon as r } from "../../../shared/git-provider-icon.js";
import { useCombobox as i } from "../../../../node_modules/downshift/dist/downshift.esm.js";
import { ToggleButton as a } from "../shared/toggle-button.js";
import { ErrorMessage as o } from "../shared/error-message.js";
import { DropdownItem as s } from "../shared/dropdown-item.js";
import { EmptyState as c } from "../shared/empty-state.js";
import { GenericDropdownMenu as l } from "../shared/generic-dropdown-menu.js";
import { LoadingSpinner as u } from "../shared/loading-spinner.js";
import { useEffect as d, useMemo as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/features/home/git-provider-dropdown/git-provider-dropdown.tsx
function g({ providers: g, value: _, placeholder: v, className: y, errorMessage: b, disabled: x = !1, isLoading: S = !1, onChange: C, inputClassName: w, toggleButtonClassName: T, itemClassName: E }) {
	let { t: D } = e("openhands"), [O, k] = p(""), [A, j] = p(_ || null), M = (e) => {
		switch (e) {
			case "github": return "GitHub";
			case "gitlab": return "GitLab";
			case "bitbucket": return "Bitbucket";
			case "bitbucket_data_center": return "Bitbucket Data Center";
			case "azure_devops": return "Azure DevOps";
			default: return e.charAt(0).toUpperCase() + e.slice(1);
		}
	}, N = f(() => A && O === M(A) || !O?.trim() ? g : g.filter((e) => M(e).toLowerCase().includes(O.toLowerCase())), [
		g,
		O,
		A
	]), { isOpen: P, getToggleButtonProps: F, getMenuProps: I, getInputProps: L, highlightedIndex: R, getItemProps: z, selectedItem: B } = i({
		items: N,
		itemToString: (e) => e ? M(e) : "",
		selectedItem: A,
		onSelectedItemChange: ({ selectedItem: e }) => {
			j(e || null), C?.(e || null);
		},
		onInputValueChange: ({ inputValue: e }) => {
			k(e || "");
		},
		inputValue: O
	});
	d(() => {
		_ !== A && j(_ || null);
	}, [_, A]), d(() => {
		B && !P ? k(M(B)) : B || k("");
	}, [B, P]);
	let V = (e, t, n, r, i) => /* @__PURE__ */ m(s, {
		item: e,
		index: t,
		isSelected: e === r,
		getItemProps: i,
		getDisplayText: M,
		getItemKey: (e) => e,
		isProviderDropdown: !0,
		itemClassName: E
	}, e), H = (e) => /* @__PURE__ */ m(c, {
		inputValue: e,
		searchMessage: "No providers found",
		emptyMessage: "No providers available",
		testId: "git-provider-dropdown-empty"
	});
	return /* @__PURE__ */ h("div", {
		className: n("relative", y),
		children: [
			/* @__PURE__ */ h("div", {
				className: "group relative text-[var(--oh-muted)] hover:text-white",
				children: [
					B && /* @__PURE__ */ m("div", {
						className: "absolute left-2 top-1/2 transform -translate-y-1/2 z-10",
						children: /* @__PURE__ */ m(r, {
							gitProvider: B,
							className: "min-w-[14px] min-h-[14px] w-[14px] h-[14px]"
						})
					}),
					/* @__PURE__ */ m("input", {
						...L({
							disabled: x,
							placeholder: v ?? D(t.COMMON$SELECT_PROVIDER_PLACEHOLDER),
							readOnly: !0,
							className: n("w-29.5 h-6 py-0 border border-[var(--oh-border-input)] rounded shadow-none h-6 min-h-6 max-h-6 ", "text-inherit bg-tertiary placeholder:text-[var(--oh-muted)]", "focus:outline-none focus:ring-0 focus:border-[var(--oh-border-input)]", "disabled:bg-tertiary disabled:cursor-not-allowed disabled:opacity-60", "pl-1.5 pr-[1px] cursor-pointer text-xs font-normal leading-5", B && "pl-6", w)
						}),
						"data-testid": "git-provider-dropdown"
					}),
					/* @__PURE__ */ m("div", {
						className: "absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-1",
						children: /* @__PURE__ */ m(a, {
							isOpen: P,
							disabled: x,
							getToggleButtonProps: F,
							iconClassName: T
						})
					}),
					S && /* @__PURE__ */ m(u, { hasSelection: !!B })
				]
			}),
			/* @__PURE__ */ m(l, {
				isOpen: P,
				filteredItems: N,
				inputValue: O,
				highlightedIndex: R,
				selectedItem: B,
				getMenuProps: I,
				getItemProps: z,
				renderItem: V,
				renderEmptyState: H,
				itemKey: (e) => e
			}),
			/* @__PURE__ */ m(o, {
				isError: !!b,
				message: b
			})
		]
	});
}
//#endregion
export { g as GitProviderDropdown };

//# sourceMappingURL=git-provider-dropdown.js.map
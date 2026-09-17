import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { formControlFieldClassName as r } from "../../../../utils/form-control-classes.js";
import i from "../../../../icons/u-code-branch.js";
import { useCombobox as a } from "../../../../node_modules/downshift/dist/downshift.esm.js";
import { useDebounce as o } from "../../../../hooks/use-debounce.js";
import { ClearButton as s } from "../shared/clear-button.js";
import { ToggleButton as c } from "../shared/toggle-button.js";
import { ErrorMessage as l } from "../shared/error-message.js";
import { useBranchData as u } from "../../../../hooks/query/use-branch-data.js";
import { BranchDropdownMenu as d } from "./branch-dropdown-menu.js";
import { useCallback as f, useEffect as p, useMemo as m, useRef as h, useState as g } from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/features/home/git-branch-dropdown/git-branch-dropdown.tsx
function y({ repository: y, provider: b, selectedBranch: x, onBranchSelect: S, defaultBranch: C, placeholder: w, disabled: T = !1, className: E }) {
	let { t: D } = e("openhands"), [O, k] = g(""), [A, j] = g(!1), M = o(O, 300), N = h(null), P = m(() => M.trim().length > 0 ? M.trim() : "", [M]), { branches: F, isLoading: I, isError: L, fetchNextPage: R, hasNextPage: z, isFetchingNextPage: B, isSearchLoading: V } = u(y, b, C || null, P, O, x), H = L ? /* @__PURE__ */ Error("Failed to load branches") : null, U = f(() => {
		k(""), S(null), j(!0);
	}, [S]), W = f((e) => {
		S(e), k("");
	}, [S]), G = f((e) => {
		let { scrollTop: t, scrollHeight: n, clientHeight: r } = e.currentTarget;
		n - t <= r * 1.5 && z && !B && R();
	}, [
		z,
		B,
		R
	]), { isOpen: K, selectedItem: q, highlightedIndex: J, getInputProps: Y, getItemProps: X, getMenuProps: Z, getToggleButtonProps: Q } = a({
		items: F,
		selectedItem: x,
		itemToString: (e) => e?.name || "",
		onSelectedItemChange: ({ selectedItem: e }) => {
			W(e || null);
		},
		inputValue: O,
		stateReducer: (e, t) => t.type === a.stateChangeTypes.InputClick && e.isOpen ? {
			...t.changes,
			isOpen: !0
		} : t.changes
	});
	p(() => {
		y && (S(null), j(!1));
	}, [y, S]), p(() => {
		if (y && C && !x && !A && F.length > 0 && !I) {
			let e = F.find((e) => e.name === C);
			e && S(e);
		}
	}, [
		y,
		C,
		x,
		A,
		F,
		S,
		I
	]), p(() => {
		k("");
	}, [y]), p(() => {
		x && !K ? k(x.name) : !x && !K && k("");
	}, [x, K]);
	let $ = I || V || B;
	return /* @__PURE__ */ v("div", {
		className: n("relative", E),
		children: [
			/* @__PURE__ */ v("div", {
				className: "group relative text-[var(--oh-muted)] hover:text-white",
				children: [
					/* @__PURE__ */ _("div", {
						className: "absolute left-2 top-1/2 transform -translate-y-1/2 z-10",
						children: $ ? /* @__PURE__ */ _("div", { className: "animate-spin h-4 w-4 border-2 border-transparent border-t-white rounded-full" }) : /* @__PURE__ */ _(i, {
							width: 16,
							height: 16
						})
					}),
					/* @__PURE__ */ _("input", {
						...Y({
							disabled: T || !y,
							placeholder: w ?? D(t.COMMON$SELECT_BRANCH_PLACEHOLDER),
							className: n(r, "text-inherit shadow-none pl-7 pr-16 text-sm font-normal leading-5", "placeholder:text-[var(--oh-muted)]", "disabled:cursor-not-allowed disabled:opacity-60"),
							onChange: (e) => {
								k(e.target.value);
							}
						}),
						"data-testid": "git-branch-dropdown-input"
					}),
					/* @__PURE__ */ v("div", {
						className: "absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center",
						children: [x && /* @__PURE__ */ _(s, {
							disabled: T,
							onClear: U
						}), /* @__PURE__ */ _(c, {
							isOpen: K,
							disabled: T || !y,
							getToggleButtonProps: Q
						})]
					})
				]
			}),
			/* @__PURE__ */ _(d, {
				isOpen: K,
				filteredBranches: F,
				inputValue: O,
				highlightedIndex: J,
				selectedItem: q,
				getMenuProps: Z,
				getItemProps: X,
				onScroll: G,
				menuRef: N
			}),
			/* @__PURE__ */ _(l, { isError: !!H })
		]
	});
}
//#endregion
export { y as GitBranchDropdown };

//# sourceMappingURL=git-branch-dropdown.js.map
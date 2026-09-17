import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { formControlFieldClassName as r } from "../../../../utils/form-control-classes.js";
import { Typography as i } from "../../../../ui/typography.js";
import { useCombobox as a } from "../../../../node_modules/downshift/dist/downshift.esm.js";
import { useDebounce as o } from "../../../../hooks/use-debounce.js";
import { ClearButton as s } from "../shared/clear-button.js";
import { ToggleButton as c } from "../shared/toggle-button.js";
import { ErrorMessage as l } from "../shared/error-message.js";
import { DropdownItem as ee } from "../shared/dropdown-item.js";
import { EmptyState as u } from "../shared/empty-state.js";
import { useUrlSearch as d } from "./use-url-search.js";
import { useRepositoryData as f } from "./use-repository-data.js";
import { GenericDropdownMenu as p } from "../shared/generic-dropdown-menu.js";
import m from "../../../../icons/repo.js";
import { useHomeStore as h } from "../../../../stores/home-store.js";
import { useCallback as g, useEffect as _, useMemo as v, useRef as y, useState as b } from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/features/home/git-repo-dropdown/git-repo-dropdown.tsx
function C({ provider: C, value: w, repositoryName: te, placeholder: T, className: E, disabled: D = !1, onChange: O }) {
	let { t: k } = e("openhands"), { recentRepositories: A } = h(), [j, M] = b(""), [N, P] = b(null), F = o(j, 300), ne = y(null), I = v(() => {
		if (F.startsWith("https://")) {
			let e = F.match(/https:\/\/[^/]+\/([^/]+\/[^/]+)/);
			return e ? e[1] : F;
		}
		return F;
	}, [F]), { urlSearchResults: L, isUrlSearchLoading: R } = d(j, C), { repositories: z, selectedRepository: B, fetchNextPage: V, hasNextPage: H, isLoading: U, isFetchingNextPage: W, isError: G, isSearchLoading: K } = f(C, D, I, L, j, w, te), q = B ?? N, J = v(() => {
		let e = A.filter((e) => e.git_provider === C);
		if (!j?.trim()) return e;
		let t = j.startsWith("https://") ? I : j;
		return e.filter((e) => e.full_name.toLowerCase().includes(t.toLowerCase()));
	}, [
		A,
		C,
		j,
		I
	]), Y = g((e) => {
		let t = new Set(J.map((e) => e.id)), n = e.filter((e) => !t.has(e.id));
		return [...J, ...n];
	}, [J]), X = v(() => {
		let e;
		if (L.length > 0) e = z;
		else if (j === B?.full_name) e = z;
		else if (!j?.trim()) e = z;
		else {
			let t = j.startsWith("https://") ? I : j;
			e = z.filter((e) => e.full_name.toLowerCase().includes(t.toLowerCase()));
		}
		return Y(e);
	}, [
		z,
		j,
		B,
		L,
		I,
		Y
	]), Z = g((e) => {
		P(e), O?.(e || void 0), e && M(e.full_name);
	}, [O]), re = g(() => {
		P(null), Z(null), M("");
	}, [Z]), ie = g((e) => {
		let { scrollTop: t, scrollHeight: n, clientHeight: r } = e.currentTarget;
		t + r >= n - 10 && H && !W && V();
	}, [
		H,
		W,
		V
	]), { isOpen: Q, getToggleButtonProps: ae, getMenuProps: oe, getInputProps: se, highlightedIndex: ce, getItemProps: $, selectedItem: le } = a({
		items: X,
		itemToString: (e) => e?.full_name || "",
		selectedItem: N,
		onSelectedItemChange: ({ selectedItem: e }) => {
			Z(e);
		},
		inputValue: j,
		stateReducer: (e, t) => t.type === a.stateChangeTypes.InputClick && e.isOpen ? {
			...t.changes,
			isOpen: !0
		} : t.changes
	});
	_(() => {
		B ? P(B) : w === null && P(null);
	}, [B, w]), _(() => {
		Q || M(q?.full_name ?? "");
	}, [q, Q]);
	let ue = U || K || W || R, de = (e, t, n, r, i) => /* @__PURE__ */ x(ee, {
		item: e,
		index: t,
		isSelected: r?.id === e.id,
		getItemProps: i,
		getDisplayText: (e) => e.full_name,
		getItemKey: (e) => e.id
	}, e.id), fe = (e) => /* @__PURE__ */ x(u, {
		inputValue: e,
		searchMessage: k(t.HOME$NO_REPOSITORY_FOUND),
		emptyMessage: k(t.COMMON$NO_REPOSITORY),
		testId: "git-repo-dropdown-empty"
	}), pe = v(() => J.length === 0 ? null : /* @__PURE__ */ x("div", { children: /* @__PURE__ */ x(i.Text, {
		className: "text-xs text-content-2 font-semibold leading-4 pl-2",
		children: k(t.COMMON$MOST_RECENT)
	}) }), [
		J,
		N,
		$,
		k
	]);
	return /* @__PURE__ */ S("div", {
		className: n("relative", E),
		children: [
			/* @__PURE__ */ S("div", {
				className: "group relative text-[var(--oh-muted)] hover:text-white",
				children: [
					/* @__PURE__ */ x("div", {
						className: "absolute left-2 top-1/2 transform -translate-y-1/2 z-10",
						children: ue ? /* @__PURE__ */ x("div", { className: "animate-spin h-4 w-4 border-2 border-transparent border-t-white rounded-full" }) : /* @__PURE__ */ x(m, {
							width: 16,
							height: 16
						})
					}),
					/* @__PURE__ */ x("input", {
						...se({
							disabled: D,
							placeholder: T ?? k(t.COMMON$SEARCH_REPOSITORIES_PLACEHOLDER),
							className: n(r, "text-inherit shadow-none pl-7 pr-16 text-sm font-normal leading-5", "placeholder:text-[var(--oh-muted)]", "disabled:cursor-not-allowed disabled:opacity-60"),
							onChange: (e) => {
								M(e.target.value);
							}
						}),
						"data-testid": "git-repo-dropdown"
					}),
					/* @__PURE__ */ S("div", {
						className: "absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center",
						children: [q && /* @__PURE__ */ x(s, {
							disabled: D,
							onClear: re
						}), /* @__PURE__ */ x(c, {
							isOpen: Q,
							disabled: D,
							getToggleButtonProps: ae
						})]
					})
				]
			}),
			/* @__PURE__ */ x(p, {
				isOpen: Q,
				filteredItems: X,
				inputValue: j,
				highlightedIndex: ce,
				selectedItem: le,
				getMenuProps: oe,
				getItemProps: $,
				onScroll: ie,
				menuRef: ne,
				renderItem: de,
				renderEmptyState: fe,
				stickyTopItem: pe,
				testId: "git-repo-dropdown-menu",
				numberOfRecentItems: J.length,
				itemKey: (e) => e.id
			}),
			/* @__PURE__ */ x(l, { isError: G })
		]
	});
}
//#endregion
export { C as GitRepoDropdown };

//# sourceMappingURL=git-repo-dropdown.js.map
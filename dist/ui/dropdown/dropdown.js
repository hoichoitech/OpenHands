import { cn as e } from "../../utils/utils.js";
import { dropdownTriggerShellClassName as t } from "../../utils/dropdown-classes.js";
import { useCombobox as n } from "../../node_modules/downshift/dist/downshift.esm.js";
import { LoadingSpinner as r } from "./loading-spinner.js";
import { ClearButton as i } from "./clear-button.js";
import { ToggleButton as a } from "./toggle-button.js";
import { DropdownMenu as o } from "./dropdown-menu.js";
import { DropdownInput as s } from "./dropdown-input.js";
import c, { useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/ui/dropdown/dropdown.tsx
var p = {
	position: "absolute",
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0
};
function m({ options: m, emptyMessage: h = "No options", clearable: g = !1, loading: _ = !1, disabled: v = !1, placeholder: y, defaultValue: b, onChange: x, testId: S, className: C, footer: w, openUpward: T = !1, hideTrigger: E = !1, defaultOpen: D = !1, openOnHover: O = !1, italicPlaceholder: k = !0, fitContent: A = !1 }) {
	let j = c.useRef(null), [M, N] = l(b?.label ?? ""), [P, F] = l("");
	c.useEffect(() => () => {
		j.current &&= (clearTimeout(j.current), null);
	}, []);
	let I = m.filter((e) => e.label.toLowerCase().includes(P.toLowerCase())), { isOpen: L, selectedItem: R, selectItem: z, openMenu: B, closeMenu: V, getToggleButtonProps: H, getMenuProps: U, getItemProps: W, getInputProps: G } = n({
		items: I,
		itemToString: (e) => e?.label ?? "",
		inputValue: M,
		stateReducer: (e, t) => t.type === n.stateChangeTypes.InputClick && e.isOpen ? {
			...t.changes,
			isOpen: !0
		} : t.changes,
		initialIsOpen: D,
		onInputValueChange: ({ inputValue: e }) => {
			N(e ?? ""), F(e ?? "");
		},
		defaultSelectedItem: b,
		onSelectedItemChange: ({ selectedItem: e }) => {
			x?.(e ?? null);
		},
		onIsOpenChange: ({ isOpen: e, selectedItem: t }) => {
			e ? (N(""), F("")) : (N(t?.label ?? ""), F(""));
		}
	}), K = _ || v, q = R ? m.find((e) => e.value === R.value) ?? R : null, J = (e) => G({
		...e,
		onChange: (e) => {
			N(e.target.value), F(e.target.value);
		}
	});
	return /* @__PURE__ */ f("div", {
		className: e("relative", A ? "inline-block w-auto" : "w-full"),
		"data-testid": S,
		onMouseEnter: O ? () => {
			j.current &&= (clearTimeout(j.current), null), B();
		} : void 0,
		onMouseLeave: O ? () => {
			j.current && clearTimeout(j.current), j.current = setTimeout(() => V(), 150);
		} : void 0,
		children: [E ? /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d("input", {
			...J({
				"aria-label": y ?? "Filter options",
				tabIndex: -1
			}),
			style: p
		}), /* @__PURE__ */ d("button", {
			type: "button",
			...H({ tabIndex: -1 }),
			style: p,
			"aria-hidden": !0
		})] }) : /* @__PURE__ */ f("div", {
			className: e(t, A ? "w-auto" : "w-full", K && "cursor-not-allowed opacity-60", C),
			children: [
				q?.prefix ? /* @__PURE__ */ d("span", {
					className: "flex items-center shrink-0",
					children: q.prefix
				}) : null,
				/* @__PURE__ */ d(s, {
					placeholder: y,
					isDisabled: K,
					getInputProps: J,
					italicPlaceholder: k,
					fitContent: A
				}),
				_ && /* @__PURE__ */ d(r, {}),
				g && R && /* @__PURE__ */ d(i, { onClear: () => z(null) }),
				/* @__PURE__ */ d(a, {
					isOpen: L,
					isDisabled: K,
					getToggleButtonProps: H
				})
			]
		}), /* @__PURE__ */ d(o, {
			isOpen: L,
			filteredOptions: I,
			selectedItem: R,
			emptyMessage: h,
			getMenuProps: U,
			getItemProps: W,
			footer: w,
			openUpward: T,
			fitContent: A
		})]
	});
}
//#endregion
export { m as Dropdown };

//# sourceMappingURL=dropdown.js.map
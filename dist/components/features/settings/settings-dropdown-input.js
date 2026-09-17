import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { listbox_item_base_default as r } from "../../../node_modules/@heroui/listbox/dist/chunk-BJFJ4DRR.js";
import { autocomplete_default as i } from "../../../node_modules/@heroui/autocomplete/dist/chunk-3QKDXXDY.js";
import { formControlSettingsFieldClassName as a } from "../../../utils/form-control-classes.js";
import { heroUiAutocompleteSelectorButtonClassName as o } from "../../../ui/combobox-caret.js";
import { OptionalTag as s } from "./optional-tag.js";
import "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/settings/settings-dropdown-input.tsx
function u({ testId: u, label: d, wrapperClassName: f, name: p, items: m, placeholder: h, showOptionalTag: g, isDisabled: _, isLoading: v, defaultSelectedKey: y, selectedKey: b, isClearable: x, allowsCustomValue: S, required: C, onSelectionChange: w, onInputChange: T, defaultFilter: E, startContent: D, inputWrapperClassName: O, inputClassName: k }) {
	let { t: A } = e("openhands");
	return /* @__PURE__ */ l("label", {
		className: n("flex flex-col gap-2.5 w-full min-w-0", f),
		children: [d && /* @__PURE__ */ l("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ c("span", {
				className: "text-sm",
				children: d
			}), g && /* @__PURE__ */ c(s, {})]
		}), /* @__PURE__ */ c(i, {
			"aria-label": typeof d == "string" ? d : p,
			"data-testid": u,
			name: p,
			defaultItems: m,
			defaultSelectedKey: y,
			selectedKey: b,
			onSelectionChange: w,
			onInputChange: T,
			isClearable: x,
			isDisabled: _ || v,
			isLoading: v,
			placeholder: v ? A(t.HOME$LOADING) : h,
			allowsCustomValue: S,
			isRequired: C,
			className: "w-full",
			classNames: {
				popoverContent: "bg-content1 rounded-xl",
				selectorButton: o
			},
			selectorButtonProps: { disableRipple: !0 },
			inputProps: { classNames: {
				inputWrapper: n(a, O),
				input: k
			} },
			defaultFilter: E,
			startContent: D || null,
			children: (e) => /* @__PURE__ */ c(r, { children: e.label }, e.key)
		})]
	});
}
//#endregion
export { u as SettingsDropdownInput };

//# sourceMappingURL=settings-dropdown-input.js.map
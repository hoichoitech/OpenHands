import { cn as e } from "../../../utils/utils.js";
import { formControlSettingsFieldClassName as t } from "../../../utils/form-control-classes.js";
import { OptionalTag as n } from "./optional-tag.js";
import { forwardRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/settings/settings-input.tsx
var o = r(function({ testId: r, name: o, label: s, type: c, defaultValue: l, value: u, placeholder: d, showOptionalTag: f, isDisabled: p, startContent: m, className: h, onChange: g, onKeyDown: _, required: v, min: y, max: b, step: x, pattern: S, title: C, labelClassName: w, ariaLabel: T, ariaDescribedBy: E, ariaInvalid: D, error: O, showRequiredTag: k, hint: A, onBlur: j, inputClassName: M }, N) {
	let P = O && r ? `${r}-error` : void 0;
	return /* @__PURE__ */ a("label", {
		className: e("flex flex-col gap-2.5 w-full min-w-0", h),
		children: [
			/* @__PURE__ */ a("div", {
				className: "flex items-center gap-2",
				children: [
					m,
					/* @__PURE__ */ i("span", {
						className: e("text-sm", w),
						children: s
					}),
					k && /* @__PURE__ */ i("span", {
						className: "text-red-400 text-sm leading-none",
						"aria-hidden": !0,
						children: "*"
					}),
					f && /* @__PURE__ */ i(n, {}),
					A && /* @__PURE__ */ i("span", {
						"data-testid": r ? `${r}-hint` : void 0,
						className: "min-w-0 text-xs text-[var(--oh-muted)]",
						children: A
					})
				]
			}),
			/* @__PURE__ */ i("input", {
				ref: N,
				"data-testid": r,
				onChange: (e) => g?.(e.target.value),
				onKeyDown: _,
				onBlur: j,
				name: o,
				disabled: p,
				type: c,
				defaultValue: l,
				value: u,
				placeholder: d,
				min: y,
				max: b,
				step: x,
				required: v,
				pattern: S,
				title: C,
				"aria-label": T,
				"aria-describedby": P ?? E,
				"aria-invalid": !!O || D,
				className: e(t, "disabled:bg-[var(--oh-surface-raised)] disabled:border-[var(--oh-border-subtle)]", O && "border-red-500", M)
			}),
			O && /* @__PURE__ */ i("p", {
				id: P,
				role: "alert",
				"data-testid": r ? `${r}-error` : void 0,
				className: "text-xs text-red-400 -mt-1",
				children: O
			})
		]
	});
});
//#endregion
export { o as SettingsInput };

//# sourceMappingURL=settings-input.js.map
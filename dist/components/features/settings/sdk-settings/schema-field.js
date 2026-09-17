import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { cn as t } from "../../../../utils/utils.js";
import { formControlMultilineFieldClassName as n, formControlSwitchDescriptionClassName as r } from "../../../../utils/form-control-classes.js";
import { OptionalTag as i } from "../optional-tag.js";
import { SettingsInput as a } from "../settings-input.js";
import { SettingsSwitch as o } from "../settings-switch.js";
import { SettingsDropdownInput as s } from "../settings-dropdown-input.js";
import { getSettingsFieldConstraints as c, resolveSchemaChoiceLabel as l, resolveSchemaFieldLabel as u } from "../../../../utils/sdk-settings-field-metadata.js";
import { FieldHelp as d } from "./field-help.js";
import "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/features/settings/sdk-settings/schema-field.tsx
var m = new Set(["verification.critic_api_key"]);
function h(e) {
	return e.choices.length > 0;
}
function g(e) {
	return e.value_type === "boolean" && !h(e);
}
function _(e) {
	return e.value_type === "array" || e.value_type === "object";
}
function v(e) {
	return e.key.endsWith("url") || e.key.endsWith("_url");
}
function y(e) {
	return e.secret ? "password" : e.value_type === "integer" || e.value_type === "number" ? "number" : e.value_type === "string" && v(e) ? "url" : "text";
}
function b({ field: m, value: v, isDisabled: b, onChange: x }) {
	let { t: S } = e("openhands"), C = u(S, m.key, m.label), w = c(m.key);
	return g(m) ? /* @__PURE__ */ p("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ f(o, {
			testId: `sdk-settings-${m.key}`,
			isToggled: !!v,
			isDisabled: b,
			onToggle: x,
			children: C
		}), /* @__PURE__ */ f("div", {
			className: r,
			children: /* @__PURE__ */ f(d, { field: m })
		})]
	}) : h(m) ? /* @__PURE__ */ p("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ f(s, {
			testId: `sdk-settings-${m.key}`,
			name: m.key,
			label: C,
			items: m.choices.map((e) => ({
				key: String(e.value),
				label: l(S, m.key, e.value, e.label)
			})),
			selectedKey: v === "" ? void 0 : String(v),
			isClearable: !m.required,
			required: m.required,
			showOptionalTag: !m.required,
			isDisabled: b,
			onSelectionChange: (e) => x(String(e ?? ""))
		}), /* @__PURE__ */ f(d, { field: m })]
	}) : _(m) ? /* @__PURE__ */ p("label", {
		className: "flex flex-col gap-2.5 w-full",
		children: [
			/* @__PURE__ */ p("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ f("span", {
					className: "text-sm",
					children: C
				}), m.required ? null : /* @__PURE__ */ f(i, {})]
			}),
			/* @__PURE__ */ f("textarea", {
				"data-testid": `sdk-settings-${m.key}`,
				name: m.key,
				value: String(v ?? ""),
				required: m.required,
				disabled: b,
				onChange: (e) => x(e.target.value),
				className: t(n, "min-h-32 font-mono placeholder:italic", "disabled:bg-[var(--oh-surface-raised)] disabled:border-[var(--oh-border-subtle)]")
			}),
			/* @__PURE__ */ f(d, { field: m })
		]
	}) : /* @__PURE__ */ p("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ f(a, {
			testId: `sdk-settings-${m.key}`,
			name: m.key,
			label: C,
			type: y(m),
			value: String(v ?? ""),
			required: m.required,
			showOptionalTag: !m.required,
			isDisabled: b,
			onChange: x,
			className: "w-full",
			min: w?.min,
			max: w?.max,
			step: w?.step
		}), /* @__PURE__ */ f(d, { field: m })]
	});
}
//#endregion
export { m as FIELD_FULL_WIDTH_KEYS, b as SchemaField };

//# sourceMappingURL=schema-field.js.map
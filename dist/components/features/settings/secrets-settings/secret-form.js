import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { useQueryClient as r } from "../../../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { formControlMultilineFieldClassName as i, formControlSettingsFieldClassName as a } from "../../../../utils/form-control-classes.js";
import { BrandButton as o } from "../brand-button.js";
import { useCreateSecret as s } from "../../../../hooks/mutation/use-create-secret.js";
import { OptionalTag as c } from "../optional-tag.js";
import { SettingsInput as l } from "../settings-input.js";
import { useSearchSecrets as u } from "../../../../hooks/query/use-get-secrets.js";
import { useUpdateSecret as d } from "../../../../hooks/mutation/use-update-secret.js";
import f from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/settings/secrets-settings/secret-form.tsx
function h({ mode: h, selectedSecret: g, onCancel: _ }) {
	let v = r(), { t: y } = e("openhands"), { data: b } = u(), { mutate: x } = s(), { mutate: S } = d(), [C, w] = f.useState(null), [T, E] = f.useState(h === "edit" && g ? g : ""), [D, O] = f.useState(""), [k, A] = f.useState(""), j = h === "edit" && g && b?.find((e) => e.name === g)?.description?.trim() || "", M = h === "edit" && g ? g : "";
	f.useEffect(() => {
		E(h === "edit" && g ? g : ""), O(""), A(j), w(null);
	}, [
		h,
		g,
		j
	]);
	let N = () => {
		v.invalidateQueries({ queryKey: ["secrets-search"] }), v.invalidateQueries({ queryKey: ["secrets"] });
	}, P = (e, t, n) => {
		x({
			name: e,
			value: t,
			description: n
		}, {
			onSettled: _,
			onSuccess: N
		});
	}, F = (e, t, n, r) => {
		S({
			secretToEdit: e,
			name: t,
			description: n,
			value: r
		}, {
			onSettled: _,
			onSuccess: N
		});
	}, I = (e) => {
		e.preventDefault();
		let n = T.trim(), r = D.trim(), i = k || void 0;
		if (n) {
			if (w(null), b?.some((e) => e.name === n && e.name !== g)) {
				w(y(t.SECRETS$SECRET_ALREADY_EXISTS));
				return;
			}
			if (h === "add") {
				if (!r) {
					w(y(t.SECRETS$SECRET_VALUE_REQUIRED));
					return;
				}
				P(n, r, i);
			} else h === "edit" && g && F(g, n, i, r || void 0);
		}
	}, L = h === "add" ? "add-secret-form" : "edit-secret-form", R = h === "edit" && (T.trim() !== M.trim() || k !== j || D.trim() !== ""), z = h === "add" ? !T.trim() || !D.trim() : h === "edit" ? !R : !1;
	return /* @__PURE__ */ m("form", {
		"data-testid": L,
		onSubmit: I,
		className: "flex flex-col items-start gap-6",
		children: [
			/* @__PURE__ */ p(l, {
				testId: "name-input",
				name: "secret-name",
				type: "text",
				label: y(t.SETTINGS$NAME),
				className: "w-full min-w-0",
				required: !0,
				value: T,
				onChange: E,
				placeholder: y(t.SECRETS$API_KEY_EXAMPLE),
				pattern: "^[a-zA-Z][a-zA-Z0-9_]{0,63}$",
				title: y(t.SETTINGS$SECRET_NAME_PATTERN_TITLE)
			}),
			C && /* @__PURE__ */ p("p", {
				className: "text-red-500 text-sm",
				children: C
			}),
			/* @__PURE__ */ m("label", {
				className: "flex flex-col gap-2.5 w-full min-w-0",
				children: [/* @__PURE__ */ p("span", {
					className: "text-sm",
					children: y(h === "add" ? t.FORM$VALUE : t.SECRETS$SECRET_VALUE_LEAVE_BLANK)
				}), /* @__PURE__ */ p("textarea", {
					"data-testid": "value-input",
					name: "secret-value",
					required: h === "add",
					value: D,
					onChange: (e) => O(e.currentTarget.value),
					className: n("resize-none", i, "placeholder:italic", "disabled:bg-[var(--oh-surface-raised)] disabled:border-[var(--oh-border-subtle)] disabled:cursor-not-allowed"),
					rows: 8
				})]
			}),
			/* @__PURE__ */ m("label", {
				className: "flex flex-col gap-2.5 w-full min-w-0",
				children: [/* @__PURE__ */ m("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ p("span", {
						className: "text-sm",
						children: y(t.FORM$DESCRIPTION)
					}), /* @__PURE__ */ p(c, {})]
				}), /* @__PURE__ */ p("input", {
					"data-testid": "description-input",
					name: "secret-description",
					value: k,
					onChange: (e) => A(e.currentTarget.value),
					className: n(a, "disabled:bg-[var(--oh-surface-raised)] disabled:border-[var(--oh-border-subtle)]")
				})]
			}),
			/* @__PURE__ */ m("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ p(o, {
					testId: "cancel-button",
					type: "button",
					variant: "secondary",
					onClick: _,
					children: y(t.BUTTON$CANCEL)
				}), /* @__PURE__ */ m(o, {
					testId: "submit-button",
					type: "submit",
					variant: "primary",
					isDisabled: z,
					children: [h === "add" && y(t.SECRETS$ADD_SECRET), h === "edit" && y(t.SECRETS$EDIT_SECRET)]
				})]
			})
		]
	});
}
//#endregion
export { h as SecretForm };

//# sourceMappingURL=secret-form.js.map
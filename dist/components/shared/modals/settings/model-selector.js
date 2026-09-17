import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { PRODUCT_URL as n } from "../../../../utils/constants.js";
import { cn as r } from "../../../../utils/utils.js";
import { listbox_item_base_default as i } from "../../../../node_modules/@heroui/listbox/dist/chunk-BJFJ4DRR.js";
import { listbox_section_base_default as a } from "../../../../node_modules/@heroui/listbox/dist/chunk-ANTZPR32.js";
import { autocomplete_default as o } from "../../../../node_modules/@heroui/autocomplete/dist/chunk-3QKDXXDY.js";
import { formControlSettingsFieldClassName as s } from "../../../../utils/form-control-classes.js";
import { FREE_MODEL_BADGE_LABEL as c } from "../../../../utils/format-model-name.js";
import { heroUiAutocompleteSelectorButtonClassName as l } from "../../../../ui/combobox-caret.js";
import { mapProvider as u } from "../../../../utils/map-provider.js";
import { extractModelAndProvider as d } from "../../../../utils/extract-model-and-provider.js";
import { HelpLink as f } from "../../../../ui/help-link.js";
import { useSearchProviders as p } from "../../../../hooks/query/use-search-providers.js";
import { useProviderModels as m } from "../../../../hooks/query/use-provider-models.js";
import { FreeOpenHandsModelsNote as h } from "../../free-models-note.js";
import g from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/components/shared/modals/settings/model-selector.tsx
var b = "shrink-0 rounded-full border border-warning/40 bg-warning/10 px-1.5 py-0.5 text-[10px] leading-none text-warning";
function x({ isDisabled: x, currentModel: S, onChange: C, onDefaultValuesChanged: w, wrapperClassName: T, labelClassName: E }) {
	let [, D] = g.useState(null), [O, k] = g.useState(null), [A, j] = g.useState(null), { data: M = [] } = p(), { data: N = [], isLoading: P, error: F } = m(O), I = g.useMemo(() => M.filter((e) => e.verified), [M]), L = g.useMemo(() => M.filter((e) => !e.verified), [M]), R = g.useMemo(() => N.filter((e) => e.verified), [N]), z = g.useMemo(() => N.filter((e) => !e.verified), [N]), B = g.useMemo(() => N.filter((e) => e.free).map((e) => e.name), [N]), V = g.useMemo(() => new Set(B), [B]);
	g.useEffect(() => {
		if (S) {
			let { provider: e, model: t } = d(S);
			D(S), k(e || null), j(t), w?.(e || null, t);
		}
	}, [S]);
	let H = (e) => {
		k(e), j(null), D(`${e}/`), C?.(e, null);
	}, U = (e) => {
		let t = `${O}/${e}`;
		O === "openai" && (t = e), D(t), j(e), C?.(O, e);
	}, W = () => {
		k(null), D(null);
	}, G = !!(A && V.has(A)), K = g.useRef(null), [q, J] = g.useState(0);
	g.useLayoutEffect(() => {
		if (!G || !K.current) {
			J(0);
			return;
		}
		let e = () => {
			J(Math.ceil(K.current?.getBoundingClientRect().width ?? 0));
		};
		if (e(), typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(e);
		return t.observe(K.current), () => t.disconnect();
	}, [G, A]);
	let { t: Y } = e("openhands");
	return /* @__PURE__ */ y("div", {
		className: r("flex flex-col md:flex-row w-full min-w-0 justify-between gap-4 md:gap-[46px]", T),
		children: [
			/* @__PURE__ */ y("fieldset", {
				className: "flex flex-col gap-2.5 w-full",
				children: [/* @__PURE__ */ v("label", {
					className: r("text-sm", E),
					children: Y(t.LLM$PROVIDER)
				}), /* @__PURE__ */ y(o, {
					"data-testid": "llm-provider-input",
					isRequired: !0,
					isVirtualized: !1,
					name: "llm-provider-input",
					isDisabled: x,
					"aria-label": Y(t.LLM$PROVIDER),
					isClearable: !1,
					onSelectionChange: (e) => {
						e?.toString() && H(e.toString());
					},
					onInputChange: (e) => !e && W(),
					defaultSelectedKey: O ?? void 0,
					selectedKey: O,
					classNames: {
						popoverContent: "bg-content1 rounded-xl border border-[var(--oh-border)]",
						selectorButton: l
					},
					selectorButtonProps: { disableRipple: !0 },
					inputProps: { classNames: { inputWrapper: s } },
					children: [/* @__PURE__ */ v(a, {
						title: Y(t.MODEL_SELECTOR$VERIFIED),
						classNames: { heading: "text-[var(--oh-muted)]" },
						children: I.map((e) => /* @__PURE__ */ v(i, {
							"data-testid": `provider-item-${e.name}`,
							children: u(e.name)
						}, e.name))
					}), L.length > 0 ? /* @__PURE__ */ v(a, {
						title: Y(t.MODEL_SELECTOR$OTHERS),
						classNames: { heading: "text-[var(--oh-muted)]" },
						children: L.map((e) => /* @__PURE__ */ v(i, { children: u(e.name) }, e.name))
					}) : null]
				})]
			}),
			O === "openhands" && /* @__PURE__ */ v("div", {
				className: "flex flex-col gap-2",
				children: /* @__PURE__ */ v(f, {
					testId: "openhands-account-help",
					text: Y(t.SETTINGS$NEED_OPENHANDS_ACCOUNT),
					linkText: Y(t.SETTINGS$CLICK_HERE),
					href: n.PRODUCTION,
					size: "settings",
					linkColor: "white"
				})
			}),
			/* @__PURE__ */ y("fieldset", {
				className: "flex flex-col gap-2.5 w-full",
				children: [
					/* @__PURE__ */ v("label", {
						className: r("text-sm", E),
						children: Y(t.LLM$MODEL)
					}),
					/* @__PURE__ */ y("div", {
						className: "relative",
						children: [/* @__PURE__ */ y(o, {
							"data-testid": "llm-model-input",
							isRequired: !0,
							isVirtualized: !1,
							isLoading: P,
							name: "llm-model-input",
							"aria-label": Y(t.LLM$MODEL),
							isClearable: !1,
							onSelectionChange: (e) => {
								e?.toString() && U(e.toString());
							},
							isDisabled: x || !O,
							selectedKey: A,
							defaultSelectedKey: A ?? void 0,
							classNames: {
								popoverContent: "bg-content1 rounded-xl border border-[var(--oh-border)]",
								selectorButton: l
							},
							selectorButtonProps: { disableRipple: !0 },
							inputProps: { classNames: { inputWrapper: s } },
							children: [/* @__PURE__ */ v(a, {
								title: Y(t.MODEL_SELECTOR$VERIFIED),
								classNames: { heading: "text-[var(--oh-muted)]" },
								children: R.map((e) => /* @__PURE__ */ v(i, {
									textValue: e.name,
									children: /* @__PURE__ */ y("span", {
										className: "flex min-w-0 items-center gap-2",
										children: [/* @__PURE__ */ v("span", {
											className: "truncate",
											children: e.name
										}), e.free ? /* @__PURE__ */ v("span", {
											className: b,
											children: c
										}) : null]
									})
								}, e.name))
							}), z.length > 0 ? /* @__PURE__ */ v(a, {
								title: Y(t.MODEL_SELECTOR$OTHERS),
								classNames: { heading: "text-[var(--oh-muted)]" },
								children: z.map((e) => /* @__PURE__ */ v(i, {
									"data-testid": `model-item-${e.name}`,
									textValue: e.name,
									children: e.name
								}, e.name))
							}) : null]
						}), G && A ? /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("span", {
							ref: K,
							className: "pointer-events-none absolute left-3 top-1/2 whitespace-pre text-sm opacity-0",
							"aria-hidden": !0,
							children: A
						}), /* @__PURE__ */ v("span", {
							"data-testid": "selected-free-model-badge",
							className: r(b, "pointer-events-none absolute top-1/2 z-10 -translate-y-1/2"),
							style: { left: `calc(0.75rem + ${q}px + 0.5rem)` },
							children: c
						})] }) : null]
					}),
					F && /* @__PURE__ */ v("p", {
						"data-testid": "models-error",
						className: "text-danger text-xs",
						children: Y(t.CONFIGURATION$ERROR_FETCH_MODELS)
					}),
					O === "openhands" && B.length > 0 ? /* @__PURE__ */ v(h, { modelIds: B.map((e) => `${O}/${e}`) }) : null
				]
			})
		]
	});
}
//#endregion
export { x as ModelSelector };

//# sourceMappingURL=model-selector.js.map
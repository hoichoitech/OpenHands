import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { AxiosError as n } from "../../../../node_modules/axios/index.js";
import { retrieveAxiosErrorMessage as r } from "../../../../utils/retrieve-axios-error-message.js";
import { displayErrorToast as i, displaySuccessToast as a } from "../../../../utils/custom-toast-handlers.js";
import { useSettings as o } from "../../../../hooks/query/use-settings.js";
import { useSaveSettings as ee } from "../../../../hooks/mutation/use-save-settings.js";
import { BrandButton as te } from "../brand-button.js";
import { extensionModuleEmptyStateClassName as ne } from "../../../../utils/extension-module-card-classes.js";
import { useAgentSettingsSchema as re, useConversationSettingsSchema as ie } from "../../../../hooks/query/use-agent-settings-schema.js";
import { LlmSettingsInputsSkeleton as s } from "../llm-settings/llm-settings-inputs-skeleton.js";
import { buildInitialSettingsFormValues as ae, buildSdkSettingsPayload as oe, buildSdkSettingsPayloadForView as se, getVisibleSettingsSections as ce, hasAdvancedSettings as le, hasCriticalSettings as ue, hasMinorSettings as de, inferInitialView as fe, isValidSettingsSchema as pe, normalizeComparableValue as me } from "../../../../utils/sdk-settings-schema.js";
import { FIELD_FULL_WIDTH_KEYS as he, SchemaField as ge } from "./schema-field.js";
import { ViewToggle as _e } from "./view-toggle.js";
import c from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/settings/sdk-settings/sdk-section-page.tsx
var ve = /* @__PURE__ */ new Set(), d = {
	basic: 0,
	advanced: 1,
	all: 2
}, ye = (e, t) => d[t] < d[e] ? t : e, be = (e, t) => d[t] > d[e] ? t : e, xe = (e, { showBasic: t, showAdvanced: n, showAll: r }) => {
	if (e === "all") return r ? "all" : n ? "advanced" : "basic";
	if (e === "advanced") return n ? "advanced" : r ? "all" : "basic";
	if (!t) {
		if (n) return "advanced";
		if (r) return "all";
	}
	return "basic";
}, Se = {
	agent_settings: "agent_settings_diff",
	conversation_settings: "conversation_settings_diff"
}, Ce = (e, t) => e instanceof n ? e.response?.status === 401 ? `${t} This agent server requires X-Session-API-Key. Set VITE_SESSION_API_KEY in the frontend to the same value used by the backend SESSION_API_KEY or OH_SESSION_API_KEYS_0.` : e.response?.status === 404 ? `${t} This backend does not expose /api/settings/* schema endpoints. Upgrade to a recent openhands-agent-server release.` : t : t;
function f({ settingsSources: n, scope: d = "personal", header: f, extraDirty: p = !1, buildPayload: m, onSaveSuccess: we, getInitialView: h, forceShowAdvancedView: Te = !1, allowAllView: Ee = !0, initialValueOverrides: g, markInitialOverridesDirty: _ = !0, embedded: De = !1, hideSaveButton: v = !1, suppressSuccessToast: Oe = !1, onSaveControlChange: y, testId: ke = "sdk-section-settings-screen" }) {
	let { t: b } = e("openhands"), { mutate: Ae, isPending: x } = ee(d), { data: S, isLoading: je, isFetching: Me } = o(d), C = re(S?.agent_settings_schema), w = ie(S?.conversation_settings_schema), T = c.useMemo(() => JSON.stringify(n.map((e) => ({
		source: e.settingsSource,
		sectionKeys: e.sectionKeys,
		excludeKeys: e.excludeKeys ? Array.from(e.excludeKeys).sort() : null
	}))), [n]), E = c.useMemo(() => JSON.parse(T).map((e) => ({
		settingsSource: e.source,
		sectionKeys: e.sectionKeys,
		excludeKeys: e.excludeKeys ? new Set(e.excludeKeys) : void 0
	})), [T]), D = c.useCallback((e) => e === "conversation_settings" ? w.data : C.data, [C.data, w.data]), Ne = E.some((e) => e.settingsSource === "conversation_settings" ? w.isLoading : C.isLoading), O = c.useMemo(() => E.map((e) => {
		let t = D(e.settingsSource);
		if (!pe(t)) return {
			...e,
			filteredSchema: null
		};
		let n = new Set(e.sectionKeys), r = /* @__PURE__ */ new Set(), i = {
			...t,
			sections: t.sections.filter((e) => !n.has(e.key) || r.has(e.key) ? !1 : (r.add(e.key), !0))
		};
		return {
			...e,
			filteredSchema: i
		};
	}), [E, D]), k = O.some((e) => ue(e.filteredSchema)), A = Te || O.some((e) => le(e.filteredSchema)), j = Ee && O.some((e) => de(e.filteredSchema)), Pe = c.useMemo(() => Ce(E.reduce((e, t) => e ?? (t.settingsSource === "conversation_settings" ? w.error : C.error), null), b(t.SETTINGS$SDK_SCHEMA_UNAVAILABLE)), [
		E,
		C.error,
		w.error,
		b
	]), M = c.useMemo(() => g ? JSON.stringify(g) : "", [g]), N = O[0]?.settingsSource, [P, F] = c.useState("basic"), [I, L] = c.useState({}), [R, z] = c.useState({}), B = c.useRef(!1), V = c.useMemo(() => {
		if (!S) return null;
		let e = {};
		for (let t of O) {
			if (!t.filteredSchema) return null;
			e[t.settingsSource] = {
				...e[t.settingsSource] ?? {},
				...ae(S, t.filteredSchema, t.settingsSource)
			};
		}
		if (g) {
			let t = O[0]?.settingsSource;
			t && e[t] && (e[t] = {
				...e[t],
				...g
			});
		}
		return e;
	}, [
		S,
		O,
		M
	]), H = c.useMemo(() => {
		if (!S) return null;
		let e = null;
		for (let t of O) {
			if (!t.filteredSchema) return null;
			let n = h ? h(S, t.filteredSchema) : fe(S, t.filteredSchema, t.settingsSource);
			e = e ? be(e, n) : n;
		}
		return e ? xe(e, {
			showBasic: k,
			showAdvanced: A,
			showAll: j
		}) : null;
	}, [
		S,
		O,
		h,
		k,
		A,
		j
	]);
	c.useEffect(() => {
		B.current = !1, F("basic"), L({}), z({});
	}, [d, T]), c.useEffect(() => {
		if (!(!V || !H) && !(v && B.current)) {
			if (L(V), g && _) {
				let e = N;
				if (e) {
					let t = Object.fromEntries(Object.keys(g).map((e) => [e, !0]));
					z({ [e]: t });
				} else z({});
			} else z({});
			B.current ? F((e) => ye(e, H)) : (B.current = !0, F(H));
		}
	}, [
		V,
		H,
		M,
		_,
		N,
		v
	]);
	let U = c.useMemo(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of O) if (t.filteredSchema) for (let n of t.filteredSchema.sections) for (let r of n.fields) e.has(r.key) || e.set(r.key, t.settingsSource);
		return e;
	}, [O]), W = c.useMemo(() => {
		let e = {};
		for (let t of O) Object.assign(e, I[t.settingsSource] ?? {});
		return e;
	}, [O, I]), G = c.useMemo(() => {
		let e = {};
		for (let t of O) Object.assign(e, R[t.settingsSource] ?? {});
		return e;
	}, [O, R]), K = c.useMemo(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of O) if (t.filteredSchema) for (let n of t.filteredSchema.sections) for (let t of n.fields) e.has(t.key) || e.set(t.key, t);
		return e;
	}, [O]), q = c.useRef(V);
	q.current = V;
	let J = c.useRef(g);
	J.current = g;
	let Y = c.useRef(_);
	Y.current = _;
	let X = c.useRef(K);
	X.current = K;
	let Z = c.useCallback((e, t) => {
		let n = U.get(e) ?? O[0]?.settingsSource;
		n && (L((r) => ({
			...r,
			[n]: {
				...r[n] ?? {},
				[e]: t
			}
		})), z((r) => {
			let i = q.current?.[n]?.[e], a = Y.current && !!J.current && e in J.current, o = X.current.get(e);
			if ((o ? me(o, t) === me(o, i) : t === i) && !a) {
				if (!r[n]?.[e]) return r;
				let t = { ...r[n] ?? {} };
				return delete t[e], {
					...r,
					[n]: t
				};
			}
			return r[n]?.[e] ? r : {
				...r,
				[n]: {
					...r[n] ?? {},
					[e]: !0
				}
			};
		}));
	}, [U, O]), Fe = c.useCallback((e) => {
		i(r(e) || b(t.ERROR$GENERIC));
	}, [b]), Q = c.useRef(() => {}), Ie = c.useCallback(() => {
		Q.current();
	}, []), $ = c.useRef(() => ({})), Le = c.useCallback(() => $.current(), []), Re = () => {
		if (O.some((e) => !e.filteredSchema)) return;
		let e;
		try {
			let t = {};
			for (let e of O) {
				let n = e.filteredSchema, r = se(n, I[e.settingsSource] ?? {}, R[e.settingsSource] ?? {}, P);
				if (Object.keys(r).length > 0) {
					let n = Se[e.settingsSource];
					t[n] = {
						...t[n] ?? {},
						...r
					};
				}
			}
			e = m ? m(t, {
				values: W,
				dirty: G,
				view: P
			}) : t;
		} catch (e) {
			i(e instanceof Error ? e.message : b(t.ERROR$GENERIC));
			return;
		}
		Object.keys(e).length !== 0 && Ae(e, {
			onError: Fe,
			onSuccess: () => {
				Oe || a(b(t.SETTINGS$SAVED_WARNING)), z({}), we?.();
			}
		});
	};
	Q.current = Re, $.current = () => {
		let e = {};
		for (let t of O) {
			if (!t.filteredSchema) continue;
			let n = I[t.settingsSource] ?? {}, r = R[t.settingsSource] ?? {};
			Object.assign(e, oe(t.filteredSchema, n, r));
		}
		return e;
	};
	let ze = Object.keys(G).length > 0, Be = ze || p;
	return c.useEffect(() => {
		y && y({
			save: Ie,
			isSaving: x,
			isDirty: Be,
			values: W,
			view: P,
			getDirtyPayload: Le
		});
	}, [
		x,
		Be,
		W,
		P
	]), (je || Me) && !S || Ne ? /* @__PURE__ */ l(s, {}) : O.some((e) => e.filteredSchema && e.filteredSchema.sections.length > 0) ? Object.keys(W).length === 0 ? /* @__PURE__ */ l(s, {}) : /* @__PURE__ */ u("div", {
		"data-testid": ke,
		className: De ? "relative flex min-h-0 w-full flex-1 flex-col" : "relative w-full min-h-0",
		children: [/* @__PURE__ */ l(_e, {
			view: P,
			setView: F,
			showBasic: k,
			showAdvanced: A,
			showAll: j,
			isDisabled: !1
		}), /* @__PURE__ */ u("div", {
			className: "flex flex-col gap-8",
			children: [
				f?.({
					values: W,
					isDisabled: !1,
					view: P,
					onChange: Z
				}),
				O.map((e) => {
					if (!e.filteredSchema) return null;
					let t = I[e.settingsSource] ?? {};
					return ce(e.filteredSchema, {
						...W,
						...t
					}, P, e.excludeKeys ?? ve).map((n) => /* @__PURE__ */ l("section", {
						className: "flex flex-col gap-4",
						children: /* @__PURE__ */ l("div", {
							className: "grid gap-4 xl:grid-cols-2",
							children: n.fields.map((e) => /* @__PURE__ */ l("div", {
								className: he.has(e.key) ? "xl:col-span-2" : void 0,
								children: /* @__PURE__ */ l(ge, {
									field: e,
									value: t[e.key],
									isDisabled: !1,
									onChange: (t) => Z(e.key, t)
								})
							}, e.key))
						})
					}, `${e.settingsSource}:${n.key}`));
				}),
				v ? null : /* @__PURE__ */ l("div", {
					className: "flex justify-start pt-2",
					children: /* @__PURE__ */ l(te, {
						testId: "save-button",
						type: "button",
						variant: "primary",
						isDisabled: x || !ze && !p,
						onClick: Re,
						children: b(x ? t.SETTINGS$SAVING : t.SETTINGS$SAVE_CHANGES)
					})
				})
			]
		})]
	}) : /* @__PURE__ */ l("div", {
		"data-testid": "sdk-schema-unavailable",
		className: ne,
		children: /* @__PURE__ */ l("p", {
			className: "text-sm text-[var(--oh-muted)]",
			children: Pe
		})
	});
}
//#endregion
export { f as SdkSectionPage };

//# sourceMappingURL=sdk-section-page.js.map
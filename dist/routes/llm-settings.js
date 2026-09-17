import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { useActiveBackend as n } from "../contexts/active-backend-context.js";
import { DEFAULT_SETTINGS as r } from "../services/settings.js";
import { LLM_AUTH_TYPE_API_KEY as i, LLM_AUTH_TYPE_KEY as a, LLM_AUTH_TYPE_SUBSCRIPTION as o, LLM_SUBSCRIPTION_VENDOR_KEY as s, OPENAI_SUBSCRIPTION_VENDOR as c, resolveLlmAuthType as l } from "../constants/llm-subscription.js";
import { useSettings as u } from "../hooks/query/use-settings.js";
import { useDefaultModel as d, useFreeModels as ee } from "../hooks/query/use-free-models.js";
import { isFreeOpenHandsModel as te, isOpenHandsProviderModel as f } from "../utils/format-model-name.js";
import { SettingsInput as p } from "../components/features/settings/settings-input.js";
import { SettingsDropdownInput as m } from "../components/features/settings/settings-dropdown-input.js";
import { extractModelAndProvider as h } from "../utils/extract-model-and-provider.js";
import { HelpLink as g } from "../ui/help-link.js";
import { FreeOpenHandsModelsNote as ne } from "../components/shared/free-models-note.js";
import { ModelSelector as re } from "../components/shared/modals/settings/model-selector.js";
import { useAgentSettingsSchema as _ } from "../hooks/query/use-agent-settings-schema.js";
import { OpenAISubscriptionAuthCard as ie } from "../components/features/settings/llm-settings/openai-subscription-auth-card.js";
import { KeyStatusIcon as ae } from "../components/features/settings/key-status-icon.js";
import { inferInitialView as v } from "../utils/sdk-settings-schema.js";
import { SdkSectionPage as y } from "../components/features/settings/sdk-settings/sdk-section-page.js";
import { useProviderConnections as b } from "../hooks/query/use-provider-connections.js";
import "../components/features/settings/llm-profiles/index.js";
import { useOpenAISubscriptionModels as oe } from "../hooks/query/use-llm-subscription-models.js";
import x from "react";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
//#region src/routes/llm-settings.tsx
var T = "llm.provider_connection_id", E = "__none__", D = new Set([
	"llm.model",
	"llm.api_key",
	"llm.base_url",
	T,
	a,
	s
]), se = (e, t) => !e || !t ? null : `${e}/${t}`, O = (e, t) => e?.sections.flatMap((e) => e.fields).find((e) => e.key === t)?.default ?? null, k = {
	openai: new Set(["https://api.openai.com", "https://api.openai.com/v1"]),
	moonshot: new Set(["https://api.kimi.com/coding/v1"])
}, A = (e) => {
	try {
		let t = new URL(e), n = t.pathname.replace(/\/+$/, "") || "";
		return `${t.origin}${n}`;
	} catch {
		return e.trim().replace(/\/+$/, "");
	}
}, j = (e, t) => {
	let n = A(t), { provider: r } = h(e);
	if (r) {
		let e = k[r];
		if (e) return e.has(n);
	}
	return Object.values(k).some((e) => e?.has(n));
};
function ce({ testId: n }) {
	let { t: r } = e("openhands");
	return /* @__PURE__ */ C(g, {
		testId: n,
		text: r(t.SETTINGS$OPENHANDS_API_KEY_HELP_TEXT),
		linkText: r(t.SETTINGS$OPENHANDS_API_KEY_HELP_LINK),
		href: "https://app.all-hands.dev/settings/api-keys",
		suffix: ` ${r(t.SETTINGS$OPENHANDS_API_KEY_HELP_SUFFIX)}`,
		suffixLinkText: r(t.SETTINGS$SEE_HERE_FOR_MORE_DETAILS),
		suffixLinkHref: "https://docs.openhands.dev/usage/local-setup#getting-an-api-key",
		trailing: "."
	});
}
function M({ scope: h = "personal", onSaveSuccess: k, initialValueOverrides: A, markInitialOverridesDirty: M, embedded: N, hideSaveButton: P, suppressSuccessToast: F, onSaveControlChange: I, showProviderConnection: L }) {
	let { t: R } = e("openhands"), { backend: z } = n(), B = z.kind === "cloud", { data: V } = b(), H = x.useMemo(() => L ? V ?? [] : [], [L, V]), { data: U } = u(h), { data: W } = _(U?.agent_settings_schema), le = U?.agent_settings?.llm, G = l(A?.["llm.auth_type"] ?? le?.auth_type), [K, q] = x.useState(G === o), { data: J, isLoading: ue, isFetching: de } = oe({ enabled: K }), Y = K && !J && (ue || de), X = x.useRef(null), Z = x.useRef(null);
	x.useEffect(() => {
		G === "subscription" && q(!0);
	}, [G]);
	let Q = ee(), $ = d() ?? String(r.agent_settings?.llm?.model ?? ""), fe = x.useCallback((e, t) => {
		let n = v(e, t);
		if (n !== "basic") return n;
		let r = e.llm_model ?? "", i = e.llm_base_url?.trim() ?? "";
		return i.length > 0 && !j(r, i) ? "all" : "basic";
	}, []), pe = x.useCallback(({ values: e, isDisabled: n, view: r, onChange: u }) => {
		let d = typeof e["llm.model"] == "string" ? e["llm.model"] : "", ee = typeof e["llm.base_url"] == "string" ? e["llm.base_url"] : "", h = f(d), _ = l(e[a]), v = _ === o, y = B && h && !v, b = n || v && Y, oe = J?.includes(d) ? d : J?.[0] ?? "", x = typeof e["llm.api_key"] == "string" ? e["llm.api_key"] : "", D = N ? x.length > 0 : !!U?.llm_api_key_set, O = typeof e["llm.provider_connection_id"] == "string" ? e[T] : "", k = !!O, A = L && !v && (k || H.length > 0), j = k && !H.some((e) => e.id === O), M = () => /* @__PURE__ */ C(m, {
			testId: "llm-provider-connection-input",
			name: T,
			label: R(t.SETTINGS$PROVIDER_CONNECTION_SELECT_LABEL),
			items: [
				{
					key: E,
					label: R(t.SETTINGS$MCP_AUTH_MODE_NONE)
				},
				...H.map((e) => ({
					key: e.id,
					label: e.display_name
				})),
				...j ? [{
					key: O,
					label: O
				}] : []
			],
			selectedKey: O || E,
			isClearable: !1,
			isDisabled: n,
			onSelectionChange: (e) => {
				u(T, typeof e == "string" && e !== E ? e : "");
			}
		}), P = (e, r, i) => /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C(p, {
			testId: e,
			label: R(t.SETTINGS_FORM$API_KEY),
			type: "password",
			className: "w-full",
			value: x,
			placeholder: D ? "<hidden>" : "",
			onChange: (e) => u("llm.api_key", e),
			isDisabled: n,
			startContent: D ? /* @__PURE__ */ C(ae, { isSet: D }) : void 0
		}), h ? /* @__PURE__ */ C(ce, { testId: i }) : /* @__PURE__ */ C(g, {
			testId: r,
			text: R(t.SETTINGS$DONT_KNOW_API_KEY),
			linkText: R(t.SETTINGS$CLICK_FOR_INSTRUCTIONS),
			href: "https://docs.openhands.dev/usage/local-setup#getting-an-api-key"
		})] }), F = (e) => {
			let t = e === "subscription" ? o : i;
			if (u(a, t), t === "subscription") {
				q(!0), d && !J?.includes(d) && (X.current = d);
				let e = Z.current && J?.includes(Z.current) ? Z.current : J?.[0];
				u(s, c), !J?.includes(d) && e && u("llm.model", e);
				return;
			}
			d && J?.includes(d) && (Z.current = d, u("llm.model", X.current ?? $));
		}, I = () => /* @__PURE__ */ C(m, {
			testId: "llm-auth-type-input",
			name: a,
			label: R(t.SETTINGS$LLM_AUTH_TYPE),
			items: [{
				key: i,
				label: R(t.SETTINGS$LLM_AUTH_TYPE_API_KEY)
			}, {
				key: o,
				label: R(t.SETTINGS$LLM_AUTH_TYPE_SUBSCRIPTION)
			}],
			selectedKey: _,
			isClearable: !1,
			required: !0,
			isDisabled: b,
			onSelectionChange: F
		}), z = () => /* @__PURE__ */ w("div", {
			className: "flex flex-col gap-6",
			"data-testid": "llm-subscription-settings",
			children: [/* @__PURE__ */ C(m, {
				testId: "llm-subscription-model-input",
				name: "llm.subscription_model",
				label: R(t.SETTINGS$SUBSCRIPTION_MODEL),
				items: (J ?? []).map((e) => ({
					key: e,
					label: e
				})),
				selectedKey: oe,
				isClearable: !1,
				required: !0,
				isDisabled: b || !J?.length,
				onSelectionChange: (e) => {
					let t = typeof e == "string" ? e : J?.[0];
					t && u("llm.model", t);
				}
			}), /* @__PURE__ */ C(ie, { isDisabled: n })]
		});
		return /* @__PURE__ */ C("div", {
			className: "flex flex-col gap-6",
			children: r === "basic" ? /* @__PURE__ */ w("div", {
				className: "flex flex-col gap-6",
				"data-testid": "llm-settings-form-basic",
				children: [I(), v ? z() : /* @__PURE__ */ w(S, { children: [
					/* @__PURE__ */ C(re, {
						currentModel: d || void 0,
						onChange: (e, t) => {
							let n = se(e, t);
							n && u("llm.model", n);
						},
						wrapperClassName: "!flex-col !gap-6",
						isDisabled: n
					}),
					A ? M() : null,
					k || y ? null : P("llm-api-key-input", "llm-api-key-help-anchor", "openhands-api-key-help")
				] })]
			}) : /* @__PURE__ */ w("div", {
				className: "flex flex-col gap-6",
				"data-testid": "llm-settings-form-advanced",
				children: [I(), v ? z() : /* @__PURE__ */ w(S, { children: [
					/* @__PURE__ */ C(p, {
						testId: "llm-custom-model-input",
						label: R(t.SETTINGS$CUSTOM_MODEL),
						type: "text",
						className: "w-full",
						value: d,
						placeholder: $,
						onChange: (e) => u("llm.model", e),
						isDisabled: n
					}),
					h && !k ? /* @__PURE__ */ C(S, { children: te(d, Q) ? /* @__PURE__ */ C(ne, { modelIds: Q }) : null }) : null,
					A ? M() : null,
					k || y ? null : /* @__PURE__ */ C(p, {
						testId: "base-url-input",
						label: R(t.SETTINGS$BASE_URL),
						type: "text",
						className: "w-full",
						value: ee,
						placeholder: "https://api.openai.com",
						onChange: (e) => u("llm.base_url", e),
						isDisabled: n
					}),
					k || y ? null : P("llm-api-key-input", "llm-api-key-help-anchor-advanced", "openhands-api-key-help-2")
				] })]
			})
		});
	}, [
		H,
		L,
		$,
		N,
		B,
		Q,
		Y,
		U?.llm_api_key_set,
		J,
		R
	]), me = x.useCallback((e, t) => {
		let n = structuredClone(e.agent_settings_diff ?? {}), r = n.llm ?? {};
		if (l(t.values["llm.auth_type"]) === "subscription") {
			r.auth_type = o, r.subscription_vendor = c;
			let e = typeof r.model == "string" ? r.model : String(t.values["llm.model"] ?? ""), n = J?.[0];
			if (!J?.includes(e) && !n) throw Error("Subscription models are not loaded yet.");
			r.model = J?.includes(e) ? e : n, delete r.api_key, delete r.base_url;
		} else t.dirty["llm.auth_type"] && (r.auth_type = i, r.subscription_vendor = null), t.view === "basic" && r.model !== void 0 && (r.base_url = O(W, "llm.base_url")), B && f(String(t.values["llm.model"] ?? "")) && (delete r.api_key, delete r.base_url);
		return n.llm = r, { agent_settings_diff: n };
	}, [
		W,
		J,
		B
	]);
	return /* @__PURE__ */ C(y, {
		scope: h,
		settingsSources: [{
			settingsSource: "agent_settings",
			sectionKeys: ["llm"],
			excludeKeys: D
		}],
		header: pe,
		buildPayload: me,
		getInitialView: fe,
		forceShowAdvancedView: !0,
		allowAllView: !0,
		onSaveSuccess: k,
		initialValueOverrides: A,
		markInitialOverridesDirty: M,
		embedded: N,
		hideSaveButton: P,
		suppressSuccessToast: F,
		onSaveControlChange: I,
		testId: "llm-settings-screen"
	});
}
//#endregion
export { M as LlmSettingsScreen };

//# sourceMappingURL=llm-settings.js.map
import { createInstance as e } from "../node_modules/i18next/dist/esm/i18next.js";
import { initReactI18next as t } from "../node_modules/react-i18next/dist/es/initReactI18next.js";
import { Backend as n } from "../node_modules/i18next-http-backend/esm/index.js";
import { Browser as r } from "../node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js";
import { buildAgentCanvasPath as i } from "../utils/base-path.js";
import "./resources.js";
//#region src/i18n/index.ts
var a = "openhands", o = [
	{
		label: "English",
		value: "en"
	},
	{
		label: "日本語",
		value: "ja"
	},
	{
		label: "简体中文",
		value: "zh-CN"
	},
	{
		label: "繁體中文",
		value: "zh-TW"
	},
	{
		label: "한국어",
		value: "ko-KR"
	},
	{
		label: "Norsk",
		value: "no"
	},
	{
		label: "Arabic",
		value: "ar"
	},
	{
		label: "Deutsch",
		value: "de"
	},
	{
		label: "Français",
		value: "fr"
	},
	{
		label: "Italiano",
		value: "it"
	},
	{
		label: "Português",
		value: "pt"
	},
	{
		label: "Español",
		value: "es"
	},
	{
		label: "Català",
		value: "ca"
	},
	{
		label: "Türkçe",
		value: "tr"
	},
	{
		label: "Українська",
		value: "uk"
	}
], s = /* @__PURE__ */ new WeakMap(), c = (e) => {
	if (!s.has(e)) {
		let c = e.use(n).use(r).use(t).init({
			fallbackLng: "en",
			debug: !1,
			supportedLngs: o.map((e) => e.value),
			nonExplicitSupportedLngs: !1,
			ns: [a],
			defaultNS: a,
			fallbackNS: a,
			backend: { loadPath: i("/locales/{{lng}}/{{ns}}.json") },
			interpolation: { escapeValue: !1 }
		});
		s.set(e, c);
	}
	return e;
}, l = () => c(e()), u = null, d = null, f = () => (u ||= l(), u), p = () => d ?? f(), m = (e) => (d = e ?? f(), d), h = async (e = f()) => (await s.get(e), e), g = (e) => e ? typeof e == "object" && !Array.isArray(e) ? {
	ns: a,
	...e
} : e : { ns: a }, _ = new Proxy({}, {
	get: (e, t) => {
		let n = p();
		if (t === "t") return (e, t) => n.t(e, g(t));
		if (t === "exists") return (e, t) => n.exists(e, g(t));
		let r = Reflect.get(n, t, n);
		return typeof r == "function" ? r.bind(n) : r;
	},
	set: (e, t, n) => {
		let r = p();
		return Reflect.set(r, t, n, r);
	}
});
//#endregion
export { o as AvailableLanguages, a as OPENHANDS_I18N_NAMESPACE, l as createAgentServerI18n, _ as default, f as getDefaultI18n, p as getI18n, m as setI18n, h as waitForI18n };

//# sourceMappingURL=index.js.map
//#region src/utils/format-model-name.ts
var e = "Free", t = " (free)", n = { "openhands/deepseek-v4-flash": "OpenHands DeepSeek V4 Flash" }, r = /* @__PURE__ */ new Set(), i = (e) => !!e?.startsWith("openhands/"), a = (e, t = r) => !!(e && t.has(e));
function o(e, n) {
	return n ? `${e}${t}` : e;
}
function s(e, t = r) {
	return e ? o(e, a(e, t)) : null;
}
function c(e, t = r) {
	if (!e) return null;
	let n = a(e, t);
	return o(e.split("/").pop() || e, n);
}
function l(e, t = r) {
	return e ? o(e in n ? n[e] : e, a(e, t)) : null;
}
//#endregion
export { e as FREE_MODEL_BADGE_LABEL, s as formatModelNameForDisplay, l as formatModelPillLabel, c as formatNativeModelName, a as isFreeOpenHandsModel, i as isOpenHandsProviderModel };

//# sourceMappingURL=format-model-name.js.map
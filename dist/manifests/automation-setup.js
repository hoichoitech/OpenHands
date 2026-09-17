import "../i18n/index.js";
import "../utils/automation-catalog.js";
import { getAutomationEndpoint as e } from "./automation-interface.js";
import { actionKinds as t } from "./manifest-local-validation.js";
//#region src/manifests/automation-setup.ts
function n(t, n) {
	let r = o(t, n);
	return r === "plugin" ? e("createPlugin") : r === "upload" || r === "bundle" ? i("createBundle") : e("createPrompt");
}
function r() {
	return i("uploads");
}
function i(t) {
	let n = e(t);
	if (!n) throw Error(`The published automation interface declares no '${t}' endpoint, so this deployment cannot create an automation from a script bundle.`);
	return n;
}
function a(e) {
	return e.setup.mode === "direct" && e.setup.bundle !== void 0;
}
function o(e, n) {
	if (!e) return "prompt";
	if (a(e)) return "bundle";
	let r = e.setup.actions ?? {};
	if (n && n in r) return n;
	let i = t(e.setup);
	return i.length === 1 ? i[0] : "prompt";
}
//#endregion
export { n as automationCreateEndpoint, r as automationUploadEndpoint };

//# sourceMappingURL=automation-setup.js.map
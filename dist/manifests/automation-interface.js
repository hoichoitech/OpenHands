import e from "../node_modules/@openhands/extensions/automations/index.js";
import { validateInterfaceManifest as t } from "./interface-validation.js";
import { AUTOMATION_INTERFACE_CANDIDATE as n } from "./manifest-sources.js";
//#region src/manifests/automation-interface.ts
var r = {
	list: "/automations",
	setup: "/automations/new/:automationId",
	detail: "/automations/:automationId",
	templates: "/automations/templates"
};
function i(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function a() {
	return new Set(e.flatMap((e) => i(e) && typeof e.id == "string" ? [e.id] : []));
}
function o(e) {
	if (e === void 0) return null;
	let n = t(e, {
		catalogIds: a(),
		mountedRoutes: r
	});
	return n.valid ? e : (console.warn("Rejected the automation interface manifest:", n.errors.join("; ")), null);
}
var s = o(n);
function c() {
	return s !== null;
}
function l() {
	if (!s) throw Error("No automation interface manifest is admitted, so this surface should not have rendered.");
	return s;
}
function u(e, t) {
	return e.replace(":automationId", encodeURIComponent(t));
}
function d() {
	return r.list;
}
function f(e) {
	return u(r.setup, e);
}
function p(e) {
	return e === r.list || e.startsWith(`${r.list}/`);
}
function m(e) {
	return l().endpoints[e] ?? "";
}
function h(e, t) {
	return m(e).replace("{id}", encodeURIComponent(t));
}
function g() {
	let e = l();
	return {
		sidebarLabel: e.navigation.sidebar.label,
		commandMenuTitle: e.navigation.commandMenu.title,
		commandMenuDescription: e.navigation.commandMenu.description,
		commandMenuKeywords: e.navigation.commandMenu.keywords,
		listTitle: e.pages.list.title,
		listSubtitle: e.pages.list.subtitle,
		detailBackLabel: e.pages.detail.backLabel,
		editTitle: e.pages.edit.title
	};
}
function _() {
	return l().importExport;
}
function v() {
	return l().docsUrl;
}
function y() {
	return l().featuredAutomationIds;
}
function b() {
	return l().responderIntegrationIds;
}
//#endregion
export { d as automationListPath, f as automationSetupPath, m as getAutomationEndpoint, h as getAutomationIdEndpoint, v as getAutomationsDocsUrl, y as getFeaturedAutomationIds, _ as getImportExportSpec, g as getInterfaceCopy, b as getResponderIntegrationIds, c as hasAutomationInterface, p as isAutomationsRoute };

//# sourceMappingURL=automation-interface.js.map
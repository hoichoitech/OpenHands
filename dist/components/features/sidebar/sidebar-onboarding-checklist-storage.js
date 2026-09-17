import { SIDEBAR_ONBOARDING_CHECKLIST_CUSTOMIZE_EXPLORED_STORAGE_KEY as e, SIDEBAR_ONBOARDING_CHECKLIST_DISMISSED_CHANGE_EVENT as t, SIDEBAR_ONBOARDING_CHECKLIST_DISMISSED_STORAGE_KEY as n, SIDEBAR_ONBOARDING_CHECKLIST_MINIMIZED_STORAGE_KEY as r, SIDEBAR_ONBOARDING_CHECKLIST_SLACK_JOINED_STORAGE_KEY as i } from "./sidebar-onboarding-checklist.constants.js";
//#region src/components/features/sidebar/sidebar-onboarding-checklist-storage.ts
function a() {
	return typeof window > "u" ? !1 : window.localStorage.getItem(n) === "true";
}
function o() {
	return a();
}
function s(e) {
	let n = () => e();
	return window.addEventListener("storage", n), window.addEventListener(t, n), () => {
		window.removeEventListener("storage", n), window.removeEventListener(t, n);
	};
}
function c(e) {
	window.localStorage.setItem(n, e ? "true" : "false"), window.dispatchEvent(new Event(t));
}
function l() {
	return typeof window > "u" ? !1 : window.localStorage.getItem(r) === "true";
}
function u(e) {
	window.localStorage.setItem(r, e ? "true" : "false");
}
function d() {
	return typeof window > "u" ? !1 : window.localStorage.getItem(e) === "true";
}
function f(t) {
	window.localStorage.setItem(e, t ? "true" : "false");
}
function p() {
	return typeof window > "u" ? !1 : window.localStorage.getItem(i) === "true";
}
function m(e) {
	window.localStorage.setItem(i, e ? "true" : "false");
}
//#endregion
export { o as getSidebarOnboardingChecklistDismissedSnapshot, d as readSidebarOnboardingChecklistCustomizeExplored, l as readSidebarOnboardingChecklistMinimized, p as readSidebarOnboardingChecklistSlackJoined, s as subscribeSidebarOnboardingChecklistDismissed, f as writeSidebarOnboardingChecklistCustomizeExplored, c as writeSidebarOnboardingChecklistDismissed, u as writeSidebarOnboardingChecklistMinimized, m as writeSidebarOnboardingChecklistSlackJoined };

//# sourceMappingURL=sidebar-onboarding-checklist-storage.js.map
import { I18nKey as e } from "../../../../i18n/declaration.js";
function t(e) {
	switch (e.trim().toLowerCase()) {
		case "git_provider": return "git";
		case "repo_name":
		case "repo":
		case "repository": return "repo";
		case "selected_branch":
		case "branch": return "branch";
		case "archiveworkspacepath":
		case "workspace":
		case "working_dir": return "workspace";
		case "appmode":
		case "app_mode":
		case "mode": return "app_mode";
		case "worktools":
		case "work_tools":
		case "tools": return "work_tools";
		case "workwsid":
		case "work_wsid":
		case "wsid":
		case "workspace_id": return "work_wsid";
		default: return "other";
	}
}
function n(e) {
	let t = e.trim();
	if (!t) return t;
	let n = t.replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	return n.charAt(0).toUpperCase() + n.slice(1);
}
function r(r, i) {
	switch (t(r)) {
		case "git": return i(e.CONVERSATION_PANEL$PREVIEW_GIT);
		case "repo": return i(e.CONVERSATION_PANEL$PREVIEW_REPO);
		case "branch": return i(e.CONVERSATION_PANEL$PREVIEW_BRANCH);
		case "workspace": return i(e.CONVERSATION_PANEL$PREVIEW_WORKSPACE);
		case "app_mode": return i(e.CONVERSATION_PANEL$PREVIEW_APP_MODE);
		case "work_tools": return i(e.CONVERSATION_PANEL$PREVIEW_WORK_TOOLS);
		case "work_wsid": return i(e.CONVERSATION_PANEL$PREVIEW_WORK_WSID);
		default: return n(r);
	}
}
function i(e, t, n) {
	let i = r(e, n);
	return t ? `${i}: ${t}` : i;
}
function a(e, t = 14) {
	let n = Array.from(e);
	return n.length <= t ? e : t <= 1 ? "…" : `${n.slice(0, t - 1).join("")}…`;
}
function o(e, t, n = {}) {
	let r = n.gapPx ?? 4, i = n.overflowWidthPx ?? 36;
	if (e.length === 0) return 0;
	if (t <= 0) return e.length;
	let a = 0;
	for (let n = 0; n < e.length; n += 1) {
		let o = e[n], s = n > 0 ? r : 0, c = e.length - n - 1 > 0 ? i + r : 0;
		if (a + s + o + c > t) return n;
		a += s + o;
	}
	return e.length;
}
//#endregion
export { o as computeVisibleTagChipCount, i as formatConversationTagTooltip, r as getConversationTagLabel, a as truncateTagChipValue };

//# sourceMappingURL=conversation-tag-display.js.map
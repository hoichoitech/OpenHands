import { getActiveBackend as e, getRegisteredBackends as t } from "../backend-registry/active-store.js";
import { AGENT_CANVAS_CLIENT_HEADERS as n } from "../client-source.js";
import { getStoredConversationMetadata as r } from "../conversation-metadata-store.js";
import { callCloudProxy as i } from "./proxy.js";
//#region src/api/cloud/conversation-service.api.ts
function a(e) {
	if (!e?.id) return e;
	let t = r(e.id);
	return t ? {
		...e,
		selected_repository: e.selected_repository ?? t.selected_repository ?? null,
		selected_branch: e.selected_branch ?? t.selected_branch ?? null,
		git_provider: e.git_provider ?? t.git_provider ?? null,
		selected_workspace: e.selected_workspace ?? t.selected_workspace ?? null
	} : e;
}
function o() {
	let t = e().backend;
	if (t.kind !== "cloud") throw Error("Cloud conversations call requires a cloud backend.");
	return t;
}
function s() {
	let n = e().backend;
	return n.kind === "cloud" ? n : t().find((e) => e.kind === "cloud" && !!e.apiKey) ?? null;
}
async function c(e = 20, t) {
	let n = o(), r = new URLSearchParams();
	r.set("limit", String(e)), t && r.set("page_id", t), r.set("sort_order", "UPDATED_AT_DESC");
	let s = await i({
		backend: n,
		method: "GET",
		path: `/api/v1/app-conversations/search?${r.toString()}`
	});
	return {
		items: (s?.items ?? []).map((e) => a(e)),
		next_page_id: s?.next_page_id ?? null
	};
}
async function l(e) {
	if (e.length === 0) return [];
	let t = o(), n = new URLSearchParams();
	for (let t of e) n.append("ids", t);
	return (await i({
		backend: t,
		method: "GET",
		path: `/api/v1/app-conversations?${n.toString()}`
	}) ?? []).map(a);
}
async function u(e, t) {
	return await i({
		backend: t ?? o(),
		method: "POST",
		path: "/api/v1/app-conversations",
		body: e,
		headers: n
	});
}
async function d(e) {
	return i({
		backend: o(),
		method: "GET",
		path: `/api/v1/app-conversations/${e}/download`,
		responseType: "blob"
	});
}
async function f(e) {
	await i({
		backend: o(),
		method: "DELETE",
		path: `/api/v1/app-conversations/${e}`
	});
}
async function p(e, t) {
	return await i({
		backend: o(),
		method: "PATCH",
		path: `/api/v1/app-conversations/${e}`,
		body: { public: t }
	});
}
async function m(e, t) {
	return i({
		backend: o(),
		method: "PATCH",
		path: `/api/v1/app-conversations/${e}`,
		body: { title: t }
	});
}
async function h(e) {
	await i({
		backend: o(),
		method: "POST",
		path: `/api/v1/sandboxes/${e}/pause`
	});
}
async function g(e) {
	await i({
		backend: o(),
		method: "POST",
		path: `/api/v1/sandboxes/${e}/resume`
	});
}
async function _(e, t) {
	let n = o(), r = new URLSearchParams();
	return r.append("file_path", t), await i({
		backend: n,
		method: "GET",
		path: `/api/v1/app-conversations/${e}/file?${r.toString()}`
	}) ?? "";
}
async function v(e, t) {
	let n = o(), r = new URLSearchParams();
	r.append("path", t);
	let a = await i({
		backend: n,
		method: "GET",
		path: `/api/v1/app-conversations/${e}/files?${r.toString()}`
	});
	return Array.isArray(a) ? a : [];
}
async function y(e, t) {
	let n = t ?? o(), r = new URLSearchParams();
	return r.set("ids", e), (await i({
		backend: n,
		method: "GET",
		path: `/api/v1/app-conversations/start-tasks?${r.toString()}`
	}))?.[0] ?? null;
}
//#endregion
export { l as batchGetCloudConversations, u as createCloudAppConversation, f as deleteCloudConversation, d as downloadCloudConversation, y as getCloudAppConversationStartTask, v as listCloudConversationFiles, h as pauseCloudSandbox, s as pickCloudBackendForLaunch, _ as readCloudConversationFile, g as resumeCloudSandbox, c as searchCloudConversations, p as updateCloudConversationPublicFlag, m as updateCloudConversationTitle };

//# sourceMappingURL=conversation-service.api.js.map
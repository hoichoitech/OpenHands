import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
//#region src/api/cloud/git-service.api.ts
function n() {
	let t = e().backend;
	if (t.kind !== "cloud") throw Error("Cloud git call requires a cloud backend.");
	return t;
}
async function r(e) {
	let r = n(), i = new URLSearchParams();
	i.set("provider", e.provider), i.set("limit", String(e.limit ?? 100)), e.query && i.set("query", e.query), e.pageId && i.set("page_id", e.pageId), e.installationId && i.set("installation_id", e.installationId);
	let a = await t({
		backend: r,
		method: "GET",
		path: `/api/v1/git/repositories/search?${i.toString()}`
	});
	return {
		items: a?.items ?? [],
		next_page_id: a?.next_page_id ?? null
	};
}
async function i(e) {
	let r = n(), i = new URLSearchParams();
	i.set("provider", e.provider), i.set("limit", String(e.limit ?? 100)), e.pageId && i.set("page_id", e.pageId);
	let a = await t({
		backend: r,
		method: "GET",
		path: `/api/v1/git/installations/search?${i.toString()}`
	});
	return {
		items: a?.items ?? [],
		next_page_id: a?.next_page_id ?? null
	};
}
async function a(e) {
	let r = n(), i = new URLSearchParams();
	i.set("provider", e.provider), i.set("repository", e.repository), i.set("limit", String(e.limit ?? 30)), i.set("query", e.query ?? ""), e.pageId && i.set("page_id", e.pageId);
	let a = await t({
		backend: r,
		method: "GET",
		path: `/api/v1/git/branches/search?${i.toString()}`
	});
	return {
		items: a?.items ?? [],
		next_page_id: a?.next_page_id ?? null
	};
}
//#endregion
export { i as getCloudInstallations, a as getCloudRepositoryBranches, r as searchCloudRepositories };

//# sourceMappingURL=git-service.api.js.map
import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { callCloudProxy as t } from "./proxy.js";
//#region src/api/cloud/skills-service.api.ts
var n = 100;
function r() {
	let t = e().backend;
	if (t.kind !== "cloud") throw Error("Cloud skills call requires a cloud backend.");
	return t;
}
async function i() {
	let e = r(), i = [], a = null;
	do {
		let r = new URLSearchParams({ limit: String(n) });
		a && r.set("page_id", a);
		let o = await t({
			backend: e,
			method: "GET",
			path: `/api/v1/skills/search?${r.toString()}`
		});
		i.push(...o.items ?? []), a = o.next_page_id;
	} while (a);
	return i;
}
async function a(e) {
	return ((await t({
		backend: r(),
		method: "GET",
		path: `/api/v1/app-conversations/${e}/skills`
	}))?.skills ?? []).map((e) => ({
		...e,
		source: null
	}));
}
//#endregion
export { a as fetchCloudConversationSkills, i as fetchCloudSkills };

//# sourceMappingURL=skills-service.api.js.map
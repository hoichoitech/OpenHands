import { FileClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/file-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerClientOptions as t } from "../../api/agent-server-client-options.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as r } from "../../contexts/active-backend-context.js";
//#region src/hooks/query/use-search-subdirs.ts
function i() {
	return new e(t());
}
async function a(e, t = i()) {
	let n = [], r = /* @__PURE__ */ new Set(), a;
	for (;;) {
		let i = await t.searchSubdirectories(e, a ? { pageId: a } : void 0);
		if (n.push(...i.items), a = i.next_page_id, !a) return {
			items: n,
			next_page_id: null
		};
		if (r.has(a)) throw Error("File search returned a repeated page id");
		r.add(a);
	}
}
var o = (e) => {
	let t = r();
	return n({
		queryKey: [
			"file",
			"search_subdirs",
			e,
			t.backend.id,
			t.orgId
		],
		queryFn: () => a(e),
		enabled: !!e,
		retry: !1,
		meta: { disableToast: !0 }
	});
}, s = () => {
	let e = r();
	return n({
		queryKey: [
			"file",
			"home",
			e.backend.id,
			e.orgId
		],
		queryFn: async () => i().getHome(),
		retry: !1,
		meta: { disableToast: !0 },
		staleTime: Infinity
	});
};
//#endregion
export { a as searchAllSubdirectories, s as useHomeDirectory, o as useSearchSubdirs };

//# sourceMappingURL=use-search-subdirs.js.map
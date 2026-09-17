import { isAgentServerVersionError as e } from "../../node_modules/@openhands/typescript-client/dist/client/agent-server-compatibility.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { useQueries as t } from "../../node_modules/@tanstack/react-query/build/modern/useQueries.js";
import { useLocalWorkspaces as n } from "./use-local-workspaces.js";
import { searchAllSubdirectories as r } from "./use-search-subdirs.js";
import { useMemo as i } from "react";
//#region src/hooks/query/use-resolved-workspaces.ts
function a() {
	let { data: a, isLoading: o, isError: s, error: c } = n(), l = e(c), u = a?.workspaces ?? [], d = a?.workspaceParents ?? [], f = i(() => {
		let e = new Set(d.map((e) => e.path)), t = [].filter((t) => !e.has(t.path));
		return t.length === 0 ? d : [...d, ...t];
	}, [d, l]), p = t({ queries: l ? [] : f.map((e) => ({
		queryKey: [
			"file",
			"search_subdirs",
			e.path
		],
		queryFn: () => r(e.path),
		retry: !1,
		meta: { disableToast: !0 }
	})) }), m = o || p.some((e) => e.isLoading), h = s || p.some((e) => e.isError);
	return {
		workspaces: i(() => {
			let e = /* @__PURE__ */ new Map(), t = new Map(f.map((e, t) => [e.path, p[t]]));
			return f.forEach((n) => {
				(t.get(n.path)?.data?.items ?? []).forEach((t) => {
					e.has(t.path) || e.set(t.path, {
						id: t.path,
						name: t.name,
						path: t.path,
						parentPath: n.path
					});
				});
			}), u.forEach((t) => {
				e.set(t.path, t);
			}), Array.from(e.values());
		}, [
			u,
			f,
			p.map((e) => `${e.dataUpdatedAt ?? 0}:${e.status}`).join("|")
		]),
		parents: f,
		isLoading: m,
		isError: h,
		error: c
	};
}
//#endregion
export { a as useResolvedWorkspaces };

//# sourceMappingURL=use-resolved-workspaces.js.map
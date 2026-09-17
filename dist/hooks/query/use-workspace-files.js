import { useOptionalConversationId as e } from "../use-conversation-id.js";
import { getSnapshot as t, subscribeActiveBackend as n } from "../../api/backend-registry/active-store.js";
import { useQuery as r } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { listCloudConversationFiles as i } from "../../api/cloud/conversation-service.api.js";
import { useActiveConversation as a } from "./use-active-conversation.js";
import { useRuntimeIsReady as o } from "../use-runtime-is-ready.js";
import s from "../../api/runtime-service/agent-server-runtime-service.js";
import { getGitPath as c } from "../../utils/get-git-path.js";
import { useSyncExternalStore as l } from "react";
//#region src/hooks/query/use-workspace-files.ts
var u = 2e3, d = [
	".git",
	"node_modules",
	".venv",
	"venv",
	"__pycache__",
	"dist",
	"build",
	".next",
	".cache",
	".pytest_cache",
	".mypy_cache",
	".turbo",
	".parcel-cache",
	"target"
];
function f() {
	return `find . \\( ${d.map((e) => `-name '${e}' -prune`).join(" -o ")} \\) -o -type f -print 2>/dev/null | sort | head -n ${u}`;
}
function p(e) {
	return e.startsWith("./") ? e.slice(2) : e;
}
function m(e) {
	let { data: t } = a(), n = o(), i = t?.id, c = t?.conversation_url, l = t?.session_api_key, d = t?.workspace?.working_dir?.trim(), m = r({
		queryKey: [
			"workspace-files",
			i,
			c,
			l,
			d
		],
		queryFn: async () => {
			let e = await s.executeCommand(c, l, f(), d, 30);
			if (e.exit_code !== 0) throw Error(e.stderr?.trim() || "Failed to list workspace files");
			let t = e.stdout.split(/\r?\n/).map((e) => e.trim()).filter(Boolean).map(p);
			return Array.from(new Set(t)).slice(0, u);
		},
		enabled: e && n && !!i && !!d,
		retry: !1,
		staleTime: 1e3 * 30,
		gcTime: 1e3 * 60 * 5,
		meta: { disableToast: !0 }
	});
	return {
		data: m.data,
		isLoading: m.isLoading
	};
}
function h(t) {
	let { conversationId: n } = e(), { data: s } = a(), l = o(), d = s?.selected_repository, f = s?.workspace?.working_dir?.trim(), m = c(d, f), h = m.startsWith("/") ? m : `/${m}`, g = r({
		queryKey: [
			"workspace-files-cloud",
			n,
			h
		],
		queryFn: async () => {
			let e = (await i(n, h)).map(p).filter(Boolean);
			return Array.from(new Set(e)).slice(0, u);
		},
		enabled: t && l && !!n,
		retry: !1,
		staleTime: 1e3 * 30,
		gcTime: 1e3 * 60 * 5,
		meta: { disableToast: !0 }
	});
	return {
		data: g.data,
		isLoading: g.isLoading
	};
}
function g() {
	let e = l(n, t, t).active.backend.kind === "cloud", r = m(!e), i = h(e);
	return e ? i : r;
}
//#endregion
export { g as useWorkspaceFiles };

//# sourceMappingURL=use-workspace-files.js.map
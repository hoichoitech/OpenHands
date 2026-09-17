import { getActiveBackend as e } from "../../api/backend-registry/active-store.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { readCloudConversationFile as n } from "../../api/cloud/conversation-service.api.js";
import { useActiveConversation as r } from "./use-active-conversation.js";
import { useRuntimeIsReady as i } from "../use-runtime-is-ready.js";
import { useWorkspaceMutationCounter as a } from "../../stores/use-workspace-mutation-counter.js";
import { getGitPath as o } from "../../utils/get-git-path.js";
import { joinWorkspaceUrl as s, useWorkspaceSession as c } from "./use-workspace-session.js";
//#region src/hooks/query/use-workspace-file-content.ts
var l = new Set([
	"png",
	"jpg",
	"jpeg",
	"gif",
	"webp",
	"bmp",
	"ico",
	"svg",
	"avif"
]), u = new Set(["pdf"]);
function d(e) {
	let t = e.lastIndexOf(".");
	return t === -1 ? "" : e.slice(t + 1).toLowerCase();
}
function f(e) {
	switch (d(e)) {
		case "html":
		case "htm": return "text/html";
		case "css": return "text/css";
		case "js":
		case "mjs":
		case "cjs": return "text/javascript";
		case "json": return "application/json";
		case "md":
		case "markdown": return "text/markdown";
		case "svg": return "image/svg+xml";
		case "png": return "image/png";
		case "jpg":
		case "jpeg": return "image/jpeg";
		case "gif": return "image/gif";
		case "webp": return "image/webp";
		case "bmp": return "image/bmp";
		case "ico": return "image/x-icon";
		case "avif": return "image/avif";
		case "pdf": return "application/pdf";
		default: return "text/plain";
	}
}
function p(e) {
	let t = d(e);
	return l.has(t) ? "image" : u.has(t) ? "pdf" : "text";
}
function m(e) {
	let t = new Uint8Array(e, 0, Math.min(e.byteLength, 8e3));
	for (let e = 0; e < t.length; e += 1) if (t[e] === 0) return !0;
	return !1;
}
function h(e) {
	let t = new Uint8Array(e), n = 32768, r = "";
	for (let e = 0; e < t.length; e += n) r += String.fromCharCode.apply(null, t.subarray(e, e + n));
	return btoa(r);
}
function g(l) {
	let { data: u } = r(), d = i(), { data: g } = c(), _ = a((e) => e.count), v = u?.id, y = u?.conversation_url, b = u?.session_api_key, x = u?.selected_repository, S = u?.workspace?.working_dir?.trim(), C = g?.baseUrl, w = e().backend.kind === "cloud", T = o(x, S), E = T.startsWith("/") ? T : `/${T}`, D = l ? `${E}/${l}` : null;
	return t({
		queryKey: [
			"workspace-file-content",
			v,
			y,
			b,
			w ? "cloud" : C,
			l,
			D,
			_
		],
		queryFn: async () => {
			if (!l) throw Error("No path");
			let e = p(l), t = f(l);
			if (w) {
				let r = await n(v, D);
				if (e === "text") {
					let e = new TextEncoder().encode(r);
					return m(e.buffer) ? {
						path: l,
						kind: "binary",
						text: null,
						staticUrl: `data:application/octet-stream;base64,${h(e.buffer)}`,
						mimeType: "application/octet-stream"
					} : {
						path: l,
						kind: "text",
						text: r,
						staticUrl: `data:${t};charset=utf-8;base64,${h(e.buffer)}`,
						mimeType: t
					};
				}
				return {
					path: l,
					kind: e,
					text: null,
					staticUrl: `data:${t};base64,${h(new TextEncoder().encode(r).buffer)}`,
					mimeType: t
				};
			}
			if (!C) throw Error("No workspace session");
			let r = s(C, l);
			if (e !== "text") return {
				path: l,
				kind: e,
				text: null,
				staticUrl: r,
				mimeType: t
			};
			let i = await fetch(r, { credentials: "include" });
			if (!i.ok) throw Error(`Failed to read ${l}: ${i.status}`);
			let a = await i.arrayBuffer();
			return m(a) ? {
				path: l,
				kind: "binary",
				text: null,
				staticUrl: r,
				mimeType: "application/octet-stream"
			} : {
				path: l,
				kind: "text",
				text: new TextDecoder("utf-8", { fatal: !1 }).decode(a),
				staticUrl: r,
				mimeType: t
			};
		},
		enabled: d && !!v && !!l && (w || !!C),
		retry: !1,
		staleTime: 1e3 * 5,
		gcTime: 1e3 * 60,
		meta: { disableToast: !0 }
	});
}
//#endregion
export { g as useWorkspaceFileContent };

//# sourceMappingURL=use-workspace-file-content.js.map
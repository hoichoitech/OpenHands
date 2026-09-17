import { FileClient as e } from "../node_modules/@openhands/typescript-client/dist/client/file-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerClientOptions as t } from "./agent-server-client-options.js";
//#region src/api/agent-server-home.ts
var n = /* @__PURE__ */ new Map();
function r(e) {
	return /^([/\\]|[a-zA-Z]:[/\\])/.test(e);
}
function i(e, t) {
	return `${e.replace(/[/\\]+$/, "")}/${t.replace(/^[/\\]+/, "")}`;
}
async function a(r = {}) {
	let i = t(r), a = i.host, o = n.get(a);
	if (o) return o;
	let s = (async () => {
		let { home: t } = await new e(i).getHome();
		if (!t || typeof t != "string") throw Error("Agent server returned an empty home directory");
		return t.replace(/[/\\]+$/, "");
	})();
	n.set(a, s);
	try {
		return await s;
	} catch (e) {
		throw n.delete(a), e;
	}
}
async function o(e, t = {}) {
	let n = e.replace(/[/\\]+$/, "");
	return n ? r(n) ? n : i(await a(t), n) : a(t);
}
//#endregion
export { o as resolveAbsoluteAgentServerPath };

//# sourceMappingURL=agent-server-home.js.map
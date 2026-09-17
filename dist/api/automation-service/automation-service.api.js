import { getActiveBackend as e, getEffectiveLocalBackend as t } from "../backend-registry/active-store.js";
import { NoBackendAvailableError as n } from "../agent-server-client-options.js";
import r from "../../node_modules/axios/lib/axios.js";
import { AGENT_CANVAS_CLIENT_HEADERS as i, OPENHANDS_TELEMETRY_DISTINCT_ID_HEADER as a } from "../client-source.js";
import { clearPendingLocalTelemetryRevocation as o, getTelemetryConsent as s, getTelemetryDistinctId as c, getTelemetryDistinctIdForConsentSync as l } from "../../services/telemetry.js";
import { callCloudProxy as u } from "../cloud/proxy.js";
import { getAutomationEndpoint as d, getAutomationIdEndpoint as f, getImportExportSpec as p } from "../../manifests/automation-interface.js";
import { automationCreateEndpoint as m, automationUploadEndpoint as h } from "../../manifests/automation-setup.js";
//#region src/api/automation-service/automation-service.api.ts
var g = "/api/automation", _ = r.create();
async function v(e = {}) {
	let t = await c();
	return {
		...i,
		...t ? { [a]: t } : {},
		...e
	};
}
_.interceptors.request.use(async (e) => {
	let r = await v();
	if (Object.entries(r).forEach(([t, n]) => {
		e.headers.set(t, n);
	}), e.baseURL) return e;
	let i = t();
	if (!i) throw new n();
	e.baseURL = i.host;
	let a = i.apiKey?.trim();
	return a && e.headers.set("X-Session-API-Key", a), e;
});
function y(e) {
	return typeof e == "string" && e.trim() || null;
}
function b(e) {
	return typeof e == "string" ? y(e) : y(e.sdk_version) ?? y(e.version);
}
function x(e, t) {
	let n = new URLSearchParams();
	return n.set("limit", String(e)), n.set("offset", String(t)), n.toString();
}
function S(e) {
	return e.trigger.type === "event" ? {
		type: "event",
		source: e.trigger.source,
		on: e.trigger.on,
		...e.trigger.filter && { filter: e.trigger.filter }
	} : {
		type: "cron",
		schedule: e.trigger.schedule,
		timezone: e.timezone ?? e.trigger.timezone ?? "UTC"
	};
}
function C() {
	return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? `pending.${crypto.randomUUID()}` : `pending.${Date.now()}.${Math.random().toString(36).slice(2, 10)}`;
}
function w(e) {
	if (!e.prompt) throw Error("An automation prompt is required for import.");
	let { importDefaults: t } = p(), n = e.repository ? [{
		url: e.repository,
		...e.branch && { ref: e.branch },
		...!e.repository.includes("://") && !e.repository.startsWith("git@") && { provider: t.repoProvider }
	}] : void 0;
	return {
		path: `${g}${d(e.plugins?.length ? "createPlugin" : "createPrompt")}`,
		body: {
			name: e.name,
			prompt: e.prompt,
			trigger: {
				type: "event",
				source: t.placeholderEventSource,
				on: C()
			},
			...e.model && { model: e.model },
			...n && { repos: n },
			...e.plugins?.length && { plugins: e.plugins.map((e) => ({ source: e })) },
			...e.timeout != null && { timeout: e.timeout }
		}
	};
}
async function T(e) {
	let t = e.apiKey.trim();
	return {
		baseURL: e.host,
		headers: await v(t ? { "X-Session-API-Key": t } : {})
	};
}
async function E(e) {
	return v(e.orgId ? { "X-Org-Id": e.orgId } : {});
}
var D = class t {
	static async syncTelemetryConsent(t = s()) {
		if (e().backend.kind !== "local") return;
		let n = await l();
		await _.post(`${g}/v1/telemetry/consent`, {
			consent_granted: t === "granted",
			frontend_distinct_id: n
		}, { timeout: 5e3 }), t !== "granted" && n && o(n);
	}
	static async getSdkVersion() {
		let t = e(), n = `${g}/sdk-version`;
		try {
			let e;
			if (t.backend.kind === "cloud") e = await u({
				backend: t.backend,
				method: "GET",
				path: n,
				headers: await E(t),
				timeoutSeconds: 5
			});
			else {
				let { data: t } = await _.get(n, { timeout: 5e3 });
				e = t;
			}
			return b(e);
		} catch {
			return null;
		}
	}
	static async listAutomations(t = {}) {
		let { limit: n = 50, offset: r = 0 } = t, i = e().backend;
		if (i.kind === "cloud") return u({
			backend: i,
			method: "GET",
			path: `${g}${d("list")}?${x(n, r)}`,
			headers: await v()
		});
		let { data: a } = await _.get(`${g}${d("list")}`, { params: {
			limit: n,
			offset: r
		} });
		return a;
	}
	static async getAutomations(e = 50, n = 0) {
		return t.listAutomations({
			limit: e,
			offset: n
		});
	}
	static async getAutomation(t) {
		let n = e().backend, r = `${g}${f("detail", t)}`;
		if (n.kind === "cloud") return u({
			backend: n,
			method: "GET",
			path: r,
			headers: await v()
		});
		let { data: i } = await _.get(r);
		return i;
	}
	static async createAutomation(t) {
		let n = e(), { path: r, body: i } = w(t), a;
		if (n.backend.kind === "cloud") a = await u({
			backend: n.backend,
			method: "POST",
			path: r,
			body: i,
			headers: await E(n)
		});
		else {
			let { data: e } = await _.post(r, i, await T(n.backend));
			a = e;
		}
		let o = `${g}${f("detail", a.id)}`, s = {
			trigger: S(t),
			enabled: !1
		};
		try {
			if (n.backend.kind === "cloud") return await u({
				backend: n.backend,
				method: "PATCH",
				path: o,
				body: s,
				headers: await E(n)
			});
			let { data: e } = await _.patch(o, s, await T(n.backend));
			return e;
		} catch (e) {
			try {
				n.backend.kind === "cloud" ? await u({
					backend: n.backend,
					method: "DELETE",
					path: o,
					headers: await E(n)
				}) : await _.delete(o, await T(n.backend));
			} catch (t) {
				throw AggregateError([e, t], "Failed to disable the imported automation and clean it up.");
			}
			throw e;
		}
	}
	static async updateAutomation(t, n) {
		let r = e().backend, i = `${g}${f("detail", t)}`;
		if (r.kind === "cloud") return u({
			backend: r,
			method: "PATCH",
			path: i,
			body: n,
			headers: await v()
		});
		let { data: a } = await _.patch(i, n);
		return a;
	}
	static async deleteAutomation(t) {
		let n = e().backend, r = `${g}${f("detail", t)}`;
		if (n.kind === "cloud") {
			await u({
				backend: n,
				method: "DELETE",
				path: r,
				headers: await v()
			});
			return;
		}
		await _.delete(r);
	}
	static async dispatchAutomation(t) {
		let n = e().backend, r = `${g}${f("dispatch", t)}`;
		if (n.kind === "cloud") return u({
			backend: n,
			method: "POST",
			path: r,
			headers: await v()
		});
		let { data: i } = await _.post(r);
		return i;
	}
	static async cancelAutomationRun(t) {
		let n = e().backend, r = `${g}/v1/runs/${encodeURIComponent(t)}/cancel`;
		if (n.kind === "cloud") return u({
			backend: n,
			method: "POST",
			path: r,
			headers: await v()
		});
		let { data: i } = await _.post(r);
		return i;
	}
	static async listAutomationRuns(t, n = {}) {
		let { limit: r = 50, offset: i = 0 } = n, a = e().backend, o = `${g}${f("runs", t)}`;
		if (a.kind === "cloud") return u({
			backend: a,
			method: "GET",
			path: `${o}?${x(r, i)}`,
			headers: await v()
		});
		let { data: s } = await _.get(o, { params: {
			limit: r,
			offset: i
		} });
		return s;
	}
	static async getAutomationRuns(e, n = 50, r = 0) {
		return t.listAutomationRuns(e, {
			limit: n,
			offset: r
		});
	}
	static async toggleAutomation(e, n) {
		return t.updateAutomation(e, { enabled: n });
	}
	static async downloadTarball(t, n) {
		let r = e().backend, i = `${g}${f("tarball", t)}`, a;
		if (r.kind === "cloud") a = await u({
			backend: r,
			method: "GET",
			path: i,
			responseType: "blob",
			headers: await v()
		});
		else {
			let { data: e } = await _.get(i, { responseType: "blob" });
			a = e;
		}
		let o = URL.createObjectURL(a), s = document.createElement("a");
		s.href = o, s.download = `${n}.tar`, s.click(), URL.revokeObjectURL(o);
	}
	static async getCapabilities() {
		let t = e().backend, n = `${g}${d("capabilities")}`;
		if (t.kind === "cloud") return u({
			backend: t,
			method: "GET",
			path: n,
			headers: await v()
		});
		let { data: r } = await _.get(n);
		return r;
	}
	static async validateDraft(t) {
		let n = e().backend, r = `${g}${d("validate")}`;
		if (n.kind === "cloud") return u({
			backend: n,
			method: "POST",
			path: r,
			body: t,
			headers: await v()
		});
		let { data: i } = await _.post(r, t);
		return i;
	}
	static async createAutomationDraft(t, n, r) {
		let i = e().backend, a = `${g}${m(n, r)}`;
		if (i.kind === "cloud") return u({
			backend: i,
			method: "POST",
			path: a,
			body: t,
			headers: await v()
		});
		let { data: o } = await _.post(a, t);
		return o;
	}
	static async uploadAutomationTarball(t, n) {
		let i = e().backend, a = `${g}${h()}?name=${encodeURIComponent(t)}`, o = { "Content-Type": "application/gzip" }, s;
		if (i.kind === "cloud") {
			let { orgId: t } = e();
			s = (await r.post(`${i.host.replace(/\/+$/, "")}${a}`, n, { headers: {
				...await v(),
				...o,
				...i.apiKey ? { Authorization: `Bearer ${i.apiKey}` } : {},
				...t ? { "X-Org-Id": t } : {}
			} })).data;
		} else s = (await _.post(a, n, { headers: o })).data;
		let c = s.tarball_path;
		if (typeof c != "string" || !c) throw Error("The upload returned no tarball path.");
		return c;
	}
	static async getGitSyncStatus() {
		let t = e().backend, n = `${g}/v1/git-sync/status`;
		if (t.kind === "cloud") return u({
			backend: t,
			method: "GET",
			path: n
		});
		let { data: r } = await _.get(n);
		return r;
	}
	static async updateGitSyncConfig(t) {
		let n = e().backend, r = `${g}/v1/git-sync/config`;
		if (n.kind === "cloud") return u({
			backend: n,
			method: "PUT",
			path: r,
			body: t
		});
		let { data: i } = await _.put(r, t);
		return i;
	}
	static async checkGitSyncConfig(t) {
		let n = e().backend, r = `${g}/v1/git-sync/check`;
		if (n.kind === "cloud") return u({
			backend: n,
			method: "POST",
			path: r,
			body: t
		});
		let { data: i } = await _.post(r, t);
		return i;
	}
	static async triggerGitSync() {
		let t = e().backend, n = `${g}/v1/git-sync/sync`;
		if (t.kind === "cloud") return u({
			backend: t,
			method: "POST",
			path: n
		});
		let { data: r } = await _.post(n);
		return r;
	}
	static async checkHealth() {
		let t = e().backend, n = `${g}${d("health")}`;
		try {
			if (t.kind === "cloud") return await u({
				backend: t,
				method: "GET",
				path: n,
				timeoutSeconds: 5,
				headers: await v()
			});
			let { data: e } = await _.get(n, { timeout: 5e3 });
			return e;
		} catch {
			return { status: "error" };
		}
	}
};
//#endregion
export { D as default };

//# sourceMappingURL=automation-service.api.js.map
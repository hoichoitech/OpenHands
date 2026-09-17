import { ConversationClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/conversation-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { buildHttpBaseUrl as t } from "../../utils/websocket-url.js";
import { getActiveBackend as n } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as r, getAgentServerHttpClientOptions as i } from "../agent-server-client-options.js";
import { RemoteEventsList as a } from "../../node_modules/@openhands/typescript-client/dist/events/remote-events-list.js";
import { callCloudProxy as o } from "../cloud/proxy.js";
//#region src/api/event-service/event-service.api.ts
var s = class {
	static async respondToConfirmation(i, a, s, c) {
		let l = n().backend;
		return l.kind === "cloud" ? o({
			backend: l,
			method: "POST",
			hostOverride: t(a),
			path: `/api/conversations/${i}/events/respond_to_confirmation`,
			body: s,
			authMode: "session-api-key",
			sessionApiKey: c
		}) : new e(r({
			conversationUrl: a,
			sessionApiKey: c
		})).respondToConfirmation(i, s);
	}
	static async getEventCount(i, a, s) {
		let c = n().backend;
		return c.kind === "cloud" ? o({
			backend: c,
			method: "GET",
			hostOverride: t(a),
			path: `/api/conversations/${i}/events/count`,
			authMode: "session-api-key",
			sessionApiKey: s
		}) : new e(r({
			conversationUrl: a,
			sessionApiKey: s
		})).getEventCount(i);
	}
	static async searchEvents(e, t, r, s = {}) {
		let c = n().backend, l = s.limit ?? 100;
		if (c.kind === "cloud") {
			let t = Math.min(l, 100), n = !!(s.sortOrder || s.pageId || s.timestampGte || s.timestampLt), r = new URLSearchParams();
			r.set("limit", String(t)), s.sortOrder && r.set("sort_order", s.sortOrder), s.pageId && r.set("page_id", s.pageId), s.timestampGte && r.set("timestamp__gte", s.timestampGte), s.timestampLt && r.set("timestamp__lt", s.timestampLt);
			let i = (t) => o({
				backend: c,
				method: "GET",
				path: `/api/v1/conversation/${e}/events/search?${t.toString()}`
			});
			try {
				let e = await i(r);
				return {
					items: e?.items ?? [],
					next_page_id: e?.next_page_id ?? null
				};
			} catch (e) {
				if (!n || s.strictPagination) throw e;
				return console.warn("[EventService] Cloud backend doesn't support pagination filters. Falling back to initial load only. Server needs OpenHands/OpenHands#14399."), {
					items: [],
					next_page_id: null
				};
			}
		}
		let u = await new a(i({
			conversationUrl: t,
			sessionApiKey: r
		}), e).search({
			limit: l,
			...s.pageId ? { page_id: s.pageId } : {},
			...s.sortOrder ? { sort_order: s.sortOrder } : {},
			...s.timestampGte ? { timestamp__gte: s.timestampGte } : {},
			...s.timestampLt ? { timestamp__lt: s.timestampLt } : {}
		});
		return {
			items: u?.items ?? [],
			next_page_id: u?.next_page_id ?? null
		};
	}
};
//#endregion
export { s as default };

//# sourceMappingURL=event-service.api.js.map
import { isTaskConversationId as e } from "../utils/conversation-local-storage.js";
import { useEventStore as t } from "../stores/use-event-store.js";
import n from "../api/event-service/event-service.api.js";
import { useUserConversation as r } from "./query/use-user-conversation.js";
import { useConversationHistory as i } from "./query/use-conversation-history.js";
import { seedModelSwitchesFromHistory as a } from "./chat/record-model-switch-message.js";
import o from "react";
//#region src/hooks/use-load-older-events.ts
var s = (e) => "timestamp" in e ? e.timestamp : void 0, c = (c) => {
	let l = !!c && e(c), u = l ? void 0 : c, { data: d } = r(c ?? null), { data: f, isFetched: p } = i(u ?? void 0), m = t((e) => e.addEvents), [h, g] = o.useState(!1), [_, v] = o.useState(!0), y = o.useRef(!1), b = o.useRef(!0);
	return o.useEffect(() => {
		if (y.current = !1, g(!1), l) {
			b.current = !1, v(!1);
			return;
		}
		b.current = !0, v(!0);
	}, [c, l]), o.useEffect(() => {
		l || !p || !f || f.hasMore || (b.current = !1, v(!1));
	}, [
		l,
		p,
		f?.hasMore,
		u
	]), {
		isLoading: h,
		hasMore: _,
		loadOlder: o.useCallback(async () => {
			if (!c || e(c) || y.current || !b.current || !d) return;
			let { events: r } = t.getState(), i = r[0];
			if (!i) return;
			let o = s(i);
			if (!o) {
				b.current = !1, v(!1);
				return;
			}
			y.current = !0, g(!0);
			try {
				let e = await n.searchEvents(c, d?.conversation_url ?? null, d?.session_api_key ?? null, {
					limit: 50,
					sortOrder: "TIMESTAMP_DESC",
					timestampLt: o
				});
				if (!Array.isArray(e.items)) throw Error("Invalid older-events response: expected page.items to be an array.");
				let r = [...e.items].reverse();
				r.length > 0 && (m(r), a(c, t.getState().uiEvents)), (!e.next_page_id || e.items.length < 50) && (b.current = !1, v(!1));
			} finally {
				y.current = !1, g(!1);
			}
		}, [
			c,
			d,
			d?.conversation_url,
			d?.session_api_key,
			m
		])
	};
};
//#endregion
export { c as useLoadOlderEvents };

//# sourceMappingURL=use-load-older-events.js.map
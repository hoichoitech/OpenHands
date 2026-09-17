import { useBrowserStore as e } from "../stores/browser-store.js";
import { useCommandStore as t } from "../stores/command-store.js";
import { setConversationState as n } from "../utils/conversation-local-storage.js";
import { useConversationStore as r } from "../stores/conversation-store.js";
import { useConversationStateStore as i } from "../stores/conversation-state-store.js";
import { ConversationClient as ee } from "../node_modules/@openhands/typescript-client/dist/client/conversation-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { buildWebSocketUrl as te } from "../utils/websocket-url.js";
import { getAgentServerClientOptions as ne } from "../api/agent-server-client-options.js";
import { useQueryClient as re } from "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { isActionEvent as ie, isAgentErrorEvent as ae, isAgentServerEvent as oe, isAgentStatusConversationStateUpdateEvent as se, isBrowserNavigateActionEvent as ce, isBrowserObservationEvent as le, isCanvasUIActionEvent as ue, isConversationStateUpdateEvent as de, isDisplayableErrorEvent as fe, isExecuteBashActionEvent as pe, isExecuteBashObservationEvent as me, isFullStateConversationStateUpdateEvent as he, isGoalConversationStateUpdateEvent as a, isLaunchChildConversationActionEvent as ge, isPlanningFileEditorObservationEvent as _e, isStatsConversationStateUpdateEvent as ve, isStreamingDeltaEvent as ye, isSwitchLLMObservationEvent as be, isUserMessageEvent as o } from "../types/agent-server/type-guards.js";
import { useEventStore as s } from "../stores/use-event-store.js";
import { useWebSocket as xe } from "../hooks/use-websocket.js";
import { SERVER_CONNECTION_ERROR_MESSAGE as Se } from "../constants/server-connection-error.js";
import { useErrorMessageStore as c } from "../stores/error-message-store.js";
import { useOptimisticUserMessageStore as Ce } from "../stores/optimistic-user-message-store.js";
import { useGoalStore as we } from "../stores/goal-store.js";
import { createStreamingDeltaBatcher as Te } from "../utils/streaming-delta-batcher.js";
import { isPlanFilePath as Ee } from "../utils/plan-file.js";
import { handleCanvasUIAction as De } from "../services/canvas-ui.js";
import { handleLaunchChildConversationAction as Oe } from "../services/child-conversation-launch.js";
import { handleActionEventCacheInvalidation as ke } from "../utils/cache-utils.js";
import Ae from "../api/event-service/event-service.api.js";
import { trackError as l } from "../utils/error-handler.js";
import { useReadConversationFile as je } from "../hooks/mutation/use-read-conversation-file.js";
import Me from "../stores/metrics-store.js";
import { useConversationHistory as Ne } from "../hooks/query/use-conversation-history.js";
import { recordModelSwitchMessage as Pe, seedModelSwitchesFromHistory as Fe, stampActiveLlmProfile as Ie } from "../hooks/chat/record-model-switch-message.js";
import { invalidateConversationQueries as Le, updateConversationLlmModelInCache as Re } from "../hooks/mutation/conversation-mutation-utils.js";
import ze, { createContext as Be, useCallback as u, useContext as d, useEffect as f, useLayoutEffect as Ve, useMemo as p, useRef as m, useState as h } from "react";
import { jsx as He } from "react/jsx-runtime";
//#region src/contexts/conversation-websocket-context.tsx
var Ue = Be(void 0);
function g(e) {
	return e.llm_message.content.filter((e) => e.type === "text").map((e) => e.text).join("");
}
function _({ children: Be, conversationId: d, conversationUrl: _, sessionApiKey: v, subConversations: y, subConversationIds: b }) {
	let [x, S] = h("CONNECTING"), [C, w] = h("CONNECTING"), T = ze.useRef(!1), E = ze.useRef(!1), D = re(), O = s((e) => e.addEvent), We = s((e) => e.addEvents), Ge = s((e) => e.clearEventsForConversation), { setErrorMessage: k, removeErrorMessage: Ke, clearConnectionError: A } = c(), j = Ce((e) => e.consumeMatchingPendingMessage), { setExecutionStatus: M } = i(), { appendInput: N, appendOutput: P } = t(), qe = e((e) => e.reset), F = m(null);
	F.current === null && (F.current = Te((e) => {
		s.getState().addEvent(e), c.getState().clearConnectionError();
	}));
	let I = m(null);
	I.current === null && (I.current = Te((e) => {
		s.getState().addEvent({
			...e,
			isFromPlanningAgent: !0
		}), c.getState().clearConnectionError();
	}));
	let [L, R] = h(!0), [z, Je] = h(null), { setPlanContent: B } = r();
	f(() => {
		B(null);
	}, [d, B]);
	let { mutate: V } = je(), H = m(0), U = m(null), W = u(() => {
		A();
	}, [A]), G = u((e) => {
		let t = e.value.usage_to_metrics;
		if (!t) return;
		let n = Object.values(t).reduce((e, t) => {
			e.cost += t.accumulated_cost, e.maxBudgetPerTask === null && t.max_budget_per_task !== null && (e.maxBudgetPerTask = t.max_budget_per_task);
			let n = t.accumulated_token_usage;
			return n && (e.usage = {
				prompt_tokens: (e.usage?.prompt_tokens ?? 0) + n.prompt_tokens,
				completion_tokens: (e.usage?.completion_tokens ?? 0) + n.completion_tokens,
				cache_read_tokens: (e.usage?.cache_read_tokens ?? 0) + n.cache_read_tokens,
				cache_write_tokens: (e.usage?.cache_write_tokens ?? 0) + n.cache_write_tokens,
				context_window: Math.max(e.usage?.context_window ?? 0, n.context_window),
				per_turn_token: Math.max(e.usage?.per_turn_token ?? 0, n.per_turn_token)
			}), e;
		}, {
			cost: 0,
			maxBudgetPerTask: null,
			usage: null
		});
		Me.getState().setMetrics({
			cost: n.cost,
			max_budget_per_task: n.maxBudgetPerTask,
			usage: n.usage
		});
	}, []), { data: K, isPending: q } = Ne(d), Ye = !!d && q;
	Ve(() => {
		let e = d ?? null;
		s.getState().loadedConversationId !== e && (Ge(e), qe(), Me.getState().resetMetrics());
	}, [
		d,
		Ge,
		qe
	]), Ve(() => {
		if (!(!K || K.events.length === 0) && (We(K.events), d)) {
			Fe(d, s.getState().uiEvents);
			for (let e of K.events) o(e) && j(d, g(e));
		}
	}, [
		K,
		We,
		d,
		j
	]);
	let J = p(() => {
		let e = K?.events ?? [], t = e[e.length - 1];
		return !t || !("timestamp" in t) || !t.timestamp ? null : t.timestamp;
	}, [K]), Y = p(() => !d || !_ || q ? null : te(d, _), [
		d,
		_,
		q
	]), X = p(() => b?.[0] ?? null, [b]), Z = p(() => {
		if (!y?.length) return null;
		let e = y[0];
		return !e?.id || !e.conversation_url ? null : te(e.id, e.conversation_url);
	}, [y]), Xe = p(() => Z ? x === "CONNECTING" || C === "CONNECTING" ? "CONNECTING" : x === "OPEN" && C === "OPEN" ? "OPEN" : x === "CLOSED" && C === "CLOSED" ? "CLOSED" : x === "CLOSING" || C === "CLOSING" ? "CLOSING" : "CLOSED" : x, [
		x,
		C,
		Z
	]);
	f(() => {
		z !== null && H.current >= z && L && R(!1);
	}, [
		z,
		L,
		H
	]), f(() => {
		if (!L && U.current) {
			let { path: e, conversationId: t } = U.current;
			V({
				conversationId: t,
				filePath: e
			}, {
				onSuccess: (e) => {
					B(e);
				},
				onError: (e) => {
					console.warn("Failed to read conversation file:", e);
				}
			}), U.current = null;
		}
	}, [
		L,
		V,
		B
	]), f(() => {
		T.current = !1, R(!!b?.length), Je(null), H.current = 0, U.current = null;
	}, [b]), f(() => {
		T.current = !1, E.current = !1, U.current = null;
	}, [d]), f(() => {
		let e = F.current, t = I.current;
		return () => {
			e?.reset(), t?.reset();
		};
	}, [d]);
	let Ze = p(() => Ye || L, [Ye, L]), Qe = u((t) => {
		try {
			let r = JSON.parse(t.data);
			if (oe(r)) {
				if (ye(r)) {
					F.current?.enqueue(r);
					return;
				}
				F.current?.flush();
				let t = s.getState().eventIds.has(r.id ?? ""), i = be(r) ? r : null;
				if (O(r), t) return;
				if (fe(r)) {
					let e = r, t = "classification" in e ? e.classification : null;
					l({
						source: "conversation",
						metadata: {
							eventId: e.id,
							errorCode: e.code
						},
						classification: t
					}), k(e.detail, "conversation", e.code, t);
				} else W();
				if (ae(r) && l({
					source: "agent",
					metadata: {
						eventId: r.id,
						toolName: r.tool_name,
						toolCallId: r.tool_call_id
					},
					classification: r.classification
				}), o(r) && d && (j(d, g(r)), n(d, { draftMessage: null })), ie(r) && ke(r, d || "test-conversation-id", D), de(r) && (he(r) && d && M(d, r.value.execution_status), se(r) && d && M(d, r.value), ve(r) && G(r), a(r) && d && we.getState().setStatus(d, r.value)), pe(r) && N(r.action.command), me(r) && P(r.observation.content.filter((e) => e.type === "text").map((e) => e.text).join("\n")), le(r)) {
					let { screenshot_data: t } = r.observation;
					if (t) {
						let n = t.startsWith("data:") ? t : `data:image/png;base64,${t}`;
						e.getState().setScreenshotSrc(n);
					}
				}
				ce(r) && e.getState().setUrl(r.action.url), d && i && !i.observation.is_error && (Pe(d, i.observation.profile_name), Ie(d, i.observation.profile_name, i.timestamp), i.observation.active_model && Re(D, d, i.observation.active_model), Le(D, d)), ue(r) && De(r.action, d ?? null), d && ge(r) && Oe(r.action, d, r.tool_call_id);
			}
		} catch (e) {
			console.warn("Failed to parse WebSocket message as JSON:", e);
		}
	}, [
		O,
		k,
		j,
		D,
		d,
		M,
		N,
		P,
		G,
		W
	]), $e = u((e) => {
		try {
			let t = JSON.parse(e.data);
			if (L && (H.current += 1, z !== null && H.current >= z && R(!1)), oe(t)) {
				if (ye(t)) {
					I.current?.enqueue(t);
					return;
				}
				I.current?.flush();
				let e = s.getState().eventIds.has(t.id ?? "");
				if (O({
					...t,
					isFromPlanningAgent: !0
				}), e) return;
				if (fe(t)) {
					let e = t, n = "classification" in e ? e.classification : null;
					l({
						source: "planning_conversation",
						metadata: {
							eventId: e.id,
							errorCode: e.code
						},
						classification: n
					}), k(e.detail, "conversation", e.code, n);
				} else W();
				if (ae(t) && l({
					source: "planning_agent",
					metadata: {
						eventId: t.id,
						toolName: t.tool_name,
						toolCallId: t.tool_call_id
					},
					classification: t.classification
				}), o(t) && d && (j(d, g(t)), n(d, { draftMessage: null })), ie(t) && ke(t, y?.[0]?.id || "test-conversation-id", D), de(t) && (he(t) && X && M(X, t.value.execution_status), se(t) && X && M(X, t.value), ve(t) && G(t), a(t) && d && we.getState().setStatus(d, t.value)), pe(t) && N(t.action.command), me(t) && P(t.observation.content.filter((e) => e.type === "text").map((e) => e.text).join("\n")), _e(t)) {
					let { path: e } = t.observation;
					if (Ee(e)) {
						let t = y?.[0]?.id;
						t && e && (L ? U.current = {
							path: e,
							conversationId: t
						} : V({
							conversationId: t,
							filePath: e
						}, {
							onSuccess: (e) => {
								B(e);
							},
							onError: (e) => {
								console.warn("Failed to read conversation file:", e);
							}
						}));
					}
				}
			}
		} catch (e) {
			console.warn("Failed to parse WebSocket message as JSON:", e);
		}
	}, [
		O,
		L,
		z,
		k,
		j,
		D,
		y,
		X,
		d,
		M,
		N,
		P,
		V,
		B,
		G,
		W
	]), et = p(() => ({
		queryParams: J ? {
			resend_mode: "since",
			after_timestamp: J
		} : { resend_mode: "all" },
		sessionApiKey: v,
		reconnect: { enabled: !0 },
		onOpen: () => {
			S("OPEN"), T.current = !0, A();
		},
		onClose: () => {
			S("CLOSED");
		},
		onError: () => {
			S("CLOSED"), T.current && k(Se, "connection");
		},
		onMessage: Qe
	}), [
		Qe,
		k,
		A,
		v,
		J
	]), tt = p(() => {
		let e = { resend_all: !0 }, t = y?.[0];
		return {
			queryParams: e,
			sessionApiKey: t?.session_api_key ?? v,
			reconnect: { enabled: !0 },
			onOpen: async () => {
				if (w("OPEN"), E.current = !0, A(), t?.id && t.conversation_url) try {
					let e = await Ae.getEventCount(t.id, t.conversation_url, t.session_api_key);
					Je(e), e === 0 && R(!1);
				} catch {
					R(!1);
				}
			},
			onClose: () => {
				w("CLOSED");
			},
			onError: () => {
				w("CLOSED"), E.current && k(Se, "connection");
			},
			onMessage: $e
		};
	}, [
		$e,
		k,
		A,
		v,
		y
	]), { socket: Q, reconnect: nt } = xe(Y || "", et), { socket: $, reconnect: rt } = xe(Z || "", tt), it = u(() => {
		if (Ke(), r.getState().conversationMode === "plan" && Z) {
			rt();
			return;
		}
		nt();
	}, [
		Z,
		nt,
		rt,
		Ke
	]), at = u(async (e) => {
		let t = r.getState().conversationMode, n = t === "plan" ? $ : Q, i = t === "plan" ? X : d;
		if (n?.readyState !== WebSocket.OPEN) {
			if (!i) {
				let e = /* @__PURE__ */ Error(t === "plan" ? "Planning conversation is not ready yet" : "No conversation ID available");
				throw k(e.message), e;
			}
			try {
				return await new ee(ne()).sendEvent(i, {
					role: "user",
					content: e.content
				}, { run: !0 }), { queued: !0 };
			} catch (e) {
				throw k(e instanceof Error ? e.message : "Failed to queue message for delivery"), e;
			}
		}
		try {
			return n.send(JSON.stringify({
				...e,
				run: !0
			})), { queued: !1 };
		} catch (e) {
			throw k(e instanceof Error ? e.message : "Failed to send message"), e;
		}
	}, [
		Q,
		$,
		k,
		d,
		X
	]);
	f(() => {
		Q && Y && (() => {
			switch (Q.readyState) {
				case WebSocket.CONNECTING:
					S("CONNECTING");
					break;
				case WebSocket.OPEN:
					S("OPEN");
					break;
				case WebSocket.CLOSING:
					S("CLOSING");
					break;
				case WebSocket.CLOSED:
					S("CLOSED");
					break;
				default:
					S("CLOSED");
					break;
			}
		})();
	}, [Q, Y]), f(() => {
		$ && Z && (() => {
			switch ($.readyState) {
				case WebSocket.CONNECTING:
					w("CONNECTING");
					break;
				case WebSocket.OPEN:
					w("OPEN");
					break;
				case WebSocket.CLOSING:
					w("CLOSING");
					break;
				case WebSocket.CLOSED:
					w("CLOSED");
					break;
				default:
					w("CLOSED");
					break;
			}
		})();
	}, [$, Z]);
	let ot = p(() => ({
		connectionState: Xe,
		mainConnectionState: x,
		sendMessage: at,
		isLoadingHistory: Ze,
		reconnect: it
	}), [
		Xe,
		x,
		at,
		Ze,
		it
	]);
	return /* @__PURE__ */ He(Ue.Provider, {
		value: ot,
		children: Be
	});
}
var v = () => d(Ue) || null;
//#endregion
export { _ as ConversationWebSocketProvider, v as useConversationWebSocket };

//# sourceMappingURL=conversation-websocket-context.js.map
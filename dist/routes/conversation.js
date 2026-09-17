import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { AgentState as n } from "../types/agent-state.js";
import { useConversationId as r } from "../hooks/use-conversation-id.js";
import { useCommandStore as i } from "../stores/command-store.js";
import { useConversationStore as a } from "../stores/conversation-store.js";
import { useAgentStore as o } from "../stores/agent-store.js";
import { useConversationStateStore as s } from "../stores/conversation-state-store.js";
import { displayErrorToast as c } from "../utils/custom-toast-handlers.js";
import { useActiveBackend as l } from "../contexts/active-backend-context.js";
import { clearLastConversationId as u, setLastConversationId as d } from "../api/backend-registry/last-conversation-store.js";
import { useErrorMessageStore as f } from "../stores/error-message-store.js";
import { resumeCloudSandbox as p } from "../api/cloud/conversation-service.api.js";
import { useActiveConversation as m } from "../hooks/query/use-active-conversation.js";
import { EventHandler as h } from "../wrapper/event-handler.js";
import { useTaskPollingController as g } from "../hooks/query/use-task-polling.js";
import { useIsAuthed as _ } from "../hooks/query/use-is-authed.js";
import { ConversationOverviewDrawerProvider as v } from "../components/features/conversation/conversation-overview-drawer-context.js";
import { ConversationMain as y } from "../components/features/conversation/conversation-main/conversation-main.js";
import { ConversationMobilePanelPage as b } from "../components/features/conversation/conversation-main/conversation-mobile-panel-page.js";
import { WebSocketProviderWrapper as x } from "../contexts/websocket-provider-wrapper.js";
import S from "react";
import { jsx as C } from "react/jsx-runtime";
import { useLocation as w, useMatch as T, useNavigate as E } from "react-router";
//#region src/routes/conversation.tsx
function D() {
	let { t: D } = e("openhands"), { conversationId: O } = r(), k = T("/conversations/:conversationId/panel"), { isTask: A, taskStatus: j, taskDetail: M } = g(), N = l(), P = S.useRef(N.backend.id), F = S.useRef(N.orgId), I = P.current !== N.backend.id || F.current !== N.orgId, { data: L, isFetched: R } = m(), { data: z } = _(), { resetConversationState: B } = a(), V = E(), H = w(), U = i((e) => e.clearTerminal), W = s((e) => e.reset), G = o((e) => e.setCurrentAgentState), K = f((e) => e.removeErrorMessage);
	S.useEffect(() => {
		U(), B(), W(), G(n.LOADING), K();
	}, [
		O,
		U,
		B,
		W,
		G,
		K
	]), S.useEffect(() => {
		if (A && j === "ERROR") {
			c(M || D(t.CONVERSATION$FAILED_TO_START_FROM_TASK));
			let e = H.state?.resumedFromConversationId;
			V(e ? `/conversations/${e}` : "/conversations", { replace: !0 });
		}
	}, [
		A,
		j,
		M,
		D,
		V,
		H.state
	]), S.useEffect(() => {
		!R || !z || I || L || (u(N.backend.id, N.orgId), c(D(t.CONVERSATION$NOT_EXIST_OR_NO_PERMISSION)), V("/conversations"));
	}, [
		L,
		R,
		z,
		V,
		D,
		I,
		N.backend.id,
		N.orgId
	]), S.useEffect(() => {
		I || O && (O.startsWith("task-") || d(N.backend.id, N.orgId, O));
	}, [
		O,
		I,
		N.backend.id,
		N.orgId
	]);
	let q = S.useRef(null);
	return S.useEffect(() => {
		!R || !L || N.backend.kind === "cloud" && L.sandbox_status === "PAUSED" && L.sandbox_id && q.current !== L.id && (q.current = L.id, p(L.sandbox_id).catch(() => {
			c(D(t.CONVERSATION$FAILED_TO_START_FROM_TASK));
		}));
	}, [
		R,
		L?.id,
		L?.sandbox_status,
		L?.sandbox_id,
		N.backend.kind,
		D
	]), I ? null : /* @__PURE__ */ C(x, {
		conversationId: O,
		children: /* @__PURE__ */ C(h, { children: /* @__PURE__ */ C(v, { children: /* @__PURE__ */ C("div", {
			"data-testid": "app-route",
			className: "flex h-full flex-col",
			children: k ? /* @__PURE__ */ C(b, { onNavigateBack: () => V(`/conversations/${O}`) }) : /* @__PURE__ */ C(y, {})
		}) }) })
	});
}
function O() {
	return /* @__PURE__ */ C(D, {});
}
//#endregion
export { O as default };

//# sourceMappingURL=conversation.js.map
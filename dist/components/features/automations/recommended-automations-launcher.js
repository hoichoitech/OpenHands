import { useNavigation as e } from "../../../context/navigation-context.js";
import { setConversationState as t, setPendingTaskDraft as ee } from "../../../utils/conversation-local-storage.js";
import { useConversationStore as n } from "../../../stores/conversation-store.js";
import { useActiveBackend as r } from "../../../contexts/active-backend-context.js";
import { parseMcpConfig as i } from "../../../utils/mcp-config.js";
import { useSettings as a } from "../../../hooks/query/use-settings.js";
import { getAutomationLaunchPrompt as te, getRequiredIntegrationIds as o } from "../../../utils/automation-catalog.js";
import { SETUP_REGISTRY as s } from "../../../manifests/manifest-sources.js";
import { automationSetupPath as c, hasAutomationInterface as ne } from "../../../manifests/automation-interface.js";
import { useTracking as l } from "../../../hooks/use-tracking.js";
import { useCreateConversation as re } from "../../../hooks/mutation/use-create-conversation.js";
import { useIsCreatingConversation as ie } from "../../../hooks/use-is-creating-conversation.js";
import u from "../../../node_modules/@openhands/extensions/integrations/index.js";
import { findInstalledEntryMatch as d, getMarketplaceEntryById as f, isMcpInstallableEntry as p } from "../../../utils/mcp-marketplace-utils.js";
import { useAutomations as m } from "../../../hooks/query/use-automations.js";
import { useResponderUrlSecret as h } from "../../../hooks/use-responder-url-secret.js";
import { flattenMcpConfig as g } from "../../../utils/mcp-installed-servers.js";
import { InstallServerModal as _ } from "../mcp-page/install-server-modal.js";
import { isResponderAutomation as v } from "../../../utils/responder-deployment.js";
import { RecommendedAutomationsRail as y } from "./recommended-automations-rail.js";
import { RecommendedAutomationsSection as b } from "./recommended-automations-section.js";
import { ResponderDeploymentModal as x } from "./responder-deployment-modal.js";
import { useCallback as S, useMemo as C, useRef as w, useState as T } from "react";
import { Fragment as ae, jsx as E, jsxs as oe } from "react/jsx-runtime";
//#region src/components/features/automations/recommended-automations-launcher.tsx
function se(e) {
	return o(e).map((e) => f(e, u)).filter((e) => !!e).filter(p);
}
function D({ query: o, onLaunched: u, scrollableGrid: f = !1, variant: p = "catalog", className: D }) {
	let O = r(), { navigate: k } = e(), { data: A } = a(), { trackPrebuiltAutomationEnabled: j } = l(), M = re(), N = h(), P = ie(), F = n((e) => e.setMessageToSend), [I, L] = T(null), [R, z] = T(null), [B, V] = T([]), H = w(!1), U = w(!1), W = w(!1), [G, K] = T(!1), q = p === "rail", { data: ce, isLoading: le } = m({ enabled: q && O.backend.kind === "local" }), J = C(() => g(A?.mcp_config ?? i(A?.agent_settings?.mcp_config)).filter((e) => e.enabled !== !1), [A?.agent_settings?.mcp_config, A?.mcp_config]), Y = S((e) => {
		if (U.current || M.isPending || P) return;
		if (U.current = !0, s.findById(e.id)) {
			k?.(c(e.id)), u?.();
			return;
		}
		let n = te(e);
		M.mutate({}, {
			onSuccess: (r) => {
				j({
					automationName: e.name,
					automationCategory: e.category
				}), r.conversation_id.startsWith("task-") && r.task_id ? ee(r.task_id, n) : t(r.conversation_id, { draftMessage: n }), k?.(`/conversations/${r.conversation_id}`), u?.(), window.setTimeout(() => F(n), 0);
			},
			onError: () => {
				U.current = !1;
			}
		});
	}, [
		O.backend.kind,
		M,
		P,
		k,
		u,
		F,
		j
	]), ue = S((e) => se(e).filter((e) => !d(e, J)), [J]), X = (e) => {
		let t = ue(e);
		if (t.length === 0) {
			Y(e);
			return;
		}
		L(e), V(t);
	}, Z = (e) => {
		if (!(U.current || M.isPending || P || B.length > 0 || R !== null)) {
			if (v(e)) {
				z(e);
				return;
			}
			X(e);
		}
	}, de = async () => {
		let e = R;
		if (!(!e || W.current)) {
			W.current = !0, K(!0);
			try {
				if (!await N()) return;
				z(null), X(e);
			} finally {
				W.current = !1, K(!1);
			}
		}
	}, Q = (e) => {
		z(null), window.open(e, "_blank", "noopener,noreferrer");
	}, fe = () => {
		z(null);
	}, pe = () => {
		if (H.current) {
			H.current = !1;
			return;
		}
		L(null), V([]);
	}, me = () => {
		H.current = !0, V((e) => {
			let t = e.slice(1);
			if (t.length === 0) {
				let e = I;
				window.setTimeout(() => {
					L(null), e && Y(e);
				}, 0);
			}
			return t;
		});
	}, $ = B[0] ?? null;
	return !ne() || O.backend.kind === "cloud" || q && le ? null : /* @__PURE__ */ oe(ae, { children: [
		q ? /* @__PURE__ */ E(y, {
			className: D,
			installedAutomations: ce?.automations ?? [],
			onSelect: Z
		}) : /* @__PURE__ */ E(b, {
			backendKind: O.backend.kind,
			installedServers: J,
			query: o,
			onSelect: Z,
			scrollableGrid: f
		}),
		$ && /* @__PURE__ */ E(_, {
			entry: $,
			existingServers: J,
			onClose: pe,
			onSuccess: me
		}, $.id),
		/* @__PURE__ */ E(x, {
			isOpen: R !== null,
			isPending: G,
			onClose: fe,
			onContinueLocal: de,
			onOpenUrl: Q
		})
	] });
}
//#endregion
export { D as RecommendedAutomationsLauncher };

//# sourceMappingURL=recommended-automations-launcher.js.map
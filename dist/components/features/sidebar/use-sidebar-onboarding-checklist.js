import { useNavigation as e } from "../../../context/navigation-context.js";
import { parseMcpConfig as t } from "../../../utils/mcp-config.js";
import { useSettings as n } from "../../../hooks/query/use-settings.js";
import { useLlmProfiles as r } from "../../../hooks/query/use-llm-profiles.js";
import { useLlmConfigured as i } from "../../../hooks/use-llm-configured.js";
import { useAutomations as a } from "../../../hooks/query/use-automations.js";
import { useAutomationHealth as o } from "../../../hooks/query/use-automation-health.js";
import { SIDEBAR_ONBOARDING_CHECKLIST_ITEM_IDS as s, isCustomizeChecklistPath as c } from "./sidebar-onboarding-checklist.constants.js";
import { getSidebarOnboardingChecklistDismissedSnapshot as l, readSidebarOnboardingChecklistCustomizeExplored as u, readSidebarOnboardingChecklistMinimized as d, readSidebarOnboardingChecklistSlackJoined as f, subscribeSidebarOnboardingChecklistDismissed as p, writeSidebarOnboardingChecklistCustomizeExplored as m, writeSidebarOnboardingChecklistDismissed as h, writeSidebarOnboardingChecklistMinimized as g, writeSidebarOnboardingChecklistSlackJoined as _ } from "./sidebar-onboarding-checklist-storage.js";
import { usePaginatedConversations as v } from "../../../hooks/query/use-paginated-conversations.js";
import { useOnboardingCompletion as y } from "../onboarding/use-onboarding-completion.js";
import { isConfigureLlmChecklistItemComplete as b } from "./sidebar-onboarding-checklist-llm-complete.js";
import { useEffect as x, useMemo as S, useState as C, useSyncExternalStore as w } from "react";
//#region src/components/features/sidebar/use-sidebar-onboarding-checklist.ts
function T(e) {
	return Object.keys(t(e)).length > 0;
}
function E() {
	let { isCompleted: t } = y(), { currentPath: E } = e(), D = w(p, l, () => !1), [O, k] = C(d), [A, j] = C(u), [M, N] = C(f), { data: P } = n(), { isConfigured: F, isLoading: I } = i(), { data: L, isLoading: R } = r(), { data: z } = v(1), { data: B } = o(), { data: V } = a({
		limit: 1,
		offset: 0,
		enabled: B?.status === "ok"
	});
	x(() => {
		c(E) && (A || (m(!0), j(!0)));
	}, [E, A]);
	let H = S(() => {
		let e = (z?.pages[0]?.items.length ?? 0) > 0, t = (V?.total ?? 0) > 0;
		return {
			"configure-llm": b(P, F, I, L, R),
			"connect-mcp": T(P?.agent_settings?.mcp_config),
			"start-conversation": e,
			"schedule-task": t,
			"customize-agent": A,
			"join-slack": M
		};
	}, [
		V?.total,
		z?.pages,
		A,
		M,
		F,
		I,
		R,
		L,
		P,
		P?.agent_settings?.mcp_config
	]), U = S(() => s.map((e) => ({
		id: e,
		isComplete: H[e]
	})), [H]), W = U.filter((e) => e.isComplete).length, G = W === U.length, K = t && !D && !G;
	return {
		items: U,
		completedCount: W,
		totalCount: U.length,
		isVisible: K,
		isMinimized: O,
		dismiss: () => {
			h(!0);
		},
		toggleMinimized: () => {
			k((e) => {
				let t = !e;
				return g(t), t;
			});
		},
		markJoinSlackComplete: () => {
			M || (_(!0), N(!0));
		}
	};
}
//#endregion
export { E as useSidebarOnboardingChecklist };

//# sourceMappingURL=use-sidebar-onboarding-checklist.js.map
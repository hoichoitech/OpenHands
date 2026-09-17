import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { AutomationCardSkeleton as n } from "../automations/automation-card-skeleton.js";
import { useAutomations as r } from "../../../hooks/query/use-automations.js";
import { AutomationGroup as i } from "../automations/automation-group.js";
import { AddAutomationModal as a } from "../automations/add-automation-modal.js";
import { BackendUnavailable as o } from "../automations/backend-not-configured.js";
import { EmptyState as s } from "../automations/empty-state.js";
import { ErrorState as c } from "../automations/error-state.js";
import { useAutomationHealth as l } from "../../../hooks/query/use-automation-health.js";
import { useEffect as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-automations-panel.tsx
var h = () => void 0;
function g({ openAdd: g }) {
	let { t: _ } = e("openhands"), [v, y] = d(g), { data: b, isLoading: x, refetch: S } = l(), { data: C, isLoading: w, isError: T, refetch: E } = r({
		limit: 50,
		offset: 0,
		enabled: b?.status === "ok"
	});
	u(() => {
		g && y(!0);
	}, [g]);
	let D;
	return D = x || b?.status === "ok" && w ? /* @__PURE__ */ p(n, {}) : b?.status === "ok" ? T ? /* @__PURE__ */ p(c, { onRetry: E }) : C?.automations.length ? /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p(i, {
		title: _(t.CONVERSATION_PANEL$AUTOMATIONS),
		count: C.automations.length,
		automations: C.automations,
		view: "list",
		onToggle: h,
		onRunNow: h,
		onDelete: h,
		onExport: h
	}), /* @__PURE__ */ p(a, {
		isOpen: v,
		onClose: () => y(!1)
	})] }) : /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p(s, {}), /* @__PURE__ */ p(a, {
		isOpen: v,
		onClose: () => y(!1)
	})] }) : /* @__PURE__ */ p(o, { onRetry: S }), /* @__PURE__ */ p("div", {
		"data-testid": "conversation-overview-automations-panel",
		children: D
	});
}
//#endregion
export { g as ConversationOverviewAutomationsPanel };

//# sourceMappingURL=conversation-overview-automations-panel.js.map
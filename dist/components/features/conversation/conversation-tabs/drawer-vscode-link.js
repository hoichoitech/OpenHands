import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { ExternalLink as n } from "../../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { RUNTIME_STARTING_STATES as r } from "../../../../types/agent-state.js";
import { cn as i } from "../../../../utils/utils.js";
import { useAgentState as a } from "../../../../hooks/use-agent-state.js";
import o from "../../../../icons/vscode.js";
import { useUnifiedVSCodeUrl as s } from "../../../../hooks/query/use-unified-vscode-url.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-tabs/drawer-vscode-link.tsx
function u() {
	let { t: u } = e("openhands"), { curAgentState: d } = a(), { data: f, refetch: p, isLoading: m, isUnavailable: h } = s(), g = r.includes(d);
	return h ? null : /* @__PURE__ */ l("button", {
		type: "button",
		onClick: async () => {
			let e = f?.url;
			e ||= (await p()).data?.url ?? null, e && window.open(e, "_blank", "noopener,noreferrer");
		},
		disabled: m || g,
		"aria-label": u(t.VSCODE$OPEN),
		title: u(t.VSCODE$OPEN),
		"data-testid": "drawer-vscode-link",
		className: i("inline-flex items-center gap-1.5 rounded-[7px] border border-[var(--oh-border)] bg-base-secondary px-2 py-1 text-xs", "text-[var(--oh-muted)] transition-colors hover:enabled:bg-surface-raised hover:enabled:text-white", "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"),
		children: [
			/* @__PURE__ */ c(o, {
				className: "h-[15px] w-[15px] shrink-0",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ c("span", { children: u(t.FILES$VSCODE) }),
			/* @__PURE__ */ c(n, {
				className: "h-3.5 w-3.5 shrink-0",
				"aria-hidden": !0,
				strokeWidth: 2
			})
		]
	});
}
//#endregion
export { u as DrawerVSCodeLink };

//# sourceMappingURL=drawer-vscode-link.js.map
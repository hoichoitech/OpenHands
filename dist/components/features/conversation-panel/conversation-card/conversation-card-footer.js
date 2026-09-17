import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { isExecutionPaused as n } from "../../../../utils/status.js";
import { cn as r } from "../../../../utils/utils.js";
import { getAcpProviderDisplayName as i, labelForAcpModel as a, resolveAcpProviderIcon as o } from "../../../../constants/acp-providers.js";
import { getDisplayConversationTags as s } from "../../../../api/agent-server-adapter.js";
import { useFreeModels as c } from "../../../../hooks/query/use-free-models.js";
import { formatNativeModelName as l } from "../../../../utils/format-model-name.js";
import { formatTimeDelta as u } from "../../../../utils/format-time-delta.js";
import { AgentBrandIcon as d } from "../../../shared/agent-brand-icon.js";
import { CONVERSATION_CARD_META_CHIP_CLASSNAME as f } from "./conversation-card-meta-chip.js";
import { ConversationRepoLink as p } from "./conversation-repo-link.js";
import { NoRepository as m } from "./no-repository.js";
import { ConversationTagChips as h } from "./conversation-tag-chips.js";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-card-footer.tsx
function v({ selectedRepository: v, lastUpdatedAt: y, createdAt: b, executionStatus: x, workspaceWorkingDir: S, showRepositoryMetadata: C = !0, showTimestamp: w = !0, llmModel: T, showAgentChip: E = !1, agentKind: D = null, acpServer: O = null, tags: k = null, showTags: A = !1, isArchived: j = !1 }) {
	let { t: M } = e("openhands"), N = c(), P = n(x), F = null;
	if (E) if (D === "acp") {
		let e = i(O) ?? M(t.CONVERSATION$ACP_AGENT_GENERIC), n = a(O, T), r = n ?? e;
		F = {
			kind: o(O),
			text: r,
			tooltip: n ? `${e} · ${n}` : e
		};
	} else T && (F = {
		kind: "openhands",
		text: l(T, N) ?? T,
		tooltip: T
	});
	let I = x === void 0 ? void 0 : "pl-[26px]", L = A ? s(k) : [];
	return /* @__PURE__ */ _("div", {
		className: r("flex flex-col gap-0.5 mt-0.5 w-full min-w-0", P && "opacity-60"),
		children: [
			/* @__PURE__ */ _("div", {
				className: r("flex flex-row items-center gap-2 w-full min-w-0", C && I),
				children: [C && (v?.selected_repository ? /* @__PURE__ */ g(p, { selectedRepository: v }) : /* @__PURE__ */ g(m, { workspaceWorkingDir: S })), /* @__PURE__ */ g("div", {
					className: "flex items-center gap-2 shrink-0 ml-auto",
					children: w && (b ?? y) && /* @__PURE__ */ g("p", {
						className: "text-xs text-[var(--oh-muted)] text-right",
						children: /* @__PURE__ */ g("time", { children: `${u(y ?? b)} ${M(t.CONVERSATION$AGO)}` })
					})
				})]
			}),
			F ? /* @__PURE__ */ g("div", {
				className: I,
				children: /* @__PURE__ */ _("span", {
					"data-testid": "conversation-card-agent-chip",
					className: f,
					title: F.tooltip,
					children: [/* @__PURE__ */ g("span", {
						className: "inline-flex h-4 shrink-0 items-center justify-center [&_svg]:block",
						"aria-hidden": !0,
						children: /* @__PURE__ */ g(d, {
							kind: F.kind,
							size: 12
						})
					}), /* @__PURE__ */ g("span", {
						className: "truncate leading-4",
						children: F.text
					})]
				})
			}) : null,
			j ? /* @__PURE__ */ g("div", {
				className: I,
				children: /* @__PURE__ */ g("span", {
					"data-testid": "conversation-card-archived-chip",
					className: f,
					children: M(t.COMMON$ARCHIVED)
				})
			}) : null,
			L.length > 0 ? /* @__PURE__ */ g("div", {
				className: I,
				children: /* @__PURE__ */ g(h, { tags: L })
			}) : null
		]
	});
}
//#endregion
export { v as ConversationCardFooter };

//# sourceMappingURL=conversation-card-footer.js.map
import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { retrieveAxiosErrorMessage as n } from "../../../utils/retrieve-axios-error-message.js";
import { displayErrorToast as r, displaySuccessToast as i } from "../../../utils/custom-toast-handlers.js";
import { parseMcpConfig as a } from "../../../utils/mcp-config.js";
import { useSettings as o } from "../../../hooks/query/use-settings.js";
import { useConversationOverviewDrawerOptional as s } from "./conversation-overview-drawer-context.js";
import c from "../../../node_modules/@openhands/extensions/integrations/index.js";
import { findCatalogEntryForServer as l, getMcpMarketplaceCatalog as u, installedServerMatchesQuery as d } from "../../../utils/mcp-marketplace-utils.js";
import { flattenMcpConfig as f } from "../../../utils/mcp-installed-servers.js";
import { InstallServerModal as p } from "../mcp-page/install-server-modal.js";
import { ConfirmationModal as m } from "../../shared/modals/confirmation-modal.js";
import { useDeleteMcpServer as h } from "../../../hooks/mutation/use-delete-mcp-server.js";
import { useUpdateMcpServer as g } from "../../../hooks/mutation/use-update-mcp-server.js";
import { InstalledServersSection as _ } from "../mcp-page/installed-servers-section.js";
import { MarketplaceSection as v } from "../mcp-page/marketplace-section.js";
import { CustomServerEditor as y } from "../mcp-page/custom-server-editor.js";
import { McpToolbar as b } from "../mcp-page/mcp-toolbar.js";
import "../mcp-page/index.js";
import { useEffect as x, useState as S } from "react";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-mcp-panel.tsx
function T({ openAdd: T }) {
	let { t: E } = e("openhands"), { data: D, isLoading: O } = o(), { mutate: k, isPending: A } = h(), { mutate: j } = g(), M = s()?.addRequestKey ?? 0, [N, P] = S(null), [F, I] = S(null), [L, R] = S(null), [z, B] = S(""), [V, H] = S("all");
	x(() => {
		T && I({
			id: "",
			type: "sse"
		});
	}, [T]), x(() => {
		M !== 0 && I({
			id: "",
			type: "sse"
		});
	}, [M]);
	let U = f(a(D?.agent_settings?.mcp_config)), W = u(c), G = U.filter((e) => d(e, l(e, W), z));
	return O || !D ? /* @__PURE__ */ C("div", {
		"data-testid": "conversation-overview-mcp-panel",
		className: "text-sm text-muted",
		children: "…"
	}) : /* @__PURE__ */ w("div", {
		"data-testid": "conversation-overview-mcp-panel",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ C(b, {
				search: z,
				onSearchChange: B,
				sectionFilter: V,
				onSectionFilterChange: H
			}),
			V === "library" ? null : /* @__PURE__ */ w("section", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ C("h3", {
					className: "text-sm font-semibold text-foreground",
					children: E(t.MCP$INSTALLED_TITLE)
				}), /* @__PURE__ */ C(_, {
					servers: G,
					hasAnyInstalled: U.length > 0,
					query: z,
					onEdit: I,
					onToggleEnabled: (e, t) => {
						j({
							serverId: e.id,
							server: {
								...e,
								enabled: t
							}
						});
					}
				})]
			}),
			V === "installed" ? null : /* @__PURE__ */ C(v, {
				onSelect: P,
				onAdd: P,
				query: z
			}),
			N ? /* @__PURE__ */ C(p, {
				entry: N,
				existingServers: U,
				onClose: () => P(null)
			}) : null,
			F ? /* @__PURE__ */ C(y, {
				server: F,
				existingServers: U,
				onClose: () => I(null)
			}) : null,
			L ? /* @__PURE__ */ C(m, {
				text: E(t.SETTINGS$MCP_CONFIRM_DELETE),
				onCancel: () => R(null),
				onConfirm: () => {
					L && k(L, {
						onSuccess: () => {
							i(E(t.MCP$REMOVE_SUCCESS)), R(null);
						},
						onError: (e) => {
							r(n(e) || E(t.ERROR$GENERIC)), R(null);
						}
					});
				},
				isConfirming: A
			}) : null
		]
	});
}
//#endregion
export { T as ConversationOverviewMcpPanel };

//# sourceMappingURL=conversation-overview-mcp-panel.js.map
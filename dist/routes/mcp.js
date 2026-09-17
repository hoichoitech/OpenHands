import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { retrieveAxiosErrorMessage as n } from "../utils/retrieve-axios-error-message.js";
import { displayErrorToast as r } from "../utils/custom-toast-handlers.js";
import { parseMcpConfig as i } from "../utils/mcp-config.js";
import { useSettings as a } from "../hooks/query/use-settings.js";
import { BrandButton as o } from "../components/features/settings/brand-button.js";
import s from "../node_modules/@openhands/extensions/integrations/index.js";
import { findCatalogEntryForServer as c, getMcpMarketplaceCatalog as l, installedServerMatchesQuery as u } from "../utils/mcp-marketplace-utils.js";
import { flattenMcpConfig as d } from "../utils/mcp-installed-servers.js";
import { InstallServerModal as f } from "../components/features/mcp-page/install-server-modal.js";
import { useUpdateMcpServer as p } from "../hooks/mutation/use-update-mcp-server.js";
import { InstalledServersSection as m } from "../components/features/mcp-page/installed-servers-section.js";
import { MarketplaceSection as h } from "../components/features/mcp-page/marketplace-section.js";
import { CustomServerEditor as g } from "../components/features/mcp-page/custom-server-editor.js";
import { McpToolbar as _ } from "../components/features/mcp-page/mcp-toolbar.js";
import "../components/features/mcp-page/index.js";
import { settingsLikeMainScrollClassName as v } from "../utils/settings-like-page-layout-classes.js";
import { ExtensionsNavigation as y } from "../components/features/skills/extensions-navigation.js";
import b from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/routes/mcp.tsx
function C() {
	let { t: C } = e("openhands"), { data: w, isLoading: T } = a(), { mutate: E } = p(), [D, O] = b.useState(null), [k, A] = b.useState(null), [j, M] = b.useState(""), [N, P] = b.useState("all"), F = d(w?.mcp_config ?? i(w?.agent_settings?.mcp_config)), I = l(s), L = F.filter((e) => u(e, c(e, I), j)), R = (e) => {
		O(e);
	};
	return T || !w ? /* @__PURE__ */ S("div", {
		"data-testid": "mcp-page",
		className: "flex h-full gap-4 md:gap-6 md:pl-8 lg:gap-10 lg:pl-10",
		children: [/* @__PURE__ */ x(y, {}), /* @__PURE__ */ x("div", {
			className: "flex h-full flex-1 items-center justify-center px-4 md:px-0",
			children: /* @__PURE__ */ x("div", { className: "h-8 w-8 rounded-full border-2 border-transparent border-t-white animate-spin" })
		})]
	}) : /* @__PURE__ */ S("div", {
		"data-testid": "mcp-page",
		className: "flex h-full gap-4 md:gap-6 md:pl-8 lg:gap-10 lg:pl-10",
		children: [/* @__PURE__ */ x(y, {}), /* @__PURE__ */ S("main", {
			className: v,
			children: [
				/* @__PURE__ */ S("div", {
					className: "mx-auto flex w-full min-w-0 max-w-[800px] flex-col gap-6",
					children: [
						/* @__PURE__ */ x("div", {
							className: "min-w-0",
							children: /* @__PURE__ */ S("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ S("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ x("h2", {
										className: "text-xl font-medium leading-6 text-foreground",
										children: C(t.SETTINGS$MCP_TITLE)
									}), /* @__PURE__ */ x("div", {
										className: "max-w-2xl text-sm text-tertiary-light",
										children: C(t.MCP$PAGE_DESCRIPTION)
									})]
								}), /* @__PURE__ */ x(o, {
									type: "button",
									variant: "secondary",
									testId: "mcp-add-custom-server",
									className: "flex-shrink-0 whitespace-nowrap",
									onClick: () => A({
										id: "",
										type: "sse"
									}),
									children: C(t.MCP$ADD_CUSTOM)
								})]
							})
						}),
						/* @__PURE__ */ x(_, {
							search: j,
							onSearchChange: M,
							sectionFilter: N,
							onSectionFilterChange: P
						}),
						N === "library" ? null : /* @__PURE__ */ S("section", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ x("h2", {
								className: "text-base font-semibold text-foreground",
								children: C(t.MCP$INSTALLED_TITLE)
							}), /* @__PURE__ */ x(m, {
								servers: L,
								hasAnyInstalled: F.length > 0,
								query: j,
								onEdit: (e) => {
									A(e);
								},
								onToggleEnabled: (e, i) => {
									E({
										serverId: e.id,
										server: {
											...e,
											enabled: i
										}
									}, { onError: (e) => {
										r(n(e) || C(t.ERROR$GENERIC));
									} });
								}
							})]
						}),
						N === "installed" ? null : /* @__PURE__ */ x(h, {
							onSelect: R,
							onAdd: R,
							query: j
						})
					]
				}),
				D && /* @__PURE__ */ x(f, {
					entry: D,
					existingServers: F,
					onClose: () => O(null)
				}),
				k && /* @__PURE__ */ x(g, {
					server: k,
					existingServers: F,
					onClose: () => A(null)
				})
			]
		})]
	});
}
//#endregion
export { C as default };

//# sourceMappingURL=mcp.js.map
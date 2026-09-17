import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Cloud as n } from "../../../node_modules/lucide-react/dist/esm/icons/cloud.js";
import { ExternalLink as r } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { cn as i } from "../../../utils/utils.js";
import { getLockedCloudHost as a } from "../../../api/agent-server-config.js";
import { isNoBackend as o } from "../../../api/backend-registry/active-store.js";
import { useActiveBackendContext as s } from "../../../contexts/active-backend-context.js";
import { SIDEBAR_ICON_SLOT_CLASS as c, SIDEBAR_ROW_INTERACTIVE_CLASS as l, sidebarNavLabelClassName as u, sidebarNavRowClassName as d } from "../sidebar/sidebar-layout.js";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/features/settings/cloud-settings-link.tsx
function m() {
	let { t: m } = e("openhands"), { active: h } = s(), { backend: g, orgId: _ } = h;
	if (o(g) || g.kind !== "cloud") return null;
	let v = a() !== null, y = _ ? `?org=${encodeURIComponent(_)}` : "";
	return /* @__PURE__ */ p("a", {
		"data-testid": "settings-cloud-link",
		href: `${g.host.replace(/\/+$/, "")}/settings${y}`,
		target: v ? void 0 : "_blank",
		rel: v ? void 0 : "noopener noreferrer",
		className: i(d({ collapsed: !1 }), l.idle),
		children: [
			/* @__PURE__ */ f("span", {
				className: c,
				children: /* @__PURE__ */ f(n, {
					className: "size-4 shrink-0",
					"aria-hidden": !0
				})
			}),
			/* @__PURE__ */ f("span", {
				className: i(u(!1), "flex-1"),
				children: m(t.SETTINGS$CLOUD_SETTINGS_LINK)
			}),
			!v && /* @__PURE__ */ f(r, {
				className: "size-4 shrink-0 text-[var(--oh-muted)]",
				"aria-hidden": !0
			})
		]
	});
}
//#endregion
export { m as CloudSettingsLink };

//# sourceMappingURL=cloud-settings-link.js.map
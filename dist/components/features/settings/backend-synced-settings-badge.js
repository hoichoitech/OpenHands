import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useActiveBackend as n } from "../../../contexts/active-backend-context.js";
import { Typography as r } from "../../../ui/typography.js";
import { useAllCloudOrganizations as i } from "../../../hooks/query/use-cloud-organizations.js";
import { useCloudCurrentUserId as a } from "../../../hooks/query/use-cloud-current-user-id.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/features/settings/backend-synced-settings-badge.tsx
function s() {
	let { t: r } = e(), o = n(), s = i(), c = a();
	if (o.backend.kind !== "cloud" || !o.orgId) return o.backend.name;
	let l = s[o.backend.id]?.orgs.find((e) => e.id === o.orgId);
	if (!l) return o.backend.name;
	let u = c[o.backend.id]?.userId ?? null, d = u && l.id === u ? r(t.BACKEND$PERSONAL_WORKSPACE) : l.name;
	return `${o.backend.name} – ${d}`;
}
function c() {
	let { t: i } = e(), a = n(), c = s();
	return /* @__PURE__ */ o("div", {
		"data-testid": "backend-synced-settings-badge",
		className: "flex items-center",
		children: /* @__PURE__ */ o(r.Text, {
			className: "text-[11px] font-medium text-[var(--oh-text-dim)] leading-5",
			children: i(t.SETTINGS$BACKEND_SYNCED_BADGE, {
				name: c,
				host: a.backend.host,
				interpolation: { escapeValue: !1 }
			})
		})
	});
}
//#endregion
export { c as BackendSyncedSettingsBadge };

//# sourceMappingURL=backend-synced-settings-badge.js.map
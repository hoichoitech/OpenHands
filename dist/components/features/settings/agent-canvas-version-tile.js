import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { CircleArrowUp as n } from "../../../node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js";
import { CircleCheck as r } from "../../../node_modules/lucide-react/dist/esm/icons/circle-check.js";
import { cn as i } from "../../../utils/utils.js";
import { getLockedCloudHost as a } from "../../../api/agent-server-config.js";
import { compareAgentServerVersions as o } from "../../../api/agent-server-compatibility.js";
import { AGENT_CANVAS_CLIENT_VERSION as s } from "../../../api/client-source.js";
import { useLatestAgentCanvasVersion as c } from "../../../hooks/query/use-latest-agent-canvas-version.js";
import { AgentCanvasVersionModal as l } from "./agent-canvas-version-modal.js";
import u from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/features/settings/agent-canvas-version-tile.tsx
function m({ className: m, hideWhenUpToDate: h = !1 }) {
	let { t: g } = e("openhands"), [_, v] = u.useState(!1), y = a() !== null, b = c({ enabled: !y });
	if (y) return null;
	let x = s, S = b.data ?? null, C = (S === null ? null : o(S, x)) === 1;
	return h && !C ? null : /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ p("button", {
		type: "button",
		"data-testid": "agent-canvas-version-tile",
		onClick: () => v(!0),
		"aria-label": g(t.SETTINGS$VERSION_TILE_ARIA_LABEL),
		className: i("flex w-full items-center gap-3 rounded-md border border-[var(--oh-border)] bg-base-secondary px-3 py-2 text-left hover:bg-[var(--oh-surface-raised)]", m),
		children: [/* @__PURE__ */ p("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ f("span", {
				className: "block truncate text-sm font-semibold leading-5 text-white",
				children: g(C ? t.SETTINGS$VERSION_TILE_NEW_VERSION : t.SETTINGS$VERSION_PRODUCT_NAME)
			}), /* @__PURE__ */ p("span", {
				className: "flex min-w-0 items-center gap-1.5 truncate text-xs leading-5",
				children: [/* @__PURE__ */ f("span", {
					className: "text-[var(--oh-muted)]",
					children: g(t.SETTINGS$APP_UPDATE_VERSION_LABEL)
				}), /* @__PURE__ */ f("span", {
					className: "truncate text-white",
					children: C && S ? S : x
				})]
			})]
		}), C ? /* @__PURE__ */ f(n, {
			className: "size-5 shrink-0 text-[#3B82F6]",
			"aria-hidden": !0
		}) : /* @__PURE__ */ f(r, {
			className: "size-5 shrink-0 text-[var(--oh-status-success)]",
			"aria-hidden": !0
		})]
	}), _ ? /* @__PURE__ */ f(l, {
		installedVersion: x,
		latestVersion: S,
		updateAvailable: C,
		isChecking: b.isFetching,
		onCheckForUpdates: () => {
			b.refetch();
		},
		onClose: () => v(!1)
	}) : null] });
}
//#endregion
export { m as AgentCanvasVersionTile };

//# sourceMappingURL=agent-canvas-version-tile.js.map
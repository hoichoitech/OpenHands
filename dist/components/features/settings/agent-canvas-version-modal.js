import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Check as n } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { CircleArrowUp as r } from "../../../node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js";
import { CircleCheck as i } from "../../../node_modules/lucide-react/dist/esm/icons/circle-check.js";
import { Copy as a } from "../../../node_modules/lucide-react/dist/esm/icons/copy.js";
import { ExternalLink as o } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { RefreshCw as s } from "../../../node_modules/lucide-react/dist/esm/icons/refresh-cw.js";
import { cn as c } from "../../../utils/utils.js";
import { ModalBackdrop as l } from "../../shared/modals/modal-backdrop.js";
import { ModalCloseButton as u } from "../../shared/modals/modal-close-button.js";
import { AGENT_CANVAS_RELEASE_NOTES_URL as d, AGENT_CANVAS_UPDATE_COMMANDS as f } from "../../../api/agent-canvas-updates.js";
import p from "../../../icons/docker.js";
import m from "../../../icons/npm.js";
import h from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/features/settings/agent-canvas-version-modal.tsx
var y = 2e3, b = ["npm", "docker"];
function x(e) {
	return e === "npm" ? t.SETTINGS$VERSION_NPM_RECOMMENDED : t.SETTINGS$VERSION_DOCKER;
}
function S({ tab: e }) {
	return e === "npm" ? /* @__PURE__ */ _(m, {
		className: "size-4 shrink-0",
		"aria-hidden": !0
	}) : /* @__PURE__ */ _(p, {
		className: "size-5 shrink-0",
		"aria-hidden": !0
	});
}
function C({ installedVersion: p, latestVersion: m, updateAvailable: C, isChecking: w, onCheckForUpdates: T, onClose: E }) {
	let { t: D } = e("openhands"), [O, k] = h.useState("npm"), [A, j] = h.useState(!1), M = h.useRef(null), N = O === "npm" ? f.npm : f.docker;
	h.useEffect(() => () => {
		M.current !== null && window.clearTimeout(M.current);
	}, []), h.useEffect(() => {
		j(!1), M.current !== null && (window.clearTimeout(M.current), M.current = null);
	}, [O]);
	let P = h.useCallback(() => {
		navigator.clipboard?.writeText(N), j(!0), M.current !== null && window.clearTimeout(M.current), M.current = window.setTimeout(() => {
			j(!1), M.current = null;
		}, y);
	}, [N]);
	return /* @__PURE__ */ _(l, {
		onClose: E,
		"aria-label": D(t.SETTINGS$VERSION_MODAL_ARIA_LABEL),
		children: /* @__PURE__ */ v("section", {
			className: "relative flex w-[520px] max-w-[90vw] flex-col gap-5 rounded-xl border border-[var(--oh-border)] bg-base-secondary p-6 shadow-xl",
			children: [
				/* @__PURE__ */ _(u, {
					onClose: E,
					testId: "agent-canvas-version-modal-close"
				}),
				/* @__PURE__ */ v("header", {
					className: "flex items-center gap-3 pr-8",
					children: [
						C ? /* @__PURE__ */ _(r, {
							className: "size-7 shrink-0 text-[#3B82F6]",
							"aria-hidden": !0
						}) : /* @__PURE__ */ _(i, {
							className: "size-7 shrink-0 text-[var(--oh-status-success)]",
							"aria-hidden": !0
						}),
						/* @__PURE__ */ _("h2", {
							className: "text-base font-semibold leading-6 text-white",
							children: D(C ? t.SETTINGS$VERSION_UPDATE_AVAILABLE : t.SETTINGS$VERSION_UP_TO_DATE_TITLE)
						}),
						C && m ? /* @__PURE__ */ _("span", {
							className: "rounded-full bg-[#1E3A5F] px-2 py-0.5 text-xs font-semibold text-[#3B82F6]",
							children: m
						}) : null
					]
				}),
				/* @__PURE__ */ _("div", {
					className: "flex flex-col gap-1",
					children: C && m ? /* @__PURE__ */ v("p", {
						className: "text-sm text-[var(--oh-text)]",
						children: [
							D(t.SETTINGS$VERSION_UPDATE_MESSAGE, {
								installed: p,
								latest: m
							}),
							" ",
							/* @__PURE__ */ v("a", {
								href: d,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-white hover:text-[var(--oh-text)]",
								children: [D(t.SETTINGS$VERSION_RELEASE_NOTES), /* @__PURE__ */ _(o, {
									className: "size-4 shrink-0",
									"aria-hidden": !0
								})]
							})
						]
					}) : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("p", {
						className: "text-sm text-[var(--oh-text)]",
						children: D(t.SETTINGS$VERSION_INSTALLED, { version: p })
					}), m ? /* @__PURE__ */ v("p", {
						className: "whitespace-nowrap text-sm text-[var(--oh-status-success)]",
						children: [
							D(t.SETTINGS$VERSION_LATEST_MESSAGE),
							" ",
							/* @__PURE__ */ v("a", {
								href: d,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1.5 font-medium text-white hover:text-[var(--oh-text)]",
								children: [D(t.SETTINGS$VERSION_RELEASE_NOTES), /* @__PURE__ */ _(o, {
									className: "size-4 shrink-0",
									"aria-hidden": !0
								})]
							})
						]
					}) : /* @__PURE__ */ _("p", {
						className: "text-sm text-[var(--oh-muted)]",
						children: D(t.SETTINGS$VERSION_CHECK_UNAVAILABLE)
					})] })
				}),
				C ? /* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _("div", {
					className: "flex justify-center",
					children: b.map((e) => /* @__PURE__ */ v("button", {
						type: "button",
						onClick: () => k(e),
						className: c("inline-flex items-center gap-1.5 px-3 pb-2 text-sm font-medium", O === e ? "border-b border-white text-white" : "text-[var(--oh-muted)] hover:text-white"),
						children: [/* @__PURE__ */ _(S, { tab: e }), D(x(e))]
					}, e))
				}), /* @__PURE__ */ v("div", {
					className: "flex items-center gap-3 rounded-lg border border-[var(--oh-border)] bg-[var(--oh-surface-deep)] px-4 py-3",
					children: [/* @__PURE__ */ _("code", {
						className: "min-w-0 flex-1 overflow-visible whitespace-nowrap font-mono text-sm text-white",
						children: N
					}), /* @__PURE__ */ _("button", {
						type: "button",
						onClick: P,
						"aria-label": D(A ? t.BUTTON$COPIED : t.SETTINGS$VERSION_COPY_COMMAND),
						disabled: A,
						className: "shrink-0 text-[var(--oh-muted)] hover:text-white disabled:hover:text-[var(--oh-muted)]",
						children: A ? /* @__PURE__ */ _(n, {
							className: "size-4 text-[var(--oh-status-success)]",
							"aria-hidden": !0
						}) : /* @__PURE__ */ _(a, {
							className: "size-4",
							"aria-hidden": !0
						})
					})]
				})] }) : null,
				C ? null : /* @__PURE__ */ _("div", {
					className: "flex flex-wrap gap-x-8 gap-y-3",
					children: /* @__PURE__ */ v("button", {
						type: "button",
						onClick: T,
						className: "inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[var(--oh-text)] disabled:cursor-wait disabled:text-[var(--oh-muted)]",
						disabled: w,
						children: [D(t.SETTINGS$VERSION_CHECK_FOR_UPDATES), /* @__PURE__ */ _(s, {
							className: c("size-4 shrink-0", w && "animate-spin"),
							"aria-hidden": !0
						})]
					})
				})
			]
		})
	});
}
//#endregion
export { C as AgentCanvasVersionModal };

//# sourceMappingURL=agent-canvas-version-modal.js.map
import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Check as n } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { CircleArrowUp as r } from "../../../node_modules/lucide-react/dist/esm/icons/circle-arrow-up.js";
import { CircleCheck as i } from "../../../node_modules/lucide-react/dist/esm/icons/circle-check.js";
import { Copy as a } from "../../../node_modules/lucide-react/dist/esm/icons/copy.js";
import { ExternalLink as o } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { RefreshCw as s } from "../../../node_modules/lucide-react/dist/esm/icons/refresh-cw.js";
import { cn as c } from "../../../utils/utils.js";
import { getLockedCloudHost as l } from "../../../api/agent-server-config.js";
import { compareAgentServerVersions as u } from "../../../api/agent-server-compatibility.js";
import { AGENT_CANVAS_CLIENT_VERSION as d } from "../../../api/client-source.js";
import { ModalBackdrop as f } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as p } from "../../shared/modals/modal-body.js";
import { BaseModalTitle as m } from "../../shared/modals/confirmation-modals/base-modal.js";
import { ModalCloseButton as h } from "../../shared/modals/modal-close-button.js";
import { BrandButton as g } from "./brand-button.js";
import { AGENT_CANVAS_RELEASE_NOTES_URL as _, AGENT_CANVAS_UPDATE_COMMANDS as v } from "../../../api/agent-canvas-updates.js";
import { useLatestAgentCanvasVersion as y } from "../../../hooks/query/use-latest-agent-canvas-version.js";
import b from "../../../icons/docker.js";
import x from "../../../icons/npm.js";
import { useCallback as S, useEffect as C, useRef as w, useState as T } from "react";
import { Fragment as E, jsx as D, jsxs as O } from "react/jsx-runtime";
//#region src/components/features/settings/agent-canvas-update-card.tsx
var k = 2e3, A = ["npm", "docker"];
function j(e) {
	return e === "npm" ? t.SETTINGS$VERSION_NPM_RECOMMENDED : t.SETTINGS$VERSION_DOCKER;
}
function M({ tab: e }) {
	return e === "npm" ? /* @__PURE__ */ D(x, {
		className: "size-4 shrink-0",
		"aria-hidden": !0
	}) : /* @__PURE__ */ D(b, {
		className: "size-5 shrink-0",
		"aria-hidden": !0
	});
}
function N() {
	let { t: r } = e("openhands"), [i, o] = T("npm"), [s, l] = T(!1), u = w(null), d = i === "npm" ? v.npm : v.docker;
	C(() => () => {
		u.current !== null && window.clearTimeout(u.current);
	}, []), C(() => {
		l(!1), u.current !== null && (window.clearTimeout(u.current), u.current = null);
	}, [i]);
	let f = S(() => {
		navigator.clipboard?.writeText(d), l(!0), u.current !== null && window.clearTimeout(u.current), u.current = window.setTimeout(() => {
			l(!1), u.current = null;
		}, k);
	}, [d]);
	return /* @__PURE__ */ O("div", {
		className: "w-full",
		children: [/* @__PURE__ */ D("div", {
			className: "flex justify-center",
			children: A.map((e) => /* @__PURE__ */ O("button", {
				type: "button",
				onClick: () => o(e),
				className: c("inline-flex items-center gap-1.5 px-3 pb-2 text-sm font-medium", i === e ? "border-b border-white text-white" : "text-[var(--oh-muted)] hover:text-white"),
				children: [/* @__PURE__ */ D(M, { tab: e }), r(j(e))]
			}, e))
		}), /* @__PURE__ */ O("div", {
			className: "flex items-center gap-3 rounded-lg border border-[var(--oh-border)] bg-[var(--oh-surface-deep)] px-4 py-3",
			children: [/* @__PURE__ */ D("code", {
				"data-testid": i === "npm" ? "agent-canvas-update-command-npm" : "agent-canvas-update-command-docker",
				className: "min-w-0 flex-1 overflow-visible whitespace-nowrap font-mono text-sm text-white",
				children: d
			}), /* @__PURE__ */ D("button", {
				type: "button",
				"data-testid": "copy-to-clipboard",
				onClick: f,
				"aria-label": r(s ? t.BUTTON$COPIED : t.SETTINGS$VERSION_COPY_COMMAND),
				disabled: s,
				className: "shrink-0 text-[var(--oh-muted)] hover:text-white disabled:hover:text-[var(--oh-muted)]",
				children: s ? /* @__PURE__ */ D(n, {
					className: "size-4 text-[var(--oh-status-success)]",
					"aria-hidden": !0
				}) : /* @__PURE__ */ D(a, {
					className: "size-4",
					"aria-hidden": !0
				})
			})]
		})]
	});
}
function P({ onClose: n, latestVersion: a, isPending: l, isFetching: u, updateAvailable: v, upToDate: y, onCheckForUpdates: b }) {
	let { t: x } = e("openhands");
	return /* @__PURE__ */ D(f, {
		onClose: n,
		children: /* @__PURE__ */ O(p, {
			width: "md",
			className: "relative flex max-h-[80vh] flex-col items-start overflow-auto border border-[var(--oh-border)]",
			testID: "agent-canvas-update-modal",
			children: [
				/* @__PURE__ */ D(h, {
					onClose: n,
					testId: "close-agent-canvas-update-modal"
				}),
				/* @__PURE__ */ O("div", {
					className: "flex w-full flex-col gap-2 pr-10",
					children: [/* @__PURE__ */ D(m, { title: x(t.SETTINGS$APP_UPDATE_CARD_TITLE) }), /* @__PURE__ */ O("div", {
						className: "flex items-center gap-1.5 text-xs",
						children: [/* @__PURE__ */ D("span", {
							className: "text-[var(--oh-text-dim)]",
							children: x(t.SETTINGS$APP_UPDATE_VERSION_LABEL)
						}), /* @__PURE__ */ D("span", {
							className: "text-white",
							children: d
						})]
					})]
				}),
				/* @__PURE__ */ O("div", {
					className: "flex w-full flex-col gap-3",
					children: [
						/* @__PURE__ */ D(g, {
							testId: "agent-canvas-update-check-button",
							type: "button",
							variant: "secondary",
							className: "w-full",
							isDisabled: u,
							"aria-busy": u,
							onClick: b,
							startContent: /* @__PURE__ */ D(s, {
								className: c("size-4", u && "animate-spin"),
								"aria-hidden": !0
							}),
							children: x(t.SETTINGS$APP_UPDATE_CHECK_BUTTON)
						}),
						/* @__PURE__ */ D("div", {
							"data-testid": "agent-canvas-update-status",
							className: "w-full",
							children: l || u ? /* @__PURE__ */ D("span", {
								className: "text-xs text-[var(--oh-muted)]",
								children: x(t.SETTINGS$APP_UPDATE_CHECKING)
							}) : v ? /* @__PURE__ */ O("div", {
								className: "flex items-start gap-2 rounded-lg border border-[#3B82F6]/30 bg-[#1E3A5F] px-3 py-2 text-xs text-[#3B82F6]",
								children: [/* @__PURE__ */ D(r, {
									className: "size-4 shrink-0",
									"aria-hidden": !0
								}), /* @__PURE__ */ O("span", { children: [
									x(t.SETTINGS$APP_UPDATE_AVAILABLE_MESSAGE, { version: a }),
									" ",
									/* @__PURE__ */ O("a", {
										"data-testid": "agent-canvas-update-release-notes",
										href: _,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-white hover:text-[var(--oh-text)]",
										children: [x(t.SETTINGS$VERSION_RELEASE_NOTES), /* @__PURE__ */ D(o, {
											className: "size-3.5 shrink-0",
											"aria-hidden": !0
										})]
									})
								] })]
							}) : y ? /* @__PURE__ */ O("div", {
								className: "flex items-start gap-2 rounded-lg border border-[var(--oh-status-success)]/30 bg-[var(--oh-status-success)]/10 px-3 py-2 text-xs text-[var(--oh-status-success)]",
								children: [/* @__PURE__ */ D(i, {
									className: "size-4 shrink-0",
									"aria-hidden": !0
								}), /* @__PURE__ */ O("span", { children: [
									x(t.SETTINGS$APP_UPDATE_LATEST_MESSAGE),
									" ",
									/* @__PURE__ */ O("a", {
										"data-testid": "agent-canvas-update-release-notes",
										href: _,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-white hover:text-[var(--oh-text)]",
										children: [x(t.SETTINGS$VERSION_RELEASE_NOTES), /* @__PURE__ */ D(o, {
											className: "size-3.5 shrink-0",
											"aria-hidden": !0
										})]
									})
								] })]
							}) : /* @__PURE__ */ D("span", {
								className: "text-xs text-[var(--oh-muted)]",
								children: x(t.SETTINGS$APP_UPDATE_CHECK_FAILED)
							})
						}),
						v ? /* @__PURE__ */ O("div", {
							className: "flex w-full flex-col border-t border-[var(--oh-border)] pt-3",
							children: [
								/* @__PURE__ */ D("span", {
									className: "text-sm font-medium text-white",
									children: x(t.SETTINGS$APP_UPDATE_HOW_TO_UPDATE)
								}),
								/* @__PURE__ */ D("span", {
									className: "mt-1 mb-4 text-sm text-[var(--oh-text-dim)]",
									children: x(t.SETTINGS$APP_UPDATE_RUN_COMMANDS)
								}),
								/* @__PURE__ */ D(N, {})
							]
						}) : null
					]
				})
			]
		})
	});
}
function F({ hideWhenUpToDate: n = !1 }) {
	let { t: a } = e("openhands"), [o, s] = T(!1), f = l() !== null, p = y({ enabled: !f });
	if (f) return null;
	let m = p.data, h = m === void 0 ? null : u(m, d), g = h === 1, _ = h !== null && h <= 0;
	return n && !g ? null : /* @__PURE__ */ O(E, { children: [/* @__PURE__ */ D("section", {
		"data-testid": "agent-canvas-update-card",
		children: /* @__PURE__ */ O("button", {
			type: "button",
			onClick: () => s(!0),
			"aria-haspopup": "dialog",
			"data-testid": "agent-canvas-update-toggle",
			className: "flex w-full cursor-pointer flex-col gap-1 rounded-md border border-[var(--oh-border)] bg-base-secondary px-3 py-2 text-left hover:bg-[var(--oh-surface-raised)]",
			children: [/* @__PURE__ */ O("span", {
				className: "flex w-full items-center gap-2",
				children: [/* @__PURE__ */ D("span", {
					className: "flex-1 truncate text-sm font-semibold leading-5 text-white",
					children: a(t.SETTINGS$APP_UPDATE_CARD_TITLE)
				}), h !== null && /* @__PURE__ */ O("span", {
					"data-testid": "agent-canvas-update-badge",
					className: c("inline-flex shrink-0 items-center gap-1 text-[10px] font-medium leading-none", g ? "rounded-full border border-transparent bg-[#1E3A5F] px-1.5 py-0.5 text-[#3B82F6]" : "text-success"),
					children: [D(g ? r : i, {
						className: "size-3 shrink-0",
						"aria-hidden": !0
					}), a(g ? t.SETTINGS$APP_UPDATE_BADGE_UPDATE_AVAILABLE : t.SETTINGS$APP_UPDATE_BADGE_UP_TO_DATE)]
				})]
			}), /* @__PURE__ */ O("span", {
				className: "flex items-center gap-1.5 text-xs leading-5 text-[var(--oh-muted)]",
				children: [/* @__PURE__ */ D("span", { children: a(t.SETTINGS$APP_UPDATE_VERSION_LABEL) }), /* @__PURE__ */ D("span", {
					className: "text-white",
					children: d
				})]
			})]
		})
	}), o && /* @__PURE__ */ D(P, {
		onClose: () => s(!1),
		latestVersion: m,
		isPending: p.isPending,
		isFetching: p.isFetching,
		updateAvailable: g,
		upToDate: _,
		onCheckForUpdates: () => p.refetch()
	})] });
}
//#endregion
export { F as AgentCanvasUpdateCard };

//# sourceMappingURL=agent-canvas-update-card.js.map
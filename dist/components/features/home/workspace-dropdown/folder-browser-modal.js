import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { useActiveBackend as r } from "../../../../contexts/active-backend-context.js";
import { ModalBackdrop as i } from "../../../shared/modals/modal-backdrop.js";
import { MODAL_MAX_WIDTH_VIEWPORT as a, modalWidthClassName as o } from "../../../shared/modals/modal-body.js";
import { modalTitleSmClassName as s } from "../../../../utils/modal-classes.js";
import { BaseModalTitle as c } from "../../../shared/modals/confirmation-modals/base-modal.js";
import { BrandButton as l } from "../../settings/brand-button.js";
import u from "../../../../icons/folder.js";
import { useHomeDirectory as d, useSearchSubdirs as f } from "../../../../hooks/query/use-search-subdirs.js";
import p from "../../../../icons/chevron-left-small.js";
import { useEffect as m, useMemo as h, useState as g } from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/features/home/workspace-dropdown/folder-browser-modal.tsx
var y = "/projects";
function b({ label: e, entries: t, currentPath: r, onPick: i }) {
	return t.length === 0 ? null : /* @__PURE__ */ v("div", {
		className: "px-2 pb-3",
		children: [/* @__PURE__ */ _("div", {
			className: "px-2 pb-1 text-[11px] uppercase tracking-wide text-[var(--oh-muted)] font-semibold",
			children: e
		}), /* @__PURE__ */ _("ul", { children: t.map((e) => {
			let t = r === e.path;
			return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => i(e.path),
				"data-testid": `folder-browser-sidebar-${e.label.toLowerCase()}`,
				className: n("flex items-center gap-2 w-full px-2 py-1 rounded text-sm cursor-pointer", t ? "bg-tertiary text-white" : "text-[var(--oh-text-tertiary)] hover:bg-[var(--oh-surface-raised)]"),
				children: [/* @__PURE__ */ _(u, {
					width: 14,
					height: 14,
					className: "shrink-0"
				}), /* @__PURE__ */ _("span", {
					className: "truncate",
					children: e.label
				})]
			}) }, e.path);
		}) })]
	});
}
function x(e) {
	let t = C(e);
	if (!t || t === "/" || S(t)) return null;
	let n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
	if (n < 0) return null;
	if (n === 0) return "/";
	let r = t.slice(0, n);
	return /^[A-Za-z]:$/.test(r) ? `${r}${t[n]}` : r;
}
function S(e) {
	return /^[A-Za-z]:[\\/]?$/.test(e);
}
function C(e) {
	let t = e.replace(/[\\/]+$/, "");
	return /^[A-Za-z]:$/.test(t) ? `${t}${e.includes("/") && !e.includes("\\") ? "/" : "\\"}` : t;
}
function w(e) {
	return e?.home === "/home/openhands";
}
function T({ isOpen: T, onClose: E, onAdd: D, onAddParent: O }) {
	let { t: k } = e("openhands"), [A, j] = g(null), M = r(), { data: N } = d();
	m(() => {
		T && N?.home && A === null && j(w(N) ? y : N.home), T || j(null);
	}, [
		T,
		N?.home,
		A
	]), m(() => {
		j(null);
	}, [M.backend.id, M.orgId]);
	let { data: P, isLoading: F, isError: I, error: L } = f(T ? A : null), R = h(() => {
		if (!N?.home) return [];
		let e = [{
			label: "Home",
			path: C(N.home) || N.home
		}, ...N.favorites ?? []];
		return w(N) && !e.some((e) => e.path === y) && e.push({
			label: y,
			path: y
		}), e;
	}, [N]), z = N?.locations ?? [];
	if (!T) return null;
	let B = P?.items ?? [], V = A ? x(A) : null, H = N?.home === "/home/openhands" && (N?.favorites?.length ?? 0) === 0 && A === N?.home && !F && !I && B.length === 0, U = (e) => {
		let t = C(e);
		if (!t) return "/";
		if (t === "/" || S(t)) return t;
		let n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
		return n >= 0 && t.slice(n + 1) || t;
	};
	return /* @__PURE__ */ _(i, {
		onClose: E,
		"aria-label": k(t.HOME$ADD_WORKSPACES_TITLE),
		children: /* @__PURE__ */ v("div", {
			"data-testid": "folder-browser-modal",
			className: n("flex flex-col bg-[var(--oh-surface)] border border-[var(--oh-border-input)] rounded-xl", o("xl"), a, "h-[480px]"),
			children: [
				/* @__PURE__ */ _("div", {
					className: "flex items-center justify-between px-5 py-3 border-b border-[var(--oh-border-input)]",
					children: /* @__PURE__ */ _(c, {
						className: s,
						title: k(t.HOME$ADD_WORKSPACES_TITLE)
					})
				}),
				/* @__PURE__ */ v("div", {
					className: "flex flex-1 min-h-0",
					children: [/* @__PURE__ */ v("aside", {
						"data-testid": "folder-browser-sidebar",
						className: "w-[180px] shrink-0 border-r border-[var(--oh-border-input)] bg-[var(--oh-surface)] py-3 overflow-y-auto",
						children: [/* @__PURE__ */ _(b, {
							label: k(t.HOME$FAVORITES),
							entries: R,
							currentPath: A,
							onPick: j
						}), /* @__PURE__ */ _(b, {
							label: k(t.HOME$LOCATIONS),
							entries: z,
							currentPath: A,
							onPick: j
						})]
					}), /* @__PURE__ */ v("div", {
						className: "flex-1 flex flex-col min-w-0",
						children: [
							/* @__PURE__ */ v("div", {
								className: "flex items-center gap-2 px-4 py-2 border-b border-[var(--oh-border-input)]",
								children: [/* @__PURE__ */ _("button", {
									type: "button",
									"data-testid": "folder-browser-up",
									onClick: () => V && j(V),
									disabled: !V,
									"aria-label": k(t.COMMON$UP),
									className: "p-1 rounded hover:bg-[var(--oh-interactive-hover)] text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",
									children: /* @__PURE__ */ _(p, {
										width: 16,
										height: 16
									})
								}), /* @__PURE__ */ _("span", {
									className: "text-xs text-[var(--oh-muted)] truncate",
									"data-testid": "folder-browser-current-path",
									children: A ?? ""
								})]
							}),
							/* @__PURE__ */ v("div", {
								className: "grid grid-cols-[1fr_120px] px-4 py-1 border-b border-[var(--oh-border-input)] text-xs text-[var(--oh-text-secondary)] font-semibold",
								children: [/* @__PURE__ */ _("span", { children: k(t.HOME$NAME) }), /* @__PURE__ */ _("span", { children: k(t.HOME$KIND) })]
							}),
							/* @__PURE__ */ v("ul", {
								className: "flex-1 overflow-auto custom-scrollbar-always",
								"data-testid": "folder-browser-list",
								children: [
									F && /* @__PURE__ */ _("li", {
										className: "px-4 py-2 text-sm text-[var(--oh-text-secondary)]",
										children: k(t.HOME$LOADING)
									}),
									I && /* @__PURE__ */ _("li", {
										className: "px-4 py-2 text-sm text-red-400",
										"data-testid": "folder-browser-error",
										children: L?.message ?? k(t.COMMON$FAILED_TO_LOAD)
									}),
									!F && !I && B.length === 0 && /* @__PURE__ */ _("li", {
										className: "px-4 py-2 text-sm text-[var(--oh-text-secondary)]",
										"data-testid": H ? "folder-browser-host-home-hint" : "folder-browser-empty",
										children: k(H ? t.HOME$HOST_HOME_NOT_MOUNTED_HINT : t.HOME$NO_WORKSPACES)
									}),
									B.map((e) => /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("button", {
										type: "button",
										onClick: () => j(e.path),
										className: "grid grid-cols-[1fr_120px] items-center w-full text-left px-4 py-1.5 text-sm text-white hover:bg-[var(--oh-interactive-hover)] cursor-pointer",
										"data-testid": `folder-browser-entry-${e.name}`,
										children: [/* @__PURE__ */ v("span", {
											className: "flex items-center gap-2 min-w-0",
											children: [/* @__PURE__ */ _(u, {
												width: 16,
												height: 16,
												className: "shrink-0"
											}), /* @__PURE__ */ _("span", {
												className: "truncate",
												children: e.name
											})]
										}), /* @__PURE__ */ _("span", {
											className: "text-[var(--oh-text-secondary)] text-xs",
											children: k(t.HOME$FOLDER)
										})]
									}) }, e.path))
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ v("div", {
					className: "flex items-center justify-end gap-2 px-5 py-3 border-t border-[var(--oh-border-input)]",
					children: [
						/* @__PURE__ */ _(l, {
							type: "button",
							variant: "secondary",
							onClick: E,
							testId: "folder-browser-cancel",
							children: k(t.HOME$CANCEL)
						}),
						O && /* @__PURE__ */ _(l, {
							type: "button",
							variant: "secondary",
							onClick: () => {
								!A || !O || (O([{
									id: A,
									name: U(A),
									path: A
								}]), E());
							},
							isDisabled: !A || F,
							testId: "folder-browser-add-all-subdirs",
							children: k(t.HOME$ADD_ALL_SUBDIRECTORIES)
						}),
						/* @__PURE__ */ _(l, {
							type: "button",
							variant: "primary",
							onClick: () => {
								A && (D([{
									id: A,
									name: U(A),
									path: A
								}]), E());
							},
							isDisabled: !A || F,
							testId: "folder-browser-use",
							children: k(t.HOME$ADD_THIS_DIRECTORY)
						})
					]
				})
			]
		})
	});
}
//#endregion
export { T as FolderBrowserModal };

//# sourceMappingURL=folder-browser-modal.js.map
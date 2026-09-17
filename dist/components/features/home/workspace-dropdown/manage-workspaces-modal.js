import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { ModalBackdrop as r } from "../../../shared/modals/modal-backdrop.js";
import { MODAL_MAX_WIDTH_VIEWPORT as i, modalWidthClassName as a } from "../../../shared/modals/modal-body.js";
import { modalTitleSmClassName as o } from "../../../../utils/modal-classes.js";
import { BaseModalTitle as s } from "../../../shared/modals/confirmation-modals/base-modal.js";
import { BrandButton as c } from "../../settings/brand-button.js";
import l from "../../../../icons/close.js";
import u from "../../../../icons/folder.js";
import { ConfirmationModal as d } from "../../../shared/modals/confirmation-modal.js";
import f from "react";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/features/home/workspace-dropdown/manage-workspaces-modal.tsx
function g({ isOpen: g, workspaces: _, workspaceParents: v = [], onClose: y, onRemove: b, onRemoveParent: x }) {
	let { t: S } = e("openhands"), [C, w] = f.useState(null);
	if (!g) return null;
	let T = _.filter((e) => !e.parentPath), E = /* @__PURE__ */ new Map();
	_.forEach((e) => {
		if (!e.parentPath) return;
		let t = E.get(e.parentPath) ?? [];
		t.push(e), E.set(e.parentPath, t);
	});
	let D = T.length > 0 || v.length > 0;
	return /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(r, {
		onClose: y,
		"aria-label": S(t.HOME$MANAGE_WORKSPACES),
		children: /* @__PURE__ */ h("div", {
			"data-testid": "manage-workspaces-modal",
			className: n("flex flex-col bg-[var(--oh-surface)] border border-[var(--oh-border-input)] rounded-xl", a("lg"), i, "max-h-[70vh]"),
			children: [
				/* @__PURE__ */ m("div", {
					className: "flex items-center justify-between px-5 py-3 border-b border-[var(--oh-border-input)]",
					children: /* @__PURE__ */ m(s, {
						className: o,
						title: S(t.HOME$MANAGE_WORKSPACES)
					})
				}),
				/* @__PURE__ */ h("div", {
					className: "flex-1 overflow-auto custom-scrollbar-always",
					"data-testid": "manage-workspaces-list",
					children: [
						!D && /* @__PURE__ */ m("p", {
							className: "px-5 py-6 text-sm text-[var(--oh-text-secondary)] text-center",
							children: S(t.HOME$MANAGE_WORKSPACES_EMPTY)
						}),
						T.length > 0 && /* @__PURE__ */ m("ul", { children: T.map((e) => /* @__PURE__ */ h("li", {
							className: "flex items-center gap-3 px-5 py-2 border-b border-[var(--oh-border-subtle)] last:border-b-0",
							"data-testid": `manage-workspaces-row-${e.name}`,
							children: [
								/* @__PURE__ */ m(u, {
									width: 16,
									height: 16,
									className: "shrink-0"
								}),
								/* @__PURE__ */ h("div", {
									className: "flex flex-col min-w-0 flex-1",
									children: [/* @__PURE__ */ m("span", {
										className: "text-sm text-white truncate",
										children: e.name
									}), /* @__PURE__ */ m("span", {
										className: "text-xs text-[var(--oh-muted)] truncate",
										children: e.path
									})]
								}),
								/* @__PURE__ */ h("button", {
									type: "button",
									onClick: () => w({
										type: "workspace",
										path: e.path,
										text: S(t.HOME$REMOVE_WORKSPACE_CONFIRMATION, { name: e.name })
									}),
									"aria-label": S(t.HOME$REMOVE_WORKSPACE),
									"data-testid": `manage-workspaces-remove-${e.name}`,
									className: "flex items-center gap-1 px-2 py-1 rounded text-xs text-[var(--oh-text-tertiary)] hover:bg-[var(--oh-interactive-hover)] hover:text-white cursor-pointer",
									children: [/* @__PURE__ */ m(l, {
										width: 12,
										height: 12
									}), /* @__PURE__ */ m("span", { children: S(t.HOME$REMOVE_WORKSPACE) })]
								})
							]
						}, e.id)) }),
						v.length > 0 && /* @__PURE__ */ h("div", {
							"data-testid": "manage-workspaces-parents-section",
							children: [/* @__PURE__ */ m("div", {
								className: "px-5 pt-3 pb-1 text-[11px] uppercase tracking-wide text-[var(--oh-muted)] font-semibold",
								children: S(t.HOME$WORKSPACE_PARENTS)
							}), /* @__PURE__ */ m("ul", { children: v.map((e) => {
								let n = E.get(e.path) ?? [];
								return /* @__PURE__ */ h("li", {
									className: "border-b border-[var(--oh-border-subtle)] last:border-b-0",
									"data-testid": `manage-workspaces-parent-row-${e.name}`,
									children: [/* @__PURE__ */ h("div", {
										className: "flex items-center gap-3 px-5 py-2",
										children: [
											/* @__PURE__ */ m(u, {
												width: 16,
												height: 16,
												className: "shrink-0"
											}),
											/* @__PURE__ */ h("div", {
												className: "flex flex-col min-w-0 flex-1",
												children: [/* @__PURE__ */ m("span", {
													className: "text-sm text-white truncate",
													children: e.name
												}), /* @__PURE__ */ m("span", {
													className: "text-xs text-[var(--oh-muted)] truncate",
													children: e.path
												})]
											}),
											x && /* @__PURE__ */ h("button", {
												type: "button",
												onClick: () => w({
													type: "parent",
													path: e.path,
													text: S(t.HOME$REMOVE_WORKSPACE_PARENT_CONFIRMATION, {
														name: e.name,
														count: n.length
													})
												}),
												"aria-label": S(t.HOME$REMOVE_WORKSPACE_PARENT),
												"data-testid": `manage-workspaces-remove-parent-${e.name}`,
												className: "flex items-center gap-1 px-2 py-1 rounded text-xs text-[var(--oh-text-tertiary)] hover:bg-[var(--oh-interactive-hover)] hover:text-white cursor-pointer",
												children: [/* @__PURE__ */ m(l, {
													width: 12,
													height: 12
												}), /* @__PURE__ */ m("span", { children: S(t.HOME$REMOVE_WORKSPACE_PARENT) })]
											})
										]
									}), n.length > 0 && /* @__PURE__ */ m("ul", {
										className: "pb-2",
										children: n.map((e) => /* @__PURE__ */ h("li", {
											className: "flex items-center gap-3 px-5 pl-10 py-1 text-xs text-[var(--oh-text-secondary)]",
											"data-testid": `manage-workspaces-child-${e.name}`,
											children: [/* @__PURE__ */ m(u, {
												width: 12,
												height: 12,
												className: "shrink-0 opacity-70"
											}), /* @__PURE__ */ m("span", {
												className: "truncate",
												children: e.name
											})]
										}, e.id))
									})]
								}, e.id);
							}) })]
						})
					]
				}),
				/* @__PURE__ */ m("div", {
					className: "flex justify-end gap-2 px-5 py-3 border-t border-[var(--oh-border-input)]",
					children: /* @__PURE__ */ m(c, {
						type: "button",
						variant: "primary",
						onClick: y,
						testId: "manage-workspaces-done",
						children: S(t.HOME$DONE)
					})
				})
			]
		})
	}), C && /* @__PURE__ */ m(d, {
		text: C.text,
		onConfirm: () => {
			C && (C.type === "workspace" ? b(C.path) : x?.(C.path), w(null));
		},
		onCancel: () => w(null)
	})] });
}
//#endregion
export { g as ManageWorkspacesModal };

//# sourceMappingURL=manage-workspaces-modal.js.map
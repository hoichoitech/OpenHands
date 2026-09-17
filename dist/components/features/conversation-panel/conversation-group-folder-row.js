import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { FolderOpen as n } from "../../../node_modules/lucide-react/dist/esm/icons/folder-open.js";
import { Folder as r } from "../../../node_modules/lucide-react/dist/esm/icons/folder.js";
import { Plus as i } from "../../../node_modules/lucide-react/dist/esm/icons/plus.js";
import { cn as a } from "../../../utils/utils.js";
import { motion as o } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { getGroupConversationPreview as s } from "./conversation-panel-list-helpers.js";
import { useRef as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-group-folder-row.tsx
function d({ group: d, expanded: f, previewExpanded: p, isDragging: m, dropIndicatorPosition: h, animateLayout: g, isCreatingConversationFlow: _, activeConversationId: v, discoveryConversationIds: y, onToggleExpanded: b, onDragStart: x, onDragEnd: S, onDragOver: C, onDragLeave: w, onDrop: T, onTogglePreviewExpanded: E, onLaunchFromGroup: D, renderConversationCard: O }) {
	let { t: k } = e("openhands"), A = c(null), j = `thread-folder-${d.id.replace(/[^a-zA-Z0-9_-]/g, "-")}`, M = d.id.replace(/[^a-zA-Z0-9_-]/g, "-"), { visibleConversations: N, isPreviewTruncated: P, isShowingAll: F } = s(d.conversations, {
		expanded: p,
		activeConversationId: v,
		discoveryConversationIds: y ?? void 0
	});
	return /* @__PURE__ */ u(o.section, {
		ref: A,
		layout: g ? "position" : !1,
		transition: {
			type: "spring",
			stiffness: 600,
			damping: 45
		},
		"aria-labelledby": j,
		"data-testid": `thread-folder-${M}`,
		onDragOver: C,
		onDragLeave: w,
		onDrop: T,
		className: "relative rounded-md",
		children: [h ? /* @__PURE__ */ l("div", {
			"aria-hidden": !0,
			"data-testid": `thread-folder-drop-indicator-${M}`,
			className: a("pointer-events-none absolute inset-x-0 z-10 h-0.5 rounded-full bg-[var(--oh-accent)]", h === "before" ? "-top-0.5" : "-bottom-0.5")
		}) : null, /* @__PURE__ */ u("div", {
			className: a(m && "opacity-0"),
			children: [/* @__PURE__ */ u("div", {
				className: a("flex h-8 w-full min-w-0 items-center gap-0.5 rounded-md pl-2 pr-1 text-sm font-normal", "text-[var(--oh-muted)] transition-colors hover:bg-[var(--oh-surface-raised)] hover:text-white"),
				children: [/* @__PURE__ */ u("button", {
					type: "button",
					draggable: !0,
					id: j,
					"aria-expanded": f,
					"aria-controls": `thread-folder-content-${M}`,
					"data-testid": `thread-folder-drag-${M}`,
					"aria-label": k(f ? t.CONVERSATION_PANEL$COLLAPSE_FOLDER : t.CONVERSATION_PANEL$EXPAND_FOLDER, { label: d.label }),
					onClick: b,
					onDragStart: (e) => {
						e.stopPropagation();
						let { dataTransfer: t } = e;
						if (t) {
							t.effectAllowed = "move", t.setData("text/plain", d.id);
							let n = A.current;
							if (n && typeof t.setDragImage == "function") {
								let r = n.getBoundingClientRect(), i = n.cloneNode(!0);
								i.style.position = "fixed", i.style.top = "0", i.style.left = "-9999px", i.style.width = `${r.width}px`, i.style.margin = "0", i.style.pointerEvents = "none", i.style.borderRadius = "0.5rem", i.style.padding = "0.25rem", i.style.backgroundColor = "var(--oh-surface-raised)", i.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.35)", document.body.appendChild(i), t.setDragImage(i, e.clientX - r.left, e.clientY - r.top), window.setTimeout(() => i.remove(), 0);
							}
						}
						x();
					},
					onDragEnd: (e) => {
						e.stopPropagation(), S();
					},
					className: a("group/folder flex min-h-8 min-w-0 flex-1 cursor-grab items-center gap-2 rounded-md py-1 text-left text-inherit outline-none active:cursor-grabbing", "focus-visible:ring-1 focus-visible:ring-[var(--oh-border)]"),
					children: [
						/* @__PURE__ */ l(r, {
							className: a("h-4 w-4 shrink-0", f ? "hidden group-hover/folder:block" : "block group-hover/folder:hidden"),
							"aria-hidden": !0
						}),
						/* @__PURE__ */ l(n, {
							className: a("h-4 w-4 shrink-0", f ? "block group-hover/folder:hidden" : "hidden group-hover/folder:block"),
							"aria-hidden": !0
						}),
						/* @__PURE__ */ l("span", {
							className: "truncate",
							children: d.label
						})
					]
				}), /* @__PURE__ */ l("button", {
					type: "button",
					className: a("inline-flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md", "text-inherit transition-colors", "hover:bg-white/10 hover:text-white", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--oh-border)]", "disabled:cursor-not-allowed disabled:opacity-50"),
					disabled: _,
					"aria-label": k(t.CONVERSATION_PANEL$ADD_CONVERSATION_TO_GROUP, { label: d.label }),
					"data-testid": `add-conversation-to-group-${M}`,
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), D();
					},
					children: /* @__PURE__ */ l(i, {
						className: "h-3.5 w-3.5 shrink-0",
						"aria-hidden": !0,
						strokeWidth: 2
					})
				})]
			}), f ? /* @__PURE__ */ u("div", {
				id: `thread-folder-content-${M}`,
				className: "mt-0.5 space-y-0.5",
				children: [N.map(O), P ? /* @__PURE__ */ l("div", {
					className: "pl-2",
					children: /* @__PURE__ */ l("button", {
						type: "button",
						"data-testid": `thread-folder-view-more-${M}`,
						onClick: E,
						className: "cursor-pointer text-xs text-[var(--oh-text-dim)] hover:text-white",
						children: k(F ? t.CONVERSATION_PANEL$LESS : t.CONVERSATION_PANEL$MORE)
					})
				}) : null]
			}) : null]
		})]
	});
}
//#endregion
export { d as ConversationGroupFolderRow };

//# sourceMappingURL=conversation-group-folder-row.js.map
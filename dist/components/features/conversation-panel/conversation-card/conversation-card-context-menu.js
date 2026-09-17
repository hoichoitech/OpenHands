import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { ArchiveRestore as n } from "../../../../node_modules/lucide-react/dist/esm/icons/archive-restore.js";
import { Archive as r } from "../../../../node_modules/lucide-react/dist/esm/icons/archive.js";
import { Gauge as i } from "../../../../node_modules/lucide-react/dist/esm/icons/gauge.js";
import { Tags as a } from "../../../../node_modules/lucide-react/dist/esm/icons/tags.js";
import { useActiveBackend as o } from "../../../../contexts/active-backend-context.js";
import s from "../../../../icons/u-close.js";
import { ContextMenu as c } from "../../../../ui/context-menu.js";
import { ContextMenuListItem as l } from "../../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as u } from "../../../../hooks/use-click-outside-element.js";
import { Divider as d } from "../../../../ui/divider.js";
import f from "../../../../icons/skills.js";
import p from "../../../../icons/u-tools.js";
import { ConversationNameContextMenuIconText as m } from "../../conversation/conversation-name-context-menu-icon-text.js";
import h from "../../../../icons/u-edit.js";
import g from "../../../../icons/u-download.js";
import _ from "../../../../icons/u-delete.js";
import v, { useCallback as y } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-card-context-menu.tsx
function S({ onClose: S, onDelete: C, onArchive: w, onUnarchive: T, onStop: E, onEdit: D, onEditTags: O, onDisplayCost: k, onShowAgentTools: A, onShowSkills: j, onDownloadViaVSCode: M, onDownloadConversation: N, position: P = "bottom", floatingStyle: F, ignoreOutsideClickRef: I }) {
	let { t: L } = e("openhands"), { backend: R } = o(), z = u(S, I), B = R.kind === "cloud" ? t.COMMON$CLOSE_CONVERSATION_STOP_RUNTIME : t.COMMON$STOP_CONVERSATION, V = y((e, t, n) => {
		let r = e.filter((e) => e != null);
		return r.length > 0 ? n ? /* @__PURE__ */ b(v.Fragment, { children: r }, t) : /* @__PURE__ */ x(v.Fragment, { children: [r, /* @__PURE__ */ b(d, { inset: "menu" })] }, t) : null;
	}, []), H = F != null;
	return /* @__PURE__ */ x(c, {
		ref: z,
		testId: "context-menu",
		style: H ? F : void 0,
		theme: H ? "popover" : "default",
		position: H ? "none" : P,
		alignment: H ? "none" : "right",
		spacing: H ? "none" : "default",
		className: H ? "mt-0 min-w-[200px] w-max max-w-[min(280px,100vw-16px)]" : "z-[200] mt-0",
		children: [
			V([D && /* @__PURE__ */ b(l, {
				testId: "edit-button",
				onClick: D,
				children: /* @__PURE__ */ b(m, {
					icon: /* @__PURE__ */ b(h, {
						width: 16,
						height: 16
					}),
					text: L(t.BUTTON$RENAME)
				})
			}, "edit-button"), O && /* @__PURE__ */ b(l, {
				testId: "edit-tags-button",
				onClick: O,
				children: /* @__PURE__ */ b(m, {
					icon: /* @__PURE__ */ b(a, {
						className: "h-4 w-4",
						"aria-hidden": !0
					}),
					text: L(t.CONVERSATION$EDIT_TAGS)
				})
			}, "edit-tags-button")], "edit-section"),
			V([A && /* @__PURE__ */ b(l, {
				testId: "show-agent-tools-button",
				onClick: A,
				children: /* @__PURE__ */ b(m, {
					icon: /* @__PURE__ */ b(p, {
						width: 16,
						height: 16
					}),
					text: L(t.BUTTON$SHOW_AGENT_TOOLS_AND_METADATA)
				})
			}, "show-agent-tools-button"), j && /* @__PURE__ */ b(l, {
				testId: "show-skills-button",
				onClick: j,
				children: /* @__PURE__ */ b(m, {
					icon: /* @__PURE__ */ b(f, {
						width: 16,
						height: 16,
						className: "stroke-[1.75]",
						"aria-hidden": !0
					}),
					text: L(t.CONVERSATION$SHOW_SKILLS)
				})
			}, "show-skills-button")], "tools-section"),
			V([
				E && /* @__PURE__ */ b(l, {
					testId: "stop-button",
					onClick: E,
					children: /* @__PURE__ */ b(m, {
						icon: /* @__PURE__ */ b(s, {
							width: 16,
							height: 16
						}),
						text: L(B)
					})
				}, "stop-button"),
				M && /* @__PURE__ */ b(l, {
					testId: "download-vscode-button",
					onClick: M,
					children: /* @__PURE__ */ b(m, {
						icon: /* @__PURE__ */ b(g, {
							width: 16,
							height: 16
						}),
						text: L(t.BUTTON$DOWNLOAD_VIA_VSCODE)
					})
				}, "download-vscode-button"),
				N && /* @__PURE__ */ b(l, {
					testId: "download-trajectory-button",
					onClick: N,
					children: /* @__PURE__ */ b(m, {
						icon: /* @__PURE__ */ b(g, {
							width: 16,
							height: 16
						}),
						text: L(t.BUTTON$DOWNLOAD_CONVERSATION_DATA)
					})
				}, "download-trajectory-button")
			], "control-section"),
			V([
				k && /* @__PURE__ */ b(l, {
					testId: "display-cost-button",
					onClick: k,
					children: /* @__PURE__ */ b(m, {
						icon: /* @__PURE__ */ b(i, { size: 16 }),
						text: L(t.BUTTON$DISPLAY_COST)
					})
				}, "display-cost-button"),
				w && /* @__PURE__ */ b(l, {
					testId: "archive-button",
					onClick: w,
					children: /* @__PURE__ */ b(m, {
						icon: /* @__PURE__ */ b(r, {
							className: "h-4 w-4",
							"aria-hidden": !0
						}),
						text: L(t.COMMON$ARCHIVE_CONVERSATION)
					})
				}, "archive-button"),
				T && /* @__PURE__ */ b(l, {
					testId: "unarchive-button",
					onClick: T,
					children: /* @__PURE__ */ b(m, {
						icon: /* @__PURE__ */ b(n, {
							className: "h-4 w-4",
							"aria-hidden": !0
						}),
						text: L(t.COMMON$UNARCHIVE_CONVERSATION)
					})
				}, "unarchive-button"),
				C && /* @__PURE__ */ b(l, {
					testId: "delete-button",
					onClick: C,
					children: /* @__PURE__ */ b(m, {
						icon: /* @__PURE__ */ b(_, {
							width: 16,
							height: 16
						}),
						text: L(t.COMMON$DELETE_CONVERSATION)
					})
				}, "delete-button")
			], "info-section", !0)
		]
	});
}
//#endregion
export { S as ConversationCardContextMenu };

//# sourceMappingURL=conversation-card-context-menu.js.map
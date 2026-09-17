import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { useOptionalConversationId as n } from "../hooks/use-conversation-id.js";
import { getConversationState as r, useConversationLocalStorageState as i } from "../utils/conversation-local-storage.js";
import { useQueryClient as a } from "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useFilesTabStore as o } from "../stores/files-tab-store.js";
import { useActiveConversation as s } from "../hooks/query/use-active-conversation.js";
import c from "../icons/link-external.js";
import { useWorkspaceMutationCounter as l, withWorkspaceCacheBuster as u } from "../stores/use-workspace-mutation-counter.js";
import { useAutoRefreshFilesOnEdit as d } from "../hooks/use-auto-refresh-files-on-edit.js";
import { useWorkspaceFiles as f } from "../hooks/query/use-workspace-files.js";
import { ResizeHandle as p } from "../components/ui/resize-handle.js";
import { useResizableDrawerWidth as m } from "../hooks/use-resizable-drawer-width.js";
import { SegmentedToggle as ee } from "../components/features/files-tab/segmented-toggle.js";
import { NoFileSelectedMessage as h } from "../components/features/files-tab/no-file-selected-message.js";
import { useWorkspaceFileContent as g } from "../hooks/query/use-workspace-file-content.js";
import { FileQuickRow as _ } from "../components/features/files-tab/file-quick-row.js";
import { FileTreeView as v } from "../components/features/files-tab/file-tree-view.js";
import { FileContentViewer as y } from "../components/features/files-tab/file-content-viewer.js";
import { WorkspacePath as te } from "../components/features/files-tab/workspace-path.js";
import { FILES_TAB_TREE_WIDTH_STORAGE_KEY as ne } from "../components/features/files-tab/files-tab-tree.constants.js";
import re from "../icons/u-refresh.js";
import { useCallback as b, useEffect as ie, useMemo as x, useRef as S, useState as C } from "react";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
//#region src/routes/files-tab.tsx
function D() {
	let { t: D } = e("openhands");
	d();
	let { data: O } = s(), k = O?.workspace?.working_dir, { conversationId: A } = n(), { state: j, setFilesTabContentViewMode: M, setFilesTabTreeVisible: N } = i(A ?? ""), P = j.filesTabContentViewMode, F = j.filesTabTreeVisible ?? !0, ae = b(() => {
		N?.(!F);
	}, [F, N]), I = S(null), { drawerWidth: L, isDragging: R, handleMouseDown: z } = m({
		containerRef: I,
		defaultWidth: 224,
		minWidth: 160,
		maxWidth: 480,
		storageKey: ne,
		enabled: F,
		edge: "left"
	}), B = f(), V = x(() => B.data ?? [], [B.data]), H = o((e) => e.selectedPath), U = o((e) => e.selectedConversationId), W = o((e) => e.openPaths), G = o((e) => e.setSelectedPath), K = o((e) => e.closeOpenPath), q = o((e) => e.hydrateForConversation), J = U === A ? H : null, oe = U === A ? W : [], Y = b((e) => G(e, A), [A, G]), se = g(J), ce = l((e) => e.count), X = u(se.data?.staticUrl ?? null, ce);
	ie(() => {
		if (!A || U === A) return;
		let e = r(A);
		q(A, e.filesTabOpenPaths ?? [], e.filesTabSelectedPath ?? null);
	}, [
		A,
		U,
		q
	]);
	let Z = a(), [Q, $] = C(!1), le = /* @__PURE__ */ T("button", {
		type: "button",
		onClick: async () => {
			$(!0);
			try {
				await Promise.all([Z.invalidateQueries({ queryKey: ["workspace-files"] }), Z.invalidateQueries({ queryKey: ["workspace-file-content"] })]);
			} finally {
				$(!1);
			}
		},
		disabled: Q,
		"aria-label": D(t.FILES$REFRESH),
		title: D(t.FILES$REFRESH),
		"data-testid": "files-tab-refresh",
		className: "flex items-center justify-center w-[26px] py-1 rounded-[7px] hover:enabled:bg-[var(--oh-interactive-hover)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
		children: /* @__PURE__ */ T(re, {
			width: 12.75,
			height: 15,
			color: "#ffffff",
			className: Q ? "animate-spin" : ""
		})
	});
	return /* @__PURE__ */ E("main", {
		className: "h-full w-full flex flex-col items-stretch",
		"data-testid": "files-tab",
		children: [/* @__PURE__ */ T(te, { path: k }), B.isLoading ? /* @__PURE__ */ T("div", {
			className: "flex flex-1 items-center justify-center text-sm text-[var(--oh-muted)]",
			children: D(t.FILES$LOADING_FILES)
		}) : /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(_, {
			openPaths: oe,
			selectedPath: J,
			onSelectFile: Y,
			onCloseFile: K,
			isTreeVisible: F,
			onToggleTree: ae,
			actions: le
		}), /* @__PURE__ */ E("div", {
			ref: I,
			className: "flex h-full min-h-0 flex-1",
			children: [F && /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("aside", {
				className: "shrink-0 border-r border-[var(--oh-border)] overflow-y-auto custom-scrollbar-always",
				"data-testid": "files-tab-tree",
				style: { width: `${L}px` },
				children: /* @__PURE__ */ T(v, {
					paths: V,
					selectedPath: J,
					onSelectFile: Y
				})
			}), /* @__PURE__ */ T(p, {
				testId: "files-tab-tree-resize-handle",
				onMouseDown: z,
				isDragging: R
			})] }), /* @__PURE__ */ T("section", {
				className: "flex h-full min-h-0 min-w-0 flex-1 flex-col",
				"data-testid": "files-tab-content",
				children: J ? /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ E("div", {
					className: "flex items-center gap-3 px-3 py-1.5 border-b border-[var(--oh-border)]",
					children: [/* @__PURE__ */ T(ee, {
						ariaLabel: D(t.FILES$RICH),
						testId: "files-tab-content-mode-toggle",
						value: P,
						options: [{
							value: "rich",
							label: D(t.FILES$RICH)
						}, {
							value: "plain",
							label: D(t.FILES$PLAIN)
						}],
						onChange: M
					}), X ? /* @__PURE__ */ T("a", {
						href: X,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": D(t.FILES$OPEN_IN_NEW_WINDOW),
						title: D(t.FILES$OPEN_IN_NEW_WINDOW),
						"data-testid": "files-tab-open-in-new-window",
						className: "ml-auto flex items-center justify-center w-[26px] py-1 rounded-[7px] hover:bg-[var(--oh-interactive-hover)] cursor-pointer text-white",
						children: /* @__PURE__ */ T(c, {
							width: 14,
							height: 14
						})
					}) : null]
				}), /* @__PURE__ */ T(y, {
					path: J,
					viewMode: P
				})] }) : /* @__PURE__ */ T(h, {})
			})]
		})] })]
	});
}
//#endregion
export { D as default };

//# sourceMappingURL=files-tab.js.map
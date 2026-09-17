import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { isExecutionActive as n, isExecutionPaused as r } from "../../../../utils/status.js";
import { cn as i } from "../../../../utils/utils.js";
import { EllipsisButton as a } from "../ellipsis-button.js";
import { ConversationCardContextMenu as o } from "./conversation-card-context-menu.js";
import { useLayoutEffect as s, useReducer as c, useRef as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { createPortal as p } from "react-dom";
//#region src/components/features/conversation-panel/conversation-card/conversation-card-actions.tsx
function m({ contextMenuOpen: m, onContextMenuToggle: h, onDelete: g, onArchive: _, onUnarchive: v, onStop: y, onEdit: b, onEditTags: x, onDownloadViaVSCode: S, onDownloadConversation: C, executionStatus: w, conversationId: T, showOptions: E }) {
	let { t: D } = e("openhands"), O = r(w), k = n(w), A = l(null), [, j] = c((e) => e + 1, 0);
	s(() => {
		if (!m) return;
		j();
		let e = 0, t = () => {
			e ||= window.requestAnimationFrame(() => {
				e = 0, j();
			});
		};
		return window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
			e && window.cancelAnimationFrame(e), window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0);
		};
	}, [m]);
	let M = (() => {
		if (!m || !A.current) return;
		let e = A.current.getBoundingClientRect(), t = Number(window.innerWidth) || 0, n = Number(window.innerHeight) || 0, r = Number(e.bottom) || 0, i = Number(e.right) || 0;
		return {
			position: "fixed",
			top: r + 320 + 8 > n ? Math.max(8, e.top - 320 - 4) : r + 4,
			right: Math.max(8, t - i),
			zIndex: 1e5
		};
	})(), N = typeof document < "u" ? document.body : null;
	return /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(a, {
		ref: A,
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), h(!m);
		},
		ariaLabel: D(t.COMMON$MORE_OPTIONS),
		className: i(O && "opacity-60")
	}), m && M && N ? p(/* @__PURE__ */ d(o, {
		ignoreOutsideClickRef: A,
		floatingStyle: M,
		onClose: () => h(!1),
		onDelete: g,
		onArchive: _,
		onUnarchive: v,
		onStop: k ? y : void 0,
		onEdit: b,
		onEditTags: x,
		onDownloadViaVSCode: T && E ? S : void 0,
		onDownloadConversation: T ? C : void 0,
		position: "bottom"
	}), N) : null] });
}
//#endregion
export { m as ConversationCardActions };

//# sourceMappingURL=conversation-card-actions.js.map
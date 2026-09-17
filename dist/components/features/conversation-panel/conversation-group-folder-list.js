import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { moveGroupFolderOrder as n } from "./conversation-panel-list-helpers.js";
import { ConversationGroupFolderRow as r } from "./conversation-group-folder-row.js";
import { useCallback as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-group-folder-list.tsx
function l({ groups: l, groupIds: u, groupFolderOrder: d, setGroupFolderOrder: f, collapsedGroupIds: p, expandedGroupPreviewIds: m, discoveryConversationIds: h, onToggleGroupCollapsed: g, onToggleGroupPreviewExpanded: _, isCreatingConversationFlow: v, activeConversationId: y, onLaunchFromGroup: b, renderConversationCard: x }) {
	let { t: S } = e("openhands"), [C, w] = s(null), [T, E] = s(null), [D, O] = s(null), [k, A] = s(!1), j = o(null);
	a(() => () => {
		j.current && clearTimeout(j.current);
	}, []);
	let M = i(() => {
		j.current && clearTimeout(j.current), j.current = setTimeout(() => {
			A(!1), j.current = null;
		}, 300);
	}, []), N = i(() => {
		w(null), E(null), O(null);
	}, []), P = i((e) => {
		let t = e.currentTarget.getBoundingClientRect();
		return e.clientY < t.top + t.height / 2 ? "before" : "after";
	}, []), F = i((e, t) => {
		if (!C || C === e) {
			N(), M();
			return;
		}
		f(n(d, u, C, e, t)), N(), M();
	}, [
		C,
		d,
		u,
		N,
		f,
		M
	]);
	return /* @__PURE__ */ c("nav", {
		"aria-label": S(t.SIDEBAR$CONVERSATIONS),
		className: "space-y-1 md:space-y-0.5 pb-1",
		children: l.map((e) => /* @__PURE__ */ c(r, {
			group: e,
			expanded: !p.has(e.id),
			previewExpanded: m.has(e.id),
			isDragging: C === e.id,
			dropIndicatorPosition: T === e.id && C !== e.id ? D : null,
			animateLayout: k,
			isCreatingConversationFlow: v,
			activeConversationId: y,
			discoveryConversationIds: h,
			onToggleExpanded: () => g(e.id),
			onDragStart: () => {
				A(!0), w(e.id);
			},
			onDragEnd: () => {
				N(), M();
			},
			onDragOver: (t) => {
				t.preventDefault();
				let { dataTransfer: n } = t;
				n && (n.dropEffect = "move"), E(e.id), O(P(t));
			},
			onDragLeave: () => {
				E((t) => t === e.id ? null : t);
			},
			onDrop: (t) => {
				t.preventDefault(), F(e.id, P(t));
			},
			onTogglePreviewExpanded: () => _(e.id),
			onLaunchFromGroup: () => b(e.launch),
			renderConversationCard: x
		}, e.id))
	});
}
//#endregion
export { l as ConversationGroupFolderList };

//# sourceMappingURL=conversation-group-folder-list.js.map
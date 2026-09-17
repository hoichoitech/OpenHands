import { useConversationStore as e } from "../stores/conversation-store.js";
import { useEffect as t } from "react";
var n = null;
function r() {
	n !== null && (clearTimeout(n), n = null);
}
function i() {
	let { isRightPanelShown: t, isOverviewPanelShown: n, setIsOverviewPanelPeeked: i } = e.getState();
	!t || n || (r(), i(!0));
}
function a() {
	r(), n = setTimeout(() => {
		n = null, e.getState().setIsOverviewPanelPeeked(!1);
	}, 150);
}
function o() {
	r(), e.getState().setIsOverviewPanelPeeked(!1);
}
function s() {
	let n = e((e) => e.isRightPanelShown), r = e((e) => e.isOverviewPanelShown), i = e((e) => e.isOverviewPanelPeeked);
	t(() => {
		i && (!n || r) && o();
	}, [
		i,
		r,
		n
	]);
}
//#endregion
export { i as openConversationOverviewPanelPeek, a as scheduleCloseConversationOverviewPanelPeek, s as useSyncConversationOverviewPanelPeek };

//# sourceMappingURL=use-conversation-overview-panel-peek.js.map
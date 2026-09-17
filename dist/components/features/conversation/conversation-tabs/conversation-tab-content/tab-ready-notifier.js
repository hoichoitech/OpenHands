import { useLayoutEffect as e } from "react";
//#region src/components/features/conversation/conversation-tabs/conversation-tab-content/tab-ready-notifier.tsx
function t({ children: t, onReady: n }) {
	return e(() => {
		n();
	}, [n]), t;
}
//#endregion
export { t as TabReadyNotifier };

//# sourceMappingURL=tab-ready-notifier.js.map
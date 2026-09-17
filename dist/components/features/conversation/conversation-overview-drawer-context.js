import { createContext as e, useCallback as t, useContext as n, useMemo as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-drawer-context.tsx
var o = e(null);
function s({ children: e }) {
	let [n, s] = i(null), [c, l] = i(!1), [u, d] = i(0), f = t((e, t) => {
		s(e), l(!!t?.openAdd), d(0);
	}, []), p = t(() => {
		s(null), l(!1), d(0);
	}, []), m = t(() => {
		d((e) => e + 1);
	}, []), h = r(() => ({
		section: n,
		openAdd: c,
		addRequestKey: u,
		openSection: f,
		closeDrawer: p,
		requestAdd: m
	}), [
		u,
		p,
		c,
		f,
		m,
		n
	]);
	return /* @__PURE__ */ a(o.Provider, {
		value: h,
		children: e
	});
}
function c() {
	let e = n(o);
	if (!e) throw Error("useConversationOverviewDrawer must be used within ConversationOverviewDrawerProvider");
	return e;
}
function l() {
	return n(o);
}
//#endregion
export { s as ConversationOverviewDrawerProvider, c as useConversationOverviewDrawer, l as useConversationOverviewDrawerOptional };

//# sourceMappingURL=conversation-overview-drawer-context.js.map
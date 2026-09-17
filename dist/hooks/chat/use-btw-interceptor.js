import { BTW_COMMAND as e } from "../../utils/constants.js";
import { askAgent as t } from "../mutation/conversation-mutation-utils.js";
import { useBtwStore as n } from "../../stores/btw-store.js";
import { useCallback as r } from "react";
//#region src/hooks/chat/use-btw-interceptor.ts
var i = `${e} `, a = (a, o) => {
	let s = n((e) => e.addPending), c = n((e) => e.resolve), l = n((e) => e.fail);
	return r((n) => {
		let r = n.trim(), u = r === "/btw" || r.startsWith(i);
		if (!a || !u) {
			o(n);
			return;
		}
		let d = r.slice(e.length).trim();
		if (!d) return;
		let f = s(a, d);
		t(a, d).then(({ response: e }) => c(a, f, e)).catch((e) => l(a, f, e?.message ?? "Failed to ask agent"));
	}, [
		a,
		o,
		s,
		c,
		l
	]);
};
//#endregion
export { a as useBtwInterceptor };

//# sourceMappingURL=use-btw-interceptor.js.map
import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { GOAL_COMMAND as n } from "../../utils/constants.js";
import { displayErrorToast as r } from "../../utils/custom-toast-handlers.js";
import { startGoal as i } from "../mutation/conversation-mutation-utils.js";
import { useCallback as a } from "react";
//#region src/hooks/chat/use-goal-interceptor.ts
var o = `${n} `, s = /^--max(?:=|\s+)(\d+)\s*/, c = (c, l) => {
	let { t: u } = e();
	return a((e) => {
		let a = e.trim(), d = a === "/goal" || a.startsWith(o);
		if (!c || !d) {
			l(e);
			return;
		}
		let f = a.slice(n.length).trim(), p, m = f.match(s);
		m && (p = parseInt(m[1], 10), f = f.slice(m[0].length).trim());
		let h = f;
		if (!h) {
			r(u(t.GOAL$OBJECTIVE_REQUIRED));
			return;
		}
		let g = { objective: h };
		p && p >= 1 && (g.max_iterations = p), i(c, g).catch((e) => {
			let n = u(t.GOAL$START_FAILED);
			r(e instanceof Error && e.message ? e.message : n);
		});
	}, [
		c,
		l,
		u
	]);
};
//#endregion
export { c as useGoalInterceptor };

//# sourceMappingURL=use-goal-interceptor.js.map
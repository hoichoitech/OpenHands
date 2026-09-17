import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { MODEL_COMMAND as n } from "../../utils/constants.js";
import { LLM_PROFILES_QUERY_KEYS as r } from "../query/query-keys.js";
import { useQueryClient as i } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { displayErrorToast as a } from "../../utils/custom-toast-handlers.js";
import { useActiveBackend as o } from "../../contexts/active-backend-context.js";
import s from "../../api/profiles-service/profiles-service.api.js";
import { useModelStore as c } from "../../stores/model-store.js";
import { getLastRenderableEventId as l } from "./model-command-event-anchor.js";
import { useSwitchLlmProfileAndLog as u } from "../mutation/use-switch-llm-profile-and-log.js";
import { useCallback as d } from "react";
//#region src/hooks/chat/use-model-interceptor.ts
var f = `${n} `, p = (p, m) => {
	let h = c((e) => e.show), g = i(), { switchAndLog: _ } = u(), { backend: v, orgId: y } = o(), { t: b } = e();
	return d((e) => {
		let i = e.trim();
		if (!(i === "/model" || i.startsWith(f))) {
			m(e);
			return;
		}
		let o = i.slice(n.length).trim();
		if (o) {
			_(p ?? null, o);
			return;
		}
		if (!p) return;
		let c = l();
		g.fetchQuery({
			queryKey: [
				...r.all,
				v.id,
				y
			],
			queryFn: s.listProfiles,
			staleTime: 0
		}).then(({ profiles: e }) => h(p, c, e)).catch((e) => {
			let n = b(t.MODEL$LIST_FAILED);
			a(e instanceof Error && e.message ? e.message : n);
		});
	}, [
		p,
		m,
		h,
		g,
		_,
		v.id,
		y,
		b
	]);
};
//#endregion
export { p as useModelInterceptor };

//# sourceMappingURL=use-model-interceptor.js.map
import { useEventStore as e } from "../stores/use-event-store.js";
import { useSkillInstallBannerStore as t } from "../stores/skill-install-banner-store.js";
import { detectSkillInstalls as n } from "../utils/skill-install-events.js";
import { useCallback as r, useMemo as i } from "react";
//#region src/hooks/use-skill-installs.ts
var a = (a) => {
	let o = e((e) => e.events), s = e((e) => e.loadedConversationId), c = t((e) => e.dismissedEventIds), l = t((e) => e.dismiss), u = i(() => !a || a !== s ? [] : n(o).filter((e) => !c[e.eventId]), [
		a,
		s,
		o,
		c
	]);
	return {
		installs: u,
		dismissAll: r(() => l(u.map((e) => e.eventId)), [l, u])
	};
};
//#endregion
export { a as useSkillInstalls };

//# sourceMappingURL=use-skill-installs.js.map
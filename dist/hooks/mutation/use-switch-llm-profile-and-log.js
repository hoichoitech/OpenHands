import { useSwitchLlmProfile as e } from "./use-switch-llm-profile.js";
import { useCallback as t } from "react";
//#region src/hooks/mutation/use-switch-llm-profile-and-log.ts
function n() {
	let { mutate: n, isPending: r } = e();
	return {
		switchAndLog: t((e, t) => {
			n({
				conversationId: e,
				profileName: t
			});
		}, [n]),
		isPending: r
	};
}
//#endregion
export { n as useSwitchLlmProfileAndLog };

//# sourceMappingURL=use-switch-llm-profile-and-log.js.map
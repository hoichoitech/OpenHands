import { useNavigation as e } from "../context/navigation-context.js";
import { useConversationStore as t } from "../stores/conversation-store.js";
import { useCallback as n } from "react";
//#region src/hooks/use-launch-skill-in-chat.ts
function r() {
	let { navigate: r } = e(), i = t((e) => e.setMessageToSend);
	return n((e, t) => {
		t?.(), r("/conversations"), window.setTimeout(() => {
			i(e);
		}, 0);
	}, [r, i]);
}
//#endregion
export { r as useLaunchSkillInChat };

//# sourceMappingURL=use-launch-skill-in-chat.js.map
import { useConversationStore as e } from "../../stores/conversation-store.js";
import { clearFileInput as t, clearTextContent as n } from "../../components/features/chat/utils/chat-input.utils.js";
import { useCallback as r } from "react";
//#region src/hooks/chat/use-chat-submission.ts
var i = (i, a, o, s, c) => ({
	handleSubmit: r(() => {
		let r = i.current?.innerText || "", l = r.trim(), { images: u, files: d } = e.getState(), f = u.length > 0 || d.length > 0;
		!l && !f || (s(r), n(i.current), t(a.current), o(), c?.());
	}, [
		i,
		a,
		o,
		s,
		c
	]),
	handleStop: r((e) => {
		e && e();
	}, [])
});
//#endregion
export { i as useChatSubmission };

//# sourceMappingURL=use-chat-submission.js.map
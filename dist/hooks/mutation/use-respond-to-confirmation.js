import { useMutation as e } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import t from "../../api/event-service/event-service.api.js";
//#region src/hooks/mutation/use-respond-to-confirmation.ts
var n = () => e({
	mutationKey: ["respond-to-confirmation"],
	mutationFn: async ({ conversationId: e, conversationUrl: n, sessionApiKey: r, accept: i }) => {
		let a = { accept: i };
		return t.respondToConfirmation(e, n, a, r);
	}
});
//#endregion
export { n as useRespondToConfirmation };

//# sourceMappingURL=use-respond-to-confirmation.js.map
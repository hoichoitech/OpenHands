import { useNavigation as e } from "../context/navigation-context.js";
import { useIsMutating as t } from "../node_modules/@tanstack/react-query/build/modern/useMutationState.js";
//#region src/hooks/use-is-creating-conversation.ts
var n = () => {
	let n = e(), r = t({ mutationKey: ["create-conversation"] }), { isNavigating: i } = n;
	return r > 0 || i;
};
//#endregion
export { n as useIsCreatingConversation };

//# sourceMappingURL=use-is-creating-conversation.js.map
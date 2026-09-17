import { useSettings as e } from "./query/use-settings.js";
import { convertRawProvidersToList as t } from "../utils/convert-raw-providers-to-list.js";
import n from "react";
//#region src/hooks/use-user-providers.ts
var r = () => {
	let { data: r, isLoading: i } = e();
	return {
		providers: n.useMemo(() => t(r?.provider_tokens_set), [r?.provider_tokens_set]),
		isLoadingSettings: i
	};
};
//#endregion
export { r as useUserProviders };

//# sourceMappingURL=use-user-providers.js.map
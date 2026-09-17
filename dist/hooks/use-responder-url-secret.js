import { I18nKey as e } from "../i18n/declaration.js";
import { useQueryClient as t } from "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import n from "../i18n/index.js";
import { retrieveAxiosErrorMessage as r } from "../utils/retrieve-axios-error-message.js";
import { displayErrorToast as i } from "../utils/custom-toast-handlers.js";
import { useActiveBackend as a } from "../contexts/active-backend-context.js";
import { SecretsService as o } from "../api/secrets-service.js";
import { useCreateSecret as s } from "./mutation/use-create-secret.js";
import { useCallback as c } from "react";
//#region src/hooks/use-responder-url-secret.ts
var l = "OPENHANDS_URL";
function u() {
	let u = a(), d = t(), { mutateAsync: f } = s();
	return c(async () => {
		let t;
		try {
			t = await d.fetchQuery({
				queryKey: [
					"secrets",
					u.backend.id,
					u.orgId
				],
				queryFn: o.getSecretsOrThrow,
				staleTime: 0,
				retry: !1,
				meta: { disableToast: !0 }
			});
		} catch (t) {
			return i(r(t) || n.t(e.ERROR$GENERIC)), !1;
		}
		if (t.some((e) => e.name === l)) return !0;
		try {
			await f({
				name: l,
				value: window.location.origin
			});
		} catch {
			return !1;
		}
		return await d.invalidateQueries({ queryKey: ["secrets"] }), !0;
	}, [
		u.backend.id,
		u.orgId,
		f,
		d
	]);
}
//#endregion
export { u as useResponderUrlSecret };

//# sourceMappingURL=use-responder-url-secret.js.map
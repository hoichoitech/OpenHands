import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { useQueryClient as n } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { displayErrorToast as r, displaySuccessToast as i } from "../../utils/custom-toast-handlers.js";
import { SecretsService as a } from "../../api/secrets-service.js";
import { useCallback as o } from "react";
//#region src/hooks/mutation/use-save-fields-as-secrets.ts
function s(e) {
	return e.length <= 3 ? e.join(", ") : `${e.slice(0, 3).join(", ")} … (+${e.length - 3})`;
}
function c() {
	let { t: c } = e("openhands"), l = n();
	return o((e, n, o) => {
		let u = e.filter((e) => o[e.key] && (n[e.key] ?? "").trim());
		return u.length === 0 ? Promise.resolve() : Promise.allSettled(u.map((e) => a.createSecret(e.key, n[e.key].trim(), e.label))).then((e) => {
			let n = u.filter((t, n) => e[n].status === "fulfilled").map((e) => e.key), a = u.filter((t, n) => e[n].status === "rejected").map((e) => e.key);
			n.length > 0 && (l.invalidateQueries({ queryKey: ["secrets-search"] }), l.invalidateQueries({ queryKey: ["secrets"] }), i(c(t.MCP$SECRETS_SAVED, { keys: s(n) }))), a.length > 0 && r(c(t.MCP$SECRETS_SAVE_FAILED, { keys: s(a) }));
		});
	}, [c, l]);
}
//#endregion
export { c as useSaveFieldsAsSecrets };

//# sourceMappingURL=use-save-fields-as-secrets.js.map
import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ServerClient as n } from "../../../node_modules/@openhands/typescript-client/dist/client/server-client.js";
import "../../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerClientOptions as r } from "../../../api/agent-server-client-options.js";
import { getDisplayAgentServerVersion as i } from "../../../api/agent-server-compatibility.js";
import { useQuery as a } from "../../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/features/backends/backend-version.tsx
function s({ backend: s }) {
	let { t: c } = e("openhands"), { data: l } = a({
		queryKey: [
			"backend-version",
			s.host,
			s.apiKey
		],
		queryFn: async () => i(await new n(r({
			host: s.host,
			sessionApiKey: s.apiKey || null,
			timeout: 5e3
		})).getServerInfo()),
		retry: !1,
		staleTime: 6e4,
		enabled: s.kind === "local"
	});
	return l ? /* @__PURE__ */ o("span", {
		className: "inline-flex shrink-0 items-center rounded-full border border-[var(--oh-border)] bg-[var(--oh-surface)] px-1.5 py-0.5 text-[10px] font-medium leading-none text-[var(--oh-text-dim)]",
		"data-testid": `manage-backends-version-${s.name}`,
		children: c(t.BACKEND$VERSION_LABEL, { version: l })
	}) : null;
}
//#endregion
export { s as BackendVersion };

//# sourceMappingURL=backend-version.js.map
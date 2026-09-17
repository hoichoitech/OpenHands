import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { useConversationId as n } from "../use-conversation-id.js";
import { useQuery as r } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as i } from "../../contexts/active-backend-context.js";
import a from "../../api/conversation-service/agent-server-conversation-service.api.js";
import o from "../../api/conversation-service/conversation-service.api.js";
import { useActiveConversation as s } from "./use-active-conversation.js";
import { useRuntimeIsReady as c } from "../use-runtime-is-ready.js";
import { transformVSCodeUrl as l } from "../../utils/vscode-url-helper.js";
import { useCloudSandbox as u } from "./use-cloud-sandbox.js";
import { getOriginVSCodeBasePath as d, isVSCodeUrlServedByOrigin as f } from "../../utils/vscode-origin.js";
//#region src/hooks/query/use-unified-vscode-url.ts
var p = "VSCODE", m = () => {
	let { t: m } = e("openhands"), { conversationId: h } = n(), g = c({ allowAgentError: !0 }), { data: _ } = s(), v = i(), y = _?.conversation_url ?? null, b = _?.session_api_key ?? null, x = _?.sandbox_id ?? null, S = v.backend.kind === "cloud", C = d(), w = C !== null, T = u(S ? x : null), E = r({
		queryKey: [
			"unified",
			"vscode_status",
			"local",
			h,
			y,
			b
		],
		queryFn: () => a.getVSCodeStatus(y, b),
		enabled: !S && w && g && !!h,
		refetchOnMount: !0
	}), D = E.data?.enabled === !0 && E.data?.running === !0, O = r({
		queryKey: [
			"unified",
			"vscode_url",
			"local",
			h,
			y,
			b
		],
		queryFn: async () => {
			if (!h) throw Error("No conversation ID");
			return { url: l((await a.getVSCodeUrl(h, y, b).catch(() => o.getVSCodeUrl(h))).vscode_url) };
		},
		enabled: !S && w && g && !!h && D,
		refetchOnMount: !0,
		retry: 3
	}), k, A, j, M, N, P, F, I;
	if (S) {
		let e = T.data?.exposed_urls?.find((e) => e.name === p)?.url ?? null;
		k = T.isSuccess ? { url: l(e) } : void 0, A = T.isLoading, j = T.isError, M = T.isSuccess, N = T.status, P = T.error, F = async () => {
			let e = await T.refetch(), t = e.data?.exposed_urls?.find((e) => e.name === p)?.url ?? null;
			return { data: e.data ? { url: l(t) } : void 0 };
		}, I = !1;
	} else k = O.data, A = E.isLoading || O.isLoading, j = E.isError || O.isError, M = O.isSuccess, N = O.status, P = E.error ?? O.error, F = async () => ({ data: (await O.refetch()).data }), I = !w || E.isSuccess && !D || M && !O.data?.url || M && !f(O.data?.url, C);
	let L = k && !k.url ? m(t.VSCODE$URL_NOT_AVAILABLE) : null;
	return {
		data: k ? {
			...k,
			error: L
		} : void 0,
		error: P,
		isLoading: A,
		isError: j,
		isSuccess: M,
		isUnavailable: I,
		status: N,
		refetch: F
	};
};
//#endregion
export { m as useUnifiedVSCodeUrl };

//# sourceMappingURL=use-unified-vscode-url.js.map
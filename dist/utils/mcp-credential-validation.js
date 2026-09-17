import e from "../node_modules/@openhands/extensions/integrations/index.js";
import { findCatalogEntryForServer as t, getMcpMarketplaceCatalog as n } from "./mcp-marketplace-utils.js";
//#region src/utils/mcp-credential-validation.ts
var r = new Set([
	"invalid_auth",
	"not_authed",
	"account_inactive",
	"token_revoked",
	"token_expired"
]), i = (e) => e.is_error ? e.text || "tool call failed" : null, a = {
	github: {
		toolCall: {
			name: "get_me",
			arguments: {}
		},
		interpret: i
	},
	linear: {
		toolCall: {
			name: "list_teams",
			arguments: {}
		},
		interpret: i
	},
	slack: {
		toolCall: {
			name: "slack_list_channels",
			arguments: { limit: 1 }
		},
		interpret: (e) => {
			if (e.is_error) return e.text || "tool call failed";
			try {
				let t = JSON.parse(e.text);
				if (t?.ok === !1 && r.has(t.error)) return String(t.error);
			} catch {}
			return null;
		}
	}
};
function o(r) {
	let i = t(r, n(e));
	return i ? a[i.id] : void 0;
}
//#endregion
export { o as getCredentialValidationForServer };

//# sourceMappingURL=mcp-credential-validation.js.map
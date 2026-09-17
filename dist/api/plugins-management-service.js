import { PluginsClient as e } from "../node_modules/@openhands/typescript-client/dist/client/plugins-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "./agent-server-client-options.js";
//#region src/api/plugins-management-service.ts
function r() {
	return t().backend.kind === "cloud";
}
function i() {
	return new e(n());
}
var a = class {
	static async listInstalledPlugins() {
		if (r()) return [];
		try {
			return (await i().listInstalledPlugins()).plugins ?? [];
		} catch {
			return [];
		}
	}
	static async installPlugin(e) {
		if (r()) throw Error("Installing plugins is only available on a local backend.");
		return i().installPlugin(e);
	}
	static async setPluginEnabled(e, t) {
		if (r()) throw Error("Enabling and disabling plugins is only available on a local backend.");
		return i().setPluginEnabled(e, t);
	}
	static async uninstallPlugin(e) {
		if (r()) throw Error("Uninstalling plugins is only available on a local backend.");
		return i().uninstallPlugin(e);
	}
	static async refreshPlugin(e) {
		if (r()) throw Error("Refreshing plugins is only available on a local backend.");
		return i().refreshPlugin(e);
	}
};
//#endregion
export { a as default };

//# sourceMappingURL=plugins-management-service.js.map
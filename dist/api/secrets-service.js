import { SettingsClient as e } from "../node_modules/@openhands/typescript-client/dist/client/settings-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "./agent-server-client-options.js";
import { isSdkHttpStatusError as r } from "./agent-server-compatibility.js";
import { withRetry as i } from "./with-retry.js";
import { deleteCloudSecret as a, fetchCloudSecrets as o, saveCloudSecret as s } from "./cloud/secrets-service.api.js";
//#region src/api/secrets-service.ts
async function c() {
	return t().backend.kind === "cloud" ? i(() => o()) : (await i(() => new e(n()).listSecrets())).secrets.map((e) => ({
		name: e.name,
		description: e.description
	}));
}
var l = class {
	static async getSecrets() {
		try {
			return await c();
		} catch (e) {
			return console.error("Failed to fetch secrets after retries:", e), [];
		}
	}
	static async getSecretsOrThrow() {
		return c();
	}
	static async createSecret(r, a, o) {
		if (t().backend.kind === "cloud") {
			await s({
				name: r,
				value: a,
				description: o
			});
			return;
		}
		await i(() => new e(n()).upsertSecret({
			name: r,
			value: a,
			description: o
		}));
	}
	static async updateSecret(r, a, o, c) {
		if (t().backend.kind === "cloud") {
			await s({
				name: a,
				value: c,
				description: o,
				previousName: r
			});
			return;
		}
		let l = new e(n()), u = c ?? await i(() => l.getSecret(r));
		await i(() => l.upsertSecret({
			name: a,
			value: u,
			description: o
		})), a !== r && await this.deleteSecret(r);
	}
	static async deleteSecret(o) {
		try {
			if (t().backend.kind === "cloud") {
				await i(() => a(o));
				return;
			}
			await i(() => new e(n()).deleteSecret(o));
		} catch (e) {
			if (r(e, 404) || e && typeof e == "object" && "response" in e && e.response?.status === 404) return;
			throw e;
		}
	}
};
//#endregion
export { l as SecretsService };

//# sourceMappingURL=secrets-service.js.map
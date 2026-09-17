import { useAgentProfiles as e } from "./query/use-agent-profiles.js";
//#region src/hooks/use-active-agent-profile.ts
function t() {
	let { data: t, isLoading: n } = e(), r = t?.active_agent_profile_id ?? null;
	return {
		activeProfile: t?.profiles?.find((e) => e.id != null && e.id === r) ?? null,
		isLoading: n
	};
}
function n() {
	let { activeProfile: e } = t();
	return e?.agent_kind;
}
//#endregion
export { n as useActiveAgentKind, t as useActiveAgentProfile };

//# sourceMappingURL=use-active-agent-profile.js.map
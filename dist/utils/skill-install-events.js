import { isExecuteBashObservationEvent as e } from "../types/agent-server/type-guards.js";
//#region src/utils/skill-install-events.ts
var t = /^✅ Successfully installed '([^']+)' to (.+)$/m;
function n(n) {
	let r = /* @__PURE__ */ new Map();
	for (let i of n) {
		if (!e(i)) continue;
		let n = i.observation.content.filter((e) => e.type === "text").map((e) => e.text).join("\n").match(t);
		if (!n) continue;
		let a = n[1], o = n[2].replace(/\\/g, "/").replace(/\/+$/, ""), s = `/.agents/skills/${a}`;
		if (!o.endsWith(s)) continue;
		let c = o.slice(0, -s.length);
		if (!c) continue;
		let l = `${c}::${a}`;
		r.delete(l), r.set(l, {
			eventId: i.id,
			skillName: a,
			workspacePath: c
		});
	}
	return [...r.values()];
}
//#endregion
export { n as detectSkillInstalls };

//# sourceMappingURL=skill-install-events.js.map
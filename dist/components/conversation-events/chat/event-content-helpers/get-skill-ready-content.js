//#region src/components/conversation-events/chat/event-content-helpers/get-skill-ready-content.ts
function e(e) {
	return e.filter((e) => e.type === "text").map((e) => e.text).join("");
}
var t = (e) => Array.from(e.matchAll(/<EXTRA_INFO>([\s\S]*?)<\/EXTRA_INFO>/gi), (e) => e[1].trim()).filter(Boolean), n = (e, t) => {
	let n = `\n\n- **${e}**`;
	return t && (n += `\n\n${t}`), n;
}, r = (e, t) => {
	let r = "\n\n**Triggered Skill Knowledge:**";
	return e.forEach((e, i) => {
		let a = t[i];
		r += n(e, a);
	}), r;
}, i = (e) => {
	let t = "\n\n**Extended Content:**";
	return e.forEach((e) => {
		t += `\n\n${e}`;
	}), t;
}, a = (n) => n ? t(e(n)) : [], o = (e, t) => {
	let n = a(t);
	return e && e.length > 0 ? r(e, n) : n.length > 0 ? i(n) : "";
}, s = (e, t) => {
	let n = a(t);
	return e && e.length > 0 ? e.map((e, t) => ({
		name: e,
		content: n[t] ?? ""
	})) : n.map((e, t) => ({
		name: `Extended Content ${t + 1}`,
		content: e
	}));
};
//#endregion
export { o as getSkillReadyContent, s as getSkillReadyItems };

//# sourceMappingURL=get-skill-ready-content.js.map
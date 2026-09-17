//#region src/components/conversation-events/chat/event-content-helpers/get-invoke-skill-items.ts
var e = (e) => {
	let { observation: t } = e, n = t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n").trim();
	return !t.skill_name && !n ? [] : [{
		name: t.skill_name,
		content: n
	}];
};
//#endregion
export { e as getInvokeSkillItems };

//# sourceMappingURL=get-invoke-skill-items.js.map
import { ADD_SKILL_EXAMPLE_COMMAND as e } from "../../../constants/skills-docs.js";
//#region src/components/features/skills/get-skill-chat-launch-message.ts
function t(t) {
	return t.name === "add-skill" ? e : `/${t.name} `;
}
//#endregion
export { t as getSkillChatLaunchMessage };

//# sourceMappingURL=get-skill-chat-launch-message.js.map
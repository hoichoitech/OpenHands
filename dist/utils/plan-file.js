//#region src/utils/plan-file.ts
var e = ".agents_tmp/PLAN.md", t = "system_prompt_planning.j2", n = "planning_file_editor", r = "plannerparent", i = "PLAN.MD", a = [
	"The plan must follow this structure exactly:",
	"",
	"1. OBJECTIVE",
	"   * Summarize the goal of the plan in one or two sentences.",
	"   * Restate the problem in clear operational terms.",
	"",
	"2. CONTEXT SUMMARY",
	"   * Briefly describe the relevant system components, files, or data involved.",
	"   * Mention any dependencies or constraints (technical, organizational, or external).",
	"",
	"3. APPROACH OVERVIEW",
	"   * Outline the chosen approach at a high level.",
	"   * Mention why it was selected (short rationale) if alternatives were considered.",
	"",
	"4. IMPLEMENTATION STEPS",
	"   * Provide a step-by-step plan for execution.",
	"   * Each step should include:",
	"     - a **goal** (what this step accomplishes),",
	"     - a **method** (how to do it, briefly),",
	"     - and optionally a **reference** (file, module, or function impacted).",
	"",
	"5. TESTING AND VALIDATION",
	"   * Describe how the implementation can be verified or validated.",
	"   * This section should describe what success looks like — expected outputs, behaviors, or conditions."
].join("\n"), o = [
	"<IMPORTANT_PLANNING_BOUNDARIES>",
	"You are a Planning Agent that can ONLY create plans - you CANNOT execute code or make changes.",
	"",
	"Create or update the plan for the current task in the configured PLAN.md file.",
	"",
	"After you finalize the plan in PLAN.md:",
	"- Do NOT ask \"Ready to proceed?\" or offer to execute the plan",
	"- Do NOT attempt to run any implementation commands",
	"- Instead, tell the user they can click the **Build** button below the plan preview to switch to the code agent and execute the plan.",
	"",
	"Your role ends when the plan is finalized. Implementation is handled by the code agent.",
	"</IMPORTANT_PLANNING_BOUNDARIES>"
].join("\n");
function s(t) {
	return `${t.replace(/\/+$/, "")}/${e}`;
}
function c(e) {
	if (!e) return !1;
	let t = e.replace(/\\/g, "/").toUpperCase();
	return t === i || t.endsWith(`/${i}`);
}
function l(e, t) {
	return e?.tags?.[r] === t;
}
function u(e, t) {
	return t ? e?.find((e) => l(e, t))?.id ?? null : null;
}
//#endregion
export { r as LOCAL_PLANNER_PARENT_TAG_KEY, o as PLANNING_AGENT_INSTRUCTION, n as PLANNING_FILE_EDITOR_TOOL_NAME, t as PLANNING_SYSTEM_PROMPT_FILENAME, a as PLAN_STRUCTURE_TEXT, s as buildPlanPath, u as findPlannerConversationId, c as isPlanFilePath, l as isPlannerConversationOf };

//# sourceMappingURL=plan-file.js.map
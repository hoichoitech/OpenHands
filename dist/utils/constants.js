//#region src/utils/constants.ts
var e = {
	base00: "transparent",
	base01: "var(--cool-grey-900)",
	base02: "var(--cool-grey-700)",
	base03: "var(--cool-grey-600)",
	base04: "var(--cool-grey-500)",
	base05: "var(--cool-grey-200)",
	base06: "var(--cool-grey-100)",
	base07: "#ffffff",
	base08: "#ff5370",
	base09: "#f78c6c",
	base0A: "#ffcb6b",
	base0B: "#c3e88d",
	base0C: "#89ddff",
	base0D: "#82aaff",
	base0E: "#c792ea",
	base0F: "#ff5370"
}, t = { PRODUCTION: "https://app.all-hands.dev" }, n = { LABEL_CLASSNAME: "text-[11px] font-medium leading-4 tracking-[0.11px]" }, r = { HEIGHT_THRESHOLD: 100 }, i = 1.5, a = "/btw", o = "/model", s = "/goal", c = "/plan", l = "/code", u = [
	{
		skill: {
			name: "new",
			type: "agentskills",
			source: null,
			content: "Creates a new conversation using the same runtime",
			triggers: ["/new"]
		},
		command: "/new"
	},
	{
		skill: {
			name: "btw",
			type: "agentskills",
			source: null,
			content: "Ask the agent a side question without derailing the main task",
			triggers: [a]
		},
		command: a
	},
	{
		skill: {
			name: "model",
			type: "agentskills",
			source: null,
			content: "List saved LLM profiles, or switch the conversation LLM profile with /model <name>",
			triggers: [o]
		},
		command: o
	},
	{
		skill: {
			name: "goal",
			type: "agentskills",
			source: null,
			content: "Drive the agent toward an objective until a judge says it's done — /goal <objective> or /goal --max <n> <objective>",
			triggers: [s]
		},
		command: s
	},
	{
		skill: {
			name: "plan",
			type: "agentskills",
			source: null,
			content: "Switch the conversation into Plan mode, or start planning immediately with /plan <task>",
			triggers: [c]
		},
		command: c
	},
	{
		skill: {
			name: "code",
			type: "agentskills",
			source: null,
			content: "Switch the conversation back to Code mode, or resume immediately with /code <task>",
			triggers: [l]
		},
		command: l
	}
], d = [
	"The following information has been included",
	"It may or may not be relevant",
	"Skill location:",
	"(Use this path to resolve"
];
//#endregion
export { a as BTW_COMMAND, u as BUILT_IN_COMMANDS, r as CHAT_INPUT, l as CODE_COMMAND, i as EPS, s as GOAL_COMMAND, e as JSON_VIEW_THEME, d as METADATA_PREFIXES, o as MODEL_COMMAND, c as PLAN_COMMAND, t as PRODUCT_URL, n as SETTINGS_FORM };

//# sourceMappingURL=constants.js.map
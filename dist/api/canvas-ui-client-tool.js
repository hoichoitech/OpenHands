import { CANVAS_UI_CLIENT_TOOL_NAME as e } from "../constants/canvas-ui.js";
var t = {
	name: e,
	description: "The user is interacting with you inside Agent Canvas — a web UI with a chat panel on the left and a tabbed right-side panel (files, terminal, browser, vscode, planner, tasklist). This tool lets you drive that right-side panel so the user sees what you just produced.\n\nThey will NOT see the files you wrote, the terminal output, or the browser\nunless you call this tool to switch the right-side panel to the relevant\ntab. Call this every time you finish work that produces something the user\nshould look at — don't rely on them noticing on their own.\n\nWhen to call (pick the most specific option that matches your last action):\n\n* You wrote or modified a single file (ANY language, ANY size — including\n  small scripts like a hello-world bash file) →\n    command=\"navigate_to_file\", path=<workspace-relative path of that file>\n\n* You generated an HTML page, image, SVG, PDF, markdown report, or other\n  previewable artifact →\n    command=\"show_preview\", path=<that file>\n\n* You finished editing multiple files in one logical step →\n    command=\"open_tab\", tab=\"files\"\n    (The Files tab automatically renders a diff view when the workspace has\n    uncommitted git changes, which covers the \"highlight changes\" case.)\n\n* You ran a long-running terminal command, or one whose output the user\n  should inspect →\n    command=\"open_tab\", tab=\"terminal\"\n\n* You browsed to a URL the user should see →\n    First call browser_get_state(include_screenshot=true) after your final\n    browser interaction so Agent Canvas has a screenshot to display, then call\n    command=\"open_tab\", tab=\"browser\"\n    (browser_navigate alone only updates the URL; without browser_get_state,\n    the Browser tab will open without a screenshot.)\n\nCall this BEFORE writing your chat-message summary of the change, so the\nartifact is visible while the user reads what you did. One canvas_ui_control\ncall per logical step is enough — don't repeat it for the same file or tab in\nthe same turn.",
	parameters: {
		type: "object",
		additionalProperties: !1,
		properties: {
			command: {
				type: "string",
				enum: [
					"navigate_to_file",
					"open_tab",
					"show_preview"
				],
				description: "UI command to dispatch."
			},
			path: {
				type: "string",
				description: "Workspace-relative file path. Required for navigate_to_file and show_preview; ignored otherwise."
			},
			tab: {
				type: "string",
				enum: [
					"files",
					"browser",
					"vscode",
					"terminal",
					"planner",
					"tasklist"
				],
				description: "Tab to open. Required for open_tab; ignored otherwise."
			}
		},
		required: ["command"]
	},
	annotations: {
		readOnlyHint: !0,
		destructiveHint: !1,
		idempotentHint: !0,
		openWorldHint: !1
	}
};
//#endregion
export { t as CANVAS_UI_CLIENT_TOOL };

//# sourceMappingURL=canvas-ui-client-tool.js.map
import { cn as e } from "../../utils/utils.js";
import t from "../../assets/branding/openhands-logo.js";
import n from "../../icons/terminal.js";
import { CLAUDE_CODE_MARK_PATH as r, CLAUDE_CODE_VIEWBOX as i, CODEX_MARK_PATH as a, CODEX_VIEWBOX as o, GEMINI_MARK_PATH as s, GEMINI_VIEWBOX as c } from "../../constants/acp-brand-marks.js";
import { jsx as l } from "react/jsx-runtime";
//#region src/components/shared/agent-brand-icon.tsx
var u = 3 / 2;
function d({ kind: d, size: f = 12, className: p, "data-testid": m }) {
	return d === "openhands" ? /* @__PURE__ */ l(t, {
		width: Math.round(f * u),
		height: f,
		className: e("shrink-0 [&_path:not([fill=transparent])]:fill-current", p),
		"data-testid": m ?? "agent-brand-icon-openhands",
		"aria-hidden": !0
	}) : d === "claude-code" ? /* @__PURE__ */ l("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: i,
		width: f,
		height: f,
		className: e("shrink-0", p),
		"data-testid": m ?? "agent-brand-icon-claude-code",
		"aria-hidden": !0,
		children: /* @__PURE__ */ l("path", {
			fill: "currentColor",
			d: r
		})
	}) : d === "codex" ? /* @__PURE__ */ l("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: o,
		width: f,
		height: f,
		className: e("shrink-0", p),
		"data-testid": m ?? "agent-brand-icon-codex",
		"aria-hidden": !0,
		children: /* @__PURE__ */ l("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: a,
			fill: "currentColor"
		})
	}) : d === "gemini" ? /* @__PURE__ */ l("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: c,
		width: f,
		height: f,
		className: e("shrink-0", p),
		"data-testid": m ?? "agent-brand-icon-gemini",
		"aria-hidden": !0,
		children: /* @__PURE__ */ l("path", {
			fill: "currentColor",
			d: s
		})
	}) : /* @__PURE__ */ l(n, {
		width: f,
		height: f,
		className: e("shrink-0", p),
		"data-testid": m ?? "agent-brand-icon-generic",
		"aria-hidden": !0
	});
}
//#endregion
export { d as AgentBrandIcon };

//# sourceMappingURL=agent-brand-icon.js.map
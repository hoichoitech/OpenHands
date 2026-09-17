import { I18nKey as e } from "../i18n/declaration.js";
import { Bot as t } from "../node_modules/lucide-react/dist/esm/icons/bot.js";
import { GitPullRequest as n } from "../node_modules/lucide-react/dist/esm/icons/git-pull-request.js";
import { Package as r } from "../node_modules/lucide-react/dist/esm/icons/package.js";
import { Palette as i } from "../node_modules/lucide-react/dist/esm/icons/palette.js";
import { PenLine as a } from "../node_modules/lucide-react/dist/esm/icons/pen-line.js";
import { Plug as o } from "../node_modules/lucide-react/dist/esm/icons/plug.js";
import { ShieldCheck as s } from "../node_modules/lucide-react/dist/esm/icons/shield-check.js";
import { Workflow as c } from "../node_modules/lucide-react/dist/esm/icons/workflow.js";
import { Wrench as l } from "../node_modules/lucide-react/dist/esm/icons/wrench.js";
import { SKILL_CATEGORY_IDS as u } from "../node_modules/@openhands/extensions/skills/index.js";
//#region src/utils/skill-category.ts
var d = [
	"automations",
	"environment",
	"code-hosting",
	"agent-authoring",
	"code-quality",
	"integrations",
	"writing",
	"design",
	"other"
], f = {
	automations: e.SETTINGS$SKILLS_CATEGORY_AUTOMATIONS,
	environment: e.SETTINGS$SKILLS_CATEGORY_ENVIRONMENT,
	"code-hosting": e.SETTINGS$SKILLS_CATEGORY_CODE_HOSTING,
	"agent-authoring": e.SETTINGS$SKILLS_CATEGORY_AGENT_AUTHORING,
	"code-quality": e.SETTINGS$SKILLS_CATEGORY_CODE_QUALITY,
	integrations: e.SETTINGS$SKILLS_CATEGORY_INTEGRATIONS,
	writing: e.SETTINGS$SKILLS_CATEGORY_WRITING,
	design: e.SETTINGS$SKILLS_CATEGORY_DESIGN,
	other: e.SETTINGS$SKILLS_CATEGORY_OTHER
}, p = {
	automations: c,
	environment: l,
	"code-hosting": n,
	"agent-authoring": t,
	"code-quality": s,
	integrations: o,
	writing: a,
	design: i,
	other: r
}, m = "other", h = new Set(u);
function g(e) {
	let t = e.category;
	return t && h.has(t) ? t : m;
}
//#endregion
export { p as SKILL_CATEGORY_ICONS, f as SKILL_CATEGORY_LABEL_KEYS, d as SKILL_CATEGORY_ORDER, m as UNCATEGORIZED_SKILL_CATEGORY, g as getSkillCategory };

//# sourceMappingURL=skill-category.js.map
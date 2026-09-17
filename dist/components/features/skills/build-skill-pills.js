import { I18nKey as e } from "../../../i18n/declaration.js";
import { cn as t } from "../../../utils/utils.js";
import { isRecommendedSkill as n } from "../../../utils/skill-enablement.js";
import { SKILL_CARD_PILL_CLASS as r } from "./skill-card-pill-row.js";
import { SkillTypeBadge as i } from "./skill-type-badge.js";
import { SKILL_CATEGORY_LABEL_KEYS as a, getSkillCategory as o } from "../../../utils/skill-category.js";
import "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/skills/build-skill-pills.tsx
function l(e, t, n) {
	if (e) return `${e}-${t}-${n}`;
}
function u(u, d, f = {}) {
	let { variant: p = "card", testIdPrefix: m } = f, h = o(u), g = [{
		id: `type-${u.type}`,
		node: /* @__PURE__ */ s(i, { type: u.type })
	}];
	if (n(u.name) && g.push({
		id: "recommended",
		node: /* @__PURE__ */ s("span", {
			"data-testid": l(m, u.name, "recommended") ?? `skill-recommended-${u.name}`,
			className: r,
			children: d(e.SETTINGS$SKILLS_RECOMMENDED)
		})
	}), h !== "other" && g.push({
		id: `category-${h}`,
		node: /* @__PURE__ */ s("span", {
			"data-testid": l(m, u.name, "category") ?? `skill-category-${u.name}`,
			className: r,
			children: d(a[h])
		})
	}), u.version && g.push({
		id: `version-${u.version}`,
		node: /* @__PURE__ */ s("span", {
			"data-testid": l(m, u.name, "version") ?? `skill-version-${u.name}`,
			className: r,
			children: d(e.SETTINGS$SKILLS_VERSION, { version: u.version })
		})
	}), p === "detail" && u.license && g.push({
		id: `license-${u.license}`,
		node: /* @__PURE__ */ s("span", {
			"data-testid": l(m, u.name, "license"),
			className: r,
			children: u.license
		})
	}), p === "detail" && u.compatibility && g.push({
		id: `compatibility-${u.compatibility}`,
		node: /* @__PURE__ */ s("span", {
			"data-testid": l(m, u.name, "compatibility"),
			className: r,
			children: u.compatibility
		})
	}), u.disable_model_invocation && g.push({
		id: "disable-model-invocation",
		node: /* @__PURE__ */ c("span", {
			"data-testid": l(m, u.name, "disable-model-invocation") ?? `skill-disable-model-invocation-${u.name}`,
			className: "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-[rgba(248,113,113,0.35)] bg-[rgba(248,113,113,0.12)] px-2 py-0.5 text-[11px] font-medium leading-4 text-[#fca5a5]",
			children: [/* @__PURE__ */ s("span", { className: "size-1.5 rounded-full bg-[#fca5a5]" }), d(e.SETTINGS$SKILLS_DISABLE_MODEL_INVOCATION)]
		})
	}), p === "detail" && u.allowed_tools) for (let e of u.allowed_tools) g.push({
		id: `allowed-tool-${e}`,
		node: /* @__PURE__ */ s("span", {
			"data-testid": l(m, u.name, `tool-${e}`),
			className: t(r, "font-mono"),
			children: e
		})
	});
	if (p === "detail" && u.metadata) for (let [e, t] of Object.entries(u.metadata)) g.push({
		id: `metadata-${e}`,
		node: /* @__PURE__ */ c("span", {
			"data-testid": l(m, u.name, `metadata-${e}`),
			className: r,
			children: [
				/* @__PURE__ */ c("span", {
					className: "font-mono text-[10px] text-tertiary-light",
					children: [e, ":"]
				}),
				" ",
				t
			]
		})
	});
	for (let e of u.triggers ?? []) g.push({
		id: `trigger-${e}`,
		node: /* @__PURE__ */ s("span", {
			"data-testid": l(m, u.name, `trigger-${e}`),
			className: r,
			children: e
		})
	});
	return g;
}
//#endregion
export { u as buildSkillPills };

//# sourceMappingURL=build-skill-pills.js.map
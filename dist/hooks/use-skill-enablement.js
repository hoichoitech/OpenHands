import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { retrieveAxiosErrorMessage as n } from "../utils/retrieve-axios-error-message.js";
import { displayErrorToast as r } from "../utils/custom-toast-handlers.js";
import { useActiveBackend as i } from "../contexts/active-backend-context.js";
import { CATALOG_SKILL_NAMES as a, buildSkillEnablementFilter as o, isCatalogSkill as s, resolveEnabledCatalogSkills as c } from "../utils/skill-enablement.js";
import { useSettings as l } from "./query/use-settings.js";
import { useSaveSettings as u } from "./mutation/use-save-settings.js";
import d from "react";
//#region src/hooks/use-skill-enablement.ts
function f(e, t) {
	return {
		enabledSkills: t ? e?.enabled_skills : [...a],
		disabledSkills: e?.disabled_skills ?? []
	};
}
function p() {
	let { backend: e } = i(), { data: t } = l(), n = e.kind !== "cloud";
	return d.useMemo(() => {
		let e = o(f(t, n));
		return (t) => e(t.name);
	}, [
		t?.enabled_skills,
		t?.disabled_skills,
		n
	]);
}
function m(e) {
	return JSON.stringify([[...c(e)].sort(), [...e.disabledSkills ?? []].sort()]);
}
function h(e, t, n) {
	return e.includes(t) === n ? e : n ? [...e, t] : e.filter((e) => e !== t);
}
function g() {
	let { t: a } = e("openhands"), { backend: p } = i(), g = p.kind !== "cloud", { data: _, isLoading: v } = l(), { mutate: y } = u(), [b, x] = d.useState({}), S = d.useRef(null);
	return d.useEffect(() => {
		if (v || !_) return;
		let e = f(_, g);
		S.current = m(e), x(e);
	}, [
		v,
		_?.enabled_skills,
		_?.disabled_skills,
		g
	]), d.useEffect(() => {
		let e = m(b);
		if (S.current === null || S.current === e) return;
		S.current = e;
		let i = b.disabledSkills ?? [];
		y(g ? {
			enabled_skills: c(b),
			disabled_skills: i
		} : { disabled_skills: i }, { onError: (e) => {
			r(n(e) || a(t.ERROR$GENERIC));
		} });
	}, [
		b,
		g,
		y,
		a
	]), {
		isEnabled: d.useMemo(() => {
			let e = o(b);
			return (t) => e(t.name);
		}, [b]),
		setEnabled: d.useCallback((e, t) => {
			x((n) => {
				let r = g && s(e);
				return {
					enabledSkills: r ? h(c(n), e, t) : n.enabledSkills,
					disabledSkills: h(n.disabledSkills ?? [], e, !t && !r)
				};
			});
		}, [g])
	};
}
//#endregion
export { p as useSkillEnabledFilter, g as useSkillEnablement };

//# sourceMappingURL=use-skill-enablement.js.map
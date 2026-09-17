import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { AvailableLanguages as n } from "../i18n/index.js";
import { retrieveAxiosErrorMessage as r } from "../utils/retrieve-axios-error-message.js";
import { displayErrorToast as i, displaySuccessToast as a } from "../utils/custom-toast-handlers.js";
import { setTelemetryConsent as o } from "../services/telemetry.js";
import { useActiveBackend as s } from "../contexts/active-backend-context.js";
import { DEFAULT_SETTINGS as c } from "../services/settings.js";
import { useSettings as l } from "../hooks/query/use-settings.js";
import { useFreeModels as u } from "../hooks/query/use-free-models.js";
import { formatModelNameForDisplay as d } from "../utils/format-model-name.js";
import { useLlmProfiles as f } from "../hooks/query/use-llm-profiles.js";
import { NavigationLink as p } from "../components/shared/navigation-link.js";
import { useSaveSettings as m } from "../hooks/mutation/use-save-settings.js";
import { BrandButton as h } from "../components/features/settings/brand-button.js";
import { SettingsInput as g } from "../components/features/settings/settings-input.js";
import { SettingsSwitch as _ } from "../components/features/settings/settings-switch.js";
import { SettingsDropdownInput as v } from "../components/features/settings/settings-dropdown-input.js";
import { LanguageInput as y } from "../components/features/settings/app-settings/language-input.js";
import { ThemeInput as b } from "../components/features/settings/app-settings/theme-input.js";
import { GettingStartedChecklistSwitch as ee } from "../components/features/settings/app-settings/getting-started-checklist-switch.js";
import { AppSettingsInputsSkeleton as x } from "../components/features/settings/app-settings/app-settings-inputs-skeleton.js";
import S from "react";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
//#region src/routes/app-settings.tsx
var T = "__automatic__";
function E() {
	let { t: E } = e("openhands"), { mutate: D, isPending: O } = m(), { data: k, isLoading: A } = l(), j = s().backend.kind === "cloud", { data: M, isLoading: N } = f(), P = u(), [F, I] = S.useState(!1), [L, R] = S.useState(!1), [z, B] = S.useState(!1), [V, H] = S.useState(!1), [U, W] = S.useState(!1), [G, K] = S.useState(void 0), q = S.useMemo(() => {
		let e = k?.title_llm_profile ?? null;
		return !e || !M || M.profiles.some((t) => t.name === e) ? e : null;
	}, [M, k?.title_llm_profile]), J = G === void 0 ? q : G, Y = S.useMemo(() => [{
		key: T,
		label: E(t.SETTINGS$TITLE_GENERATION_AUTOMATIC)
	}, ...M?.profiles.map((e) => ({
		key: e.name,
		label: e.model ? E(t.SETTINGS$TITLE_GENERATION_PROFILE_OPTION, {
			name: e.name,
			model: d(e.model, P) ?? e.model
		}) : e.name
	})) ?? []], [
		M?.profiles,
		P,
		E
	]), X = (e) => {
		let s = e.get("language-input")?.toString(), l = n.find(({ label: e }) => e === s)?.value || c.language, u = j ? !0 : e.get("enable-analytics-switch")?.toString() === "on", d = e.get("enable-sound-notifications-switch")?.toString() === "on", f = e.get("git-user-name-input")?.toString() || c.git_user_name, p = e.get("git-user-email-input")?.toString() || c.git_user_email;
		D({
			language: l,
			...!j && { user_consents_to_analytics: u },
			enable_sound_notifications: d,
			git_user_name: f,
			git_user_email: p,
			title_llm_profile: J
		}, {
			onSuccess: () => {
				o(u ? "granted" : "denied"), a(E(t.SETTINGS$SAVED));
			},
			onError: (e) => {
				i(r(e) || E(t.ERROR$GENERIC));
			},
			onSettled: () => {
				I(!1), R(!1), B(!1), H(!1), W(!1), K(void 0);
			}
		});
	}, Z = (e) => {
		let t = n.find(({ label: t }) => t === e)?.label, r = n.find(({ value: e }) => e === k?.language)?.label;
		I(t !== r);
	}, Q = (e) => {
		R(e !== (k?.user_consents_to_analytics ?? !0));
	}, te = (e) => {
		B(e !== !!k?.enable_sound_notifications);
	}, ne = (e) => {
		let t = k?.git_user_name;
		H(e !== t);
	}, re = (e) => {
		let t = k?.git_user_email;
		W(e !== t);
	}, ie = !F && !L && !z && J === q && !V && !U, $ = !k || A || N || O;
	return /* @__PURE__ */ w("form", {
		"data-testid": "app-settings-screen",
		action: X,
		className: "flex flex-col gap-6",
		children: [$ && /* @__PURE__ */ C(x, {}), !$ && /* @__PURE__ */ w("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ C(y, {
					name: "language-input",
					defaultKey: k.language,
					onChange: Z
				}),
				/* @__PURE__ */ C(b, {}),
				/* @__PURE__ */ C(_, {
					testId: "enable-analytics-switch",
					name: j ? void 0 : "enable-analytics-switch",
					defaultIsToggled: j ? !0 : k.user_consents_to_analytics ?? !0,
					isToggled: j ? !0 : void 0,
					isDisabled: j,
					onToggle: j ? void 0 : Q,
					children: E(t.ANALYTICS$SEND_ANONYMOUS_DATA)
				}),
				/* @__PURE__ */ C(_, {
					testId: "enable-sound-notifications-switch",
					name: "enable-sound-notifications-switch",
					defaultIsToggled: !!k.enable_sound_notifications,
					onToggle: te,
					children: E(t.SETTINGS$SOUND_NOTIFICATIONS)
				}),
				/* @__PURE__ */ C(ee, {}),
				/* @__PURE__ */ w("div", {
					className: "border-t border-[var(--oh-border)] pt-6 mt-2",
					children: [
						/* @__PURE__ */ C("h3", {
							className: "text-lg font-medium mb-2",
							children: E(t.SETTINGS$CONVERSATION_TITLES)
						}),
						/* @__PURE__ */ C("p", {
							className: "mb-4 text-sm leading-5 text-tertiary-light",
							children: E(t.SETTINGS$TITLE_GENERATION_DESCRIPTION)
						}),
						/* @__PURE__ */ C(v, {
							testId: "title-llm-profile-input",
							name: "title-llm-profile-input",
							label: E(t.SETTINGS$TITLE_GENERATION_MODEL),
							items: Y,
							selectedKey: J ?? T,
							onSelectionChange: (e) => {
								let t = e?.toString();
								K(!t || t === T ? null : t);
							}
						}),
						/* @__PURE__ */ C(p, {
							to: "/settings/llm",
							className: "mt-3 inline-block text-sm text-primary hover:underline",
							children: E(t.SETTINGS$MANAGE_LLM_PROFILES)
						})
					]
				}),
				/* @__PURE__ */ w("div", {
					className: "border-t border-[var(--oh-border)] pt-6 mt-2",
					children: [
						/* @__PURE__ */ C("h3", {
							className: "text-lg font-medium mb-2",
							children: E(t.SETTINGS$GIT_SETTINGS)
						}),
						/* @__PURE__ */ C("p", {
							className: "mb-4 text-sm leading-5 text-tertiary-light",
							children: E(t.SETTINGS$GIT_SETTINGS_DESCRIPTION)
						}),
						/* @__PURE__ */ w("div", {
							className: "flex flex-col gap-6",
							children: [/* @__PURE__ */ C(g, {
								testId: "git-user-name-input",
								name: "git-user-name-input",
								type: "text",
								label: E(t.SETTINGS$GIT_USERNAME),
								defaultValue: k.git_user_name || "",
								onChange: ne,
								placeholder: E(t.SETTINGS$GIT_USERNAME_PLACEHOLDER),
								className: "w-full min-w-0"
							}), /* @__PURE__ */ C(g, {
								testId: "git-user-email-input",
								name: "git-user-email-input",
								type: "email",
								label: E(t.SETTINGS$GIT_EMAIL),
								defaultValue: k.git_user_email || "",
								onChange: re,
								placeholder: E(t.SETTINGS$GIT_EMAIL_PLACEHOLDER),
								className: "w-full min-w-0"
							})]
						}),
						/* @__PURE__ */ C("div", {
							className: "flex justify-start pt-4",
							children: /* @__PURE__ */ w(h, {
								testId: "submit-button",
								variant: "primary",
								type: "submit",
								isDisabled: O || ie,
								children: [!O && E(t.SETTINGS$SAVE_CHANGES), O && E(t.SETTINGS$SAVING)]
							})
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { E as default };

//# sourceMappingURL=app-settings.js.map
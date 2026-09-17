import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { SETTINGS_FORM as n } from "../../../../utils/constants.js";
import { useNavigation as r } from "../../../../context/navigation-context.js";
import { useTracking as i } from "../../../../hooks/use-tracking.js";
import { ModalBackdrop as a } from "../modal-backdrop.js";
import { useSaveSettings as o } from "../../../../hooks/mutation/use-save-settings.js";
import { BrandButton as s } from "../../../features/settings/brand-button.js";
import { extractSettings as c } from "../../../../utils/settings-utils.js";
import { SettingsInput as l } from "../../../features/settings/settings-input.js";
import { HelpLink as u } from "../../../../ui/help-link.js";
import { ModelSelector as d } from "./model-selector.js";
import { getAgentSettingValue as f } from "../../../../utils/sdk-settings-schema.js";
import { DangerModal as p } from "../confirmation-modals/danger-modal.js";
import m from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/shared/modals/settings/settings-form.tsx
function _({ settings: _, onClose: v }) {
	let { trackSettingsSaved: y } = i(), { mutate: b } = o(), { currentPath: x } = r(), { t: S } = e("openhands"), C = m.useRef(null), [w, T] = m.useState(!1), E = async (e) => {
		let t = c(e);
		await b(t, { onSuccess: () => {
			v();
			let e = t.agent_settings_diff?.llm ?? {};
			y({
				llmModel: e.model,
				llmApiKeySet: e.api_key ? "SET" : "UNSET",
				searchApiKeySet: t.search_api_key ? "SET" : "UNSET",
				remoteRuntimeResourceFactor: t.remote_runtime_resource_factor
			});
		} });
	}, D = () => {
		E(new FormData(C.current ?? void 0));
	}, O = (e) => {
		e.preventDefault();
		let t = new FormData(e.currentTarget);
		x.startsWith("/conversations/") ? T(!0) : E(t);
	}, k = _.llm_api_key_set, A = f(_, "llm.model");
	return /* @__PURE__ */ g("div", { children: [/* @__PURE__ */ g("form", {
		ref: C,
		"data-testid": "settings-form",
		className: "flex flex-col gap-6",
		onSubmit: O,
		children: [/* @__PURE__ */ g("div", {
			className: "flex flex-col gap-[17px]",
			children: [
				/* @__PURE__ */ h(d, {
					currentModel: typeof A == "string" ? A : void 0,
					wrapperClassName: "!flex-col !gap-[17px]",
					labelClassName: n.LABEL_CLASSNAME
				}),
				/* @__PURE__ */ h(l, {
					testId: "llm-api-key-input",
					name: "llm-api-key-input",
					label: S(t.SETTINGS_FORM$API_KEY),
					type: "password",
					className: "w-full",
					placeholder: k ? "<hidden>" : "",
					labelClassName: n.LABEL_CLASSNAME
				}),
				/* @__PURE__ */ h(u, {
					testId: "llm-api-key-help-anchor",
					text: S(t.SETTINGS$DONT_KNOW_API_KEY),
					linkText: S(t.SETTINGS$CLICK_FOR_INSTRUCTIONS),
					href: "https://docs.openhands.dev/usage/local-setup#getting-an-api-key",
					size: "settings",
					linkColor: "white"
				})
			]
		}), /* @__PURE__ */ h("div", {
			className: "flex flex-col gap-2",
			children: /* @__PURE__ */ h(s, {
				testId: "save-settings-button",
				type: "submit",
				variant: "primary",
				className: "w-full",
				children: S(t.BUTTON$SAVE)
			})
		})]
	}), w && /* @__PURE__ */ h(a, { children: /* @__PURE__ */ h(p, {
		title: S(t.MODAL$END_SESSION_TITLE),
		description: S(t.MODAL$END_SESSION_MESSAGE),
		buttons: {
			danger: {
				text: S(t.BUTTON$END_SESSION),
				onClick: D
			},
			cancel: {
				text: S(t.BUTTON$CANCEL),
				onClick: () => T(!1)
			}
		}
	}) })] });
}
//#endregion
export { _ as SettingsForm };

//# sourceMappingURL=settings-form.js.map
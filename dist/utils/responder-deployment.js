import { I18nKey as e } from "../i18n/declaration.js";
import { PRODUCT_URL as t } from "./constants.js";
import { getRequiredIntegrationIds as n } from "./automation-catalog.js";
import { getResponderIntegrationIds as r } from "../manifests/automation-interface.js";
//#region src/utils/responder-deployment.ts
var i = `${t.PRODUCTION}/settings/integrations`;
function a(e) {
	let t = r(), i = n(e);
	return i.length > 0 && i.every((e) => t.includes(e));
}
function o(t) {
	switch (t) {
		case "local": return {
			target: t,
			testId: "responder-deployment-option-local",
			titleKey: e.RESPONDER_DEPLOYMENT$LOCAL_TITLE,
			descriptionKey: e.RESPONDER_DEPLOYMENT$LOCAL_DESCRIPTION,
			primaryActionKey: e.RESPONDER_DEPLOYMENT$LOCAL_ACTION,
			primaryActionTestId: "responder-deployment-continue-local",
			action: { kind: "launch-local" }
		};
		case "openhands-cloud": return {
			target: t,
			testId: "responder-deployment-option-openhands-cloud",
			titleKey: e.RESPONDER_DEPLOYMENT$OPENHANDS_CLOUD_TITLE,
			descriptionKey: e.RESPONDER_DEPLOYMENT$OPENHANDS_CLOUD_DESCRIPTION,
			primaryActionKey: e.RESPONDER_DEPLOYMENT$OPENHANDS_CLOUD_ACTION,
			primaryActionTestId: "responder-deployment-open-openhands-cloud",
			action: {
				kind: "open-url",
				url: i
			}
		};
		case "user-cloud": throw Error("User Cloud responder deployment is not yet supported");
		default: return t;
	}
}
var s = ["local", "openhands-cloud"];
//#endregion
export { s as VISIBLE_RESPONDER_DEPLOYMENT_TARGETS, a as isResponderAutomation, o as resolveResponderDeploymentOption };

//# sourceMappingURL=responder-deployment.js.map
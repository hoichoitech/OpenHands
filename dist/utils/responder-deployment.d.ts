import type { RecommendedAutomation } from "@openhands/extensions/automations";
import { I18nKey } from "#/i18n/declaration";
/** OpenHands Cloud integrations page — where always-on responders are set up. */
export declare const OPENHANDS_CLOUD_INTEGRATIONS_URL: string;
/**
 * Single source of truth for "does this automation get the deployment-choice
 * modal?" — true only for automations whose required integrations are
 * exclusively responder ones (owned by the interface manifest, GitHub/Slack by
 * default), so multi-tool digests (e.g. slack + linear + notion) are not
 * treated as Slack responders. An integration the automation can start without
 * does not decide where it runs, so only the required ones are classified.
 */
export declare function isResponderAutomation(automation: RecommendedAutomation): boolean;
/**
 * Where a responder runs. Only `local` and `openhands-cloud` are wired today;
 * `user-cloud` is reserved for a future remote-deployment target.
 */
export type ResponderDeploymentTarget = "local" | "user-cloud" | "openhands-cloud";
/** What the launcher should do when an option's primary action fires. */
export type ResponderDeploymentAction = {
    kind: "launch-local";
} | {
    kind: "open-url";
    url: string;
};
/** Presentational + behavioral descriptor for one deployment option. */
export interface ResponderDeploymentOption {
    target: ResponderDeploymentTarget;
    testId: string;
    titleKey: I18nKey;
    descriptionKey: I18nKey;
    primaryActionKey: I18nKey;
    primaryActionTestId: string;
    action: ResponderDeploymentAction;
}
/**
 * Centralized runtime-selection mechanism. Returns a descriptor (data) rather
 * than executing behavior, so the side effects stay with the launcher that owns
 * the relevant state. Adding a target later means adding a `case` here and an
 * entry to {@link VISIBLE_RESPONDER_DEPLOYMENT_TARGETS}; the `never` check makes
 * an unhandled target a compile error.
 */
export declare function resolveResponderDeploymentOption(target: ResponderDeploymentTarget): ResponderDeploymentOption;
/** Targets the modal renders today, in display order (excludes `user-cloud`). */
export declare const VISIBLE_RESPONDER_DEPLOYMENT_TARGETS: ResponderDeploymentTarget[];

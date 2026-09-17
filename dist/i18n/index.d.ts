import { type i18n as I18nInstance } from "i18next";
export { translationResources, type TranslationResources } from "./resources";
export declare const OPENHANDS_I18N_NAMESPACE = "openhands";
export declare const AvailableLanguages: readonly [{
    readonly label: "English";
    readonly value: "en";
}, {
    readonly label: "日本語";
    readonly value: "ja";
}, {
    readonly label: "简体中文";
    readonly value: "zh-CN";
}, {
    readonly label: "繁體中文";
    readonly value: "zh-TW";
}, {
    readonly label: "한국어";
    readonly value: "ko-KR";
}, {
    readonly label: "Norsk";
    readonly value: "no";
}, {
    readonly label: "Arabic";
    readonly value: "ar";
}, {
    readonly label: "Deutsch";
    readonly value: "de";
}, {
    readonly label: "Français";
    readonly value: "fr";
}, {
    readonly label: "Italiano";
    readonly value: "it";
}, {
    readonly label: "Português";
    readonly value: "pt";
}, {
    readonly label: "Español";
    readonly value: "es";
}, {
    readonly label: "Català";
    readonly value: "ca";
}, {
    readonly label: "Türkçe";
    readonly value: "tr";
}, {
    readonly label: "Українська";
    readonly value: "uk";
}];
export declare const createAgentServerI18n: () => I18nInstance;
export declare const getDefaultI18n: () => I18nInstance;
export declare const getI18n: () => I18nInstance;
export declare const setI18n: (instance?: I18nInstance | null) => I18nInstance;
export declare const waitForI18n: (instance?: I18nInstance) => Promise<I18nInstance>;
declare const i18n: I18nInstance;
export default i18n;

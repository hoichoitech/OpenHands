import type { Plugin } from "unified";
import type { Root } from "mdast";
export declare const ALERT_TYPES: readonly ["note", "tip", "important", "warning", "caution"];
export type AlertType = (typeof ALERT_TYPES)[number];
export declare const remarkGithubAlerts: Plugin<[], Root>;

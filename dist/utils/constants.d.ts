import { SlashCommandItem } from "#/hooks/chat/use-slash-command";
export declare const JSON_VIEW_THEME: {
    base00: string;
    base01: string;
    base02: string;
    base03: string;
    base04: string;
    base05: string;
    base06: string;
    base07: string;
    base08: string;
    base09: string;
    base0A: string;
    base0B: string;
    base0C: string;
    base0D: string;
    base0E: string;
    base0F: string;
};
export declare const PRODUCT_URL: {
    PRODUCTION: string;
};
export declare const SETTINGS_FORM: {
    LABEL_CLASSNAME: string;
};
export declare const CHAT_INPUT: {
    HEIGHT_THRESHOLD: number;
};
export declare const EPS = 1.5;
/** The /btw slash command — asks a side question via the ask_agent endpoint. */
export declare const BTW_COMMAND = "/btw";
/** The /model slash command — lists or switches the conversation's LLM profile. */
export declare const MODEL_COMMAND = "/model";
/** The /goal slash command — drives the agent toward an objective, judging completion each round. */
export declare const GOAL_COMMAND = "/goal";
/** The /plan slash command — switches the conversation into Plan mode. */
export declare const PLAN_COMMAND = "/plan";
/** The /code slash command — switches the conversation back to Code mode. */
export declare const CODE_COMMAND = "/code";
/** Built-in slash commands surfaced in the menu for V1 conversations. */
export declare const BUILT_IN_COMMANDS: SlashCommandItem[];
export declare const METADATA_PREFIXES: readonly string[];

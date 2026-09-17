import React from "react";
import { I18nKey } from "#/i18n/declaration";
export declare const COMMAND_MENU_ROUTE: {
    readonly conversations: "/conversations";
    readonly customize: "/customize";
    readonly automations: string;
    readonly mcp: "/mcp";
    readonly settings: "/settings";
    readonly agentSettings: "/settings/agents";
    readonly llmSettings: "/settings/llm";
    readonly condenserSettings: "/settings/condenser";
    readonly verificationSettings: "/settings/verification";
    readonly appSettings: "/settings/app";
    readonly secretsSettings: "/settings/secrets";
};
export type CommandMenuGroupId = "navigation" | "settings" | "actions";
export type CommandMenuItemId = "new-chat" | "customize" | "automations" | "mcp" | "settings" | "agent-settings" | "llm-settings" | "condenser-settings" | "verification-settings" | "app-settings" | "secrets-settings" | "toggle-sidebar";
export interface CommandMenuItemDefinition {
    id: CommandMenuItemId;
    group: CommandMenuGroupId;
    /** Absent on an item whose copy a manifest owns, which sets the literal. */
    titleKey?: I18nKey;
    descriptionKey?: I18nKey;
    keywordsKey?: I18nKey;
    /** Literal copy, for an item a manifest owns. */
    title?: string;
    description?: string;
    keywords?: string;
    icon: React.ReactElement;
    to?: string;
    perform?: () => void;
}
/**
 * An item's copy: its literal when a manifest owns the item, its translation
 * otherwise.
 */
export declare function commandMenuItemCopy(literal: string | undefined, key: I18nKey | undefined, translate: (key: I18nKey) => string): string;
export declare const COMMAND_MENU_GROUP_LABELS: Record<CommandMenuGroupId, I18nKey>;
export declare const COMMAND_MENU_GROUP_ORDER: CommandMenuGroupId[];
export declare const createCommandMenuItems: ({ toggleSidebar, }: {
    toggleSidebar: () => void;
}) => CommandMenuItemDefinition[];

import { Settings, SettingsFieldSchema, SettingsSchema, SettingsSectionSchema, SettingsValue } from "#/types/settings";
export type SettingsFormValues = Record<string, string | boolean>;
export type SettingsDirtyState = Record<string, boolean>;
export type SdkSettingsPayload = Record<string, SettingsValue>;
export type SettingsValueSource = "agent_settings" | "conversation_settings";
export type SettingsView = "basic" | "advanced" | "all";
/** Fields that are rendered by purpose-built components instead of the
 *  generic `SchemaField` renderer. */
export declare const SPECIALLY_RENDERED_KEYS: Set<string>;
/**
 * True when `schema` looks like a usable `SettingsSchema` — i.e. an
 * object with an array `sections` field. Guards every helper in this
 * module against malformed/empty schema responses (e.g. when the
 * frontend ends up pointing at a host that does not actually serve
 * `/api/settings/agent-schema`, such as an unconfigured Vercel preview
 * origin that returns the React Router SPA shell for arbitrary
 * `/api/*` paths). Without this check, `schema.sections.filter(...)`
 * inside `SdkSectionPage` blows up with
 * `Cannot read properties of undefined (reading 'filter')` and React
 * Router escalates to a full-screen error page.
 */
export declare function isValidSettingsSchema(schema: SettingsSchema | null | undefined): schema is SettingsSchema;
export declare function getSettingValue(settings: Settings, key: string, source?: SettingsValueSource): SettingsValue;
export declare function getAgentSettingValue(settings: Settings, key: string): SettingsValue;
export declare function getConversationSettingValue(settings: Settings, key: string): SettingsValue;
export declare function normalizeFieldValue(field: SettingsFieldSchema, rawValue: unknown): string | boolean;
export declare function normalizeComparableValue(field: SettingsFieldSchema, rawValue: unknown): boolean | number | string | null;
export declare function buildInitialSettingsFormValues(settings: Settings, schemaOverride?: SettingsSchema | null, source?: SettingsValueSource): SettingsFormValues;
export declare function inferInitialView(settings: Settings, schemaOverride?: SettingsSchema | null, source?: SettingsValueSource): SettingsView;
/** Determine which view tier to default to based on whether the user has
 *  overridden any non-critical settings. */
export declare function hasAdvancedSettingsOverrides(settings: Settings): boolean;
export declare function isSettingsFieldVisible(field: SettingsFieldSchema, values: SettingsFormValues): boolean;
export declare function coerceFieldValue(field: SettingsFieldSchema, rawValue: string | boolean): SettingsValue;
export declare function buildSdkSettingsPayload(schema: SettingsSchema, values: SettingsFormValues, dirty: SettingsDirtyState): SdkSettingsPayload;
export declare function buildSdkSettingsPayloadForView(schema: SettingsSchema, values: SettingsFormValues, dirty: SettingsDirtyState, view: SettingsView): SdkSettingsPayload;
/** Return sections with fields filtered for the current view tier.
 *  Specially-rendered fields are excluded from the generic list. */
export declare function getVisibleSettingsSections(schema: SettingsSchema, values: SettingsFormValues, view: SettingsView, excludeKeys?: Set<string>): SettingsSectionSchema[];
/** Whether the schema has any "critical" prominence fields (the basic tier). */
export declare function hasCriticalSettings(schema: SettingsSchema | null): boolean;
/** Whether the schema has any fields visible in the "advanced" tier. */
export declare function hasAdvancedSettings(schema: SettingsSchema | null): boolean;
/** Whether the schema has any "minor" prominence fields. */
export declare function hasMinorSettings(schema: SettingsSchema | null): boolean;

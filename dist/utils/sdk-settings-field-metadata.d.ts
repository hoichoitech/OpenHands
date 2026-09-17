import type { TFunction } from "i18next";
export interface SettingsFieldConstraints {
    min?: number;
    max?: number;
    step?: number;
}
/**
 * Generates a conventional i18n translation key from a schema field key.
 *
 * Convention: SCHEMA$<SECTION>$<FIELD_NAME>$<ATTRIBUTE>
 * Examples:
 *   - "llm.api_key" + "LABEL" → "SCHEMA$LLM$API_KEY$LABEL"
 *   - "agent" + "DESCRIPTION" → "SCHEMA$AGENT$DESCRIPTION"
 *   - "llm" + "SECTION_LABEL" → "SCHEMA$LLM$SECTION_LABEL"
 *
 * This follows Rails-style i18n conventions where translation keys are
 * derived from model/attribute names using a predictable pattern.
 */
export declare function toSchemaTranslationKey(fieldKey: string, attribute: "LABEL" | "DESCRIPTION" | "SECTION_LABEL"): string;
export declare function getSettingsFieldConstraints(fieldKey: string): SettingsFieldConstraints | undefined;
/**
 * Resolves a field label using the i18n fallback chain.
 * @see resolveSchemaFieldText for the fallback chain details.
 */
export declare function resolveSchemaFieldLabel(t: TFunction, fieldKey: string, schemaValue: string): string;
/**
 * Resolves a field description using the i18n fallback chain.
 * @see resolveSchemaFieldText for the fallback chain details.
 */
export declare function resolveSchemaFieldDescription(t: TFunction, fieldKey: string, schemaValue?: string | null): string | null;
/**
 * Resolves a section label using the i18n fallback chain.
 * @see resolveSchemaFieldText for the fallback chain details.
 */
export declare function resolveSchemaFieldSectionLabel(t: TFunction, sectionKey: string, schemaValue: string): string;
/**
 * Resolves a choice label for select fields using the i18n fallback chain.
 * Convention: SCHEMA$<FIELD_PATH>$CHOICE$<CHOICE_VALUE>
 *
 * Logs a warning if no translation is found and falling back to schema label.
 */
export declare function resolveSchemaChoiceLabel(t: TFunction, fieldKey: string, choiceValue: string | number | boolean, schemaLabel: string): string;

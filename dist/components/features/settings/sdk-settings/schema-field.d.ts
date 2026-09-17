import React from "react";
import { SettingsFieldSchema } from "#/types/settings";
/**
 * Field keys that should span the full settings grid (both columns on xl
 * screens) instead of sharing a row with the next field. Used for inputs
 * whose label + value + help link need horizontal room so they don't
 * sit awkwardly opposite a single toggle.
 */
export declare const FIELD_FULL_WIDTH_KEYS: ReadonlySet<string>;
export declare function SchemaField({ field, value, isDisabled, onChange, }: {
    field: SettingsFieldSchema;
    value: string | boolean;
    isDisabled: boolean;
    onChange: (value: string | boolean) => void;
}): React.JSX.Element;

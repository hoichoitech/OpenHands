import React from "react";
import { Settings, SettingsSchema, SettingsScope } from "#/types/settings";
import { SettingsDirtyState, SettingsFormValues, type SettingsValueSource, type SettingsView } from "#/utils/sdk-settings-schema";
export interface SettingsSourceConfig {
    /** Which schema/values bucket on `settings` this source pulls from. */
    settingsSource: SettingsValueSource;
    /** Section keys (e.g. ["llm"]) within that schema to render. */
    sectionKeys: string[];
    /** Field keys to skip (rendered elsewhere by the caller). */
    excludeKeys?: Set<string>;
}
export interface SdkSectionHeaderProps {
    values: SettingsFormValues;
    isDisabled: boolean;
    view: SettingsView;
    onChange: (key: string, value: string | boolean) => void;
}
/**
 * Snapshot of the page's save state, surfaced to the parent so it can
 * render its own Save/Next button (e.g. in onboarding) when
 * {@link SdkSectionPage}'s built-in button is hidden via
 * `hideSaveButton`.
 */
export interface SdkSectionSaveControl {
    /** Trigger a save of the currently-dirty fields. No-op while `isSaving` or `!isDirty`. */
    save: () => void;
    /** A save mutation is in flight. */
    isSaving: boolean;
    /** At least one field is dirty (or `extraDirty` was passed in). */
    isDirty: boolean;
    /** Current form values (for custom save flows). */
    values: SettingsFormValues;
    /** The active view tier (basic/advanced/all) the form is rendering. */
    view: SettingsView;
    /**
     * Returns the coerced, dirty-only payload as a nested object
     * (e.g. `{ llm: { temperature: 0.7 } }`). Lets a custom save flow persist
     * exactly the fields the user changed, with proper types, without
     * re-implementing schema-driven coercion. Throws if a field fails coercion.
     */
    getDirtyPayload: () => Record<string, unknown>;
}
/**
 * A generic SDK-schema-driven settings page that renders fields from one or
 * more schema sections.
 *
 * The `settingsSources` array specifies which schema(s)/section(s) the page
 * owns. The page tracks values/dirty state per source, renders sections from
 * each source in order (filtered by the schema's `prominence` field for the
 * selected view), and emits a combined save payload like
 * `{ conversation_settings_diff: {...}, agent_settings_diff: {...} }` ---
 * including only the keys for sources that actually have dirty changes.
 *
 * @param settingsSources  one or more schemas to render fields from
 * @param header           render prop above the fields (receives unified state)
 * @param buildPayload     customize the save payload before submission
 * @param testId           data-testid on the page wrapper
 */
export declare function SdkSectionPage({ settingsSources, scope, header, extraDirty, buildPayload, onSaveSuccess, getInitialView, forceShowAdvancedView, allowAllView, initialValueOverrides, markInitialOverridesDirty, embedded, hideSaveButton, suppressSuccessToast, onSaveControlChange, testId, }: {
    settingsSources: SettingsSourceConfig[];
    scope?: SettingsScope;
    header?: (props: SdkSectionHeaderProps) => React.ReactNode;
    extraDirty?: boolean;
    /**
     * Customize the save payload. Receives the wrapped default payload (e.g.
     * `{ agent_settings_diff: { llm: { model: "gpt-4" } } }`) plus the unified
     * form context. Return the payload to actually send.
     */
    buildPayload?: (defaultPayload: Record<string, unknown>, context: {
        values: SettingsFormValues;
        dirty: SettingsDirtyState;
        view: SettingsView;
    }) => Record<string, unknown>;
    onSaveSuccess?: () => void;
    getInitialView?: (settings: Settings, filteredSchema: SettingsSchema) => SettingsView;
    forceShowAdvancedView?: boolean;
    allowAllView?: boolean;
    /**
     * Per-field initial value overrides that win over the values derived from
     * `useSettings`. When {@link markInitialOverridesDirty} is true (default),
     * override keys also start dirty so onboarding can save a prefill without
     * a touch. Profile editors should pass `false` so Save stays off until the
     * user changes something.
     */
    initialValueOverrides?: SettingsFormValues;
    /** @default true */
    markInitialOverridesDirty?: boolean;
    embedded?: boolean;
    hideSaveButton?: boolean;
    /** Suppress the default success toast after save completes. */
    suppressSuccessToast?: boolean;
    /**
     * Fires whenever the save state changes (a mutation starts/finishes,
     * dirty status flips). Provides a stable `save()` callback the
     * parent can wire to its own button. Useful when the form is
     * embedded in a custom flow and the built-in Save button is hidden.
     */
    onSaveControlChange?: (control: SdkSectionSaveControl) => void;
    testId?: string;
}): React.JSX.Element;

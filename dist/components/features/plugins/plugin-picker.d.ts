import type { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
interface PluginPickerProps {
    /** Currently-attached plugin references (controlled). */
    selected: PluginSpec[];
    /** Called with the next selection whenever the user toggles a plugin. */
    onChange: (next: PluginSpec[]) => void;
    /** Render the toggles read-only (e.g. while a parent submit is in flight). */
    disabled?: boolean;
}
/**
 * Reusable, controlled multi-select over the dynamic plugins catalog
 * (`usePluginsMarketplace`). Selection lives in the parent as `PluginSpec[]`;
 * this component only reads the catalog, filters it, and reports toggles. It is
 * surface-agnostic so the new-conversation flow and the automations UI can both
 * embed it. No install/enable/disable — that is the plugins management page.
 */
export declare function PluginPicker({ selected, onChange, disabled, }: PluginPickerProps): import("react").JSX.Element;
export {};

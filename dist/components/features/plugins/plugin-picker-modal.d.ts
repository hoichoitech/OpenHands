import type { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
interface PluginPickerModalProps {
    selected: PluginSpec[];
    onChange: (next: PluginSpec[]) => void;
    onClose: () => void;
}
/** Modal shell around the reusable {@link PluginPicker} for the launcher flow. */
export declare function PluginPickerModal({ selected, onChange, onClose, }: PluginPickerModalProps): import("react").JSX.Element;
export {};

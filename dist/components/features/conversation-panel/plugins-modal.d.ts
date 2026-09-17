interface PluginsModalProps {
    onClose: () => void;
}
/**
 * Display-only view of the plugins loaded into the current conversation,
 * captured in client-side metadata at creation (explicitly attached plugins
 * plus the enabled installed plugins the SDK auto-loads). Mirrors
 * {@link SkillsModal}. The agent-server doesn't expose a live conversation's
 * loaded plugins, so this reads that client-side snapshot.
 */
export declare function PluginsModal({ onClose }: PluginsModalProps): import("react").JSX.Element;
export {};

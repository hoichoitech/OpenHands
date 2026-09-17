import type { Automation } from "#/types/automation";
interface ConfigurationSectionProps {
    automation: Automation;
    /**
     * Identity the automation runs as — the creator's email, or their raw user
     * id when the email could not be resolved. Omitted/null hides the field
     * (local backends, or while the lookup is still in flight).
     */
    runsAs?: string | null;
}
export declare function ConfigurationSection({ automation, runsAs, }: ConfigurationSectionProps): import("react").JSX.Element;
export {};

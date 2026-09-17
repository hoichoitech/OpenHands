import React from "react";
import { type ACPProviderSecretField } from "#/constants/acp-providers";
interface AcpSecretFieldProps {
    field: ACPProviderSecretField;
    value: string;
    onChange: (value: string) => void;
    alreadySet: boolean;
    testId: string;
    showOptionalTag?: boolean;
}
/**
 * Renders a single ACP credential field — a multiline textarea for file-content
 * blobs (Codex auth.json, Gemini SA JSON) or a masked/plain {@link SettingsInput}
 * for everything else — plus its hint text. Used by both the onboarding
 * credentials step and the Settings → Agent credentials section.
 */
export declare function AcpSecretField({ field, value, onChange, alreadySet, testId, showOptionalTag, }: AcpSecretFieldProps): React.JSX.Element;
export {};

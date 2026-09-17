import React from "react";
/**
 * Warning lines for credential pairs that break each other at runtime (see
 * ``getAcpCredentialConflicts``). Rendered identically by the onboarding
 * credentials step and the Settings → Agent credentials section.
 */
export declare function AcpConflictWarnings({ conflicts, }: {
    conflicts: Array<[string, string]>;
}): React.JSX.Element;

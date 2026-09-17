import React from "react";
/**
 * Full-screen prompt shown when the server is in public mode
 * (`VITE_AUTH_REQUIRED=true`) and no valid API key has been configured.
 *
 * Reuses {@link BackendForm} with `hostReadOnly` + `onSubmitOverride`
 * to render the standard name / host / API-key inputs while adding
 * server-side validation (calls `GET /api/settings` before persisting)
 * and a connection status indicator.
 */
export default function ApiKeyEntryScreen(): React.JSX.Element;

import React from "react";
import { MCPServerConfig } from "#/types/mcp-server";
interface CustomServerEditorProps {
    server: MCPServerConfig;
    existingServers: MCPServerConfig[];
    onClose: () => void;
}
/**
 * Modal wrapper around `MCPServerForm` so users can hand-author
 * arbitrary stdio / SSE / SHTTP entries without reaching for raw JSON.
 * An empty `server.id` means "Add new".
 */
export declare function CustomServerEditor({ server, existingServers, onClose, }: CustomServerEditorProps): React.JSX.Element;
export {};

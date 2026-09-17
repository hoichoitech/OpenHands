import React from "react";
import type { MCPServerConfig } from "#/types/mcp-server";
export interface TestMessage {
    ok: boolean;
    text: string;
}
interface MCPServerFormProps {
    mode: "add" | "edit";
    server?: MCPServerConfig;
    existingServers?: MCPServerConfig[];
    onSubmit: (server: MCPServerConfig) => void;
    onCancel: () => void;
    onDelete?: () => void;
    isActionDisabled?: boolean;
    onTest?: (server: MCPServerConfig) => void;
    isTestPending?: boolean;
    testMessage?: TestMessage | null;
}
export declare function MCPServerForm({ mode, server, existingServers, onSubmit, onCancel, onDelete, isActionDisabled, onTest, isTestPending, testMessage, }: MCPServerFormProps): React.JSX.Element;
export {};

import type { MCPAuthCredential, MCPOAuthAuthentication } from "@openhands/typescript-client";
export type { MCPAuthCredential, MCPOAuthAuthentication, MCPOAuthState, } from "@openhands/typescript-client";
export type MCPAuthenticationConfig = MCPOAuthAuthentication;
export type MCPOAuthAuthenticationConfig = MCPOAuthAuthentication;
export type MCPOAuthClientAuthMethod = NonNullable<MCPOAuthAuthentication["client_auth_method"]>;
export declare const MCP_AUTH_STRATEGIES: readonly ["none", "api_key", "bearer", "basic", "header", "oauth2"];
export declare const isMcpAuthCredential: (value: unknown) => value is MCPAuthCredential;

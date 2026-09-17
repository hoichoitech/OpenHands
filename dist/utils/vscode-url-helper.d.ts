/**
 * Helper function to transform VS Code URLs
 *
 * This function checks if a VS Code URL points to localhost and replaces it with
 * the current window's hostname if they don't match.
 *
 * @param vsCodeUrl The original VS Code URL from the backend
 * @returns The transformed URL with the correct hostname
 */
export declare function transformVSCodeUrl(vsCodeUrl: string | null): string | null;

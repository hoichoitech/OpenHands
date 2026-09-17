import type { HookConfig } from "@openhands/typescript-client";
declare class HooksService {
    /**
     * Load workspace hooks from the agent-server by calling POST /api/hooks.
     * Returns the HookConfig if the workspace has hooks, or null.
     * Gracefully returns null when no usable local backend is available
     * (cloud backend, unseeded registry, or older agent-server).
     * `projectDir` must be the workspace root: the agent-server checks
     * `<project_dir>/.openhands/hooks.json` literally and never walks parents.
     */
    static loadWorkspaceHooks(projectDir?: string): Promise<HookConfig | null>;
}
export default HooksService;

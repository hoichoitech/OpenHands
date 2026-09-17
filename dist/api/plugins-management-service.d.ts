import type { PluginBundledSkill } from "./plugins-service";
/**
 * An installed plugin, as returned by the agent-server management router
 * (`GET /api/plugins/installed`). Matches the typescript-client
 * `InstalledPluginInfo`. The contents fields (`skills`, `files`, relative to
 * `install_path`) are absent on older agent-servers and null when the
 * installed plugin directory failed to load.
 */
export interface InstalledPluginInfo {
    name: string;
    version: string;
    description: string | null;
    enabled: boolean;
    source: string;
    resolved_ref?: string | null;
    repo_path?: string | null;
    installed_at: string;
    install_path: string;
    skills?: PluginBundledSkill[] | null;
    files?: string[] | null;
}
/** Coordinates for installing a plugin from a git source or local path. */
export interface InstallPluginRequest {
    source: string;
    ref?: string | null;
    repo_path?: string | null;
    force?: boolean;
}
/**
 * Front-end management layer for installed plugins: list / install / enable /
 * disable / uninstall / refresh. Kept separate from the read-only catalog
 * service (`plugins-service.ts`), exactly as skills separate the marketplace
 * catalog from install actions.
 *
 * Local backend only for now (per Appendix C Q5): installed plugins live on the
 * local agent-server's `~/.openhands/plugins/installed/`. A cloud backend has no
 * per-user installed store yet, so reads return an empty list and mutating
 * actions throw (the UI also disables them on cloud).
 */
declare class PluginsManagementService {
    static listInstalledPlugins(): Promise<InstalledPluginInfo[]>;
    static installPlugin(request: InstallPluginRequest): Promise<InstalledPluginInfo>;
    static setPluginEnabled(name: string, enabled: boolean): Promise<{
        name: string;
        enabled: boolean;
    }>;
    static uninstallPlugin(name: string): Promise<{
        message: string;
    }>;
    static refreshPlugin(name: string): Promise<{
        message: string;
        plugin: InstalledPluginInfo;
    }>;
}
export default PluginsManagementService;

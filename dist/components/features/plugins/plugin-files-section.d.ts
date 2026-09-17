import React from "react";
interface PluginFilesSectionProps {
    /** Plugin directory on the agent-server (`path`/`install_path`). */
    basePath: string;
    /** File paths relative to `basePath`, as reported by the agent-server. */
    files: string[];
}
/**
 * "Files" section of the plugin detail modal: the plugin's file tree with an
 * inline viewer for the selected file. Clicking the selected file again
 * deselects it and closes the viewer.
 */
export declare function PluginFilesSection({ basePath, files, }: PluginFilesSectionProps): React.JSX.Element;
export {};

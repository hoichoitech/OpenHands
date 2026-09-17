export declare const AGENT_CANVAS_RELEASE_NOTES_URL = "https://github.com/OpenHands/OpenHands/releases";
/** Literal shell commands — intentionally not localized. */
export declare const AGENT_CANVAS_UPDATE_COMMANDS: {
    readonly npm: "npm install -g @openhands/agent-canvas@latest";
    readonly docker: "docker pull ghcr.io/openhands/agent-canvas:latest";
};
export declare function fetchLatestAgentCanvasVersion(signal?: AbortSignal): Promise<string>;

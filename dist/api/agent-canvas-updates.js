//#region src/api/agent-canvas-updates.ts
var e = "https://registry.npmjs.org/@openhands/agent-canvas/latest", t = "https://github.com/OpenHands/OpenHands/releases", n = {
	npm: "npm install -g @openhands/agent-canvas@latest",
	docker: "docker pull ghcr.io/openhands/agent-canvas:latest"
};
async function r(t) {
	let n = await fetch(e, {
		signal: t,
		headers: { Accept: "application/json" }
	});
	if (!n.ok) throw Error(`npm registry responded ${n.status}`);
	let r = (await n.json())?.version;
	if (typeof r != "string" || !r.trim()) throw Error("npm registry response missing version");
	return r.trim();
}
//#endregion
export { t as AGENT_CANVAS_RELEASE_NOTES_URL, n as AGENT_CANVAS_UPDATE_COMMANDS, r as fetchLatestAgentCanvasVersion };

//# sourceMappingURL=agent-canvas-updates.js.map
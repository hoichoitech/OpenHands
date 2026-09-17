//#region src/api/backend-registry/auth.ts
function e(e) {
	return e.kind === "cloud" && e.authMode === "cookie" || !e.apiKey ? {} : e.kind === "cloud" ? { Authorization: `Bearer ${e.apiKey}` } : { "X-Session-API-Key": e.apiKey };
}
//#endregion
export { e as buildAuthHeaders };

//# sourceMappingURL=auth.js.map
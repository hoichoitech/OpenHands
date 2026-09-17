//#region src/api/mcp-health/mcp-health-store.ts
var e = {}, t = /* @__PURE__ */ new Set(), n = 1;
function r(n) {
	e = n, t.forEach((e) => e());
}
function i() {
	return e;
}
function a(e) {
	return t.add(e), () => {
		t.delete(e);
	};
}
function o(t) {
	let i = n;
	return n += 1, r({
		...e,
		[t]: {
			status: "checking",
			checkId: i
		}
	}), i;
}
function s(t, n, i) {
	let a = e[t];
	a?.status !== "checking" || a.checkId !== n || r({
		...e,
		[t]: i
	});
}
function c(t, n) {
	r({
		...e,
		[t]: n
	});
}
function l(t) {
	if (!(t in e)) return;
	let { [t]: n, ...i } = e;
	r(i);
}
//#endregion
export { o as beginMcpHealthCheck, l as clearMcpServerHealth, i as getMcpHealthSnapshot, s as resolveMcpHealthCheck, c as setMcpServerHealth, a as subscribeMcpHealth };

//# sourceMappingURL=mcp-health-store.js.map
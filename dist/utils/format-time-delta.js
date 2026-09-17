//#region src/utils/format-time-delta.ts
var e = (e) => e.includes("Z") || e.match(/[+-]\d{2}:\d{2}$/) !== null ? new Date(e) : /* @__PURE__ */ new Date(`${e}Z`), t = (t) => {
	let n = typeof t == "string" ? e(t) : t, r = (/* @__PURE__ */ new Date()).getTime() - n.getTime(), i = Math.floor(r / 1e3), a = Math.floor(i / 60), o = Math.floor(a / 60), s = Math.floor(o / 24), c = Math.floor(s / 30), l = Math.floor(c / 12);
	return i < 60 ? `${i}s` : a < 60 ? `${a}m` : o < 24 ? `${o}h` : s < 30 ? `${s}d` : c < 12 ? `${c}mo` : `${l}y`;
};
//#endregion
export { t as formatTimeDelta };

//# sourceMappingURL=format-time-delta.js.map
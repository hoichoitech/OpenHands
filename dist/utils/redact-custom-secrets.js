//#region src/utils/redact-custom-secrets.ts
var e = "<secret-hidden>";
function t(t) {
	let n = /(<CUSTOM_SECRETS>)([\s\S]*?)(<\/CUSTOM_SECRETS>|$)/gi, r = /^(\s*[^=:\n]+?\s*[:=]\s*)(.+?)\s*$/gm;
	return t.replace(n, (t, n, i, a) => `${n}${i.replace(r, (t, n, r) => r === e ? t : `${n}${e}`)}${a}`);
}
//#endregion
export { t as redactCustomSecrets };

//# sourceMappingURL=redact-custom-secrets.js.map
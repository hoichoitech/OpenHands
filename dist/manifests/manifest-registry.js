import { hasSetupBlock as e, validateSetupEntry as t } from "./manifest-validation.js";
//#region src/manifests/manifest-registry.ts
function n(n) {
	let r = [], i = /* @__PURE__ */ new Map();
	return n.forEach((n) => {
		if (!e(n)) return;
		let { valid: a, errors: o } = t(n);
		if (!a) {
			console.warn("Rejected a setup manifest:", o.join("; "));
			return;
		}
		let s = n;
		if (i.has(s.id)) {
			console.warn(`Rejected a setup manifest: id "${s.id}" is already registered`);
			return;
		}
		r.push(s), i.set(s.id, s);
	}), {
		entries: r,
		findById: (e) => i.get(e) ?? null
	};
}
//#endregion
export { n as createSetupRegistry };

//# sourceMappingURL=manifest-registry.js.map
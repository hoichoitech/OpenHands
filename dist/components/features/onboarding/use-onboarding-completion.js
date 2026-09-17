import e from "react";
//#region src/components/features/onboarding/use-onboarding-completion.ts
var t = "openhands-onboarded";
function n() {
	if (typeof window > "u") return !0;
	try {
		return window.localStorage.getItem(t) !== null;
	} catch {
		return !0;
	}
}
function r() {
	let [r, i] = e.useState(() => n());
	return e.useEffect(() => {
		let e = (e) => {
			e.key === "openhands-onboarded" && i(n());
		};
		return window.addEventListener("storage", e), () => window.removeEventListener("storage", e);
	}, []), {
		isCompleted: r,
		markCompleted: e.useCallback(() => {
			try {
				window.localStorage.setItem(t, "1");
			} catch {}
			i(!0);
		}, [])
	};
}
//#endregion
export { r as useOnboardingCompletion };

//# sourceMappingURL=use-onboarding-completion.js.map
import e from "react";
//#region src/hooks/use-click-outside-element.ts
var t = (t, n) => {
	let r = e.useRef(null), i = e.useRef(t);
	return e.useEffect(() => {
		i.current = t;
	}, [t]), e.useEffect(() => {
		let e = (e) => {
			let t = e.target;
			r.current && (r.current.contains(t) || n?.current?.contains(t) || i.current());
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [n]), r;
};
//#endregion
export { t as useClickOutsideElement };

//# sourceMappingURL=use-click-outside-element.js.map
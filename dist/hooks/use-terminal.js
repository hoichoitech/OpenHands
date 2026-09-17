import { useCommandStore as e } from "../stores/command-store.js";
import { o as t } from "../node_modules/@xterm/addon-fit/lib/addon-fit.js";
import { Dl as n } from "../node_modules/@xterm/xterm/lib/xterm.js";
import { parseTerminalOutput as r } from "../utils/parse-terminal-output.js";
import i from "react";
//#region src/hooks/use-terminal.ts
var a = (e, t, n = !1) => {
	let { content: i, type: a } = e;
	if (a === "input" && n) return;
	let o = (i || "").replaceAll("\n", "\r\n").trim();
	o && t.writeln(r(o));
}, o = (e, t, n) => {
	if (!e || !t || !n || window.getComputedStyle(n).display === "none") return !1;
	let { clientWidth: r, clientHeight: i } = n;
	return !(r === 0 || i === 0 || !e.element);
};
function s(e) {
	let t = e.ownerDocument.createElement("span");
	t.style.color = "var(--oh-surface-foreground)", t.style.position = "absolute", t.style.visibility = "hidden", t.style.pointerEvents = "none", e.appendChild(t);
	let n = getComputedStyle(t).color;
	return t.remove(), n && n !== "rgba(0, 0, 0, 0)" ? n : getComputedStyle(e).color;
}
var c = { current: 0 }, l = () => {
	let r = e((e) => e.commands), l = i.useRef(null), u = i.useRef(null), d = i.useRef(null), f = c, p = i.useRef(!1), m = (e) => new n({
		fontFamily: "Menlo, Monaco, 'Courier New', monospace",
		fontSize: 14,
		scrollback: 1e4,
		scrollSensitivity: 1,
		fastScrollSensitivity: 5,
		disableStdin: !0,
		allowTransparency: !0,
		theme: {
			background: "rgba(0, 0, 0, 0)",
			foreground: s(e)
		}
	}), h = i.useCallback(() => {
		p.current || o(l.current, u.current, d.current) && u.current.fit();
	}, []), g = () => {
		l.current && (u.current && l.current.loadAddon(u.current), d.current && (l.current.open(d.current), l.current.write("\x1B[?25l"), h()));
	};
	return i.useEffect(() => {
		p.current = !1;
		let e = d.current;
		if (e) {
			if (l.current = m(e), u.current = new t(), d.current && (g(), r.length > 0)) {
				for (let e = 0; e < r.length; e += 1) r[e].type === "input" && l.current.write("$ "), a(r[e], l.current, !1);
				f.current = r.length;
			}
			return () => {
				p.current = !0, l.current?.dispose(), f.current = 0;
			};
		}
	}, []), i.useEffect(() => {
		if (l.current && r.length > 0 && f.current < r.length) {
			for (let e = f.current; e < r.length; e += 1) r[e].type === "input" && l.current.write("$ "), a(r[e], l.current, !1);
			f.current = r.length;
		}
	}, [r]), i.useEffect(() => {
		let e = null;
		return e = new ResizeObserver(() => {
			requestAnimationFrame(() => {
				h();
			});
		}), d.current && e.observe(d.current), () => {
			e?.disconnect();
		};
	}, [h]), d;
};
//#endregion
export { l as useTerminal };

//# sourceMappingURL=use-terminal.js.map
var e = /* @__PURE__ */ new Set(), t = null;
function n(t) {
	typeof document < "u" && (t.visible ? document.body.setAttribute("data-environment-switching", "true") : document.body.removeAttribute("data-environment-switching")), e.forEach((e) => e());
}
function r(e) {
	n({
		visible: !0,
		target: e
	}), t && clearTimeout(t), t = setTimeout(() => {
		n({
			visible: !1,
			target: ""
		}), t = null;
	}, 980);
}
//#endregion
export { r as triggerEnvironmentSwitch };

//# sourceMappingURL=environment-switch-store.js.map
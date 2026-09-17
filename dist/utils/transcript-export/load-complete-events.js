var e = (e, t) => (e.timestamp ?? "").localeCompare(t.timestamp ?? ""), t = async (t, n, r) => {
	let i = [], a = /* @__PURE__ */ new Set(), o = [], s = 0, c = /* @__PURE__ */ new Set(), l, u, d = !1, f = !1;
	for (;;) {
		let e = await n({
			limit: 100,
			sortOrder: "TIMESTAMP_DESC",
			strictPagination: !0,
			...u ? { pageId: u } : {},
			...l ? { timestampLt: l } : {}
		});
		if (!Array.isArray(e.items)) throw Error("Invalid transcript history response: expected page.items to be an array.");
		i.push(...e.items);
		let t, o = !1;
		if (e.items.forEach((e) => {
			a.has(e.id ?? "") || (e.id ? a.add(e.id) : s += 1, o = !0), (!t || (e.timestamp ?? "") < t) && (t = e.timestamp ?? "");
		}), e.next_page_id) {
			if (c.has(e.next_page_id)) throw Error("Transcript history pagination repeated a page cursor.");
			c.add(e.next_page_id), u = e.next_page_id, l = void 0, d = !0;
			continue;
		}
		if (d && !f || e.items.length < 100) break;
		if (r === void 0) throw Error("Transcript history pagination cannot prove that all events were loaded.");
		if (!t || l && (!o || t >= l)) throw Error("Transcript history pagination did not advance.");
		u = void 0, l = t, f = !0;
	}
	let p = /* @__PURE__ */ new Map();
	i.slice().reverse().forEach((e) => {
		if (e.id !== void 0) {
			p.has(e.id) || p.set(e.id, e);
			return;
		}
		o.push(e);
	}), t.forEach((e) => {
		if (e.id !== void 0) {
			p.has(e.id) || p.set(e.id, e);
			return;
		}
		o.push(e);
	});
	let m = [...o, ...p.values()].sort(e);
	if (r !== void 0 && a.size + s < r) throw Error(`Transcript history is incomplete: expected ${r} persisted events, received ${a.size + s}.`);
	return m;
};
//#endregion
export { t as loadCompleteTranscriptEvents };

//# sourceMappingURL=load-complete-events.js.map
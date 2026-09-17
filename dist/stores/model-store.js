import { create as e } from "../node_modules/zustand/esm/react.js";
import { devtools as t } from "../node_modules/zustand/esm/middleware.js";
import n from "../node_modules/uuid/dist/v4.js";
//#region src/stores/model-store.ts
var r = (e, t, n) => ({ entriesByConversation: {
	...e.entriesByConversation,
	[t]: [...e.entriesByConversation[t] ?? [], n]
} }), i = e()(t((e) => ({
	entriesByConversation: {},
	activeProfileByConversation: {},
	show: (t, i, a) => e((e) => r(e, t, {
		id: n(),
		anchorEventId: i,
		profiles: a
	})),
	recordSwitch: (t, i, a) => e((e) => ({
		...r(e, t, {
			id: n(),
			anchorEventId: i,
			profiles: [],
			switchedTo: a
		}),
		activeProfileByConversation: {
			...e.activeProfileByConversation,
			[t]: a
		}
	})),
	seedSwitches: (t, n) => e((e) => {
		let r = e.entriesByConversation[t] ?? [], i = new Set(r.map((e) => e.id)), a = n.filter((e) => !i.has(e.id)).map((e) => ({
			id: e.id,
			anchorEventId: e.anchorEventId,
			profiles: [],
			switchedTo: e.profileName
		}));
		return a.length === 0 ? e : { entriesByConversation: {
			...e.entriesByConversation,
			[t]: [...r, ...a]
		} };
	}),
	setActiveProfile: (t, n) => e((e) => ({ activeProfileByConversation: {
		...e.activeProfileByConversation,
		[t]: n
	} })),
	clearActiveProfile: (t) => e((e) => {
		if (!(t in e.activeProfileByConversation)) return e;
		let n = { ...e.activeProfileByConversation };
		return delete n[t], { activeProfileByConversation: n };
	}),
	clear: (t) => e((e) => {
		let n = { ...e.entriesByConversation };
		delete n[t];
		let r = { ...e.activeProfileByConversation };
		return delete r[t], {
			entriesByConversation: n,
			activeProfileByConversation: r
		};
	}),
	clearAll: () => e({
		entriesByConversation: {},
		activeProfileByConversation: {}
	})
}), { name: "ModelStore" }));
//#endregion
export { i as useModelStore };

//# sourceMappingURL=model-store.js.map
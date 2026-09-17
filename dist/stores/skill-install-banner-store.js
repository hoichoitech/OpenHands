import { create as e } from "../node_modules/zustand/esm/react.js";
import { devtools as t } from "../node_modules/zustand/esm/middleware.js";
//#region src/stores/skill-install-banner-store.ts
var n = { dismissedEventIds: {} }, r = e()(t((e) => ({
	...n,
	dismiss: (t) => e((e) => ({ dismissedEventIds: {
		...e.dismissedEventIds,
		...Object.fromEntries(t.map((e) => [e, !0]))
	} }))
}), { name: "SkillInstallBannerStore" }));
//#endregion
export { r as useSkillInstallBannerStore };

//# sourceMappingURL=skill-install-banner-store.js.map
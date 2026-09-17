//#region src/manifests/types.ts
var e = ["form", "automation"], t = "config.json", n = ["list", "templates"], r = [
	"layout-dashboard",
	"sparkles",
	"library",
	"bot",
	"circle-alert",
	"activity",
	"timer"
], i = [
	"automations",
	"needs-attention",
	"total-runs",
	"average-duration"
], a = {
	automations: ["active"],
	"needs-attention": [],
	"total-runs": [],
	"average-duration": []
}, o = {
	status: [
		"all",
		"active",
		"failing",
		"disabled"
	],
	trigger: [
		"all",
		"schedule",
		"event"
	]
}, s = Object.keys(o), c = [
	"last-run",
	"runs",
	"name"
];
//#endregion
export { t as BUNDLE_CONFIG_FILENAME, s as DASHBOARD_FILTER_IDS, o as DASHBOARD_FILTER_VALUES, c as DASHBOARD_SORT_VALUES, r as INTERFACE_ICON_SLUGS, n as INTERFACE_SUB_PAGE_IDS, i as OVERVIEW_METRICS, a as OVERVIEW_TILE_PLACEHOLDERS, e as SETUP_PLACEHOLDER_NAMESPACES };

//# sourceMappingURL=types.js.map
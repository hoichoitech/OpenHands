import { LLM_SUBSCRIPTION_SCHEMA_FIELDS as e } from "../constants/llm-subscription.js";
//#region src/utils/llm-subscription-schema.ts
var t = "llm";
function n(n) {
	if (!n?.sections) return n;
	let r = !1, i = n.sections.map((n) => {
		if (n.key !== t) return n;
		let i = new Set(n.fields.map((e) => e.key)), a = e.filter((e) => !i.has(e.key));
		return a.length === 0 ? n : (r = !0, {
			...n,
			fields: [...n.fields, ...a]
		});
	});
	return r ? {
		...n,
		sections: i
	} : n;
}
//#endregion
export { n as withLlmSubscriptionSchemaFields };

//# sourceMappingURL=llm-subscription-schema.js.map
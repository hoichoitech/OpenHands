//#region src/utils/type-guards.ts
var e = (e) => typeof e.response?.data == "object" && e.response?.data !== null && "error" in e.response.data && typeof e.response?.data?.error == "string", t = (e) => typeof e.response?.data == "object" && e.response?.data !== null && "message" in e.response.data && typeof e.response?.data?.message == "string";
//#endregion
export { e as isAxiosErrorWithErrorField, t as isAxiosErrorWithMessageField };

//# sourceMappingURL=type-guards.js.map
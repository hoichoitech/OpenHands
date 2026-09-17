import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
//#region src/hooks/query/use-is-authed.ts
var t = () => e({
	queryKey: ["user", "authenticated"],
	queryFn: async () => !0,
	staleTime: 1e3 * 60 * 5,
	gcTime: 1e3 * 60 * 15,
	retry: !1,
	meta: { disableToast: !0 }
});
//#endregion
export { t as useIsAuthed };

//# sourceMappingURL=use-is-authed.js.map
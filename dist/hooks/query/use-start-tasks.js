import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
//#region src/hooks/query/use-start-tasks.ts
var t = (t = 10) => e({
	queryKey: [
		"start-tasks",
		"search",
		t
	],
	queryFn: () => [],
	select: (e) => e.filter((e) => e.status !== "READY" && e.status !== "ERROR")
});
//#endregion
export { t as useStartTasks };

//# sourceMappingURL=use-start-tasks.js.map
import { LOCAL_WORKSPACES_QUERY_KEYS as e } from "../query/query-keys.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import r from "../../api/workspaces-service/workspaces-service.api.js";
//#region src/hooks/mutation/use-local-workspaces-mutations.ts
function i() {
	let i = t();
	return n({
		mutationFn: (e) => r.addWorkspaces(e),
		onSuccess: () => i.invalidateQueries({ queryKey: e.all })
	});
}
function a() {
	let i = t();
	return n({
		mutationFn: (e) => r.removeWorkspace(e),
		onSuccess: () => i.invalidateQueries({ queryKey: e.all })
	});
}
function o() {
	let i = t();
	return n({
		mutationFn: (e) => r.addWorkspaceParents(e),
		onSuccess: () => i.invalidateQueries({ queryKey: e.all })
	});
}
function s() {
	let i = t();
	return n({
		mutationFn: (e) => r.removeWorkspaceParent(e),
		onSuccess: () => i.invalidateQueries({ queryKey: e.all })
	});
}
//#endregion
export { o as useAddWorkspaceParents, i as useAddWorkspaces, a as useRemoveWorkspace, s as useRemoveWorkspaceParent };

//# sourceMappingURL=use-local-workspaces-mutations.js.map
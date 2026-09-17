import { useRepositoryBranchesPaginated as e } from "./use-repository-branches.js";
import { useSearchBranches as t } from "./use-search-branches.js";
import { useMemo as n } from "react";
//#region src/hooks/query/use-branch-data.ts
function r(r, i, a, o, s, c) {
	let { data: l, fetchNextPage: u, hasNextPage: d, isLoading: f, isFetchingNextPage: p, isError: m } = e(r, 30, i), { data: h, isLoading: g } = t(r, o, 30, i), _ = n(() => l?.pages?.flatMap((e) => e.items) || [], [l]), v = n(() => a ? _.find((e) => e.name === a) : null, [_, a]), { data: y, isLoading: b } = t(r, a && !v && _.length > 0 && !o ? a : "", 30, i);
	return {
		branches: n(() => {
			let e = o && h && s !== c?.name, t = e ? h : _;
			if (a) {
				let n = e ? t.find((e) => e.name === a) : v;
				if (!n && y && y.length > 0) n = y.find((e) => e.name === a), n && (t = [n, ...t]);
				else if (n) {
					let e = t.filter((e) => e.name !== a);
					t = [n, ...e];
				}
			}
			return t;
		}, [
			o,
			h,
			_,
			c,
			s,
			a,
			v,
			y
		]),
		allBranches: _,
		fetchNextPage: u,
		hasNextPage: d,
		isLoading: f || b,
		isFetchingNextPage: p,
		isError: m,
		isSearchLoading: g
	};
}
//#endregion
export { r as useBranchData };

//# sourceMappingURL=use-branch-data.js.map
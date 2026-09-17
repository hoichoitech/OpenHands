import { useGitRepositories as e } from "../../../../hooks/query/use-git-repositories.js";
import { useSearchRepositories as t } from "../../../../hooks/query/use-search-repositories.js";
import { useEffect as n, useMemo as r } from "react";
//#region src/components/features/home/git-repo-dropdown/use-repository-data.tsx
function i(i, a, o, s, c, l, u) {
	let { data: d, fetchNextPage: f, hasNextPage: p, isLoading: m, isFetchingNextPage: h, isError: g } = e({
		provider: i,
		enabled: !a
	}), { data: _, isLoading: v } = t(o, i, r(() => c === u, [u, c])), y = r(() => d?.pages?.flatMap((e) => e.items) || [], [d]), b = r(() => l && [
		...y,
		...s,
		..._ || []
	].find((e) => e.id === l) || null, [
		y,
		s,
		_,
		l
	]), x = r(() => s.length > 0 ? s : o && _ && c !== b?.full_name ? _ : y, [
		s,
		o,
		_,
		y,
		b,
		c
	]);
	return n(() => {
		!a && !m && !h && !v && p && !o && s.length === 0 && x.length > 0 && x.length < 10 && f();
	}, [
		a,
		m,
		h,
		v,
		p,
		o,
		s.length,
		x.length,
		f
	]), {
		repositories: x,
		allRepositories: y,
		selectedRepository: b,
		fetchNextPage: f,
		hasNextPage: p,
		isLoading: m,
		isFetchingNextPage: h,
		isError: g,
		isSearchLoading: v
	};
}
//#endregion
export { i as useRepositoryData };

//# sourceMappingURL=use-repository-data.js.map
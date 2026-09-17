import e from "../../../../api/git-service/git-service.api.js";
import { useEffect as t, useState as n } from "react";
//#region src/components/features/home/git-repo-dropdown/use-url-search.tsx
function r(r, i) {
	let [a, o] = n([]), [s, c] = n(!1);
	return t(() => {
		(async () => {
			if (!i) {
				o([]);
				return;
			}
			if (r.startsWith("https://")) {
				let t = r.match(/https:\/\/[^/]+\/([^/]+\/[^/]+)/);
				if (t) {
					let n = t[1];
					c(!0);
					try {
						o((await e.searchGitRepositories(n, i, 3)).items);
					} catch {
						o([]);
					} finally {
						c(!1);
					}
				} else o([]);
			} else o([]);
		})();
	}, [r, i]), {
		urlSearchResults: a,
		isUrlSearchLoading: s
	};
}
//#endregion
export { r as useUrlSearch };

//# sourceMappingURL=use-url-search.js.map
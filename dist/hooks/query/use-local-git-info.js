import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import { useActiveConversation as n } from "./use-active-conversation.js";
import { useRuntimeIsReady as r } from "../use-runtime-is-ready.js";
import { useBashCommandRunner as i } from "../use-bash-command-runner.js";
import { parseGitRemoteUrl as a } from "../../utils/parse-git-remote-url.js";
import { useRef as o } from "react";
//#region src/hooks/query/use-local-git-info.ts
var s = {
	repository: null,
	branch: null,
	provider: null,
	remoteUrl: null
}, c = [
	"r=$(git remote get-url origin 2>/dev/null)",
	"b=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)",
	"if [ -z \"$r$b\" ]; then",
	"n=$(find . -mindepth 2 -maxdepth 4 -name .git 2>/dev/null | cut -c3- | sed 's|/.git$||' | sort -u)",
	"c=$(printf '%s\\n' \"$n\" | grep -c '[^[:space:]]')",
	"if [ \"$c\" = \"1\" ] && [ -n \"$n\" ]; then",
	"r=$(git -C \"$n\" remote get-url origin 2>/dev/null)",
	"b=$(git -C \"$n\" rev-parse --abbrev-ref HEAD 2>/dev/null)",
	"fi",
	"fi",
	"printf '%s\\n%s' \"$r\" \"$b\""
].join("\n");
async function l(e, t) {
	let n = await e(c, t, 10);
	if (n.exit_code !== 0) return s;
	let r = n.stdout.indexOf("\n"), i = (r >= 0 ? n.stdout.slice(0, r) : n.stdout).trim(), o = (r >= 0 ? n.stdout.slice(r + 1) : "").trim(), l = o && o !== "HEAD" ? o : null;
	if (!i && !l) return s;
	let u = a(i);
	return {
		repository: u?.repository ?? null,
		provider: u?.provider ?? null,
		remoteUrl: i || null,
		branch: l
	};
}
var u = () => {
	let { data: a } = n(), s = r(), { backend: c } = t(), u = c.kind === "local", d = a?.id, f = a?.conversation_url, p = a?.session_api_key, m = a?.workspace?.working_dir?.trim(), h = !!a?.selected_repository, g = !!a?.git_provider, _ = !!a?.selected_branch, v = u && s && !!d && !!m && (!h || !g || !_), y = i(f, p, v), b = o(y);
	return b.current = y, e({
		queryKey: [
			"local-git-info",
			d,
			f,
			p,
			m
		],
		queryFn: async () => l((e, t, n) => b.current(e, t, n), m),
		enabled: v,
		retry: !1,
		staleTime: 1e4,
		refetchInterval: 1e4,
		gcTime: 1e3 * 60 * 5,
		meta: { disableToast: !0 }
	});
};
//#endregion
export { u as useLocalGitInfo };

//# sourceMappingURL=use-local-git-info.js.map
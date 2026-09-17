import { Bot as e } from "../../../../node_modules/lucide-react/dist/esm/icons/bot.js";
import { Briefcase as t } from "../../../../node_modules/lucide-react/dist/esm/icons/briefcase.js";
import { Building2 as n } from "../../../../node_modules/lucide-react/dist/esm/icons/building-2.js";
import { CircleUserRound as r } from "../../../../node_modules/lucide-react/dist/esm/icons/circle-user-round.js";
import { CloudCog as i } from "../../../../node_modules/lucide-react/dist/esm/icons/cloud-cog.js";
import { Earth as a } from "../../../../node_modules/lucide-react/dist/esm/icons/earth.js";
import { Flag as o } from "../../../../node_modules/lucide-react/dist/esm/icons/flag.js";
import { FolderGit2 as s } from "../../../../node_modules/lucide-react/dist/esm/icons/folder-git-2.js";
import { FolderKey as c } from "../../../../node_modules/lucide-react/dist/esm/icons/folder-key.js";
import { Folder as l } from "../../../../node_modules/lucide-react/dist/esm/icons/folder.js";
import { GitBranch as u } from "../../../../node_modules/lucide-react/dist/esm/icons/git-branch.js";
import { GitPullRequest as d } from "../../../../node_modules/lucide-react/dist/esm/icons/git-pull-request.js";
import { Hash as f } from "../../../../node_modules/lucide-react/dist/esm/icons/hash.js";
import { House as p } from "../../../../node_modules/lucide-react/dist/esm/icons/house.js";
import { IdCard as m } from "../../../../node_modules/lucide-react/dist/esm/icons/id-card.js";
import { KeyRound as h } from "../../../../node_modules/lucide-react/dist/esm/icons/key-round.js";
import { Layers as g } from "../../../../node_modules/lucide-react/dist/esm/icons/layers.js";
import { Link2 as _ } from "../../../../node_modules/lucide-react/dist/esm/icons/link-2.js";
import { Mails as v } from "../../../../node_modules/lucide-react/dist/esm/icons/mails.js";
import { MessagesSquare as y } from "../../../../node_modules/lucide-react/dist/esm/icons/messages-square.js";
import { Plug as b } from "../../../../node_modules/lucide-react/dist/esm/icons/plug.js";
import { SquareKanban as x } from "../../../../node_modules/lucide-react/dist/esm/icons/square-kanban.js";
import { Tag as S } from "../../../../node_modules/lucide-react/dist/esm/icons/tag.js";
import { Ticket as C } from "../../../../node_modules/lucide-react/dist/esm/icons/ticket.js";
import { UsersRound as w } from "../../../../node_modules/lucide-react/dist/esm/icons/users-round.js";
import { Waypoints as T } from "../../../../node_modules/lucide-react/dist/esm/icons/waypoints.js";
import { Webhook as E } from "../../../../node_modules/lucide-react/dist/esm/icons/webhook.js";
import { Wrench as D } from "../../../../node_modules/lucide-react/dist/esm/icons/wrench.js";
import { Zap as O } from "../../../../node_modules/lucide-react/dist/esm/icons/zap.js";
import { FaBitbucket as k, FaGithub as A, FaGitlab as j } from "../../../../node_modules/react-icons/fa6/index.js";
import M from "../../../../icons/slack.js";
//#region src/components/features/conversation-panel/conversation-card/conversation-tag-icons.ts
var N = new Set([
	"origin",
	"source",
	"git_provider"
]), P = new Set([
	"appmode",
	"app_mode",
	"mode"
]), F = {
	origin: T,
	source: _,
	git_provider: A,
	owner: r,
	user: r,
	author: r,
	assignee: r,
	env: i,
	environment: i,
	repo: s,
	repository: s,
	repo_name: s,
	branch: u,
	selected_branch: u,
	archiveworkspacepath: l,
	workspace: l,
	working_dir: l,
	team: w,
	org: n,
	organization: n,
	channel: f,
	email: v,
	automation: O,
	webhook: E,
	agent: e,
	project: x,
	ticket: C,
	issue: C,
	pr: d,
	pull_request: d,
	priority: o,
	status: m,
	id: h,
	integration: b,
	appmode: g,
	app_mode: g,
	mode: g,
	worktools: D,
	work_tools: D,
	tools: D,
	workwsid: c,
	work_wsid: c,
	wsid: c,
	workspace_id: c
}, I = {
	slack: M,
	discord: y,
	github: A,
	gitlab: j,
	bitbucket: k,
	bitbucket_data_center: k,
	azure_devops: u,
	email: v,
	mail: v,
	api: b,
	webhook: E,
	automation: O,
	review: d,
	linear: x,
	web: a,
	ui: a,
	canvas: a
}, L = {
	work: t,
	personal: p,
	home: p,
	private: p
};
function R(e, t) {
	let n = e.trim().toLowerCase(), r = t.trim().toLowerCase();
	return N.has(n) ? I[r] ?? F[n] ?? S : P.has(n) ? L[r] ?? F[n] ?? g : F[n] ?? S;
}
//#endregion
export { R as getConversationTagIcon };

//# sourceMappingURL=conversation-tag-icons.js.map
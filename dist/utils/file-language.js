//#region src/utils/file-language.ts
var e = {
	js: "javascript",
	jsx: "jsx",
	mjs: "javascript",
	cjs: "javascript",
	ts: "typescript",
	tsx: "tsx",
	py: "python",
	pyi: "python",
	pyw: "python",
	html: "markup",
	htm: "markup",
	svg: "markup",
	xml: "markup",
	css: "css",
	scss: "scss",
	sass: "sass",
	less: "less",
	json: "json",
	json5: "json5",
	yaml: "yaml",
	yml: "yaml",
	toml: "toml",
	ini: "ini",
	cfg: "ini",
	properties: "properties",
	conf: "ini",
	env: "bash",
	md: "markdown",
	markdown: "markdown",
	mdx: "markdown",
	sh: "bash",
	bash: "bash",
	zsh: "bash",
	fish: "bash",
	bat: "batch",
	cmd: "batch",
	ps1: "powershell",
	ps: "powershell",
	c: "c",
	h: "c",
	cpp: "cpp",
	cc: "cpp",
	cxx: "cpp",
	hpp: "cpp",
	hh: "cpp",
	cs: "csharp",
	java: "java",
	kt: "kotlin",
	kts: "kotlin",
	scala: "scala",
	rs: "rust",
	go: "go",
	rb: "ruby",
	php: "php",
	swift: "swift",
	m: "objectivec",
	mm: "objectivec",
	hs: "haskell",
	ex: "elixir",
	exs: "elixir",
	erl: "erlang",
	fs: "fsharp",
	fsx: "fsharp",
	ml: "ocaml",
	mli: "ocaml",
	clj: "clojure",
	cljs: "clojure",
	cljc: "clojure",
	lua: "lua",
	pl: "perl",
	pm: "perl",
	r: "r",
	jl: "julia",
	dart: "dart",
	groovy: "groovy",
	gradle: "groovy",
	tf: "hcl",
	hcl: "hcl",
	dockerfile: "docker",
	sql: "sql",
	graphql: "graphql",
	gql: "graphql",
	proto: "protobuf",
	diff: "diff",
	patch: "diff",
	nix: "nix",
	sol: "solidity"
}, t = {
	dockerfile: "docker",
	makefile: "makefile",
	gnumakefile: "makefile",
	".bashrc": "bash",
	".zshrc": "bash",
	".profile": "bash",
	".env": "bash",
	".gitignore": "bash",
	".dockerignore": "bash"
};
function n(e) {
	let t = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")), n = e.slice(t + 1), r = n.lastIndexOf(".");
	return r <= 0 ? "" : n.slice(r + 1).toLowerCase();
}
function r(e) {
	let t = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
	return e.slice(t + 1).toLowerCase();
}
function i(i, a) {
	let o = t[r(i)];
	if (o) return o;
	let s = n(i);
	if (s && e[s]) return e[s];
	if (a) {
		if (a === "text/html") return "markup";
		if (a === "text/css") return "css";
		if (a === "application/json") return "json";
		if (a === "text/markdown") return "markdown";
		if (a === "application/javascript" || a === "text/javascript") return "javascript";
		if (a === "application/x-yaml" || a === "text/yaml") return "yaml";
	}
	return null;
}
//#endregion
export { i as getPrismLanguageForFile };

//# sourceMappingURL=file-language.js.map
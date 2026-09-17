import e from "../../../node_modules/react-syntax-highlighter/dist/esm/prism-light.js";
import t from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/bash.js";
import n from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/batch.js";
import r from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/c.js";
import i from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/clike.js";
import a from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/clojure.js";
import o from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/cpp.js";
import s from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/csharp.js";
import c from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/css.js";
import l from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/dart.js";
import u from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/diff.js";
import d from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/docker.js";
import f from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/elixir.js";
import p from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/erlang.js";
import m from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/fsharp.js";
import h from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/go.js";
import g from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/graphql.js";
import _ from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/groovy.js";
import v from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/haskell.js";
import y from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/hcl.js";
import b from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/http.js";
import x from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/ini.js";
import S from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/java.js";
import C from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/javascript.js";
import w from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/json.js";
import T from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/json5.js";
import E from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/jsx.js";
import D from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/julia.js";
import O from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/kotlin.js";
import k from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/less.js";
import A from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/lua.js";
import j from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/makefile.js";
import M from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/markdown.js";
import N from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/markup.js";
import ee from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/matlab.js";
import P from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/nginx.js";
import F from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/nix.js";
import I from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/objectivec.js";
import L from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/ocaml.js";
import R from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/perl.js";
import z from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/php.js";
import B from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/powershell.js";
import V from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/properties.js";
import H from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/protobuf.js";
import U from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/python.js";
import W from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/r.js";
import G from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/regex.js";
import K from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/ruby.js";
import q from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/rust.js";
import J from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/sass.js";
import Y from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/scala.js";
import X from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/scss.js";
import Z from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/shell-session.js";
import Q from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/solidity.js";
import $ from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/sql.js";
import te from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/swift.js";
import ne from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/toml.js";
import re from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/tsx.js";
import ie from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/typescript.js";
import ae from "../../../node_modules/react-syntax-highlighter/dist/esm/languages/prism/yaml.js";
//#region src/components/features/markdown/syntax-highlighter.ts
var oe = {
	bash: t,
	batch: n,
	c: r,
	clike: i,
	clojure: a,
	cpp: o,
	csharp: s,
	css: c,
	dart: l,
	diff: u,
	docker: d,
	elixir: f,
	erlang: p,
	fsharp: m,
	go: h,
	graphql: g,
	groovy: _,
	haskell: v,
	hcl: y,
	http: b,
	ini: x,
	java: S,
	javascript: C,
	json: w,
	json5: T,
	jsx: E,
	julia: D,
	kotlin: O,
	less: k,
	lua: A,
	makefile: j,
	markdown: M,
	markup: N,
	matlab: ee,
	nginx: P,
	nix: F,
	objectivec: I,
	ocaml: L,
	perl: R,
	php: z,
	powershell: B,
	properties: V,
	protobuf: H,
	python: U,
	r: W,
	regex: G,
	ruby: K,
	rust: q,
	sass: J,
	scala: Y,
	scss: X,
	"shell-session": Z,
	solidity: Q,
	sql: $,
	swift: te,
	toml: ne,
	tsx: re,
	typescript: ie,
	yaml: ae
}, se = {
	cpp: [
		"c++",
		"cxx",
		"cc"
	],
	elixir: ["ex", "exs"],
	erlang: ["erl"],
	fsharp: ["fs", "fsx"],
	hcl: ["terraform", "tf"],
	haskell: ["hs"],
	julia: ["jl"],
	ocaml: ["ml", "mli"],
	powershell: ["ps", "ps1"],
	rust: ["rs"],
	"shell-session": ["console"]
};
Object.entries(oe).forEach(([t, n]) => {
	e.registerLanguage(t, n);
	let r = n.aliases;
	Array.isArray(r) && r.length > 0 && e.alias(t, r);
	let i = se[t];
	i && e.alias(t, i);
});
//#endregion

//# sourceMappingURL=syntax-highlighter.js.map
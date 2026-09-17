require("../../_virtual/_rolldown/runtime.cjs");const e=require("../../i18n/declaration.cjs"),t=require("../../i18n/index.cjs"),n=require("../../types/agent-server/type-guards.cjs"),r=require("../../components/conversation-events/chat/event-thought-helpers.cjs"),i=require("../handle-event-for-ui.cjs"),a=require("../../components/conversation-events/chat/event-content-helpers/should-render-event.cjs"),o=require("../../components/conversation-events/chat/event-content-helpers/get-acp-tool-call-content.cjs"),s=require("../../components/conversation-events/chat/event-content-helpers/parse-message-from-event.cjs"),c=require("../../components/conversation-events/chat/event-content-helpers/get-action-content.cjs"),l=require("../../components/conversation-events/chat/event-content-helpers/get-observation-content.cjs"),u=require("../../components/conversation-events/chat/group-events.cjs");var d=new Set([`BrowserClickAction`,`BrowserCloseTabAction`,`BrowserGetContentAction`,`BrowserGetStateAction`,`BrowserGoBackAction`,`BrowserListTabsAction`,`BrowserNavigateAction`,`BrowserScrollAction`,`BrowserSwitchTabAction`,`BrowserTypeAction`,`ExecuteBashAction`,`FileEditorAction`,`GlobAction`,`GrepAction`,`InvokeSkillAction`,`MCPToolAction`,`StrReplaceEditorAction`,`TaskAction`,`TaskTrackerAction`,`TerminalAction`,`ThinkAction`]),f=new Set([`BrowserObservation`,`CanvasUIObservation`,`ExecuteBashObservation`,`FileEditorObservation`,`GlobObservation`,`GrepObservation`,`InvokeSkillObservation`,`MCPToolObservation`,`StrReplaceEditorObservation`,`SwitchLLMObservation`,`TaskTrackerObservation`,`TaskObservation`,`TerminalObservation`]),p=e=>e.replace(/[\r\n]+/g,` `).replace(/\s+/g,` `).trim(),m=(e,t=100)=>e.length>t?`${e.slice(0,t)}…`:e,h=e=>{let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toISOString()},g=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`),_=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replace(/(!?)\[([^\]]*)\]\(\s*((?:javascript|data|vbscript):[^)]*)\)/gi,`$1\\[$2\\]($3)`).replace(/^(\s{0,3})\[([^\]]+)\]:(\s*<?(?:javascript|data|vbscript):)/gim,`$1\\[$2\\]:$3`),v=n=>p(n||t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$DEFAULT_TITLE))||t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$DEFAULT_TITLE),y=(e,n)=>p(t.default.t(e,n).replace(/<\/?(?:cmd|path)>/g,``)),b=e=>/^[a-z][a-z0-9_]*\s*:\s*[[{]/i.test(e),x=e=>e.replace(/(?:Action|Observation)$/,``).replace(/([a-z])([A-Z])/g,`$1 $2`).trim(),S=e=>{let t=p(e.summary||``);return t&&!b(t)?t:p(e.tool_name)||x(e.action.kind)},C=(e,t)=>t?S(t):p(e.tool_name)||x(e.observation.kind),w=e=>e.filter(e=>e.type===`text`&&typeof e.text==`string`).map(e=>e.text).join(`
`),T=n=>[`${t.default.t(e.I18nKey.TASK$SUBAGENT)}: ${n.subagent_type}`,`${t.default.t(e.I18nKey.TASK$QUERY)}:\n${n.prompt}`].join(`

`),E=(n,r)=>{let i=r?.action.kind===`TaskAction`?r.action:void 0;return[`${t.default.t(e.I18nKey.TASK$SUBAGENT)}: ${n.subagent}`,`${t.default.t(e.I18nKey.TASK$TASK_ID)}: ${n.task_id}`,i?`${t.default.t(e.I18nKey.TASK$QUERY)}:\n${i.prompt}`:``,`${t.default.t(e.I18nKey.TASK$RESULT)}:\n${w(n.content)}`].filter(Boolean).join(`

`)},D=e=>e.action.kind===`TaskAction`?T(e.action):d.has(e.action.kind)?c.getActionContent(e):``,O=(e,t)=>e.observation.kind===`TaskObservation`?E(e.observation,t):f.has(e.observation.kind)?l.getObservationContent(e):``,k=e=>n.isHookExecutionEvent(e)?[e.reason,e.error,e.stdout,e.stderr].filter(e=>!!e?.trim()).join(`

`):``,A=e=>[r.getReasoningContent(e),r.getActionThoughtText(e)].map(e=>e.trim()).filter(Boolean).join(`

`),j=e=>![`FinishAction`,`SwitchLLMAction`,`ThinkAction`].includes(e.action.kind),M=(c,l)=>{let d=c.reduce((e,t)=>{try{return i.handleEventForUI(t,e)}catch{return e}},[]),f=new Map(c.filter(n.isActionEvent).map(e=>[e.id,e])),h=[],g=new Set,_=u.groupEvents(d.filter(e=>n.isSwitchLLMObservationEvent(e)&&!e.observation.is_error||a.shouldRenderEvent(e)),2**53-1,c),v=e=>{if(g.has(e.id)||!j(e))return;g.add(e.id);let t=A(e);t&&h.push({kind:`message`,author:`assistant`,content:t,timestamp:e.timestamp})};for(let i of _){if(i.kind===`group`)continue;if(i.kind===`thought`){v(i.action);continue}let{event:a}=i;try{let i=n.isActionEvent(a)?a:n.isObservationEvent(a)?f.get(a.action_id):void 0;if(i&&v(i),n.isSwitchLLMObservationEvent(a)&&!a.observation.is_error){h.push({kind:`note`,summary:y(e.I18nKey.MODEL$SWITCHED_TO_PROFILE,{name:a.observation.profile_name}),content:[a.observation.active_model?`${t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$MODEL)}: ${a.observation.active_model}`:``,a.observation.reason?`${t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$REASON)}: ${a.observation.reason}`:``].filter(Boolean).join(`
`),timestamp:a.timestamp??``});continue}if(n.isMessageEvent(a)){let e=s.parseMessageFromEvent(a).trim();if(a.source===`agent`){let{reasoning:t,message:n}=r.splitInlineThink(e);[t,n].filter(Boolean).forEach(e=>{h.push({kind:`message`,author:`assistant`,content:e,timestamp:a.timestamp??``})})}else e&&h.push({kind:`message`,author:`user`,content:e,timestamp:a.timestamp??``});continue}if(n.isStreamingDeltaEvent(a)){let{reasoning:e,message:t}=r.splitInlineThink(a.content??``,{streaming:!0}),n=[a.reasoning_content?.trim()||``,e].filter(Boolean).join(`

`);n&&h.push({kind:`message`,author:`assistant`,content:n,timestamp:a.timestamp??``}),t.trim()&&h.push({kind:`message`,author:`assistant`,content:t.trim(),timestamp:a.timestamp??``});continue}if(n.isAgentErrorEvent(a)){h.push({kind:`error`,content:a.error,timestamp:a.timestamp??``});continue}if(n.isActionEvent(a)){if(a.action.kind===`FinishAction`){let e=a.action.message.trim();e&&h.push({kind:`message`,author:`assistant`,content:e,timestamp:a.timestamp??``})}else h.push({kind:`tool`,summary:S(a),details:l?D(a):``,timestamp:a.timestamp??``});continue}if(n.isObservationEvent(a)){let e=f.get(a.action_id);h.push({kind:`tool`,summary:C(a,e),details:l?O(a,e):``,timestamp:a.timestamp??``});continue}if(n.isACPToolCallEvent(a)){h.push({kind:`tool`,summary:o.stripRedundantTitlePrefix(a)||t.default.t(e.I18nKey.ACTION_MESSAGE$ACP_TOOL),details:l?o.getACPToolCallContent(a):``,timestamp:a.timestamp??``});continue}if(n.isHookExecutionEvent(a)){h.push({kind:`tool`,summary:t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$HOOK,{command:m(p(a.hook_command),100)}),details:l?k(a):``,timestamp:a.timestamp??``});continue}n.isConversationStateUpdateEvent(a)&&n.isGoalConversationStateUpdateEvent(a)&&h.push({kind:`note`,summary:`${t.default.t(e.I18nKey.GOAL$PREFIX)} ${t.default.t({running:e.I18nKey.GOAL$STATUS_RUNNING,complete:e.I18nKey.GOAL$STATUS_COMPLETE,capped:e.I18nKey.GOAL$STATUS_CAPPED,interrupted:e.I18nKey.GOAL$STATUS_INTERRUPTED}[a.value.status])}`,content:[a.value.objective,a.value.verdict?.missing||``].filter(Boolean).join(`

`),timestamp:a.timestamp??``})}catch{}}return h},N=(e,t)=>t.includeTimestamps?`<sub>${g(h(e.timestamp))}</sub>\n\n`:``,P=e=>{let t=Math.max(0,...Array.from(e.matchAll(/`+/g),e=>e[0].length)),n="`".repeat(Math.max(3,t+1));return`${n}text\n${e}\n${n}`},F=(n,r)=>{let i=[`# ${_(v(r.title))}`,``];r.model&&i.push(`**${t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$MODEL)}:** ${_(p(r.model))}`,``);for(let a of M(n,r.includeToolDetails)){let n=N(a,r);if(a.kind===`message`){let r=a.author===`user`?t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$USER):t.default.t(e.I18nKey.CHAT_INTERFACE$ASSISTANT);i.push(`## ${r}`,``,n+_(a.content),``)}else if(a.kind===`error`){let r=a.content.split(`
`).map(e=>`> ${_(e)}`).join(`
`);i.push(`## ${t.default.t(e.I18nKey.COMMON$ERROR)}`,``,n+r,``)}else if(a.kind===`note`)i.push(`> **${g(a.summary)}**`,``,n+_(a.content),``);else if(r.includeToolDetails&&a.details)i.push(`<details>`,`<summary><strong>${g(t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${g(a.summary)}</summary>`,``,n+P(a.details),``,`</details>`,``);else{let r=n?`<br>${n.trimEnd()}`:``;i.push(`<p><strong>${g(t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${g(a.summary)}${r}</p>`,``)}}return`${i.join(`
`).trim()}\n`},I=(e,t)=>{if(!t.includeTimestamps)return``;let n=h(e.timestamp);return`<time datetime="${g(n)}">${g(n)}</time>`},L=(n,r)=>{let i=v(r.title),a=M(n,r.includeToolDetails).map(n=>{let i=I(n,r);if(n.kind===`message`){let r=n.author===`user`?t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$USER):t.default.t(e.I18nKey.CHAT_INTERFACE$ASSISTANT);return`<section class="message ${n.author.toLowerCase()}">
  <header><h2>${g(r)}</h2>${i}</header>
  <div class="content">${g(n.content)}</div>
</section>`}return n.kind===`error`?`<section class="message error">
  <header><h2>${g(t.default.t(e.I18nKey.COMMON$ERROR))}</h2>${i}</header>
  <div class="content">${g(n.content)}</div>
</section>`:n.kind===`note`?`<aside class="note">
  <header><strong>${g(n.summary)}</strong>${i}</header>
  ${n.content?`<div class="content">${g(n.content)}</div>`:``}
</aside>`:r.includeToolDetails&&n.details?`<details>
  <summary><strong>${g(t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${g(n.summary)}${i}</summary>
  <pre>${g(n.details)}</pre>
</details>`:`<div class="tool-summary"><strong>${g(t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$TOOL))}:</strong> ${g(n.summary)}${i}</div>`}).join(`
`),o=r.model?`<p class="model"><strong>${g(t.default.t(e.I18nKey.TRANSCRIPT_EXPORT$MODEL))}:</strong> ${g(p(r.model))}</p>`:``;return`<!doctype html>
<html lang="${g(t.default.resolvedLanguage||t.default.language||`en`)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:">
  <title>${g(i)}</title>
  <style>
    :root { color-scheme: light dark; font-family: ui-sans-serif, system-ui, sans-serif; }
    body { margin: 0; background: #111827; color: #e5e7eb; line-height: 1.55; }
    main { box-sizing: border-box; width: min(860px, 100%); margin: 0 auto; padding: 48px 24px 80px; }
    h1 { margin: 0; font-size: 2rem; }
    h2 { margin: 0; font-size: 1rem; }
    .model { margin: 8px 0 32px; color: #9ca3af; }
    .message, details, .tool-summary, .note { margin: 16px 0; border: 1px solid #374151; border-radius: 10px; padding: 16px; background: #1f2937; }
    .user { border-left: 4px solid #60a5fa; }
    .assistant { border-left: 4px solid #34d399; }
    .error { border-left: 4px solid #f87171; }
    .note { border-left: 4px solid #a78bfa; }
    header, summary, .tool-summary { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; }
    summary { cursor: pointer; }
    time { flex: none; color: #9ca3af; font-size: .75rem; font-weight: 400; }
    .content { margin-top: 10px; white-space: pre-wrap; overflow-wrap: anywhere; }
    pre { margin: 14px 0 0; padding: 14px; overflow-x: auto; border-radius: 7px; background: #111827; color: #d1d5db; white-space: pre-wrap; overflow-wrap: anywhere; }
    @media (prefers-color-scheme: light) {
      body { background: #f9fafb; color: #111827; }
      .message, details, .tool-summary, .note { border-color: #d1d5db; background: #fff; }
      pre { background: #f3f4f6; color: #1f2937; }
      .model, time { color: #6b7280; }
    }
  </style>
</head>
<body>
  <main>
    <h1>${g(i)}</h1>
    ${o}
    ${a}
  </main>
</body>
</html>
`};exports.eventsToHtml=L,exports.eventsToMarkdown=F;
//# sourceMappingURL=index.cjs.map
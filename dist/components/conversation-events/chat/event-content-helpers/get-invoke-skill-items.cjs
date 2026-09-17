require("../../../../_virtual/_rolldown/runtime.cjs");var e=e=>{let{observation:t}=e,n=t.content.filter(e=>e.type===`text`).map(e=>e.text).join(`
`).trim();return!t.skill_name&&!n?[]:[{name:t.skill_name,content:n}]};exports.getInvokeSkillItems=e;
//# sourceMappingURL=get-invoke-skill-items.cjs.map
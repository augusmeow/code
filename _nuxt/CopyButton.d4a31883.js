import{e as l,h as i,o as e,b as u,u as m,c as n,l as d}from"./entry.e5e9b2af.js";import{u as f}from"./index.38b90dc1.js";const k=l({__name:"CopyButton",props:{content:{type:String,default:""}},setup(c){const a=c,{copy:s}=f(),o=i("init"),p=r=>{s(a.content).then(()=>{o.value="copied",setTimeout(()=>{o.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(r,y)=>{const t=d;return e(),u("button",{class:"copy rounded-lg bg-gray-800 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none dark:bg-black",onClick:p},[m(o)==="copied"?(e(),n(t,{key:0,name:"fa-check",class:"h-4 w-4"})):(e(),n(t,{key:1,name:"fa-copy",class:"h-4 w-4"}))])}}});export{k as default};

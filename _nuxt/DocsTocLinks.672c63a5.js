/* empty css                         */import{h as d,Q as f,R as _,L as g,e as k,S as y,o as u,b as p,M as b,U as S,k as m,i as x,t as B,u as C,V as H,c as q,q as A,a as M}from"./entry.e5e9b2af.js";const L=()=>{const c=d(),t=d([]),a=d([]),l=e=>e.forEach(o=>{const s=o.target.id;o.isIntersecting?t.value.push(s):t.value=t.value.filter(r=>r!==s)}),i=e=>e.forEach(o=>{c.value.observe(o)});return f(t,(e,o)=>{e.length===0?a.value=o:a.value=e},{deep:!0}),_(()=>c.value=new IntersectionObserver(l)),g(()=>{var e;return(e=c.value)==null?void 0:e.disconnect()}),{visibleHeadings:t,activeHeadings:a,updateHeadings:i}},T={class:"docs-toc-links"},$=["href","onClick"],w=k({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(c,{emit:t}){const a=y(),{activeHeadings:l,updateHeadings:i}=L();setTimeout(()=>{i([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function e(s){a.push(`#${s}`),t("move",s)}function o(s){t("move",s)}return(s,r)=>{const h=D;return u(),p("ul",T,[(u(!0),p(b,null,S(c.links,n=>(u(),p("li",{key:n.text,class:m([`depth-${n.depth}`])},[x("a",{href:`#${n.id}`,class:m([C(l).includes(n.id)&&"active"]),onClick:H(v=>e(n.id),["prevent"])},B(n.text),11,$),n.children?(u(),q(h,{key:0,links:n.children,onMove:r[0]||(r[0]=v=>o(v))},null,8,["links"])):A("",!0)],2))),128))])}}}),D=M(w,[["__scopeId","data-v-d9904849"]]);export{D as default};

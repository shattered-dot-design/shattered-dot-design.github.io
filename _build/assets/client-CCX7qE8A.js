const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_...404_-DlwUhueX.js","assets/web-GFwsRR70.js","assets/components-DA4gmNxm.js","assets/routing-DwVN_A_D.js","assets/about-DQV-JTgM.js","assets/index-BoW37BoC.js","assets/index-CsKl_s5C.js","assets/old.index-CSRCF6C5.js"])))=>i.map(i=>d[i]);
import{c as G,a as S,b as f,g as J,u as X,S as z,o as Y,d as Q,e as ee,f as H,s as C,h as te,i as $,t as v,j as _,m as k,r as A,k as V,l as ne,n as re,E as oe,p as se}from"./web-GFwsRR70.js";import{M as ae}from"./index-CsKl_s5C.js";import{c as ie,a as le,R as ce,s as M,g as ue,b as de,d as he,m as fe,e as me,k as pe,f as ge,n as we}from"./routing-DwVN_A_D.js";const L="Invariant Violation",{setPrototypeOf:be=function(e,n){return e.__proto__=n,e}}=Object;class N extends Error{framesToPop=1;name=L;constructor(n=L){super(typeof n=="number"?`${L}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),be(this,N.prototype)}}function x(e,n){if(!e)throw new N(n)}const Ee=/^[A-Za-z]:\//;function ye(e=""){return e&&e.replace(/\\/g,"/").replace(Ee,n=>n.toUpperCase())}const $e=/^[/\\]{2}/,ve=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Re=/^[A-Za-z]:$/,_e=function(e){if(e.length===0)return".";e=ye(e);const n=e.match($e),t=T(e),r=e[e.length-1]==="/";return e=ke(e,!t),e.length===0?t?"/":r?"./":".":(r&&(e+="/"),Re.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!T(e)?`/${e}`:e)},q=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":_e(n.replace(/\/\/+/g,"/"))};function ke(e,n){let t="",r=0,o=-1,a=0,l=null;for(let s=0;s<=e.length;++s){if(s<e.length)l=e[s];else{if(l==="/")break;l="/"}if(l==="/"){if(!(o===s-1||a===1))if(a===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const c=t.lastIndexOf("/");c===-1?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),o=s,a=0;continue}else if(t.length>0){t="",r=0,o=s,a=0;continue}}n&&(t+=t.length>0?"/..":"..",r=2)}else t.length>0?t+=`/${e.slice(o+1,s)}`:t=e.slice(o+1,s),r=s-o-1;o=s,a=0}else l==="."&&a!==-1?++a:a=-1}return t}const T=function(e){return ve.test(e)};function Ae(e){return`virtual:${e}`}function Pe(e){return e.handler?.endsWith(".html")?T(e.handler)?e.handler:q(e.root,e.handler):`$vinxi/handler/${e.name}`}const Se=new Proxy({},{get(e,n){return x(typeof n=="string","Bundler name should be a string"),{name:n,type:"client",handler:Ae(Pe({name:n})),baseURL:"/_build",chunks:new Proxy({},{get(t,r){x(typeof r=="string","Chunk expected");let o=q("/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(t,r){x(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=Se;const Ce=e=>n=>{const{base:t}=n,r=G(()=>n.children),o=S(()=>ie(r(),n.base||""));let a;const l=le(e,o,()=>a,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(l),f(ce.Provider,{value:l,get children(){return f(Le,{routerState:l,get root(){return n.root},get preload(){return n.rootPreload||n.rootLoad},get children(){return[S(()=>(a=J())&&null),f(xe,{routerState:l,get branches(){return o()}})]}})}})};function Le(e){const n=e.routerState.location,t=e.routerState.params,r=S(()=>e.preload&&X(()=>{M(!0),e.preload({params:t,location:n,intent:ue()||"initial"}),M(!1)}));return f(z,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>f(o,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function xe(e){const n=[];let t;const r=S(Y(e.routerState.matches,(o,a,l)=>{let s=a&&o.length===a.length;const c=[];for(let i=0,p=o.length;i<p;i++){const m=a&&a[i],w=o[i];l&&m&&w.route.key===m.route.key?c[i]=l[i]:(s=!1,n[i]&&n[i](),Q(b=>{n[i]=b,c[i]=he(e.routerState,c[i-1]||e.routerState.base,U(()=>r()[i+1]),()=>e.routerState.matches()[i])}))}return n.splice(o.length).forEach(i=>i()),l&&s?l:(t=c[0],c)}));return U(()=>r()&&t)()}const U=e=>()=>f(z,{get when(){return e()},keyed:!0,children:n=>f(de.Provider,{value:n,get children(){return n.outlet()}})});function Te([e,n],t,r){return[e,r?o=>n(r(o)):n]}function Ne(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=Te(ee(t(e.get()),{equals:(o,a)=>o.value===a.value&&o.state===a.state}),void 0,o=>(!n&&e.set(o),C.registry&&!C.done&&(C.done=!0),o));return e.init&&H(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),Ce({signal:r,create:e.create,utils:e.utils})}function Ie(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function De(e,n){const t=e&&document.getElementById(e);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const Oe=new Map;function Me(e=!0,n=!1,t="/_server",r){return o=>{const a=o.base.path(),l=o.navigatorFactory(o.base);let s,c;function i(u){return u.namespaceURI==="http://www.w3.org/2000/svg"}function p(u){if(u.defaultPrevented||u.button!==0||u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)return;const d=u.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!d||n&&!d.hasAttribute("link"))return;const g=i(d),h=g?d.href.baseVal:d.href;if((g?d.target.baseVal:d.target)||!h&&!d.hasAttribute("state"))return;const y=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||y&&y.includes("external"))return;const R=g?new URL(h,document.baseURI):new URL(h);if(!(R.origin!==window.location.origin||a&&R.pathname&&!R.pathname.toLowerCase().startsWith(a.toLowerCase())))return[d,R]}function m(u){const d=p(u);if(!d)return;const[g,h]=d,D=o.parsePath(h.pathname+h.search+h.hash),y=g.getAttribute("state");u.preventDefault(),l(D,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:y?JSON.parse(y):void 0})}function w(u){const d=p(u);if(!d)return;const[g,h]=d;r&&(h.pathname=r(h.pathname)),o.preloadRoute(h,g.getAttribute("preload")!=="false")}function b(u){clearTimeout(s);const d=p(u);if(!d)return c=null;const[g,h]=d;c!==g&&(r&&(h.pathname=r(h.pathname)),s=setTimeout(()=>{o.preloadRoute(h,g.getAttribute("preload")!=="false"),c=g},20))}function I(u){if(u.defaultPrevented)return;let d=u.submitter&&u.submitter.hasAttribute("formaction")?u.submitter.getAttribute("formaction"):u.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const h=new URL(d,fe);if(d=o.parsePath(h.pathname+h.search),!d.startsWith(t))return}if(u.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=Oe.get(d);if(g){u.preventDefault();const h=new FormData(u.target,u.submitter);g.call({r:o,f:u.target},u.target.enctype==="multipart/form-data"?h:new URLSearchParams(h))}}te(["click","submit"]),document.addEventListener("click",m),e&&(document.addEventListener("mousemove",b,{passive:!0}),document.addEventListener("focusin",w,{passive:!0}),document.addEventListener("touchstart",w,{passive:!0})),document.addEventListener("submit",I),H(()=>{document.removeEventListener("click",m),e&&(document.removeEventListener("mousemove",b),document.removeEventListener("focusin",w),document.removeEventListener("touchstart",w)),document.removeEventListener("submit",I)})}}function Ue(e){const n=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},t=me();return Ne({get:n,set({value:r,replace:o,scroll:a,state:l}){o?window.history.replaceState(pe(l),"",r):window.history.pushState(l,"",r),De(decodeURIComponent(window.location.hash.slice(1)),a),ge()},init:r=>Ie(window,"popstate",we(r,o=>{if(o&&o<0)return!t.confirm(o);{const a=n();return!t.confirm(a.value,{state:a.state})}})),create:Me(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function Fe(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var We=v("<style>"),je=v("<link>"),Be=v("<script> "),ze=v("<noscript>");const He={style:e=>(()=>{var n=$(We);return _(n,k(()=>e.attrs),!1,!0),V(n,()=>e.children),A(),n})(),link:e=>(()=>{var n=$(je);return _(n,k(()=>e.attrs),!1,!1),A(),n})(),script:e=>e.attrs.src?(()=>{var n=$(Be);return _(n,k(()=>e.attrs,{get id(){return e.key}}),!1,!0),A(),n})():null,noscript:e=>(()=>{var n=$(ze);return _(n,k(()=>e.attrs),!1,!0),A(),n})()};function Ve(e,n){let{tag:t,attrs:{key:r,...o}={key:void 0},children:a}=e;return He[t]({attrs:{...o,nonce:n},key:r,children:a})}function qe(e,n,t,r="default"){return ne(async()=>{{const a=(await e.import())[r],s=(await n.inputs?.[e.src].assets()).filter(i=>i.tag==="style"||i.attrs.rel==="stylesheet");return typeof window<"u"&&Fe(s),{default:i=>[...s.map(p=>Ve(p)),f(a,i)]}}})}const E={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ke(e={}){const n={options:e,rootNode:K(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)F(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>Ze(n,t(r)),insert:(r,o)=>F(n,t(r),o),remove:r=>Ge(n,t(r))}}function Ze(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),o={};let a=!1,l=null,s=e.rootNode,c=null;for(let i=0;i<r.length;i++){const p=r[i];s.wildcardChildNode!==null&&(l=s.wildcardChildNode,c=r.slice(i).join("/"));const m=s.children.get(p);if(m===void 0){if(s&&s.placeholderChildren.length>1){const w=r.length-i;s=s.placeholderChildren.find(b=>b.maxDepth===w)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(o[s.paramName]=p),a=!0}else s=m}return(s===null||s.data===null)&&l!==null&&(s=l,o[s.paramName||"_"]=c,a=!0),s?a?{...s.data,params:a?o:void 0}:s.data:null}function F(e,n,t){let r=!0;const o=n.split("/");let a=e.rootNode,l=0;const s=[a];for(const c of o){let i;if(i=a.children.get(c))a=i;else{const p=Je(c);i=K({type:p,parent:a}),a.children.set(c,i),p===E.PLACEHOLDER?(i.paramName=c==="*"?`_${l++}`:c.slice(1),a.placeholderChildren.push(i),r=!1):p===E.WILDCARD&&(a.wildcardChildNode=i,i.paramName=c.slice(3)||"_",r=!1),s.push(i),a=i}}for(const[c,i]of s.entries())i.maxDepth=Math.max(s.length-c,i.maxDepth||0);return a.data=t,r===!0&&(e.staticRoutesMap[n]=a),a}function Ge(e,n){let t=!1;const r=n.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return t;if(o.data){const a=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(a),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),t=!0}return t}function K(e={}){return{type:e.type||E.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Je(e){return e.startsWith("**")?E.WILDCARD:e[0]===":"||e==="*"?E.PLACEHOLDER:E.NORMAL}const Xe="modulepreload",Ye=function(e){return"/_build/"+e},W={},P=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=l?.nonce||l?.getAttribute("nonce");o=Promise.allSettled(t.map(c=>{if(c=Ye(c),c in W)return;W[c]=!0;const i=c.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":Xe,i||(m.as="script"),m.crossOrigin="",m.href=c,s&&m.setAttribute("nonce",s),document.head.appendChild(m),i)return new Promise((w,b)=>{m.addEventListener("load",w),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&a(s.reason);return n().catch(a)})},Z=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>P(()=>import("./_...404_-DlwUhueX.js"),__vite__mapDeps([0,1,2,3])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/shattered-dot-design.github.io/shattered-dot-design.github.io/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>P(()=>import("./about-DQV-JTgM.js"),__vite__mapDeps([4,1,2,3])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/shattered-dot-design.github.io/shattered-dot-design.github.io/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>P(()=>import("./index-BoW37BoC.js"),__vite__mapDeps([5,1,6])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/shattered-dot-design.github.io/shattered-dot-design.github.io/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/old.index.tsx?pick=default&pick=$css",build:()=>P(()=>import("./old.index-CSRCF6C5.js"),__vite__mapDeps([7,1,6])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/old.index.tsx?pick=default&pick=$css"].output.path)},path:"/old.",filePath:"/home/runner/work/shattered-dot-design.github.io/shattered-dot-design.github.io/src/routes/old.index.tsx"}],Qe=et(Z.filter(e=>e.page));function et(e){function n(t,r,o,a){const l=Object.values(t).find(s=>o.startsWith(s.id+"/"));return l?(n(l.children||(l.children=[]),r,o.slice(l.id.length)),t):(t.push({...r,id:o,path:o.replace(/\([^)/]+\)/g,"").replace(/\/+/g,"/")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function tt(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ke({routes:Z.reduce((e,n)=>{if(!tt(n))return e;let t=n.path.replace(/\([^)/]+\)/g,"").replace(/\/+/g,"/").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`).split("/").map(r=>r.startsWith(":")||r.startsWith("*")?r:encodeURIComponent(r)).join("/");if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function nt(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&qe(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return Qe.map(e)}let j;const rt=()=>j||(j=nt());function ot(){return f(ae,{get children(){return f(Ue,{root:e=>f(re,{get children(){return e.children}}),get children(){return f(rt,{})}})}})}const st=e=>null;var at=v("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const it=e=>{const n="Error | Uncaught Client Exception";return f(oe,{fallback:t=>(console.error(t),[(()=>{var r=$(at);return V(r,n),r})(),f(st,{code:500})]),get children(){return e.children}})};function lt(e,n){return se(e,n)}function B(e){return e.children}function ct(){return f(B,{get children(){return f(B,{get children(){return f(it,{get children(){return f(ot,{})}})}})}})}lt(()=>f(ct,{}),document.getElementById("app"));const ft=void 0;export{ft as default};

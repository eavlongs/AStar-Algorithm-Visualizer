import{S as oe,i as fe,s as ce,k as A,l as I,m as T,h as v,n as b,J as H,b as ne,K as L,C as se,L as qe,q as $,r as ee,H as m,M as $e,v as _e,N as Ne,a as x,x as me,c as j,y as be,O as pe,z as ye,u as ze,P as Ae,f as q,d as Je,t as te,A as we,Q as Ke,e as Re,g as Qe,R as Me,T as Ie}from"../../chunks/index-59e8b440.js";import{w as et}from"../../chunks/index-e25a8a74.js";const P=et({closedSet:[],openSet:[],obstacles:[],columns:20,rows:20,startNode:{},endNode:{},path:[]});function tt(t){let e,s,r;return{c(){e=A("button"),this.h()},l(n){e=I(n,"BUTTON",{class:!0}),T(e).forEach(v),this.h()},h(){e.disabled=t[2],b(e,"class","point svelte-1nvc1rl"),H(e,"black-bg",t[7]),H(e,"end-bg",t[9]),H(e,"start-bg",t[8]),H(e,"blue-bg",t[4]&&!J(t[3])&&!t[8]&&!t[9]),H(e,"green-bg",t[5]&&!J(t[3])&&!t[4]&&!t[8]&&!t[9]),H(e,"red-bg",t[6]&&!t[4]&&!t[8]&&!t[9])},m(n,u){ne(n,e,u),s||(r=[L(e,"click",t[11]),L(e,"dragover",t[12]),L(e,"dragstart",t[13])],s=!0)},p(n,[u]){u&4&&(e.disabled=n[2]),u&128&&H(e,"black-bg",n[7]),u&512&&H(e,"end-bg",n[9]),u&256&&H(e,"start-bg",n[8]),u&792&&H(e,"blue-bg",n[4]&&!J(n[3])&&!n[8]&&!n[9]),u&824&&H(e,"green-bg",n[5]&&!J(n[3])&&!n[4]&&!n[8]&&!n[9]),u&848&&H(e,"red-bg",n[6]&&!n[4]&&!n[8]&&!n[9])},i:se,o:se,d(n){n&&v(e),s=!1,qe(r)}}}function Ue(t){Object.keys(t).forEach(s=>{delete t[s]})}function J(t){return Object.keys(t).length===0}function nt(t,e,s){let{x:r,y:n,running:u}=e,l,c,h,C,N,D,S=!1,G=!1,R=!1,B=!1,O=!1,U=!1;P.subscribe(i=>{l=i.obstacles,s(3,c=i.startNode),h=i.endNode,D=i.path,C=i.openSet,N=i.closedSet,s(4,S=a({x:r,y:n})),s(5,G=g({x:r,y:n})),s(6,R=f({x:r,y:n})),s(7,B=p({x:r,y:n})),s(8,O=V({x:r,y:n})),s(9,U=X({x:r,y:n}))});function z(i,y){if(J(c)){s(3,c.x=i,c),s(3,c.y=y,c),s(8,O=!0);return}if(V({x:i,y})){J(h)&&(Ue(c),s(8,O=!1));return}if(J(h)){h.x=i,h.y=y,s(9,U=!0);return}if(X({x:i,y})){J(l)&&(Ue(h),s(9,U=!1));return}if(p({x:i,y})){let E=re({x:i,y});l.splice(E,1)}else l.push({x:i,y});s(7,B=!B)}function V(i){return J(c)?!1:i.x===c.x&&i.y===c.y}function X(i){return J(h)?!1:i.x===h.x&&i.y===h.y}function p(i){let y=!1;return l.forEach(E=>{i.x===E.x&&i.y===E.y&&(y=!0)}),!!y}function re(i){let y;return l.forEach((E,F)=>{i.x===E.x&&i.y===E.y&&(y=F)}),y}function a(i){if(D.length===0)return!1;let y=!1;return D.forEach(E=>{if(i.x===E.x&&i.y===E.y){y=!0;return}}),!!y}function g(i){if(C.length===0)return!1;let y=!1;return C.forEach(E=>{if(i.x===E.x&&i.y===E.y){y=!0;return}}),!!y}function f(i){if(N.length===0)return!1;let y=!1;return N.forEach(E=>{if(i.x===E.x&&i.y===E.y){y=!0;return}}),!!y}const d=()=>z(r,n),M=()=>z(r,n),ie=()=>z(r,n);return t.$$set=i=>{"x"in i&&s(0,r=i.x),"y"in i&&s(1,n=i.y),"running"in i&&s(2,u=i.running)},[r,n,u,c,S,G,R,B,O,U,z,d,M,ie]}class st extends oe{constructor(e){super(),fe(this,e,nt,tt,ce,{x:0,y:1,running:2})}}function rt(t){let e,s,r,n;return{c(){e=A("button"),s=$("Start"),this.h()},l(u){e=I(u,"BUTTON",{class:!0});var l=T(e);s=ee(l,"Start"),l.forEach(v),this.h()},h(){e.disabled=t[0],b(e,"class","btn svelte-o7vhc4")},m(u,l){ne(u,e,l),m(e,s),r||(n=L(e,"click",t[1]),r=!0)},p(u,[l]){l&1&&(e.disabled=u[0])},i:se,o:se,d(u){u&&v(e),r=!1,n()}}}function Fe(t){return Object.keys(t).length===0}function lt(t){if(t.length===1)return 0;let e=t[0].fCost,s=t[0].hCost,r=0;return t.forEach((n,u)=>{(n.fCost<e||n.fCost===e&&n.hCost<s)&&(e=n.fCost,s=n.hCost,r=u)}),r}function ut(t,e){let s;return Math.abs(e.x-t.x-(e.y-t.y))===1?s=10:s=14,e.gCost?e.gCost+s:s}async function de(t){return new Promise(e=>setTimeout(e,t))}function He(t,e,s){let r;return s.forEach(n=>{if(n.x===t&&n.y===e){r=n;return}}),r}function at(t,e,s){let{running:r}=e,n,u,l,c,h,C,N,D;P.subscribe(a=>{n=a.openSet,u=a.closedSet,l=a.obstacles,c=a.columns,h=a.rows,C=a.startNode,N=a.endNode,D=a.path});const S=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}];async function G(){if(s(0,r=!0),console.log(r),D.length!==0&&(P.update(a=>({...a,closedSet:[],openSet:[],path:[]})),await de(500)),Fe(C)){alert("Please choose the starting node and the ending node"),s(0,r=!1);return}if(Fe(N)){alert("Please choose the ending node"),s(0,r=!1);return}for(n.push(C);n.length!==0;){let a=lt(n),g=n[a];if(n.splice(a,1),u.push(g),P.update(f=>f),P.update(f=>f),await de(20),g.x===N.x&&g.y===N.y){await re(g),s(0,r=!1);return}R(g)}alert("No path found"),s(0,r=!1)}async function R(a){S.forEach(async g=>{let f=V(a,g);U(f)&&!B(f)&&!z(f)&&(X(f,a),O(f)||(n.push(f),P.update(d=>d),await de(20)))})}function B(a){let g=!1;return u.forEach(f=>{a.x===f.x&&a.y===f.y&&(g=!0)}),!!g}function O(a){let g=!1;return n.forEach(f=>{if(a.x===f.x&&a.y===f.y)return g=!0,!0}),!!g}function U(a){return!(a.x<0||a.x>=c||a.y<0||a.y>=h)}function z(a){let g=!1;return l.forEach(f=>{a.x===f.x&&a.y===f.y&&(g=!0)}),!!g}function V(a,g){let f=a.x+g.x,d=a.y+g.y,M={x:f,y:d};return O(M)?He(f,d,n):M}function X(a,g){let f=ut(a,g),d=p(a),M=f+d;(!O(a)||M<a.fCost)&&(a.fCost=M,a.gCost=f,a.hCost=d,a.parents={parentX:g.x,parentY:g.y})}function p(a){let g,f=Math.abs(a.x-N.x),d=Math.abs(a.y-N.y);return f>d?g=14*d+10*(f-d):g=14*f+10*(d-f),g}async function re(a){let g=a,f=[];for(;g.parents;)f.push(g),g=He(g.parents.parentX,g.parents.parentY,u);f.push(C),f.reverse();for(let d=0;d<f.length;d++)D.push(f[d]),P.update(M=>M),await de(20);P.update(d=>d)}return t.$$set=a=>{"running"in a&&s(0,r=a.running)},[r,G]}class it extends oe{constructor(e){super(),fe(this,e,at,rt,ce,{running:0})}}function ot(t){let e,s,r,n;return{c(){e=A("button"),s=$("Reset"),this.h()},l(u){e=I(u,"BUTTON",{class:!0});var l=T(e);s=ee(l,"Reset"),l.forEach(v),this.h()},h(){e.disabled=t[0],b(e,"class","btn svelte-1rrpu1y")},m(u,l){ne(u,e,l),m(e,s),r||(n=L(e,"click",t[2]),r=!0)},p(u,[l]){l&1&&(e.disabled=u[0])},i:se,o:se,d(u){u&&v(e),r=!1,n()}}}function ft(t,e,s){let{running:r}=e;P.subscribe(l=>{l.openSet,l.closedSet,l.obstacles,l.startNode,l.endNode,l.path});function n(){P.update(l=>({...l,closedSet:[],openSet:[],obstacles:[],startNode:{},endNode:{},path:[]}))}const u=()=>{s(0,r=!0),n(),s(0,r=!1)};return t.$$set=l=>{"running"in l&&s(0,r=l.running)},[r,n,u]}class ct extends oe{constructor(e){super(),fe(this,e,ft,ot,ce,{running:0,resetStore:1})}get running(){return this.$$.ctx[0]}set running(e){this.$$set({running:e}),$e()}get resetStore(){return this.$$.ctx[1]}}function ht(t){let e,s,r,n;return{c(){e=A("button"),s=$("Clear"),this.h()},l(u){e=I(u,"BUTTON",{class:!0});var l=T(e);s=ee(l,"Clear"),l.forEach(v),this.h()},h(){e.disabled=t[0],b(e,"class","btn svelte-w0rue0")},m(u,l){ne(u,e,l),m(e,s),r||(n=L(e,"click",t[1]),r=!0)},p(u,[l]){l&1&&(e.disabled=u[0])},i:se,o:se,d(u){u&&v(e),r=!1,n()}}}function gt(t,e,s){let{running:r}=e;P.subscribe(u=>{u.openSet,u.closedSet,u.obstacles,u.startNode,u.endNode,u.path});function n(){s(0,r=!0),P.update(u=>({...u,closedSet:[],openSet:[],path:[]})),s(0,r=!1)}return t.$$set=u=>{"running"in u&&s(0,r=u.running)},[r,n]}class pt extends oe{constructor(e){super(),fe(this,e,gt,ht,ce,{running:0})}}function Le(t,e,s){const r=t.slice();return r[18]=e[s],r[20]=s,r}function Ge(t,e,s){const r=t.slice();return r[21]=e[s],r[23]=s,r}function Xe(t){let e,s;return e=new st({props:{x:t[23],y:t[20],running:t[3]}}),{c(){me(e.$$.fragment)},l(r){be(e.$$.fragment,r)},m(r,n){ye(e,r,n),s=!0},p(r,n){const u={};n&8&&(u.running=r[3]),e.$set(u)},i(r){s||(q(e.$$.fragment,r),s=!0)},o(r){te(e.$$.fragment,r),s=!1},d(r){we(e,r)}}}function Ye(t){let e,s,r=Array(t[0]),n=[];for(let l=0;l<r.length;l+=1)n[l]=Xe(Ge(t,r,l));const u=l=>te(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=Re()},l(l){for(let c=0;c<n.length;c+=1)n[c].l(l);e=Re()},m(l,c){for(let h=0;h<n.length;h+=1)n[h].m(l,c);ne(l,e,c),s=!0},p(l,c){if(c&9){r=Array(l[0]);let h;for(h=0;h<r.length;h+=1){const C=Ge(l,r,h);n[h]?(n[h].p(C,c),q(n[h],1)):(n[h]=Xe(C),n[h].c(),q(n[h],1),n[h].m(e.parentNode,e))}for(Qe(),h=r.length;h<n.length;h+=1)u(h);Je()}},i(l){if(!s){for(let c=0;c<r.length;c+=1)q(n[c]);s=!0}},o(l){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)te(n[c]);s=!1},d(l){Ke(n,l),l&&v(e)}}}function dt(t){let e,s,r,n,u,l,c,h,C,N,D,S,G,R,B=t[3]?"Visualizing...":"A* Path Finding Visualizer",O,U,z,V,X,p,re,a,g,f,d,M,ie,i,y,E,F,ve,Se,K,he,Y,Ce,Oe;function We(o){t[11](o)}let Te={};t[3]!==void 0&&(Te.running=t[3]),d=new it({props:Te}),_e.push(()=>Ne(d,"running",We)),d.$on("click",t[12]);function Ze(o){t[13](o)}let Pe={};t[3]!==void 0&&(Pe.running=t[3]),i=new ct({props:Pe}),_e.push(()=>Ne(i,"running",Ze)),t[14](i),i.$on("click",t[15]);function xe(o){t[16](o)}let Be={};t[3]!==void 0&&(Be.running=t[3]),F=new pt({props:Be}),_e.push(()=>Ne(F,"running",xe)),F.$on("click",t[17]);let le=Array(t[1]),w=[];for(let o=0;o<le.length;o+=1)w[o]=Ye(Le(t,le,o));const je=o=>te(w[o],1,1,()=>{w[o]=null});return{c(){e=A("head"),s=A("title"),r=$("Eav Long Sok's A* Algorithm Visualizer"),n=x(),u=A("main"),l=A("div"),c=A("div"),h=A("p"),C=$("rows: "),N=$(t[4]),D=x(),S=A("input"),G=x(),R=A("p"),O=$(B),U=x(),z=A("div"),V=A("p"),X=$("columns: "),p=$(t[5]),re=x(),a=A("input"),g=x(),f=A("div"),me(d.$$.fragment),ie=x(),me(i.$$.fragment),E=x(),me(F.$$.fragment),Se=x(),K=A("div");for(let o=0;o<w.length;o+=1)w[o].c();this.h()},l(o){e=I(o,"HEAD",{class:!0});var _=T(e);s=I(_,"TITLE",{class:!0});var Q=T(s);r=ee(Q,"Eav Long Sok's A* Algorithm Visualizer"),Q.forEach(v),_.forEach(v),n=j(o),u=I(o,"MAIN",{class:!0});var W=T(u);l=I(W,"DIV",{class:!0});var Z=T(l);c=I(Z,"DIV",{class:!0});var k=T(c);h=I(k,"P",{class:!0});var ue=T(h);C=ee(ue,"rows: "),N=ee(ue,t[4]),ue.forEach(v),D=j(k),S=I(k,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),k.forEach(v),G=j(Z),R=I(Z,"P",{class:!0});var Ve=T(R);O=ee(Ve,B),Ve.forEach(v),U=j(Z),z=I(Z,"DIV",{class:!0});var ge=T(z);V=I(ge,"P",{class:!0});var Ee=T(V);X=ee(Ee,"columns: "),p=ee(Ee,t[5]),Ee.forEach(v),re=j(ge),a=I(ge,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),ge.forEach(v),Z.forEach(v),g=j(W),f=I(W,"DIV",{class:!0});var ae=T(f);be(d.$$.fragment,ae),ie=j(ae),be(i.$$.fragment,ae),E=j(ae),be(F.$$.fragment,ae),ae.forEach(v),Se=j(W),K=I(W,"DIV",{class:!0,style:!0});var De=T(K);for(let ke=0;ke<w.length;ke+=1)w[ke].l(De);De.forEach(v),W.forEach(v),this.h()},h(){b(s,"class","svelte-f6zwpn"),b(e,"class","svelte-f6zwpn"),b(h,"class","svelte-f6zwpn"),b(S,"type","range"),b(S,"min","10"),b(S,"max","50"),b(S,"step","5"),S.disabled=t[3],b(S,"class","svelte-f6zwpn"),b(c,"class","sliders svelte-f6zwpn"),b(R,"class","svelte-f6zwpn"),b(V,"class","svelte-f6zwpn"),b(a,"type","range"),b(a,"min","10"),b(a,"max","50"),b(a,"step","5"),a.disabled=t[3],b(a,"class","svelte-f6zwpn"),b(z,"class","sliders svelte-f6zwpn"),b(l,"class","flex-center svelte-f6zwpn"),b(f,"class","center svelte-f6zwpn"),b(K,"class","container svelte-f6zwpn"),b(K,"style",he="grid-template-columns: repeat("+t[0]+", 30px);"),b(u,"class","svelte-f6zwpn")},m(o,_){ne(o,e,_),m(e,s),m(s,r),ne(o,n,_),ne(o,u,_),m(u,l),m(l,c),m(c,h),m(h,C),m(h,N),m(c,D),m(c,S),pe(S,t[4]),m(l,G),m(l,R),m(R,O),m(l,U),m(l,z),m(z,V),m(V,X),m(V,p),m(z,re),m(z,a),pe(a,t[5]),m(u,g),m(u,f),ye(d,f,null),m(f,ie),ye(i,f,null),m(f,E),ye(F,f,null),m(u,Se),m(u,K);for(let Q=0;Q<w.length;Q+=1)w[Q].m(K,null);Y=!0,Ce||(Oe=[L(S,"change",t[7]),L(S,"input",t[7]),L(S,"change",t[8]),L(a,"change",t[9]),L(a,"input",t[9]),L(a,"change",t[10])],Ce=!0)},p(o,[_]){(!Y||_&16)&&ze(N,o[4]),(!Y||_&8)&&(S.disabled=o[3]),_&16&&pe(S,o[4]),(!Y||_&8)&&B!==(B=o[3]?"Visualizing...":"A* Path Finding Visualizer")&&ze(O,B),(!Y||_&32)&&ze(p,o[5]),(!Y||_&8)&&(a.disabled=o[3]),_&32&&pe(a,o[5]);const Q={};!M&&_&8&&(M=!0,Q.running=o[3],Ae(()=>M=!1)),d.$set(Q);const W={};!y&&_&8&&(y=!0,W.running=o[3],Ae(()=>y=!1)),i.$set(W);const Z={};if(!ve&&_&8&&(ve=!0,Z.running=o[3],Ae(()=>ve=!1)),F.$set(Z),_&11){le=Array(o[1]);let k;for(k=0;k<le.length;k+=1){const ue=Le(o,le,k);w[k]?(w[k].p(ue,_),q(w[k],1)):(w[k]=Ye(ue),w[k].c(),q(w[k],1),w[k].m(K,null))}for(Qe(),k=le.length;k<w.length;k+=1)je(k);Je()}(!Y||_&1&&he!==(he="grid-template-columns: repeat("+o[0]+", 30px);"))&&b(K,"style",he)},i(o){if(!Y){q(d.$$.fragment,o),q(i.$$.fragment,o),q(F.$$.fragment,o);for(let _=0;_<le.length;_+=1)q(w[_]);Y=!0}},o(o){te(d.$$.fragment,o),te(i.$$.fragment,o),te(F.$$.fragment,o),w=w.filter(Boolean);for(let _=0;_<w.length;_+=1)te(w[_]);Y=!1},d(o){o&&v(e),o&&v(n),o&&v(u),we(d),t[14](null),we(i),we(F),Ke(w,o),Ce=!1,qe(Oe)}}}function _t(t,e,s){let r,n,u;P.subscribe(p=>{s(0,r=p.columns),s(1,n=p.rows),s(2,u=p.startNode)});let l=!1,c=n,h=r,C;function N(){c=Me(this.value),s(4,c)}const D=()=>{Object.keys(u).length!==0&&confirm("Adjusting the rows and columns will result in loss of data in the grid. Are you sure you want to proceed?"),P.update(p=>({...p,rows:c})),C.resetStore()};function S(){h=Me(this.value),s(5,h)}const G=()=>{Object.keys(u).length!==0&&confirm("Adjusting the rows and columns will result in loss of data in the grid. Are you sure you want to proceed?"),P.update(p=>({...p,columns:h})),C.resetStore()};function R(p){l=p,s(3,l)}function B(p){Ie.call(this,t,p)}function O(p){l=p,s(3,l)}function U(p){_e[p?"unshift":"push"](()=>{C=p,s(6,C)})}function z(p){Ie.call(this,t,p)}function V(p){l=p,s(3,l)}function X(p){Ie.call(this,t,p)}return[r,n,u,l,c,h,C,N,D,S,G,R,B,O,U,z,V,X]}class yt extends oe{constructor(e){super(),fe(this,e,_t,dt,ce,{})}}export{yt as default};

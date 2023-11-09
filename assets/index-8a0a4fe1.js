(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Hr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},_t=[],Oe=()=>{},Qs=()=>!1,Zs=/^on[^a-z]/,Un=e=>Zs.test(e),Yr=e=>e.startsWith("onUpdate:"),ne=Object.assign,Wr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gs=Object.prototype.hasOwnProperty,$=(e,t)=>Gs.call(e,t),F=Array.isArray,Dt=e=>Hn(e)==="[object Map]",eo=e=>Hn(e)==="[object Set]",L=e=>typeof e=="function",re=e=>typeof e=="string",Bn=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",Mi=e=>(Z(e)||L(e))&&L(e.then)&&L(e.catch),to=Object.prototype.toString,Hn=e=>to.call(e),no=e=>Hn(e).slice(8,-1),ro=e=>Hn(e)==="[object Object]",Kr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ao=/-(\w)/g,Me=Yn(e=>e.replace(ao,(t,n)=>n?n.toUpperCase():"")),io=/\B([A-Z])/g,It=Yn(e=>e.replace(io,"-$1").toLowerCase()),Wn=Yn(e=>e.charAt(0).toUpperCase()+e.slice(1)),sr=Yn(e=>e?`on${Wn(e)}`:""),Ot=(e,t)=>!Object.is(e,t),or=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},so=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const gr=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?co(r):Vr(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(re(e)||Z(e))return e}const oo=/;(?![^(]*\))/g,lo=/:([^]+)/,fo=/\/\*[^]*?\*\//g;function co(e){const t={};return e.replace(fo,"").split(oo).forEach(n=>{if(n){const r=n.split(lo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xr(e){let t="";if(re(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Xr(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const uo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mo=Hr(uo);function Ri(e){return!!e||e===""}let ye;class po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ho(e,t=ye){t&&t.active&&t.effects.push(e)}function vo(){return ye}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fi=e=>(e.w&Ze)>0,Li=e=>(e.n&Ze)>0,go=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},bo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Fi(a)&&!Li(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},br=new WeakMap;let Lt=0,Ze=1;const yr=30;let _e;const ut=Symbol(""),xr=Symbol("");class qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ho(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,qe=!0,Ze=1<<++Lt,Lt<=yr?go(this):Sa(this),this.fn()}finally{Lt<=yr&&bo(this),Ze=1<<--Lt,_e=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Sa(this),this.onStop&&this.onStop(),this.active=!1)}}function Sa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const ji=[];function St(){ji.push(qe),qe=!1}function Tt(){const e=ji.pop();qe=e===void 0?!0:e}function me(e,t,n){if(qe&&_e){let r=br.get(e);r||br.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),zi(a)}}function zi(e,t){let n=!1;Lt<=yr?Li(e)||(e.n|=Ze,n=!Fi(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function ze(e,t,n,r,a,i){const s=br.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&F(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||!Bn(d)&&d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":F(e)?Kr(n)&&o.push(s.get("length")):(o.push(s.get(ut)),Dt(e)&&o.push(s.get(xr)));break;case"delete":F(e)||(o.push(s.get(ut)),Dt(e)&&o.push(s.get(xr)));break;case"set":Dt(e)&&o.push(s.get(ut));break}if(o.length===1)o[0]&&_r(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);_r(Jr(l))}}function _r(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ta(r);for(const r of n)r.computed||Ta(r)}function Ta(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const yo=Hr("__proto__,__v_isRef,__isVue"),Di=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bn)),Na=xo();function xo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,s=this.length;i<s;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=U(this)[t].apply(this,n);return Tt(),r}}),e}function _o(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}class $i{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Ro:Yi:i?Hi:Bi).get(t))return t;const s=F(t);if(!a){if(s&&$(Na,n))return Reflect.get(Na,n,r);if(n==="hasOwnProperty")return _o}const o=Reflect.get(t,n,r);return(Bn(n)?Di.has(n):yo(n))||(a||me(t,"get",n),i)?o:fe(o)?s&&Kr(n)?o:o.value:Z(o)?a?Wi(o):Gr(o):o}}class Ui extends $i{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Yt(i)&&fe(i)&&!fe(r))return!1;if(!this._shallow&&(!wr(r)&&!Yt(r)&&(i=U(i),r=U(r)),!F(t)&&fe(i)&&!fe(r)))return i.value=r,!0;const s=F(t)&&Kr(n)?Number(n)<t.length:$(t,n),o=Reflect.set(t,n,r,a);return t===U(a)&&(s?Ot(r,i)&&ze(t,"set",n,r):ze(t,"add",n,r)),o}deleteProperty(t,n){const r=$(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&ze(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Bn(n)||!Di.has(n))&&me(t,"has",n),r}ownKeys(t){return me(t,"iterate",F(t)?"length":ut),Reflect.ownKeys(t)}}class wo extends $i{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ao=new Ui,ko=new wo,Oo=new Ui(!0),Qr=e=>e,Kn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(Ot(t,i)&&me(a,"get",t),me(a,"get",i));const{has:s}=Kn(a),o=r?Qr:n?na:ta;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(Ot(e,a)&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function dn(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",ut),Reflect.get(e,"size",e)}function Ma(e){e=U(e);const t=U(this);return Kn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ra(e,t){t=U(t);const n=U(this),{has:r,get:a}=Kn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Ot(t,s)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Fa(e){const t=U(this),{has:n,get:r}=Kn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function La(){const e=U(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,a){const i=this,s=i.__v_raw,o=U(s),l=t?Qr:e?na:ta;return!e&&me(o,"iterate",ut),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function pn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),s=Dt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?Qr:t?na:ta;return!t&&me(i,"iterate",l?xr:ut),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:o?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return e==="delete"?!1:this}}function Eo(){const e={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:Ma,set:Ra,delete:Fa,clear:La,forEach:mn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:Ma,set:Ra,delete:Fa,clear:La,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),t[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[e,n,t,r]}const[Co,Po,Io,So]=Eo();function Zr(e,t){const n=t?e?So:Io:e?Po:Co;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const To={get:Zr(!1,!1)},No={get:Zr(!1,!0)},Mo={get:Zr(!0,!1)},Bi=new WeakMap,Hi=new WeakMap,Yi=new WeakMap,Ro=new WeakMap;function Fo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lo(e){return e.__v_skip||!Object.isExtensible(e)?0:Fo(no(e))}function Gr(e){return Yt(e)?e:ea(e,!1,Ao,To,Bi)}function jo(e){return ea(e,!1,Oo,No,Hi)}function Wi(e){return ea(e,!0,ko,Mo,Yi)}function ea(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Lo(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function wt(e){return Yt(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function Ki(e){return wt(e)||Yt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Vi(e){return Mn(e,"__v_skip",!0),e}const ta=e=>Z(e)?Gr(e):e,na=e=>Z(e)?Wi(e):e;function zo(e){qe&&_e&&(e=U(e),zi(e.dep||(e.dep=Jr())))}function Do(e,t){e=U(e);const n=e.dep;n&&_r(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function $o(e){return fe(e)?e.value:e}const Uo={get:(e,t,n)=>$o(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Xi(e){return wt(e)?e:new Proxy(e,Uo)}class Bo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new qr(t,()=>{this._dirty||(this._dirty=!0,Do(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return zo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ho(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Bo(r,a,i||!a,n)}function Qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Vn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=Qe(e,t,n,r);return i&&Mi(i)&&i.catch(s=>{Vn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Vn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Qe(l,null,10,[e,s,o]);return}}Yo(e,n,a,r)}function Yo(e,t,n,r=!0){console.error(e)}let Wt=!1,Ar=!1;const se=[];let Te=0;const At=[];let Le=null,ot=0;const Ji=Promise.resolve();let ra=null;function Wo(e){const t=ra||Ji;return e?t.then(this?e.bind(this):e):t}function Ko(e){let t=Te+1,n=se.length;for(;t<n;){const r=t+n>>>1,a=se[r],i=Kt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function aa(e){(!se.length||!se.includes(e,Wt&&e.allowRecurse?Te+1:Te))&&(e.id==null?se.push(e):se.splice(Ko(e.id),0,e),qi())}function qi(){!Wt&&!Ar&&(Ar=!0,ra=Ji.then(Zi))}function Vo(e){const t=se.indexOf(e);t>Te&&se.splice(t,1)}function Xo(e){F(e)?At.push(...e):(!Le||!Le.includes(e,e.allowRecurse?ot+1:ot))&&At.push(e),qi()}function ja(e,t=Wt?Te+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function Qi(e){if(At.length){const t=[...new Set(At)];if(At.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Kt(n)-Kt(r)),ot=0;ot<Le.length;ot++)Le[ot]();Le=null,ot=0}}const Kt=e=>e.id==null?1/0:e.id,Jo=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Zi(e){Ar=!1,Wt=!0,se.sort(Jo);const t=Oe;try{for(Te=0;Te<se.length;Te++){const n=se[Te];n&&n.active!==!1&&Qe(n,null,14)}}finally{Te=0,se.length=0,Qi(),Wt=!1,ra=null,(se.length||At.length)&&Zi()}}function qo(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:g}=r[d]||J;g&&(a=n.map(w=>re(w)?w.trim():w)),m&&(a=n.map(so))}let o,l=r[o=sr(t)]||r[o=sr(Me(t))];!l&&i&&(l=r[o=sr(It(t))]),l&&Ee(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ee(c,e,6,a)}}function Gi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!L(e)){const l=c=>{const d=Gi(c,t,!0);d&&(o=!0,ne(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(Z(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>s[l]=null):ne(s,i),Z(e)&&r.set(e,s),s)}function Xn(e,t){return!e||!Un(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,It(t))||$(e,t))}let we=null,Jn=null;function Rn(e){const t=we;return we=e,Jn=e&&e.type.__scopeId||null,t}function Qo(e){Jn=e}function Zo(){Jn=null}function Go(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=Rn(t);let s;try{s=e(...a)}finally{Rn(i),r._d&&Xa(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function lr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:m,data:g,setupState:w,ctx:j,inheritAttrs:N}=e;let D,A;const O=Rn(e);try{if(n.shapeFlag&4){const I=a||r;D=Se(d.call(I,I,m,i,w,g,j)),A=l}else{const I=t;D=Se(I.length>1?I(i,{attrs:l,slots:o,emit:c}):I(i,null)),A=t.props?l:el(l)}}catch(I){Ut.length=0,Vn(I,e,1),D=K(Vt)}let M=D;if(A&&N!==!1){const I=Object.keys(A),{shapeFlag:B}=M;I.length&&B&7&&(s&&I.some(Yr)&&(A=tl(A,s)),M=Et(M,A))}return n.dirs&&(M=Et(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),D=M,Rn(O),D}const el=e=>{let t;for(const n in e)(n==="class"||n==="style"||Un(n))&&((t||(t={}))[n]=e[n]);return t},tl=(e,t)=>{const n={};for(const r in e)(!Yr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function nl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(s[g]!==r[g]&&!Xn(c,g))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?za(r,s,c):!0:!!s;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function rl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const es="components";function ts(e,t){return il(es,e,!0,t)||e}const al=Symbol.for("v-ndc");function il(e,t,n=!0,r=!1){const a=we||te;if(a){const i=a.type;if(e===es){const o=ef(i,!1);if(o&&(o===t||o===Me(t)||o===Wn(Me(t))))return i}const s=Da(a[e]||i[e],t)||Da(a.appContext[e],t);return!s&&r?i:s}}function Da(e,t){return e&&(e[t]||e[Me(t)]||e[Wn(Me(t))])}const sl=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Xo(e)}const hn={};function En(e,t,n){return ns(e,t,n)}function ns(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=J){var o;const l=vo()===((o=te)==null?void 0:o.scope)?te:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=wr(e)):wt(e)?(c=()=>e,r=!0):F(e)?(m=!0,d=e.some(I=>wt(I)||wr(I)),c=()=>e.map(I=>{if(fe(I))return I.value;if(wt(I))return bt(I);if(L(I))return Qe(I,l,2)})):L(e)?t?c=()=>Qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Ee(e,l,3,[w])}:c=Oe,t&&r){const I=c;c=()=>bt(I())}let g,w=I=>{g=O.onStop=()=>{Qe(I,l,4)}},j;if(Jt)if(w=Oe,t?n&&Ee(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const I=af();j=I.__watcherHandles||(I.__watcherHandles=[])}else return Oe;let N=m?new Array(e.length).fill(hn):hn;const D=()=>{if(O.active)if(t){const I=O.run();(r||d||(m?I.some((B,ae)=>Ot(B,N[ae])):Ot(I,N)))&&(g&&g(),Ee(t,l,3,[I,N===hn?void 0:m&&N[0]===hn?[]:N,w]),N=I)}else O.run()};D.allowRecurse=!!t;let A;a==="sync"?A=D:a==="post"?A=()=>de(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),A=()=>aa(D));const O=new qr(c,A);t?n?D():N=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&Wr(l.scope.effects,O)};return j&&j.push(M),M}function ll(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?rs(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const s=te;Ct(this);const o=ns(a,i.bind(r),n);return s?Ct(s):dt(),o}function rs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))bt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(eo(e)||Dt(e))e.forEach(n=>{bt(n,t)});else if(ro(e))for(const n in e)bt(e[n],t);return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(St(),Ee(l,n,8,[e.el,o,e,t]),Tt())}}/*! #__NO_SIDE_EFFECTS__ */function fl(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const Cn=e=>!!e.type.__asyncLoader,as=e=>e.type.__isKeepAlive;function cl(e,t){is(e,"a",t)}function ul(e,t){is(e,"da",t)}function is(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)as(a.parent.vnode)&&dl(r,t,n,a),a=a.parent}}function dl(e,t,n,r){const a=qn(t,e,r,!0);ss(()=>{Wr(r[t],a)},n)}function qn(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;St(),Ct(n);const o=Ee(t,n,e,s);return dt(),Tt(),o});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=te)=>(!Jt||e==="sp")&&qn(e,(...r)=>t(...r),n),ml=Be("bm"),pl=Be("m"),hl=Be("bu"),vl=Be("u"),gl=Be("bum"),ss=Be("um"),bl=Be("sp"),yl=Be("rtg"),xl=Be("rtc");function _l(e,t=te){qn("ec",e,t)}const kr=e=>e?vs(e)?fa(e)||e.proxy:kr(e.parent):null,$t=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=Wo.bind(e.proxy)),$watch:e=>ll.bind(e)}),fr=(e,t)=>e!==J&&!e.__isScriptSetup&&$(e,t),wl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const w=s[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(fr(r,t))return s[t]=1,r[t];if(a!==J&&$(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return s[t]=3,i[t];if(n!==J&&$(n,t))return s[t]=4,n[t];Or&&(s[t]=0)}}const d=$t[t];let m,g;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==J&&$(n,t))return s[t]=4,n[t];if(g=l.config.globalProperties,$(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return fr(a,t)?(a[t]=n,!0):r!==J&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==J&&$(e,s)||fr(t,s)||(o=i[0])&&$(o,s)||$(r,s)||$($t,s)||$(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $a(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Or=!0;function Al(e){const t=ia(e),n=e.proxy,r=e.ctx;Or=!1,t.beforeCreate&&Ua(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:m,mounted:g,beforeUpdate:w,updated:j,activated:N,deactivated:D,beforeDestroy:A,beforeUnmount:O,destroyed:M,unmounted:I,render:B,renderTracked:ae,renderTriggered:ie,errorCaptured:ge,serverPrefetch:ve,expose:Re,inheritAttrs:Mt,components:sn,directives:on,filters:rr}=t;if(c&&kl(c,r,null),s)for(const q in s){const Y=s[q];L(Y)&&(r[q]=Y.bind(n))}if(a){const q=a.call(n,n);Z(q)&&(e.data=Gr(q))}if(Or=!0,i)for(const q in i){const Y=i[q],nt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Oe,ln=!L(Y)&&L(Y.set)?Y.set.bind(n):Oe,rt=st({get:nt,set:ln});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ce=>rt.value=Ce})}if(o)for(const q in o)os(o[q],r,n,q);if(l){const q=L(l)?l.call(n):l;Reflect.ownKeys(q).forEach(Y=>{Sl(Y,q[Y])})}d&&Ua(d,e,"c");function oe(q,Y){F(Y)?Y.forEach(nt=>q(nt.bind(n))):Y&&q(Y.bind(n))}if(oe(ml,m),oe(pl,g),oe(hl,w),oe(vl,j),oe(cl,N),oe(ul,D),oe(_l,ge),oe(xl,ae),oe(yl,ie),oe(gl,O),oe(ss,I),oe(bl,ve),F(Re))if(Re.length){const q=e.exposed||(e.exposed={});Re.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:nt=>n[Y]=nt})})}else e.exposed||(e.exposed={});B&&e.render===Oe&&(e.render=B),Mt!=null&&(e.inheritAttrs=Mt),sn&&(e.components=sn),on&&(e.directives=on)}function kl(e,t,n=Oe){F(e)&&(e=Er(e));for(const r in e){const a=e[r];let i;Z(a)?"default"in a?i=Pn(a.from||r,a.default,!0):i=Pn(a.from||r):i=Pn(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Ua(e,t,n){Ee(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function os(e,t,n,r){const a=r.includes(".")?rs(n,r):()=>n[r];if(re(e)){const i=t[e];L(i)&&En(a,i)}else if(L(e))En(a,e.bind(n));else if(Z(e))if(F(e))e.forEach(i=>os(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&En(a,i,e)}}function ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Fn(l,c,s,!0)),Fn(l,t,s)),Z(t)&&i.set(t,l),l}function Fn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Fn(e,i,n,!0),a&&a.forEach(s=>Fn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Ol[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Ol={data:Ba,props:Ha,emits:Ha,methods:jt,computed:jt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:jt,directives:jt,watch:Cl,provide:Ba,inject:El};function Ba(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function El(e,t){return jt(Er(e),Er(t))}function Er(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ne(Object.create(null),e,t):t}function Ha(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ne(Object.create(null),$a(e),$a(t??{})):t}function Cl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function ls(){return{app:null,config:{isNativeTag:Qs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function Il(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!Z(a)&&(a=null);const i=ls(),s=new WeakSet;let o=!1;const l=i.app={_uid:Pl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&L(c.install)?(s.add(c),c.install(l,...d)):L(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!o){const g=K(r,a);return g.appContext=i,d&&t?t(g,c):e(g,c,m),o=!0,l._container=c,c.__vue_app__=l,fa(g.component)||g.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Ln=l;try{return c()}finally{Ln=null}}};return l}}let Ln=null;function Sl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){const r=te||we;if(r||Ln){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ln._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Tl(e,t,n,r=!1){const a={},i={};Mn(i,Zn,1),e.propsDefaults=Object.create(null),fs(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:jo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Nl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=U(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Xn(e.emitsOptions,g))continue;const w=t[g];if(l)if($(i,g))w!==i[g]&&(i[g]=w,c=!0);else{const j=Me(g);a[j]=Cr(l,o,j,w,e,!1)}else w!==i[g]&&(i[g]=w,c=!0)}}}else{fs(e,t,a,i)&&(c=!0);let d;for(const m in o)(!t||!$(t,m)&&((d=It(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Cr(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function fs(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(On(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:Xn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=U(n),c=o||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Cr(a,l,m,c[m],e,!$(c,m))}}return s}function Cr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=$(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ct(a),r=c[n]=l.call(null,t),dt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===It(n))&&(r=!0))}return r}function cs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[g,w]=cs(m,t,!0);ne(s,g),w&&o.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Z(e)&&r.set(e,_t),_t;if(F(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Ya(m)&&(s[m]=J)}else if(i)for(const d in i){const m=Me(d);if(Ya(m)){const g=i[d],w=s[m]=F(g)||L(g)?{type:g}:ne({},g);if(w){const j=Va(Boolean,w.type),N=Va(String,w.type);w[0]=j>-1,w[1]=N<0||j<N,(j>-1||$(w,"default"))&&o.push(m)}}}const c=[s,o];return Z(e)&&r.set(e,c),c}function Ya(e){return e[0]!=="$"}function Wa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ka(e,t){return Wa(e)===Wa(t)}function Va(e,t){return F(t)?t.findIndex(n=>Ka(n,e)):L(t)&&Ka(t,e)?0:-1}const us=e=>e[0]==="_"||e==="$stable",sa=e=>F(e)?e.map(Se):[Se(e)],Ml=(e,t,n)=>{if(t._n)return t;const r=Go((...a)=>sa(t(...a)),n);return r._c=!1,r},ds=(e,t,n)=>{const r=e._ctx;for(const a in e){if(us(a))continue;const i=e[a];if(L(i))t[a]=Ml(a,i,r);else if(i!=null){const s=sa(i);t[a]=()=>s}}},ms=(e,t)=>{const n=sa(t);e.slots.default=()=>n},Rl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Mn(t,"_",n)):ds(t,e.slots={})}else e.slots={},t&&ms(e,t);Mn(e.slots,Zn,1)},Fl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=J;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ne(a,t),!n&&o===1&&delete a._):(i=!t.$stable,ds(t,a)),s=t}else t&&(ms(e,t),s={default:1});if(i)for(const o in a)!us(o)&&s[o]==null&&delete a[o]};function Pr(e,t,n,r,a=!1){if(F(e)){e.forEach((g,w)=>Pr(g,t&&(F(t)?t[w]:t),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===J?o.refs={}:o.refs,m=o.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))Qe(l,o,12,[s,d]);else{const g=re(l),w=fe(l);if(g||w){const j=()=>{if(e.f){const N=g?$(m,l)?m[l]:d[l]:l.value;a?F(N)&&Wr(N,i):F(N)?N.includes(i)||N.push(i):g?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=s,$(m,l)&&(m[l]=s)):w&&(l.value=s,e.k&&(d[e.k]=s))};s?(j.id=-1,de(j,n)):j()}}}const de=ol;function Ll(e){return jl(e)}function jl(e,t){const n=gr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:g,setScopeId:w=Oe,insertStaticContent:j}=e,N=(f,u,p,h=null,v=null,x=null,k=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ft(f,u)&&(h=fn(f),Ce(f,v,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:C}=u;switch(b){case Qn:D(f,u,p,h);break;case Vt:A(f,u,p,h);break;case In:f==null&&O(u,p,h,k);break;case xe:sn(f,u,p,h,v,x,k,y,_);break;default:C&1?B(f,u,p,h,v,x,k,y,_):C&6?on(f,u,p,h,v,x,k,y,_):(C&64||C&128)&&b.process(f,u,p,h,v,x,k,y,_,ht)}S!=null&&v&&Pr(S,f&&f.ref,x,u||f,!u)},D=(f,u,p,h)=>{if(f==null)r(u.el=o(u.children),p,h);else{const v=u.el=f.el;u.children!==f.children&&c(v,u.children)}},A=(f,u,p,h)=>{f==null?r(u.el=l(u.children||""),p,h):u.el=f.el},O=(f,u,p,h)=>{[f.el,f.anchor]=j(f.children,u,p,h,f.el,f.anchor)},M=({el:f,anchor:u},p,h)=>{let v;for(;f&&f!==u;)v=g(f),r(f,p,h),f=v;r(u,p,h)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=g(f),a(f),f=p;a(u)},B=(f,u,p,h,v,x,k,y,_)=>{k=k||u.type==="svg",f==null?ae(u,p,h,v,x,k,y,_):ve(f,u,v,x,k,y,_)},ae=(f,u,p,h,v,x,k,y)=>{let _,b;const{type:S,props:C,shapeFlag:T,transition:R,dirs:z}=f;if(_=f.el=s(f.type,x,C&&C.is,C),T&8?d(_,f.children):T&16&&ge(f.children,_,null,h,v,x&&S!=="foreignObject",k,y),z&&at(f,null,h,"created"),ie(_,f,f.scopeId,k,h),C){for(const H in C)H!=="value"&&!On(H)&&i(_,H,null,C[H],x,f.children,h,v,Fe);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ie(b,h,f)}z&&at(f,null,h,"beforeMount");const W=zl(v,R);W&&R.beforeEnter(_),r(_,u,p),((b=C&&C.onVnodeMounted)||W||z)&&de(()=>{b&&Ie(b,h,f),W&&R.enter(_),z&&at(f,null,h,"mounted")},v)},ie=(f,u,p,h,v)=>{if(p&&w(f,p),h)for(let x=0;x<h.length;x++)w(f,h[x]);if(v){let x=v.subTree;if(u===x){const k=v.vnode;ie(f,k,k.scopeId,k.slotScopeIds,v.parent)}}},ge=(f,u,p,h,v,x,k,y,_=0)=>{for(let b=_;b<f.length;b++){const S=f[b]=y?Je(f[b]):Se(f[b]);N(null,S,u,p,h,v,x,k,y)}},ve=(f,u,p,h,v,x,k)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:S}=u;_|=f.patchFlag&16;const C=f.props||J,T=u.props||J;let R;p&&it(p,!1),(R=T.onVnodeBeforeUpdate)&&Ie(R,p,u,f),S&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const z=v&&u.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,p,h,z,x):k||Y(f,u,y,null,p,h,z,x,!1),_>0){if(_&16)Mt(y,u,C,T,p,h,v);else if(_&2&&C.class!==T.class&&i(y,"class",null,T.class,v),_&4&&i(y,"style",C.style,T.style,v),_&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const G=W[H],be=C[G],vt=T[G];(vt!==be||G==="value")&&i(y,G,be,vt,v,f.children,p,h,Fe)}}_&1&&f.children!==u.children&&d(y,u.children)}else!k&&b==null&&Mt(y,u,C,T,p,h,v);((R=T.onVnodeUpdated)||S)&&de(()=>{R&&Ie(R,p,u,f),S&&at(u,f,p,"updated")},h)},Re=(f,u,p,h,v,x,k)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],S=_.el&&(_.type===xe||!Ft(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,S,null,h,v,x,k,!0)}},Mt=(f,u,p,h,v,x,k)=>{if(p!==h){if(p!==J)for(const y in p)!On(y)&&!(y in h)&&i(f,y,p[y],null,k,u.children,v,x,Fe);for(const y in h){if(On(y))continue;const _=h[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,k,u.children,v,x,Fe)}"value"in h&&i(f,"value",p.value,h.value)}},sn=(f,u,p,h,v,x,k,y,_)=>{const b=u.el=f?f.el:o(""),S=u.anchor=f?f.anchor:o("");let{patchFlag:C,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,h),r(S,p,h),ge(u.children,p,S,v,x,k,y,_)):C>0&&C&64&&T&&f.dynamicChildren?(Re(f.dynamicChildren,T,p,v,x,k,y),(u.key!=null||v&&u===v.subTree)&&ps(f,u,!0)):Y(f,u,p,S,v,x,k,y,_)},on=(f,u,p,h,v,x,k,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?v.ctx.activate(u,p,h,k,_):rr(u,p,h,v,x,k,_):Aa(f,u,_)},rr=(f,u,p,h,v,x,k)=>{const y=f.component=Jl(f,h,v);if(as(f)&&(y.ctx.renderer=ht),ql(y),y.asyncDep){if(v&&v.registerDep(y,oe),!f.el){const _=y.subTree=K(Vt);A(null,_,u,p)}return}oe(y,f,u,p,v,x,k)},Aa=(f,u,p)=>{const h=u.component=f.component;if(nl(f,u,p))if(h.asyncDep&&!h.asyncResolved){q(h,u,p);return}else h.next=u,Vo(h.update),h.update();else u.el=f.el,h.vnode=u},oe=(f,u,p,h,v,x,k)=>{const y=()=>{if(f.isMounted){let{next:S,bu:C,u:T,parent:R,vnode:z}=f,W=S,H;it(f,!1),S?(S.el=z.el,q(f,S,k)):S=z,C&&or(C),(H=S.props&&S.props.onVnodeBeforeUpdate)&&Ie(H,R,S,z),it(f,!0);const G=lr(f),be=f.subTree;f.subTree=G,N(be,G,m(be.el),fn(be),f,v,x),S.el=G.el,W===null&&rl(f,G.el),T&&de(T,v),(H=S.props&&S.props.onVnodeUpdated)&&de(()=>Ie(H,R,S,z),v)}else{let S;const{el:C,props:T}=u,{bm:R,m:z,parent:W}=f,H=Cn(u);if(it(f,!1),R&&or(R),!H&&(S=T&&T.onVnodeBeforeMount)&&Ie(S,W,u),it(f,!0),C&&ir){const G=()=>{f.subTree=lr(f),ir(C,f.subTree,f,v,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&G()):G()}else{const G=f.subTree=lr(f);N(null,G,p,h,f,v,x),u.el=G.el}if(z&&de(z,v),!H&&(S=T&&T.onVnodeMounted)){const G=u;de(()=>Ie(S,W,G),v)}(u.shapeFlag&256||W&&Cn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,v),f.isMounted=!0,u=p=h=null}},_=f.effect=new qr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,it(f,!0),b()},q=(f,u,p)=>{u.component=f;const h=f.vnode.props;f.vnode=u,f.next=null,Nl(f,u.props,h,p),Fl(f,u.children,p),St(),ja(),Tt()},Y=(f,u,p,h,v,x,k,y,_=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,C=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){ln(b,C,p,h,v,x,k,y,_);return}else if(T&256){nt(b,C,p,h,v,x,k,y,_);return}}R&8?(S&16&&Fe(b,v,x),C!==b&&d(p,C)):S&16?R&16?ln(b,C,p,h,v,x,k,y,_):Fe(b,v,x,!0):(S&8&&d(p,""),R&16&&ge(C,p,h,v,x,k,y,_))},nt=(f,u,p,h,v,x,k,y,_)=>{f=f||_t,u=u||_t;const b=f.length,S=u.length,C=Math.min(b,S);let T;for(T=0;T<C;T++){const R=u[T]=_?Je(u[T]):Se(u[T]);N(f[T],R,p,null,v,x,k,y,_)}b>S?Fe(f,v,x,!0,!1,C):ge(u,p,h,v,x,k,y,_,C)},ln=(f,u,p,h,v,x,k,y,_)=>{let b=0;const S=u.length;let C=f.length-1,T=S-1;for(;b<=C&&b<=T;){const R=f[b],z=u[b]=_?Je(u[b]):Se(u[b]);if(Ft(R,z))N(R,z,p,null,v,x,k,y,_);else break;b++}for(;b<=C&&b<=T;){const R=f[C],z=u[T]=_?Je(u[T]):Se(u[T]);if(Ft(R,z))N(R,z,p,null,v,x,k,y,_);else break;C--,T--}if(b>C){if(b<=T){const R=T+1,z=R<S?u[R].el:h;for(;b<=T;)N(null,u[b]=_?Je(u[b]):Se(u[b]),p,z,v,x,k,y,_),b++}}else if(b>T)for(;b<=C;)Ce(f[b],v,x,!0),b++;else{const R=b,z=b,W=new Map;for(b=z;b<=T;b++){const pe=u[b]=_?Je(u[b]):Se(u[b]);pe.key!=null&&W.set(pe.key,b)}let H,G=0;const be=T-z+1;let vt=!1,Ea=0;const Rt=new Array(be);for(b=0;b<be;b++)Rt[b]=0;for(b=R;b<=C;b++){const pe=f[b];if(G>=be){Ce(pe,v,x,!0);continue}let Pe;if(pe.key!=null)Pe=W.get(pe.key);else for(H=z;H<=T;H++)if(Rt[H-z]===0&&Ft(pe,u[H])){Pe=H;break}Pe===void 0?Ce(pe,v,x,!0):(Rt[Pe-z]=b+1,Pe>=Ea?Ea=Pe:vt=!0,N(pe,u[Pe],p,null,v,x,k,y,_),G++)}const Ca=vt?Dl(Rt):_t;for(H=Ca.length-1,b=be-1;b>=0;b--){const pe=z+b,Pe=u[pe],Pa=pe+1<S?u[pe+1].el:h;Rt[b]===0?N(null,Pe,p,Pa,v,x,k,y,_):vt&&(H<0||b!==Ca[H]?rt(Pe,p,Pa,2):H--)}}},rt=(f,u,p,h,v=null)=>{const{el:x,type:k,transition:y,children:_,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,h);return}if(b&128){f.suspense.move(u,p,h);return}if(b&64){k.move(f,u,p,ht);return}if(k===xe){r(x,u,p);for(let C=0;C<_.length;C++)rt(_[C],u,p,h);r(f.anchor,u,p);return}if(k===In){M(f,u,p);return}if(h!==2&&b&1&&y)if(h===0)y.beforeEnter(x),r(x,u,p),de(()=>y.enter(x),v);else{const{leave:C,delayLeave:T,afterLeave:R}=y,z=()=>r(x,u,p),W=()=>{C(x,()=>{z(),R&&R()})};T?T(x,z,W):W()}else r(x,u,p)},Ce=(f,u,p,h=!1,v=!1)=>{const{type:x,props:k,ref:y,children:_,dynamicChildren:b,shapeFlag:S,patchFlag:C,dirs:T}=f;if(y!=null&&Pr(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const R=S&1&&T,z=!Cn(f);let W;if(z&&(W=k&&k.onVnodeBeforeUnmount)&&Ie(W,u,f),S&6)qs(f.component,p,h);else{if(S&128){f.suspense.unmount(p,h);return}R&&at(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,v,ht,h):b&&(x!==xe||C>0&&C&64)?Fe(b,u,p,!1,!0):(x===xe&&C&384||!v&&S&16)&&Fe(_,u,p),h&&ka(f)}(z&&(W=k&&k.onVnodeUnmounted)||R)&&de(()=>{W&&Ie(W,u,f),R&&at(f,null,u,"unmounted")},p)},ka=f=>{const{type:u,el:p,anchor:h,transition:v}=f;if(u===xe){Js(p,h);return}if(u===In){I(f);return}const x=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:y}=v,_=()=>k(p,x);y?y(f.el,x,_):_()}else x()},Js=(f,u)=>{let p;for(;f!==u;)p=g(f),a(f),f=p;a(u)},qs=(f,u,p)=>{const{bum:h,scope:v,update:x,subTree:k,um:y}=f;h&&or(h),v.stop(),x&&(x.active=!1,Ce(k,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,h=!1,v=!1,x=0)=>{for(let k=x;k<f.length;k++)Ce(f[k],u,p,h,v)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),Oa=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),ja(),Qi(),u._vnode=f},ht={p:N,um:Ce,m:rt,r:ka,mt:rr,mc:ge,pc:Y,pbc:Re,n:fn,o:e};let ar,ir;return t&&([ar,ir]=t(ht)),{render:Oa,hydrate:ar,createApp:Il(Oa,ar)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function zl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ps(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Je(a[i]),o.el=s.el),n||ps(s,o)),o.type===Qn&&(o.el=s.el)}}function Dl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const $l=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),Qn=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),In=Symbol.for("v-stc"),Ut=[];let Ae=null;function He(e=!1){Ut.push(Ae=e?null:[])}function Ul(){Ut.pop(),Ae=Ut[Ut.length-1]||null}let Xt=1;function Xa(e){Xt+=e}function Bl(e){return e.dynamicChildren=Xt>0?Ae||_t:null,Ul(),Xt>0&&Ae&&Ae.push(e),e}function Ye(e,t,n,r,a,i){return Bl(ce(e,t,n,r,a,i,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",hs=({key:e})=>e??null,Sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||fe(e)||L(e)?{i:we,r:e,k:t,f:!!n}:e:null);function ce(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hs(t),ref:t&&Sn(t),scopeId:Jn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return o?(oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Xt>0&&!s&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const K=Hl;function Hl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===al)&&(e=Vt),Ir(e)){const o=Et(e,t,!0);return n&&oa(o,n),Xt>0&&!i&&Ae&&(o.shapeFlag&6?Ae[Ae.indexOf(e)]=o:Ae.push(o)),o.patchFlag|=-2,o}if(tf(e)&&(e=e.__vccOpts),t){t=Yl(t);let{class:o,style:l}=t;o&&!re(o)&&(t.class=Xr(o)),Z(l)&&(Ki(l)&&!F(l)&&(l=ne({},l)),t.style=Vr(l))}const s=re(e)?1:sl(e)?128:$l(e)?64:Z(e)?4:L(e)?2:0;return ce(e,t,n,r,a,s,i,!0)}function Yl(e){return e?Ki(e)||Zn in e?ne({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?Kl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&hs(o),ref:t&&t.ref?n&&a?F(a)?a.concat(Sn(t)):[a,Sn(t)]:Sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wl(e=" ",t=0){return K(Qn,null,e,t)}function tn(e,t){const n=K(In,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?K(Vt):F(e)?K(xe,null,e.slice()):typeof e=="object"?Je(e):K(Qn,null,String(e))}function Je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Zn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Wl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Xr([t.class,r.class]));else if(a==="style")t.style=Vr([t.style,r.style]);else if(Un(a)){const i=t[a],s=r[a];s&&i!==s&&!(F(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Ee(e,t,7,[n,r])}const Vl=ls();let Xl=0;function Jl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Vl,i={uid:Xl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cs(r,a),emitsOptions:Gi(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=qo.bind(null,i),e.ce&&e.ce(i),i}let te=null,la,gt,Ja="__VUE_INSTANCE_SETTERS__";(gt=gr()[Ja])||(gt=gr()[Ja]=[]),gt.push(e=>te=e),la=e=>{gt.length>1?gt.forEach(t=>t(e)):gt[0](e)};const Ct=e=>{la(e),e.scope.on()},dt=()=>{te&&te.scope.off(),la(null)};function vs(e){return e.vnode.shapeFlag&4}let Jt=!1;function ql(e,t=!1){Jt=t;const{props:n,children:r}=e.vnode,a=vs(e);Tl(e,n,a,t),Rl(e,r);const i=a?Ql(e,t):void 0;return Jt=!1,i}function Ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Vi(new Proxy(e.ctx,wl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Gl(e):null;Ct(e),St();const i=Qe(r,e,0,[e.props,a]);if(Tt(),dt(),Mi(i)){if(i.then(dt,dt),t)return i.then(s=>{qa(e,s,t)}).catch(s=>{Vn(s,e,0)});e.asyncDep=i}else qa(e,i,t)}else gs(e,t)}function qa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Xi(t)),gs(e,n)}let Qa;function gs(e,t,n){const r=e.type;if(!e.render){if(!t&&Qa&&!r.render){const a=r.template||ia(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:o},s),l);r.render=Qa(a,c)}}e.render=r.render||Oe}{Ct(e),St();try{Al(e)}finally{Tt(),dt()}}}function Zl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function Gl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Zl(e)},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xi(Vi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}}))}function ef(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function tf(e){return L(e)&&"__vccOpts"in e}const st=(e,t)=>Ho(e,t,Jt);function nf(e,t,n){const r=arguments.length;return r===2?Z(t)&&!F(t)?Ir(t)?K(e,null,[t]):K(e,t):K(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),K(e,t,n))}const rf=Symbol.for("v-scx"),af=()=>Pn(rf),sf="3.3.8",of="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,Za=lt&&lt.createElement("template"),lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(of,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Za.innerHTML=r?`<svg>${e}</svg>`:e;const o=Za.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ff=Symbol("_vtc");function cf(e,t,n){const r=e[ff];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const uf=Symbol("_vod");function df(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Sr(r,i,"");for(const i in n)Sr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),uf in e&&(r.display=i)}}const Ga=/\s*!important$/;function Sr(e,t,n){if(F(n))n.forEach(r=>Sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=mf(e,t);Ga.test(n)?e.setProperty(It(r),n.replace(Ga,""),"important"):e[r]=n}}const ei=["Webkit","Moz","ms"],cr={};function mf(e,t){const n=cr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return cr[t]=r;r=Wn(r);for(let a=0;a<ei.length;a++){const i=ei[a]+r;if(i in e)return cr[t]=i}return t}const ti="http://www.w3.org/1999/xlink";function pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n);else{const i=mo(t);n==null||i&&!Ri(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function hf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ri(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function vf(e,t,n,r){e.addEventListener(t,n,r)}function gf(e,t,n,r){e.removeEventListener(t,n,r)}const ni=Symbol("_vei");function bf(e,t,n,r,a=null){const i=e[ni]||(e[ni]={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=yf(t);if(r){const c=i[t]=wf(r,a);vf(e,o,c,l)}else s&&(gf(e,o,s,l),i[t]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function yf(e){let t;if(ri.test(e)){t={};let r;for(;r=e.match(ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let ur=0;const xf=Promise.resolve(),_f=()=>ur||(xf.then(()=>ur=0),ur=Date.now());function wf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=_f(),n}function Af(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ai=/^on[a-z]/,kf=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?cf(e,r,a):t==="style"?df(e,n,r):Un(t)?Yr(t)||bf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Of(e,t,r,a))?hf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pf(e,t,r,a))};function Of(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ai.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ai.test(t)&&re(n)?!1:t in e}const Ef=ne({patchProp:kf},lf);let ii;function Cf(){return ii||(ii=Ll(Ef))}const Pf=(...e)=>{const t=Cf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=If(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function If(e){return re(e)?document.querySelector(e):e}function si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?si(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function Sf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Tf(e,t,n){return t&&oi(e.prototype,t),n&&oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ca(e,t){return Mf(e)||Ff(e,t)||bs(e,t)||jf()}function nn(e){return Nf(e)||Rf(e)||bs(e)||Lf()}function Nf(e){if(Array.isArray(e))return Tr(e)}function Mf(e){if(Array.isArray(e))return e}function Rf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ff(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function bs(e,t){if(e){if(typeof e=="string")return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}}function Tr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var li=function(){},ua={},ys={},xs=null,_s={mark:li,measure:li};try{typeof window<"u"&&(ua=window),typeof document<"u"&&(ys=document),typeof MutationObserver<"u"&&(xs=MutationObserver),typeof performance<"u"&&(_s=performance)}catch{}var zf=ua.navigator||{},fi=zf.userAgent,ci=fi===void 0?"":fi,Ge=ua,X=ys,ui=xs,vn=_s;Ge.document;var We=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",ws=~ci.indexOf("MSIE")||~ci.indexOf("Trident/"),gn,bn,yn,xn,_n,De="___FONT_AWESOME___",Nr=16,As="fa",ks="svg-inline--fa",mt="data-fa-i2svg",Mr="data-fa-pseudo-element",Df="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",di="fontawesome-i2svg",$f="async",Uf=["HTML","HEAD","STYLE","SCRIPT"],Os=function(){try{return!0}catch{return!1}}(),V="classic",Q="sharp",pa=[V,Q];function rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var qt=rn((gn={},ee(gn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(gn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gn)),Qt=rn((bn={},ee(bn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(bn,Q,{solid:"fass",regular:"fasr",light:"fasl"}),bn)),Zt=rn((yn={},ee(yn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(yn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yn)),Bf=rn((xn={},ee(xn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(xn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xn)),Hf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Es="fa-layers-text",Yf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wf=rn((_n={},ee(_n,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(_n,Q,{900:"fass",400:"fasr",300:"fasl"}),_n)),Cs=[1,2,3,4,5,6,7,8,9,10],Kf=Cs.concat([11,12,13,14,15,16,17,18,19,20]),Vf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Qt[V]).map(Gt.add.bind(Gt));Object.keys(Qt[Q]).map(Gt.add.bind(Gt));var Xf=[].concat(pa,nn(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Cs.map(function(e){return"".concat(e,"x")})).concat(Kf.map(function(e){return"w-".concat(e)})),Bt=Ge.FontAwesomeConfig||{};function Jf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Qf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qf.forEach(function(e){var t=ca(e,2),n=t[0],r=t[1],a=qf(Jf(n));a!=null&&(Bt[r]=a)})}var Ps={styleDefault:"solid",familyDefault:"classic",cssPrefix:As,replacementClass:ks,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var Pt=E(E({},Ps),Bt);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var P={};Object.keys(Ps).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Pt[e]=n,Ht.forEach(function(r){return r(P)})},get:function(){return Pt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Ht.forEach(function(n){return n(P)})},get:function(){return Pt.cssPrefix}});Ge.FontAwesomeConfig=P;var Ht=[];function Zf(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Xe=Nr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gf(e){if(!(!e||!We)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var ec="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var e=12,t="";e-- >0;)t+=ec[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ha(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Is(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Is(e[n]),'" ')},"").trim()}function Gn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function nc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function rc(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&ws?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ac=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ss(){var e=As,t=ks,n=P.cssPrefix,r=P.replacementClass,a=ac;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var mi=!1;function dr(){P.autoAddCss&&!mi&&(Gf(Ss()),mi=!0)}var ic={mixout:function(){return{dom:{css:Ss,insertCss:dr}}},hooks:function(){return{beforeDOMElementCreation:function(){dr()},beforeI2svg:function(){dr()}}}},$e=Ge||{};$e[De]||($e[De]={});$e[De].styles||($e[De].styles={});$e[De].hooks||($e[De].hooks={});$e[De].shims||($e[De].shims=[]);var ke=$e[De],Ts=[],sc=function e(){X.removeEventListener("DOMContentLoaded",e),zn=1,Ts.map(function(t){return t()})},zn=!1;We&&(zn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),zn||X.addEventListener("DOMContentLoaded",sc));function oc(e){We&&(zn?setTimeout(e,0):Ts.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Is(e):"<".concat(t," ").concat(tc(r),">").concat(i.map(an).join(""),"</").concat(t,">")}function pi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var lc=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},mr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?lc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function fc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Rr(e){var t=fc(e);return t.length===1?t[0].toString(16):null}function cc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function hi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=hi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,hi(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Fr("fa",t)}var wn,An,kn,yt=ke.styles,uc=ke.shims,dc=(wn={},ee(wn,V,Object.values(Zt[V])),ee(wn,Q,Object.values(Zt[Q])),wn),ga=null,Ns={},Ms={},Rs={},Fs={},Ls={},mc=(An={},ee(An,V,Object.keys(qt[V])),ee(An,Q,Object.keys(qt[Q])),An);function pc(e){return~Xf.indexOf(e)}function hc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!pc(a)?a:null}var js=function(){var t=function(i){return mr(yt,function(s,o,l){return s[l]=mr(o,i,{}),s},{})};Ns=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Ms=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Ls=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in yt||P.autoFetchSvg,r=mr(uc,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Rs=r.names,Fs=r.unicodes,ga=er(P.styleDefault,{family:P.familyDefault})};Zf(function(e){ga=er(e.styleDefault,{family:P.familyDefault})});js();function ba(e,t){return(Ns[e]||{})[t]}function vc(e,t){return(Ms[e]||{})[t]}function ct(e,t){return(Ls[e]||{})[t]}function zs(e){return Rs[e]||{prefix:null,iconName:null}}function gc(e){var t=Fs[e],n=ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return ga}var ya=function(){return{prefix:null,iconName:null,rest:[]}};function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=qt[r][e],i=Qt[r][e]||Qt[r][a],s=e in ke.styles?e:null;return i||s||null}var vi=(kn={},ee(kn,V,Object.keys(Zt[V])),ee(kn,Q,Object.keys(Zt[Q])),kn);function tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,V,"".concat(P.cssPrefix,"-").concat(V)),ee(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),t),s=null,o=V;(e.includes(i[V])||e.some(function(c){return vi[V].includes(c)}))&&(o=V),(e.includes(i[Q])||e.some(function(c){return vi[Q].includes(c)}))&&(o=Q);var l=e.reduce(function(c,d){var m=hc(P.cssPrefix,d);if(yt[d]?(d=dc[o].includes(d)?Bf[o][d]:d,s=d,c.prefix=d):mc[o].indexOf(d)>-1?(s=d,c.prefix=er(d,{family:o})):m?c.iconName=m:d!==P.replacementClass&&d!==i[V]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var g=s==="fa"?zs(c.iconName):{},w=ct(c.prefix,c.iconName);g.prefix&&(s=null),c.iconName=g.iconName||w||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},ya());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Q&&(yt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=et()||"fas"),l}var bc=function(){function e(){Sf(this,e),this.definitions={}}return Tf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Fr(o,s[o]);var l=Zt[V][o];l&&Fr(l,s[o]),js()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=c)}),n[o][l]=c}),n}}]),e}(),gi=[],xt={},kt={},yc=Object.keys(kt);function xc(e,t){var n=t.mixoutsTo;return gi=e,xt={},Object.keys(kt).forEach(function(r){yc.indexOf(r)===-1&&delete kt[r]}),gi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),jn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){xt[s]||(xt[s]=[]),xt[s].push(i[s])})}r.provides&&r.provides(kt)}),n}function Lr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ct(n,t)||t,pi(Ds.definitions,n,t)||pi(ke.styles,n,t)}var Ds=new bc,_c=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,pt("noAuto")},wc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,oc(function(){kc({autoReplaceSvgRoot:n}),pt("watch",t)})}},Ac={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=er(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Hf))){var a=tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},he={noAuto:_c,config:P,dom:wc,parse:Ac,library:Ds,findIconDefinition:jr,toHtml:an},kc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||P.autoFetchSvg)&&We&&P.autoReplaceSvg&&he.dom.i2svg({node:r})};function nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Oc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(va(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=Gn(E(E({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ec(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,w=g===void 0?!1:g,j=r.found?r:n,N=j.width,D=j.height,A=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},I=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(M.attributes[mt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||en())},children:[l]}),delete M.attributes.title);var B=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:E(E({},I),m.styles)}),ae=r.found&&n.found?Ue("generateAbstractMask",B)||{children:[],attributes:{}}:Ue("generateAbstractIcon",B)||{children:[],attributes:{}},ie=ae.children,ge=ae.attributes;return B.children=ie,B.attributes=ge,o?Ec(B):Oc(B)}function bi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[mt]="");var d=E({},s.styles);va(a)&&(d.transform=rc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Gn(d);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Cc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Gn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var pr=ke.styles;function zr(e){var t=e[0],n=e[1],r=e.slice(4),a=ca(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Pc={found:!1,width:512,height:512};function Ic(e,t){!Os&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=zs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&pr[t]&&pr[t][e]){var s=pr[t][e];return r(zr(s))}Ic(e,t),r(E(E({},Pc),{},{icon:P.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var yi=function(){},$r=P.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:yi,measure:yi},zt='FA "6.4.2"',Sc=function(t){return $r.mark("".concat(zt," ").concat(t," begins")),function(){return $s(t)}},$s=function(t){$r.mark("".concat(zt," ").concat(t," ends")),$r.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},_a={begin:Sc,end:$s},Tn=function(){};function xi(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function Tc(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(ma):null;return t&&n}function Nc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Mc(){if(P.autoReplaceSvg===!0)return Nn.replace;var e=Nn[P.autoReplaceSvg];return e||Nn.replace}function Rc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Fc(e){return X.createElement(e)}function Us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Rc:Fc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(Us(s,{ceFn:r}))}),a}function Lc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Us(a),n)}),n.getAttribute(mt)===null&&P.keepOriginalSource){var r=X.createComment(Lc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ha(n).indexOf(P.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===P.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return an(o)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=s}};function _i(e){e()}function Bs(e,t){var n=typeof t=="function"?t:Tn;if(e.length===0)n();else{var r=_i;P.mutateApproach===$f&&(r=Ge.requestAnimationFrame||_i),r(function(){var a=Mc(),i=_a.begin("mutate");e.map(a),i(),n()})}}var wa=!1;function Hs(){wa=!0}function Ur(){wa=!1}var Dn=null;function wi(e){if(ui&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Tn:t,r=e.nodeCallback,a=r===void 0?Tn:r,i=e.pseudoElementsCallback,s=i===void 0?Tn:i,o=e.observeMutationsRoot,l=o===void 0?X:o;Dn=new ui(function(c){if(!wa){var d=et();Nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xi(m.addedNodes[0])&&(P.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&xi(m.target)&&~Vf.indexOf(m.attributeName))if(m.attributeName==="class"&&Tc(m.target)){var g=tr(ha(m.target)),w=g.prefix,j=g.iconName;m.target.setAttribute(da,w||d),j&&m.target.setAttribute(ma,j)}else Nc(m.target)&&a(m.target)})}}),We&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jc(){Dn&&Dn.disconnect()}function zc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Dc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=tr(ha(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=vc(a.prefix,e.innerText)||ba(a.prefix,Rr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function $c(e){var t=Nt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function Uc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Dc(e),r=n.iconName,a=n.prefix,i=n.rest,s=$c(e),o=Lr("parseNodeAttributes",{},e),l=t.styleParser?zc(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Bc=ke.styles;function Ys(e){var t=P.autoReplaceSvg==="nest"?Ai(e,{styleParser:!1}):Ai(e);return~t.extra.classes.indexOf(Es)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var tt=new Set;pa.map(function(e){tt.add("fa-".concat(e))});Object.keys(qt[V]).map(tt.add.bind(tt));Object.keys(qt[Q]).map(tt.add.bind(tt));tt=nn(tt);function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(di,"-").concat(m))},a=function(m){return n.remove("".concat(di,"-").concat(m))},i=P.autoFetchSvg?tt:pa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Bc));i.includes("fa")||i.push("fa");var s=[".".concat(Es,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Nt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=_a.begin("onTree"),c=o.reduce(function(d,m){try{var g=Ys(m);g&&d.push(g)}catch(w){Os||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(g){Bs(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function Hc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ys(e).then(function(n){n&&Bs([n],t)})}function Yc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Wc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,m=n.title,g=m===void 0?null:m,w=n.titleId,j=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,A=n.attributes,O=A===void 0?{}:A,M=n.styles,I=M===void 0?{}:M;if(t){var B=t.prefix,ae=t.iconName,ie=t.icon;return nr(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(g?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(j||en()):(O["aria-hidden"]="true",O.focusable="false")),xa({icons:{main:zr(ie),mask:l?zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ae,transform:E(E({},Ne),a),symbol:s,title:g,maskId:d,titleId:j,extra:{attributes:O,styles:I,classes:D}})})}},Kc={mixout:function(){return{icon:Yc(Wc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ki,n.nodeCallback=Hc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,s=i===void 0?function(){}:i;return ki(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(w,j){Promise.all([Dr(a,o),d.iconName?Dr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ca(N,2),A=D[0],O=D[1];w([n,xa({icons:{main:A,mask:O},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:s,extra:g,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Gn(o);l.length>0&&(a.style=l);var c;return va(s)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Vc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return nr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:s}]})}}}},Xc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return nr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),Cc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(nn(o))}})})}}}},Jc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,w=g===void 0?{}:g;return nr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),bi({content:n,transform:E(E({},Ne),i),title:o,extra:{attributes:m,styles:w,classes:["".concat(P.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(ws){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,bi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},qc=new RegExp('"',"ug"),Oi=[1105920,1112319];function Qc(e){var t=e.replace(qc,""),n=cc(t,0),r=n>=Oi[0]&&n<=Oi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Rr(a?t[0]:t),isSecondary:r||a}}function Ei(e,t){var n="".concat(Df).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Nt(e.children),s=i.filter(function(ie){return ie.getAttribute(Mr)===t})[0],o=Ge.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Yf),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Q:V,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[g][l[2].toLowerCase()]:Wf[g][c],j=Qc(m),N=j.value,D=j.isSecondary,A=l[0].startsWith("FontAwesome"),O=ba(w,N),M=O;if(A){var I=gc(N);I.iconName&&I.prefix&&(O=I.iconName,w=I.prefix)}if(O&&!D&&(!s||s.getAttribute(da)!==w||s.getAttribute(ma)!==M)){e.setAttribute(n,M),s&&e.removeChild(s);var B=Uc(),ae=B.extra;ae.attributes[Mr]=t,Dr(O,w).then(function(ie){var ge=xa(E(E({},B),{},{icons:{main:ie,mask:ya()},prefix:w,iconName:M,extra:ae,watchable:!0})),ve=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ge.map(function(Re){return an(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Zc(e){return Promise.all([Ei(e,"::before"),Ei(e,"::after")])}function Gc(e){return e.parentNode!==document.head&&!~Uf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ci(e){if(We)return new Promise(function(t,n){var r=Nt(e.querySelectorAll("*")).filter(Gc).map(Zc),a=_a.begin("searchPseudoElements");Hs(),Promise.all(r).then(function(){a(),Ur(),t()}).catch(function(){a(),Ur(),n()})})}var eu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ci,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&Ci(a)}}},Pi=!1,tu={mixout:function(){return{dom:{unwatch:function(){Hs(),Pi=!0}}}},hooks:function(){return{bootstrap:function(){wi(Lr("mutationObserverCallbacks",{}))},noAuto:function(){jc()},watch:function(n){var r=n.observeMutationsRoot;Pi?Ur():wi(Lr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ii=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},nu={mixout:function(){return{parse:{transform:function(n){return Ii(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ii(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(s/2*-1," -256)")},w={outer:o,inner:m,path:g};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},hr={x:0,y:0,width:"100%",height:"100%"};function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ru(e){return e.tag==="g"?e.children:[e]}var au={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?tr(a.split(" ").map(function(s){return s.trim()})):ya();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,m=s.width,g=s.icon,w=nc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},hr),{},{fill:"white"})},N=d.children?{children:d.children.map(Si)}:{},D={tag:"g",attributes:E({},w.inner),children:[Si(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},A={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(o||en()),M="clip-".concat(o||en()),I={tag:"mask",attributes:E(E({},hr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,A]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:ru(g)},I]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},hr)}),{children:r,attributes:a}}}},iu={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ou=[ic,Kc,Vc,Xc,Jc,eu,tu,nu,au,iu,su];xc(ou,{mixoutsTo:he});he.noAuto;he.config;var lu=he.library;he.dom;var Br=he.parse;he.findIconDefinition;he.toHtml;var fu=he.icon;he.layer;he.text;he.counter;function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function ue(e,t,n){return t=mu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function uu(e,t){if(e==null)return{};var n=cu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function du(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mu(e){var t=du(e,"string");return typeof t=="symbol"?t:String(t)}var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ws={exports:{}};(function(e){(function(t){var n=function(A,O,M){if(!c(O)||m(O)||g(O)||w(O)||l(O))return O;var I,B=0,ae=0;if(d(O))for(I=[],ae=O.length;B<ae;B++)I.push(n(A,O[B],M));else{I={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(I[A(ie,M)]=n(A,O[ie],M))}return I},r=function(A,O){O=O||{};var M=O.separator||"_",I=O.split||/(?=[A-Z])/;return A.split(I).join(M)},a=function(A){return j(A)?A:(A=A.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),A.substr(0,1).toLowerCase()+A.substr(1))},i=function(A){var O=a(A);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(A,O){return r(A,O).toLowerCase()},o=Object.prototype.toString,l=function(A){return typeof A=="function"},c=function(A){return A===Object(A)},d=function(A){return o.call(A)=="[object Array]"},m=function(A){return o.call(A)=="[object Date]"},g=function(A){return o.call(A)=="[object RegExp]"},w=function(A){return o.call(A)=="[object Boolean]"},j=function(A){return A=A-0,A===A},N=function(A,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?A:function(I,B){return M(I,A,B)}},D={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(A,O){return n(N(a,O),A)},decamelizeKeys:function(A,O){return n(N(s,O),A,O)},pascalizeKeys:function(A,O){return n(N(i,O),A)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(pu)})(Ws);var hu=Ws.exports,vu=["class","style"];function gu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=hu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function bu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ks(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=bu(d);break;case"style":l.style=gu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=uu(n,vu);return nf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),s)},a.attrs),o),r)}var Vs=!1;try{Vs=!0}catch{}function yu(){if(!Vs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function vr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function xu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ni(e){if(e&&$n(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Br.icon)return Br.icon(e);if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _u=fl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=st(function(){return Ni(t.icon)}),i=st(function(){return vr("classes",xu(t))}),s=st(function(){return vr("transform",typeof t.transform=="string"?Br.transform(t.transform):t.transform)}),o=st(function(){return vr("mask",Ni(t.mask))}),l=st(function(){return fu(a.value,je(je(je(je({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});En(l,function(d){if(!d)return yu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=st(function(){return l.value?Ks(l.value.abstract[0],{},r):null});return function(){return c.value}}}),wu={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},Au={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ku={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Ou={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]},Eu={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Cu={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const Pu="/F2ELegislator/assets/logo-39f3ca48.png",Ke=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Iu={},Su={class:"flex items-center justify-between px-8 w-full fixed bg-white"},Tu=tn('<div class="flex"><img src="'+Pu+'" alt="選舉章" class="pr-6"><div class="flex items-center my-2 bg-mainBlack rounded-3xl text-white"><h3 class="px-2">2024 立委</h3><div class="w-6 h-6 rounded-full bg-mainYellow text-center text-mainBlack font-bold">3</div><h3 class="px-2">號參選人</h3></div></div><div class="flex"><h4 class="mx-4 cursor-pointer">候選人主張</h4><h4 class="mx-4 cursor-pointer">最新活動</h4><h4 class="mx-4 cursor-pointer">政策議題</h4><h4 class="mx-4 cursor-pointer">民眾服務信箱</h4><h4 class="mx-4 cursor-pointer">小額捐款</h4></div>',2),Nu={class:"flex text-green text-2xl"};function Mu(e,t){const n=ts("font-awesome-icon");return He(),Ye("div",Su,[Tu,ce("div",Nu,[K(n,{icon:"fa-brands fa-facebook",class:"p-2"}),K(n,{icon:"fa-brands fa-instagram",class:"p-2"}),K(n,{icon:"fa-solid fa-share-nodes",class:"p-2"})])])}const Ru=Ke(Iu,[["render",Mu]]),Fu="/F2ELegislator/assets/homebg-012b586a.png",Lu="/F2ELegislator/assets/meow-34c09d2c.png",ju="/F2ELegislator/assets/logoGreen-d3695462.png",zu={},Du={class:"min-h-screen pt-16"},$u=tn('<div class="absolute h-1/4" style="z-index:-50;"><img src="'+Fu+'" alt="homebg"></div><div class="flex justify-center items-center pt-32"><img src="'+Lu+'" alt="meow"><div class="flex flex-col items-center tracking-widest"><img src="'+ju+'" alt="meow"><h4 class="pt-6 text-9xl">台灣的明天</h4><h4 class="pt-6 text-9xl">喵先鋪路</h4><h4 class="mt-12 px-2 border-2 border-black text-2xl font-bold">2024立委3號參選人 少年立委 勤政愛民 愛您！！</h4></div></div><div><h6>20</h6><h6>24</h6><h6>|</h6><h6>01</h6><h6>|</h6><h6>13</h6></div>',3),Uu=[$u];function Bu(e,t){return He(),Ye("div",Du,Uu)}const Hu=Ke(zu,[["render",Bu]]),Yu="/F2ELegislator/assets/puzzleMeow-0f0bc168.png",Wu={},Ku={class:"min-h-screen"},Vu=tn('<div class="flex justify-center"><div><h1>候選人主張</h1><h3 class="text-green">我堅信 ! </h3><h3>藉由推動更完善的貓咪福利和相關政策，</h3><h3>更是間接地投資於<span class="text-mainYellow">台灣的未來</span></h3><p>畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</p><p>因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</p><hr class="border-black"><h3 class="text-green">護航台灣的幸福經濟，從照顧每一隻貓咪開始。</h3></div><img src="'+Yu+'" alt="puzzleMeow"></div>',1),Xu=[Vu];function Ju(e,t){return He(),Ye("div",Ku,Xu)}const qu=Ke(Wu,[["render",Ju]]),Qu={},Zu={class:"min-h-screen"};function Gu(e,t){return He(),Ye("div",Zu)}const ed=Ke(Qu,[["render",Gu]]);const td={},nd={class:"bg-image min-h-screen"};function rd(e,t){return He(),Ye("div",nd)}const ad=Ke(td,[["render",rd],["__scopeId","data-v-8af7b8c0"]]);const id={},sd={class:"bg-image min-h-screen"};function od(e,t){return He(),Ye("div",sd)}const ld=Ke(id,[["render",od],["__scopeId","data-v-f60d412d"]]),fd="/F2ELegislator/assets/contactMeow-77e59b7a.png",cd={},ud={class:"min-h-screen"},dd=tn('<div class="flex flex-col items-center"><div class="flex"><div class="flex flex-col justify-end pb-4"><div class="relative"><h1 class="text-64 font-mainBlack">您的聲音，我們的行動！</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider" style="left:-15%;top:-60%;">CONTACT US</h1></div><p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到</p><p>您的建議。分享您的想法，一同為我們的未來打造更美好！</p></div><img src="'+fd+'" alt="contactMeow"></div><div class="flex"><div class="flex border-2 border-black rounded"><div class="pr-6"><div class="w-full"><h5>您的姓名</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="請輸入您的姓名"></div><div class="w-full"><h5>您的 Email</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="請輸入您的電子郵件"></div><div class="w-full"><h5>您的手機號碼</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="09-xxx-xxx"></div></div><div class="flex flex-col"><div class="w-full"><h5>您的建言</h5><textarea type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow"></textarea></div><button class="border-2 border-black rounded bg-mainYellow">送出意見</button></div></div></div></div>',1),md=[dd];function pd(e,t){return He(),Ye("div",ud,md)}const hd=Ke(cd,[["render",pd]]),vd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWxSURBVHgBvVuNcds2FH6kbKu+tld2gnKDeIPGEzSeIM4ESSewPYHjCeJMYGeCqhPImYDcgGlsS3epLfY9EVRU8AMJgIC+O54TiALwAXgP708JRUJFlO0RHSX8TIhe1PyXmzN+cu3Vkt8p+fMv/HxeEc2eiO5+5f9TBCQUEEJyn+iUCf7Bk39JI8ATmz0TffyX/zL5kgIhCOF7Jse7eTaWZA9umfzVz0yeRmIU4R0Q1VEy8TdjiHsR5qObHxBd8pdf2X6nbmSyTDXZXCm5Tpq/tn1dfyO6CHnUjVgSvX5kzgse1+V5aJRWH4lMTgy/+577n1v0WXCfpxQTPMhl3yRkIfg55+cafP7OZSxe2Fz1UwwQv6TQEO276Fn1lmitjqVMVn+H2z6QJ2QnB4jPq+5150027xuMJ/O+BvIHjn1BI7C148YjPpr0ANnivkc78+c3+ncqB8VkgpLzooe0/xg9x3i+HFhN3vl34DScUgCo3TbOre+7qekDpQyQZr09JDo+HLgS+JjfgeZeTW0LGZuvpWO+0j6iMZwVmVISaPVubPtQis5p9X3wYJBruT6tOuiR23ntKB886F8x5Fibb2Y43hVSYp0jzRbUGWGP5iRx9GDYDPyst+0FOtYtxKtiEifUFbFsOnS0lQbsHI97T1v5K5ue4M4+pwjwmjs6ymMMBiTHcswpEsQmsB7PsELFcuRlDhaxokhQ8lz17fJGhtlpf6t3wGr/4nCkR8KK7m+tKXsILMctVJTkSm/fa/TSd1TA9h1rCrZABsjC0ZFwgWmX29thvcP7QLCTANEFAZ+cW9D3C4oE0y5Pt608dF8uQ3kfFN6RGALSRxvltQuLaAEcCZbt3ygi0I0jXFNkCKy6imYUUH+868cUETzmJ71NuKYpkN8ayN0YxHQkTFgBHTQRwkiBPOEJekP6qzWzlBf6d4qIfcBBuKYgWvgldNRf2bv6BI5COxLbOFTZjO02yX6kNXAUKAJ24UgAlNr/M7mH8+2WJFJOB8lUGjmAn3a55CntCPtAV8SWY4QOYd6Jfygw+Ap6VQO3sI5/pDtIQcMvFBBVk0YxOeLRHAkThHC53VAH1JxVE3UQky4n8wReUiSsulzKtAaCTYEwxeGi/yGmI0FdhSzJvM51kYW4H5cN2UE3sHbIQLpAOOg2huinFJl9k5HHjAc7qnHsakZdszWL4UgYONxBwmPkSpTUFMevJfL5ZleOBOIgtkD6hAl7348/NEG/HAx2osy9nTgSCeCw4YoCAD7XhcgtCpXqodnYAYEKp2vXAYD1PfwMfMfEUZlIegbJLe/s1Y9aO3Ak8pCOxIEetKM1x+95KEPUo7KdRNVk81AZRIHudRQ//hpIWysuhSlktd5hcd9A0C47sLhWWuMCuJmipI6RMxLTkZg2SbR8u40X/VMn3GwIxA/uMu/sB4PcGncsVkbClAg0pluQ8lr0JKRslRRCjIyEYfHNCtElIVU1iecaPFY5ZCTH9yOOtXciEIVUF1rBSE8O2ToXZUi6D+oMBNN8rBKBS7PGnbfyvDDUV7gE71Fp06NHtLSnpMo+EWgqeRAZMcmtz+6AhXWW40d8It0LaJCMmR55lzyA6q5sHQmVNLsJOR+yrXkkT/iWNimZDVu2JPjWeDFlzytr44L8MdMbJgOOi2hdFUU5MsznhMZgOVB6KHI9puTP1pFQyqmvuHV0tcIGA5Vv7WBnPsSHSpvk39L3QMmyc0mVFSwUWSE77uJamhwJOboWRP0VlMMEh0p5N+TlCIpN3WePIwvJpgBd3vGp3fT6CYAccfZ4zhPb8j5G3XhkZdJNcOXkLgq33M+fPgU3XoRbyO5MDCGdSJCf9lzs/EceOhTxtxQp5EoBiLYIQriFHPXnhvzrAD/tmUnZAoeHrkNmNIMS3kat8kYSyZDsQtLEn3MC+ehaJcwlhyxRzZ/4iZW2/Q8N/qhDLs4VBQAAAABJRU5ErkJggg==",gd={},bd=tn('<div class="p-12 bg-mainYellow"><div class="flex justify-end w-6/12 pr-8"><div class="mr-2 border-2 border-black"><div class="flex items-center"><div class="w-1/4 mx-4"><img src="'+vd+'" alt="選舉章"></div><div class="flex items-center w-3/4 p-2 border-l-2 border-black"><div class="pl-4"><h4>好</h4><h4>喵</h4></div><h4 class="px-6 font-mainBlack text-7xl">3</h4></div></div><div class="p-1 text-xs text-center border-t-2 border-black tracking-widest">點擊我就喵喵叫給你聽</div></div><div class="py-4 px-8 border-2 border-black tracking-widest"><h4 class="pb-2 text-4xl font-mainBlack">喵立翰</h4><h4 class="text-xl text-center">少年立委</h4></div></div><div class="w-6/12"></div></div>',1),yd={class:"flex justify-evenly p-8 bg-mainBlack text-white"},xd=ce("div",null,[ce("p",{class:"pb-2 text-2xl"},"競選總部"),ce("h4",null,"地址：台灣喵星區"),ce("h4",null,"毛茸茸大道88號，喵喵大樓3樓")],-1),_d=ce("div",{class:"flex flex-col justify-end"},[ce("h4",null,"電話：(02) 888-5678"),ce("h4",null,"電子郵件地址: meowoffice@linmeow.tw")],-1),wd={class:"flex items-end text-2xl"};function Ad(e,t){const n=ts("font-awesome-icon");return He(),Ye(xe,null,[bd,ce("div",yd,[xd,_d,ce("div",wd,[K(n,{icon:"fa-brands fa-facebook",class:"p-2"}),K(n,{icon:"fa-brands fa-instagram",class:"p-2"}),K(n,{icon:"fa-brands fa-x-twitter",class:"p-2"})])])],64)}const kd=Ke(gd,[["render",Ad]]);const Od=e=>(Qo("data-v-8fe74cc0"),e=e(),Zo(),e),Ed=Od(()=>ce("div",{class:"relative"},[ce("div",{class:"fixed bottom-80 left-0"},[ce("h6",{class:"transform -rotate-90"},"Miao Li-Han © 2023 Copyright. All Rights Reserved")])],-1)),Cd={__name:"App",setup(e){return(t,n)=>(He(),Ye(xe,null,[K(Ru),Ed,K(Hu),K(qu),K(ed),K(ad),K(ld),K(hd),K(kd)],64))}},Pd=Ke(Cd,[["__scopeId","data-v-8fe74cc0"]]);lu.add(ku,Au,wu,Ou,Cu,Eu);const Xs=Pf(Pd);Xs.component("font-awesome-icon",_u);Xs.mount("#app");

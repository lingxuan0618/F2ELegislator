(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Gr(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},Oe=[],Ct=()=>{},ho=()=>!1,po=/^on[^a-z]/,qn=t=>po.test(t),ta=t=>t.startsWith("onUpdate:"),at=Object.assign,ea=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vo=Object.prototype.hasOwnProperty,U=(t,e)=>vo.call(t,e),F=Array.isArray,Ee=t=>Zn(t)==="[object Map]",Bi=t=>Zn(t)==="[object Set]",j=t=>typeof t=="function",et=t=>typeof t=="string",Qn=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",Hi=t=>(Q(t)||j(t))&&j(t.then)&&j(t.catch),Yi=Object.prototype.toString,Zn=t=>Yi.call(t),go=t=>Zn(t).slice(8,-1),Wi=t=>Zn(t)==="[object Object]",na=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nn=Gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bo=/-(\w)/g,Lt=Gn(t=>t.replace(bo,(e,n)=>n?n.toUpperCase():"")),yo=/\B([A-Z])/g,Fe=Gn(t=>t.replace(yo,"-$1").toLowerCase()),tr=Gn(t=>t.charAt(0).toUpperCase()+t.slice(1)),gr=Gn(t=>t?`on${tr(t)}`:""),pe=(t,e)=>!Object.is(t,e),br=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Dn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $a;const Pr=()=>$a||($a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ra(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=et(r)?Ao(r):ra(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(et(t)||Q(t))return t}const _o=/;(?![^(]*\))/g,wo=/:([^]+)/,ko=/\/\*[^]*?\*\//g;function Ao(t){const e={};return t.replace(ko,"").split(_o).forEach(n=>{if(n){const r=n.split(wo);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function aa(t){let e="";if(et(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=aa(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Oo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eo=Gr(Oo);function Ki(t){return!!t||t===""}const Nt=t=>et(t)?t:t==null?"":F(t)||Q(t)&&(t.toString===Yi||!j(t.toString))?JSON.stringify(t,Xi,2):String(t),Xi=(t,e)=>e&&e.__v_isRef?Xi(t,e.value):Ee(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Bi(e)?{[`Set(${e.size})`]:[...e.values()]}:Q(e)&&!F(e)&&!Wi(e)?String(e):e;let wt;class Co{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Po(t,e=wt){e&&e.active&&e.effects.push(t)}function So(){return wt}const ia=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Vi=t=>(t.w&Zt)>0,Ji=t=>(t.n&Zt)>0,Io=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Zt},To=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Vi(a)&&!Ji(a)?a.delete(t):e[n++]=a,a.w&=~Zt,a.n&=~Zt}e.length=n}},Sr=new WeakMap;let Be=0,Zt=1;const Ir=30;let kt;const me=Symbol(""),Tr=Symbol("");class sa{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Po(this,r)}run(){if(!this.active)return this.fn();let e=kt,n=qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,qt=!0,Zt=1<<++Be,Be<=Ir?Io(this):za(this),this.fn()}finally{Be<=Ir&&To(this),Zt=1<<--Be,kt=this.parent,qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(za(this),this.onStop&&this.onStop(),this.active=!1)}}function za(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qt=!0;const qi=[];function Re(){qi.push(qt),qt=!1}function Le(){const t=qi.pop();qt=t===void 0?!0:t}function mt(t,e,n){if(qt&&kt){let r=Sr.get(t);r||Sr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=ia()),Qi(a)}}function Qi(t,e){let n=!1;Be<=Ir?Ji(t)||(t.n|=Zt,n=!Vi(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function Ut(t,e,n,r,a,i){const s=Sr.get(t);if(!s)return;let o=[];if(e==="clear")o=[...s.values()];else if(n==="length"&&F(t)){const l=Number(r);s.forEach((f,d)=>{(d==="length"||!Qn(d)&&d>=l)&&o.push(f)})}else switch(n!==void 0&&o.push(s.get(n)),e){case"add":F(t)?na(n)&&o.push(s.get("length")):(o.push(s.get(me)),Ee(t)&&o.push(s.get(Tr)));break;case"delete":F(t)||(o.push(s.get(me)),Ee(t)&&o.push(s.get(Tr)));break;case"set":Ee(t)&&o.push(s.get(me));break}if(o.length===1)o[0]&&Nr(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);Nr(ia(l))}}function Nr(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Da(r);for(const r of n)r.computed||Da(r)}function Da(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const No=Gr("__proto__,__v_isRef,__isVue"),Zi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qn)),Ua=Mo();function Mo(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,s=this.length;i<s;i++)mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Re();const r=B(this)[e].apply(this,n);return Le(),r}}),t}function Fo(t){const e=B(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Gi{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Xo:rs:i?ns:es).get(e))return e;const s=F(e);if(!a){if(s&&U(Ua,n))return Reflect.get(Ua,n,r);if(n==="hasOwnProperty")return Fo}const o=Reflect.get(e,n,r);return(Qn(n)?Zi.has(n):No(n))||(a||mt(e,"get",n),i)?o:lt(o)?s&&na(n)?o:o.value:Q(o)?a?as(o):ca(o):o}}class ts extends Gi{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(Ie(i)&&lt(i)&&!lt(r))return!1;if(!this._shallow&&(!Un(r)&&!Ie(r)&&(i=B(i),r=B(r)),!F(e)&&lt(i)&&!lt(r)))return i.value=r,!0;const s=F(e)&&na(n)?Number(n)<e.length:U(e,n),o=Reflect.set(e,n,r,a);return e===B(a)&&(s?pe(r,i)&&Ut(e,"set",n,r):Ut(e,"add",n,r)),o}deleteProperty(e,n){const r=U(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&Ut(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!Qn(n)||!Zi.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",F(e)?"length":me),Reflect.ownKeys(e)}}class Ro extends Gi{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lo=new ts,jo=new Ro,$o=new ts(!0),oa=t=>t,er=t=>Reflect.getPrototypeOf(t);function gn(t,e,n=!1,r=!1){t=t.__v_raw;const a=B(t),i=B(e);n||(pe(e,i)&&mt(a,"get",e),mt(a,"get",i));const{has:s}=er(a),o=r?oa:n?ua:qe;if(s.call(a,e))return o(t.get(e));if(s.call(a,i))return o(t.get(i));t!==a&&t.get(e)}function bn(t,e=!1){const n=this.__v_raw,r=B(n),a=B(t);return e||(pe(t,a)&&mt(r,"has",t),mt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function yn(t,e=!1){return t=t.__v_raw,!e&&mt(B(t),"iterate",me),Reflect.get(t,"size",t)}function Ba(t){t=B(t);const e=B(this);return er(e).has.call(e,t)||(e.add(t),Ut(e,"add",t,t)),this}function Ha(t,e){e=B(e);const n=B(this),{has:r,get:a}=er(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const s=a.call(n,t);return n.set(t,e),i?pe(e,s)&&Ut(n,"set",t,e):Ut(n,"add",t,e),this}function Ya(t){const e=B(this),{has:n,get:r}=er(e);let a=n.call(e,t);a||(t=B(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Ut(e,"delete",t,void 0),i}function Wa(){const t=B(this),e=t.size!==0,n=t.clear();return e&&Ut(t,"clear",void 0,void 0),n}function xn(t,e){return function(r,a){const i=this,s=i.__v_raw,o=B(s),l=e?oa:t?ua:qe;return!t&&mt(o,"iterate",me),s.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function _n(t,e,n){return function(...r){const a=this.__v_raw,i=B(a),s=Ee(i),o=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,f=a[t](...r),d=n?oa:e?ua:qe;return!e&&mt(i,"iterate",l?Tr:me),{next(){const{value:m,done:g}=f.next();return g?{value:m,done:g}:{value:o?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function zo(){const t={get(i){return gn(this,i)},get size(){return yn(this)},has:bn,add:Ba,set:Ha,delete:Ya,clear:Wa,forEach:xn(!1,!1)},e={get(i){return gn(this,i,!1,!0)},get size(){return yn(this)},has:bn,add:Ba,set:Ha,delete:Ya,clear:Wa,forEach:xn(!1,!0)},n={get(i){return gn(this,i,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:xn(!0,!1)},r={get(i){return gn(this,i,!0,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=_n(i,!1,!1),n[i]=_n(i,!0,!1),e[i]=_n(i,!1,!0),r[i]=_n(i,!0,!0)}),[t,n,e,r]}const[Do,Uo,Bo,Ho]=zo();function la(t,e){const n=e?t?Ho:Bo:t?Uo:Do;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Yo={get:la(!1,!1)},Wo={get:la(!1,!0)},Ko={get:la(!0,!1)},es=new WeakMap,ns=new WeakMap,rs=new WeakMap,Xo=new WeakMap;function Vo(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jo(t){return t.__v_skip||!Object.isExtensible(t)?0:Vo(go(t))}function ca(t){return Ie(t)?t:fa(t,!1,Lo,Yo,es)}function qo(t){return fa(t,!1,$o,Wo,ns)}function as(t){return fa(t,!0,jo,Ko,rs)}function fa(t,e,n,r,a){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const s=Jo(t);if(s===0)return t;const o=new Proxy(t,s===2?r:n);return a.set(t,o),o}function Ce(t){return Ie(t)?Ce(t.__v_raw):!!(t&&t.__v_isReactive)}function Ie(t){return!!(t&&t.__v_isReadonly)}function Un(t){return!!(t&&t.__v_isShallow)}function is(t){return Ce(t)||Ie(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function ss(t){return Dn(t,"__v_skip",!0),t}const qe=t=>Q(t)?ca(t):t,ua=t=>Q(t)?as(t):t;function os(t){qt&&kt&&(t=B(t),Qi(t.dep||(t.dep=ia())))}function ls(t,e){t=B(t);const n=t.dep;n&&Nr(n)}function lt(t){return!!(t&&t.__v_isRef===!0)}function _e(t){return Qo(t,!1)}function Qo(t,e){return lt(t)?t:new Zo(t,e)}class Zo{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:qe(e)}get value(){return os(this),this._value}set value(e){const n=this.__v_isShallow||Un(e)||Ie(e);e=n?e:B(e),pe(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qe(e),ls(this))}}function Go(t){return lt(t)?t.value:t}const tl={get:(t,e,n)=>Go(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return lt(a)&&!lt(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function cs(t){return Ce(t)?t:new Proxy(t,tl)}class el{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new sa(e,()=>{this._dirty||(this._dirty=!0,ls(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=B(this);return os(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function nl(t,e,n=!1){let r,a;const i=j(t);return i?(r=t,a=Ct):(r=t.get,a=t.set),new el(r,a,i||!a,n)}function Qt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){nr(i,e,n)}return a}function Pt(t,e,n,r){if(j(t)){const i=Qt(t,e,n,r);return i&&Hi(i)&&i.catch(s=>{nr(s,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Pt(t[i],e,n,r));return a}function nr(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,o=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,s,o)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Qt(l,null,10,[t,s,o]);return}}rl(t,n,a,r)}function rl(t,e,n,r=!0){console.error(t)}let Qe=!1,Mr=!1;const ot=[];let Ft=0;const Pe=[];let zt=null,le=0;const fs=Promise.resolve();let da=null;function al(t){const e=da||fs;return t?e.then(this?t.bind(this):t):e}function il(t){let e=Ft+1,n=ot.length;for(;e<n;){const r=e+n>>>1,a=ot[r],i=Ze(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function ma(t){(!ot.length||!ot.includes(t,Qe&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?ot.push(t):ot.splice(il(t.id),0,t),us())}function us(){!Qe&&!Mr&&(Mr=!0,da=fs.then(ms))}function sl(t){const e=ot.indexOf(t);e>Ft&&ot.splice(e,1)}function ol(t){F(t)?Pe.push(...t):(!zt||!zt.includes(t,t.allowRecurse?le+1:le))&&Pe.push(t),us()}function Ka(t,e=Qe?Ft+1:0){for(;e<ot.length;e++){const n=ot[e];n&&n.pre&&(ot.splice(e,1),e--,n())}}function ds(t){if(Pe.length){const e=[...new Set(Pe)];if(Pe.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,r)=>Ze(n)-Ze(r)),le=0;le<zt.length;le++)zt[le]();zt=null,le=0}}const Ze=t=>t.id==null?1/0:t.id,ll=(t,e)=>{const n=Ze(t)-Ze(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ms(t){Mr=!1,Qe=!0,ot.sort(ll);const e=Ct;try{for(Ft=0;Ft<ot.length;Ft++){const n=ot[Ft];n&&n.active!==!1&&Qt(n,null,14)}}finally{Ft=0,ot.length=0,ds(),Qe=!1,da=null,(ot.length||Pe.length)&&ms()}}function cl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let a=n;const i=e.startsWith("update:"),s=i&&e.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:g}=r[d]||q;g&&(a=n.map(w=>et(w)?w.trim():w)),m&&(a=n.map(xo))}let o,l=r[o=gr(e)]||r[o=gr(Lt(e))];!l&&i&&(l=r[o=gr(Fe(e))]),l&&Pt(l,t,6,a);const f=r[o+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Pt(f,t,6,a)}}function hs(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let s={},o=!1;if(!j(t)){const l=f=>{const d=hs(f,e,!0);d&&(o=!0,at(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!o?(Q(t)&&r.set(t,null),null):(F(i)?i.forEach(l=>s[l]=null):at(s,i),Q(t)&&r.set(t,s),s)}function rr(t,e){return!t||!qn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Fe(e))||U(t,e))}let At=null,ar=null;function Bn(t){const e=At;return At=t,ar=t&&t.type.__scopeId||null,e}function ir(t){ar=t}function sr(){ar=null}function We(t,e=At,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ri(-1);const i=Bn(e);let s;try{s=t(...a)}finally{Bn(i),r._d&&ri(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function yr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:f,render:d,renderCache:m,data:g,setupState:w,ctx:$,inheritAttrs:M}=t;let D,k;const O=Bn(t);try{if(n.shapeFlag&4){const I=a||r;D=Mt(d.call(I,I,m,i,w,g,$)),k=l}else{const I=e;D=Mt(I.length>1?I(i,{attrs:l,slots:o,emit:f}):I(i,null)),k=e.props?l:fl(l)}}catch(I){Xe.length=0,nr(I,t,1),D=H(Ge)}let R=D;if(k&&M!==!1){const I=Object.keys(k),{shapeFlag:Y}=R;I.length&&Y&7&&(s&&I.some(ta)&&(k=ul(k,s)),R=Te(R,k))}return n.dirs&&(R=Te(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),D=R,Bn(O),D}const fl=t=>{let e;for(const n in t)(n==="class"||n==="style"||qn(n))&&((e||(e={}))[n]=t[n]);return e},ul=(t,e)=>{const n={};for(const r in t)(!ta(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dl(t,e,n){const{props:r,children:a,component:i}=t,{props:s,children:o,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xa(r,s,f):!!s;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(s[g]!==r[g]&&!rr(f,g))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Xa(r,s,f):!0:!!s;return!1}function Xa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!rr(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ps="components";function Hn(t,e){return pl(ps,t,!0,e)||t}const hl=Symbol.for("v-ndc");function pl(t,e,n=!0,r=!1){const a=At||rt;if(a){const i=a.type;if(t===ps){const o=cc(i,!1);if(o&&(o===e||o===Lt(e)||o===tr(Lt(e))))return i}const s=Va(a[t]||i[t],e)||Va(a.appContext[t],e);return!s&&r?i:s}}function Va(t,e){return t&&(t[e]||t[Lt(e)]||t[tr(Lt(e))])}const vl=t=>t.__isSuspense;function gl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):ol(t)}const wn={};function Mn(t,e,n){return vs(t,e,n)}function vs(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=q){var o;const l=So()===((o=rt)==null?void 0:o.scope)?rt:null;let f,d=!1,m=!1;if(lt(t)?(f=()=>t.value,d=Un(t)):Ce(t)?(f=()=>t,r=!0):F(t)?(m=!0,d=t.some(I=>Ce(I)||Un(I)),f=()=>t.map(I=>{if(lt(I))return I.value;if(Ce(I))return we(I);if(j(I))return Qt(I,l,2)})):j(t)?e?f=()=>Qt(t,l,2):f=()=>{if(!(l&&l.isUnmounted))return g&&g(),Pt(t,l,3,[w])}:f=Ct,e&&r){const I=f;f=()=>we(I())}let g,w=I=>{g=O.onStop=()=>{Qt(I,l,4)}},$;if(en)if(w=Ct,e?n&&Pt(e,l,3,[f(),m?[]:void 0,w]):f(),a==="sync"){const I=mc();$=I.__watcherHandles||(I.__watcherHandles=[])}else return Ct;let M=m?new Array(t.length).fill(wn):wn;const D=()=>{if(O.active)if(e){const I=O.run();(r||d||(m?I.some((Y,it)=>pe(Y,M[it])):pe(I,M)))&&(g&&g(),Pt(e,l,3,[I,M===wn?void 0:m&&M[0]===wn?[]:M,w]),M=I)}else O.run()};D.allowRecurse=!!e;let k;a==="sync"?k=D:a==="post"?k=()=>dt(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>ma(D));const O=new sa(f,k);e?n?D():M=O.run():a==="post"?dt(O.run.bind(O),l&&l.suspense):O.run();const R=()=>{O.stop(),l&&l.scope&&ea(l.scope.effects,O)};return $&&$.push(R),R}function bl(t,e,n){const r=this.proxy,a=et(t)?t.includes(".")?gs(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const s=rt;Ne(this);const o=vs(a,i.bind(r),n);return s?Ne(s):he(),o}function gs(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function we(t,e){if(!Q(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),lt(t))we(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)we(t[n],e);else if(Bi(t)||Ee(t))t.forEach(n=>{we(n,e)});else if(Wi(t))for(const n in t)we(t[n],e);return t}function ie(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Re(),Pt(l,n,8,[t.el,o,t,e]),Le())}}/*! #__NO_SIDE_EFFECTS__ */function yl(t,e){return j(t)?(()=>at({name:t.name},e,{setup:t}))():t}const Fn=t=>!!t.type.__asyncLoader,bs=t=>t.type.__isKeepAlive;function xl(t,e){ys(t,"a",e)}function _l(t,e){ys(t,"da",e)}function ys(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(or(e,r,n),n){let a=n.parent;for(;a&&a.parent;)bs(a.parent.vnode)&&wl(r,e,n,a),a=a.parent}}function wl(t,e,n,r){const a=or(e,t,r,!0);_s(()=>{ea(r[e],a)},n)}function or(t,e,n=rt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;Re(),Ne(n);const o=Pt(e,n,t,s);return he(),Le(),o});return r?a.unshift(i):a.push(i),i}}const Wt=t=>(e,n=rt)=>(!en||t==="sp")&&or(t,(...r)=>e(...r),n),kl=Wt("bm"),xs=Wt("m"),Al=Wt("bu"),Ol=Wt("u"),El=Wt("bum"),_s=Wt("um"),Cl=Wt("sp"),Pl=Wt("rtg"),Sl=Wt("rtc");function Il(t,e=rt){or("ec",t,e)}function Tl(t,e,n,r){let a;const i=n&&n[r];if(F(t)||et(t)){a=new Array(t.length);for(let s=0,o=t.length;s<o;s++)a[s]=e(t[s],s,void 0,i&&i[s])}else if(typeof t=="number"){a=new Array(t);for(let s=0;s<t;s++)a[s]=e(s+1,s,void 0,i&&i[s])}else if(Q(t))if(t[Symbol.iterator])a=Array.from(t,(s,o)=>e(s,o,void 0,i&&i[o]));else{const s=Object.keys(t);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const f=s[o];a[o]=e(t[f],f,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const Fr=t=>t?Ts(t)?ba(t)||t.proxy:Fr(t.parent):null,Ke=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fr(t.parent),$root:t=>Fr(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>ma(t.update)),$nextTick:t=>t.n||(t.n=al.bind(t.proxy)),$watch:t=>bl.bind(t)}),xr=(t,e)=>t!==q&&!t.__isScriptSetup&&U(t,e),Nl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=t;let f;if(e[0]!=="$"){const w=s[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(xr(r,e))return s[e]=1,r[e];if(a!==q&&U(a,e))return s[e]=2,a[e];if((f=t.propsOptions[0])&&U(f,e))return s[e]=3,i[e];if(n!==q&&U(n,e))return s[e]=4,n[e];Rr&&(s[e]=0)}}const d=Ke[e];let m,g;if(d)return e==="$attrs"&&mt(t,"get",e),d(t);if((m=o.__cssModules)&&(m=m[e]))return m;if(n!==q&&U(n,e))return s[e]=4,n[e];if(g=l.config.globalProperties,U(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return xr(a,e)?(a[e]=n,!0):r!==q&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||t!==q&&U(t,s)||xr(e,s)||(o=i[0])&&U(o,s)||U(r,s)||U(Ke,s)||U(a.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ja(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rr=!0;function Ml(t){const e=ha(t),n=t.proxy,r=t.ctx;Rr=!1,e.beforeCreate&&qa(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:f,created:d,beforeMount:m,mounted:g,beforeUpdate:w,updated:$,activated:M,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:R,unmounted:I,render:Y,renderTracked:it,renderTriggered:st,errorCaptured:xt,serverPrefetch:bt,expose:jt,inheritAttrs:ze,components:mn,directives:hn,filters:hr}=e;if(f&&Fl(f,r,null),s)for(const Z in s){const K=s[Z];j(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);Q(Z)&&(t.data=ca(Z))}if(Rr=!0,i)for(const Z in i){const K=i[Z],re=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Ct,pn=!j(K)&&j(K.set)?K.set.bind(n):Ct,ae=oe({get:re,set:pn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ae.value,set:St=>ae.value=St})}if(o)for(const Z in o)ws(o[Z],r,n,Z);if(l){const Z=j(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Dl(K,Z[K])})}d&&qa(d,t,"c");function ct(Z,K){F(K)?K.forEach(re=>Z(re.bind(n))):K&&Z(K.bind(n))}if(ct(kl,m),ct(xs,g),ct(Al,w),ct(Ol,$),ct(xl,M),ct(_l,D),ct(Il,xt),ct(Sl,it),ct(Pl,st),ct(El,O),ct(_s,I),ct(Cl,bt),F(jt))if(jt.length){const Z=t.exposed||(t.exposed={});jt.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:re=>n[K]=re})})}else t.exposed||(t.exposed={});Y&&t.render===Ct&&(t.render=Y),ze!=null&&(t.inheritAttrs=ze),mn&&(t.components=mn),hn&&(t.directives=hn)}function Fl(t,e,n=Ct){F(t)&&(t=Lr(t));for(const r in t){const a=t[r];let i;Q(a)?"default"in a?i=Rn(a.from||r,a.default,!0):i=Rn(a.from||r):i=Rn(a),lt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function qa(t,e,n){Pt(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ws(t,e,n,r){const a=r.includes(".")?gs(n,r):()=>n[r];if(et(t)){const i=e[t];j(i)&&Mn(a,i)}else if(j(t))Mn(a,t.bind(n));else if(Q(t))if(F(t))t.forEach(i=>ws(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Mn(a,i,t)}}function ha(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,o=i.get(e);let l;return o?l=o:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(f=>Yn(l,f,s,!0)),Yn(l,e,s)),Q(e)&&i.set(e,l),l}function Yn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Yn(t,i,n,!0),a&&a.forEach(s=>Yn(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const o=Rl[s]||n&&n[s];t[s]=o?o(t[s],e[s]):e[s]}return t}const Rl={data:Qa,props:Za,emits:Za,methods:He,computed:He,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:He,directives:He,watch:jl,provide:Qa,inject:Ll};function Qa(t,e){return e?t?function(){return at(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Ll(t,e){return He(Lr(t),Lr(e))}function Lr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function He(t,e){return t?at(Object.create(null),t,e):e}function Za(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:at(Object.create(null),Ja(t),Ja(e??{})):e}function jl(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function ks(){return{app:null,config:{isNativeTag:ho,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $l=0;function zl(t,e){return function(r,a=null){j(r)||(r=at({},r)),a!=null&&!Q(a)&&(a=null);const i=ks(),s=new WeakSet;let o=!1;const l=i.app={_uid:$l++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hc,get config(){return i.config},set config(f){},use(f,...d){return s.has(f)||(f&&j(f.install)?(s.add(f),f.install(l,...d)):j(f)&&(s.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!o){const g=H(r,a);return g.appContext=i,d&&e?e(g,f):t(g,f,m),o=!0,l._container=f,f.__vue_app__=l,ba(g.component)||g.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){Wn=l;try{return f()}finally{Wn=null}}};return l}}let Wn=null;function Dl(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Rn(t,e,n=!1){const r=rt||At;if(r||Wn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Ul(t,e,n,r=!1){const a={},i={};Dn(i,cr,1),t.propsDefaults=Object.create(null),As(t,e,a,i);for(const s in t.propsOptions[0])s in a||(a[s]=void 0);n?t.props=r?a:qo(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Bl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=t,o=B(a),[l]=t.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(rr(t.emitsOptions,g))continue;const w=e[g];if(l)if(U(i,g))w!==i[g]&&(i[g]=w,f=!0);else{const $=Lt(g);a[$]=jr(l,o,$,w,t,!1)}else w!==i[g]&&(i[g]=w,f=!0)}}}else{As(t,e,a,i)&&(f=!0);let d;for(const m in o)(!e||!U(e,m)&&((d=Fe(m))===m||!U(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=jr(l,o,m,void 0,t,!0)):delete a[m]);if(i!==o)for(const m in i)(!e||!U(e,m))&&(delete i[m],f=!0)}f&&Ut(t,"set","$attrs")}function As(t,e,n,r){const[a,i]=t.propsOptions;let s=!1,o;if(e)for(let l in e){if(Nn(l))continue;const f=e[l];let d;a&&U(a,d=Lt(l))?!i||!i.includes(d)?n[d]=f:(o||(o={}))[d]=f:rr(t.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(i){const l=B(n),f=o||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=jr(a,l,m,f[m],t,!U(f,m))}}return s}function jr(t,e,n,r,a,i){const s=t[n];if(s!=null){const o=U(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&j(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Ne(a),r=f[n]=l.call(null,e),he())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===Fe(n))&&(r=!0))}return r}function Os(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,s={},o=[];let l=!1;if(!j(t)){const d=m=>{l=!0;const[g,w]=Os(m,e,!0);at(s,g),w&&o.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Q(t)&&r.set(t,Oe),Oe;if(F(i))for(let d=0;d<i.length;d++){const m=Lt(i[d]);Ga(m)&&(s[m]=q)}else if(i)for(const d in i){const m=Lt(d);if(Ga(m)){const g=i[d],w=s[m]=F(g)||j(g)?{type:g}:at({},g);if(w){const $=ni(Boolean,w.type),M=ni(String,w.type);w[0]=$>-1,w[1]=M<0||$<M,($>-1||U(w,"default"))&&o.push(m)}}}const f=[s,o];return Q(t)&&r.set(t,f),f}function Ga(t){return t[0]!=="$"}function ti(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ei(t,e){return ti(t)===ti(e)}function ni(t,e){return F(e)?e.findIndex(n=>ei(n,t)):j(e)&&ei(e,t)?0:-1}const Es=t=>t[0]==="_"||t==="$stable",pa=t=>F(t)?t.map(Mt):[Mt(t)],Hl=(t,e,n)=>{if(e._n)return e;const r=We((...a)=>pa(e(...a)),n);return r._c=!1,r},Cs=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Es(a))continue;const i=t[a];if(j(i))e[a]=Hl(a,i,r);else if(i!=null){const s=pa(i);e[a]=()=>s}}},Ps=(t,e)=>{const n=pa(e);t.slots.default=()=>n},Yl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),Dn(e,"_",n)):Cs(e,t.slots={})}else t.slots={},e&&Ps(t,e);Dn(t.slots,cr,1)},Wl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,s=q;if(r.shapeFlag&32){const o=e._;o?n&&o===1?i=!1:(at(a,e),!n&&o===1&&delete a._):(i=!e.$stable,Cs(e,a)),s=e}else e&&(Ps(t,e),s={default:1});if(i)for(const o in a)!Es(o)&&s[o]==null&&delete a[o]};function $r(t,e,n,r,a=!1){if(F(t)){t.forEach((g,w)=>$r(g,e&&(F(e)?e[w]:e),n,r,a));return}if(Fn(r)&&!a)return;const i=r.shapeFlag&4?ba(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=t,f=e&&e.r,d=o.refs===q?o.refs={}:o.refs,m=o.setupState;if(f!=null&&f!==l&&(et(f)?(d[f]=null,U(m,f)&&(m[f]=null)):lt(f)&&(f.value=null)),j(l))Qt(l,o,12,[s,d]);else{const g=et(l),w=lt(l);if(g||w){const $=()=>{if(t.f){const M=g?U(m,l)?m[l]:d[l]:l.value;a?F(M)&&ea(M,i):F(M)?M.includes(i)||M.push(i):g?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=s,U(m,l)&&(m[l]=s)):w&&(l.value=s,t.k&&(d[t.k]=s))};s?($.id=-1,dt($,n)):$()}}}const dt=gl;function Kl(t){return Xl(t)}function Xl(t,e){const n=Pr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:g,setScopeId:w=Ct,insertStaticContent:$}=t,M=(c,u,h,p=null,v=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(c===u)return;c&&!Ue(c,u)&&(p=vn(c),St(c,v,x,!0),c=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case lr:D(c,u,h,p);break;case Ge:k(c,u,h,p);break;case Ln:c==null&&O(u,h,p,A);break;case yt:mn(c,u,h,p,v,x,A,y,_);break;default:P&1?Y(c,u,h,p,v,x,A,y,_):P&6?hn(c,u,h,p,v,x,A,y,_):(P&64||P&128)&&b.process(c,u,h,p,v,x,A,y,_,be)}T!=null&&v&&$r(T,c&&c.ref,x,u||c,!u)},D=(c,u,h,p)=>{if(c==null)r(u.el=o(u.children),h,p);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},k=(c,u,h,p)=>{c==null?r(u.el=l(u.children||""),h,p):u.el=c.el},O=(c,u,h,p)=>{[c.el,c.anchor]=$(c.children,u,h,p,c.el,c.anchor)},R=({el:c,anchor:u},h,p)=>{let v;for(;c&&c!==u;)v=g(c),r(c,h,p),c=v;r(u,h,p)},I=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=g(c),a(c),c=h;a(u)},Y=(c,u,h,p,v,x,A,y,_)=>{A=A||u.type==="svg",c==null?it(u,h,p,v,x,A,y,_):bt(c,u,v,x,A,y,_)},it=(c,u,h,p,v,x,A,y)=>{let _,b;const{type:T,props:P,shapeFlag:N,transition:L,dirs:z}=c;if(_=c.el=s(c.type,x,P&&P.is,P),N&8?d(_,c.children):N&16&&xt(c.children,_,null,p,v,x&&T!=="foreignObject",A,y),z&&ie(c,null,p,"created"),st(_,c,c.scopeId,A,p),P){for(const W in P)W!=="value"&&!Nn(W)&&i(_,W,null,P[W],x,c.children,p,v,$t);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Tt(b,p,c)}z&&ie(c,null,p,"beforeMount");const X=Vl(v,L);X&&L.beforeEnter(_),r(_,u,h),((b=P&&P.onVnodeMounted)||X||z)&&dt(()=>{b&&Tt(b,p,c),X&&L.enter(_),z&&ie(c,null,p,"mounted")},v)},st=(c,u,h,p,v)=>{if(h&&w(c,h),p)for(let x=0;x<p.length;x++)w(c,p[x]);if(v){let x=v.subTree;if(u===x){const A=v.vnode;st(c,A,A.scopeId,A.slotScopeIds,v.parent)}}},xt=(c,u,h,p,v,x,A,y,_=0)=>{for(let b=_;b<c.length;b++){const T=c[b]=y?Jt(c[b]):Mt(c[b]);M(null,T,u,h,p,v,x,A,y)}},bt=(c,u,h,p,v,x,A)=>{const y=u.el=c.el;let{patchFlag:_,dynamicChildren:b,dirs:T}=u;_|=c.patchFlag&16;const P=c.props||q,N=u.props||q;let L;h&&se(h,!1),(L=N.onVnodeBeforeUpdate)&&Tt(L,h,u,c),T&&ie(u,c,h,"beforeUpdate"),h&&se(h,!0);const z=v&&u.type!=="foreignObject";if(b?jt(c.dynamicChildren,b,y,h,p,z,x):A||K(c,u,y,null,h,p,z,x,!1),_>0){if(_&16)ze(y,u,P,N,h,p,v);else if(_&2&&P.class!==N.class&&i(y,"class",null,N.class,v),_&4&&i(y,"style",P.style,N.style,v),_&8){const X=u.dynamicProps;for(let W=0;W<X.length;W++){const tt=X[W],_t=P[tt],ye=N[tt];(ye!==_t||tt==="value")&&i(y,tt,_t,ye,v,c.children,h,p,$t)}}_&1&&c.children!==u.children&&d(y,u.children)}else!A&&b==null&&ze(y,u,P,N,h,p,v);((L=N.onVnodeUpdated)||T)&&dt(()=>{L&&Tt(L,h,u,c),T&&ie(u,c,h,"updated")},p)},jt=(c,u,h,p,v,x,A)=>{for(let y=0;y<u.length;y++){const _=c[y],b=u[y],T=_.el&&(_.type===yt||!Ue(_,b)||_.shapeFlag&70)?m(_.el):h;M(_,b,T,null,p,v,x,A,!0)}},ze=(c,u,h,p,v,x,A)=>{if(h!==p){if(h!==q)for(const y in h)!Nn(y)&&!(y in p)&&i(c,y,h[y],null,A,u.children,v,x,$t);for(const y in p){if(Nn(y))continue;const _=p[y],b=h[y];_!==b&&y!=="value"&&i(c,y,b,_,A,u.children,v,x,$t)}"value"in p&&i(c,"value",h.value,p.value)}},mn=(c,u,h,p,v,x,A,y,_)=>{const b=u.el=c?c.el:o(""),T=u.anchor=c?c.anchor:o("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:L}=u;L&&(y=y?y.concat(L):L),c==null?(r(b,h,p),r(T,h,p),xt(u.children,h,T,v,x,A,y,_)):P>0&&P&64&&N&&c.dynamicChildren?(jt(c.dynamicChildren,N,h,v,x,A,y),(u.key!=null||v&&u===v.subTree)&&Ss(c,u,!0)):K(c,u,h,T,v,x,A,y,_)},hn=(c,u,h,p,v,x,A,y,_)=>{u.slotScopeIds=y,c==null?u.shapeFlag&512?v.ctx.activate(u,h,p,A,_):hr(u,h,p,v,x,A,_):Na(c,u,_)},hr=(c,u,h,p,v,x,A)=>{const y=c.component=ac(c,p,v);if(bs(c)&&(y.ctx.renderer=be),ic(y),y.asyncDep){if(v&&v.registerDep(y,ct),!c.el){const _=y.subTree=H(Ge);k(null,_,u,h)}return}ct(y,c,u,h,v,x,A)},Na=(c,u,h)=>{const p=u.component=c.component;if(dl(c,u,h))if(p.asyncDep&&!p.asyncResolved){Z(p,u,h);return}else p.next=u,sl(p.update),p.update();else u.el=c.el,p.vnode=u},ct=(c,u,h,p,v,x,A)=>{const y=()=>{if(c.isMounted){let{next:T,bu:P,u:N,parent:L,vnode:z}=c,X=T,W;se(c,!1),T?(T.el=z.el,Z(c,T,A)):T=z,P&&br(P),(W=T.props&&T.props.onVnodeBeforeUpdate)&&Tt(W,L,T,z),se(c,!0);const tt=yr(c),_t=c.subTree;c.subTree=tt,M(_t,tt,m(_t.el),vn(_t),c,v,x),T.el=tt.el,X===null&&ml(c,tt.el),N&&dt(N,v),(W=T.props&&T.props.onVnodeUpdated)&&dt(()=>Tt(W,L,T,z),v)}else{let T;const{el:P,props:N}=u,{bm:L,m:z,parent:X}=c,W=Fn(u);if(se(c,!1),L&&br(L),!W&&(T=N&&N.onVnodeBeforeMount)&&Tt(T,X,u),se(c,!0),P&&vr){const tt=()=>{c.subTree=yr(c),vr(P,c.subTree,c,v,null)};W?u.type.__asyncLoader().then(()=>!c.isUnmounted&&tt()):tt()}else{const tt=c.subTree=yr(c);M(null,tt,h,p,c,v,x),u.el=tt.el}if(z&&dt(z,v),!W&&(T=N&&N.onVnodeMounted)){const tt=u;dt(()=>Tt(T,X,tt),v)}(u.shapeFlag&256||X&&Fn(X.vnode)&&X.vnode.shapeFlag&256)&&c.a&&dt(c.a,v),c.isMounted=!0,u=h=p=null}},_=c.effect=new sa(y,()=>ma(b),c.scope),b=c.update=()=>_.run();b.id=c.uid,se(c,!0),b()},Z=(c,u,h)=>{u.component=c;const p=c.vnode.props;c.vnode=u,c.next=null,Bl(c,u.props,p,h),Wl(c,u.children,h),Re(),Ka(),Le()},K=(c,u,h,p,v,x,A,y,_=!1)=>{const b=c&&c.children,T=c?c.shapeFlag:0,P=u.children,{patchFlag:N,shapeFlag:L}=u;if(N>0){if(N&128){pn(b,P,h,p,v,x,A,y,_);return}else if(N&256){re(b,P,h,p,v,x,A,y,_);return}}L&8?(T&16&&$t(b,v,x),P!==b&&d(h,P)):T&16?L&16?pn(b,P,h,p,v,x,A,y,_):$t(b,v,x,!0):(T&8&&d(h,""),L&16&&xt(P,h,p,v,x,A,y,_))},re=(c,u,h,p,v,x,A,y,_)=>{c=c||Oe,u=u||Oe;const b=c.length,T=u.length,P=Math.min(b,T);let N;for(N=0;N<P;N++){const L=u[N]=_?Jt(u[N]):Mt(u[N]);M(c[N],L,h,null,v,x,A,y,_)}b>T?$t(c,v,x,!0,!1,P):xt(u,h,p,v,x,A,y,_,P)},pn=(c,u,h,p,v,x,A,y,_)=>{let b=0;const T=u.length;let P=c.length-1,N=T-1;for(;b<=P&&b<=N;){const L=c[b],z=u[b]=_?Jt(u[b]):Mt(u[b]);if(Ue(L,z))M(L,z,h,null,v,x,A,y,_);else break;b++}for(;b<=P&&b<=N;){const L=c[P],z=u[N]=_?Jt(u[N]):Mt(u[N]);if(Ue(L,z))M(L,z,h,null,v,x,A,y,_);else break;P--,N--}if(b>P){if(b<=N){const L=N+1,z=L<T?u[L].el:p;for(;b<=N;)M(null,u[b]=_?Jt(u[b]):Mt(u[b]),h,z,v,x,A,y,_),b++}}else if(b>N)for(;b<=P;)St(c[b],v,x,!0),b++;else{const L=b,z=b,X=new Map;for(b=z;b<=N;b++){const ht=u[b]=_?Jt(u[b]):Mt(u[b]);ht.key!=null&&X.set(ht.key,b)}let W,tt=0;const _t=N-z+1;let ye=!1,Ra=0;const De=new Array(_t);for(b=0;b<_t;b++)De[b]=0;for(b=L;b<=P;b++){const ht=c[b];if(tt>=_t){St(ht,v,x,!0);continue}let It;if(ht.key!=null)It=X.get(ht.key);else for(W=z;W<=N;W++)if(De[W-z]===0&&Ue(ht,u[W])){It=W;break}It===void 0?St(ht,v,x,!0):(De[It-z]=b+1,It>=Ra?Ra=It:ye=!0,M(ht,u[It],h,null,v,x,A,y,_),tt++)}const La=ye?Jl(De):Oe;for(W=La.length-1,b=_t-1;b>=0;b--){const ht=z+b,It=u[ht],ja=ht+1<T?u[ht+1].el:p;De[b]===0?M(null,It,h,ja,v,x,A,y,_):ye&&(W<0||b!==La[W]?ae(It,h,ja,2):W--)}}},ae=(c,u,h,p,v=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=c;if(b&6){ae(c.component.subTree,u,h,p);return}if(b&128){c.suspense.move(u,h,p);return}if(b&64){A.move(c,u,h,be);return}if(A===yt){r(x,u,h);for(let P=0;P<_.length;P++)ae(_[P],u,h,p);r(c.anchor,u,h);return}if(A===Ln){R(c,u,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(x),r(x,u,h),dt(()=>y.enter(x),v);else{const{leave:P,delayLeave:N,afterLeave:L}=y,z=()=>r(x,u,h),X=()=>{P(x,()=>{z(),L&&L()})};N?N(x,z,X):X()}else r(x,u,h)},St=(c,u,h,p=!1,v=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:N}=c;if(y!=null&&$r(y,null,h,c,!0),T&256){u.ctx.deactivate(c);return}const L=T&1&&N,z=!Fn(c);let X;if(z&&(X=A&&A.onVnodeBeforeUnmount)&&Tt(X,u,c),T&6)mo(c.component,h,p);else{if(T&128){c.suspense.unmount(h,p);return}L&&ie(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,h,v,be,p):b&&(x!==yt||P>0&&P&64)?$t(b,u,h,!1,!0):(x===yt&&P&384||!v&&T&16)&&$t(_,u,h),p&&Ma(c)}(z&&(X=A&&A.onVnodeUnmounted)||L)&&dt(()=>{X&&Tt(X,u,c),L&&ie(c,null,u,"unmounted")},h)},Ma=c=>{const{type:u,el:h,anchor:p,transition:v}=c;if(u===yt){uo(h,p);return}if(u===Ln){I(c);return}const x=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:y}=v,_=()=>A(h,x);y?y(c.el,x,_):_()}else x()},uo=(c,u)=>{let h;for(;c!==u;)h=g(c),a(c),c=h;a(u)},mo=(c,u,h)=>{const{bum:p,scope:v,update:x,subTree:A,um:y}=c;p&&br(p),v.stop(),x&&(x.active=!1,St(A,c,u,h)),y&&dt(y,u),dt(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$t=(c,u,h,p=!1,v=!1,x=0)=>{for(let A=x;A<c.length;A++)St(c[A],u,h,p,v)},vn=c=>c.shapeFlag&6?vn(c.component.subTree):c.shapeFlag&128?c.suspense.next():g(c.anchor||c.el),Fa=(c,u,h)=>{c==null?u._vnode&&St(u._vnode,null,null,!0):M(u._vnode||null,c,u,null,null,null,h),Ka(),ds(),u._vnode=c},be={p:M,um:St,m:ae,r:Ma,mt:hr,mc:xt,pc:K,pbc:jt,n:vn,o:t};let pr,vr;return e&&([pr,vr]=e(be)),{render:Fa,hydrate:pr,createApp:zl(Fa,pr)}}function se({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Vl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ss(t,e,n=!1){const r=t.children,a=e.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Jt(a[i]),o.el=s.el),n||Ss(s,o)),o.type===lr&&(o.el=s.el)}}function Jl(t){const e=t.slice(),n=[0];let r,a,i,s,o;const l=t.length;for(r=0;r<l;r++){const f=t[r];if(f!==0){if(a=n[n.length-1],t[a]<f){e[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,t[n[o]]<f?i=o+1:s=o;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=e[s];return n}const ql=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),lr=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Ln=Symbol.for("v-stc"),Xe=[];let Ot=null;function pt(t=!1){Xe.push(Ot=t?null:[])}function Ql(){Xe.pop(),Ot=Xe[Xe.length-1]||null}let tn=1;function ri(t){tn+=t}function Zl(t){return t.dynamicChildren=tn>0?Ot||Oe:null,Ql(),tn>0&&Ot&&Ot.push(t),t}function vt(t,e,n,r,a,i){return Zl(C(t,e,n,r,a,i,!0))}function zr(t){return t?t.__v_isVNode===!0:!1}function Ue(t,e){return t.type===e.type&&t.key===e.key}const cr="__vInternal",Is=({key:t})=>t??null,jn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||lt(t)||j(t)?{i:At,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,a=null,i=t===yt?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Is(e),ref:e&&jn(e),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:At};return o?(va(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=et(n)?8:16),tn>0&&!s&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const H=Gl;function Gl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===hl)&&(t=Ge),zr(t)){const o=Te(t,e,!0);return n&&va(o,n),tn>0&&!i&&Ot&&(o.shapeFlag&6?Ot[Ot.indexOf(t)]=o:Ot.push(o)),o.patchFlag|=-2,o}if(fc(t)&&(t=t.__vccOpts),e){e=tc(e);let{class:o,style:l}=e;o&&!et(o)&&(e.class=aa(o)),Q(l)&&(is(l)&&!F(l)&&(l=at({},l)),e.style=ra(l))}const s=et(t)?1:vl(t)?128:ql(t)?64:Q(t)?4:j(t)?2:0;return C(t,e,n,r,a,s,i,!0)}function tc(t){return t?is(t)||cr in t?at({},t):t:null}function Te(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=t,o=e?ec(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Is(o),ref:e&&e.ref?n&&a?F(a)?a.concat(jn(e)):[a,jn(e)]:jn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Te(t.ssContent),ssFallback:t.ssFallback&&Te(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function fe(t=" ",e=0){return H(lr,null,t,e)}function je(t,e){const n=H(Ln,null,t);return n.staticCount=e,n}function Mt(t){return t==null||typeof t=="boolean"?H(Ge):F(t)?H(yt,null,t.slice()):typeof t=="object"?Jt(t):H(lr,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Te(t)}function va(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),va(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(cr in e)?e._ctx=At:a===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[fe(e)]):n=8);t.children=e,t.shapeFlag|=n}function ec(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=aa([e.class,r.class]));else if(a==="style")e.style=ra([e.style,r.style]);else if(qn(a)){const i=e[a],s=r[a];s&&i!==s&&!(F(i)&&i.includes(s))&&(e[a]=i?[].concat(i,s):s)}else a!==""&&(e[a]=r[a])}return e}function Tt(t,e,n,r=null){Pt(t,e,7,[n,r])}const nc=ks();let rc=0;function ac(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||nc,i={uid:rc++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Os(r,a),emitsOptions:hs(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=cl.bind(null,i),t.ce&&t.ce(i),i}let rt=null,ga,xe,ai="__VUE_INSTANCE_SETTERS__";(xe=Pr()[ai])||(xe=Pr()[ai]=[]),xe.push(t=>rt=t),ga=t=>{xe.length>1?xe.forEach(e=>e(t)):xe[0](t)};const Ne=t=>{ga(t),t.scope.on()},he=()=>{rt&&rt.scope.off(),ga(null)};function Ts(t){return t.vnode.shapeFlag&4}let en=!1;function ic(t,e=!1){en=e;const{props:n,children:r}=t.vnode,a=Ts(t);Ul(t,n,a,e),Yl(t,r);const i=a?sc(t,e):void 0;return en=!1,i}function sc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ss(new Proxy(t.ctx,Nl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?lc(t):null;Ne(t),Re();const i=Qt(r,t,0,[t.props,a]);if(Le(),he(),Hi(i)){if(i.then(he,he),e)return i.then(s=>{ii(t,s,e)}).catch(s=>{nr(s,t,0)});t.asyncDep=i}else ii(t,i,e)}else Ns(t,e)}function ii(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=cs(e)),Ns(t,n)}let si;function Ns(t,e,n){const r=t.type;if(!t.render){if(!e&&si&&!r.render){const a=r.template||ha(t).template;if(a){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:l}=r,f=at(at({isCustomElement:i,delimiters:o},s),l);r.render=si(a,f)}}t.render=r.render||Ct}{Ne(t),Re();try{Ml(t)}finally{Le(),he()}}}function oc(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function lc(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return oc(t)},slots:t.slots,emit:t.emit,expose:e}}function ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cs(ss(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ke)return Ke[n](t)},has(e,n){return n in e||n in Ke}}))}function cc(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function fc(t){return j(t)&&"__vccOpts"in t}const oe=(t,e)=>nl(t,e,en);function uc(t,e,n){const r=arguments.length;return r===2?Q(e)&&!F(e)?zr(e)?H(t,null,[e]):H(t,e):H(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zr(n)&&(n=[n]),H(t,e,n))}const dc=Symbol.for("v-scx"),mc=()=>Rn(dc),hc="3.3.8",pc="http://www.w3.org/2000/svg",ce=typeof document<"u"?document:null,oi=ce&&ce.createElement("template"),vc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?ce.createElementNS(pc,t):ce.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>ce.createTextNode(t),createComment:t=>ce.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ce.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const s=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{oi.innerHTML=r?`<svg>${t}</svg>`:t;const o=oi.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gc=Symbol("_vtc");function bc(t,e,n){const r=t[gc];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yc=Symbol("_vod");function xc(t,e,n){const r=t.style,a=et(n);if(n&&!a){if(e&&!et(e))for(const i in e)n[i]==null&&Dr(r,i,"");for(const i in n)Dr(r,i,n[i])}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),yc in t&&(r.display=i)}}const li=/\s*!important$/;function Dr(t,e,n){if(F(n))n.forEach(r=>Dr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_c(t,e);li.test(n)?t.setProperty(Fe(r),n.replace(li,""),"important"):t[r]=n}}const ci=["Webkit","Moz","ms"],_r={};function _c(t,e){const n=_r[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return _r[e]=r;r=tr(r);for(let a=0;a<ci.length;a++){const i=ci[a]+r;if(i in t)return _r[e]=i}return e}const fi="http://www.w3.org/1999/xlink";function wc(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fi,e.slice(6,e.length)):t.setAttributeNS(fi,e,n);else{const i=Eo(e);n==null||i&&!Ki(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function kc(t,e,n,r,a,i,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,a,i),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const f=o==="OPTION"?t.getAttribute("value"):t.value,d=n??"";f!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=Ki(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ac(t,e,n,r){t.addEventListener(e,n,r)}function Oc(t,e,n,r){t.removeEventListener(e,n,r)}const ui=Symbol("_vei");function Ec(t,e,n,r,a=null){const i=t[ui]||(t[ui]={}),s=i[e];if(r&&s)s.value=r;else{const[o,l]=Cc(e);if(r){const f=i[e]=Ic(r,a);Ac(t,o,f,l)}else s&&(Oc(t,o,s,l),i[e]=void 0)}}const di=/(?:Once|Passive|Capture)$/;function Cc(t){let e;if(di.test(t)){e={};let r;for(;r=t.match(di);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fe(t.slice(2)),e]}let wr=0;const Pc=Promise.resolve(),Sc=()=>wr||(Pc.then(()=>wr=0),wr=Date.now());function Ic(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(Tc(r,n.value),e,5,[r])};return n.value=t,n.attached=Sc(),n}function Tc(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const mi=/^on[a-z]/,Nc=(t,e,n,r,a=!1,i,s,o,l)=>{e==="class"?bc(t,r,a):e==="style"?xc(t,n,r):qn(e)?ta(e)||Ec(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mc(t,e,r,a))?kc(t,e,r,i,s,o,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wc(t,e,r,a))};function Mc(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&mi.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mi.test(e)&&et(n)?!1:e in t}const Fc=at({patchProp:Nc},vc);let hi;function Rc(){return hi||(hi=Kl(Fc))}const Lc=(...t)=>{const e=Rc().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=jc(r);if(!a)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},e};function jc(t){return et(t)?document.querySelector(t):t}function pi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pi(Object(n),!0).forEach(function(r){nt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Kn(t){"@babel/helpers - typeof";return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kn(t)}function $c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function zc(t,e,n){return e&&vi(t.prototype,e),n&&vi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ya(t,e){return Uc(t)||Hc(t,e)||Ms(t,e)||Wc()}function ln(t){return Dc(t)||Bc(t)||Ms(t)||Yc()}function Dc(t){if(Array.isArray(t))return Ur(t)}function Uc(t){if(Array.isArray(t))return t}function Bc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Hc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(t);!(a=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Ms(t,e){if(t){if(typeof t=="string")return Ur(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ur(t,e)}}function Ur(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Yc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gi=function(){},xa={},Fs={},Rs=null,Ls={mark:gi,measure:gi};try{typeof window<"u"&&(xa=window),typeof document<"u"&&(Fs=document),typeof MutationObserver<"u"&&(Rs=MutationObserver),typeof performance<"u"&&(Ls=performance)}catch{}var Kc=xa.navigator||{},bi=Kc.userAgent,yi=bi===void 0?"":bi,Gt=xa,J=Fs,xi=Rs,kn=Ls;Gt.document;var Kt=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",js=~yi.indexOf("MSIE")||~yi.indexOf("Trident/"),An,On,En,Cn,Pn,Bt="___FONT_AWESOME___",Br=16,$s="fa",zs="svg-inline--fa",ve="data-fa-i2svg",Hr="data-fa-pseudo-element",Xc="data-fa-pseudo-element-pending",_a="data-prefix",wa="data-icon",_i="fontawesome-i2svg",Vc="async",Jc=["HTML","HEAD","STYLE","SCRIPT"],Ds=function(){try{return!0}catch{return!1}}(),V="classic",G="sharp",ka=[V,G];function cn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[V]}})}var nn=cn((An={},nt(An,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),nt(An,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),An)),rn=cn((On={},nt(On,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),nt(On,G,{solid:"fass",regular:"fasr",light:"fasl"}),On)),an=cn((En={},nt(En,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),nt(En,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),En)),qc=cn((Cn={},nt(Cn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),nt(Cn,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Cn)),Qc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Us="fa-layers-text",Zc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Gc=cn((Pn={},nt(Pn,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),nt(Pn,G,{900:"fass",400:"fasr",300:"fasl"}),Pn)),Bs=[1,2,3,4,5,6,7,8,9,10],tf=Bs.concat([11,12,13,14,15,16,17,18,19,20]),ef=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(rn[V]).map(sn.add.bind(sn));Object.keys(rn[G]).map(sn.add.bind(sn));var nf=[].concat(ka,ln(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(Bs.map(function(t){return"".concat(t,"x")})).concat(tf.map(function(t){return"w-".concat(t)})),Ve=Gt.FontAwesomeConfig||{};function rf(t){var e=J.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function af(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(J&&typeof J.querySelector=="function"){var sf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sf.forEach(function(t){var e=ya(t,2),n=e[0],r=e[1],a=af(rf(n));a!=null&&(Ve[r]=a)})}var Hs={styleDefault:"solid",familyDefault:"classic",cssPrefix:$s,replacementClass:zs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ve.familyPrefix&&(Ve.cssPrefix=Ve.familyPrefix);var Me=E(E({},Hs),Ve);Me.autoReplaceSvg||(Me.observeMutations=!1);var S={};Object.keys(Hs).forEach(function(t){Object.defineProperty(S,t,{enumerable:!0,set:function(n){Me[t]=n,Je.forEach(function(r){return r(S)})},get:function(){return Me[t]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(e){Me.cssPrefix=e,Je.forEach(function(n){return n(S)})},get:function(){return Me.cssPrefix}});Gt.FontAwesomeConfig=S;var Je=[];function of(t){return Je.push(t),function(){Je.splice(Je.indexOf(t),1)}}var Vt=Br,Rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lf(t){if(!(!t||!Kt)){var e=J.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return J.head.insertBefore(e,r),t}}var cf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var t=12,e="";t-- >0;)e+=cf[Math.random()*62|0];return e}function $e(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Aa(t){return t.classList?$e(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ys(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ff(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ys(t[n]),'" ')},"").trim()}function fr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oa(t){return t.size!==Rt.size||t.x!==Rt.x||t.y!==Rt.y||t.rotate!==Rt.rotate||t.flipX||t.flipY}function uf(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function df(t){var e=t.transform,n=t.width,r=n===void 0?Br:n,a=t.height,i=a===void 0?Br:a,s=t.startCentered,o=s===void 0?!1:s,l="";return o&&js?l+="translate(".concat(e.x/Vt-r/2,"em, ").concat(e.y/Vt-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Vt,"em), calc(-50% + ").concat(e.y/Vt,"em)) "):l+="translate(".concat(e.x/Vt,"em, ").concat(e.y/Vt,"em) "),l+="scale(".concat(e.size/Vt*(e.flipX?-1:1),", ").concat(e.size/Vt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var mf=`:root, :host {
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
}`;function Ws(){var t=$s,e=zs,n=S.cssPrefix,r=S.replacementClass,a=mf;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var wi=!1;function kr(){S.autoAddCss&&!wi&&(lf(Ws()),wi=!0)}var hf={mixout:function(){return{dom:{css:Ws,insertCss:kr}}},hooks:function(){return{beforeDOMElementCreation:function(){kr()},beforeI2svg:function(){kr()}}}},Ht=Gt||{};Ht[Bt]||(Ht[Bt]={});Ht[Bt].styles||(Ht[Bt].styles={});Ht[Bt].hooks||(Ht[Bt].hooks={});Ht[Bt].shims||(Ht[Bt].shims=[]);var Et=Ht[Bt],Ks=[],pf=function t(){J.removeEventListener("DOMContentLoaded",t),Xn=1,Ks.map(function(e){return e()})},Xn=!1;Kt&&(Xn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Xn||J.addEventListener("DOMContentLoaded",pf));function vf(t){Kt&&(Xn?setTimeout(t,0):Ks.push(t))}function fn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Ys(t):"<".concat(e," ").concat(ff(r),">").concat(i.map(fn).join(""),"</").concat(e,">")}function ki(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gf=function(e,n){return function(r,a,i,s){return e.call(n,r,a,i,s)}},Ar=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=a!==void 0?gf(n,a):n,l,f,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<s;l++)f=i[l],d=o(d,e[f],f,e);return d};function bf(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Yr(t){var e=bf(t);return e.length===1?e[0].toString(16):null}function yf(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ai(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Wr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ai(e);typeof Et.hooks.addPack=="function"&&!a?Et.hooks.addPack(t,Ai(e)):Et.styles[t]=E(E({},Et.styles[t]||{}),i),t==="fas"&&Wr("fa",e)}var Sn,In,Tn,ke=Et.styles,xf=Et.shims,_f=(Sn={},nt(Sn,V,Object.values(an[V])),nt(Sn,G,Object.values(an[G])),Sn),Ea=null,Xs={},Vs={},Js={},qs={},Qs={},wf=(In={},nt(In,V,Object.keys(nn[V])),nt(In,G,Object.keys(nn[G])),In);function kf(t){return~nf.indexOf(t)}function Af(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!kf(a)?a:null}var Zs=function(){var e=function(i){return Ar(ke,function(s,o,l){return s[l]=Ar(o,i,{}),s},{})};Xs=e(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Vs=e(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Qs=e(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in ke||S.autoFetchSvg,r=Ar(xf,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Js=r.names,qs=r.unicodes,Ea=ur(S.styleDefault,{family:S.familyDefault})};of(function(t){Ea=ur(t.styleDefault,{family:S.familyDefault})});Zs();function Ca(t,e){return(Xs[t]||{})[e]}function Of(t,e){return(Vs[t]||{})[e]}function de(t,e){return(Qs[t]||{})[e]}function Gs(t){return Js[t]||{prefix:null,iconName:null}}function Ef(t){var e=qs[t],n=Ca("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function te(){return Ea}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function ur(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?V:n,a=nn[r][t],i=rn[r][t]||rn[r][a],s=t in Et.styles?t:null;return i||s||null}var Oi=(Tn={},nt(Tn,V,Object.keys(an[V])),nt(Tn,G,Object.keys(an[G])),Tn);function dr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},nt(e,V,"".concat(S.cssPrefix,"-").concat(V)),nt(e,G,"".concat(S.cssPrefix,"-").concat(G)),e),s=null,o=V;(t.includes(i[V])||t.some(function(f){return Oi[V].includes(f)}))&&(o=V),(t.includes(i[G])||t.some(function(f){return Oi[G].includes(f)}))&&(o=G);var l=t.reduce(function(f,d){var m=Af(S.cssPrefix,d);if(ke[d]?(d=_f[o].includes(d)?qc[o][d]:d,s=d,f.prefix=d):wf[o].indexOf(d)>-1?(s=d,f.prefix=ur(d,{family:o})):m?f.iconName=m:d!==S.replacementClass&&d!==i[V]&&d!==i[G]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var g=s==="fa"?Gs(f.iconName):{},w=de(f.prefix,f.iconName);g.prefix&&(s=null),f.iconName=g.iconName||w||f.iconName,f.prefix=g.prefix||f.prefix,f.prefix==="far"&&!ke.far&&ke.fas&&!S.autoFetchSvg&&(f.prefix="fas")}return f},Pa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===G&&(ke.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=de(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=te()||"fas"),l}var Cf=function(){function t(){$c(this,t),this.definitions={}}return zc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=E(E({},n.definitions[o]||{}),s[o]),Wr(o,s[o]);var l=an[V][o];l&&Wr(l,s[o]),Zs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,f=s.icon,d=f[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=f)}),n[o][l]=f}),n}}]),t}(),Ei=[],Ae={},Se={},Pf=Object.keys(Se);function Sf(t,e){var n=e.mixoutsTo;return Ei=t,Ae={},Object.keys(Se).forEach(function(r){Pf.indexOf(r)===-1&&delete Se[r]}),Ei.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Kn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Ae[s]||(Ae[s]=[]),Ae[s].push(i[s])})}r.provides&&r.provides(Se)}),n}function Kr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ae[t]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function ge(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Ae[t]||[];a.forEach(function(i){i.apply(null,n)})}function Yt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Se[t]?Se[t].apply(null,e):void 0}function Xr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||te();if(e)return e=de(n,e)||e,ki(to.definitions,n,e)||ki(Et.styles,n,e)}var to=new Cf,If=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,ge("noAuto")},Tf={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kt?(ge("beforeI2svg",e),Yt("pseudoElements2svg",e),Yt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,vf(function(){Mf({autoReplaceSvgRoot:n}),ge("watch",e)})}},Nf={icon:function(e){if(e===null)return null;if(Kn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:de(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ur(e[0]);return{prefix:r,iconName:de(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(S.cssPrefix,"-"))>-1||e.match(Qc))){var a=dr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||te(),iconName:de(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=te();return{prefix:i,iconName:de(i,e)||e}}}},gt={noAuto:If,config:S,dom:Tf,parse:Nf,library:to,findIconDefinition:Xr,toHtml:fn},Mf=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Et.styles).length>0||S.autoFetchSvg)&&Kt&&S.autoReplaceSvg&&gt.dom.i2svg({node:r})};function mr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return fn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Kt){var r=J.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ff(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,s=t.transform;if(Oa(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=fr(E(E({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Rf(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,s=i===!0?"".concat(e,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:s}),children:r}]}]}function Sa(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,s=t.transform,o=t.symbol,l=t.title,f=t.maskId,d=t.titleId,m=t.extra,g=t.watchable,w=g===void 0?!1:g,$=r.found?r:n,M=$.width,D=$.height,k=a==="fak",O=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(bt){return m.classes.indexOf(bt)===-1}).filter(function(bt){return bt!==""||!!bt}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(D)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/D*16*.0625,"em")}:{};w&&(R.attributes[ve]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||on())},children:[l]}),delete R.attributes.title);var Y=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:E(E({},I),m.styles)}),it=r.found&&n.found?Yt("generateAbstractMask",Y)||{children:[],attributes:{}}:Yt("generateAbstractIcon",Y)||{children:[],attributes:{}},st=it.children,xt=it.attributes;return Y.children=st,Y.attributes=xt,o?Rf(Y):Ff(Y)}function Ci(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,s=t.extra,o=t.watchable,l=o===void 0?!1:o,f=E(E(E({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[ve]="");var d=E({},s.styles);Oa(a)&&(d.transform=df({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=fr(d);m.length>0&&(f.style=m);var g=[];return g.push({tag:"span",attributes:f,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Lf(t){var e=t.content,n=t.title,r=t.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=fr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Or=Et.styles;function Vr(t){var e=t[0],n=t[1],r=t.slice(4),a=ya(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(ue.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ue.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(ue.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var jf={found:!1,width:512,height:512};function $f(t,e){!Ds&&!S.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jr(t,e){var n=e;return e==="fa"&&S.styleDefault!==null&&(e=te()),new Promise(function(r,a){if(Yt("missingIconAbstract"),n==="fa"){var i=Gs(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Or[e]&&Or[e][t]){var s=Or[e][t];return r(Vr(s))}$f(t,e),r(E(E({},jf),{},{icon:S.showMissingIcons&&t?Yt("missingIconAbstract")||{}:{}}))})}var Pi=function(){},qr=S.measurePerformance&&kn&&kn.mark&&kn.measure?kn:{mark:Pi,measure:Pi},Ye='FA "6.4.2"',zf=function(e){return qr.mark("".concat(Ye," ").concat(e," begins")),function(){return eo(e)}},eo=function(e){qr.mark("".concat(Ye," ").concat(e," ends")),qr.measure("".concat(Ye," ").concat(e),"".concat(Ye," ").concat(e," begins"),"".concat(Ye," ").concat(e," ends"))},Ia={begin:zf,end:eo},$n=function(){};function Si(t){var e=t.getAttribute?t.getAttribute(ve):null;return typeof e=="string"}function Df(t){var e=t.getAttribute?t.getAttribute(_a):null,n=t.getAttribute?t.getAttribute(wa):null;return e&&n}function Uf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(S.replacementClass)}function Bf(){if(S.autoReplaceSvg===!0)return zn.replace;var t=zn[S.autoReplaceSvg];return t||zn.replace}function Hf(t){return J.createElementNS("http://www.w3.org/2000/svg",t)}function Yf(t){return J.createElement(t)}function no(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Hf:Yf:n;if(typeof t=="string")return J.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])});var i=t.children||[];return i.forEach(function(s){a.appendChild(no(s,{ceFn:r}))}),a}function Wf(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(no(a),n)}),n.getAttribute(ve)===null&&S.keepOriginalSource){var r=J.createComment(Wf(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Aa(n).indexOf(S.replacementClass))return zn.replace(e);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===S.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return fn(o)}).join(`
`);n.setAttribute(ve,""),n.innerHTML=s}};function Ii(t){t()}function ro(t,e){var n=typeof e=="function"?e:$n;if(t.length===0)n();else{var r=Ii;S.mutateApproach===Vc&&(r=Gt.requestAnimationFrame||Ii),r(function(){var a=Bf(),i=Ia.begin("mutate");t.map(a),i(),n()})}}var Ta=!1;function ao(){Ta=!0}function Qr(){Ta=!1}var Vn=null;function Ti(t){if(xi&&S.observeMutations){var e=t.treeCallback,n=e===void 0?$n:e,r=t.nodeCallback,a=r===void 0?$n:r,i=t.pseudoElementsCallback,s=i===void 0?$n:i,o=t.observeMutationsRoot,l=o===void 0?J:o;Vn=new xi(function(f){if(!Ta){var d=te();$e(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Si(m.addedNodes[0])&&(S.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Si(m.target)&&~ef.indexOf(m.attributeName))if(m.attributeName==="class"&&Df(m.target)){var g=dr(Aa(m.target)),w=g.prefix,$=g.iconName;m.target.setAttribute(_a,w||d),$&&m.target.setAttribute(wa,$)}else Uf(m.target)&&a(m.target)})}}),Kt&&Vn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kf(){Vn&&Vn.disconnect()}function Xf(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Vf(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=dr(Aa(t));return a.prefix||(a.prefix=te()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Of(a.prefix,t.innerText)||Ca(a.prefix,Yr(t.innerText))),!a.iconName&&S.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Jf(t){var e=$e(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return S.autoA11y&&(n?e["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||on()):(e["aria-hidden"]="true",e.focusable="false")),e}function qf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ni(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vf(t),r=n.iconName,a=n.prefix,i=n.rest,s=Jf(t),o=Kr("parseNodeAttributes",{},t),l=e.styleParser?Xf(t):[];return E({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Qf=Et.styles;function io(t){var e=S.autoReplaceSvg==="nest"?Ni(t,{styleParser:!1}):Ni(t);return~e.extra.classes.indexOf(Us)?Yt("generateLayersText",t,e):Yt("generateSvgReplacementMutation",t,e)}var ee=new Set;ka.map(function(t){ee.add("fa-".concat(t))});Object.keys(nn[V]).map(ee.add.bind(ee));Object.keys(nn[G]).map(ee.add.bind(ee));ee=ln(ee);function Mi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kt)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(_i,"-").concat(m))},a=function(m){return n.remove("".concat(_i,"-").concat(m))},i=S.autoFetchSvg?ee:ka.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Qf));i.includes("fa")||i.push("fa");var s=[".".concat(Us,":not([").concat(ve,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ve,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=$e(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ia.begin("onTree"),f=o.reduce(function(d,m){try{var g=io(m);g&&d.push(g)}catch(w){Ds||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(g){ro(g,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(g){l(),m(g)})})}function Zf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;io(t).then(function(n){n&&ro([n],e)})}function Gf(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Xr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Xr(a||{})),t(r,E(E({},n),{},{mask:a}))}}var tu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Rt:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,d=f===void 0?null:f,m=n.title,g=m===void 0?null:m,w=n.titleId,$=w===void 0?null:w,M=n.classes,D=M===void 0?[]:M,k=n.attributes,O=k===void 0?{}:k,R=n.styles,I=R===void 0?{}:R;if(e){var Y=e.prefix,it=e.iconName,st=e.icon;return mr(E({type:"icon"},e),function(){return ge("beforeDOMElementCreation",{iconDefinition:e,params:n}),S.autoA11y&&(g?O["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat($||on()):(O["aria-hidden"]="true",O.focusable="false")),Sa({icons:{main:Vr(st),mask:l?Vr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:it,transform:E(E({},Rt),a),symbol:s,title:g,maskId:d,titleId:$,extra:{attributes:O,styles:I,classes:D}})})}},eu={mixout:function(){return{icon:Gf(tu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Mi,n.nodeCallback=Zf,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,s=i===void 0?function(){}:i;return Mi(a,s)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(w,$){Promise.all([Jr(a,o),d.iconName?Jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var D=ya(M,2),k=D[0],O=D[1];w([n,Sa({icons:{main:k,mask:O},prefix:o,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:s,extra:g,watchable:!0})])}).catch($)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=fr(o);l.length>0&&(a.style=l);var f;return Oa(s)&&(f=Yt("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},nu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return mr({type:"layer"},function(){ge("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(ln(i)).join(" ")},children:s}]})}}}},ru={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return mr({type:"counter",content:n},function(){return ge("beforeDOMElementCreation",{content:n,params:r}),Lf({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(ln(o))}})})}}}},au={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Rt:a,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,w=g===void 0?{}:g;return mr({type:"text",content:n},function(){return ge("beforeDOMElementCreation",{content:n,params:r}),Ci({content:n,transform:E(E({},Rt),i),title:o,extra:{attributes:m,styles:w,classes:["".concat(S.cssPrefix,"-layers-text")].concat(ln(f))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(js){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/f,l=d.height/f}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ci({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},iu=new RegExp('"',"ug"),Fi=[1105920,1112319];function su(t){var e=t.replace(iu,""),n=yf(e,0),r=n>=Fi[0]&&n<=Fi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Yr(a?e[0]:e),isSecondary:r||a}}function Ri(t,e){var n="".concat(Xc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=$e(t.children),s=i.filter(function(st){return st.getAttribute(Hr)===e})[0],o=Gt.getComputedStyle(t,e),l=o.getPropertyValue("font-family").match(Zc),f=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?G:V,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?rn[g][l[2].toLowerCase()]:Gc[g][f],$=su(m),M=$.value,D=$.isSecondary,k=l[0].startsWith("FontAwesome"),O=Ca(w,M),R=O;if(k){var I=Ef(M);I.iconName&&I.prefix&&(O=I.iconName,w=I.prefix)}if(O&&!D&&(!s||s.getAttribute(_a)!==w||s.getAttribute(wa)!==R)){t.setAttribute(n,R),s&&t.removeChild(s);var Y=qf(),it=Y.extra;it.attributes[Hr]=e,Jr(O,w).then(function(st){var xt=Sa(E(E({},Y),{},{icons:{main:st,mask:Pa()},prefix:w,iconName:R,extra:it,watchable:!0})),bt=J.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=xt.map(function(jt){return fn(jt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ou(t){return Promise.all([Ri(t,"::before"),Ri(t,"::after")])}function lu(t){return t.parentNode!==document.head&&!~Jc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Hr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Li(t){if(Kt)return new Promise(function(e,n){var r=$e(t.querySelectorAll("*")).filter(lu).map(ou),a=Ia.begin("searchPseudoElements");ao(),Promise.all(r).then(function(){a(),Qr(),e()}).catch(function(){a(),Qr(),n()})})}var cu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Li,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;S.searchPseudoElements&&Li(a)}}},ji=!1,fu={mixout:function(){return{dom:{unwatch:function(){ao(),ji=!0}}}},hooks:function(){return{bootstrap:function(){Ti(Kr("mutationObserverCallbacks",{}))},noAuto:function(){Kf()},watch:function(n){var r=n.observeMutationsRoot;ji?Qr():Ti(Kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$i=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},uu={mixout:function(){return{parse:{transform:function(n){return $i(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=$i(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},g={transform:"translate(".concat(s/2*-1," -256)")},w={outer:o,inner:m,path:g};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},Er={x:0,y:0,width:"100%",height:"100%"};function zi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function du(t){return t.tag==="g"?t.children:[t]}var mu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?dr(a.split(" ").map(function(s){return s.trim()})):Pa();return i.prefix||(i.prefix=te()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,d=i.icon,m=s.width,g=s.icon,w=uf({transform:l,containerWidth:m,iconWidth:f}),$={tag:"rect",attributes:E(E({},Er),{},{fill:"white"})},M=d.children?{children:d.children.map(zi)}:{},D={tag:"g",attributes:E({},w.inner),children:[zi(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},M))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(o||on()),R="clip-".concat(o||on()),I={tag:"mask",attributes:E(E({},Er),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[$,k]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:du(g)},I]};return r.push(Y,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},Er)}),{children:r,attributes:a}}}},hu={provides:function(e){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=E(E({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},vu=[hf,eu,nu,ru,au,cu,fu,uu,mu,hu,pu];Sf(vu,{mixoutsTo:gt});gt.noAuto;gt.config;var gu=gt.library;gt.dom;var Zr=gt.parse;gt.findIconDefinition;gt.toHtml;var bu=gt.icon;gt.layer;gt.text;gt.counter;function Di(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Dt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Di(Object(n),!0).forEach(function(r){ut(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Di(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jn(t){"@babel/helpers - typeof";return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jn(t)}function ut(t,e,n){return e=wu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yu(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function xu(t,e){if(t==null)return{};var n=yu(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _u(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wu(t){var e=_u(t,"string");return typeof e=="symbol"?e:String(e)}var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},so={exports:{}};(function(t){(function(e){var n=function(k,O,R){if(!f(O)||m(O)||g(O)||w(O)||l(O))return O;var I,Y=0,it=0;if(d(O))for(I=[],it=O.length;Y<it;Y++)I.push(n(k,O[Y],R));else{I={};for(var st in O)Object.prototype.hasOwnProperty.call(O,st)&&(I[k(st,R)]=n(k,O[st],R))}return I},r=function(k,O){O=O||{};var R=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(R)},a=function(k){return $(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(k,O){return r(k,O).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},f=function(k){return k===Object(k)},d=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},g=function(k){return o.call(k)=="[object RegExp]"},w=function(k){return o.call(k)=="[object Boolean]"},$=function(k){return k=k-0,k===k},M=function(k,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?k:function(I,Y){return R(I,k,Y)}},D={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,O){return n(M(a,O),k)},decamelizeKeys:function(k,O){return n(M(s,O),k,O)},pascalizeKeys:function(k,O){return n(M(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(ku)})(so);var Au=so.exports,Ou=["class","style"];function Eu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Au.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Cu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function oo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return oo(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var d=t.attributes[f];switch(f){case"class":l.class=Cu(d);break;case"style":l.style=Eu(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=xu(n,Ou);return uc(t.tag,Dt(Dt(Dt({},e),{},{class:a.class,style:Dt(Dt({},a.style),s)},a.attrs),o),r)}var lo=!1;try{lo=!0}catch{}function Pu(){if(!lo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Cr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ut({},t,e):{}}function Su(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ut(e,"fa-".concat(t.size),t.size!==null),ut(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ut(e,"fa-pull-".concat(t.pull),t.pull!==null),ut(e,"fa-swap-opacity",t.swapOpacity),ut(e,"fa-bounce",t.bounce),ut(e,"fa-shake",t.shake),ut(e,"fa-beat",t.beat),ut(e,"fa-fade",t.fade),ut(e,"fa-beat-fade",t.beatFade),ut(e,"fa-flash",t.flash),ut(e,"fa-spin-pulse",t.spinPulse),ut(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ui(t){if(t&&Jn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zr.icon)return Zr.icon(t);if(t===null)return null;if(Jn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Iu=yl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=oe(function(){return Ui(e.icon)}),i=oe(function(){return Cr("classes",Su(e))}),s=oe(function(){return Cr("transform",typeof e.transform=="string"?Zr.transform(e.transform):e.transform)}),o=oe(function(){return Cr("mask",Ui(e.mask))}),l=oe(function(){return bu(a.value,Dt(Dt(Dt(Dt({},i.value),s.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Mn(l,function(d){if(!d)return Pu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var f=oe(function(){return l.value?oo(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Tu={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},Nu={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Mu={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Fu={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]},Ru={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Lu={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const ju="/F2ELegislator/assets/logo-39f3ca48.png",ne=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},$u={},zu={class:"flex items-center justify-between px-8 w-full fixed bg-white"},Du=je('<div class="flex"><img src="'+ju+'" alt="選舉章" class="pr-6"><div class="flex items-center my-2 bg-mainBlack rounded-3xl text-white"><h3 class="px-2">2024 立委</h3><div class="w-6 h-6 rounded-full bg-mainYellow text-center text-mainBlack font-bold">3</div><h3 class="px-2">號參選人</h3></div></div><div class="flex"><h4 class="mx-4 cursor-pointer">候選人主張</h4><h4 class="mx-4 cursor-pointer">最新活動</h4><h4 class="mx-4 cursor-pointer">政策議題</h4><h4 class="mx-4 cursor-pointer">民眾服務信箱</h4><h4 class="mx-4 cursor-pointer">小額捐款</h4></div>',2),Uu={class:"flex text-green text-2xl"};function Bu(t,e){const n=Hn("font-awesome-icon");return pt(),vt("div",zu,[Du,C("div",Uu,[H(n,{icon:"fa-brands fa-facebook",class:"p-2"}),H(n,{icon:"fa-brands fa-instagram",class:"p-2"}),H(n,{icon:"fa-solid fa-share-nodes",class:"p-2"})])])}const Hu=ne($u,[["render",Bu]]),Yu="/F2ELegislator/assets/homebg-012b586a.png",co="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWxSURBVHgBvVuNcds2FH6kbKu+tld2gnKDeIPGEzSeIM4ESSewPYHjCeJMYGeCqhPImYDcgGlsS3epLfY9EVRU8AMJgIC+O54TiALwAXgP708JRUJFlO0RHSX8TIhe1PyXmzN+cu3Vkt8p+fMv/HxeEc2eiO5+5f9TBCQUEEJyn+iUCf7Bk39JI8ATmz0TffyX/zL5kgIhCOF7Jse7eTaWZA9umfzVz0yeRmIU4R0Q1VEy8TdjiHsR5qObHxBd8pdf2X6nbmSyTDXZXCm5Tpq/tn1dfyO6CHnUjVgSvX5kzgse1+V5aJRWH4lMTgy/+577n1v0WXCfpxQTPMhl3yRkIfg55+cafP7OZSxe2Fz1UwwQv6TQEO276Fn1lmitjqVMVn+H2z6QJ2QnB4jPq+5150027xuMJ/O+BvIHjn1BI7C148YjPpr0ANnivkc78+c3+ncqB8VkgpLzooe0/xg9x3i+HFhN3vl34DScUgCo3TbOre+7qekDpQyQZr09JDo+HLgS+JjfgeZeTW0LGZuvpWO+0j6iMZwVmVISaPVubPtQis5p9X3wYJBruT6tOuiR23ntKB886F8x5Fibb2Y43hVSYp0jzRbUGWGP5iRx9GDYDPyst+0FOtYtxKtiEifUFbFsOnS0lQbsHI97T1v5K5ue4M4+pwjwmjs6ymMMBiTHcswpEsQmsB7PsELFcuRlDhaxokhQ8lz17fJGhtlpf6t3wGr/4nCkR8KK7m+tKXsILMctVJTkSm/fa/TSd1TA9h1rCrZABsjC0ZFwgWmX29thvcP7QLCTANEFAZ+cW9D3C4oE0y5Pt608dF8uQ3kfFN6RGALSRxvltQuLaAEcCZbt3ygi0I0jXFNkCKy6imYUUH+868cUETzmJ71NuKYpkN8ayN0YxHQkTFgBHTQRwkiBPOEJekP6qzWzlBf6d4qIfcBBuKYgWvgldNRf2bv6BI5COxLbOFTZjO02yX6kNXAUKAJ24UgAlNr/M7mH8+2WJFJOB8lUGjmAn3a55CntCPtAV8SWY4QOYd6Jfygw+Ap6VQO3sI5/pDtIQcMvFBBVk0YxOeLRHAkThHC53VAH1JxVE3UQky4n8wReUiSsulzKtAaCTYEwxeGi/yGmI0FdhSzJvM51kYW4H5cN2UE3sHbIQLpAOOg2huinFJl9k5HHjAc7qnHsakZdszWL4UgYONxBwmPkSpTUFMevJfL5ZleOBOIgtkD6hAl7348/NEG/HAx2osy9nTgSCeCw4YoCAD7XhcgtCpXqodnYAYEKp2vXAYD1PfwMfMfEUZlIegbJLe/s1Y9aO3Ak8pCOxIEetKM1x+95KEPUo7KdRNVk81AZRIHudRQ//hpIWysuhSlktd5hcd9A0C47sLhWWuMCuJmipI6RMxLTkZg2SbR8u40X/VMn3GwIxA/uMu/sB4PcGncsVkbClAg0pluQ8lr0JKRslRRCjIyEYfHNCtElIVU1iecaPFY5ZCTH9yOOtXciEIVUF1rBSE8O2ToXZUi6D+oMBNN8rBKBS7PGnbfyvDDUV7gE71Fp06NHtLSnpMo+EWgqeRAZMcmtz+6AhXWW40d8It0LaJCMmR55lzyA6q5sHQmVNLsJOR+yrXkkT/iWNimZDVu2JPjWeDFlzytr44L8MdMbJgOOi2hdFUU5MsznhMZgOVB6KHI9puTP1pFQyqmvuHV0tcIGA5Vv7WBnPsSHSpvk39L3QMmyc0mVFSwUWSE77uJamhwJOboWRP0VlMMEh0p5N+TlCIpN3WePIwvJpgBd3vGp3fT6CYAccfZ4zhPb8j5G3XhkZdJNcOXkLgq33M+fPgU3XoRbyO5MDCGdSJCf9lzs/EceOhTxtxQp5EoBiLYIQriFHPXnhvzrAD/tmUnZAoeHrkNmNIMS3kat8kYSyZDsQtLEn3MC+ehaJcwlhyxRzZ/4iZW2/Q8N/qhDLs4VBQAAAABJRU5ErkJggg==",Wu="/F2ELegislator/assets/meow-34c09d2c.png",Ku="/F2ELegislator/assets/logoGreen-d3695462.png",Xu={class:"min-h-screen pt-16"},Vu={class:"absolute h-1/4",style:{"z-index":"-50"}},Ju=C("div",{class:"relative"},[C("img",{src:Yu,alt:"homebg",class:"relative"})],-1),qu={class:"absolute tracking-wider w-full",style:{top:"350%"}},Qu=C("img",{src:co,alt:"選舉章跑馬燈",class:"inline h-10 pb-2"},null,-1),Zu={class:"flex justify-center items-center pt-32"},Gu=je('<img src="'+Wu+'" alt="meow"><div class="flex flex-col items-center tracking-widest"><img src="'+Ku+'" alt="meow"><h4 class="pt-6 text-9xl">台灣的明天</h4><h4 class="pt-6 text-9xl">喵先鋪路</h4><h4 class="mt-12 px-2 border-2 border-black text-2xl font-bold">2024立委3號參選人 少年立委 勤政愛民 愛您！！</h4></div><div class="pl-10"><h6>20</h6><h6>24</h6><h6 class="text-center">|</h6><h6>01</h6><h6 class="text-center">|</h6><h6>13</h6><h6>由</h6><h6>您</h6><h6>選</h6><h6>擇</h6><h6>台</h6><h6>灣</h6><h6>的</h6><h6>未</h6><h6>來</h6></div>',3),td={class:"pl-3"},ed=C("div",{class:"flex items-center justify-center w-11 h-11 rounded-full bg-green text-white font-bold border-2 border-black text-2xl"},"3",-1),nd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},rd={class:"text-2xl"},ad=C("h6",{class:"text-10"},"DAY",-1),id={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},sd={class:"text-2xl"},od=C("h6",{class:"text-10"},"HOUR",-1),ld={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},cd={class:"text-2xl"},fd=C("h6",{class:"text-10"},"MIN",-1),ud={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},dd={class:"text-2xl"},md=C("h6",{class:"text-10"},"SEC",-1),hd={__name:"Home",setup(t){const e=_e(0),n=_e(0),r=_e(0),a=_e(0),i=new Date().getFullYear(),s=new Date(`January 13 ${i+1} 00:00:00`);function o(){const f=s-new Date;e.value=Math.floor(f/1e3)%60,n.value=Math.floor(f/1e3/60)%60,r.value=Math.floor(f/1e3/60/60)%24,a.value=Math.floor(f/1e3/60/60/24)}return setInterval(function(){o()},1e3),xs(()=>{o()}),(l,f)=>{const d=Hn("marquee");return pt(),vt("div",Xu,[C("div",Vu,[Ju,C("div",qu,[H(d,{class:"transform rotate-9 py-2 text-64 bg-blue font-bold text-white"},{default:We(()=>[fe(" 少年立委"),Qu,fe(" 清流參選 凍蒜！凍蒜！ 台灣的明天 喵先鋪路 ")]),_:1})])]),C("div",Zu,[Gu,C("div",td,[ed,C("div",nd,[C("h4",rd,Nt(a.value),1),ad]),C("div",id,[C("h4",sd,Nt(r.value),1),od]),C("div",ld,[C("h4",cd,Nt(n.value),1),fd]),C("div",ud,[C("h4",dd,Nt(e.value),1),md])])])])}}},pd="/F2ELegislator/assets/puzzleMeow-0f0bc168.png",vd={},gd={class:"min-h-screen pt-60"},bd=je('<div class="flex justify-center"><div class="tracking-wider"><div class="relative"><h1 class="text-64 text-mainBlack">候選人主張</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider" style="top:-65%;">ADVOCATE</h1></div><h3 class="text-green text-4xl pt-20">我堅信 ! </h3><h3 class="text-xl pt-8">藉由推動更完善的貓咪福利和相關政策，</h3><h3 class="text-xl">更是間接地投資於<span class="text-mainYellow text-4xl">台灣的未來</span></h3><p class="text-sm pt-8">畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過</p><p class="text-sm">完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</p><p class="text-sm pt-8">因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能</p><p class="text-sm pb-4">得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</p><hr class="border-black w-1/2"><h3 class="text-green pt-8">護航台灣的幸福經濟，從照顧每一隻貓咪開始。</h3></div><img src="'+pd+'" alt="puzzleMeow"></div>',1),yd=[bd];function xd(t,e){return pt(),vt("div",gd,yd)}const _d=ne(vd,[["render",xd]]),wd={},kd={class:"min-h-screen pt-20"},Ad=C("div",{class:"relative flex justify-center"},[C("h1",{class:"text-64 text-mainBlack"},"最新活動"),C("h1",{class:"absolute text-yellow text-92 font-light tracking-wider",style:{top:"-65%"}},"LATEST EVENTS")],-1),Od=[Ad];function Ed(t,e){return pt(),vt("div",kd,Od)}const Cd=ne(wd,[["render",Ed]]);const Pd={},Sd=t=>(ir("data-v-4f29553d"),t=t(),sr(),t),Id={class:"bg-image min-h-screen"},Td=Sd(()=>C("div",{class:"pt-80"},[C("div",{class:"flex justify-center relative w-full"},[C("h1",{class:"text-64 text-mainBlack"},"政策議題"),C("h1",{class:"absolute text-92 font-light tracking-widest",style:{top:"-65%",color:"#FFFFFF80"}},"POLICY ISSUES")])],-1)),Nd=[Td];function Md(t,e){return pt(),vt("div",Id,Nd)}const Fd=ne(Pd,[["render",Md],["__scopeId","data-v-4f29553d"]]),Rd="/F2ELegislator/assets/product-c4b87659.png";const un=t=>(ir("data-v-c5f1d460"),t=t(),sr(),t),Ld={class:"flex bg-image min-h-screen"},jd=un(()=>C("div",null,[C("img",{src:Rd,alt:"product"})],-1)),$d={class:"pt-28 flex-1"},zd=je('<div class="relative w-full" data-v-c5f1d460><h1 class="text-64 text-white" data-v-c5f1d460>小額捐款</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider w-full" style="top:-70%;" data-v-c5f1d460>SUPPORT US</h1></div><div class="text-white text-sm pt-20 tracking-wider" data-v-c5f1d460><p data-v-c5f1d460>邀請您一同加入保證金募資專案，任何一筆捐款，無論金額，都</p><p data-v-c5f1d460>能幫助喵喵我推動寵物福利。幫助喵喵我推動寵物福利。</p><p class="pt-8" data-v-c5f1d460>本專案募集資金將100%用於參選保證金，並且公開專案帳目；</p><p data-v-c5f1d460>當選後，退還的保證金將提撥給地方黨部，作為黨務運作之</p><p data-v-c5f1d460>用。</p><p class="pt-8" data-v-c5f1d460>您的支持，會直接幫助喵喵黨能在各地推出更多的候選人，並在</p><p data-v-c5f1d460>各地繼續深耕。</p></div>',2),Dd={class:"flex flex-col"},Ud={class:"flex items-center text-white"},Bd=un(()=>C("h4",{class:"pr-6 text-xl"},"募款累計",-1)),Hd={class:"flex flex-col items-end"},Yd={class:"text-5xl"},Wd=un(()=>C("h4",{class:"text-gray"},"需要保證金 1000 萬",-1)),Kd={class:"flex"},Xd={key:0,class:"flex flex-col items-center"},Vd={class:"text-2xl text-white pb-4"},Jd={class:"h-60 w-52 text-center text-40 bg-white rounded-4xl font-black"},qd={class:"text-mainYellow pt-4"},Qd={key:1,class:"flex flex-col items-center"},Zd={class:"text-2xl text-white pb-4"},Gd=un(()=>C("input",{type:"text",name:"",placeholder:"請輸入金額",class:"h-60 w-52 text-center text-2xl bg-white rounded-4xl font-black"},null,-1)),tm=un(()=>C("h4",{class:"text-white pt-2"},"最高額度新台幣十萬元整",-1)),em={class:"text-mainYellow pt-2"},nm={__name:"SupportUs",setup(t){const e=_e("3,294,255"),n=_e([{id:"1",title:"輕鬆捐",money:"$600",desc:"為他撐過風風雨雨"},{id:"2",title:"小額捐",money:"$1200",desc:"為他覆蓋前方泥濘"},{id:"3",title:"力挺捐",money:"$8800",desc:"全力相挺！ 為他全力以赴"},{id:"4",title:"自由捐",money:"",desc:" 為他披荊斬棘前行"}]);return(r,a)=>(pt(),vt("div",Ld,[jd,C("div",$d,[zd,C("div",Dd,[C("div",Ud,[Bd,C("div",Hd,[C("h2",Yd,Nt(e.value),1),Wd])])]),C("div",Kd,[(pt(!0),vt(yt,null,Tl(n.value,i=>(pt(),vt("div",{key:i.id,class:"flex flex-col items-center mr-6"},[i.id!=="4"?(pt(),vt("div",Xd,[C("h4",Vd,Nt(i.title),1),C("div",Jd,Nt(i.money),1),C("h4",qd,Nt(i.desc),1)])):(pt(),vt("div",Qd,[C("h4",Zd,Nt(i.title),1),Gd,tm,C("h4",em,Nt(i.desc),1)]))]))),128))])])]))}},rm=ne(nm,[["__scopeId","data-v-c5f1d460"]]),am="/F2ELegislator/assets/contactMeow-77e59b7a.png",im={},sm={class:"min-h-screen"},om=je('<div class="flex flex-col items-center"><div class="flex"><div class="flex flex-col justify-end pb-4"><div class="relative"><h1 class="text-64 text-mainBlack">您的聲音，我們的行動！</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider" style="left:-15%;top:-60%;">CONTACT US</h1></div><p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到</p><p>您的建議。分享您的想法，一同為我們的未來打造更美好！</p></div><img src="'+am+'" alt="contactMeow"></div><div class="w-1/2"><div class="flex border-2 border-black rounded p-20"><div class="pr-6"><div class="w-full"><h5>您的姓名</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="請輸入您的姓名"></div><div class="w-full"><h5>您的 Email</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="請輸入您的電子郵件"></div><div class="w-full"><h5>您的手機號碼</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="09-xxx-xxx"></div></div><div class="flex flex-col"><div class="w-full"><h5>您的建言</h5><textarea type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow"></textarea></div><button class="border-2 border-black rounded bg-mainYellow">送出意見</button></div></div></div></div>',1),lm=[om];function cm(t,e){return pt(),vt("div",sm,lm)}const fm=ne(im,[["render",cm]]);const um={},dn=t=>(ir("data-v-45cc0c0b"),t=t(),sr(),t),dm={class:"flex p-6 bg-mainYellow"},mm=je('<div class="flex items-center justify-end w-6/12 pr-8" data-v-45cc0c0b><div class="mr-2 border-2 border-black" data-v-45cc0c0b><div class="flex items-center" data-v-45cc0c0b><div class="w-1/4 mx-4" data-v-45cc0c0b><img src="'+co+'" alt="選舉章" data-v-45cc0c0b></div><div class="flex items-center w-3/4 p-2 border-l-2 border-black" data-v-45cc0c0b><div class="pl-4" data-v-45cc0c0b><h4 data-v-45cc0c0b>好</h4><h4 data-v-45cc0c0b>喵</h4></div><h4 class="px-6 text-mainBlack text-7xl" data-v-45cc0c0b>3</h4></div></div><div class="p-1 text-xs text-center border-t-2 border-black tracking-widest" data-v-45cc0c0b>點擊我就喵喵叫給你聽</div></div><div class="py-5 px-8 border-2 border-black tracking-widest" data-v-45cc0c0b><h4 class="pb-2 text-4xl text-mainBlack" data-v-45cc0c0b>喵立翰</h4><h4 class="text-xl text-center" data-v-45cc0c0b>少年立委</h4></div></div>',1),hm={class:"w-6/12 tracking-wider"},pm=dn(()=>C("span",null,"TAIWAN NO.1",-1)),vm=dn(()=>C("span",null,"ELECTIONS",-1)),gm=dn(()=>C("span",{class:"pl-4"},"ELECTIONS 凍蒜！凍蒜！",-1)),bm={class:"flex justify-evenly p-8 bg-mainBlack text-white"},ym=dn(()=>C("div",null,[C("p",{class:"pb-2 text-2xl"},"競選總部"),C("h4",null,"地址：台灣喵星區"),C("h4",null,"毛茸茸大道88號，喵喵大樓3樓")],-1)),xm=dn(()=>C("div",{class:"flex flex-col justify-end"},[C("h4",null,"電話：(02) 888-5678"),C("h4",null,"電子郵件地址: meowoffice@linmeow.tw")],-1)),_m={class:"flex items-end text-2xl"};function wm(t,e){const n=Hn("marquee"),r=Hn("font-awesome-icon");return pt(),vt(yt,null,[C("div",dm,[mm,C("div",hm,[H(n,{class:"text-40 ml-20 font-bold"},{default:We(()=>[fe("凍蒜! 凍蒜! "),pm,fe(" 2024 VOTE NO.3")]),_:1}),H(n,{class:"text-40 ml-10 font-bold"},{default:We(()=>[vm,fe("少年立委 清流參選 台灣的未來，差您一票")]),_:1}),H(n,{class:"text-64 ml-16 font-bold"},{default:We(()=>[fe("TAIWAN NO.1"),gm]),_:1})])]),C("div",bm,[ym,xm,C("div",_m,[H(r,{icon:"fa-brands fa-facebook",class:"p-2"}),H(r,{icon:"fa-brands fa-instagram",class:"p-2"}),H(r,{icon:"fa-brands fa-x-twitter",class:"p-2"})])])],64)}const km=ne(um,[["render",wm],["__scopeId","data-v-45cc0c0b"]]);const Am=t=>(ir("data-v-dde0c523"),t=t(),sr(),t),Om=Am(()=>C("div",{class:"relative"},[C("div",{class:"fixed bottom-80 left-0"},[C("h6",{class:"transform -rotate-90"},"Miao Li-Han © 2023 Copyright. All Rights Reserved")])],-1)),Em={__name:"App",setup(t){return(e,n)=>(pt(),vt(yt,null,[H(Hu),Om,H(hd),H(_d),H(Cd),H(Fd),H(rm),H(fm),H(km)],64))}},Cm=ne(Em,[["__scopeId","data-v-dde0c523"]]);gu.add(Mu,Nu,Tu,Fu,Lu,Ru);const fo=Lc(Cm);fo.component("font-awesome-icon",Iu);fo.mount("#app");

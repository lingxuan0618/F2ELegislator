(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ea(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},Ie=[],It=()=>{},yo=()=>!1,xo=/^on[^a-z]/,Gn=t=>xo.test(t),na=t=>t.startsWith("onUpdate:"),ot=Object.assign,ra=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_o=Object.prototype.hasOwnProperty,$=(t,e)=>_o.call(t,e),R=Array.isArray,Se=t=>er(t)==="[object Map]",Hi=t=>er(t)==="[object Set]",j=t=>typeof t=="function",at=t=>typeof t=="string",tr=t=>typeof t=="symbol",q=t=>t!==null&&typeof t=="object",Wi=t=>(q(t)||j(t))&&j(t.then)&&j(t.catch),Ki=Object.prototype.toString,er=t=>Ki.call(t),wo=t=>er(t).slice(8,-1),Vi=t=>er(t)==="[object Object]",aa=t=>at(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ao=/-(\w)/g,Lt=nr(t=>t.replace(Ao,(e,n)=>n?n.toUpperCase():"")),ko=/\B([A-Z])/g,je=nr(t=>t.replace(ko,"-$1").toLowerCase()),rr=nr(t=>t.charAt(0).toUpperCase()+t.slice(1)),br=nr(t=>t?`on${rr(t)}`:""),ge=(t,e)=>!Object.is(t,e),yr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Da;const Sr=()=>Da||(Da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ia(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=at(r)?So(r):ia(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(at(t)||q(t))return t}const Oo=/;(?![^(]*\))/g,Co=/:([^]+)/,Io=/\/\*[^]*?\*\//g;function So(t){const e={};return t.replace(Io,"").split(Oo).forEach(n=>{if(n){const r=n.split(Co);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sa(t){let e="";if(at(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=sa(t[n]);r&&(e+=r+" ")}else if(q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Po="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",To=ea(Po);function Xi(t){return!!t||t===""}const et=t=>at(t)?t:t==null?"":R(t)||q(t)&&(t.toString===Ki||!j(t.toString))?JSON.stringify(t,Qi,2):String(t),Qi=(t,e)=>e&&e.__v_isRef?Qi(t,e.value):Se(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Hi(e)?{[`Set(${e.size})`]:[...e.values()]}:q(e)&&!R(e)&&!Vi(e)?String(e):e;let At;class Mo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function No(t,e=At){e&&e.active&&e.effects.push(t)}function Ro(){return At}const oa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ji=t=>(t.w&ee)>0,qi=t=>(t.n&ee)>0,Fo=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ee},Lo=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Ji(a)&&!qi(a)?a.delete(t):e[n++]=a,a.w&=~ee,a.n&=~ee}e.length=n}},Pr=new WeakMap;let We=0,ee=1;const Tr=30;let kt;const pe=Symbol(""),Mr=Symbol("");class la{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,No(this,r)}run(){if(!this.active)return this.fn();let e=kt,n=Gt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,Gt=!0,ee=1<<++We,We<=Tr?Fo(this):Ua(this),this.fn()}finally{We<=Tr&&Lo(this),ee=1<<--We,kt=this.parent,Gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(Ua(this),this.onStop&&this.onStop(),this.active=!1)}}function Ua(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gt=!0;const Zi=[];function ze(){Zi.push(Gt),Gt=!1}function Be(){const t=Zi.pop();Gt=t===void 0?!0:t}function gt(t,e,n){if(Gt&&kt){let r=Pr.get(t);r||Pr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=oa()),Gi(a)}}function Gi(t,e){let n=!1;We<=Tr?qi(t)||(t.n|=ee,n=!Ji(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function $t(t,e,n,r,a,i){const s=Pr.get(t);if(!s)return;let o=[];if(e==="clear")o=[...s.values()];else if(n==="length"&&R(t)){const l=Number(r);s.forEach((f,d)=>{(d==="length"||!tr(d)&&d>=l)&&o.push(f)})}else switch(n!==void 0&&o.push(s.get(n)),e){case"add":R(t)?aa(n)&&o.push(s.get("length")):(o.push(s.get(pe)),Se(t)&&o.push(s.get(Mr)));break;case"delete":R(t)||(o.push(s.get(pe)),Se(t)&&o.push(s.get(Mr)));break;case"set":Se(t)&&o.push(s.get(pe));break}if(o.length===1)o[0]&&Nr(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);Nr(oa(l))}}function Nr(t,e){const n=R(t)?t:[...t];for(const r of n)r.computed&&$a(r);for(const r of n)r.computed||$a(r)}function $a(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const jo=ea("__proto__,__v_isRef,__isVue"),ts=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr)),Ya=zo();function zo(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,s=this.length;i<s;i++)gt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ze();const r=Y(this)[e].apply(this,n);return Be(),r}}),t}function Bo(t){const e=Y(this);return gt(e,"has",t),e.hasOwnProperty(t)}class es{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Zo:is:i?as:rs).get(e))return e;const s=R(e);if(!a){if(s&&$(Ya,n))return Reflect.get(Ya,n,r);if(n==="hasOwnProperty")return Bo}const o=Reflect.get(e,n,r);return(tr(n)?ts.has(n):jo(n))||(a||gt(e,"get",n),i)?o:ut(o)?s&&aa(n)?o:o.value:q(o)?a?ss(o):ua(o):o}}class ns extends es{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(Ne(i)&&ut(i)&&!ut(r))return!1;if(!this._shallow&&(!Wn(r)&&!Ne(r)&&(i=Y(i),r=Y(r)),!R(e)&&ut(i)&&!ut(r)))return i.value=r,!0;const s=R(e)&&aa(n)?Number(n)<e.length:$(e,n),o=Reflect.set(e,n,r,a);return e===Y(a)&&(s?ge(r,i)&&$t(e,"set",n,r):$t(e,"add",n,r)),o}deleteProperty(e,n){const r=$(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&$t(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!ts.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",R(e)?"length":pe),Reflect.ownKeys(e)}}class Do extends es{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uo=new ns,$o=new Do,Yo=new ns(!0),ca=t=>t,ar=t=>Reflect.getPrototypeOf(t);function _n(t,e,n=!1,r=!1){t=t.__v_raw;const a=Y(t),i=Y(e);n||(ge(e,i)&&gt(a,"get",e),gt(a,"get",i));const{has:s}=ar(a),o=r?ca:n?ma:Ge;if(s.call(a,e))return o(t.get(e));if(s.call(a,i))return o(t.get(i));t!==a&&t.get(e)}function wn(t,e=!1){const n=this.__v_raw,r=Y(n),a=Y(t);return e||(ge(t,a)&&gt(r,"has",t),gt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function An(t,e=!1){return t=t.__v_raw,!e&&gt(Y(t),"iterate",pe),Reflect.get(t,"size",t)}function Ha(t){t=Y(t);const e=Y(this);return ar(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function Wa(t,e){e=Y(e);const n=Y(this),{has:r,get:a}=ar(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const s=a.call(n,t);return n.set(t,e),i?ge(e,s)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function Ka(t){const e=Y(this),{has:n,get:r}=ar(e);let a=n.call(e,t);a||(t=Y(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&$t(e,"delete",t,void 0),i}function Va(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function kn(t,e){return function(r,a){const i=this,s=i.__v_raw,o=Y(s),l=e?ca:t?ma:Ge;return!t&&gt(o,"iterate",pe),s.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function En(t,e,n){return function(...r){const a=this.__v_raw,i=Y(a),s=Se(i),o=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,f=a[t](...r),d=n?ca:e?ma:Ge;return!e&&gt(i,"iterate",l?Mr:pe),{next(){const{value:m,done:g}=f.next();return g?{value:m,done:g}:{value:o?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Qt(t){return function(...e){return t==="delete"?!1:this}}function Ho(){const t={get(i){return _n(this,i)},get size(){return An(this)},has:wn,add:Ha,set:Wa,delete:Ka,clear:Va,forEach:kn(!1,!1)},e={get(i){return _n(this,i,!1,!0)},get size(){return An(this)},has:wn,add:Ha,set:Wa,delete:Ka,clear:Va,forEach:kn(!1,!0)},n={get(i){return _n(this,i,!0)},get size(){return An(this,!0)},has(i){return wn.call(this,i,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:kn(!0,!1)},r={get(i){return _n(this,i,!0,!0)},get size(){return An(this,!0)},has(i){return wn.call(this,i,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=En(i,!1,!1),n[i]=En(i,!0,!1),e[i]=En(i,!1,!0),r[i]=En(i,!0,!0)}),[t,n,e,r]}const[Wo,Ko,Vo,Xo]=Ho();function fa(t,e){const n=e?t?Xo:Vo:t?Ko:Wo;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Qo={get:fa(!1,!1)},Jo={get:fa(!1,!0)},qo={get:fa(!0,!1)},rs=new WeakMap,as=new WeakMap,is=new WeakMap,Zo=new WeakMap;function Go(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(t){return t.__v_skip||!Object.isExtensible(t)?0:Go(wo(t))}function ua(t){return Ne(t)?t:da(t,!1,Uo,Qo,rs)}function el(t){return da(t,!1,Yo,Jo,as)}function ss(t){return da(t,!0,$o,qo,is)}function da(t,e,n,r,a){if(!q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const s=tl(t);if(s===0)return t;const o=new Proxy(t,s===2?r:n);return a.set(t,o),o}function Pe(t){return Ne(t)?Pe(t.__v_raw):!!(t&&t.__v_isReactive)}function Ne(t){return!!(t&&t.__v_isReadonly)}function Wn(t){return!!(t&&t.__v_isShallow)}function os(t){return Pe(t)||Ne(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function ls(t){return Hn(t,"__v_skip",!0),t}const Ge=t=>q(t)?ua(t):t,ma=t=>q(t)?ss(t):t;function cs(t){Gt&&kt&&(t=Y(t),Gi(t.dep||(t.dep=oa())))}function fs(t,e){t=Y(t);const n=t.dep;n&&Nr(n)}function ut(t){return!!(t&&t.__v_isRef===!0)}function Ut(t){return nl(t,!1)}function nl(t,e){return ut(t)?t:new rl(t,e)}class rl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Ge(e)}get value(){return cs(this),this._value}set value(e){const n=this.__v_isShallow||Wn(e)||Ne(e);e=n?e:Y(e),ge(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ge(e),fs(this))}}function al(t){return ut(t)?t.value:t}const il={get:(t,e,n)=>al(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ut(a)&&!ut(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function us(t){return Pe(t)?t:new Proxy(t,il)}class sl{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new la(e,()=>{this._dirty||(this._dirty=!0,fs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=Y(this);return cs(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ol(t,e,n=!1){let r,a;const i=j(t);return i?(r=t,a=It):(r=t.get,a=t.set),new sl(r,a,i||!a,n)}function te(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){ir(i,e,n)}return a}function St(t,e,n,r){if(j(t)){const i=te(t,e,n,r);return i&&Wi(i)&&i.catch(s=>{ir(s,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(St(t[i],e,n,r));return a}function ir(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,o=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,s,o)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){te(l,null,10,[t,s,o]);return}}ll(t,n,a,r)}function ll(t,e,n,r=!0){console.error(t)}let tn=!1,Rr=!1;const ft=[];let Rt=0;const Te=[];let Bt=null,ue=0;const ds=Promise.resolve();let ha=null;function cl(t){const e=ha||ds;return t?e.then(this?t.bind(this):t):e}function fl(t){let e=Rt+1,n=ft.length;for(;e<n;){const r=e+n>>>1,a=ft[r],i=en(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function pa(t){(!ft.length||!ft.includes(t,tn&&t.allowRecurse?Rt+1:Rt))&&(t.id==null?ft.push(t):ft.splice(fl(t.id),0,t),ms())}function ms(){!tn&&!Rr&&(Rr=!0,ha=ds.then(ps))}function ul(t){const e=ft.indexOf(t);e>Rt&&ft.splice(e,1)}function dl(t){R(t)?Te.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?ue+1:ue))&&Te.push(t),ms()}function Xa(t,e=tn?Rt+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function hs(t){if(Te.length){const e=[...new Set(Te)];if(Te.length=0,Bt){Bt.push(...e);return}for(Bt=e,Bt.sort((n,r)=>en(n)-en(r)),ue=0;ue<Bt.length;ue++)Bt[ue]();Bt=null,ue=0}}const en=t=>t.id==null?1/0:t.id,ml=(t,e)=>{const n=en(t)-en(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ps(t){Rr=!1,tn=!0,ft.sort(ml);const e=It;try{for(Rt=0;Rt<ft.length;Rt++){const n=ft[Rt];n&&n.active!==!1&&te(n,null,14)}}finally{Rt=0,ft.length=0,hs(),tn=!1,ha=null,(ft.length||Te.length)&&ps()}}function hl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||J;let a=n;const i=e.startsWith("update:"),s=i&&e.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:g}=r[d]||J;g&&(a=n.map(A=>at(A)?A.trim():A)),m&&(a=n.map(Eo))}let o,l=r[o=br(e)]||r[o=br(Lt(e))];!l&&i&&(l=r[o=br(je(e))]),l&&St(l,t,6,a);const f=r[o+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,St(f,t,6,a)}}function vs(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let s={},o=!1;if(!j(t)){const l=f=>{const d=vs(f,e,!0);d&&(o=!0,ot(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!o?(q(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>s[l]=null):ot(s,i),q(t)&&r.set(t,s),s)}function sr(t,e){return!t||!Gn(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,je(e))||$(t,e))}let Et=null,or=null;function Kn(t){const e=Et;return Et=t,or=t&&t.type.__scopeId||null,e}function un(t){or=t}function dn(){or=null}function Xe(t,e=Et,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&ii(-1);const i=Kn(e);let s;try{s=t(...a)}finally{Kn(i),r._d&&ii(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function xr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:f,render:d,renderCache:m,data:g,setupState:A,ctx:z,inheritAttrs:N}=t;let U,k;const O=Kn(t);try{if(n.shapeFlag&4){const P=a||r;U=Nt(d.call(P,P,m,i,A,g,z)),k=l}else{const P=e;U=Nt(P.length>1?P(i,{attrs:l,slots:o,emit:f}):P(i,null)),k=e.props?l:pl(l)}}catch(P){Je.length=0,ir(P,t,1),U=D(be)}let F=U;if(k&&N!==!1){const P=Object.keys(k),{shapeFlag:H}=F;P.length&&H&7&&(s&&P.some(na)&&(k=vl(k,s)),F=Re(F,k))}return n.dirs&&(F=Re(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),U=F,Kn(O),U}const pl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gn(n))&&((e||(e={}))[n]=t[n]);return e},vl=(t,e)=>{const n={};for(const r in t)(!na(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gl(t,e,n){const{props:r,children:a,component:i}=t,{props:s,children:o,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qa(r,s,f):!!s;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(s[g]!==r[g]&&!sr(f,g))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Qa(r,s,f):!0:!!s;return!1}function Qa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!sr(n,i))return!0}return!1}function bl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const gs="components";function nn(t,e){return xl(gs,t,!0,e)||t}const yl=Symbol.for("v-ndc");function xl(t,e,n=!0,r=!1){const a=Et||st;if(a){const i=a.type;if(t===gs){const o=mc(i,!1);if(o&&(o===e||o===Lt(e)||o===rr(Lt(e))))return i}const s=Ja(a[t]||i[t],e)||Ja(a.appContext[t],e);return!s&&r?i:s}}function Ja(t,e){return t&&(t[e]||t[Lt(e)]||t[rr(Lt(e))])}const _l=t=>t.__isSuspense;function wl(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):dl(t)}const On={};function jn(t,e,n){return bs(t,e,n)}function bs(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=J){var o;const l=Ro()===((o=st)==null?void 0:o.scope)?st:null;let f,d=!1,m=!1;if(ut(t)?(f=()=>t.value,d=Wn(t)):Pe(t)?(f=()=>t,r=!0):R(t)?(m=!0,d=t.some(P=>Pe(P)||Wn(P)),f=()=>t.map(P=>{if(ut(P))return P.value;if(Pe(P))return Ee(P);if(j(P))return te(P,l,2)})):j(t)?e?f=()=>te(t,l,2):f=()=>{if(!(l&&l.isUnmounted))return g&&g(),St(t,l,3,[A])}:f=It,e&&r){const P=f;f=()=>Ee(P())}let g,A=P=>{g=O.onStop=()=>{te(P,l,4)}},z;if(an)if(A=It,e?n&&St(e,l,3,[f(),m?[]:void 0,A]):f(),a==="sync"){const P=gc();z=P.__watcherHandles||(P.__watcherHandles=[])}else return It;let N=m?new Array(t.length).fill(On):On;const U=()=>{if(O.active)if(e){const P=O.run();(r||d||(m?P.some((H,lt)=>ge(H,N[lt])):ge(P,N)))&&(g&&g(),St(e,l,3,[P,N===On?void 0:m&&N[0]===On?[]:N,A]),N=P)}else O.run()};U.allowRecurse=!!e;let k;a==="sync"?k=U:a==="post"?k=()=>pt(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),k=()=>pa(U));const O=new la(f,k);e?n?U():N=O.run():a==="post"?pt(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&ra(l.scope.effects,O)};return z&&z.push(F),F}function Al(t,e,n){const r=this.proxy,a=at(t)?t.includes(".")?ys(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const s=st;Fe(this);const o=bs(a,i.bind(r),n);return s?Fe(s):ve(),o}function ys(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ee(t,e){if(!q(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ut(t))Ee(t.value,e);else if(R(t))for(let n=0;n<t.length;n++)Ee(t[n],e);else if(Hi(t)||Se(t))t.forEach(n=>{Ee(n,e)});else if(Vi(t))for(const n in t)Ee(t[n],e);return t}function le(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(ze(),St(l,n,8,[t.el,o,t,e]),Be())}}/*! #__NO_SIDE_EFFECTS__ */function kl(t,e){return j(t)?(()=>ot({name:t.name},e,{setup:t}))():t}const zn=t=>!!t.type.__asyncLoader,xs=t=>t.type.__isKeepAlive;function El(t,e){_s(t,"a",e)}function Ol(t,e){_s(t,"da",e)}function _s(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(lr(e,r,n),n){let a=n.parent;for(;a&&a.parent;)xs(a.parent.vnode)&&Cl(r,e,n,a),a=a.parent}}function Cl(t,e,n,r){const a=lr(e,t,r,!0);As(()=>{ra(r[e],a)},n)}function lr(t,e,n=st,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;ze(),Fe(n);const o=St(e,n,t,s);return ve(),Be(),o});return r?a.unshift(i):a.push(i),i}}const Kt=t=>(e,n=st)=>(!an||t==="sp")&&lr(t,(...r)=>e(...r),n),Il=Kt("bm"),ws=Kt("m"),Sl=Kt("bu"),Pl=Kt("u"),Tl=Kt("bum"),As=Kt("um"),Ml=Kt("sp"),Nl=Kt("rtg"),Rl=Kt("rtc");function Fl(t,e=st){lr("ec",t,e)}function Fr(t,e,n,r){let a;const i=n&&n[r];if(R(t)||at(t)){a=new Array(t.length);for(let s=0,o=t.length;s<o;s++)a[s]=e(t[s],s,void 0,i&&i[s])}else if(typeof t=="number"){a=new Array(t);for(let s=0;s<t;s++)a[s]=e(s+1,s,void 0,i&&i[s])}else if(q(t))if(t[Symbol.iterator])a=Array.from(t,(s,o)=>e(s,o,void 0,i&&i[o]));else{const s=Object.keys(t);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const f=s[o];a[o]=e(t[f],f,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const Lr=t=>t?Fs(t)?xa(t)||t.proxy:Lr(t.parent):null,Qe=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lr(t.parent),$root:t=>Lr(t.root),$emit:t=>t.emit,$options:t=>va(t),$forceUpdate:t=>t.f||(t.f=()=>pa(t.update)),$nextTick:t=>t.n||(t.n=cl.bind(t.proxy)),$watch:t=>Al.bind(t)}),_r=(t,e)=>t!==J&&!t.__isScriptSetup&&$(t,e),Ll={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=t;let f;if(e[0]!=="$"){const A=s[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(_r(r,e))return s[e]=1,r[e];if(a!==J&&$(a,e))return s[e]=2,a[e];if((f=t.propsOptions[0])&&$(f,e))return s[e]=3,i[e];if(n!==J&&$(n,e))return s[e]=4,n[e];jr&&(s[e]=0)}}const d=Qe[e];let m,g;if(d)return e==="$attrs"&&gt(t,"get",e),d(t);if((m=o.__cssModules)&&(m=m[e]))return m;if(n!==J&&$(n,e))return s[e]=4,n[e];if(g=l.config.globalProperties,$(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return _r(a,e)?(a[e]=n,!0):r!==J&&$(r,e)?(r[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||t!==J&&$(t,s)||_r(e,s)||(o=i[0])&&$(o,s)||$(r,s)||$(Qe,s)||$(a.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qa(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jr=!0;function jl(t){const e=va(t),n=t.proxy,r=t.ctx;jr=!1,e.beforeCreate&&Za(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:f,created:d,beforeMount:m,mounted:g,beforeUpdate:A,updated:z,activated:N,deactivated:U,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:P,render:H,renderTracked:lt,renderTriggered:ct,errorCaptured:_t,serverPrefetch:xt,expose:jt,inheritAttrs:$e,components:gn,directives:bn,filters:pr}=e;if(f&&zl(f,r,null),s)for(const Z in s){const K=s[Z];j(K)&&(r[Z]=K.bind(n))}if(a){const Z=a.call(n,n);q(Z)&&(t.data=ua(Z))}if(jr=!0,i)for(const Z in i){const K=i[Z],se=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):It,yn=!j(K)&&j(K.set)?K.set.bind(n):It,oe=fe({get:se,set:yn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>oe.value,set:Pt=>oe.value=Pt})}if(o)for(const Z in o)ks(o[Z],r,n,Z);if(l){const Z=j(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{Hl(K,Z[K])})}d&&Za(d,t,"c");function dt(Z,K){R(K)?K.forEach(se=>Z(se.bind(n))):K&&Z(K.bind(n))}if(dt(Il,m),dt(ws,g),dt(Sl,A),dt(Pl,z),dt(El,N),dt(Ol,U),dt(Fl,_t),dt(Rl,lt),dt(Nl,ct),dt(Tl,O),dt(As,P),dt(Ml,xt),R(jt))if(jt.length){const Z=t.exposed||(t.exposed={});jt.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:se=>n[K]=se})})}else t.exposed||(t.exposed={});H&&t.render===It&&(t.render=H),$e!=null&&(t.inheritAttrs=$e),gn&&(t.components=gn),bn&&(t.directives=bn)}function zl(t,e,n=It){R(t)&&(t=zr(t));for(const r in t){const a=t[r];let i;q(a)?"default"in a?i=Bn(a.from||r,a.default,!0):i=Bn(a.from||r):i=Bn(a),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function Za(t,e,n){St(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ks(t,e,n,r){const a=r.includes(".")?ys(n,r):()=>n[r];if(at(t)){const i=e[t];j(i)&&jn(a,i)}else if(j(t))jn(a,t.bind(n));else if(q(t))if(R(t))t.forEach(i=>ks(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&jn(a,i,t)}}function va(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,o=i.get(e);let l;return o?l=o:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(f=>Vn(l,f,s,!0)),Vn(l,e,s)),q(e)&&i.set(e,l),l}function Vn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Vn(t,i,n,!0),a&&a.forEach(s=>Vn(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const o=Bl[s]||n&&n[s];t[s]=o?o(t[s],e[s]):e[s]}return t}const Bl={data:Ga,props:ti,emits:ti,methods:Ke,computed:Ke,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Ke,directives:Ke,watch:Ul,provide:Ga,inject:Dl};function Ga(t,e){return e?t?function(){return ot(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Dl(t,e){return Ke(zr(t),zr(e))}function zr(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ke(t,e){return t?ot(Object.create(null),t,e):e}function ti(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:ot(Object.create(null),qa(t),qa(e??{})):e}function Ul(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Es(){return{app:null,config:{isNativeTag:yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $l=0;function Yl(t,e){return function(r,a=null){j(r)||(r=ot({},r)),a!=null&&!q(a)&&(a=null);const i=Es(),s=new WeakSet;let o=!1;const l=i.app={_uid:$l++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:bc,get config(){return i.config},set config(f){},use(f,...d){return s.has(f)||(f&&j(f.install)?(s.add(f),f.install(l,...d)):j(f)&&(s.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!o){const g=D(r,a);return g.appContext=i,d&&e?e(g,f):t(g,f,m),o=!0,l._container=f,f.__vue_app__=l,xa(g.component)||g.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){Xn=l;try{return f()}finally{Xn=null}}};return l}}let Xn=null;function Hl(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Bn(t,e,n=!1){const r=st||Et;if(r||Xn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Wl(t,e,n,r=!1){const a={},i={};Hn(i,fr,1),t.propsDefaults=Object.create(null),Os(t,e,a,i);for(const s in t.propsOptions[0])s in a||(a[s]=void 0);n?t.props=r?a:el(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Kl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=t,o=Y(a),[l]=t.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(sr(t.emitsOptions,g))continue;const A=e[g];if(l)if($(i,g))A!==i[g]&&(i[g]=A,f=!0);else{const z=Lt(g);a[z]=Br(l,o,z,A,t,!1)}else A!==i[g]&&(i[g]=A,f=!0)}}}else{Os(t,e,a,i)&&(f=!0);let d;for(const m in o)(!e||!$(e,m)&&((d=je(m))===m||!$(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Br(l,o,m,void 0,t,!0)):delete a[m]);if(i!==o)for(const m in i)(!e||!$(e,m))&&(delete i[m],f=!0)}f&&$t(t,"set","$attrs")}function Os(t,e,n,r){const[a,i]=t.propsOptions;let s=!1,o;if(e)for(let l in e){if(Ln(l))continue;const f=e[l];let d;a&&$(a,d=Lt(l))?!i||!i.includes(d)?n[d]=f:(o||(o={}))[d]=f:sr(t.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(i){const l=Y(n),f=o||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Br(a,l,m,f[m],t,!$(f,m))}}return s}function Br(t,e,n,r,a,i){const s=t[n];if(s!=null){const o=$(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&j(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Fe(a),r=f[n]=l.call(null,e),ve())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===je(n))&&(r=!0))}return r}function Cs(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,s={},o=[];let l=!1;if(!j(t)){const d=m=>{l=!0;const[g,A]=Cs(m,e,!0);ot(s,g),A&&o.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return q(t)&&r.set(t,Ie),Ie;if(R(i))for(let d=0;d<i.length;d++){const m=Lt(i[d]);ei(m)&&(s[m]=J)}else if(i)for(const d in i){const m=Lt(d);if(ei(m)){const g=i[d],A=s[m]=R(g)||j(g)?{type:g}:ot({},g);if(A){const z=ai(Boolean,A.type),N=ai(String,A.type);A[0]=z>-1,A[1]=N<0||z<N,(z>-1||$(A,"default"))&&o.push(m)}}}const f=[s,o];return q(t)&&r.set(t,f),f}function ei(t){return t[0]!=="$"}function ni(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ri(t,e){return ni(t)===ni(e)}function ai(t,e){return R(e)?e.findIndex(n=>ri(n,t)):j(e)&&ri(e,t)?0:-1}const Is=t=>t[0]==="_"||t==="$stable",ga=t=>R(t)?t.map(Nt):[Nt(t)],Vl=(t,e,n)=>{if(e._n)return e;const r=Xe((...a)=>ga(e(...a)),n);return r._c=!1,r},Ss=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Is(a))continue;const i=t[a];if(j(i))e[a]=Vl(a,i,r);else if(i!=null){const s=ga(i);e[a]=()=>s}}},Ps=(t,e)=>{const n=ga(e);t.slots.default=()=>n},Xl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Hn(e,"_",n)):Ss(e,t.slots={})}else t.slots={},e&&Ps(t,e);Hn(t.slots,fr,1)},Ql=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,s=J;if(r.shapeFlag&32){const o=e._;o?n&&o===1?i=!1:(ot(a,e),!n&&o===1&&delete a._):(i=!e.$stable,Ss(e,a)),s=e}else e&&(Ps(t,e),s={default:1});if(i)for(const o in a)!Is(o)&&s[o]==null&&delete a[o]};function Dr(t,e,n,r,a=!1){if(R(t)){t.forEach((g,A)=>Dr(g,e&&(R(e)?e[A]:e),n,r,a));return}if(zn(r)&&!a)return;const i=r.shapeFlag&4?xa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=t,f=e&&e.r,d=o.refs===J?o.refs={}:o.refs,m=o.setupState;if(f!=null&&f!==l&&(at(f)?(d[f]=null,$(m,f)&&(m[f]=null)):ut(f)&&(f.value=null)),j(l))te(l,o,12,[s,d]);else{const g=at(l),A=ut(l);if(g||A){const z=()=>{if(t.f){const N=g?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&ra(N,i):R(N)?N.includes(i)||N.push(i):g?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=s,$(m,l)&&(m[l]=s)):A&&(l.value=s,t.k&&(d[t.k]=s))};s?(z.id=-1,pt(z,n)):z()}}}const pt=wl;function Jl(t){return ql(t)}function ql(t,e){const n=Sr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:g,setScopeId:A=It,insertStaticContent:z}=t,N=(c,u,h,p=null,v=null,_=null,E=!1,x=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!He(c,u)&&(p=xn(c),Pt(c,v,_,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:I}=u;switch(b){case cr:U(c,u,h,p);break;case be:k(c,u,h,p);break;case Dn:c==null&&O(u,h,p,E);break;case vt:gn(c,u,h,p,v,_,E,x,w);break;default:I&1?H(c,u,h,p,v,_,E,x,w):I&6?bn(c,u,h,p,v,_,E,x,w):(I&64||I&128)&&b.process(c,u,h,p,v,_,E,x,w,we)}T!=null&&v&&Dr(T,c&&c.ref,_,u||c,!u)},U=(c,u,h,p)=>{if(c==null)r(u.el=o(u.children),h,p);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},k=(c,u,h,p)=>{c==null?r(u.el=l(u.children||""),h,p):u.el=c.el},O=(c,u,h,p)=>{[c.el,c.anchor]=z(c.children,u,h,p,c.el,c.anchor)},F=({el:c,anchor:u},h,p)=>{let v;for(;c&&c!==u;)v=g(c),r(c,h,p),c=v;r(u,h,p)},P=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=g(c),a(c),c=h;a(u)},H=(c,u,h,p,v,_,E,x,w)=>{E=E||u.type==="svg",c==null?lt(u,h,p,v,_,E,x,w):xt(c,u,v,_,E,x,w)},lt=(c,u,h,p,v,_,E,x)=>{let w,b;const{type:T,props:I,shapeFlag:M,transition:L,dirs:B}=c;if(w=c.el=s(c.type,_,I&&I.is,I),M&8?d(w,c.children):M&16&&_t(c.children,w,null,p,v,_&&T!=="foreignObject",E,x),B&&le(c,null,p,"created"),ct(w,c,c.scopeId,E,p),I){for(const W in I)W!=="value"&&!Ln(W)&&i(w,W,null,I[W],_,c.children,p,v,zt);"value"in I&&i(w,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Mt(b,p,c)}B&&le(c,null,p,"beforeMount");const V=Zl(v,L);V&&L.beforeEnter(w),r(w,u,h),((b=I&&I.onVnodeMounted)||V||B)&&pt(()=>{b&&Mt(b,p,c),V&&L.enter(w),B&&le(c,null,p,"mounted")},v)},ct=(c,u,h,p,v)=>{if(h&&A(c,h),p)for(let _=0;_<p.length;_++)A(c,p[_]);if(v){let _=v.subTree;if(u===_){const E=v.vnode;ct(c,E,E.scopeId,E.slotScopeIds,v.parent)}}},_t=(c,u,h,p,v,_,E,x,w=0)=>{for(let b=w;b<c.length;b++){const T=c[b]=x?qt(c[b]):Nt(c[b]);N(null,T,u,h,p,v,_,E,x)}},xt=(c,u,h,p,v,_,E)=>{const x=u.el=c.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=u;w|=c.patchFlag&16;const I=c.props||J,M=u.props||J;let L;h&&ce(h,!1),(L=M.onVnodeBeforeUpdate)&&Mt(L,h,u,c),T&&le(u,c,h,"beforeUpdate"),h&&ce(h,!0);const B=v&&u.type!=="foreignObject";if(b?jt(c.dynamicChildren,b,x,h,p,B,_):E||K(c,u,x,null,h,p,B,_,!1),w>0){if(w&16)$e(x,u,I,M,h,p,v);else if(w&2&&I.class!==M.class&&i(x,"class",null,M.class,v),w&4&&i(x,"style",I.style,M.style,v),w&8){const V=u.dynamicProps;for(let W=0;W<V.length;W++){const tt=V[W],wt=I[tt],Ae=M[tt];(Ae!==wt||tt==="value")&&i(x,tt,wt,Ae,v,c.children,h,p,zt)}}w&1&&c.children!==u.children&&d(x,u.children)}else!E&&b==null&&$e(x,u,I,M,h,p,v);((L=M.onVnodeUpdated)||T)&&pt(()=>{L&&Mt(L,h,u,c),T&&le(u,c,h,"updated")},p)},jt=(c,u,h,p,v,_,E)=>{for(let x=0;x<u.length;x++){const w=c[x],b=u[x],T=w.el&&(w.type===vt||!He(w,b)||w.shapeFlag&70)?m(w.el):h;N(w,b,T,null,p,v,_,E,!0)}},$e=(c,u,h,p,v,_,E)=>{if(h!==p){if(h!==J)for(const x in h)!Ln(x)&&!(x in p)&&i(c,x,h[x],null,E,u.children,v,_,zt);for(const x in p){if(Ln(x))continue;const w=p[x],b=h[x];w!==b&&x!=="value"&&i(c,x,b,w,E,u.children,v,_,zt)}"value"in p&&i(c,"value",h.value,p.value)}},gn=(c,u,h,p,v,_,E,x,w)=>{const b=u.el=c?c.el:o(""),T=u.anchor=c?c.anchor:o("");let{patchFlag:I,dynamicChildren:M,slotScopeIds:L}=u;L&&(x=x?x.concat(L):L),c==null?(r(b,h,p),r(T,h,p),_t(u.children,h,T,v,_,E,x,w)):I>0&&I&64&&M&&c.dynamicChildren?(jt(c.dynamicChildren,M,h,v,_,E,x),(u.key!=null||v&&u===v.subTree)&&Ts(c,u,!0)):K(c,u,h,T,v,_,E,x,w)},bn=(c,u,h,p,v,_,E,x,w)=>{u.slotScopeIds=x,c==null?u.shapeFlag&512?v.ctx.activate(u,h,p,E,w):pr(u,h,p,v,_,E,w):Ra(c,u,w)},pr=(c,u,h,p,v,_,E)=>{const x=c.component=lc(c,p,v);if(xs(c)&&(x.ctx.renderer=we),cc(x),x.asyncDep){if(v&&v.registerDep(x,dt),!c.el){const w=x.subTree=D(be);k(null,w,u,h)}return}dt(x,c,u,h,v,_,E)},Ra=(c,u,h)=>{const p=u.component=c.component;if(gl(c,u,h))if(p.asyncDep&&!p.asyncResolved){Z(p,u,h);return}else p.next=u,ul(p.update),p.update();else u.el=c.el,p.vnode=u},dt=(c,u,h,p,v,_,E)=>{const x=()=>{if(c.isMounted){let{next:T,bu:I,u:M,parent:L,vnode:B}=c,V=T,W;ce(c,!1),T?(T.el=B.el,Z(c,T,E)):T=B,I&&yr(I),(W=T.props&&T.props.onVnodeBeforeUpdate)&&Mt(W,L,T,B),ce(c,!0);const tt=xr(c),wt=c.subTree;c.subTree=tt,N(wt,tt,m(wt.el),xn(wt),c,v,_),T.el=tt.el,V===null&&bl(c,tt.el),M&&pt(M,v),(W=T.props&&T.props.onVnodeUpdated)&&pt(()=>Mt(W,L,T,B),v)}else{let T;const{el:I,props:M}=u,{bm:L,m:B,parent:V}=c,W=zn(u);if(ce(c,!1),L&&yr(L),!W&&(T=M&&M.onVnodeBeforeMount)&&Mt(T,V,u),ce(c,!0),I&&gr){const tt=()=>{c.subTree=xr(c),gr(I,c.subTree,c,v,null)};W?u.type.__asyncLoader().then(()=>!c.isUnmounted&&tt()):tt()}else{const tt=c.subTree=xr(c);N(null,tt,h,p,c,v,_),u.el=tt.el}if(B&&pt(B,v),!W&&(T=M&&M.onVnodeMounted)){const tt=u;pt(()=>Mt(T,V,tt),v)}(u.shapeFlag&256||V&&zn(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&pt(c.a,v),c.isMounted=!0,u=h=p=null}},w=c.effect=new la(x,()=>pa(b),c.scope),b=c.update=()=>w.run();b.id=c.uid,ce(c,!0),b()},Z=(c,u,h)=>{u.component=c;const p=c.vnode.props;c.vnode=u,c.next=null,Kl(c,u.props,p,h),Ql(c,u.children,h),ze(),Xa(),Be()},K=(c,u,h,p,v,_,E,x,w=!1)=>{const b=c&&c.children,T=c?c.shapeFlag:0,I=u.children,{patchFlag:M,shapeFlag:L}=u;if(M>0){if(M&128){yn(b,I,h,p,v,_,E,x,w);return}else if(M&256){se(b,I,h,p,v,_,E,x,w);return}}L&8?(T&16&&zt(b,v,_),I!==b&&d(h,I)):T&16?L&16?yn(b,I,h,p,v,_,E,x,w):zt(b,v,_,!0):(T&8&&d(h,""),L&16&&_t(I,h,p,v,_,E,x,w))},se=(c,u,h,p,v,_,E,x,w)=>{c=c||Ie,u=u||Ie;const b=c.length,T=u.length,I=Math.min(b,T);let M;for(M=0;M<I;M++){const L=u[M]=w?qt(u[M]):Nt(u[M]);N(c[M],L,h,null,v,_,E,x,w)}b>T?zt(c,v,_,!0,!1,I):_t(u,h,p,v,_,E,x,w,I)},yn=(c,u,h,p,v,_,E,x,w)=>{let b=0;const T=u.length;let I=c.length-1,M=T-1;for(;b<=I&&b<=M;){const L=c[b],B=u[b]=w?qt(u[b]):Nt(u[b]);if(He(L,B))N(L,B,h,null,v,_,E,x,w);else break;b++}for(;b<=I&&b<=M;){const L=c[I],B=u[M]=w?qt(u[M]):Nt(u[M]);if(He(L,B))N(L,B,h,null,v,_,E,x,w);else break;I--,M--}if(b>I){if(b<=M){const L=M+1,B=L<T?u[L].el:p;for(;b<=M;)N(null,u[b]=w?qt(u[b]):Nt(u[b]),h,B,v,_,E,x,w),b++}}else if(b>M)for(;b<=I;)Pt(c[b],v,_,!0),b++;else{const L=b,B=b,V=new Map;for(b=B;b<=M;b++){const bt=u[b]=w?qt(u[b]):Nt(u[b]);bt.key!=null&&V.set(bt.key,b)}let W,tt=0;const wt=M-B+1;let Ae=!1,ja=0;const Ye=new Array(wt);for(b=0;b<wt;b++)Ye[b]=0;for(b=L;b<=I;b++){const bt=c[b];if(tt>=wt){Pt(bt,v,_,!0);continue}let Tt;if(bt.key!=null)Tt=V.get(bt.key);else for(W=B;W<=M;W++)if(Ye[W-B]===0&&He(bt,u[W])){Tt=W;break}Tt===void 0?Pt(bt,v,_,!0):(Ye[Tt-B]=b+1,Tt>=ja?ja=Tt:Ae=!0,N(bt,u[Tt],h,null,v,_,E,x,w),tt++)}const za=Ae?Gl(Ye):Ie;for(W=za.length-1,b=wt-1;b>=0;b--){const bt=B+b,Tt=u[bt],Ba=bt+1<T?u[bt+1].el:p;Ye[b]===0?N(null,Tt,h,Ba,v,_,E,x,w):Ae&&(W<0||b!==za[W]?oe(Tt,h,Ba,2):W--)}}},oe=(c,u,h,p,v=null)=>{const{el:_,type:E,transition:x,children:w,shapeFlag:b}=c;if(b&6){oe(c.component.subTree,u,h,p);return}if(b&128){c.suspense.move(u,h,p);return}if(b&64){E.move(c,u,h,we);return}if(E===vt){r(_,u,h);for(let I=0;I<w.length;I++)oe(w[I],u,h,p);r(c.anchor,u,h);return}if(E===Dn){F(c,u,h);return}if(p!==2&&b&1&&x)if(p===0)x.beforeEnter(_),r(_,u,h),pt(()=>x.enter(_),v);else{const{leave:I,delayLeave:M,afterLeave:L}=x,B=()=>r(_,u,h),V=()=>{I(_,()=>{B(),L&&L()})};M?M(_,B,V):V()}else r(_,u,h)},Pt=(c,u,h,p=!1,v=!1)=>{const{type:_,props:E,ref:x,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:I,dirs:M}=c;if(x!=null&&Dr(x,null,h,c,!0),T&256){u.ctx.deactivate(c);return}const L=T&1&&M,B=!zn(c);let V;if(B&&(V=E&&E.onVnodeBeforeUnmount)&&Mt(V,u,c),T&6)bo(c.component,h,p);else{if(T&128){c.suspense.unmount(h,p);return}L&&le(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,h,v,we,p):b&&(_!==vt||I>0&&I&64)?zt(b,u,h,!1,!0):(_===vt&&I&384||!v&&T&16)&&zt(w,u,h),p&&Fa(c)}(B&&(V=E&&E.onVnodeUnmounted)||L)&&pt(()=>{V&&Mt(V,u,c),L&&le(c,null,u,"unmounted")},h)},Fa=c=>{const{type:u,el:h,anchor:p,transition:v}=c;if(u===vt){go(h,p);return}if(u===Dn){P(c);return}const _=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:x}=v,w=()=>E(h,_);x?x(c.el,_,w):w()}else _()},go=(c,u)=>{let h;for(;c!==u;)h=g(c),a(c),c=h;a(u)},bo=(c,u,h)=>{const{bum:p,scope:v,update:_,subTree:E,um:x}=c;p&&yr(p),v.stop(),_&&(_.active=!1,Pt(E,c,u,h)),x&&pt(x,u),pt(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},zt=(c,u,h,p=!1,v=!1,_=0)=>{for(let E=_;E<c.length;E++)Pt(c[E],u,h,p,v)},xn=c=>c.shapeFlag&6?xn(c.component.subTree):c.shapeFlag&128?c.suspense.next():g(c.anchor||c.el),La=(c,u,h)=>{c==null?u._vnode&&Pt(u._vnode,null,null,!0):N(u._vnode||null,c,u,null,null,null,h),Xa(),hs(),u._vnode=c},we={p:N,um:Pt,m:oe,r:Fa,mt:pr,mc:_t,pc:K,pbc:jt,n:xn,o:t};let vr,gr;return e&&([vr,gr]=e(we)),{render:La,hydrate:vr,createApp:Yl(La,vr)}}function ce({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ts(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=qt(a[i]),o.el=s.el),n||Ts(s,o)),o.type===cr&&(o.el=s.el)}}function Gl(t){const e=t.slice(),n=[0];let r,a,i,s,o;const l=t.length;for(r=0;r<l;r++){const f=t[r];if(f!==0){if(a=n[n.length-1],t[a]<f){e[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,t[n[o]]<f?i=o+1:s=o;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=e[s];return n}const tc=t=>t.__isTeleport,vt=Symbol.for("v-fgt"),cr=Symbol.for("v-txt"),be=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),Je=[];let Ot=null;function nt(t=!1){Je.push(Ot=t?null:[])}function ec(){Je.pop(),Ot=Je[Je.length-1]||null}let rn=1;function ii(t){rn+=t}function Ms(t){return t.dynamicChildren=rn>0?Ot||Ie:null,ec(),rn>0&&Ot&&Ot.push(t),t}function rt(t,e,n,r,a,i){return Ms(y(t,e,n,r,a,i,!0))}function nc(t,e,n,r,a){return Ms(D(t,e,n,r,a,!0))}function Ur(t){return t?t.__v_isVNode===!0:!1}function He(t,e){return t.type===e.type&&t.key===e.key}const fr="__vInternal",Ns=({key:t})=>t??null,Un=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?at(t)||ut(t)||j(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,r=0,a=null,i=t===vt?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ns(e),ref:e&&Un(e),scopeId:or,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Et};return o?(ba(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=at(n)?8:16),rn>0&&!s&&Ot&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ot.push(l),l}const D=rc;function rc(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===yl)&&(t=be),Ur(t)){const o=Re(t,e,!0);return n&&ba(o,n),rn>0&&!i&&Ot&&(o.shapeFlag&6?Ot[Ot.indexOf(t)]=o:Ot.push(o)),o.patchFlag|=-2,o}if(hc(t)&&(t=t.__vccOpts),e){e=ac(e);let{class:o,style:l}=e;o&&!at(o)&&(e.class=sa(o)),q(l)&&(os(l)&&!R(l)&&(l=ot({},l)),e.style=ia(l))}const s=at(t)?1:_l(t)?128:tc(t)?64:q(t)?4:j(t)?2:0;return y(t,e,n,r,a,s,i,!0)}function ac(t){return t?os(t)||fr in t?ot({},t):t:null}function Re(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=t,o=e?ic(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Ns(o),ref:e&&e.ref?n&&a?R(a)?a.concat(Un(e)):[a,Un(e)]:Un(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Re(t.ssContent),ssFallback:t.ssFallback&&Re(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Zt(t=" ",e=0){return D(cr,null,t,e)}function De(t,e){const n=D(Dn,null,t);return n.staticCount=e,n}function Rs(t="",e=!1){return e?(nt(),nc(be,null,t)):D(be,null,t)}function Nt(t){return t==null||typeof t=="boolean"?D(be):R(t)?D(vt,null,t.slice()):typeof t=="object"?qt(t):D(cr,null,String(t))}function qt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Re(t)}function ba(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),ba(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(fr in e)?e._ctx=Et:a===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[Zt(e)]):n=8);t.children=e,t.shapeFlag|=n}function ic(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=sa([e.class,r.class]));else if(a==="style")e.style=ia([e.style,r.style]);else if(Gn(a)){const i=e[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(e[a]=i?[].concat(i,s):s)}else a!==""&&(e[a]=r[a])}return e}function Mt(t,e,n,r=null){St(t,e,7,[n,r])}const sc=Es();let oc=0;function lc(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||sc,i={uid:oc++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cs(r,a),emitsOptions:vs(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hl.bind(null,i),t.ce&&t.ce(i),i}let st=null,ya,ke,si="__VUE_INSTANCE_SETTERS__";(ke=Sr()[si])||(ke=Sr()[si]=[]),ke.push(t=>st=t),ya=t=>{ke.length>1?ke.forEach(e=>e(t)):ke[0](t)};const Fe=t=>{ya(t),t.scope.on()},ve=()=>{st&&st.scope.off(),ya(null)};function Fs(t){return t.vnode.shapeFlag&4}let an=!1;function cc(t,e=!1){an=e;const{props:n,children:r}=t.vnode,a=Fs(t);Wl(t,n,a,e),Xl(t,r);const i=a?fc(t,e):void 0;return an=!1,i}function fc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ls(new Proxy(t.ctx,Ll));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?dc(t):null;Fe(t),ze();const i=te(r,t,0,[t.props,a]);if(Be(),ve(),Wi(i)){if(i.then(ve,ve),e)return i.then(s=>{oi(t,s,e)}).catch(s=>{ir(s,t,0)});t.asyncDep=i}else oi(t,i,e)}else Ls(t,e)}function oi(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:q(e)&&(t.setupState=us(e)),Ls(t,n)}let li;function Ls(t,e,n){const r=t.type;if(!t.render){if(!e&&li&&!r.render){const a=r.template||va(t).template;if(a){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:l}=r,f=ot(ot({isCustomElement:i,delimiters:o},s),l);r.render=li(a,f)}}t.render=r.render||It}{Fe(t),ze();try{jl(t)}finally{Be(),ve()}}}function uc(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function dc(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return uc(t)},slots:t.slots,emit:t.emit,expose:e}}function xa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(us(ls(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qe)return Qe[n](t)},has(e,n){return n in e||n in Qe}}))}function mc(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function hc(t){return j(t)&&"__vccOpts"in t}const fe=(t,e)=>ol(t,e,an);function pc(t,e,n){const r=arguments.length;return r===2?q(e)&&!R(e)?Ur(e)?D(t,null,[e]):D(t,e):D(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ur(n)&&(n=[n]),D(t,e,n))}const vc=Symbol.for("v-scx"),gc=()=>Bn(vc),bc="3.3.8",yc="http://www.w3.org/2000/svg",de=typeof document<"u"?document:null,ci=de&&de.createElement("template"),xc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?de.createElementNS(yc,t):de.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>de.createTextNode(t),createComment:t=>de.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>de.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const s=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ci.innerHTML=r?`<svg>${t}</svg>`:t;const o=ci.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_c=Symbol("_vtc");function wc(t,e,n){const r=t[_c];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ac=Symbol("_vod");function kc(t,e,n){const r=t.style,a=at(n);if(n&&!a){if(e&&!at(e))for(const i in e)n[i]==null&&$r(r,i,"");for(const i in n)$r(r,i,n[i])}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Ac in t&&(r.display=i)}}const fi=/\s*!important$/;function $r(t,e,n){if(R(n))n.forEach(r=>$r(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ec(t,e);fi.test(n)?t.setProperty(je(r),n.replace(fi,""),"important"):t[r]=n}}const ui=["Webkit","Moz","ms"],wr={};function Ec(t,e){const n=wr[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return wr[e]=r;r=rr(r);for(let a=0;a<ui.length;a++){const i=ui[a]+r;if(i in t)return wr[e]=i}return e}const di="http://www.w3.org/1999/xlink";function Oc(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(di,e.slice(6,e.length)):t.setAttributeNS(di,e,n);else{const i=To(e);n==null||i&&!Xi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cc(t,e,n,r,a,i,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,a,i),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const f=o==="OPTION"?t.getAttribute("value"):t.value,d=n??"";f!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=Xi(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ic(t,e,n,r){t.addEventListener(e,n,r)}function Sc(t,e,n,r){t.removeEventListener(e,n,r)}const mi=Symbol("_vei");function Pc(t,e,n,r,a=null){const i=t[mi]||(t[mi]={}),s=i[e];if(r&&s)s.value=r;else{const[o,l]=Tc(e);if(r){const f=i[e]=Rc(r,a);Ic(t,o,f,l)}else s&&(Sc(t,o,s,l),i[e]=void 0)}}const hi=/(?:Once|Passive|Capture)$/;function Tc(t){let e;if(hi.test(t)){e={};let r;for(;r=t.match(hi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):je(t.slice(2)),e]}let Ar=0;const Mc=Promise.resolve(),Nc=()=>Ar||(Mc.then(()=>Ar=0),Ar=Date.now());function Rc(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;St(Fc(r,n.value),e,5,[r])};return n.value=t,n.attached=Nc(),n}function Fc(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const pi=/^on[a-z]/,Lc=(t,e,n,r,a=!1,i,s,o,l)=>{e==="class"?wc(t,r,a):e==="style"?kc(t,n,r):Gn(e)?na(e)||Pc(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jc(t,e,r,a))?Cc(t,e,r,i,s,o,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Oc(t,e,r,a))};function jc(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&pi.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||pi.test(e)&&at(n)?!1:e in t}const zc=ot({patchProp:Lc},xc);let vi;function Bc(){return vi||(vi=Jl(zc))}const Dc=(...t)=>{const e=Bc().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Uc(r);if(!a)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},e};function Uc(t){return at(t)?document.querySelector(t):t}function gi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gi(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qn(t){"@babel/helpers - typeof";return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qn(t)}function $c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Yc(t,e,n){return e&&bi(t.prototype,e),n&&bi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _a(t,e){return Wc(t)||Vc(t,e)||js(t,e)||Qc()}function mn(t){return Hc(t)||Kc(t)||js(t)||Xc()}function Hc(t){if(Array.isArray(t))return Yr(t)}function Wc(t){if(Array.isArray(t))return t}function Kc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Vc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(t);!(a=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function js(t,e){if(t){if(typeof t=="string")return Yr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(t,e)}}function Yr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Xc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yi=function(){},wa={},zs={},Bs=null,Ds={mark:yi,measure:yi};try{typeof window<"u"&&(wa=window),typeof document<"u"&&(zs=document),typeof MutationObserver<"u"&&(Bs=MutationObserver),typeof performance<"u"&&(Ds=performance)}catch{}var Jc=wa.navigator||{},xi=Jc.userAgent,_i=xi===void 0?"":xi,ne=wa,Q=zs,wi=Bs,Cn=Ds;ne.document;var Vt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Us=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),In,Sn,Pn,Tn,Mn,Yt="___FONT_AWESOME___",Hr=16,$s="fa",Ys="svg-inline--fa",ye="data-fa-i2svg",Wr="data-fa-pseudo-element",qc="data-fa-pseudo-element-pending",Aa="data-prefix",ka="data-icon",Ai="fontawesome-i2svg",Zc="async",Gc=["HTML","HEAD","STYLE","SCRIPT"],Hs=function(){try{return!0}catch{return!1}}(),X="classic",G="sharp",Ea=[X,G];function hn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[X]}})}var sn=hn((In={},it(In,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),it(In,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),In)),on=hn((Sn={},it(Sn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(Sn,G,{solid:"fass",regular:"fasr",light:"fasl"}),Sn)),ln=hn((Pn={},it(Pn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(Pn,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Pn)),tf=hn((Tn={},it(Tn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(Tn,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Tn)),ef=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ws="fa-layers-text",nf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,rf=hn((Mn={},it(Mn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it(Mn,G,{900:"fass",400:"fasr",300:"fasl"}),Mn)),Ks=[1,2,3,4,5,6,7,8,9,10],af=Ks.concat([11,12,13,14,15,16,17,18,19,20]),sf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],me={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cn=new Set;Object.keys(on[X]).map(cn.add.bind(cn));Object.keys(on[G]).map(cn.add.bind(cn));var of=[].concat(Ea,mn(cn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",me.GROUP,me.SWAP_OPACITY,me.PRIMARY,me.SECONDARY]).concat(Ks.map(function(t){return"".concat(t,"x")})).concat(af.map(function(t){return"w-".concat(t)})),qe=ne.FontAwesomeConfig||{};function lf(t){var e=Q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cf(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Q&&typeof Q.querySelector=="function"){var ff=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ff.forEach(function(t){var e=_a(t,2),n=e[0],r=e[1],a=cf(lf(n));a!=null&&(qe[r]=a)})}var Vs={styleDefault:"solid",familyDefault:"classic",cssPrefix:$s,replacementClass:Ys,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qe.familyPrefix&&(qe.cssPrefix=qe.familyPrefix);var Le=C(C({},Vs),qe);Le.autoReplaceSvg||(Le.observeMutations=!1);var S={};Object.keys(Vs).forEach(function(t){Object.defineProperty(S,t,{enumerable:!0,set:function(n){Le[t]=n,Ze.forEach(function(r){return r(S)})},get:function(){return Le[t]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(e){Le.cssPrefix=e,Ze.forEach(function(n){return n(S)})},get:function(){return Le.cssPrefix}});ne.FontAwesomeConfig=S;var Ze=[];function uf(t){return Ze.push(t),function(){Ze.splice(Ze.indexOf(t),1)}}var Jt=Hr,Ft={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function df(t){if(!(!t||!Vt)){var e=Q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return Q.head.insertBefore(e,r),t}}var mf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fn(){for(var t=12,e="";t-- >0;)e+=mf[Math.random()*62|0];return e}function Ue(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Oa(t){return t.classList?Ue(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Xs(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Xs(t[n]),'" ')},"").trim()}function ur(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ca(t){return t.size!==Ft.size||t.x!==Ft.x||t.y!==Ft.y||t.rotate!==Ft.rotate||t.flipX||t.flipY}function pf(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function vf(t){var e=t.transform,n=t.width,r=n===void 0?Hr:n,a=t.height,i=a===void 0?Hr:a,s=t.startCentered,o=s===void 0?!1:s,l="";return o&&Us?l+="translate(".concat(e.x/Jt-r/2,"em, ").concat(e.y/Jt-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/Jt,"em), calc(-50% + ").concat(e.y/Jt,"em)) "):l+="translate(".concat(e.x/Jt,"em, ").concat(e.y/Jt,"em) "),l+="scale(".concat(e.size/Jt*(e.flipX?-1:1),", ").concat(e.size/Jt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var gf=`:root, :host {
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
}`;function Qs(){var t=$s,e=Ys,n=S.cssPrefix,r=S.replacementClass,a=gf;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var ki=!1;function kr(){S.autoAddCss&&!ki&&(df(Qs()),ki=!0)}var bf={mixout:function(){return{dom:{css:Qs,insertCss:kr}}},hooks:function(){return{beforeDOMElementCreation:function(){kr()},beforeI2svg:function(){kr()}}}},Ht=ne||{};Ht[Yt]||(Ht[Yt]={});Ht[Yt].styles||(Ht[Yt].styles={});Ht[Yt].hooks||(Ht[Yt].hooks={});Ht[Yt].shims||(Ht[Yt].shims=[]);var Ct=Ht[Yt],Js=[],yf=function t(){Q.removeEventListener("DOMContentLoaded",t),Jn=1,Js.map(function(e){return e()})},Jn=!1;Vt&&(Jn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Jn||Q.addEventListener("DOMContentLoaded",yf));function xf(t){Vt&&(Jn?setTimeout(t,0):Js.push(t))}function pn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Xs(t):"<".concat(e," ").concat(hf(r),">").concat(i.map(pn).join(""),"</").concat(e,">")}function Ei(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _f=function(e,n){return function(r,a,i,s){return e.call(n,r,a,i,s)}},Er=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=a!==void 0?_f(n,a):n,l,f,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<s;l++)f=i[l],d=o(d,e[f],f,e);return d};function wf(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Kr(t){var e=wf(t);return e.length===1?e[0].toString(16):null}function Af(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Vr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(e);typeof Ct.hooks.addPack=="function"&&!a?Ct.hooks.addPack(t,Oi(e)):Ct.styles[t]=C(C({},Ct.styles[t]||{}),i),t==="fas"&&Vr("fa",e)}var Nn,Rn,Fn,Oe=Ct.styles,kf=Ct.shims,Ef=(Nn={},it(Nn,X,Object.values(ln[X])),it(Nn,G,Object.values(ln[G])),Nn),Ia=null,qs={},Zs={},Gs={},to={},eo={},Of=(Rn={},it(Rn,X,Object.keys(sn[X])),it(Rn,G,Object.keys(sn[G])),Rn);function Cf(t){return~of.indexOf(t)}function If(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Cf(a)?a:null}var no=function(){var e=function(i){return Er(Oe,function(s,o,l){return s[l]=Er(o,i,{}),s},{})};qs=e(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Zs=e(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),eo=e(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Oe||S.autoFetchSvg,r=Er(kf,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Gs=r.names,to=r.unicodes,Ia=dr(S.styleDefault,{family:S.familyDefault})};uf(function(t){Ia=dr(t.styleDefault,{family:S.familyDefault})});no();function Sa(t,e){return(qs[t]||{})[e]}function Sf(t,e){return(Zs[t]||{})[e]}function he(t,e){return(eo[t]||{})[e]}function ro(t){return Gs[t]||{prefix:null,iconName:null}}function Pf(t){var e=to[t],n=Sa("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return Ia}var Pa=function(){return{prefix:null,iconName:null,rest:[]}};function dr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?X:n,a=sn[r][t],i=on[r][t]||on[r][a],s=t in Ct.styles?t:null;return i||s||null}var Ci=(Fn={},it(Fn,X,Object.keys(ln[X])),it(Fn,G,Object.keys(ln[G])),Fn);function mr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},it(e,X,"".concat(S.cssPrefix,"-").concat(X)),it(e,G,"".concat(S.cssPrefix,"-").concat(G)),e),s=null,o=X;(t.includes(i[X])||t.some(function(f){return Ci[X].includes(f)}))&&(o=X),(t.includes(i[G])||t.some(function(f){return Ci[G].includes(f)}))&&(o=G);var l=t.reduce(function(f,d){var m=If(S.cssPrefix,d);if(Oe[d]?(d=Ef[o].includes(d)?tf[o][d]:d,s=d,f.prefix=d):Of[o].indexOf(d)>-1?(s=d,f.prefix=dr(d,{family:o})):m?f.iconName=m:d!==S.replacementClass&&d!==i[X]&&d!==i[G]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var g=s==="fa"?ro(f.iconName):{},A=he(f.prefix,f.iconName);g.prefix&&(s=null),f.iconName=g.iconName||A||f.iconName,f.prefix=g.prefix||f.prefix,f.prefix==="far"&&!Oe.far&&Oe.fas&&!S.autoFetchSvg&&(f.prefix="fas")}return f},Pa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===G&&(Oe.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=he(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=re()||"fas"),l}var Tf=function(){function t(){$c(this,t),this.definitions={}}return Yc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=C(C({},n.definitions[o]||{}),s[o]),Vr(o,s[o]);var l=ln[X][o];l&&Vr(l,s[o]),no()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,f=s.icon,d=f[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=f)}),n[o][l]=f}),n}}]),t}(),Ii=[],Ce={},Me={},Mf=Object.keys(Me);function Nf(t,e){var n=e.mixoutsTo;return Ii=t,Ce={},Object.keys(Me).forEach(function(r){Mf.indexOf(r)===-1&&delete Me[r]}),Ii.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Qn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Ce[s]||(Ce[s]=[]),Ce[s].push(i[s])})}r.provides&&r.provides(Me)}),n}function Xr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ce[t]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function xe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Ce[t]||[];a.forEach(function(i){i.apply(null,n)})}function Wt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Me[t]?Me[t].apply(null,e):void 0}function Qr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||re();if(e)return e=he(n,e)||e,Ei(ao.definitions,n,e)||Ei(Ct.styles,n,e)}var ao=new Tf,Rf=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,xe("noAuto")},Ff={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(xe("beforeI2svg",e),Wt("pseudoElements2svg",e),Wt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,xf(function(){jf({autoReplaceSvgRoot:n}),xe("watch",e)})}},Lf={icon:function(e){if(e===null)return null;if(Qn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:he(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=dr(e[0]);return{prefix:r,iconName:he(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(S.cssPrefix,"-"))>-1||e.match(ef))){var a=mr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||re(),iconName:he(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=re();return{prefix:i,iconName:he(i,e)||e}}}},yt={noAuto:Rf,config:S,dom:Ff,parse:Lf,library:ao,findIconDefinition:Qr,toHtml:pn},jf=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Ct.styles).length>0||S.autoFetchSvg)&&Vt&&S.autoReplaceSvg&&yt.dom.i2svg({node:r})};function hr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Vt){var r=Q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function zf(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,s=t.transform;if(Ca(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=ur(C(C({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Bf(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,s=i===!0?"".concat(e,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:s}),children:r}]}]}function Ta(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,s=t.transform,o=t.symbol,l=t.title,f=t.maskId,d=t.titleId,m=t.extra,g=t.watchable,A=g===void 0?!1:g,z=r.found?r:n,N=z.width,U=z.height,k=a==="fak",O=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(xt){return m.classes.indexOf(xt)===-1}).filter(function(xt){return xt!==""||!!xt}).concat(m.classes).join(" "),F={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(U)})},P=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/U*16*.0625,"em")}:{};A&&(F.attributes[ye]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||fn())},children:[l]}),delete F.attributes.title);var H=C(C({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:C(C({},P),m.styles)}),lt=r.found&&n.found?Wt("generateAbstractMask",H)||{children:[],attributes:{}}:Wt("generateAbstractIcon",H)||{children:[],attributes:{}},ct=lt.children,_t=lt.attributes;return H.children=ct,H.attributes=_t,o?Bf(H):zf(H)}function Si(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,s=t.extra,o=t.watchable,l=o===void 0?!1:o,f=C(C(C({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[ye]="");var d=C({},s.styles);Ca(a)&&(d.transform=vf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ur(d);m.length>0&&(f.style=m);var g=[];return g.push({tag:"span",attributes:f,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Df(t){var e=t.content,n=t.title,r=t.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ur(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Or=Ct.styles;function Jr(t){var e=t[0],n=t[1],r=t.slice(4),a=_a(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(me.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(me.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(me.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var Uf={found:!1,width:512,height:512};function $f(t,e){!Hs&&!S.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function qr(t,e){var n=e;return e==="fa"&&S.styleDefault!==null&&(e=re()),new Promise(function(r,a){if(Wt("missingIconAbstract"),n==="fa"){var i=ro(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Or[e]&&Or[e][t]){var s=Or[e][t];return r(Jr(s))}$f(t,e),r(C(C({},Uf),{},{icon:S.showMissingIcons&&t?Wt("missingIconAbstract")||{}:{}}))})}var Pi=function(){},Zr=S.measurePerformance&&Cn&&Cn.mark&&Cn.measure?Cn:{mark:Pi,measure:Pi},Ve='FA "6.4.2"',Yf=function(e){return Zr.mark("".concat(Ve," ").concat(e," begins")),function(){return io(e)}},io=function(e){Zr.mark("".concat(Ve," ").concat(e," ends")),Zr.measure("".concat(Ve," ").concat(e),"".concat(Ve," ").concat(e," begins"),"".concat(Ve," ").concat(e," ends"))},Ma={begin:Yf,end:io},$n=function(){};function Ti(t){var e=t.getAttribute?t.getAttribute(ye):null;return typeof e=="string"}function Hf(t){var e=t.getAttribute?t.getAttribute(Aa):null,n=t.getAttribute?t.getAttribute(ka):null;return e&&n}function Wf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(S.replacementClass)}function Kf(){if(S.autoReplaceSvg===!0)return Yn.replace;var t=Yn[S.autoReplaceSvg];return t||Yn.replace}function Vf(t){return Q.createElementNS("http://www.w3.org/2000/svg",t)}function Xf(t){return Q.createElement(t)}function so(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Vf:Xf:n;if(typeof t=="string")return Q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])});var i=t.children||[];return i.forEach(function(s){a.appendChild(so(s,{ceFn:r}))}),a}function Qf(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Yn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(so(a),n)}),n.getAttribute(ye)===null&&S.keepOriginalSource){var r=Q.createComment(Qf(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Oa(n).indexOf(S.replacementClass))return Yn.replace(e);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===S.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return pn(o)}).join(`
`);n.setAttribute(ye,""),n.innerHTML=s}};function Mi(t){t()}function oo(t,e){var n=typeof e=="function"?e:$n;if(t.length===0)n();else{var r=Mi;S.mutateApproach===Zc&&(r=ne.requestAnimationFrame||Mi),r(function(){var a=Kf(),i=Ma.begin("mutate");t.map(a),i(),n()})}}var Na=!1;function lo(){Na=!0}function Gr(){Na=!1}var qn=null;function Ni(t){if(wi&&S.observeMutations){var e=t.treeCallback,n=e===void 0?$n:e,r=t.nodeCallback,a=r===void 0?$n:r,i=t.pseudoElementsCallback,s=i===void 0?$n:i,o=t.observeMutationsRoot,l=o===void 0?Q:o;qn=new wi(function(f){if(!Na){var d=re();Ue(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ti(m.addedNodes[0])&&(S.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Ti(m.target)&&~sf.indexOf(m.attributeName))if(m.attributeName==="class"&&Hf(m.target)){var g=mr(Oa(m.target)),A=g.prefix,z=g.iconName;m.target.setAttribute(Aa,A||d),z&&m.target.setAttribute(ka,z)}else Wf(m.target)&&a(m.target)})}}),Vt&&qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jf(){qn&&qn.disconnect()}function qf(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Zf(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=mr(Oa(t));return a.prefix||(a.prefix=re()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Sf(a.prefix,t.innerText)||Sa(a.prefix,Kr(t.innerText))),!a.iconName&&S.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Gf(t){var e=Ue(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return S.autoA11y&&(n?e["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||fn()):(e["aria-hidden"]="true",e.focusable="false")),e}function tu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ft,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ri(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Zf(t),r=n.iconName,a=n.prefix,i=n.rest,s=Gf(t),o=Xr("parseNodeAttributes",{},t),l=e.styleParser?qf(t):[];return C({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Ft,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var eu=Ct.styles;function co(t){var e=S.autoReplaceSvg==="nest"?Ri(t,{styleParser:!1}):Ri(t);return~e.extra.classes.indexOf(Ws)?Wt("generateLayersText",t,e):Wt("generateSvgReplacementMutation",t,e)}var ae=new Set;Ea.map(function(t){ae.add("fa-".concat(t))});Object.keys(sn[X]).map(ae.add.bind(ae));Object.keys(sn[G]).map(ae.add.bind(ae));ae=mn(ae);function Fi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(Ai,"-").concat(m))},a=function(m){return n.remove("".concat(Ai,"-").concat(m))},i=S.autoFetchSvg?ae:Ea.map(function(d){return"fa-".concat(d)}).concat(Object.keys(eu));i.includes("fa")||i.push("fa");var s=[".".concat(Ws,":not([").concat(ye,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ye,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Ue(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ma.begin("onTree"),f=o.reduce(function(d,m){try{var g=co(m);g&&d.push(g)}catch(A){Hs||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(g){oo(g,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(g){l(),m(g)})})}function nu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;co(t).then(function(n){n&&oo([n],e)})}function ru(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Qr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Qr(a||{})),t(r,C(C({},n),{},{mask:a}))}}var au=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ft:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,d=f===void 0?null:f,m=n.title,g=m===void 0?null:m,A=n.titleId,z=A===void 0?null:A,N=n.classes,U=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,P=F===void 0?{}:F;if(e){var H=e.prefix,lt=e.iconName,ct=e.icon;return hr(C({type:"icon"},e),function(){return xe("beforeDOMElementCreation",{iconDefinition:e,params:n}),S.autoA11y&&(g?O["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(z||fn()):(O["aria-hidden"]="true",O.focusable="false")),Ta({icons:{main:Jr(ct),mask:l?Jr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:lt,transform:C(C({},Ft),a),symbol:s,title:g,maskId:d,titleId:z,extra:{attributes:O,styles:P,classes:U}})})}},iu={mixout:function(){return{icon:ru(au)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fi,n.nodeCallback=nu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?Q:r,i=n.callback,s=i===void 0?function(){}:i;return Fi(a,s)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(A,z){Promise.all([qr(a,o),d.iconName?qr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var U=_a(N,2),k=U[0],O=U[1];A([n,Ta({icons:{main:k,mask:O},prefix:o,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:s,extra:g,watchable:!0})])}).catch(z)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=ur(o);l.length>0&&(a.style=l);var f;return Ca(s)&&(f=Wt("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},su={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return hr({type:"layer"},function(){xe("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(mn(i)).join(" ")},children:s}]})}}}},ou={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return hr({type:"counter",content:n},function(){return xe("beforeDOMElementCreation",{content:n,params:r}),Df({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(mn(o))}})})}}}},lu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ft:a,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,A=g===void 0?{}:g;return hr({type:"text",content:n},function(){return xe("beforeDOMElementCreation",{content:n,params:r}),Si({content:n,transform:C(C({},Ft),i),title:o,extra:{attributes:m,styles:A,classes:["".concat(S.cssPrefix,"-layers-text")].concat(mn(f))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Us){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/f,l=d.height/f}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Si({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},cu=new RegExp('"',"ug"),Li=[1105920,1112319];function fu(t){var e=t.replace(cu,""),n=Af(e,0),r=n>=Li[0]&&n<=Li[1],a=e.length===2?e[0]===e[1]:!1;return{value:Kr(a?e[0]:e),isSecondary:r||a}}function ji(t,e){var n="".concat(qc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ue(t.children),s=i.filter(function(ct){return ct.getAttribute(Wr)===e})[0],o=ne.getComputedStyle(t,e),l=o.getPropertyValue("font-family").match(nf),f=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?G:X,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?on[g][l[2].toLowerCase()]:rf[g][f],z=fu(m),N=z.value,U=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=Sa(A,N),F=O;if(k){var P=Pf(N);P.iconName&&P.prefix&&(O=P.iconName,A=P.prefix)}if(O&&!U&&(!s||s.getAttribute(Aa)!==A||s.getAttribute(ka)!==F)){t.setAttribute(n,F),s&&t.removeChild(s);var H=tu(),lt=H.extra;lt.attributes[Wr]=e,qr(O,A).then(function(ct){var _t=Ta(C(C({},H),{},{icons:{main:ct,mask:Pa()},prefix:A,iconName:F,extra:lt,watchable:!0})),xt=Q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(xt,t.firstChild):t.appendChild(xt),xt.outerHTML=_t.map(function(jt){return pn(jt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function uu(t){return Promise.all([ji(t,"::before"),ji(t,"::after")])}function du(t){return t.parentNode!==document.head&&!~Gc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zi(t){if(Vt)return new Promise(function(e,n){var r=Ue(t.querySelectorAll("*")).filter(du).map(uu),a=Ma.begin("searchPseudoElements");lo(),Promise.all(r).then(function(){a(),Gr(),e()}).catch(function(){a(),Gr(),n()})})}var mu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Q:r;S.searchPseudoElements&&zi(a)}}},Bi=!1,hu={mixout:function(){return{dom:{unwatch:function(){lo(),Bi=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Xr("mutationObserverCallbacks",{}))},noAuto:function(){Jf()},watch:function(n){var r=n.observeMutationsRoot;Bi?Gr():Ni(Xr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},pu={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},g={transform:"translate(".concat(s/2*-1," -256)")},A={outer:o,inner:m,path:g};return{tag:"g",attributes:C({},A.outer),children:[{tag:"g",attributes:C({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),A.path)}]}]}}}},Cr={x:0,y:0,width:"100%",height:"100%"};function Ui(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vu(t){return t.tag==="g"?t.children:[t]}var gu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?mr(a.split(" ").map(function(s){return s.trim()})):Pa();return i.prefix||(i.prefix=re()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,d=i.icon,m=s.width,g=s.icon,A=pf({transform:l,containerWidth:m,iconWidth:f}),z={tag:"rect",attributes:C(C({},Cr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ui)}:{},U={tag:"g",attributes:C({},A.inner),children:[Ui(C({tag:d.tag,attributes:C(C({},d.attributes),A.path)},N))]},k={tag:"g",attributes:C({},A.outer),children:[U]},O="mask-".concat(o||fn()),F="clip-".concat(o||fn()),P={tag:"mask",attributes:C(C({},Cr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:vu(g)},P]};return r.push(H,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},Cr)}),{children:r,attributes:a}}}},bu={provides:function(e){var n=!1;ne.matchMedia&&(n=ne.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=C(C({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},xu=[bf,iu,su,ou,lu,mu,hu,pu,gu,bu,yu];Nf(xu,{mixoutsTo:yt});yt.noAuto;yt.config;var _u=yt.library;yt.dom;var ta=yt.parse;yt.findIconDefinition;yt.toHtml;var wu=yt.icon;yt.layer;yt.text;yt.counter;function $i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Dt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$i(Object(n),!0).forEach(function(r){ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zn(t){"@babel/helpers - typeof";return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zn(t)}function ht(t,e,n){return e=Ou(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Au(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ku(t,e){if(t==null)return{};var n=Au(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Eu(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ou(t){var e=Eu(t,"string");return typeof e=="symbol"?e:String(e)}var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fo={exports:{}};(function(t){(function(e){var n=function(k,O,F){if(!f(O)||m(O)||g(O)||A(O)||l(O))return O;var P,H=0,lt=0;if(d(O))for(P=[],lt=O.length;H<lt;H++)P.push(n(k,O[H],F));else{P={};for(var ct in O)Object.prototype.hasOwnProperty.call(O,ct)&&(P[k(ct,F)]=n(k,O[ct],F))}return P},r=function(k,O){O=O||{};var F=O.separator||"_",P=O.split||/(?=[A-Z])/;return k.split(P).join(F)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(k,O){return r(k,O).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},f=function(k){return k===Object(k)},d=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},g=function(k){return o.call(k)=="[object RegExp]"},A=function(k){return o.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(P,H){return F(P,k,H)}},U={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(s,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=U:e.humps=U})(Cu)})(fo);var Iu=fo.exports,Su=["class","style"];function Pu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Iu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Tu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function uo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return uo(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var d=t.attributes[f];switch(f){case"class":l.class=Tu(d);break;case"style":l.style=Pu(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=ku(n,Su);return pc(t.tag,Dt(Dt(Dt({},e),{},{class:a.class,style:Dt(Dt({},a.style),s)},a.attrs),o),r)}var mo=!1;try{mo=!0}catch{}function Mu(){if(!mo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ir(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ht({},t,e):{}}function Nu(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ht(e,"fa-".concat(t.size),t.size!==null),ht(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ht(e,"fa-pull-".concat(t.pull),t.pull!==null),ht(e,"fa-swap-opacity",t.swapOpacity),ht(e,"fa-bounce",t.bounce),ht(e,"fa-shake",t.shake),ht(e,"fa-beat",t.beat),ht(e,"fa-fade",t.fade),ht(e,"fa-beat-fade",t.beatFade),ht(e,"fa-flash",t.flash),ht(e,"fa-spin-pulse",t.spinPulse),ht(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Yi(t){if(t&&Zn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ta.icon)return ta.icon(t);if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ru=kl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=fe(function(){return Yi(e.icon)}),i=fe(function(){return Ir("classes",Nu(e))}),s=fe(function(){return Ir("transform",typeof e.transform=="string"?ta.transform(e.transform):e.transform)}),o=fe(function(){return Ir("mask",Yi(e.mask))}),l=fe(function(){return wu(a.value,Dt(Dt(Dt(Dt({},i.value),s.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});jn(l,function(d){if(!d)return Mu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var f=fe(function(){return l.value?uo(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Fu={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},Lu={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ju={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},zu={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]},Bu={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Du={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const Uu="/F2ELegislator/assets/logo-39f3ca48.png",$u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI/SURBVHgB7Zc7b9NQFMf/105QiIPwEgaWGokFJKpWrCCFgYGHlGQgSibKykQ/AGqzsfH4AmUAJQ1Dw8RY2krMERJ0xJk7YCRSIgX7cG6N07hV6Y0fEkN+kuXr43vP/ftxzj0X+A8QiIlZWTOHudyCDlgEzZI2EuQQUW/YbnxU8RFZRK7eKumUKUOjJRDME7w7IK3rYtRkQTaSEiGffHS2sAKiJ1MNFOJF9tfPptN95By7hSngp7c06Js8yEI0bBfuraNvRVMdnYAAiaWzD/k2I4nQkVmLKWAsZJQrbGBaEUa9s8T/fAmJQSXf5xQiCFhB0gg8h6qIc7X1SkKfIQyHdYHDXEmEp+llpASRqCiJ4J4LSAuhldVEiLCIuaKBL6/u4dOz2zifz4bs0iYP2Q4wuc+HpyUecxfz1pHEKvxMqxyiAY/vXOZJ8pifM0NOb1wp+jY+bnI74Jq8vlo8EHb/+sWws7/pPnPqrAf5/3BteLvVZ6cX8GMwws7XvXG3nd09fO77GXl799AubYH9zXb/uG8opO18vfMtlejwZ+8NWrVFhc9BW0gLQk+eThWhwXuNlCDx+708K62iRqPz/cSaITr2oF27JBtq0eF5TSSOO/apXE8Y9XebSS1iJNDdb9WqwbVynsgOM1VeyGzEx/bIXZ40KItwulXH46oorhD+GZcjV1YSOfjMMLsoBF4iIoIyG0Zj/WHIhojIck+HtsoFbDlK5BDE6n77QTOWiElkXUAT+w5VPM5B/9oKzJgx4w8g7Ls9/Y1XlwAAAABJRU5ErkJggg==",Yu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMcSURBVHgB7VVbSFNhHP/NTT1u6SbrQkV2TJKJyEaUmkoqvbSS9Kkb0UYQ0UtXfMw5Iox6SKQQe1EJiqKHZZYv0VaRlRDOtKAy3ZSsdNo5M9O5za/vHJvt6u21fvCH8/2//+373w7wHwtAsgTZEkqG3C1MSVYmw3K8HyNjyfb210N2yjdTcmCZ0K1SS61VlauIqzeL+IazQ6ivp5Lo9fp+KmfEMnDKcEAV1XAw+ccvEYPBQKi8KdzAfCkyVVWurqaRYzFw4yo2Ze4Dx3Gl9GgL8KUx5I3UeG3AuGPAi7obo3jaPoH7beO4a+FFvmZz4pwCwyRhmhTCZrOx9Ngc4MdFMc7u2qkwBUfe0uZGU/MY8lIJjuXGQ/7LBzYtIUSJeDug0+mQtlpaQo+6+RyYrl9ezwYzTh5Xo7FhA1pfeZC2RoZBnkCbzYRq+Yeg1WqhVIgmYzpgaVGNGzfER3h1DnpRls9gYNgH9drIewE0/8jZJN6xsRyUHNmviqpstY6jKCcRz7s92KtPjriXSDVwOp00RbIQfriD8uJCRYSyUGS/2yd+P3w5iWgyiNfAYrHQFIp9Y4/qoGCbnEUUPKPdU7Y9SfyWKmVQpUQ2nyShFKPOF+ju84oxBfgh70lJlobkp65hFF3vptDf68EDk5oqTyM1VQaOn4FK+Tc2Sdx6NN8exG6tC1fuTDpivqBvwMMFny2tPFwOD7LXSVFzy423/T54XdPI0H0QHQfAew/CbDbDOexH31e/OeRlCEWTq1djCE8B555BV/ckhAUndBPn9oMO4qyBpMM4d/47chU3cejiqIOy0oN1w5PJMYlxxvAiMokScbCEyc3bKp8rskSmwYVaNfj311Df8hP8BBHWxLdg3fAustU3jtmEKBcCP1WMs9VKPL5XI87GwLCYGjsWATYjPaH/85vM6JtzJJ88eXSU7MjNIHSoyInyFcIWPR3LWKxtylKylutT2OICOe2Y2Uzae6bQ2TGBFGZW9eOg1/7pi+8MgrbnUmGk1KlUSEhOejzZk5dEKorkP1YqJVbKr1iMgcX+MlV/SIAD/xR+AyC3TIq0n99pAAAAAElFTkSuQmCC",Hu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAYAAAC803lsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB7ZZbSBRRGMf/3rZyW3e6qBFlU2EXijIDE4Ic9UUkUnuSTFwxFCWkhwqkyELIKEq7WRBh60tZhBE+9BKaeJdMs0Awc7ygZl52dVfby+x0zqab95nN7CH2txyG75xvvvPf75zvnAFcuHDxb+BIKyNthDSR9fegzxLSNPhD3OAcXGBgYGFGeiLLhR0EwzDgu8zQarWwDtVg0+o+PC838l/7hHDiyzsT2BkhsUknQ0tu5WyAWtn2u9djI9y8QtD1PRq3776AqeMxyZGIB68NGjKqlRtcrhA2JHhVWfWbbezCkVRw987AlevtMLXlwU0Ecp+OauSK8YA88ipKt3GMejF3M0RLFcI5DpWt+6A01UOwiRzfLxSTQR0kcIcMoiJU3JbNXg5bp7dBNyrM62sbL0D2+e2o7Q2GVQCzXu1WCBnIERK0I1DBTu9IyezB8YSuRcXk38lBgJ8HdgUoOPyqsiULYfbvWeEw+C4LlGYB91PVSE7tmV+MOIaAtY/QK4Tg6KFVtCdWahJZSzOdnBsDyDimsv/bqwkqxMV3orPbMleLpQHZF+JRWjdOzRipuLKE6Edt9qdOL6CxwYisolFkFertYgrSGWjSuh1iip7pHFnat3uI+HjiRKQ3S0xmsTk8IU0TPzkJrZrk5HWIifaxi8q6N4DcZLVDzIFgbzTWGED9L53zBUPOm8/9/rBN9NDXWRproUnkZERXWz/OTxmZaetAK2j/3pVIOe2H9PxhR2ZCfclxonC3+1BEaytYdqt9HBIZkbU09R8mtO+qjHP6qZjImDUOMR87LLh80R+Mz2RYsmkpaqXd7sBShRCe0LWfj6R4Bp6+ClS2mDCu8kLYYeWMcR/FGPQG+x7rxF8QwmuLddrmTz/mDNDDrblpAtdeGsi+8Jv5Ein14b4W1LWayqUmcKZ8z6Sf7eXnnhsi+WHmkkxSUW2E3mjDoF6UvG+c/QwIOpW4puzhzY2MlCPN1MGIL5gYs74a0IlxWAaCIo+sHml/v0O0DuxZsMVEqWii6AZlsYywu3euKCN7Qpwt6G0JK5JqoiLoZSeZuSmcXZrZcKRpiKgtZrPIGsaEpm+DQjPpy4eMq9+FCxf/BT8BYCRVtM8/1LMAAAAASUVORK5CYII=";const Xt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Wu={},Ku={class:"flex items-center justify-between px-8 w-full fixed bg-white",style:{"z-index":"500"}},Vu=De('<div class="flex" data-v-ab059fbd><img src="'+Uu+'" alt="選舉章" class="pr-6" data-v-ab059fbd><div class="flex items-center my-2 bg-mainBlack rounded-3xl text-white" data-v-ab059fbd><h3 class="px-2" data-v-ab059fbd>2024 立委</h3><div class="w-6 h-6 rounded-full bg-mainYellow text-center text-mainBlack font-bold" data-v-ab059fbd>3</div><h3 class="px-2" data-v-ab059fbd>號參選人</h3></div></div><div class="flex" data-v-ab059fbd><a href="#advocate" class="relative" data-v-ab059fbd><h4 class="mx-4 cursor-pointer" data-v-ab059fbd>候選人主張</h4><img src="'+$u+'" alt="message" class="absolute shake" style="top:-50%;left:-15%;" data-v-ab059fbd></a><a href="#news" data-v-ab059fbd><h4 class="mx-4 cursor-pointer" data-v-ab059fbd>最新活動</h4></a><a href="#policy" data-v-ab059fbd><h4 class="mx-4 cursor-pointer" data-v-ab059fbd>政策議題</h4></a><a href="#support" class="relative" data-v-ab059fbd><h4 class="mx-4 cursor-pointer" data-v-ab059fbd>小額捐款</h4><img src="'+Yu+'" alt="money1" class="absolute down" style="top:-90%;right:15%;" data-v-ab059fbd><img src="'+Hu+'" alt="money2" class="absolute down" style="top:-50%;right:-15%;" data-v-ab059fbd></a><a href="#contact" data-v-ab059fbd><h4 class="mx-4 cursor-pointer" data-v-ab059fbd>民眾服務信箱</h4></a></div>',2),Xu={class:"flex text-green text-2xl"};function Qu(t,e){const n=nn("font-awesome-icon");return nt(),rt("div",Ku,[Vu,y("div",Xu,[D(n,{icon:"fa-brands fa-facebook",class:"p-2"}),D(n,{icon:"fa-brands fa-instagram",class:"p-2"}),D(n,{icon:"fa-solid fa-share-nodes",class:"p-2"})])])}const Ju=Xt(Wu,[["render",Qu],["__scopeId","data-v-ab059fbd"]]),qu="/F2ELegislator/assets/homebg-012b586a.png",ho="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWxSURBVHgBvVuNcds2FH6kbKu+tld2gnKDeIPGEzSeIM4ESSewPYHjCeJMYGeCqhPImYDcgGlsS3epLfY9EVRU8AMJgIC+O54TiALwAXgP708JRUJFlO0RHSX8TIhe1PyXmzN+cu3Vkt8p+fMv/HxeEc2eiO5+5f9TBCQUEEJyn+iUCf7Bk39JI8ATmz0TffyX/zL5kgIhCOF7Jse7eTaWZA9umfzVz0yeRmIU4R0Q1VEy8TdjiHsR5qObHxBd8pdf2X6nbmSyTDXZXCm5Tpq/tn1dfyO6CHnUjVgSvX5kzgse1+V5aJRWH4lMTgy/+577n1v0WXCfpxQTPMhl3yRkIfg55+cafP7OZSxe2Fz1UwwQv6TQEO276Fn1lmitjqVMVn+H2z6QJ2QnB4jPq+5150027xuMJ/O+BvIHjn1BI7C148YjPpr0ANnivkc78+c3+ncqB8VkgpLzooe0/xg9x3i+HFhN3vl34DScUgCo3TbOre+7qekDpQyQZr09JDo+HLgS+JjfgeZeTW0LGZuvpWO+0j6iMZwVmVISaPVubPtQis5p9X3wYJBruT6tOuiR23ntKB886F8x5Fibb2Y43hVSYp0jzRbUGWGP5iRx9GDYDPyst+0FOtYtxKtiEifUFbFsOnS0lQbsHI97T1v5K5ue4M4+pwjwmjs6ymMMBiTHcswpEsQmsB7PsELFcuRlDhaxokhQ8lz17fJGhtlpf6t3wGr/4nCkR8KK7m+tKXsILMctVJTkSm/fa/TSd1TA9h1rCrZABsjC0ZFwgWmX29thvcP7QLCTANEFAZ+cW9D3C4oE0y5Pt608dF8uQ3kfFN6RGALSRxvltQuLaAEcCZbt3ygi0I0jXFNkCKy6imYUUH+868cUETzmJ71NuKYpkN8ayN0YxHQkTFgBHTQRwkiBPOEJekP6qzWzlBf6d4qIfcBBuKYgWvgldNRf2bv6BI5COxLbOFTZjO02yX6kNXAUKAJ24UgAlNr/M7mH8+2WJFJOB8lUGjmAn3a55CntCPtAV8SWY4QOYd6Jfygw+Ap6VQO3sI5/pDtIQcMvFBBVk0YxOeLRHAkThHC53VAH1JxVE3UQky4n8wReUiSsulzKtAaCTYEwxeGi/yGmI0FdhSzJvM51kYW4H5cN2UE3sHbIQLpAOOg2huinFJl9k5HHjAc7qnHsakZdszWL4UgYONxBwmPkSpTUFMevJfL5ZleOBOIgtkD6hAl7348/NEG/HAx2osy9nTgSCeCw4YoCAD7XhcgtCpXqodnYAYEKp2vXAYD1PfwMfMfEUZlIegbJLe/s1Y9aO3Ak8pCOxIEetKM1x+95KEPUo7KdRNVk81AZRIHudRQ//hpIWysuhSlktd5hcd9A0C47sLhWWuMCuJmipI6RMxLTkZg2SbR8u40X/VMn3GwIxA/uMu/sB4PcGncsVkbClAg0pluQ8lr0JKRslRRCjIyEYfHNCtElIVU1iecaPFY5ZCTH9yOOtXciEIVUF1rBSE8O2ToXZUi6D+oMBNN8rBKBS7PGnbfyvDDUV7gE71Fp06NHtLSnpMo+EWgqeRAZMcmtz+6AhXWW40d8It0LaJCMmR55lzyA6q5sHQmVNLsJOR+yrXkkT/iWNimZDVu2JPjWeDFlzytr44L8MdMbJgOOi2hdFUU5MsznhMZgOVB6KHI9puTP1pFQyqmvuHV0tcIGA5Vv7WBnPsSHSpvk39L3QMmyc0mVFSwUWSE77uJamhwJOboWRP0VlMMEh0p5N+TlCIpN3WePIwvJpgBd3vGp3fT6CYAccfZ4zhPb8j5G3XhkZdJNcOXkLgq33M+fPgU3XoRbyO5MDCGdSJCf9lzs/EceOhTxtxQp5EoBiLYIQriFHPXnhvzrAD/tmUnZAoeHrkNmNIMS3kat8kYSyZDsQtLEn3MC+ehaJcwlhyxRzZ/4iZW2/Q8N/qhDLs4VBQAAAABJRU5ErkJggg==",Zu="/F2ELegislator/assets/meow-34c09d2c.png",Gu="/F2ELegislator/assets/logoGreen-d3695462.png";const _e=t=>(un("data-v-8fbac859"),t=t(),dn(),t),td={class:"min-h-screen pt-16"},ed={class:"absolute h-1/4",style:{"z-index":"-50"}},nd=_e(()=>y("div",{class:"relative"},[y("img",{src:qu,alt:"homebg",class:"relative"})],-1)),rd={class:"absolute tracking-wider w-full",style:{top:"350%"}},ad=_e(()=>y("img",{src:ho,alt:"選舉章跑馬燈",class:"inline h-10 pb-2"},null,-1)),id={class:"flex justify-center items-center pt-32"},sd=De('<img src="'+Zu+'" alt="meow" data-v-8fbac859><div class="flex flex-col items-center tracking-widest" data-v-8fbac859><img src="'+Gu+'" alt="meow" data-v-8fbac859><h4 class="pt-6 text-9xl text-shadow text-mainBlack" data-v-8fbac859>台灣的明天</h4><h4 class="pt-6 text-9xl text-shadow text-mainBlack" data-v-8fbac859>喵先鋪路</h4><h4 class="mt-12 px-2 border-2 border-black text-2xl font-bold" data-v-8fbac859>2024立委3號參選人 少年立委 勤政愛民 愛您！！</h4></div><div class="pl-10" data-v-8fbac859><h6 data-v-8fbac859>20</h6><h6 data-v-8fbac859>24</h6><h6 class="text-center" data-v-8fbac859>|</h6><h6 data-v-8fbac859>01</h6><h6 class="text-center" data-v-8fbac859>|</h6><h6 data-v-8fbac859>13</h6><h6 data-v-8fbac859>由</h6><h6 data-v-8fbac859>您</h6><h6 data-v-8fbac859>選</h6><h6 data-v-8fbac859>擇</h6><h6 data-v-8fbac859>台</h6><h6 data-v-8fbac859>灣</h6><h6 data-v-8fbac859>的</h6><h6 data-v-8fbac859>未</h6><h6 data-v-8fbac859>來</h6></div>',3),od={class:"pl-3"},ld=_e(()=>y("div",{class:"flex items-center justify-center w-11 h-11 rounded-full bg-green text-white font-bold border-2 border-black text-2xl"},"3",-1)),cd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},fd={class:"text-2xl"},ud=_e(()=>y("h6",{class:"text-10"},"DAY",-1)),dd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},md={class:"text-2xl"},hd=_e(()=>y("h6",{class:"text-10"},"HOUR",-1)),pd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},vd={class:"text-2xl"},gd=_e(()=>y("h6",{class:"text-10"},"MIN",-1)),bd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},yd={class:"text-2xl"},xd=_e(()=>y("h6",{class:"text-10"},"SEC",-1)),_d={__name:"Home",setup(t){const e=Ut(0),n=Ut(0),r=Ut(0),a=Ut(0),i=new Date().getFullYear(),s=new Date(`January 13 ${i+1} 00:00:00`);function o(){const f=s-new Date;e.value=Math.floor(f/1e3)%60,n.value=Math.floor(f/1e3/60)%60,r.value=Math.floor(f/1e3/60/60)%24,a.value=Math.floor(f/1e3/60/60/24)}return setInterval(function(){o()},1e3),ws(()=>{o()}),(l,f)=>{const d=nn("marquee");return nt(),rt("div",td,[y("div",ed,[nd,y("div",rd,[D(d,{class:"transform rotate-9 py-2 text-64 bg-blue font-bold text-white tracking-widest"},{default:Xe(()=>[Zt(" 少年立委"),ad,Zt(" 清流參選 凍蒜！凍蒜！ 台灣的明天 喵先鋪路 ")]),_:1})])]),y("div",id,[sd,y("div",od,[ld,y("div",cd,[y("h4",fd,et(a.value),1),ud]),y("div",dd,[y("h4",md,et(r.value),1),hd]),y("div",pd,[y("h4",vd,et(n.value),1),gd]),y("div",bd,[y("h4",yd,et(e.value),1),xd])])])])}}},wd=Xt(_d,[["__scopeId","data-v-8fbac859"]]),Ad="/F2ELegislator/assets/puzzleMeow-0f0bc168.png",kd={},Ed={id:"advocate",class:"min-h-screen pt-60"},Od=De('<div class="flex justify-center"><div class="tracking-wider"><div class="relative"><h1 class="text-64 text-mainBlack">候選人主張</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider" style="top:-65%;">ADVOCATE</h1></div><h3 class="text-green text-4xl pt-20">我堅信 ! </h3><h3 class="text-xl pt-8">藉由推動更完善的貓咪福利和相關政策，</h3><h3 class="text-xl">更是間接地投資於<span class="text-mainYellow text-4xl">台灣的未來</span></h3><p class="text-sm pt-8">畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過</p><p class="text-sm">完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</p><p class="text-sm pt-8">因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能</p><p class="text-sm pb-4">得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</p><hr class="border-black w-1/2"><h3 class="text-green pt-8">護航台灣的幸福經濟，從照顧每一隻貓咪開始。</h3></div><img src="'+Ad+'" alt="puzzleMeow"></div>',1),Cd=[Od];function Id(t,e){return nt(),rt("div",Ed,Cd)}const Sd=Xt(kd,[["render",Id]]),Pd={},Td={id:"news",class:"min-h-screen pt-20"},Md=y("div",{class:"relative flex justify-center"},[y("h1",{class:"text-64 text-mainBlack"},"最新活動"),y("h1",{class:"absolute text-yellow text-92 font-light tracking-wider",style:{top:"-65%"}},"LATEST EVENTS")],-1),Nd=[Md];function Rd(t,e){return nt(),rt("div",Td,Nd)}const Fd=Xt(Pd,[["render",Rd]]);const po=t=>(un("data-v-4e8e67e1"),t=t(),dn(),t),Ld={id:"policy",class:"bg-image min-h-screen"},jd={class:"pt-60"},zd=po(()=>y("div",{class:"flex justify-center relative w-full"},[y("h1",{class:"text-64 text-mainBlack"},"政策議題"),y("h1",{class:"absolute text-92 font-light tracking-widest",style:{top:"-65%",color:"#FFFFFF80"}},"POLICY ISSUES")],-1)),Bd={class:"flex flex-col m-auto",style:{"max-width":"1080px"}},Dd={class:"flex justify-between"},Ud=["onClick"],$d={class:"absolute text-white bg-mainBlack rounded-3xl py-1 px-2",style:{left:"50%",transform:"translateX(-60%)",top:"-5%"}},Yd={key:0,class:"p-12 mt-6 bg-white rounded-xl"},Hd={class:"flex justify-between"},Wd={class:"text-28"},Kd={class:"flex items-center text-green text-xl"},Vd=po(()=>y("h3",null,"分享",-1)),Xd={class:"flex justify-between"},Qd={class:"pt-8"},Jd={class:"text-xl text-green"},qd={class:"pt-8"},Zd={class:"text-xl text-green"},Gd={class:"pt-8"},tm={class:"text-xl text-green"},em=["src"],nm={__name:"Policy",setup(t){const e=Ut(1),n=Ut([{id:1,title:"喵的保障",desc1:"寵物醫療",desc2:"保障方案",contentTitle:"為毛孩子謀福利！ 推動寵物醫療保障方案",image:"/src/assets/image/policy1.png",subTitle1:"設立寵物醫療基金",subContent1:"每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",subTitle2:"提供醫療補助",subContent2:"每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",subTitle3:"合作動物醫院",subContent3:"目前已有和超過 200 家動物醫院進行初步的合作討論"},{id:2,title:"喵的福利",desc1:"打造寵物",desc2:"休閒天堂",contentTitle:"為毛孩子謀福利！ 打造寵物休閒天堂",image:"/src/assets/image/policy2.png",subTitle1:"打造寵物休閒天堂",subContent1:"提撥3000萬新台幣，打造寵物休閒天堂",subTitle2:"提供寵物spa設施",subContent2:"正在跟飯店等spa設施負責人，溝通中",subTitle3:"美容玩樂兼具的天堂",subContent3:"為了打造寵物的天堂，已與多位寵物權威商討中"},{id:3,title:"喵的教育",desc1:"推廣寵物",desc2:"飼養教育",contentTitle:"領養代替購買，領養不棄養",image:"/src/assets/image/policy3.png",subTitle1:"與動物保護志工，攜手合作",subContent1:"與動物保護志工，攜手合作，照顧流浪動物",subTitle2:"進入學校，推廣教育",subContent2:"在小學推廣飼養教育，領養不棄養",subTitle3:"擔任志工，愛護毛小孩",subContent3:"舉辦多場志工活動，讓民眾體驗照顧毛小孩"}]);return(r,a)=>{const i=nn("font-awesome-icon");return nt(),rt("div",Ld,[y("div",jd,[zd,y("div",Bd,[y("div",Dd,[(nt(!0),rt(vt,null,Fr(n.value,s=>(nt(),rt("div",{key:s.id,class:"pr-6 relative"},[y("div",{class:"dialog-border-bottom rounded-xl flex flex-col p-3 items-center text-40 text-mainBlack",onClick:o=>e.value=s.id},[y("h4",null,et(s.desc1),1),y("h4",null,et(s.desc2),1)],8,Ud),y("div",$d,et(s.title),1)]))),128))]),(nt(!0),rt(vt,null,Fr(n.value,s=>(nt(),rt("div",{key:s.id},[s.id===e.value?(nt(),rt("div",Yd,[y("div",Hd,[y("h2",Wd,et(s.contentTitle),1),y("div",Kd,[Vd,D(i,{icon:"fa-brands fa-facebook",class:"p-2"}),D(i,{icon:"fa-brands fa-instagram",class:"p-2"})])]),y("div",Xd,[y("div",null,[y("div",Qd,[y("h2",Jd,et(s.subTitle1),1),y("h3",null,et(s.subContent1),1)]),y("div",qd,[y("h2",Zd,et(s.subTitle2),1),y("h3",null,et(s.subContent2),1)]),y("div",Gd,[y("h2",tm,et(s.subTitle3),1),y("h3",null,et(s.subContent3),1)])]),y("img",{src:s.image,alt:""},null,8,em)])])):Rs("",!0)]))),128))])])])}}},rm=Xt(nm,[["__scopeId","data-v-4e8e67e1"]]),am="/F2ELegislator/assets/product-c4b87659.png";const vn=t=>(un("data-v-6441d4c4"),t=t(),dn(),t),im={id:"support",class:"flex bg-image min-h-screen"},sm=vn(()=>y("div",null,[y("img",{src:am,alt:"product"})],-1)),om={class:"pt-28 flex-1"},lm=De('<div class="relative w-full" data-v-6441d4c4><h1 class="text-64 text-white" data-v-6441d4c4>小額捐款</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider w-full" style="top:-70%;" data-v-6441d4c4>SUPPORT US</h1></div><div class="text-white text-sm pt-20 tracking-wider" data-v-6441d4c4><p data-v-6441d4c4>邀請您一同加入保證金募資專案，任何一筆捐款，無論金額，都</p><p data-v-6441d4c4>能幫助喵喵我推動寵物福利。幫助喵喵我推動寵物福利。</p><p class="pt-8" data-v-6441d4c4>本專案募集資金將100%用於參選保證金，並且公開專案帳目；</p><p data-v-6441d4c4>當選後，退還的保證金將提撥給地方黨部，作為黨務運作之</p><p data-v-6441d4c4>用。</p><p class="pt-8" data-v-6441d4c4>您的支持，會直接幫助喵喵黨能在各地推出更多的候選人，並在</p><p data-v-6441d4c4>各地繼續深耕。</p></div>',2),cm={class:"flex flex-col"},fm={class:"flex items-center text-white"},um=vn(()=>y("h4",{class:"pr-6 text-xl"},"募款累計",-1)),dm={class:"flex flex-col items-end"},mm={class:"text-5xl"},hm=vn(()=>y("h4",{class:"text-gray"},"需要保證金 1000 萬",-1)),pm={class:"flex"},vm={key:0,class:"flex flex-col items-center"},gm={class:"text-2xl text-white pb-4"},bm={class:"h-60 w-52 text-center text-40 bg-white rounded-4xl font-black"},ym={class:"text-mainYellow pt-4"},xm={key:1,class:"flex flex-col items-center"},_m={class:"text-2xl text-white pb-4"},wm=vn(()=>y("input",{type:"text",name:"",placeholder:"請輸入金額",class:"h-60 w-52 text-center text-2xl bg-white rounded-4xl font-black"},null,-1)),Am=vn(()=>y("h4",{class:"text-white pt-2"},"最高額度新台幣十萬元整",-1)),km={class:"text-mainYellow pt-2"},Em={__name:"SupportUs",setup(t){const e=Ut("3,294,255"),n=Ut([{id:"1",title:"輕鬆捐",money:"$600",desc:"為他撐過風風雨雨"},{id:"2",title:"小額捐",money:"$1200",desc:"為他覆蓋前方泥濘"},{id:"3",title:"力挺捐",money:"$8800",desc:"全力相挺！ 為他全力以赴"},{id:"4",title:"自由捐",money:"",desc:" 為他披荊斬棘前行"}]);return(r,a)=>(nt(),rt("div",im,[sm,y("div",om,[lm,y("div",cm,[y("div",fm,[um,y("div",dm,[y("h2",mm,et(e.value),1),hm])])]),y("div",pm,[(nt(!0),rt(vt,null,Fr(n.value,i=>(nt(),rt("div",{key:i.id,class:"flex flex-col items-center mr-6"},[i.id!=="4"?(nt(),rt("div",vm,[y("h4",gm,et(i.title),1),y("div",bm,et(i.money),1),y("h4",ym,et(i.desc),1)])):(nt(),rt("div",xm,[y("h4",_m,et(i.title),1),wm,Am,y("h4",km,et(i.desc),1)]))]))),128))])])]))}},Om=Xt(Em,[["__scopeId","data-v-6441d4c4"]]),Cm="/F2ELegislator/assets/contactMeow-77e59b7a.png",Im={},Sm={id:"contact",class:"min-h-screen"},Pm=De('<div class="flex flex-col items-center"><div class="flex"><div class="flex flex-col justify-end pb-4"><div class="relative"><h1 class="text-64 text-mainBlack">您的聲音，我們的行動！</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider" style="left:-15%;top:-60%;">CONTACT US</h1></div><p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到</p><p>您的建議。分享您的想法，一同為我們的未來打造更美好！</p></div><img src="'+Cm+'" alt="contactMeow"></div><div class="w-1/2"><div class="flex border-2 border-black rounded p-20"><div class="pr-6"><div class="w-full"><h5>您的姓名</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="請輸入您的姓名"></div><div class="w-full"><h5>您的 Email</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="請輸入您的電子郵件"></div><div class="w-full"><h5>您的手機號碼</h5><input type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow" placeholder="09-xxx-xxx"></div></div><div class="flex flex-col"><div class="w-full"><h5>您的建言</h5><textarea type="text" class="pl-2 py-1 border-2 border-black rounded bg-lightYellow"></textarea></div><button class="border-2 border-black rounded bg-mainYellow">送出意見</button></div></div></div></div>',1),Tm=[Pm];function Mm(t,e){return nt(),rt("div",Sm,Tm)}const Nm=Xt(Im,[["render",Mm]]);const ie=t=>(un("data-v-6c2cd89e"),t=t(),dn(),t),Rm={class:"flex p-6 bg-mainYellow"},Fm={class:"flex items-center justify-end w-6/12 pr-8"},Lm={class:"mr-2 border-2 border-black"},jm=De('<div class="flex items-center" data-v-6c2cd89e><div class="w-1/4 mx-4" data-v-6c2cd89e><img src="'+ho+'" alt="選舉章" data-v-6c2cd89e></div><div class="flex items-center w-3/4 p-2 border-l-2 border-black" data-v-6c2cd89e><div class="pl-4" data-v-6c2cd89e><h4 data-v-6c2cd89e>好</h4><h4 data-v-6c2cd89e>喵</h4></div><h4 class="px-6 text-black text-7xl font-bold" data-v-6c2cd89e>3</h4></div></div>',1),zm={key:0},Bm=ie(()=>y("div",{class:"absolute text-center border-2 rounded pl-1 shake",style:{top:"150%",right:"15%"}}," 喵喵 ",-1)),Dm=ie(()=>y("div",{class:"absolute text-center border-2 rounded pl-1 shake",style:{top:"250%",right:"0%"}}," 投我 ",-1)),Um=[Bm,Dm],$m=ie(()=>y("div",{class:"py-5 px-8 border-2 border-black tracking-widest"},[y("h4",{class:"pb-2 text-4xl text-black font-bold"},"喵立翰"),y("h4",{class:"text-xl text-center"},"少年立委")],-1)),Ym={class:"w-6/12 tracking-wider"},Hm=ie(()=>y("span",null,"TAIWAN NO.1",-1)),Wm=ie(()=>y("span",null,"ELECTIONS",-1)),Km=ie(()=>y("span",{class:"pl-4"},"ELECTIONS 凍蒜！凍蒜！",-1)),Vm={class:"flex justify-evenly p-8 bg-mainBlack text-white"},Xm=ie(()=>y("div",null,[y("p",{class:"pb-2 text-2xl"},"競選總部"),y("h4",null,"地址：台灣喵星區"),y("h4",null,"毛茸茸大道88號，喵喵大樓3樓")],-1)),Qm=ie(()=>y("div",{class:"flex flex-col justify-end"},[y("h4",null,"電話：(02) 888-5678"),y("h4",null,"電子郵件地址: meowoffice@linmeow.tw")],-1)),Jm={class:"flex items-end text-2xl"},qm={__name:"Footer",setup(t){const e=Ut(!1);return(n,r)=>{const a=nn("marquee"),i=nn("font-awesome-icon");return nt(),rt(vt,null,[y("div",Rm,[y("div",Fm,[y("div",Lm,[jm,y("div",{class:"relative p-1 text-xs text-center border-t-2 border-black tracking-widest cursor-pointer",onClick:r[0]||(r[0]=s=>e.value=!e.value)},[Zt(" 點擊我就喵喵叫給你聽 "),e.value===!0?(nt(),rt("div",zm,Um)):Rs("",!0)])]),$m]),y("div",Ym,[D(a,{class:"text-40 ml-20 font-bold"},{default:Xe(()=>[Zt("凍蒜! 凍蒜! "),Hm,Zt(" 2024 VOTE NO.3")]),_:1}),D(a,{class:"text-40 ml-10 font-bold"},{default:Xe(()=>[Wm,Zt("少年立委 清流參選 台灣的未來，差您一票")]),_:1}),D(a,{class:"text-64 ml-16 font-bold"},{default:Xe(()=>[Zt("TAIWAN NO.1"),Km]),_:1})])]),y("div",Vm,[Xm,Qm,y("div",Jm,[D(i,{icon:"fa-brands fa-facebook",class:"p-2"}),D(i,{icon:"fa-brands fa-instagram",class:"p-2"}),D(i,{icon:"fa-brands fa-x-twitter",class:"p-2"})])])],64)}}},Zm=Xt(qm,[["__scopeId","data-v-6c2cd89e"]]);const Gm=t=>(un("data-v-dde0c523"),t=t(),dn(),t),th=Gm(()=>y("div",{class:"relative"},[y("div",{class:"fixed bottom-80 left-0"},[y("h6",{class:"transform -rotate-90"},"Miao Li-Han © 2023 Copyright. All Rights Reserved")])],-1)),eh={__name:"App",setup(t){return(e,n)=>(nt(),rt(vt,null,[D(Ju),th,D(wd),D(Sd),D(Fd),D(rm),D(Om),D(Nm),D(Zm)],64))}},nh=Xt(eh,[["__scopeId","data-v-dde0c523"]]);_u.add(ju,Lu,Fu,zu,Du,Bu);const vo=Dc(nh);vo.component("font-awesome-icon",Ru);vo.mount("#app");

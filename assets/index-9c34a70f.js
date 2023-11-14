(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function aa(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},Se=[],St=()=>{},xo=()=>!1,_o=/^on[^a-z]/,tr=t=>_o.test(t),ia=t=>t.startsWith("onUpdate:"),ot=Object.assign,sa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wo=Object.prototype.hasOwnProperty,U=(t,e)=>wo.call(t,e),R=Array.isArray,Pe=t=>nr(t)==="[object Map]",Ki=t=>nr(t)==="[object Set]",j=t=>typeof t=="function",at=t=>typeof t=="string",er=t=>typeof t=="symbol",q=t=>t!==null&&typeof t=="object",Vi=t=>(q(t)||j(t))&&j(t.then)&&j(t.catch),Xi=Object.prototype.toString,nr=t=>Xi.call(t),Ao=t=>nr(t).slice(8,-1),Qi=t=>nr(t)==="[object Object]",oa=t=>at(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ln=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ko=/-(\w)/g,zt=rr(t=>t.replace(ko,(e,n)=>n?n.toUpperCase():"")),Eo=/\B([A-Z])/g,De=rr(t=>t.replace(Eo,"-$1").toLowerCase()),ar=rr(t=>t.charAt(0).toUpperCase()+t.slice(1)),wr=rr(t=>t?`on${ar(t)}`:""),ge=(t,e)=>!Object.is(t,e),Ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Hn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ua;const Mr=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ir(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=at(r)?Po(r):ir(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(at(t)||q(t))return t}const Co=/;(?![^(]*\))/g,Io=/:([^]+)/,So=/\/\*[^]*?\*\//g;function Po(t){const e={};return t.replace(So,"").split(Co).forEach(n=>{if(n){const r=n.split(Io);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function sr(t){let e="";if(at(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=sr(t[n]);r&&(e+=r+" ")}else if(q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const To="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",No=aa(To);function Ji(t){return!!t||t===""}const Z=t=>at(t)?t:t==null?"":R(t)||q(t)&&(t.toString===Xi||!j(t.toString))?JSON.stringify(t,qi,2):String(t),qi=(t,e)=>e&&e.__v_isRef?qi(t,e.value):Pe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ki(e)?{[`Set(${e.size})`]:[...e.values()]}:q(e)&&!R(e)&&!Qi(e)?String(e):e;let At;class Mo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ro(t,e=At){e&&e.active&&e.effects.push(t)}function Fo(){return At}const la=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Zi=t=>(t.w&ee)>0,Gi=t=>(t.n&ee)>0,Lo=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ee},jo=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Zi(a)&&!Gi(a)?a.delete(t):e[n++]=a,a.w&=~ee,a.n&=~ee}e.length=n}},Rr=new WeakMap;let Qe=0,ee=1;const Fr=30;let kt;const pe=Symbol(""),Lr=Symbol("");class ca{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ro(this,r)}run(){if(!this.active)return this.fn();let e=kt,n=Gt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,Gt=!0,ee=1<<++Qe,Qe<=Fr?Lo(this):Ya(this),this.fn()}finally{Qe<=Fr&&jo(this),ee=1<<--Qe,kt=this.parent,Gt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(Ya(this),this.onStop&&this.onStop(),this.active=!1)}}function Ya(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gt=!0;const ts=[];function $e(){ts.push(Gt),Gt=!1}function Be(){const t=ts.pop();Gt=t===void 0?!0:t}function gt(t,e,n){if(Gt&&kt){let r=Rr.get(t);r||Rr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=la()),es(a)}}function es(t,e){let n=!1;Qe<=Fr?Gi(t)||(t.n|=ee,n=!Zi(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function Yt(t,e,n,r,a,i){const s=Rr.get(t);if(!s)return;let o=[];if(e==="clear")o=[...s.values()];else if(n==="length"&&R(t)){const l=Number(r);s.forEach((f,d)=>{(d==="length"||!er(d)&&d>=l)&&o.push(f)})}else switch(n!==void 0&&o.push(s.get(n)),e){case"add":R(t)?oa(n)&&o.push(s.get("length")):(o.push(s.get(pe)),Pe(t)&&o.push(s.get(Lr)));break;case"delete":R(t)||(o.push(s.get(pe)),Pe(t)&&o.push(s.get(Lr)));break;case"set":Pe(t)&&o.push(s.get(pe));break}if(o.length===1)o[0]&&jr(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);jr(la(l))}}function jr(t,e){const n=R(t)?t:[...t];for(const r of n)r.computed&&Ha(r);for(const r of n)r.computed||Ha(r)}function Ha(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zo=aa("__proto__,__v_isRef,__isVue"),ns=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(er)),Wa=Do();function Do(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,s=this.length;i<s;i++)gt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){$e();const r=Y(this)[e].apply(this,n);return Be(),r}}),t}function $o(t){const e=Y(this);return gt(e,"has",t),e.hasOwnProperty(t)}class rs{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Go:os:i?ss:is).get(e))return e;const s=R(e);if(!a){if(s&&U(Wa,n))return Reflect.get(Wa,n,r);if(n==="hasOwnProperty")return $o}const o=Reflect.get(e,n,r);return(er(n)?ns.has(n):zo(n))||(a||gt(e,"get",n),i)?o:ut(o)?s&&oa(n)?o:o.value:q(o)?a?ls(o):da(o):o}}class as extends rs{constructor(e=!1){super(!1,e)}set(e,n,r,a){let i=e[n];if(Fe(i)&&ut(i)&&!ut(r))return!1;if(!this._shallow&&(!Wn(r)&&!Fe(r)&&(i=Y(i),r=Y(r)),!R(e)&&ut(i)&&!ut(r)))return i.value=r,!0;const s=R(e)&&oa(n)?Number(n)<e.length:U(e,n),o=Reflect.set(e,n,r,a);return e===Y(a)&&(s?ge(r,i)&&Yt(e,"set",n,r):Yt(e,"add",n,r)),o}deleteProperty(e,n){const r=U(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&r&&Yt(e,"delete",n,void 0),a}has(e,n){const r=Reflect.has(e,n);return(!er(n)||!ns.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",R(e)?"length":pe),Reflect.ownKeys(e)}}class Bo extends rs{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uo=new as,Yo=new Bo,Ho=new as(!0),fa=t=>t,or=t=>Reflect.getPrototypeOf(t);function _n(t,e,n=!1,r=!1){t=t.__v_raw;const a=Y(t),i=Y(e);n||(ge(e,i)&&gt(a,"get",e),gt(a,"get",i));const{has:s}=or(a),o=r?fa:n?ha:nn;if(s.call(a,e))return o(t.get(e));if(s.call(a,i))return o(t.get(i));t!==a&&t.get(e)}function wn(t,e=!1){const n=this.__v_raw,r=Y(n),a=Y(t);return e||(ge(t,a)&&gt(r,"has",t),gt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function An(t,e=!1){return t=t.__v_raw,!e&&gt(Y(t),"iterate",pe),Reflect.get(t,"size",t)}function Ka(t){t=Y(t);const e=Y(this);return or(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function Va(t,e){e=Y(e);const n=Y(this),{has:r,get:a}=or(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const s=a.call(n,t);return n.set(t,e),i?ge(e,s)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function Xa(t){const e=Y(this),{has:n,get:r}=or(e);let a=n.call(e,t);a||(t=Y(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Yt(e,"delete",t,void 0),i}function Qa(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function kn(t,e){return function(r,a){const i=this,s=i.__v_raw,o=Y(s),l=e?fa:t?ha:nn;return!t&&gt(o,"iterate",pe),s.forEach((f,d)=>r.call(a,l(f),l(d),i))}}function En(t,e,n){return function(...r){const a=this.__v_raw,i=Y(a),s=Pe(i),o=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,f=a[t](...r),d=n?fa:e?ha:nn;return!e&&gt(i,"iterate",l?Lr:pe),{next(){const{value:m,done:b}=f.next();return b?{value:m,done:b}:{value:o?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Jt(t){return function(...e){return t==="delete"?!1:this}}function Wo(){const t={get(i){return _n(this,i)},get size(){return An(this)},has:wn,add:Ka,set:Va,delete:Xa,clear:Qa,forEach:kn(!1,!1)},e={get(i){return _n(this,i,!1,!0)},get size(){return An(this)},has:wn,add:Ka,set:Va,delete:Xa,clear:Qa,forEach:kn(!1,!0)},n={get(i){return _n(this,i,!0)},get size(){return An(this,!0)},has(i){return wn.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:kn(!0,!1)},r={get(i){return _n(this,i,!0,!0)},get size(){return An(this,!0)},has(i){return wn.call(this,i,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=En(i,!1,!1),n[i]=En(i,!0,!1),e[i]=En(i,!1,!0),r[i]=En(i,!0,!0)}),[t,n,e,r]}const[Ko,Vo,Xo,Qo]=Wo();function ua(t,e){const n=e?t?Qo:Xo:t?Vo:Ko;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Jo={get:ua(!1,!1)},qo={get:ua(!1,!0)},Zo={get:ua(!0,!1)},is=new WeakMap,ss=new WeakMap,os=new WeakMap,Go=new WeakMap;function tl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function el(t){return t.__v_skip||!Object.isExtensible(t)?0:tl(Ao(t))}function da(t){return Fe(t)?t:ma(t,!1,Uo,Jo,is)}function nl(t){return ma(t,!1,Ho,qo,ss)}function ls(t){return ma(t,!0,Yo,Zo,os)}function ma(t,e,n,r,a){if(!q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const s=el(t);if(s===0)return t;const o=new Proxy(t,s===2?r:n);return a.set(t,o),o}function Te(t){return Fe(t)?Te(t.__v_raw):!!(t&&t.__v_isReactive)}function Fe(t){return!!(t&&t.__v_isReadonly)}function Wn(t){return!!(t&&t.__v_isShallow)}function cs(t){return Te(t)||Fe(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function fs(t){return Hn(t,"__v_skip",!0),t}const nn=t=>q(t)?da(t):t,ha=t=>q(t)?ls(t):t;function us(t){Gt&&kt&&(t=Y(t),es(t.dep||(t.dep=la())))}function ds(t,e){t=Y(t);const n=t.dep;n&&jr(n)}function ut(t){return!!(t&&t.__v_isRef===!0)}function Et(t){return rl(t,!1)}function rl(t,e){return ut(t)?t:new al(t,e)}class al{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:nn(e)}get value(){return us(this),this._value}set value(e){const n=this.__v_isShallow||Wn(e)||Fe(e);e=n?e:Y(e),ge(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:nn(e),ds(this))}}function il(t){return ut(t)?t.value:t}const sl={get:(t,e,n)=>il(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ut(a)&&!ut(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function ms(t){return Te(t)?t:new Proxy(t,sl)}class ol{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ca(e,()=>{this._dirty||(this._dirty=!0,ds(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=Y(this);return us(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ll(t,e,n=!1){let r,a;const i=j(t);return i?(r=t,a=St):(r=t.get,a=t.set),new ol(r,a,i||!a,n)}function te(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){lr(i,e,n)}return a}function Pt(t,e,n,r){if(j(t)){const i=te(t,e,n,r);return i&&Vi(i)&&i.catch(s=>{lr(s,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Pt(t[i],e,n,r));return a}function lr(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const s=e.proxy,o=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,s,o)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){te(l,null,10,[t,s,o]);return}}cl(t,n,a,r)}function cl(t,e,n,r=!0){console.error(t)}let rn=!1,zr=!1;const ft=[];let Ft=0;const Ne=[];let Bt=null,ue=0;const hs=Promise.resolve();let pa=null;function fl(t){const e=pa||hs;return t?e.then(this?t.bind(this):t):e}function ul(t){let e=Ft+1,n=ft.length;for(;e<n;){const r=e+n>>>1,a=ft[r],i=an(a);i<t||i===t&&a.pre?e=r+1:n=r}return e}function va(t){(!ft.length||!ft.includes(t,rn&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?ft.push(t):ft.splice(ul(t.id),0,t),ps())}function ps(){!rn&&!zr&&(zr=!0,pa=hs.then(gs))}function dl(t){const e=ft.indexOf(t);e>Ft&&ft.splice(e,1)}function ml(t){R(t)?Ne.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?ue+1:ue))&&Ne.push(t),ps()}function Ja(t,e=rn?Ft+1:0){for(;e<ft.length;e++){const n=ft[e];n&&n.pre&&(ft.splice(e,1),e--,n())}}function vs(t){if(Ne.length){const e=[...new Set(Ne)];if(Ne.length=0,Bt){Bt.push(...e);return}for(Bt=e,Bt.sort((n,r)=>an(n)-an(r)),ue=0;ue<Bt.length;ue++)Bt[ue]();Bt=null,ue=0}}const an=t=>t.id==null?1/0:t.id,hl=(t,e)=>{const n=an(t)-an(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gs(t){zr=!1,rn=!0,ft.sort(hl);const e=St;try{for(Ft=0;Ft<ft.length;Ft++){const n=ft[Ft];n&&n.active!==!1&&te(n,null,14)}}finally{Ft=0,ft.length=0,vs(),rn=!1,pa=null,(ft.length||Ne.length)&&gs()}}function pl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||J;let a=n;const i=e.startsWith("update:"),s=i&&e.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:b}=r[d]||J;b&&(a=n.map(A=>at(A)?A.trim():A)),m&&(a=n.map(Oo))}let o,l=r[o=wr(e)]||r[o=wr(zt(e))];!l&&i&&(l=r[o=wr(De(e))]),l&&Pt(l,t,6,a);const f=r[o+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Pt(f,t,6,a)}}function bs(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let s={},o=!1;if(!j(t)){const l=f=>{const d=bs(f,e,!0);d&&(o=!0,ot(s,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!o?(q(t)&&r.set(t,null),null):(R(i)?i.forEach(l=>s[l]=null):ot(s,i),q(t)&&r.set(t,s),s)}function cr(t,e){return!t||!tr(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,De(e))||U(t,e))}let Ot=null,fr=null;function Kn(t){const e=Ot;return Ot=t,fr=t&&t.type.__scopeId||null,e}function Ue(t){fr=t}function Ye(){fr=null}function Me(t,e=Ot,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&oi(-1);const i=Kn(e);let s;try{s=t(...a)}finally{Kn(i),r._d&&oi(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function kr(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:f,render:d,renderCache:m,data:b,setupState:A,ctx:z,inheritAttrs:M}=t;let B,k;const O=Kn(t);try{if(n.shapeFlag&4){const P=a||r;B=Rt(d.call(P,P,m,i,A,b,z)),k=l}else{const P=e;B=Rt(P.length>1?P(i,{attrs:l,slots:o,emit:f}):P(i,null)),k=e.props?l:vl(l)}}catch(P){Ge.length=0,lr(P,t,1),B=D(ye)}let F=B;if(k&&M!==!1){const P=Object.keys(k),{shapeFlag:H}=F;P.length&&H&7&&(s&&P.some(ia)&&(k=gl(k,s)),F=Le(F,k))}return n.dirs&&(F=Le(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),B=F,Kn(O),B}const vl=t=>{let e;for(const n in t)(n==="class"||n==="style"||tr(n))&&((e||(e={}))[n]=t[n]);return e},gl=(t,e)=>{const n={};for(const r in t)(!ia(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bl(t,e,n){const{props:r,children:a,component:i}=t,{props:s,children:o,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qa(r,s,f):!!s;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(s[b]!==r[b]&&!cr(f,b))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?qa(r,s,f):!0:!!s;return!1}function qa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!cr(n,i))return!0}return!1}function yl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ys="components";function be(t,e){return _l(ys,t,!0,e)||t}const xl=Symbol.for("v-ndc");function _l(t,e,n=!0,r=!1){const a=Ot||st;if(a){const i=a.type;if(t===ys){const o=hc(i,!1);if(o&&(o===e||o===zt(e)||o===ar(zt(e))))return i}const s=Za(a[t]||i[t],e)||Za(a.appContext[t],e);return!s&&r?i:s}}function Za(t,e){return t&&(t[e]||t[zt(e)]||t[ar(zt(e))])}const wl=t=>t.__isSuspense;function Al(t,e){e&&e.pendingBranch?R(t)?e.effects.push(...t):e.effects.push(t):ml(t)}const On={};function jn(t,e,n){return xs(t,e,n)}function xs(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=J){var o;const l=Fo()===((o=st)==null?void 0:o.scope)?st:null;let f,d=!1,m=!1;if(ut(t)?(f=()=>t.value,d=Wn(t)):Te(t)?(f=()=>t,r=!0):R(t)?(m=!0,d=t.some(P=>Te(P)||Wn(P)),f=()=>t.map(P=>{if(ut(P))return P.value;if(Te(P))return Oe(P);if(j(P))return te(P,l,2)})):j(t)?e?f=()=>te(t,l,2):f=()=>{if(!(l&&l.isUnmounted))return b&&b(),Pt(t,l,3,[A])}:f=St,e&&r){const P=f;f=()=>Oe(P())}let b,A=P=>{b=O.onStop=()=>{te(P,l,4)}},z;if(on)if(A=St,e?n&&Pt(e,l,3,[f(),m?[]:void 0,A]):f(),a==="sync"){const P=bc();z=P.__watcherHandles||(P.__watcherHandles=[])}else return St;let M=m?new Array(t.length).fill(On):On;const B=()=>{if(O.active)if(e){const P=O.run();(r||d||(m?P.some((H,lt)=>ge(H,M[lt])):ge(P,M)))&&(b&&b(),Pt(e,l,3,[P,M===On?void 0:m&&M[0]===On?[]:M,A]),M=P)}else O.run()};B.allowRecurse=!!e;let k;a==="sync"?k=B:a==="post"?k=()=>vt(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),k=()=>va(B));const O=new ca(f,k);e?n?B():M=O.run():a==="post"?vt(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&sa(l.scope.effects,O)};return z&&z.push(F),F}function kl(t,e,n){const r=this.proxy,a=at(t)?t.includes(".")?_s(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const s=st;je(this);const o=xs(a,i.bind(r),n);return s?je(s):ve(),o}function _s(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Oe(t,e){if(!q(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ut(t))Oe(t.value,e);else if(R(t))for(let n=0;n<t.length;n++)Oe(t[n],e);else if(Ki(t)||Pe(t))t.forEach(n=>{Oe(n,e)});else if(Qi(t))for(const n in t)Oe(t[n],e);return t}function le(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&($e(),Pt(l,n,8,[t.el,o,t,e]),Be())}}/*! #__NO_SIDE_EFFECTS__ */function El(t,e){return j(t)?(()=>ot({name:t.name},e,{setup:t}))():t}const zn=t=>!!t.type.__asyncLoader,ws=t=>t.type.__isKeepAlive;function Ol(t,e){As(t,"a",e)}function Cl(t,e){As(t,"da",e)}function As(t,e,n=st){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(ur(e,r,n),n){let a=n.parent;for(;a&&a.parent;)ws(a.parent.vnode)&&Il(r,e,n,a),a=a.parent}}function Il(t,e,n,r){const a=ur(e,t,r,!0);Es(()=>{sa(r[e],a)},n)}function ur(t,e,n=st,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;$e(),je(n);const o=Pt(e,n,t,s);return ve(),Be(),o});return r?a.unshift(i):a.push(i),i}}const Vt=t=>(e,n=st)=>(!on||t==="sp")&&ur(t,(...r)=>e(...r),n),Sl=Vt("bm"),ks=Vt("m"),Pl=Vt("bu"),Tl=Vt("u"),Nl=Vt("bum"),Es=Vt("um"),Ml=Vt("sp"),Rl=Vt("rtg"),Fl=Vt("rtc");function Ll(t,e=st){ur("ec",t,e)}function Vn(t,e,n,r){let a;const i=n&&n[r];if(R(t)||at(t)){a=new Array(t.length);for(let s=0,o=t.length;s<o;s++)a[s]=e(t[s],s,void 0,i&&i[s])}else if(typeof t=="number"){a=new Array(t);for(let s=0;s<t;s++)a[s]=e(s+1,s,void 0,i&&i[s])}else if(q(t))if(t[Symbol.iterator])a=Array.from(t,(s,o)=>e(s,o,void 0,i&&i[o]));else{const s=Object.keys(t);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const f=s[o];a[o]=e(t[f],f,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const Dr=t=>t?Ls(t)?wa(t)||t.proxy:Dr(t.parent):null,Ze=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dr(t.parent),$root:t=>Dr(t.root),$emit:t=>t.emit,$options:t=>ga(t),$forceUpdate:t=>t.f||(t.f=()=>va(t.update)),$nextTick:t=>t.n||(t.n=fl.bind(t.proxy)),$watch:t=>kl.bind(t)}),Er=(t,e)=>t!==J&&!t.__isScriptSetup&&U(t,e),jl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=t;let f;if(e[0]!=="$"){const A=s[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(Er(r,e))return s[e]=1,r[e];if(a!==J&&U(a,e))return s[e]=2,a[e];if((f=t.propsOptions[0])&&U(f,e))return s[e]=3,i[e];if(n!==J&&U(n,e))return s[e]=4,n[e];$r&&(s[e]=0)}}const d=Ze[e];let m,b;if(d)return e==="$attrs"&&gt(t,"get",e),d(t);if((m=o.__cssModules)&&(m=m[e]))return m;if(n!==J&&U(n,e))return s[e]=4,n[e];if(b=l.config.globalProperties,U(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return Er(a,e)?(a[e]=n,!0):r!==J&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||t!==J&&U(t,s)||Er(e,s)||(o=i[0])&&U(o,s)||U(r,s)||U(Ze,s)||U(a.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ga(t){return R(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $r=!0;function zl(t){const e=ga(t),n=t.proxy,r=t.ctx;$r=!1,e.beforeCreate&&ti(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:f,created:d,beforeMount:m,mounted:b,beforeUpdate:A,updated:z,activated:M,deactivated:B,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:P,render:H,renderTracked:lt,renderTriggered:ct,errorCaptured:_t,serverPrefetch:xt,expose:Dt,inheritAttrs:Ke,components:gn,directives:bn,filters:yr}=e;if(f&&Dl(f,r,null),s)for(const tt in s){const K=s[tt];j(K)&&(r[tt]=K.bind(n))}if(a){const tt=a.call(n,n);q(tt)&&(t.data=da(tt))}if($r=!0,i)for(const tt in i){const K=i[tt],se=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):St,yn=!j(K)&&j(K.set)?K.set.bind(n):St,oe=fe({get:se,set:yn});Object.defineProperty(r,tt,{enumerable:!0,configurable:!0,get:()=>oe.value,set:Tt=>oe.value=Tt})}if(o)for(const tt in o)Os(o[tt],r,n,tt);if(l){const tt=j(l)?l.call(n):l;Reflect.ownKeys(tt).forEach(K=>{Wl(K,tt[K])})}d&&ti(d,t,"c");function dt(tt,K){R(K)?K.forEach(se=>tt(se.bind(n))):K&&tt(K.bind(n))}if(dt(Sl,m),dt(ks,b),dt(Pl,A),dt(Tl,z),dt(Ol,M),dt(Cl,B),dt(Ll,_t),dt(Fl,lt),dt(Rl,ct),dt(Nl,O),dt(Es,P),dt(Ml,xt),R(Dt))if(Dt.length){const tt=t.exposed||(t.exposed={});Dt.forEach(K=>{Object.defineProperty(tt,K,{get:()=>n[K],set:se=>n[K]=se})})}else t.exposed||(t.exposed={});H&&t.render===St&&(t.render=H),Ke!=null&&(t.inheritAttrs=Ke),gn&&(t.components=gn),bn&&(t.directives=bn)}function Dl(t,e,n=St){R(t)&&(t=Br(t));for(const r in t){const a=t[r];let i;q(a)?"default"in a?i=Dn(a.from||r,a.default,!0):i=Dn(a.from||r):i=Dn(a),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[r]=i}}function ti(t,e,n){Pt(R(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Os(t,e,n,r){const a=r.includes(".")?_s(n,r):()=>n[r];if(at(t)){const i=e[t];j(i)&&jn(a,i)}else if(j(t))jn(a,t.bind(n));else if(q(t))if(R(t))t.forEach(i=>Os(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&jn(a,i,t)}}function ga(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,o=i.get(e);let l;return o?l=o:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(f=>Xn(l,f,s,!0)),Xn(l,e,s)),q(e)&&i.set(e,l),l}function Xn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Xn(t,i,n,!0),a&&a.forEach(s=>Xn(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const o=$l[s]||n&&n[s];t[s]=o?o(t[s],e[s]):e[s]}return t}const $l={data:ei,props:ni,emits:ni,methods:Je,computed:Je,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Je,directives:Je,watch:Ul,provide:ei,inject:Bl};function ei(t,e){return e?t?function(){return ot(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Bl(t,e){return Je(Br(t),Br(e))}function Br(t){if(R(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Je(t,e){return t?ot(Object.create(null),t,e):e}function ni(t,e){return t?R(t)&&R(e)?[...new Set([...t,...e])]:ot(Object.create(null),Ga(t),Ga(e??{})):e}function Ul(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Cs(){return{app:null,config:{isNativeTag:xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yl=0;function Hl(t,e){return function(r,a=null){j(r)||(r=ot({},r)),a!=null&&!q(a)&&(a=null);const i=Cs(),s=new WeakSet;let o=!1;const l=i.app={_uid:Yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:yc,get config(){return i.config},set config(f){},use(f,...d){return s.has(f)||(f&&j(f.install)?(s.add(f),f.install(l,...d)):j(f)&&(s.add(f),f(l,...d))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,d){return d?(i.components[f]=d,l):i.components[f]},directive(f,d){return d?(i.directives[f]=d,l):i.directives[f]},mount(f,d,m){if(!o){const b=D(r,a);return b.appContext=i,d&&e?e(b,f):t(b,f,m),o=!0,l._container=f,f.__vue_app__=l,wa(b.component)||b.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(f,d){return i.provides[f]=d,l},runWithContext(f){Qn=l;try{return f()}finally{Qn=null}}};return l}}let Qn=null;function Wl(t,e){if(st){let n=st.provides;const r=st.parent&&st.parent.provides;r===n&&(n=st.provides=Object.create(r)),n[t]=e}}function Dn(t,e,n=!1){const r=st||Ot;if(r||Qn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Kl(t,e,n,r=!1){const a={},i={};Hn(i,mr,1),t.propsDefaults=Object.create(null),Is(t,e,a,i);for(const s in t.propsOptions[0])s in a||(a[s]=void 0);n?t.props=r?a:nl(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Vl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=t,o=Y(a),[l]=t.propsOptions;let f=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(cr(t.emitsOptions,b))continue;const A=e[b];if(l)if(U(i,b))A!==i[b]&&(i[b]=A,f=!0);else{const z=zt(b);a[z]=Ur(l,o,z,A,t,!1)}else A!==i[b]&&(i[b]=A,f=!0)}}}else{Is(t,e,a,i)&&(f=!0);let d;for(const m in o)(!e||!U(e,m)&&((d=De(m))===m||!U(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Ur(l,o,m,void 0,t,!0)):delete a[m]);if(i!==o)for(const m in i)(!e||!U(e,m))&&(delete i[m],f=!0)}f&&Yt(t,"set","$attrs")}function Is(t,e,n,r){const[a,i]=t.propsOptions;let s=!1,o;if(e)for(let l in e){if(Ln(l))continue;const f=e[l];let d;a&&U(a,d=zt(l))?!i||!i.includes(d)?n[d]=f:(o||(o={}))[d]=f:cr(t.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,s=!0)}if(i){const l=Y(n),f=o||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Ur(a,l,m,f[m],t,!U(f,m))}}return s}function Ur(t,e,n,r,a,i){const s=t[n];if(s!=null){const o=U(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&j(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(je(a),r=f[n]=l.call(null,e),ve())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===De(n))&&(r=!0))}return r}function Ss(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,s={},o=[];let l=!1;if(!j(t)){const d=m=>{l=!0;const[b,A]=Ss(m,e,!0);ot(s,b),A&&o.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return q(t)&&r.set(t,Se),Se;if(R(i))for(let d=0;d<i.length;d++){const m=zt(i[d]);ri(m)&&(s[m]=J)}else if(i)for(const d in i){const m=zt(d);if(ri(m)){const b=i[d],A=s[m]=R(b)||j(b)?{type:b}:ot({},b);if(A){const z=si(Boolean,A.type),M=si(String,A.type);A[0]=z>-1,A[1]=M<0||z<M,(z>-1||U(A,"default"))&&o.push(m)}}}const f=[s,o];return q(t)&&r.set(t,f),f}function ri(t){return t[0]!=="$"}function ai(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ii(t,e){return ai(t)===ai(e)}function si(t,e){return R(e)?e.findIndex(n=>ii(n,t)):j(e)&&ii(e,t)?0:-1}const Ps=t=>t[0]==="_"||t==="$stable",ba=t=>R(t)?t.map(Rt):[Rt(t)],Xl=(t,e,n)=>{if(e._n)return e;const r=Me((...a)=>ba(e(...a)),n);return r._c=!1,r},Ts=(t,e,n)=>{const r=t._ctx;for(const a in t){if(Ps(a))continue;const i=t[a];if(j(i))e[a]=Xl(a,i,r);else if(i!=null){const s=ba(i);e[a]=()=>s}}},Ns=(t,e)=>{const n=ba(e);t.slots.default=()=>n},Ql=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Hn(e,"_",n)):Ts(e,t.slots={})}else t.slots={},e&&Ns(t,e);Hn(t.slots,mr,1)},Jl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,s=J;if(r.shapeFlag&32){const o=e._;o?n&&o===1?i=!1:(ot(a,e),!n&&o===1&&delete a._):(i=!e.$stable,Ts(e,a)),s=e}else e&&(Ns(t,e),s={default:1});if(i)for(const o in a)!Ps(o)&&s[o]==null&&delete a[o]};function Yr(t,e,n,r,a=!1){if(R(t)){t.forEach((b,A)=>Yr(b,e&&(R(e)?e[A]:e),n,r,a));return}if(zn(r)&&!a)return;const i=r.shapeFlag&4?wa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=t,f=e&&e.r,d=o.refs===J?o.refs={}:o.refs,m=o.setupState;if(f!=null&&f!==l&&(at(f)?(d[f]=null,U(m,f)&&(m[f]=null)):ut(f)&&(f.value=null)),j(l))te(l,o,12,[s,d]);else{const b=at(l),A=ut(l);if(b||A){const z=()=>{if(t.f){const M=b?U(m,l)?m[l]:d[l]:l.value;a?R(M)&&sa(M,i):R(M)?M.includes(i)||M.push(i):b?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else b?(d[l]=s,U(m,l)&&(m[l]=s)):A&&(l.value=s,t.k&&(d[t.k]=s))};s?(z.id=-1,vt(z,n)):z()}}}const vt=Al;function ql(t){return Zl(t)}function Zl(t,e){const n=Mr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:b,setScopeId:A=St,insertStaticContent:z}=t,M=(c,u,h,v=null,g=null,_=null,E=!1,x=null,w=!!u.dynamicChildren)=>{if(c===u)return;c&&!Xe(c,u)&&(v=xn(c),Tt(c,g,_,!0),c=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:y,ref:T,shapeFlag:I}=u;switch(y){case dr:B(c,u,h,v);break;case ye:k(c,u,h,v);break;case $n:c==null&&O(u,h,v,E);break;case ht:gn(c,u,h,v,g,_,E,x,w);break;default:I&1?H(c,u,h,v,g,_,E,x,w):I&6?bn(c,u,h,v,g,_,E,x,w):(I&64||I&128)&&y.process(c,u,h,v,g,_,E,x,w,Ae)}T!=null&&g&&Yr(T,c&&c.ref,_,u||c,!u)},B=(c,u,h,v)=>{if(c==null)r(u.el=o(u.children),h,v);else{const g=u.el=c.el;u.children!==c.children&&f(g,u.children)}},k=(c,u,h,v)=>{c==null?r(u.el=l(u.children||""),h,v):u.el=c.el},O=(c,u,h,v)=>{[c.el,c.anchor]=z(c.children,u,h,v,c.el,c.anchor)},F=({el:c,anchor:u},h,v)=>{let g;for(;c&&c!==u;)g=b(c),r(c,h,v),c=g;r(u,h,v)},P=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=b(c),a(c),c=h;a(u)},H=(c,u,h,v,g,_,E,x,w)=>{E=E||u.type==="svg",c==null?lt(u,h,v,g,_,E,x,w):xt(c,u,g,_,E,x,w)},lt=(c,u,h,v,g,_,E,x)=>{let w,y;const{type:T,props:I,shapeFlag:N,transition:L,dirs:$}=c;if(w=c.el=s(c.type,_,I&&I.is,I),N&8?d(w,c.children):N&16&&_t(c.children,w,null,v,g,_&&T!=="foreignObject",E,x),$&&le(c,null,v,"created"),ct(w,c,c.scopeId,E,v),I){for(const W in I)W!=="value"&&!Ln(W)&&i(w,W,null,I[W],_,c.children,v,g,$t);"value"in I&&i(w,"value",null,I.value),(y=I.onVnodeBeforeMount)&&Mt(y,v,c)}$&&le(c,null,v,"beforeMount");const V=Gl(g,L);V&&L.beforeEnter(w),r(w,u,h),((y=I&&I.onVnodeMounted)||V||$)&&vt(()=>{y&&Mt(y,v,c),V&&L.enter(w),$&&le(c,null,v,"mounted")},g)},ct=(c,u,h,v,g)=>{if(h&&A(c,h),v)for(let _=0;_<v.length;_++)A(c,v[_]);if(g){let _=g.subTree;if(u===_){const E=g.vnode;ct(c,E,E.scopeId,E.slotScopeIds,g.parent)}}},_t=(c,u,h,v,g,_,E,x,w=0)=>{for(let y=w;y<c.length;y++){const T=c[y]=x?Zt(c[y]):Rt(c[y]);M(null,T,u,h,v,g,_,E,x)}},xt=(c,u,h,v,g,_,E)=>{const x=u.el=c.el;let{patchFlag:w,dynamicChildren:y,dirs:T}=u;w|=c.patchFlag&16;const I=c.props||J,N=u.props||J;let L;h&&ce(h,!1),(L=N.onVnodeBeforeUpdate)&&Mt(L,h,u,c),T&&le(u,c,h,"beforeUpdate"),h&&ce(h,!0);const $=g&&u.type!=="foreignObject";if(y?Dt(c.dynamicChildren,y,x,h,v,$,_):E||K(c,u,x,null,h,v,$,_,!1),w>0){if(w&16)Ke(x,u,I,N,h,v,g);else if(w&2&&I.class!==N.class&&i(x,"class",null,N.class,g),w&4&&i(x,"style",I.style,N.style,g),w&8){const V=u.dynamicProps;for(let W=0;W<V.length;W++){const rt=V[W],wt=I[rt],ke=N[rt];(ke!==wt||rt==="value")&&i(x,rt,wt,ke,g,c.children,h,v,$t)}}w&1&&c.children!==u.children&&d(x,u.children)}else!E&&y==null&&Ke(x,u,I,N,h,v,g);((L=N.onVnodeUpdated)||T)&&vt(()=>{L&&Mt(L,h,u,c),T&&le(u,c,h,"updated")},v)},Dt=(c,u,h,v,g,_,E)=>{for(let x=0;x<u.length;x++){const w=c[x],y=u[x],T=w.el&&(w.type===ht||!Xe(w,y)||w.shapeFlag&70)?m(w.el):h;M(w,y,T,null,v,g,_,E,!0)}},Ke=(c,u,h,v,g,_,E)=>{if(h!==v){if(h!==J)for(const x in h)!Ln(x)&&!(x in v)&&i(c,x,h[x],null,E,u.children,g,_,$t);for(const x in v){if(Ln(x))continue;const w=v[x],y=h[x];w!==y&&x!=="value"&&i(c,x,y,w,E,u.children,g,_,$t)}"value"in v&&i(c,"value",h.value,v.value)}},gn=(c,u,h,v,g,_,E,x,w)=>{const y=u.el=c?c.el:o(""),T=u.anchor=c?c.anchor:o("");let{patchFlag:I,dynamicChildren:N,slotScopeIds:L}=u;L&&(x=x?x.concat(L):L),c==null?(r(y,h,v),r(T,h,v),_t(u.children,h,T,g,_,E,x,w)):I>0&&I&64&&N&&c.dynamicChildren?(Dt(c.dynamicChildren,N,h,g,_,E,x),(u.key!=null||g&&u===g.subTree)&&Ms(c,u,!0)):K(c,u,h,T,g,_,E,x,w)},bn=(c,u,h,v,g,_,E,x,w)=>{u.slotScopeIds=x,c==null?u.shapeFlag&512?g.ctx.activate(u,h,v,E,w):yr(u,h,v,g,_,E,w):La(c,u,w)},yr=(c,u,h,v,g,_,E)=>{const x=c.component=cc(c,v,g);if(ws(c)&&(x.ctx.renderer=Ae),fc(x),x.asyncDep){if(g&&g.registerDep(x,dt),!c.el){const w=x.subTree=D(ye);k(null,w,u,h)}return}dt(x,c,u,h,g,_,E)},La=(c,u,h)=>{const v=u.component=c.component;if(bl(c,u,h))if(v.asyncDep&&!v.asyncResolved){tt(v,u,h);return}else v.next=u,dl(v.update),v.update();else u.el=c.el,v.vnode=u},dt=(c,u,h,v,g,_,E)=>{const x=()=>{if(c.isMounted){let{next:T,bu:I,u:N,parent:L,vnode:$}=c,V=T,W;ce(c,!1),T?(T.el=$.el,tt(c,T,E)):T=$,I&&Ar(I),(W=T.props&&T.props.onVnodeBeforeUpdate)&&Mt(W,L,T,$),ce(c,!0);const rt=kr(c),wt=c.subTree;c.subTree=rt,M(wt,rt,m(wt.el),xn(wt),c,g,_),T.el=rt.el,V===null&&yl(c,rt.el),N&&vt(N,g),(W=T.props&&T.props.onVnodeUpdated)&&vt(()=>Mt(W,L,T,$),g)}else{let T;const{el:I,props:N}=u,{bm:L,m:$,parent:V}=c,W=zn(u);if(ce(c,!1),L&&Ar(L),!W&&(T=N&&N.onVnodeBeforeMount)&&Mt(T,V,u),ce(c,!0),I&&_r){const rt=()=>{c.subTree=kr(c),_r(I,c.subTree,c,g,null)};W?u.type.__asyncLoader().then(()=>!c.isUnmounted&&rt()):rt()}else{const rt=c.subTree=kr(c);M(null,rt,h,v,c,g,_),u.el=rt.el}if($&&vt($,g),!W&&(T=N&&N.onVnodeMounted)){const rt=u;vt(()=>Mt(T,V,rt),g)}(u.shapeFlag&256||V&&zn(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&vt(c.a,g),c.isMounted=!0,u=h=v=null}},w=c.effect=new ca(x,()=>va(y),c.scope),y=c.update=()=>w.run();y.id=c.uid,ce(c,!0),y()},tt=(c,u,h)=>{u.component=c;const v=c.vnode.props;c.vnode=u,c.next=null,Vl(c,u.props,v,h),Jl(c,u.children,h),$e(),Ja(),Be()},K=(c,u,h,v,g,_,E,x,w=!1)=>{const y=c&&c.children,T=c?c.shapeFlag:0,I=u.children,{patchFlag:N,shapeFlag:L}=u;if(N>0){if(N&128){yn(y,I,h,v,g,_,E,x,w);return}else if(N&256){se(y,I,h,v,g,_,E,x,w);return}}L&8?(T&16&&$t(y,g,_),I!==y&&d(h,I)):T&16?L&16?yn(y,I,h,v,g,_,E,x,w):$t(y,g,_,!0):(T&8&&d(h,""),L&16&&_t(I,h,v,g,_,E,x,w))},se=(c,u,h,v,g,_,E,x,w)=>{c=c||Se,u=u||Se;const y=c.length,T=u.length,I=Math.min(y,T);let N;for(N=0;N<I;N++){const L=u[N]=w?Zt(u[N]):Rt(u[N]);M(c[N],L,h,null,g,_,E,x,w)}y>T?$t(c,g,_,!0,!1,I):_t(u,h,v,g,_,E,x,w,I)},yn=(c,u,h,v,g,_,E,x,w)=>{let y=0;const T=u.length;let I=c.length-1,N=T-1;for(;y<=I&&y<=N;){const L=c[y],$=u[y]=w?Zt(u[y]):Rt(u[y]);if(Xe(L,$))M(L,$,h,null,g,_,E,x,w);else break;y++}for(;y<=I&&y<=N;){const L=c[I],$=u[N]=w?Zt(u[N]):Rt(u[N]);if(Xe(L,$))M(L,$,h,null,g,_,E,x,w);else break;I--,N--}if(y>I){if(y<=N){const L=N+1,$=L<T?u[L].el:v;for(;y<=N;)M(null,u[y]=w?Zt(u[y]):Rt(u[y]),h,$,g,_,E,x,w),y++}}else if(y>N)for(;y<=I;)Tt(c[y],g,_,!0),y++;else{const L=y,$=y,V=new Map;for(y=$;y<=N;y++){const bt=u[y]=w?Zt(u[y]):Rt(u[y]);bt.key!=null&&V.set(bt.key,y)}let W,rt=0;const wt=N-$+1;let ke=!1,Da=0;const Ve=new Array(wt);for(y=0;y<wt;y++)Ve[y]=0;for(y=L;y<=I;y++){const bt=c[y];if(rt>=wt){Tt(bt,g,_,!0);continue}let Nt;if(bt.key!=null)Nt=V.get(bt.key);else for(W=$;W<=N;W++)if(Ve[W-$]===0&&Xe(bt,u[W])){Nt=W;break}Nt===void 0?Tt(bt,g,_,!0):(Ve[Nt-$]=y+1,Nt>=Da?Da=Nt:ke=!0,M(bt,u[Nt],h,null,g,_,E,x,w),rt++)}const $a=ke?tc(Ve):Se;for(W=$a.length-1,y=wt-1;y>=0;y--){const bt=$+y,Nt=u[bt],Ba=bt+1<T?u[bt+1].el:v;Ve[y]===0?M(null,Nt,h,Ba,g,_,E,x,w):ke&&(W<0||y!==$a[W]?oe(Nt,h,Ba,2):W--)}}},oe=(c,u,h,v,g=null)=>{const{el:_,type:E,transition:x,children:w,shapeFlag:y}=c;if(y&6){oe(c.component.subTree,u,h,v);return}if(y&128){c.suspense.move(u,h,v);return}if(y&64){E.move(c,u,h,Ae);return}if(E===ht){r(_,u,h);for(let I=0;I<w.length;I++)oe(w[I],u,h,v);r(c.anchor,u,h);return}if(E===$n){F(c,u,h);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(_),r(_,u,h),vt(()=>x.enter(_),g);else{const{leave:I,delayLeave:N,afterLeave:L}=x,$=()=>r(_,u,h),V=()=>{I(_,()=>{$(),L&&L()})};N?N(_,$,V):V()}else r(_,u,h)},Tt=(c,u,h,v=!1,g=!1)=>{const{type:_,props:E,ref:x,children:w,dynamicChildren:y,shapeFlag:T,patchFlag:I,dirs:N}=c;if(x!=null&&Yr(x,null,h,c,!0),T&256){u.ctx.deactivate(c);return}const L=T&1&&N,$=!zn(c);let V;if($&&(V=E&&E.onVnodeBeforeUnmount)&&Mt(V,u,c),T&6)yo(c.component,h,v);else{if(T&128){c.suspense.unmount(h,v);return}L&&le(c,null,u,"beforeUnmount"),T&64?c.type.remove(c,u,h,g,Ae,v):y&&(_!==ht||I>0&&I&64)?$t(y,u,h,!1,!0):(_===ht&&I&384||!g&&T&16)&&$t(w,u,h),v&&ja(c)}($&&(V=E&&E.onVnodeUnmounted)||L)&&vt(()=>{V&&Mt(V,u,c),L&&le(c,null,u,"unmounted")},h)},ja=c=>{const{type:u,el:h,anchor:v,transition:g}=c;if(u===ht){bo(h,v);return}if(u===$n){P(c);return}const _=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:x}=g,w=()=>E(h,_);x?x(c.el,_,w):w()}else _()},bo=(c,u)=>{let h;for(;c!==u;)h=b(c),a(c),c=h;a(u)},yo=(c,u,h)=>{const{bum:v,scope:g,update:_,subTree:E,um:x}=c;v&&Ar(v),g.stop(),_&&(_.active=!1,Tt(E,c,u,h)),x&&vt(x,u),vt(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$t=(c,u,h,v=!1,g=!1,_=0)=>{for(let E=_;E<c.length;E++)Tt(c[E],u,h,v,g)},xn=c=>c.shapeFlag&6?xn(c.component.subTree):c.shapeFlag&128?c.suspense.next():b(c.anchor||c.el),za=(c,u,h)=>{c==null?u._vnode&&Tt(u._vnode,null,null,!0):M(u._vnode||null,c,u,null,null,null,h),Ja(),vs(),u._vnode=c},Ae={p:M,um:Tt,m:oe,r:ja,mt:yr,mc:_t,pc:K,pbc:Dt,n:xn,o:t};let xr,_r;return e&&([xr,_r]=e(Ae)),{render:za,hydrate:xr,createApp:Hl(za,xr)}}function ce({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ms(t,e,n=!1){const r=t.children,a=e.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Zt(a[i]),o.el=s.el),n||Ms(s,o)),o.type===dr&&(o.el=s.el)}}function tc(t){const e=t.slice(),n=[0];let r,a,i,s,o;const l=t.length;for(r=0;r<l;r++){const f=t[r];if(f!==0){if(a=n[n.length-1],t[a]<f){e[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,t[n[o]]<f?i=o+1:s=o;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=e[s];return n}const ec=t=>t.__isTeleport,ht=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),Ge=[];let Ct=null;function G(t=!1){Ge.push(Ct=t?null:[])}function nc(){Ge.pop(),Ct=Ge[Ge.length-1]||null}let sn=1;function oi(t){sn+=t}function Rs(t){return t.dynamicChildren=sn>0?Ct||Se:null,nc(),sn>0&&Ct&&Ct.push(t),t}function nt(t,e,n,r,a,i){return Rs(p(t,e,n,r,a,i,!0))}function rc(t,e,n,r,a){return Rs(D(t,e,n,r,a,!0))}function Hr(t){return t?t.__v_isVNode===!0:!1}function Xe(t,e){return t.type===e.type&&t.key===e.key}const mr="__vInternal",Fs=({key:t})=>t??null,Bn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?at(t)||ut(t)||j(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,a=null,i=t===ht?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fs(e),ref:e&&Bn(e),scopeId:fr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ot};return o?(xa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=at(n)?8:16),sn>0&&!s&&Ct&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ct.push(l),l}const D=ac;function ac(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===xl)&&(t=ye),Hr(t)){const o=Le(t,e,!0);return n&&xa(o,n),sn>0&&!i&&Ct&&(o.shapeFlag&6?Ct[Ct.indexOf(t)]=o:Ct.push(o)),o.patchFlag|=-2,o}if(pc(t)&&(t=t.__vccOpts),e){e=ic(e);let{class:o,style:l}=e;o&&!at(o)&&(e.class=sr(o)),q(l)&&(cs(l)&&!R(l)&&(l=ot({},l)),e.style=ir(l))}const s=at(t)?1:wl(t)?128:ec(t)?64:q(t)?4:j(t)?2:0;return p(t,e,n,r,a,s,i,!0)}function ic(t){return t?cs(t)||mr in t?ot({},t):t:null}function Le(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=t,o=e?sc(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&Fs(o),ref:e&&e.ref?n&&a?R(a)?a.concat(Bn(e)):[a,Bn(e)]:Bn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Le(t.ssContent),ssFallback:t.ssFallback&&Le(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Lt(t=" ",e=0){return D(dr,null,t,e)}function He(t,e){const n=D($n,null,t);return n.staticCount=e,n}function ya(t="",e=!1){return e?(G(),rc(ye,null,t)):D(ye,null,t)}function Rt(t){return t==null||typeof t=="boolean"?D(ye):R(t)?D(ht,null,t.slice()):typeof t=="object"?Zt(t):D(dr,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Le(t)}function xa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(R(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),xa(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(mr in e)?e._ctx=Ot:a===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[Lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function sc(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=sr([e.class,r.class]));else if(a==="style")e.style=ir([e.style,r.style]);else if(tr(a)){const i=e[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(e[a]=i?[].concat(i,s):s)}else a!==""&&(e[a]=r[a])}return e}function Mt(t,e,n,r=null){Pt(t,e,7,[n,r])}const oc=Cs();let lc=0;function cc(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||oc,i={uid:lc++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ss(r,a),emitsOptions:bs(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pl.bind(null,i),t.ce&&t.ce(i),i}let st=null,_a,Ee,li="__VUE_INSTANCE_SETTERS__";(Ee=Mr()[li])||(Ee=Mr()[li]=[]),Ee.push(t=>st=t),_a=t=>{Ee.length>1?Ee.forEach(e=>e(t)):Ee[0](t)};const je=t=>{_a(t),t.scope.on()},ve=()=>{st&&st.scope.off(),_a(null)};function Ls(t){return t.vnode.shapeFlag&4}let on=!1;function fc(t,e=!1){on=e;const{props:n,children:r}=t.vnode,a=Ls(t);Kl(t,n,a,e),Ql(t,r);const i=a?uc(t,e):void 0;return on=!1,i}function uc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fs(new Proxy(t.ctx,jl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?mc(t):null;je(t),$e();const i=te(r,t,0,[t.props,a]);if(Be(),ve(),Vi(i)){if(i.then(ve,ve),e)return i.then(s=>{ci(t,s,e)}).catch(s=>{lr(s,t,0)});t.asyncDep=i}else ci(t,i,e)}else js(t,e)}function ci(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:q(e)&&(t.setupState=ms(e)),js(t,n)}let fi;function js(t,e,n){const r=t.type;if(!t.render){if(!e&&fi&&!r.render){const a=r.template||ga(t).template;if(a){const{isCustomElement:i,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:l}=r,f=ot(ot({isCustomElement:i,delimiters:o},s),l);r.render=fi(a,f)}}t.render=r.render||St}{je(t),$e();try{zl(t)}finally{Be(),ve()}}}function dc(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function mc(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return dc(t)},slots:t.slots,emit:t.emit,expose:e}}function wa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ms(fs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ze)return Ze[n](t)},has(e,n){return n in e||n in Ze}}))}function hc(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function pc(t){return j(t)&&"__vccOpts"in t}const fe=(t,e)=>ll(t,e,on);function vc(t,e,n){const r=arguments.length;return r===2?q(e)&&!R(e)?Hr(e)?D(t,null,[e]):D(t,e):D(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hr(n)&&(n=[n]),D(t,e,n))}const gc=Symbol.for("v-scx"),bc=()=>Dn(gc),yc="3.3.8",xc="http://www.w3.org/2000/svg",de=typeof document<"u"?document:null,ui=de&&de.createElement("template"),_c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?de.createElementNS(xc,t):de.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>de.createTextNode(t),createComment:t=>de.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>de.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const s=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ui.innerHTML=r?`<svg>${t}</svg>`:t;const o=ui.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wc=Symbol("_vtc");function Ac(t,e,n){const r=t[wc];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const kc=Symbol("_vod");function Ec(t,e,n){const r=t.style,a=at(n);if(n&&!a){if(e&&!at(e))for(const i in e)n[i]==null&&Wr(r,i,"");for(const i in n)Wr(r,i,n[i])}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),kc in t&&(r.display=i)}}const di=/\s*!important$/;function Wr(t,e,n){if(R(n))n.forEach(r=>Wr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Oc(t,e);di.test(n)?t.setProperty(De(r),n.replace(di,""),"important"):t[r]=n}}const mi=["Webkit","Moz","ms"],Or={};function Oc(t,e){const n=Or[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Or[e]=r;r=ar(r);for(let a=0;a<mi.length;a++){const i=mi[a]+r;if(i in t)return Or[e]=i}return e}const hi="http://www.w3.org/1999/xlink";function Cc(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hi,e.slice(6,e.length)):t.setAttributeNS(hi,e,n);else{const i=No(e);n==null||i&&!Ji(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ic(t,e,n,r,a,i,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,a,i),t[e]=n??"";return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){t._value=n;const f=o==="OPTION"?t.getAttribute("value"):t.value,d=n??"";f!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=Ji(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Sc(t,e,n,r){t.addEventListener(e,n,r)}function Pc(t,e,n,r){t.removeEventListener(e,n,r)}const pi=Symbol("_vei");function Tc(t,e,n,r,a=null){const i=t[pi]||(t[pi]={}),s=i[e];if(r&&s)s.value=r;else{const[o,l]=Nc(e);if(r){const f=i[e]=Fc(r,a);Sc(t,o,f,l)}else s&&(Pc(t,o,s,l),i[e]=void 0)}}const vi=/(?:Once|Passive|Capture)$/;function Nc(t){let e;if(vi.test(t)){e={};let r;for(;r=t.match(vi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):De(t.slice(2)),e]}let Cr=0;const Mc=Promise.resolve(),Rc=()=>Cr||(Mc.then(()=>Cr=0),Cr=Date.now());function Fc(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(Lc(r,n.value),e,5,[r])};return n.value=t,n.attached=Rc(),n}function Lc(t,e){if(R(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const gi=/^on[a-z]/,jc=(t,e,n,r,a=!1,i,s,o,l)=>{e==="class"?Ac(t,r,a):e==="style"?Ec(t,n,r):tr(e)?ia(e)||Tc(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zc(t,e,r,a))?Ic(t,e,r,i,s,o,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cc(t,e,r,a))};function zc(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&gi.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gi.test(e)&&at(n)?!1:e in t}const Dc=ot({patchProp:jc},_c);let bi;function $c(){return bi||(bi=ql(Dc))}const Bc=(...t)=>{const e=$c().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Uc(r);if(!a)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},e};function Uc(t){return at(t)?document.querySelector(t):t}function yi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yi(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jn(t){"@babel/helpers - typeof";return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jn(t)}function Yc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xi(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Hc(t,e,n){return e&&xi(t.prototype,e),n&&xi(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Aa(t,e){return Kc(t)||Xc(t,e)||zs(t,e)||Jc()}function mn(t){return Wc(t)||Vc(t)||zs(t)||Qc()}function Wc(t){if(Array.isArray(t))return Kr(t)}function Kc(t){if(Array.isArray(t))return t}function Vc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(t);!(a=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function zs(t,e){if(t){if(typeof t=="string")return Kr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(t,e)}}function Kr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Qc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _i=function(){},ka={},Ds={},$s=null,Bs={mark:_i,measure:_i};try{typeof window<"u"&&(ka=window),typeof document<"u"&&(Ds=document),typeof MutationObserver<"u"&&($s=MutationObserver),typeof performance<"u"&&(Bs=performance)}catch{}var qc=ka.navigator||{},wi=qc.userAgent,Ai=wi===void 0?"":wi,ne=ka,Q=Ds,ki=$s,Cn=Bs;ne.document;var Xt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",Us=~Ai.indexOf("MSIE")||~Ai.indexOf("Trident/"),In,Sn,Pn,Tn,Nn,Ht="___FONT_AWESOME___",Vr=16,Ys="fa",Hs="svg-inline--fa",xe="data-fa-i2svg",Xr="data-fa-pseudo-element",Zc="data-fa-pseudo-element-pending",Ea="data-prefix",Oa="data-icon",Ei="fontawesome-i2svg",Gc="async",tf=["HTML","HEAD","STYLE","SCRIPT"],Ws=function(){try{return!0}catch{return!1}}(),X="classic",et="sharp",Ca=[X,et];function hn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[X]}})}var ln=hn((In={},it(In,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),it(In,et,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),In)),cn=hn((Sn={},it(Sn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),it(Sn,et,{solid:"fass",regular:"fasr",light:"fasl"}),Sn)),fn=hn((Pn={},it(Pn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),it(Pn,et,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Pn)),ef=hn((Tn={},it(Tn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),it(Tn,et,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Tn)),nf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ks="fa-layers-text",rf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,af=hn((Nn={},it(Nn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),it(Nn,et,{900:"fass",400:"fasr",300:"fasl"}),Nn)),Vs=[1,2,3,4,5,6,7,8,9,10],sf=Vs.concat([11,12,13,14,15,16,17,18,19,20]),of=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],me={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},un=new Set;Object.keys(cn[X]).map(un.add.bind(un));Object.keys(cn[et]).map(un.add.bind(un));var lf=[].concat(Ca,mn(un),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",me.GROUP,me.SWAP_OPACITY,me.PRIMARY,me.SECONDARY]).concat(Vs.map(function(t){return"".concat(t,"x")})).concat(sf.map(function(t){return"w-".concat(t)})),tn=ne.FontAwesomeConfig||{};function cf(t){var e=Q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ff(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Q&&typeof Q.querySelector=="function"){var uf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uf.forEach(function(t){var e=Aa(t,2),n=e[0],r=e[1],a=ff(cf(n));a!=null&&(tn[r]=a)})}var Xs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ys,replacementClass:Hs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tn.familyPrefix&&(tn.cssPrefix=tn.familyPrefix);var ze=C(C({},Xs),tn);ze.autoReplaceSvg||(ze.observeMutations=!1);var S={};Object.keys(Xs).forEach(function(t){Object.defineProperty(S,t,{enumerable:!0,set:function(n){ze[t]=n,en.forEach(function(r){return r(S)})},get:function(){return ze[t]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(e){ze.cssPrefix=e,en.forEach(function(n){return n(S)})},get:function(){return ze.cssPrefix}});ne.FontAwesomeConfig=S;var en=[];function df(t){return en.push(t),function(){en.splice(en.indexOf(t),1)}}var qt=Vr,jt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mf(t){if(!(!t||!Xt)){var e=Q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return Q.head.insertBefore(e,r),t}}var hf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dn(){for(var t=12,e="";t-- >0;)e+=hf[Math.random()*62|0];return e}function We(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ia(t){return t.classList?We(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Qs(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Qs(t[n]),'" ')},"").trim()}function hr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Sa(t){return t.size!==jt.size||t.x!==jt.x||t.y!==jt.y||t.rotate!==jt.rotate||t.flipX||t.flipY}function vf(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function gf(t){var e=t.transform,n=t.width,r=n===void 0?Vr:n,a=t.height,i=a===void 0?Vr:a,s=t.startCentered,o=s===void 0?!1:s,l="";return o&&Us?l+="translate(".concat(e.x/qt-r/2,"em, ").concat(e.y/qt-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/qt,"em), calc(-50% + ").concat(e.y/qt,"em)) "):l+="translate(".concat(e.x/qt,"em, ").concat(e.y/qt,"em) "),l+="scale(".concat(e.size/qt*(e.flipX?-1:1),", ").concat(e.size/qt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var bf=`:root, :host {
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
}`;function Js(){var t=Ys,e=Hs,n=S.cssPrefix,r=S.replacementClass,a=bf;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Oi=!1;function Ir(){S.autoAddCss&&!Oi&&(mf(Js()),Oi=!0)}var yf={mixout:function(){return{dom:{css:Js,insertCss:Ir}}},hooks:function(){return{beforeDOMElementCreation:function(){Ir()},beforeI2svg:function(){Ir()}}}},Wt=ne||{};Wt[Ht]||(Wt[Ht]={});Wt[Ht].styles||(Wt[Ht].styles={});Wt[Ht].hooks||(Wt[Ht].hooks={});Wt[Ht].shims||(Wt[Ht].shims=[]);var It=Wt[Ht],qs=[],xf=function t(){Q.removeEventListener("DOMContentLoaded",t),qn=1,qs.map(function(e){return e()})},qn=!1;Xt&&(qn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),qn||Q.addEventListener("DOMContentLoaded",xf));function _f(t){Xt&&(qn?setTimeout(t,0):qs.push(t))}function pn(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Qs(t):"<".concat(e," ").concat(pf(r),">").concat(i.map(pn).join(""),"</").concat(e,">")}function Ci(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wf=function(e,n){return function(r,a,i,s){return e.call(n,r,a,i,s)}},Sr=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=a!==void 0?wf(n,a):n,l,f,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<s;l++)f=i[l],d=o(d,e[f],f,e);return d};function Af(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Qr(t){var e=Af(t);return e.length===1?e[0].toString(16):null}function kf(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ii(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Jr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ii(e);typeof It.hooks.addPack=="function"&&!a?It.hooks.addPack(t,Ii(e)):It.styles[t]=C(C({},It.styles[t]||{}),i),t==="fas"&&Jr("fa",e)}var Mn,Rn,Fn,Ce=It.styles,Ef=It.shims,Of=(Mn={},it(Mn,X,Object.values(fn[X])),it(Mn,et,Object.values(fn[et])),Mn),Pa=null,Zs={},Gs={},to={},eo={},no={},Cf=(Rn={},it(Rn,X,Object.keys(ln[X])),it(Rn,et,Object.keys(ln[et])),Rn);function If(t){return~lf.indexOf(t)}function Sf(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!If(a)?a:null}var ro=function(){var e=function(i){return Sr(Ce,function(s,o,l){return s[l]=Sr(o,i,{}),s},{})};Zs=e(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Gs=e(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),no=e(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Ce||S.autoFetchSvg,r=Sr(Ef,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});to=r.names,eo=r.unicodes,Pa=pr(S.styleDefault,{family:S.familyDefault})};df(function(t){Pa=pr(t.styleDefault,{family:S.familyDefault})});ro();function Ta(t,e){return(Zs[t]||{})[e]}function Pf(t,e){return(Gs[t]||{})[e]}function he(t,e){return(no[t]||{})[e]}function ao(t){return to[t]||{prefix:null,iconName:null}}function Tf(t){var e=eo[t],n=Ta("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return Pa}var Na=function(){return{prefix:null,iconName:null,rest:[]}};function pr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?X:n,a=ln[r][t],i=cn[r][t]||cn[r][a],s=t in It.styles?t:null;return i||s||null}var Si=(Fn={},it(Fn,X,Object.keys(fn[X])),it(Fn,et,Object.keys(fn[et])),Fn);function vr(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},it(e,X,"".concat(S.cssPrefix,"-").concat(X)),it(e,et,"".concat(S.cssPrefix,"-").concat(et)),e),s=null,o=X;(t.includes(i[X])||t.some(function(f){return Si[X].includes(f)}))&&(o=X),(t.includes(i[et])||t.some(function(f){return Si[et].includes(f)}))&&(o=et);var l=t.reduce(function(f,d){var m=Sf(S.cssPrefix,d);if(Ce[d]?(d=Of[o].includes(d)?ef[o][d]:d,s=d,f.prefix=d):Cf[o].indexOf(d)>-1?(s=d,f.prefix=pr(d,{family:o})):m?f.iconName=m:d!==S.replacementClass&&d!==i[X]&&d!==i[et]&&f.rest.push(d),!a&&f.prefix&&f.iconName){var b=s==="fa"?ao(f.iconName):{},A=he(f.prefix,f.iconName);b.prefix&&(s=null),f.iconName=b.iconName||A||f.iconName,f.prefix=b.prefix||f.prefix,f.prefix==="far"&&!Ce.far&&Ce.fas&&!S.autoFetchSvg&&(f.prefix="fas")}return f},Na());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===et&&(Ce.fass||S.autoFetchSvg)&&(l.prefix="fass",l.iconName=he(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=re()||"fas"),l}var Nf=function(){function t(){Yc(this,t),this.definitions={}}return Hc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=C(C({},n.definitions[o]||{}),s[o]),Jr(o,s[o]);var l=fn[X][o];l&&Jr(l,s[o]),ro()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,f=s.icon,d=f[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=f)}),n[o][l]=f}),n}}]),t}(),Pi=[],Ie={},Re={},Mf=Object.keys(Re);function Rf(t,e){var n=e.mixoutsTo;return Pi=t,Ie={},Object.keys(Re).forEach(function(r){Mf.indexOf(r)===-1&&delete Re[r]}),Pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Jn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){Ie[s]||(Ie[s]=[]),Ie[s].push(i[s])})}r.provides&&r.provides(Re)}),n}function qr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ie[t]||[];return i.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function _e(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=Ie[t]||[];a.forEach(function(i){i.apply(null,n)})}function Kt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Re[t]?Re[t].apply(null,e):void 0}function Zr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||re();if(e)return e=he(n,e)||e,Ci(io.definitions,n,e)||Ci(It.styles,n,e)}var io=new Nf,Ff=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,_e("noAuto")},Lf={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xt?(_e("beforeI2svg",e),Kt("pseudoElements2svg",e),Kt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,_f(function(){zf({autoReplaceSvgRoot:n}),_e("watch",e)})}},jf={icon:function(e){if(e===null)return null;if(Jn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:he(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=pr(e[0]);return{prefix:r,iconName:he(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(S.cssPrefix,"-"))>-1||e.match(nf))){var a=vr(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||re(),iconName:he(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=re();return{prefix:i,iconName:he(i,e)||e}}}},yt={noAuto:Ff,config:S,dom:Lf,parse:jf,library:io,findIconDefinition:Zr,toHtml:pn},zf=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(It.styles).length>0||S.autoFetchSvg)&&Xt&&S.autoReplaceSvg&&yt.dom.i2svg({node:r})};function gr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Xt){var r=Q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Df(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,s=t.transform;if(Sa(s)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=hr(C(C({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function $f(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,s=i===!0?"".concat(e,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:s}),children:r}]}]}function Ma(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,s=t.transform,o=t.symbol,l=t.title,f=t.maskId,d=t.titleId,m=t.extra,b=t.watchable,A=b===void 0?!1:b,z=r.found?r:n,M=z.width,B=z.height,k=a==="fak",O=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(xt){return m.classes.indexOf(xt)===-1}).filter(function(xt){return xt!==""||!!xt}).concat(m.classes).join(" "),F={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(B)})},P=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/B*16*.0625,"em")}:{};A&&(F.attributes[xe]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||dn())},children:[l]}),delete F.attributes.title);var H=C(C({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:s,symbol:o,styles:C(C({},P),m.styles)}),lt=r.found&&n.found?Kt("generateAbstractMask",H)||{children:[],attributes:{}}:Kt("generateAbstractIcon",H)||{children:[],attributes:{}},ct=lt.children,_t=lt.attributes;return H.children=ct,H.attributes=_t,o?$f(H):Df(H)}function Ti(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,s=t.extra,o=t.watchable,l=o===void 0?!1:o,f=C(C(C({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[xe]="");var d=C({},s.styles);Sa(a)&&(d.transform=gf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=hr(d);m.length>0&&(f.style=m);var b=[];return b.push({tag:"span",attributes:f,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Bf(t){var e=t.content,n=t.title,r=t.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Pr=It.styles;function Gr(t){var e=t[0],n=t[1],r=t.slice(4),a=Aa(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(me.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(me.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(me.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:s}}var Uf={found:!1,width:512,height:512};function Yf(t,e){!Ws&&!S.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ta(t,e){var n=e;return e==="fa"&&S.styleDefault!==null&&(e=re()),new Promise(function(r,a){if(Kt("missingIconAbstract"),n==="fa"){var i=ao(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Pr[e]&&Pr[e][t]){var s=Pr[e][t];return r(Gr(s))}Yf(t,e),r(C(C({},Uf),{},{icon:S.showMissingIcons&&t?Kt("missingIconAbstract")||{}:{}}))})}var Ni=function(){},ea=S.measurePerformance&&Cn&&Cn.mark&&Cn.measure?Cn:{mark:Ni,measure:Ni},qe='FA "6.4.2"',Hf=function(e){return ea.mark("".concat(qe," ").concat(e," begins")),function(){return so(e)}},so=function(e){ea.mark("".concat(qe," ").concat(e," ends")),ea.measure("".concat(qe," ").concat(e),"".concat(qe," ").concat(e," begins"),"".concat(qe," ").concat(e," ends"))},Ra={begin:Hf,end:so},Un=function(){};function Mi(t){var e=t.getAttribute?t.getAttribute(xe):null;return typeof e=="string"}function Wf(t){var e=t.getAttribute?t.getAttribute(Ea):null,n=t.getAttribute?t.getAttribute(Oa):null;return e&&n}function Kf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(S.replacementClass)}function Vf(){if(S.autoReplaceSvg===!0)return Yn.replace;var t=Yn[S.autoReplaceSvg];return t||Yn.replace}function Xf(t){return Q.createElementNS("http://www.w3.org/2000/svg",t)}function Qf(t){return Q.createElement(t)}function oo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Xf:Qf:n;if(typeof t=="string")return Q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])});var i=t.children||[];return i.forEach(function(s){a.appendChild(oo(s,{ceFn:r}))}),a}function Jf(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Yn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(oo(a),n)}),n.getAttribute(xe)===null&&S.keepOriginalSource){var r=Q.createComment(Jf(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ia(n).indexOf(S.replacementClass))return Yn.replace(e);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===S.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return pn(o)}).join(`
`);n.setAttribute(xe,""),n.innerHTML=s}};function Ri(t){t()}function lo(t,e){var n=typeof e=="function"?e:Un;if(t.length===0)n();else{var r=Ri;S.mutateApproach===Gc&&(r=ne.requestAnimationFrame||Ri),r(function(){var a=Vf(),i=Ra.begin("mutate");t.map(a),i(),n()})}}var Fa=!1;function co(){Fa=!0}function na(){Fa=!1}var Zn=null;function Fi(t){if(ki&&S.observeMutations){var e=t.treeCallback,n=e===void 0?Un:e,r=t.nodeCallback,a=r===void 0?Un:r,i=t.pseudoElementsCallback,s=i===void 0?Un:i,o=t.observeMutationsRoot,l=o===void 0?Q:o;Zn=new ki(function(f){if(!Fa){var d=re();We(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Mi(m.addedNodes[0])&&(S.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&Mi(m.target)&&~of.indexOf(m.attributeName))if(m.attributeName==="class"&&Wf(m.target)){var b=vr(Ia(m.target)),A=b.prefix,z=b.iconName;m.target.setAttribute(Ea,A||d),z&&m.target.setAttribute(Oa,z)}else Kf(m.target)&&a(m.target)})}}),Xt&&Zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qf(){Zn&&Zn.disconnect()}function Zf(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Gf(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=vr(Ia(t));return a.prefix||(a.prefix=re()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Pf(a.prefix,t.innerText)||Ta(a.prefix,Qr(t.innerText))),!a.iconName&&S.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function tu(t){var e=We(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return S.autoA11y&&(n?e["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||dn()):(e["aria-hidden"]="true",e.focusable="false")),e}function eu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:jt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Li(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Gf(t),r=n.iconName,a=n.prefix,i=n.rest,s=tu(t),o=qr("parseNodeAttributes",{},t),l=e.styleParser?Zf(t):[];return C({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:jt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var nu=It.styles;function fo(t){var e=S.autoReplaceSvg==="nest"?Li(t,{styleParser:!1}):Li(t);return~e.extra.classes.indexOf(Ks)?Kt("generateLayersText",t,e):Kt("generateSvgReplacementMutation",t,e)}var ae=new Set;Ca.map(function(t){ae.add("fa-".concat(t))});Object.keys(ln[X]).map(ae.add.bind(ae));Object.keys(ln[et]).map(ae.add.bind(ae));ae=mn(ae);function ji(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xt)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(Ei,"-").concat(m))},a=function(m){return n.remove("".concat(Ei,"-").concat(m))},i=S.autoFetchSvg?ae:Ca.map(function(d){return"fa-".concat(d)}).concat(Object.keys(nu));i.includes("fa")||i.push("fa");var s=[".".concat(Ks,":not([").concat(xe,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(xe,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=We(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ra.begin("onTree"),f=o.reduce(function(d,m){try{var b=fo(m);b&&d.push(b)}catch(A){Ws||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(f).then(function(b){lo(b,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(b){l(),m(b)})})}function ru(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fo(t).then(function(n){n&&lo([n],e)})}function au(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Zr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Zr(a||{})),t(r,C(C({},n),{},{mask:a}))}}var iu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?jt:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,d=f===void 0?null:f,m=n.title,b=m===void 0?null:m,A=n.titleId,z=A===void 0?null:A,M=n.classes,B=M===void 0?[]:M,k=n.attributes,O=k===void 0?{}:k,F=n.styles,P=F===void 0?{}:F;if(e){var H=e.prefix,lt=e.iconName,ct=e.icon;return gr(C({type:"icon"},e),function(){return _e("beforeDOMElementCreation",{iconDefinition:e,params:n}),S.autoA11y&&(b?O["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(z||dn()):(O["aria-hidden"]="true",O.focusable="false")),Ma({icons:{main:Gr(ct),mask:l?Gr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:lt,transform:C(C({},jt),a),symbol:s,title:b,maskId:d,titleId:z,extra:{attributes:O,styles:P,classes:B}})})}},su={mixout:function(){return{icon:au(iu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ji,n.nodeCallback=ru,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?Q:r,i=n.callback,s=i===void 0?function(){}:i;return ji(a,s)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(A,z){Promise.all([ta(a,o),d.iconName?ta(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var B=Aa(M,2),k=B[0],O=B[1];A([n,Ma({icons:{main:k,mask:O},prefix:o,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:s,extra:b,watchable:!0})])}).catch(z)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=hr(o);l.length>0&&(a.style=l);var f;return Sa(s)&&(f=Kt("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},ou={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return gr({type:"layer"},function(){_e("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(mn(i)).join(" ")},children:s}]})}}}},lu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,f=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return gr({type:"counter",content:n},function(){return _e("beforeDOMElementCreation",{content:n,params:r}),Bf({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(mn(o))}})})}}}},cu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?jt:a,s=r.title,o=s===void 0?null:s,l=r.classes,f=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,A=b===void 0?{}:b;return gr({type:"text",content:n},function(){return _e("beforeDOMElementCreation",{content:n,params:r}),Ti({content:n,transform:C(C({},jt),i),title:o,extra:{attributes:m,styles:A,classes:["".concat(S.cssPrefix,"-layers-text")].concat(mn(f))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Us){var f=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/f,l=d.height/f}return S.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ti({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},fu=new RegExp('"',"ug"),zi=[1105920,1112319];function uu(t){var e=t.replace(fu,""),n=kf(e,0),r=n>=zi[0]&&n<=zi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Qr(a?e[0]:e),isSecondary:r||a}}function Di(t,e){var n="".concat(Zc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=We(t.children),s=i.filter(function(ct){return ct.getAttribute(Xr)===e})[0],o=ne.getComputedStyle(t,e),l=o.getPropertyValue("font-family").match(rf),f=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?et:X,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cn[b][l[2].toLowerCase()]:af[b][f],z=uu(m),M=z.value,B=z.isSecondary,k=l[0].startsWith("FontAwesome"),O=Ta(A,M),F=O;if(k){var P=Tf(M);P.iconName&&P.prefix&&(O=P.iconName,A=P.prefix)}if(O&&!B&&(!s||s.getAttribute(Ea)!==A||s.getAttribute(Oa)!==F)){t.setAttribute(n,F),s&&t.removeChild(s);var H=eu(),lt=H.extra;lt.attributes[Xr]=e,ta(O,A).then(function(ct){var _t=Ma(C(C({},H),{},{icons:{main:ct,mask:Na()},prefix:A,iconName:F,extra:lt,watchable:!0})),xt=Q.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(xt,t.firstChild):t.appendChild(xt),xt.outerHTML=_t.map(function(Dt){return pn(Dt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function du(t){return Promise.all([Di(t,"::before"),Di(t,"::after")])}function mu(t){return t.parentNode!==document.head&&!~tf.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $i(t){if(Xt)return new Promise(function(e,n){var r=We(t.querySelectorAll("*")).filter(mu).map(du),a=Ra.begin("searchPseudoElements");co(),Promise.all(r).then(function(){a(),na(),e()}).catch(function(){a(),na(),n()})})}var hu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$i,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Q:r;S.searchPseudoElements&&$i(a)}}},Bi=!1,pu={mixout:function(){return{dom:{unwatch:function(){co(),Bi=!0}}}},hooks:function(){return{bootstrap:function(){Fi(qr("mutationObserverCallbacks",{}))},noAuto:function(){qf()},watch:function(n){var r=n.observeMutationsRoot;Bi?na():Fi(qr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ui=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},vu={mixout:function(){return{parse:{transform:function(n){return Ui(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ui(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(d)},b={transform:"translate(".concat(s/2*-1," -256)")},A={outer:o,inner:m,path:b};return{tag:"g",attributes:C({},A.outer),children:[{tag:"g",attributes:C({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),A.path)}]}]}}}},Tr={x:0,y:0,width:"100%",height:"100%"};function Yi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function gu(t){return t.tag==="g"?t.children:[t]}var bu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vr(a.split(" ").map(function(s){return s.trim()})):Na();return i.prefix||(i.prefix=re()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,d=i.icon,m=s.width,b=s.icon,A=vf({transform:l,containerWidth:m,iconWidth:f}),z={tag:"rect",attributes:C(C({},Tr),{},{fill:"white"})},M=d.children?{children:d.children.map(Yi)}:{},B={tag:"g",attributes:C({},A.inner),children:[Yi(C({tag:d.tag,attributes:C(C({},d.attributes),A.path)},M))]},k={tag:"g",attributes:C({},A.outer),children:[B]},O="mask-".concat(o||dn()),F="clip-".concat(o||dn()),P={tag:"mask",attributes:C(C({},Tr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:gu(b)},P]};return r.push(H,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},Tr)}),{children:r,attributes:a}}}},yu={provides:function(e){var n=!1;ne.matchMedia&&(n=ne.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=C(C({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},_u=[yf,su,ou,lu,cu,hu,pu,vu,bu,yu,xu];Rf(_u,{mixoutsTo:yt});yt.noAuto;yt.config;var wu=yt.library;yt.dom;var ra=yt.parse;yt.findIconDefinition;yt.toHtml;var Au=yt.icon;yt.layer;yt.text;yt.counter;function Hi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Ut(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hi(Object(n),!0).forEach(function(r){pt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gn(t){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gn(t)}function pt(t,e,n){return e=Cu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ku(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Eu(t,e){if(t==null)return{};var n=ku(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ou(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Cu(t){var e=Ou(t,"string");return typeof e=="symbol"?e:String(e)}var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},uo={exports:{}};(function(t){(function(e){var n=function(k,O,F){if(!f(O)||m(O)||b(O)||A(O)||l(O))return O;var P,H=0,lt=0;if(d(O))for(P=[],lt=O.length;H<lt;H++)P.push(n(k,O[H],F));else{P={};for(var ct in O)Object.prototype.hasOwnProperty.call(O,ct)&&(P[k(ct,F)]=n(k,O[ct],F))}return P},r=function(k,O){O=O||{};var F=O.separator||"_",P=O.split||/(?=[A-Z])/;return k.split(P).join(F)},a=function(k){return z(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},s=function(k,O){return r(k,O).toLowerCase()},o=Object.prototype.toString,l=function(k){return typeof k=="function"},f=function(k){return k===Object(k)},d=function(k){return o.call(k)=="[object Array]"},m=function(k){return o.call(k)=="[object Date]"},b=function(k){return o.call(k)=="[object RegExp]"},A=function(k){return o.call(k)=="[object Boolean]"},z=function(k){return k=k-0,k===k},M=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(P,H){return F(P,k,H)}},B={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(k,O){return n(M(a,O),k)},decamelizeKeys:function(k,O){return n(M(s,O),k,O)},pascalizeKeys:function(k,O){return n(M(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=B:e.humps=B})(Iu)})(uo);var Su=uo.exports,Pu=["class","style"];function Tu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Su.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Nu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function mo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return mo(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var d=t.attributes[f];switch(f){case"class":l.class=Nu(d);break;case"style":l.style=Tu(d);break;default:l.attrs[f]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Eu(n,Pu);return vc(t.tag,Ut(Ut(Ut({},e),{},{class:a.class,style:Ut(Ut({},a.style),s)},a.attrs),o),r)}var ho=!1;try{ho=!0}catch{}function Mu(){if(!ho&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Nr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?pt({},t,e):{}}function Ru(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},pt(e,"fa-".concat(t.size),t.size!==null),pt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),pt(e,"fa-pull-".concat(t.pull),t.pull!==null),pt(e,"fa-swap-opacity",t.swapOpacity),pt(e,"fa-bounce",t.bounce),pt(e,"fa-shake",t.shake),pt(e,"fa-beat",t.beat),pt(e,"fa-fade",t.fade),pt(e,"fa-beat-fade",t.beatFade),pt(e,"fa-flash",t.flash),pt(e,"fa-spin-pulse",t.spinPulse),pt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Wi(t){if(t&&Gn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ra.icon)return ra.icon(t);if(t===null)return null;if(Gn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Fu=El({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=fe(function(){return Wi(e.icon)}),i=fe(function(){return Nr("classes",Ru(e))}),s=fe(function(){return Nr("transform",typeof e.transform=="string"?ra.transform(e.transform):e.transform)}),o=fe(function(){return Nr("mask",Wi(e.mask))}),l=fe(function(){return Au(a.value,Ut(Ut(Ut(Ut({},i.value),s.value),o.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});jn(l,function(d){if(!d)return Mu("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var f=fe(function(){return l.value?mo(l.value.abstract[0],{},r):null});return function(){return f.value}}}),Lu={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},ju={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},zu={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Du={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]},$u={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},Bu={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const Uu="/F2ELegislator/assets/logo-39f3ca48.png",Yu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI/SURBVHgB7Zc7b9NQFMf/105QiIPwEgaWGokFJKpWrCCFgYGHlGQgSibKykQ/AGqzsfH4AmUAJQ1Dw8RY2krMERJ0xJk7YCRSIgX7cG6N07hV6Y0fEkN+kuXr43vP/ftxzj0X+A8QiIlZWTOHudyCDlgEzZI2EuQQUW/YbnxU8RFZRK7eKumUKUOjJRDME7w7IK3rYtRkQTaSEiGffHS2sAKiJ1MNFOJF9tfPptN95By7hSngp7c06Js8yEI0bBfuraNvRVMdnYAAiaWzD/k2I4nQkVmLKWAsZJQrbGBaEUa9s8T/fAmJQSXf5xQiCFhB0gg8h6qIc7X1SkKfIQyHdYHDXEmEp+llpASRqCiJ4J4LSAuhldVEiLCIuaKBL6/u4dOz2zifz4bs0iYP2Q4wuc+HpyUecxfz1pHEKvxMqxyiAY/vXOZJ8pifM0NOb1wp+jY+bnI74Jq8vlo8EHb/+sWws7/pPnPqrAf5/3BteLvVZ6cX8GMwws7XvXG3nd09fO77GXl799AubYH9zXb/uG8opO18vfMtlejwZ+8NWrVFhc9BW0gLQk+eThWhwXuNlCDx+708K62iRqPz/cSaITr2oF27JBtq0eF5TSSOO/apXE8Y9XebSS1iJNDdb9WqwbVynsgOM1VeyGzEx/bIXZ40KItwulXH46oorhD+GZcjV1YSOfjMMLsoBF4iIoIyG0Zj/WHIhojIck+HtsoFbDlK5BDE6n77QTOWiElkXUAT+w5VPM5B/9oKzJgx4w8g7Ls9/Y1XlwAAAABJRU5ErkJggg==",Hu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMcSURBVHgB7VVbSFNhHP/NTT1u6SbrQkV2TJKJyEaUmkoqvbSS9Kkb0UYQ0UtXfMw5Iox6SKQQe1EJiqKHZZYv0VaRlRDOtKAy3ZSsdNo5M9O5za/vHJvt6u21fvCH8/2//+373w7wHwtAsgTZEkqG3C1MSVYmw3K8HyNjyfb210N2yjdTcmCZ0K1SS61VlauIqzeL+IazQ6ivp5Lo9fp+KmfEMnDKcEAV1XAw+ccvEYPBQKi8KdzAfCkyVVWurqaRYzFw4yo2Ze4Dx3Gl9GgL8KUx5I3UeG3AuGPAi7obo3jaPoH7beO4a+FFvmZz4pwCwyRhmhTCZrOx9Ngc4MdFMc7u2qkwBUfe0uZGU/MY8lIJjuXGQ/7LBzYtIUSJeDug0+mQtlpaQo+6+RyYrl9ezwYzTh5Xo7FhA1pfeZC2RoZBnkCbzYRq+Yeg1WqhVIgmYzpgaVGNGzfER3h1DnpRls9gYNgH9drIewE0/8jZJN6xsRyUHNmviqpstY6jKCcRz7s92KtPjriXSDVwOp00RbIQfriD8uJCRYSyUGS/2yd+P3w5iWgyiNfAYrHQFIp9Y4/qoGCbnEUUPKPdU7Y9SfyWKmVQpUQ2nyShFKPOF+ju84oxBfgh70lJlobkp65hFF3vptDf68EDk5oqTyM1VQaOn4FK+Tc2Sdx6NN8exG6tC1fuTDpivqBvwMMFny2tPFwOD7LXSVFzy423/T54XdPI0H0QHQfAew/CbDbDOexH31e/OeRlCEWTq1djCE8B555BV/ckhAUndBPn9oMO4qyBpMM4d/47chU3cejiqIOy0oN1w5PJMYlxxvAiMokScbCEyc3bKp8rskSmwYVaNfj311Df8hP8BBHWxLdg3fAustU3jtmEKBcCP1WMs9VKPL5XI87GwLCYGjsWATYjPaH/85vM6JtzJJ88eXSU7MjNIHSoyInyFcIWPR3LWKxtylKylutT2OICOe2Y2Uzae6bQ2TGBFGZW9eOg1/7pi+8MgrbnUmGk1KlUSEhOejzZk5dEKorkP1YqJVbKr1iMgcX+MlV/SIAD/xR+AyC3TIq0n99pAAAAAElFTkSuQmCC",Wu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAYAAAC803lsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB7ZZbSBRRGMf/3rZyW3e6qBFlU2EXijIDE4Ic9UUkUnuSTFwxFCWkhwqkyELIKEq7WRBh60tZhBE+9BKaeJdMs0Awc7ygZl52dVfby+x0zqab95nN7CH2txyG75xvvvPf75zvnAFcuHDxb+BIKyNthDSR9fegzxLSNPhD3OAcXGBgYGFGeiLLhR0EwzDgu8zQarWwDtVg0+o+PC838l/7hHDiyzsT2BkhsUknQ0tu5WyAWtn2u9djI9y8QtD1PRq3776AqeMxyZGIB68NGjKqlRtcrhA2JHhVWfWbbezCkVRw987AlevtMLXlwU0Ecp+OauSK8YA88ipKt3GMejF3M0RLFcI5DpWt+6A01UOwiRzfLxSTQR0kcIcMoiJU3JbNXg5bp7dBNyrM62sbL0D2+e2o7Q2GVQCzXu1WCBnIERK0I1DBTu9IyezB8YSuRcXk38lBgJ8HdgUoOPyqsiULYfbvWeEw+C4LlGYB91PVSE7tmV+MOIaAtY/QK4Tg6KFVtCdWahJZSzOdnBsDyDimsv/bqwkqxMV3orPbMleLpQHZF+JRWjdOzRipuLKE6Edt9qdOL6CxwYisolFkFertYgrSGWjSuh1iip7pHFnat3uI+HjiRKQ3S0xmsTk8IU0TPzkJrZrk5HWIifaxi8q6N4DcZLVDzIFgbzTWGED9L53zBUPOm8/9/rBN9NDXWRproUnkZERXWz/OTxmZaetAK2j/3pVIOe2H9PxhR2ZCfclxonC3+1BEaytYdqt9HBIZkbU09R8mtO+qjHP6qZjImDUOMR87LLh80R+Mz2RYsmkpaqXd7sBShRCe0LWfj6R4Bp6+ClS2mDCu8kLYYeWMcR/FGPQG+x7rxF8QwmuLddrmTz/mDNDDrblpAtdeGsi+8Jv5Ein14b4W1LWayqUmcKZ8z6Sf7eXnnhsi+WHmkkxSUW2E3mjDoF6UvG+c/QwIOpW4puzhzY2MlCPN1MGIL5gYs74a0IlxWAaCIo+sHml/v0O0DuxZsMVEqWii6AZlsYywu3euKCN7Qpwt6G0JK5JqoiLoZSeZuSmcXZrZcKRpiKgtZrPIGsaEpm+DQjPpy4eMq9+FCxf/BT8BYCRVtM8/1LMAAAAASUVORK5CYII=";const Qt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Ku={},Vu={class:"flex items-center justify-between px-8 w-full fixed bg-white",style:{"z-index":"500"}},Xu=He('<div class="flex" data-v-c12b7825><img src="'+Uu+'" alt="選舉章" class="pr-6" data-v-c12b7825><div class="flex items-center my-2 bg-mainBlack rounded-3xl text-white" data-v-c12b7825><h3 class="px-2" data-v-c12b7825>2024 立委</h3><div class="w-6 h-6 rounded-full bg-mainYellow text-center text-mainBlack font-bold" data-v-c12b7825>3</div><h3 class="px-2" data-v-c12b7825>號參選人</h3></div></div><div class="flex" data-v-c12b7825><a href="#advocate" class="relative" data-v-c12b7825><h4 class="mx-4 cursor-pointer" data-v-c12b7825>候選人主張</h4><img src="'+Yu+'" alt="message" class="absolute shake" style="top:-50%;left:-15%;" data-v-c12b7825></a><a href="#news" data-v-c12b7825><h4 class="mx-4 cursor-pointer" data-v-c12b7825>最新活動</h4></a><a href="#policy" data-v-c12b7825><h4 class="mx-4 cursor-pointer" data-v-c12b7825>政策議題</h4></a><a href="#support" class="relative" data-v-c12b7825><h4 class="mx-4 cursor-pointer" data-v-c12b7825>小額捐款</h4><img src="'+Hu+'" alt="money1" class="absolute down" style="top:-90%;right:15%;" data-v-c12b7825><img src="'+Wu+'" alt="money2" class="absolute down" style="top:-50%;right:-15%;" data-v-c12b7825></a><a href="#contact" data-v-c12b7825><h4 class="mx-4 cursor-pointer" data-v-c12b7825>民眾服務信箱</h4></a></div>',2),Qu={class:"flex text-green text-2xl"};function Ju(t,e){const n=be("font-awesome-icon");return G(),nt("div",Vu,[Xu,p("div",Qu,[D(n,{icon:"fa-brands fa-facebook",class:"p-2 cursor-pointer"}),D(n,{icon:"fa-brands fa-instagram",class:"p-2 cursor-pointer"}),D(n,{icon:"fa-solid fa-share-nodes",class:"p-2 cursor-pointer"})])])}const qu=Qt(Ku,[["render",Ju],["__scopeId","data-v-c12b7825"]]),Zu="/F2ELegislator/assets/homebg-012b586a.png",po="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWxSURBVHgBvVuNcds2FH6kbKu+tld2gnKDeIPGEzSeIM4ESSewPYHjCeJMYGeCqhPImYDcgGlsS3epLfY9EVRU8AMJgIC+O54TiALwAXgP708JRUJFlO0RHSX8TIhe1PyXmzN+cu3Vkt8p+fMv/HxeEc2eiO5+5f9TBCQUEEJyn+iUCf7Bk39JI8ATmz0TffyX/zL5kgIhCOF7Jse7eTaWZA9umfzVz0yeRmIU4R0Q1VEy8TdjiHsR5qObHxBd8pdf2X6nbmSyTDXZXCm5Tpq/tn1dfyO6CHnUjVgSvX5kzgse1+V5aJRWH4lMTgy/+577n1v0WXCfpxQTPMhl3yRkIfg55+cafP7OZSxe2Fz1UwwQv6TQEO276Fn1lmitjqVMVn+H2z6QJ2QnB4jPq+5150027xuMJ/O+BvIHjn1BI7C148YjPpr0ANnivkc78+c3+ncqB8VkgpLzooe0/xg9x3i+HFhN3vl34DScUgCo3TbOre+7qekDpQyQZr09JDo+HLgS+JjfgeZeTW0LGZuvpWO+0j6iMZwVmVISaPVubPtQis5p9X3wYJBruT6tOuiR23ntKB886F8x5Fibb2Y43hVSYp0jzRbUGWGP5iRx9GDYDPyst+0FOtYtxKtiEifUFbFsOnS0lQbsHI97T1v5K5ue4M4+pwjwmjs6ymMMBiTHcswpEsQmsB7PsELFcuRlDhaxokhQ8lz17fJGhtlpf6t3wGr/4nCkR8KK7m+tKXsILMctVJTkSm/fa/TSd1TA9h1rCrZABsjC0ZFwgWmX29thvcP7QLCTANEFAZ+cW9D3C4oE0y5Pt608dF8uQ3kfFN6RGALSRxvltQuLaAEcCZbt3ygi0I0jXFNkCKy6imYUUH+868cUETzmJ71NuKYpkN8ayN0YxHQkTFgBHTQRwkiBPOEJekP6qzWzlBf6d4qIfcBBuKYgWvgldNRf2bv6BI5COxLbOFTZjO02yX6kNXAUKAJ24UgAlNr/M7mH8+2WJFJOB8lUGjmAn3a55CntCPtAV8SWY4QOYd6Jfygw+Ap6VQO3sI5/pDtIQcMvFBBVk0YxOeLRHAkThHC53VAH1JxVE3UQky4n8wReUiSsulzKtAaCTYEwxeGi/yGmI0FdhSzJvM51kYW4H5cN2UE3sHbIQLpAOOg2huinFJl9k5HHjAc7qnHsakZdszWL4UgYONxBwmPkSpTUFMevJfL5ZleOBOIgtkD6hAl7348/NEG/HAx2osy9nTgSCeCw4YoCAD7XhcgtCpXqodnYAYEKp2vXAYD1PfwMfMfEUZlIegbJLe/s1Y9aO3Ak8pCOxIEetKM1x+95KEPUo7KdRNVk81AZRIHudRQ//hpIWysuhSlktd5hcd9A0C47sLhWWuMCuJmipI6RMxLTkZg2SbR8u40X/VMn3GwIxA/uMu/sB4PcGncsVkbClAg0pluQ8lr0JKRslRRCjIyEYfHNCtElIVU1iecaPFY5ZCTH9yOOtXciEIVUF1rBSE8O2ToXZUi6D+oMBNN8rBKBS7PGnbfyvDDUV7gE71Fp06NHtLSnpMo+EWgqeRAZMcmtz+6AhXWW40d8It0LaJCMmR55lzyA6q5sHQmVNLsJOR+yrXkkT/iWNimZDVu2JPjWeDFlzytr44L8MdMbJgOOi2hdFUU5MsznhMZgOVB6KHI9puTP1pFQyqmvuHV0tcIGA5Vv7WBnPsSHSpvk39L3QMmyc0mVFSwUWSE77uJamhwJOboWRP0VlMMEh0p5N+TlCIpN3WePIwvJpgBd3vGp3fT6CYAccfZ4zhPb8j5G3XhkZdJNcOXkLgq33M+fPgU3XoRbyO5MDCGdSJCf9lzs/EceOhTxtxQp5EoBiLYIQriFHPXnhvzrAD/tmUnZAoeHrkNmNIMS3kat8kYSyZDsQtLEn3MC+ehaJcwlhyxRzZ/4iZW2/Q8N/qhDLs4VBQAAAABJRU5ErkJggg==",Gu="/F2ELegislator/assets/meow-34c09d2c.png",td="/F2ELegislator/assets/logoGreen-d3695462.png";const we=t=>(Ue("data-v-8fbac859"),t=t(),Ye(),t),ed={class:"min-h-screen pt-16"},nd={class:"absolute h-1/4",style:{"z-index":"-50"}},rd=we(()=>p("div",{class:"relative"},[p("img",{src:Zu,alt:"homebg",class:"relative"})],-1)),ad={class:"absolute tracking-wider w-full",style:{top:"350%"}},id=we(()=>p("img",{src:po,alt:"選舉章跑馬燈",class:"inline h-10 pb-2"},null,-1)),sd={class:"flex justify-center items-center pt-32"},od=He('<img src="'+Gu+'" alt="meow" data-v-8fbac859><div class="flex flex-col items-center tracking-widest" data-v-8fbac859><img src="'+td+'" alt="meow" data-v-8fbac859><h4 class="pt-6 text-9xl text-shadow text-mainBlack" data-v-8fbac859>台灣的明天</h4><h4 class="pt-6 text-9xl text-shadow text-mainBlack" data-v-8fbac859>喵先鋪路</h4><h4 class="mt-12 px-2 border-2 border-black text-2xl font-bold" data-v-8fbac859>2024立委3號參選人 少年立委 勤政愛民 愛您！！</h4></div><div class="pl-10" data-v-8fbac859><h6 data-v-8fbac859>20</h6><h6 data-v-8fbac859>24</h6><h6 class="text-center" data-v-8fbac859>|</h6><h6 data-v-8fbac859>01</h6><h6 class="text-center" data-v-8fbac859>|</h6><h6 data-v-8fbac859>13</h6><h6 data-v-8fbac859>由</h6><h6 data-v-8fbac859>您</h6><h6 data-v-8fbac859>選</h6><h6 data-v-8fbac859>擇</h6><h6 data-v-8fbac859>台</h6><h6 data-v-8fbac859>灣</h6><h6 data-v-8fbac859>的</h6><h6 data-v-8fbac859>未</h6><h6 data-v-8fbac859>來</h6></div>',3),ld={class:"pl-3"},cd=we(()=>p("div",{class:"flex items-center justify-center w-11 h-11 rounded-full bg-green text-white font-bold border-2 border-black text-2xl"},"3",-1)),fd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},ud={class:"text-2xl"},dd=we(()=>p("h6",{class:"text-10"},"DAY",-1)),md={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},hd={class:"text-2xl"},pd=we(()=>p("h6",{class:"text-10"},"HOUR",-1)),vd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},gd={class:"text-2xl"},bd=we(()=>p("h6",{class:"text-10"},"MIN",-1)),yd={class:"flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack text-white font-bold border-2 border-black"},xd={class:"text-2xl"},_d=we(()=>p("h6",{class:"text-10"},"SEC",-1)),wd={__name:"Home",setup(t){const e=Et(0),n=Et(0),r=Et(0),a=Et(0),i=new Date().getFullYear(),s=new Date(`January 13 ${i+1} 00:00:00`);function o(){const f=s-new Date;e.value=Math.floor(f/1e3)%60,n.value=Math.floor(f/1e3/60)%60,r.value=Math.floor(f/1e3/60/60)%24,a.value=Math.floor(f/1e3/60/60/24)}return setInterval(function(){o()},1e3),ks(()=>{o()}),(l,f)=>{const d=be("marquee");return G(),nt("div",ed,[p("div",nd,[rd,p("div",ad,[D(d,{class:"transform rotate-9 py-2 text-64 bg-blue font-bold text-white tracking-widest"},{default:Me(()=>[Lt(" 少年立委"),id,Lt(" 清流參選 凍蒜！凍蒜！ 台灣的明天 喵先鋪路 ")]),_:1})])]),p("div",sd,[od,p("div",ld,[cd,p("div",fd,[p("h4",ud,Z(a.value),1),dd]),p("div",md,[p("h4",hd,Z(r.value),1),pd]),p("div",vd,[p("h4",gd,Z(n.value),1),bd]),p("div",yd,[p("h4",xd,Z(e.value),1),_d])])])])}}},Ad=Qt(wd,[["__scopeId","data-v-8fbac859"]]),kd="/F2ELegislator/assets/puzzleMeow-0f0bc168.png",Ed={},Od={id:"advocate",class:"min-h-screen pt-60"},Cd=He('<div class="flex justify-center"><div class="tracking-wider"><div class="relative"><h1 class="text-64 text-mainBlack">候選人主張</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider" style="top:-65%;">ADVOCATE</h1></div><h3 class="text-green text-4xl pt-20">我堅信 ! </h3><h3 class="text-xl pt-8">藉由推動更完善的貓咪福利和相關政策，</h3><h3 class="text-xl">更是間接地投資於<span class="text-mainYellow text-4xl">台灣的未來</span></h3><p class="text-sm pt-8">畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過</p><p class="text-sm">完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</p><p class="text-sm pt-8">因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能</p><p class="text-sm pb-4">得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</p><hr class="border-black w-1/2"><h3 class="text-green pt-8">護航台灣的幸福經濟，從照顧每一隻貓咪開始。</h3></div><img src="'+kd+'" alt="puzzleMeow"></div>',1),Id=[Cd];function Sd(t,e){return G(),nt("div",Od,Id)}const Pd=Qt(Ed,[["render",Sd]]),Td="/F2ELegislator/assets/leftLight-80ab8e29.png",Nd="/F2ELegislator/assets/rightLight-548dac00.png";const br=t=>(Ue("data-v-f3d009e7"),t=t(),Ye(),t),Md={id:"news",class:"relative min-h-screen pt-20 m-auto"},Rd=br(()=>p("img",{src:Td,alt:"homebg",class:"shine absolute",style:{"z-index":"-5"}},null,-1)),Fd=br(()=>p("img",{src:Nd,alt:"homebg",class:"shine absolute",style:{"z-index":"-5",right:"0%"}},null,-1)),Ld={class:"m-auto",style:{"max-width":"1080px"}},jd=br(()=>p("div",{class:"relative flex justify-center"},[p("h1",{class:"text-64 text-mainBlack"},"最新活動"),p("h1",{class:"absolute text-yellow text-92 font-light tracking-wider",style:{top:"-65%"}},"LATEST EVENTS")],-1)),zd={key:0,class:"flex"},Dd=["src"],$d={class:"flex flex-col items-center"},Bd=br(()=>p("div",null,null,-1)),Ud={class:"border-l-12 border-mainYellow pl-4"},Yd={class:"text-sm text-gray"},Hd={class:"bg-green border-b-4 border-mainYellow p-8"},Wd={class:"text-white"},Kd={class:"flex justify-between pt-12"},Vd={class:"flex items-center justify-center rounded-3xl px-6 cursor-pointer",style:{background:"#D9D9D999"}},Xd={class:"flex text-white"},Qd={__name:"News",setup(t){const e=Et(1),n=a=>{a==="left"?e.value=e.value>1?e.value-1:3:e.value=e.value<3?e.value+1:1},r=Et([{id:1,date:"2023/12/20",title:"參與台北寵物論壇，爭取貓咪友善環境",content:"炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",image:"./src/assets/image/news1.png"},{id:2,date:"2023/12/24",title:"收容所模特兒大比拼！",content:"今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",image:"./src/assets/image/news2.png"},{id:3,date:"2023/12/26",title:"掃街模式開啟！帶著你的貓耳，來和我一起走！",content:"街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",image:"./src/assets/image/news3.png"}]);return(a,i)=>{const s=be("font-awesome-icon"),o=be("marquee");return G(),nt("div",Md,[Rd,Fd,p("div",Ld,[jd,(G(!0),nt(ht,null,Vn(r.value,l=>(G(),nt("div",{key:l.id},[e.value===l.id?(G(),nt("div",zd,[p("div",null,[p("img",{src:l.image,alt:"item.date"},null,8,Dd)]),p("div",null,[p("div",$d,[Bd,p("div",Ud,[p("h6",Yd,Z(l.date),1),p("h4",null,Z(l.title),1)])]),p("div",Hd,[p("div",null,[p("h5",Wd,Z(l.content),1)]),p("div",Kd,[p("div",Vd,[Lt(" 活動詳情 "),D(s,{icon:"fa-solid fa-arrow-right",class:"p-2 text-2xl"})]),p("div",Xd,[p("div",{class:"flex items-center justify-center h-12 w-12 rounded-full border-2 cursor-pointer",onClick:i[0]||(i[0]=f=>n("left"))},[D(s,{icon:"fa-solid fa-arrow-left",class:"p-2 text-2xl"})]),p("div",{class:"flex items-center justify-center h-12 w-12 rounded-full border-2 ml-4 cursor-pointer",onClick:i[1]||(i[1]=f=>n("right"))},[D(s,{icon:"fa-solid fa-arrow-right",class:"p-2 text-2xl"})])])])])])])):ya("",!0)]))),128)),p("div",null,[D(o,{class:"py-2 text-xl tracking-wider border-y-2",style:{background:"#D9D9D94D"}},{default:Me(()=>[Lt(" 參與台北寵物論壇，爭取貓咪友善環境 | 收容所模特兒大比拼！ | 掃街模式開啟！帶著你的貓耳，來和我一起走！ | 參與台北寵物論壇，爭取貓咪友善環境 ")]),_:1})])])])}}},Jd=Qt(Qd,[["__scopeId","data-v-f3d009e7"]]);const vo=t=>(Ue("data-v-01f8b220"),t=t(),Ye(),t),qd={id:"policy",class:"bg-image min-h-screen"},Zd={class:"py-36"},Gd=vo(()=>p("div",{class:"flex justify-center relative w-full pt-32"},[p("h1",{class:"text-64 text-mainBlack"},"政策議題"),p("h1",{class:"absolute text-92 font-light tracking-widest",style:{top:"30%",color:"#FFFFFF80"}},"POLICY ISSUES")],-1)),tm={class:"flex flex-col m-auto",style:{"max-width":"1080px"}},em={class:"flex justify-between pt-4"},nm=["onClick"],rm={class:"absolute text-white bg-mainBlack rounded-3xl py-1 px-2",style:{left:"50%",transform:"translateX(-60%)",top:"-5%"}},am={key:0,class:"p-12 mt-6 bg-white rounded-xl"},im={class:"flex justify-between"},sm={class:"text-28"},om={class:"flex items-center text-green text-xl"},lm=vo(()=>p("h3",null,"分享",-1)),cm={class:"flex justify-between"},fm={class:"pt-8"},um={class:"text-xl text-green"},dm={class:"pt-8"},mm={class:"text-xl text-green"},hm={class:"pt-8"},pm={class:"text-xl text-green"},vm=["src"],gm={__name:"Policy",setup(t){const e=Et(1),n=Et([{id:1,title:"喵的保障",desc1:"寵物醫療",desc2:"保障方案",contentTitle:"為毛孩子謀福利！ 推動寵物醫療保障方案",image:"/src/assets/image/policy1.png",subTitle1:"設立寵物醫療基金",subContent1:"每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",subTitle2:"提供醫療補助",subContent2:"每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",subTitle3:"合作動物醫院",subContent3:"目前已有和超過 200 家動物醫院進行初步的合作討論"},{id:2,title:"喵的福利",desc1:"打造寵物",desc2:"休閒天堂",contentTitle:"為毛孩子謀福利！ 打造寵物休閒天堂",image:"/src/assets/image/policy2.png",subTitle1:"建立寵物公園",subContent1:"每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園",subTitle2:"推廣寵物友善商家",subContent2:"鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫",subTitle3:"舉辦寵物活動和工作坊",subContent3:"與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等"},{id:3,title:"喵的教育",desc1:"推廣寵物",desc2:"飼養教育",contentTitle:"領養代替購買，領養不棄養",image:"/src/assets/image/policy3.png",subTitle1:"建立寵物飼養教育中心",subContent1:"每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",subTitle2:"推廣寵物飼養課程",subContent2:"與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",subTitle3:"製作教育資料",subContent3:"出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識"}]);return(r,a)=>{const i=be("font-awesome-icon");return G(),nt("div",qd,[p("div",Zd,[Gd,p("div",tm,[p("div",em,[(G(!0),nt(ht,null,Vn(n.value,s=>(G(),nt("div",{key:s.id,class:"pr-6 relative"},[p("div",{class:sr(["dialog-border-bottom rounded-xl flex flex-col p-3 items-center text-40 text-mainBlack cursor-pointer",{"bg-activeYellow":s.id===e.value}]),onClick:o=>e.value=s.id,style:ir({"--bgColor":s.id===e.value?"#FFF099":"#FCDD2D"})},[p("h4",null,Z(s.desc1),1),p("h4",null,Z(s.desc2),1)],14,nm),p("div",rm,Z(s.title),1)]))),128))]),(G(!0),nt(ht,null,Vn(n.value,s=>(G(),nt("div",{key:s.id},[s.id===e.value?(G(),nt("div",am,[p("div",im,[p("h2",sm,Z(s.contentTitle),1),p("div",om,[lm,D(i,{icon:"fa-brands fa-facebook",class:"p-2 cursor-pointer"}),D(i,{icon:"fa-brands fa-instagram",class:"p-2 cursor-pointer"})])]),p("div",cm,[p("div",null,[p("div",fm,[p("h2",um,Z(s.subTitle1),1),p("h3",null,Z(s.subContent1),1)]),p("div",dm,[p("h2",mm,Z(s.subTitle2),1),p("h3",null,Z(s.subContent2),1)]),p("div",hm,[p("h2",pm,Z(s.subTitle3),1),p("h3",null,Z(s.subContent3),1)])]),p("img",{src:s.image,alt:""},null,8,vm)])])):ya("",!0)]))),128))])])])}}},bm=Qt(gm,[["__scopeId","data-v-01f8b220"]]),ym="/F2ELegislator/assets/product-c4b87659.png";const vn=t=>(Ue("data-v-d801e2a4"),t=t(),Ye(),t),xm={id:"support",class:"flex bg-image min-h-screen"},_m=vn(()=>p("div",{class:"flex-1"},[p("img",{src:ym,alt:"product"})],-1)),wm={class:"pt-28"},Am=He('<div class="relative w-full" data-v-d801e2a4><h1 class="text-64 text-white" data-v-d801e2a4>小額捐款</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider w-full" style="top:-70%;" data-v-d801e2a4>SUPPORT US</h1></div><div class="text-white text-sm pt-20 tracking-wider" data-v-d801e2a4><p data-v-d801e2a4>邀請您一同加入保證金募資專案，任何一筆捐款，無論金額，都</p><p data-v-d801e2a4>能幫助喵喵我推動寵物福利。幫助喵喵我推動寵物福利。</p><p class="pt-8" data-v-d801e2a4>本專案募集資金將100%用於參選保證金，並且公開專案帳目；</p><p data-v-d801e2a4>當選後，退還的保證金將提撥給地方黨部，作為黨務運作之</p><p data-v-d801e2a4>用。</p><p class="pt-8" data-v-d801e2a4>您的支持，會直接幫助喵喵黨能在各地推出更多的候選人，並在</p><p data-v-d801e2a4>各地繼續深耕。</p></div>',2),km={class:"flex flex-col"},Em={class:"flex items-center text-white"},Om=vn(()=>p("h4",{class:"pr-6 text-xl"},"募款累計",-1)),Cm={class:"flex flex-col items-end"},Im={class:"text-5xl"},Sm=vn(()=>p("h4",{class:"text-gray"},"需要保證金 1000 萬",-1)),Pm={class:"flex flex-wrap"},Tm={key:0,class:"flex flex-col items-center"},Nm={class:"text-2xl text-white pb-4"},Mm={class:"h-60 w-52 text-center text-40 bg-white rounded-4xl font-black"},Rm={class:"text-mainYellow pt-4"},Fm={key:1,class:"flex flex-col items-center"},Lm={class:"text-2xl text-white pb-4"},jm=vn(()=>p("input",{type:"text",name:"",placeholder:"請輸入金額",class:"h-60 w-52 text-center text-2xl bg-white rounded-4xl font-black"},null,-1)),zm=vn(()=>p("h4",{class:"text-white pt-2"},"最高額度新台幣十萬元整",-1)),Dm={class:"text-mainYellow pt-2"},$m={__name:"SupportUs",setup(t){const e=Et("3,294,255"),n=Et([{id:"1",title:"輕鬆捐",money:"$600",desc:"為他撐過風風雨雨"},{id:"2",title:"小額捐",money:"$1200",desc:"為他覆蓋前方泥濘"},{id:"3",title:"力挺捐",money:"$8800",desc:"全力相挺！ 為他全力以赴"},{id:"4",title:"自由捐",money:"",desc:" 為他披荊斬棘前行"}]);return(r,a)=>(G(),nt("div",xm,[_m,p("div",wm,[Am,p("div",km,[p("div",Em,[Om,p("div",Cm,[p("h2",Im,Z(e.value),1),Sm])])]),p("div",Pm,[(G(!0),nt(ht,null,Vn(n.value,i=>(G(),nt("div",{key:i.id,class:"flex flex-col items-center mr-6"},[i.id!=="4"?(G(),nt("div",Tm,[p("h4",Nm,Z(i.title),1),p("div",Mm,Z(i.money),1),p("h4",Rm,Z(i.desc),1)])):(G(),nt("div",Fm,[p("h4",Lm,Z(i.title),1),jm,zm,p("h4",Dm,Z(i.desc),1)]))]))),128))])])]))}},Bm=Qt($m,[["__scopeId","data-v-d801e2a4"]]),Um="/F2ELegislator/assets/contactMeow-77e59b7a.png",Ym={},Hm={id:"contact",class:"min-h-screen"},Wm=He('<div class="flex flex-col items-center m-auto my-16" style="max-width:1080px;"><div class="flex"><div class="flex flex-col justify-end pb-4"><div class="relative"><h1 class="text-64 text-mainBlack">您的聲音，我們的行動！</h1><h1 class="absolute text-yellow text-92 font-light tracking-wider" style="left:-15%;top:-60%;">CONTACT US</h1></div><p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到</p><p>您的建議。分享您的想法，一同為我們的未來打造更美好！</p></div><img src="'+Um+'" alt="contactMeow"></div><div class="w-full tracking-wider"><div class="flex border-4 border-black rounded-2xl p-20"><div class="pr-6 w-1/2 flex flex-col justify-between"><div class="w-full"><h5 class="pb-4">您的姓名</h5><input type="text" class="h-12 pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow" placeholder="請輸入您的姓名"></div><div class="w-full"><h5 class="pb-4">您的 Email</h5><input type="text" class="h-12 pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow" placeholder="請輸入您的電子郵件"></div><div class="w-full"><h5 class="pb-4">您的手機號碼</h5><input type="text" class="h-12 pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow" placeholder="09-xxx-xxx"></div></div><div class="flex flex-col w-1/2"><div class="w-full pb-4"><h5 class="pb-4">您的建言</h5><textarea type="text" class="pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow" rows="8" style="resize:none;"></textarea></div><button class="h-12 border-2 text-xl border-black rounded-xl bg-mainYellow">送出意見</button></div></div></div></div>',1),Km=[Wm];function Vm(t,e){return G(),nt("div",Hm,Km)}const Xm=Qt(Ym,[["render",Vm]]);const ie=t=>(Ue("data-v-87b5538b"),t=t(),Ye(),t),Qm={class:"flex p-6 bg-mainYellow"},Jm={class:"flex items-center justify-end w-6/12 pr-8"},qm={class:"mr-2 border-2 border-black"},Zm=He('<div class="flex items-center" data-v-87b5538b><div class="w-1/4 mx-4" data-v-87b5538b><img src="'+po+'" alt="選舉章" data-v-87b5538b></div><div class="flex items-center w-3/4 p-2 border-l-2 border-black" data-v-87b5538b><div class="pl-4" data-v-87b5538b><h4 data-v-87b5538b>好</h4><h4 data-v-87b5538b>喵</h4></div><h4 class="px-6 text-black text-7xl font-bold" data-v-87b5538b>3</h4></div></div>',1),Gm={key:0},th=ie(()=>p("div",{class:"absolute text-center border-2 rounded pl-1 shake",style:{top:"150%",right:"15%"}}," 喵喵 ",-1)),eh=ie(()=>p("div",{class:"absolute text-center border-2 rounded pl-1 shake",style:{top:"250%",right:"0%"}}," 投我 ",-1)),nh=[th,eh],rh=ie(()=>p("div",{class:"py-5 px-8 border-2 border-black tracking-widest"},[p("h4",{class:"pb-2 text-4xl text-black font-bold"},"喵立翰"),p("h4",{class:"text-xl text-center"},"少年立委")],-1)),ah={class:"w-6/12 tracking-wider"},ih=ie(()=>p("span",null,"TAIWAN NO.1",-1)),sh=ie(()=>p("span",null,"ELECTIONS",-1)),oh=ie(()=>p("span",{class:"pl-4"},"ELECTIONS 凍蒜！凍蒜！",-1)),lh={class:"flex justify-evenly p-8 bg-mainBlack text-white"},ch=ie(()=>p("div",null,[p("p",{class:"pb-2 text-2xl"},"競選總部"),p("h4",null,"地址：台灣喵星區"),p("h4",null,"毛茸茸大道88號，喵喵大樓3樓")],-1)),fh=ie(()=>p("div",{class:"flex flex-col justify-end"},[p("h4",null,"電話：(02) 888-5678"),p("h4",null,"電子郵件地址: meowoffice@linmeow.tw")],-1)),uh={class:"flex items-end text-2xl"},dh={__name:"Footer",setup(t){const e=Et(!1);return(n,r)=>{const a=be("marquee"),i=be("font-awesome-icon");return G(),nt(ht,null,[p("div",Qm,[p("div",Jm,[p("div",qm,[Zm,p("div",{class:"relative p-1 text-xs text-center border-t-2 border-black tracking-widest cursor-pointer",onClick:r[0]||(r[0]=s=>e.value=!e.value)},[Lt(" 點擊我就喵喵叫給你聽 "),e.value===!0?(G(),nt("div",Gm,nh)):ya("",!0)])]),rh]),p("div",ah,[D(a,{class:"text-40 ml-20 font-bold"},{default:Me(()=>[Lt("凍蒜! 凍蒜! "),ih,Lt(" 2024 VOTE NO.3")]),_:1}),D(a,{class:"text-40 ml-10 font-bold"},{default:Me(()=>[sh,Lt("少年立委 清流參選 台灣的未來，差您一票")]),_:1}),D(a,{class:"text-64 ml-16 font-bold"},{default:Me(()=>[Lt("TAIWAN NO.1"),oh]),_:1})])]),p("div",lh,[ch,fh,p("div",uh,[D(i,{icon:"fa-brands fa-facebook",class:"p-2 cursor-pointer"}),D(i,{icon:"fa-brands fa-instagram",class:"p-2 cursor-pointer"}),D(i,{icon:"fa-brands fa-x-twitter",class:"p-2 cursor-pointer"})])])],64)}}},mh=Qt(dh,[["__scopeId","data-v-87b5538b"]]);const hh=t=>(Ue("data-v-dde0c523"),t=t(),Ye(),t),ph=hh(()=>p("div",{class:"relative"},[p("div",{class:"fixed bottom-80 left-0"},[p("h6",{class:"transform -rotate-90"},"Miao Li-Han © 2023 Copyright. All Rights Reserved")])],-1)),vh={__name:"App",setup(t){return(e,n)=>(G(),nt(ht,null,[D(qu),ph,D(Ad),D(Pd),D(Jd),D(bm),D(Bm),D(Xm),D(mh)],64))}},gh=Qt(vh,[["__scopeId","data-v-dde0c523"]]);wu.add(zu,ju,Lu,Du,Bu,$u);const go=Bc(gh);go.component("font-awesome-icon",Fu);go.mount("#app");

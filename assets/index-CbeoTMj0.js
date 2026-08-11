(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function x0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function oS(){if(r_)return bo;r_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return bo.Fragment=e,bo.jsx=i,bo.jsxs=i,bo}var o_;function lS(){return o_||(o_=1,Gf.exports=oS()),Gf.exports}var ft=lS(),Vf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function cS(){if(l_)return ie;l_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function _(L,tt,St){this.props=L,this.context=tt,this.refs=y,this.updater=St||b}_.prototype.isReactComponent={},_.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=_.prototype;function N(L,tt,St){this.props=L,this.context=tt,this.refs=y,this.updater=St||b}var D=N.prototype=new B;D.constructor=N,C(D,_.prototype),D.isPureReactComponent=!0;var Z=Array.isArray;function G(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(L,tt,St){var q=St.ref;return{$$typeof:o,type:L,key:tt,ref:q!==void 0?q:null,props:St}}function R(L,tt){return w(L.type,tt,L.props)}function F(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function rt(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(St){return tt[St]})}var at=/\/+/g;function ht(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?rt(""+L.key):tt.toString(36)}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,tt,St,q,ut){var Mt=typeof L;(Mt==="undefined"||Mt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(Mt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case e:xt=!0;break;case v:return xt=L._init,O(xt(L._payload),tt,St,q,ut)}}if(xt)return ut=ut(L),xt=q===""?"."+ht(L,0):q,Z(ut)?(St="",xt!=null&&(St=xt.replace(at,"$&/")+"/"),O(ut,tt,St,"",function(jt){return jt})):ut!=null&&(F(ut)&&(ut=R(ut,St+(ut.key==null||L&&L.key===ut.key?"":(""+ut.key).replace(at,"$&/")+"/")+xt)),tt.push(ut)),1;xt=0;var Pt=q===""?".":q+":";if(Z(L))for(var Gt=0;Gt<L.length;Gt++)q=L[Gt],Mt=Pt+ht(q,Gt),xt+=O(q,tt,St,Mt,ut);else if(Gt=M(L),typeof Gt=="function")for(L=Gt.call(L),Gt=0;!(q=L.next()).done;)q=q.value,Mt=Pt+ht(q,Gt++),xt+=O(q,tt,St,Mt,ut);else if(Mt==="object"){if(typeof L.then=="function")return O(mt(L),tt,St,q,ut);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function K(L,tt,St){if(L==null)return L;var q=[],ut=0;return O(L,q,"","",function(Mt){return tt.call(St,Mt,ut++)}),q}function Y(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(St){(L._status===0||L._status===-1)&&(L._status=1,L._result=St)},function(St){(L._status===0||L._status===-1)&&(L._status=2,L._result=St)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Tt={map:K,forEach:function(L,tt,St){K(L,function(){tt.apply(this,arguments)},St)},count:function(L){var tt=0;return K(L,function(){tt++}),tt},toArray:function(L){return K(L,function(tt){return tt})||[]},only:function(L){if(!F(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ie.Activity=x,ie.Children=Tt,ie.Component=_,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=N,ie.StrictMode=s,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},ie.cache=function(L){return function(){return L.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(L,tt,St){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var q=C({},L.props),ut=L.key;if(tt!=null)for(Mt in tt.key!==void 0&&(ut=""+tt.key),tt)!j.call(tt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&tt.ref===void 0||(q[Mt]=tt[Mt]);var Mt=arguments.length-2;if(Mt===1)q.children=St;else if(1<Mt){for(var xt=Array(Mt),Pt=0;Pt<Mt;Pt++)xt[Pt]=arguments[Pt+2];q.children=xt}return w(L.type,ut,q)},ie.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ie.createElement=function(L,tt,St){var q,ut={},Mt=null;if(tt!=null)for(q in tt.key!==void 0&&(Mt=""+tt.key),tt)j.call(tt,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ut[q]=tt[q]);var xt=arguments.length-2;if(xt===1)ut.children=St;else if(1<xt){for(var Pt=Array(xt),Gt=0;Gt<xt;Gt++)Pt[Gt]=arguments[Gt+2];ut.children=Pt}if(L&&L.defaultProps)for(q in xt=L.defaultProps,xt)ut[q]===void 0&&(ut[q]=xt[q]);return w(L,Mt,ut)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(L){return{$$typeof:d,render:L}},ie.isValidElement=F,ie.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Y}},ie.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},ie.startTransition=function(L){var tt=z.T,St={};z.T=St;try{var q=L(),ut=z.S;ut!==null&&ut(St,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(G,yt)}catch(Mt){yt(Mt)}finally{tt!==null&&St.types!==null&&(tt.types=St.types),z.T=tt}},ie.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ie.use=function(L){return z.H.use(L)},ie.useActionState=function(L,tt,St){return z.H.useActionState(L,tt,St)},ie.useCallback=function(L,tt){return z.H.useCallback(L,tt)},ie.useContext=function(L){return z.H.useContext(L)},ie.useDebugValue=function(){},ie.useDeferredValue=function(L,tt){return z.H.useDeferredValue(L,tt)},ie.useEffect=function(L,tt){return z.H.useEffect(L,tt)},ie.useEffectEvent=function(L){return z.H.useEffectEvent(L)},ie.useId=function(){return z.H.useId()},ie.useImperativeHandle=function(L,tt,St){return z.H.useImperativeHandle(L,tt,St)},ie.useInsertionEffect=function(L,tt){return z.H.useInsertionEffect(L,tt)},ie.useLayoutEffect=function(L,tt){return z.H.useLayoutEffect(L,tt)},ie.useMemo=function(L,tt){return z.H.useMemo(L,tt)},ie.useOptimistic=function(L,tt){return z.H.useOptimistic(L,tt)},ie.useReducer=function(L,tt,St){return z.H.useReducer(L,tt,St)},ie.useRef=function(L){return z.H.useRef(L)},ie.useState=function(L){return z.H.useState(L)},ie.useSyncExternalStore=function(L,tt,St){return z.H.useSyncExternalStore(L,tt,St)},ie.useTransition=function(){return z.H.useTransition()},ie.version="19.2.8",ie}var c_;function md(){return c_||(c_=1,Vf.exports=cS()),Vf.exports}var Je=md();const uS=x0(Je);var kf={exports:{}},Ao={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function fS(){return u_||(u_=1,(function(o){function e(O,K){var Y=O.length;O.push(K);t:for(;0<Y;){var yt=Y-1>>>1,Tt=O[yt];if(0<l(Tt,K))O[yt]=K,O[Y]=Tt,Y=yt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var K=O[0],Y=O.pop();if(Y!==K){O[0]=Y;t:for(var yt=0,Tt=O.length,L=Tt>>>1;yt<L;){var tt=2*(yt+1)-1,St=O[tt],q=tt+1,ut=O[q];if(0>l(St,Y))q<Tt&&0>l(ut,St)?(O[yt]=ut,O[q]=Y,yt=q):(O[yt]=St,O[tt]=Y,yt=tt);else if(q<Tt&&0>l(ut,Y))O[yt]=ut,O[q]=Y,yt=q;else break t}}return K}function l(O,K){var Y=O.sortIndex-K.sortIndex;return Y!==0?Y:O.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,x=null,S=3,M=!1,b=!1,C=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=O)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function Z(O){if(C=!1,D(O),!b)if(i(m)!==null)b=!0,G||(G=!0,rt());else{var K=i(p);K!==null&&mt(Z,K.startTime-O)}}var G=!1,z=-1,j=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<j)}function F(){if(y=!1,G){var O=o.unstable_now();w=O;var K=!0;try{t:{b=!1,C&&(C=!1,B(z),z=-1),M=!0;var Y=S;try{e:{for(D(O),x=i(m);x!==null&&!(x.expirationTime>O&&R());){var yt=x.callback;if(typeof yt=="function"){x.callback=null,S=x.priorityLevel;var Tt=yt(x.expirationTime<=O);if(O=o.unstable_now(),typeof Tt=="function"){x.callback=Tt,D(O),K=!0;break e}x===i(m)&&s(m),D(O)}else s(m);x=i(m)}if(x!==null)K=!0;else{var L=i(p);L!==null&&mt(Z,L.startTime-O),K=!1}}break t}finally{x=null,S=Y,M=!1}K=void 0}}finally{K?rt():G=!1}}}var rt;if(typeof N=="function")rt=function(){N(F)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ht=at.port2;at.port1.onmessage=F,rt=function(){ht.postMessage(null)}}else rt=function(){_(F,0)};function mt(O,K){z=_(function(){O(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Y=S;S=K;try{return O()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=S;S=O;try{return K()}finally{S=Y}},o.unstable_scheduleCallback=function(O,K,Y){var yt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?yt+Y:yt):Y=yt,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Y+Tt,O={id:v++,callback:K,priorityLevel:O,startTime:Y,expirationTime:Tt,sortIndex:-1},Y>yt?(O.sortIndex=Y,e(p,O),i(m)===null&&O===i(p)&&(C?(B(z),z=-1):C=!0,mt(Z,Y-yt))):(O.sortIndex=Tt,e(m,O),b||M||(b=!0,G||(G=!0,rt()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var K=S;return function(){var Y=S;S=K;try{return O.apply(this,arguments)}finally{S=Y}}}})(Wf)),Wf}var f_;function hS(){return f_||(f_=1,Xf.exports=fS()),Xf.exports}var qf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function dS(){if(h_)return An;h_=1;var o=md();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},An.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.2.8",An}var d_;function pS(){if(d_)return qf.exports;d_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=dS(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function mS(){if(p_)return Ao;p_=1;var o=hS(),e=md(),i=pS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,r=f;break}if(E===r){g=!0,r=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,r=c;break}if(E===r){g=!0,r=f,a=c;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case Z:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var mt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},yt=[],Tt=-1;function L(t){return{current:t}}function tt(t){0>Tt||(t.current=yt[Tt],yt[Tt]=null,Tt--)}function St(t,n){Tt++,yt[Tt]=t.current,t.current=n}var q=L(null),ut=L(null),Mt=L(null),xt=L(null);function Pt(t,n){switch(St(Mt,n),St(ut,t),St(q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?wg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=wg(n),t=Dg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(q),St(q,t)}function Gt(){tt(q),tt(ut),tt(Mt)}function jt(t){t.memoizedState!==null&&St(xt,t);var n=q.current,a=Dg(n,t.type);n!==a&&(St(ut,t),St(q,a))}function Ge(t){ut.current===t&&(tt(q),tt(ut)),xt.current===t&&(tt(xt),yo._currentValue=Y)}var Fe,ue;function I(t){if(Fe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Fe=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+t+ue}var Tn=!1;function ce(t,n){if(!t||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var $=ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ot){$=ot}t.call(_t.prototype)}}else{try{throw Error()}catch(ot){$=ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&$&&typeof ot.stack=="string")return[ot.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var P=g.split(`
`),J=E.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===J.length)for(r=P.length-1,c=J.length-1;1<=r&&0<=c&&P[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==J[c]){var ct=`
`+P[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?I(a):""}function de(t,n){switch(t.tag){case 26:case 27:case 5:return I(t.type);case 16:return I("Lazy");case 13:return t.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return I("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=de(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,dt=o.unstable_now,Et=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,pe=o.unstable_IdlePriority,At=o.log,It=o.unstable_setDisableYieldValue,Kt=null,kt=null;function Ot(t){if(typeof At=="function"&&It(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Kt,t)}catch{}}var Jt=Math.clz32?Math.clz32:k,ae=Math.log,Ne=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(ae(t)/Ne|0)|0}var Rt=256,lt=262144,vt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Ct(r):(g&=E,g!==0?c=Ct(g):a||(a=E&~t,a!==0&&(c=Ct(a))))):(E=r&~f,E!==0?c=Ct(E):g!==0?c=Ct(g):a||(a=r&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var t=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fi(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ct=31-Jt(a),_t=1<<ct;E[ct]=0,P[ct]=-1;var $=J[ct];if($!==null)for(J[ct]=null,ct=0;ct<$.length;ct++){var ot=$[ct];ot!==null&&(ot.lane&=-536870913)}a&=~_t}r!==0&&Lr(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Lr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Jt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Nr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Jt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ti(t,n){var a=n&-n;return a=(a&42)!==0?1:Xa(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Or(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:$g(t.type))}function Wa(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var hi=Math.random().toString(36).slice(2),je="__reactFiber$"+hi,_n="__reactProps$"+hi,Ni="__reactContainer$"+hi,zr="__reactEvents$"+hi,Oc="__reactListeners$"+hi,zc="__reactHandles$"+hi,Ho="__reactResources$"+hi,qa="__reactMarker$"+hi;function Pr(t){delete t[je],delete t[_n],delete t[zr],delete t[Oc],delete t[zc]}function A(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ni]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Bg(t);t!==null;){if(a=t[je])return a;t=Bg(t)}return n}t=a,a=t.parentNode}return null}function X(t){if(t=t[je]||t[Ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function it(t){var n=t[Ho];return n||(n=t[Ho]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V(t){t[qa]=!0}var bt=new Set,Ut={};function Nt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Ut[t]=n,t=0;t<n.length;t++)bt.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},qt={};function _e(t){return De.call(qt,t)?!0:De.call(ee,t)?!1:te.test(t)?qt[t]=!0:(ee[t]=!0,!1)}function ve(t,n,a){if(_e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ve(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Te(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Me(t){if(!t._valueTracker){var n=Zt(t)?"checked":"value";t._valueTracker=cn(t,n,""+t[n])}}function Nn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Zt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function di(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wn=/[\n"\\]/g;function dn(t){return t.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oe(t,n,a,r,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?bn(t,g,ne(n)):a!=null?bn(t,g,ne(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ne(E):t.removeAttribute("name")}function Dn(t,n,a,r,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(t);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Me(t)}function bn(t,n,a){n==="number"&&di(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ze(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function As(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(mt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Me(t)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var nv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ad(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||nv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Rd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ad(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ad(t,f,n[f])}function Pc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),av=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return av.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Bc=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rs=null,Cs=null;function Cd(t){var n=X(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oe(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[_n]||null;if(!c)throw Error(s(90));Oe(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Nn(r)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ze(t,!!a.multiple,n,!1)}}}var Fc=!1;function wd(t,n,a){if(Fc)return t(n,a);Fc=!0;try{var r=t(n);return r}finally{if(Fc=!1,(Rs!==null||Cs!==null)&&(Cl(),Rs&&(n=Rs,t=Cs,Cs=Rs=null,Cd(n),t)))for(n=0;n<t.length;n++)Cd(t[n])}}function Br(t,n){var a=t.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(zi)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Hc=!1}var ca=null,Gc=null,Vo=null;function Dd(){if(Vo)return Vo;var t,n=Gc,a=n.length,r,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Vo=c.slice(t,1<r?1-r:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Ud(){return!1}function zn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Ud,this.isPropagationStopped=Ud,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=zn(Ya),Fr=x({},Ya,{view:0,detail:0}),sv=zn(Fr),Vc,kc,Hr,qo=x({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hr&&(Hr&&t.type==="mousemove"?(Vc=t.screenX-Hr.screenX,kc=t.screenY-Hr.screenY):kc=Vc=0,Hr=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Ld=zn(qo),rv=x({},qo,{dataTransfer:0}),ov=zn(rv),lv=x({},Fr,{relatedTarget:0}),Xc=zn(lv),cv=x({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=zn(cv),fv=x({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hv=zn(fv),dv=x({},Ya,{data:0}),Nd=zn(dv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gv[t])?!!n[t]:!1}function Wc(){return _v}var vv=x({},Fr,{key:function(t){if(t.key){var n=pv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xv=zn(vv),Sv=x({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=zn(Sv),yv=x({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),Mv=zn(yv),Ev=x({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=zn(Ev),bv=x({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=zn(bv),Rv=x({},Ya,{newState:0,oldState:0}),Cv=zn(Rv),wv=[9,13,27,32],qc=zi&&"CompositionEvent"in window,Gr=null;zi&&"documentMode"in document&&(Gr=document.documentMode);var Dv=zi&&"TextEvent"in window&&!Gr,zd=zi&&(!qc||Gr&&8<Gr&&11>=Gr),Pd=" ",Bd=!1;function Id(t,n){switch(t){case"keyup":return wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function Uv(t,n){switch(t){case"compositionend":return Fd(n);case"keypress":return n.which!==32?null:(Bd=!0,Pd);case"textInput":return t=n.data,t===Pd&&Bd?null:t;default:return null}}function Lv(t,n){if(ws)return t==="compositionend"||!qc&&Id(t,n)?(t=Dd(),Vo=Gc=ca=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zd&&n.locale!=="ko"?null:n.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Nv[t.type]:n==="textarea"}function Gd(t,n,a,r){Rs?Cs?Cs.push(r):Cs=[r]:Rs=r,n=zl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Vr=null,kr=null;function Ov(t){Eg(t,0)}function Yo(t){var n=nt(t);if(Nn(n))return t}function Vd(t,n){if(t==="change")return n}var kd=!1;if(zi){var Yc;if(zi){var jc="oninput"in document;if(!jc){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),jc=typeof Xd.oninput=="function"}Yc=jc}else Yc=!1;kd=Yc&&(!document.documentMode||9<document.documentMode)}function Wd(){Vr&&(Vr.detachEvent("onpropertychange",qd),kr=Vr=null)}function qd(t){if(t.propertyName==="value"&&Yo(kr)){var n=[];Gd(n,kr,t,Ic(t)),wd(Ov,n)}}function zv(t,n,a){t==="focusin"?(Wd(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",qd)):t==="focusout"&&Wd()}function Pv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(kr)}function Bv(t,n){if(t==="click")return Yo(n)}function Iv(t,n){if(t==="input"||t==="change")return Yo(n)}function Fv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Fv;function Xr(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,n){var a=Yd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yd(a)}}function Zd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Kd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=di(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=di(t.document)}return n}function Zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Hv=zi&&"documentMode"in document&&11>=document.documentMode,Ds=null,Kc=null,Wr=null,Qc=!1;function Qd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Ds==null||Ds!==di(r)||(r=Ds,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&Xr(Wr,r)||(Wr=r,r=zl(Kc,"onSelect"),0<r.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Ds)))}function ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Us={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Jc={},Jd={};zi&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Za(t){if(Jc[t])return Jc[t];if(!Us[t])return t;var n=Us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jd)return Jc[t]=n[a];return t}var $d=Za("animationend"),tp=Za("animationiteration"),ep=Za("animationstart"),Gv=Za("transitionrun"),Vv=Za("transitionstart"),kv=Za("transitioncancel"),np=Za("transitionend"),ip=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function pi(t,n){ip.set(t,n),Nt(n,[t])}var jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$n=[],Ls=0,tu=0;function Zo(){for(var t=Ls,n=tu=Ls=0;n<t;){var a=$n[n];$n[n++]=null;var r=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&ap(a,c,f)}}function Ko(t,n,a,r){$n[Ls++]=t,$n[Ls++]=n,$n[Ls++]=a,$n[Ls++]=r,tu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function eu(t,n,a,r){return Ko(t,n,a,r),Qo(t)}function Ka(t,n){return Ko(t,null,null,n),Qo(t)}function ap(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Jt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Qo(t){if(50<po)throw po=0,ff=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function Xv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new Xv(t,n,a,r)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Jo(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")nu(t)&&(g=1);else if(typeof t=="string")g=Zx(t,a,q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Wn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return Qa(a.children,c,f,n);case y:g=8,c|=24;break;case _:return t=Wn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case Z:return t=Wn(13,a,n,c),t.elementType=Z,t.lanes=f,t;case G:return t=Wn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:g=10;break t;case B:g=9;break t;case D:g=11;break t;case z:g=14;break t;case j:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Qa(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function iu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function rp(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function au(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var op=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},op.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var Os=[],zs=0,$o=null,qr=0,ei=[],ni=0,ua=null,bi=1,Ai="";function Bi(t,n){Os[zs++]=qr,Os[zs++]=$o,$o=t,qr=n}function lp(t,n,a){ei[ni++]=bi,ei[ni++]=Ai,ei[ni++]=ua,ua=t;var r=bi;t=Ai;var c=32-Jt(r)-1;r&=~(1<<c),a+=1;var f=32-Jt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,bi=1<<32-Jt(n)+c|a<<c|r,Ai=f+t}else bi=1<<f|a<<c|r,Ai=t}function su(t){t.return!==null&&(Bi(t,1),lp(t,1,0))}function ru(t){for(;t===$o;)$o=Os[--zs],Os[zs]=null,qr=Os[--zs],Os[zs]=null;for(;t===ua;)ua=ei[--ni],ei[ni]=null,Ai=ei[--ni],ei[ni]=null,bi=ei[--ni],ei[ni]=null}function cp(t,n){ei[ni++]=bi,ei[ni++]=Ai,ei[ni++]=ua,bi=n.id,Ai=n.overflow,ua=t}var xn=null,ke=null,xe=!1,fa=null,ii=!1,ou=Error(s(519));function ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yr(ti(n,t)),ou}function up(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[je]=t,n[_n]=r,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)he(go[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Dn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),As(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Rg(n.textContent,a)?(r.popover!=null&&(he("beforetoggle",n),he("toggle",n)),r.onScroll!=null&&he("scroll",n),r.onScrollEnd!=null&&he("scrollend",n),r.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||ha(t,!0)}function fp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:xn=xn.return}}function Ps(t){if(t!==xn)return!1;if(!xe)return fp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Af(t.type,t.memoizedProps)),a=!a),a&&ke&&ha(t),fp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Pg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ke=Pg(t)}else n===27?(n=ke,Aa(t.type)?(t=Uf,Uf=null,ke=t):ke=n):ke=xn?si(t.stateNode.nextSibling):null;return!0}function Ja(){ke=xn=null,xe=!1}function lu(){var t=fa;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),fa=null),t}function Yr(t){fa===null?fa=[t]:fa.push(t)}var cu=L(null),$a=null,Ii=null;function da(t,n,a){St(cu,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=cu.current,tt(cu)}function uu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function fu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),uu(f.return,a,t),r||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),uu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Bs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=c.type;Xn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===xt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yo):t=[yo])}c=c.return}t!==null&&fu(n,t,a,r),n.flags|=262144}function tl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return hp($a,t)}function el(t,n){return $a===null&&ts(t),hp(t,n)}function hp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(s(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var Wv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},qv=o.unstable_scheduleCallback,Yv=o.unstable_NormalPriority,nn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new Wv,data:new Map,refCount:0}}function jr(t){t.refCount--,t.refCount===0&&qv(Yv,function(){t.controller.abort()})}var Zr=null,du=0,Is=0,Fs=null;function jv(t,n){if(Zr===null){var a=Zr=[];du=0,Is=_f(),Fs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return du++,n.then(dp,dp),n}function dp(){if(--du===0&&Zr!==null){Fs!==null&&(Fs.status="fulfilled");var t=Zr;Zr=null,Is=0,Fs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Zv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var pp=O.S;O.S=function(t,n){Qm=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jv(t,n),pp!==null&&pp(t,n)};var es=L(null);function pu(){var t=es.current;return t!==null?t:He.pooledCache}function nl(t,n){n===null?St(es,es.current):St(es,n.pool)}function mp(){var t=pu();return t===null?null:{parent:nn._currentValue,pool:t}}var Hs=Error(s(460)),mu=Error(s(474)),il=Error(s(542)),al={then:function(){}};function gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _p(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Oi,Oi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xp(t),t;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xp(t),t}throw is=n,Hs}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Hs):a}}var is=null;function vp(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function xp(t){if(t===Hs||t===il)throw Error(s(483))}var Gs=null,Kr=0;function sl(t){var n=Kr;return Kr+=1,Gs===null&&(Gs=[]),_p(Gs,t,n)}function Qr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function rl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sp(t){function n(W,H){if(t){var Q=W.deletions;Q===null?(W.deletions=[H],W.flags|=16):Q.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function r(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function c(W,H){return W=Pi(W,H),W.index=0,W.sibling=null,W}function f(W,H,Q){return W.index=Q,t?(Q=W.alternate,Q!==null?(Q=Q.index,Q<H?(W.flags|=67108866,H):Q):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function g(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,H,Q,pt){return H===null||H.tag!==6?(H=iu(Q,W.mode,pt),H.return=W,H):(H=c(H,Q),H.return=W,H)}function P(W,H,Q,pt){var Yt=Q.type;return Yt===C?ct(W,H,Q.props.children,pt,Q.key):H!==null&&(H.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===j&&ns(Yt)===H.type)?(H=c(H,Q.props),Qr(H,Q),H.return=W,H):(H=Jo(Q.type,Q.key,Q.props,null,W.mode,pt),Qr(H,Q),H.return=W,H)}function J(W,H,Q,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=au(Q,W.mode,pt),H.return=W,H):(H=c(H,Q.children||[]),H.return=W,H)}function ct(W,H,Q,pt,Yt){return H===null||H.tag!==7?(H=Qa(Q,W.mode,pt,Yt),H.return=W,H):(H=c(H,Q),H.return=W,H)}function _t(W,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=iu(""+H,W.mode,Q),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return Q=Jo(H.type,H.key,H.props,null,W.mode,Q),Qr(Q,H),Q.return=W,Q;case b:return H=au(H,W.mode,Q),H.return=W,H;case j:return H=ns(H),_t(W,H,Q)}if(mt(H)||rt(H))return H=Qa(H,W.mode,Q,null),H.return=W,H;if(typeof H.then=="function")return _t(W,sl(H),Q);if(H.$$typeof===N)return _t(W,el(W,H),Q);rl(W,H)}return null}function $(W,H,Q,pt){var Yt=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Yt!==null?null:E(W,H,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Yt?P(W,H,Q,pt):null;case b:return Q.key===Yt?J(W,H,Q,pt):null;case j:return Q=ns(Q),$(W,H,Q,pt)}if(mt(Q)||rt(Q))return Yt!==null?null:ct(W,H,Q,pt,null);if(typeof Q.then=="function")return $(W,H,sl(Q),pt);if(Q.$$typeof===N)return $(W,H,el(W,Q),pt);rl(W,Q)}return null}function ot(W,H,Q,pt,Yt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get(Q)||null,E(H,W,""+pt,Yt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return W=W.get(pt.key===null?Q:pt.key)||null,P(H,W,pt,Yt);case b:return W=W.get(pt.key===null?Q:pt.key)||null,J(H,W,pt,Yt);case j:return pt=ns(pt),ot(W,H,Q,pt,Yt)}if(mt(pt)||rt(pt))return W=W.get(Q)||null,ct(H,W,pt,Yt,null);if(typeof pt.then=="function")return ot(W,H,Q,sl(pt),Yt);if(pt.$$typeof===N)return ot(W,H,Q,el(H,pt),Yt);rl(H,pt)}return null}function Ft(W,H,Q,pt){for(var Yt=null,be=null,Ht=H,re=H=0,ge=null;Ht!==null&&re<Q.length;re++){Ht.index>re?(ge=Ht,Ht=null):ge=Ht.sibling;var Ae=$(W,Ht,Q[re],pt);if(Ae===null){Ht===null&&(Ht=ge);break}t&&Ht&&Ae.alternate===null&&n(W,Ht),H=f(Ae,H,re),be===null?Yt=Ae:be.sibling=Ae,be=Ae,Ht=ge}if(re===Q.length)return a(W,Ht),xe&&Bi(W,re),Yt;if(Ht===null){for(;re<Q.length;re++)Ht=_t(W,Q[re],pt),Ht!==null&&(H=f(Ht,H,re),be===null?Yt=Ht:be.sibling=Ht,be=Ht);return xe&&Bi(W,re),Yt}for(Ht=r(Ht);re<Q.length;re++)ge=ot(Ht,W,re,Q[re],pt),ge!==null&&(t&&ge.alternate!==null&&Ht.delete(ge.key===null?re:ge.key),H=f(ge,H,re),be===null?Yt=ge:be.sibling=ge,be=ge);return t&&Ht.forEach(function(Ua){return n(W,Ua)}),xe&&Bi(W,re),Yt}function Qt(W,H,Q,pt){if(Q==null)throw Error(s(151));for(var Yt=null,be=null,Ht=H,re=H=0,ge=null,Ae=Q.next();Ht!==null&&!Ae.done;re++,Ae=Q.next()){Ht.index>re?(ge=Ht,Ht=null):ge=Ht.sibling;var Ua=$(W,Ht,Ae.value,pt);if(Ua===null){Ht===null&&(Ht=ge);break}t&&Ht&&Ua.alternate===null&&n(W,Ht),H=f(Ua,H,re),be===null?Yt=Ua:be.sibling=Ua,be=Ua,Ht=ge}if(Ae.done)return a(W,Ht),xe&&Bi(W,re),Yt;if(Ht===null){for(;!Ae.done;re++,Ae=Q.next())Ae=_t(W,Ae.value,pt),Ae!==null&&(H=f(Ae,H,re),be===null?Yt=Ae:be.sibling=Ae,be=Ae);return xe&&Bi(W,re),Yt}for(Ht=r(Ht);!Ae.done;re++,Ae=Q.next())Ae=ot(Ht,W,re,Ae.value,pt),Ae!==null&&(t&&Ae.alternate!==null&&Ht.delete(Ae.key===null?re:Ae.key),H=f(Ae,H,re),be===null?Yt=Ae:be.sibling=Ae,be=Ae);return t&&Ht.forEach(function(rS){return n(W,rS)}),xe&&Bi(W,re),Yt}function Be(W,H,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Yt=Q.key;H!==null;){if(H.key===Yt){if(Yt=Q.type,Yt===C){if(H.tag===7){a(W,H.sibling),pt=c(H,Q.props.children),pt.return=W,W=pt;break t}}else if(H.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===j&&ns(Yt)===H.type){a(W,H.sibling),pt=c(H,Q.props),Qr(pt,Q),pt.return=W,W=pt;break t}a(W,H);break}else n(W,H);H=H.sibling}Q.type===C?(pt=Qa(Q.props.children,W.mode,pt,Q.key),pt.return=W,W=pt):(pt=Jo(Q.type,Q.key,Q.props,null,W.mode,pt),Qr(pt,Q),pt.return=W,W=pt)}return g(W);case b:t:{for(Yt=Q.key;H!==null;){if(H.key===Yt)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(W,H.sibling),pt=c(H,Q.children||[]),pt.return=W,W=pt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}pt=au(Q,W.mode,pt),pt.return=W,W=pt}return g(W);case j:return Q=ns(Q),Be(W,H,Q,pt)}if(mt(Q))return Ft(W,H,Q,pt);if(rt(Q)){if(Yt=rt(Q),typeof Yt!="function")throw Error(s(150));return Q=Yt.call(Q),Qt(W,H,Q,pt)}if(typeof Q.then=="function")return Be(W,H,sl(Q),pt);if(Q.$$typeof===N)return Be(W,H,el(W,Q),pt);rl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(W,H.sibling),pt=c(H,Q),pt.return=W,W=pt):(a(W,H),pt=iu(Q,W.mode,pt),pt.return=W,W=pt),g(W)):a(W,H)}return function(W,H,Q,pt){try{Kr=0;var Yt=Be(W,H,Q,pt);return Gs=null,Yt}catch(Ht){if(Ht===Hs||Ht===il)throw Ht;var be=Wn(29,Ht,null,W.mode);return be.lanes=pt,be.return=W,be}finally{}}}var as=Sp(!0),yp=Sp(!1),pa=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ce&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Qo(t),ap(t,null,a),n}return Ko(t,r,n,a),Qo(t)}function Jr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}function vu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xu=!1;function $r(){if(xu){var t=Fs;if(t!==null)throw t}}function to(t,n,a,r){xu=!1;var c=t.updateQueue;pa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,J=P.next;P.next=null,g===null?f=J:g.next=J,g=P;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,E=ct.lastBaseUpdate,E!==g&&(E===null?ct.firstBaseUpdate=J:E.next=J,ct.lastBaseUpdate=P))}if(f!==null){var _t=c.baseState;g=0,ct=J=P=null,E=f;do{var $=E.lane&-536870913,ot=$!==E.lane;if(ot?(me&$)===$:(r&$)===$){$!==0&&$===Is&&(xu=!0),ct!==null&&(ct=ct.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,Qt=E;$=n;var Be=a;switch(Qt.tag){case 1:if(Ft=Qt.payload,typeof Ft=="function"){_t=Ft.call(Be,_t,$);break t}_t=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=Qt.payload,$=typeof Ft=="function"?Ft.call(Be,_t,$):Ft,$==null)break t;_t=x({},_t,$);break t;case 2:pa=!0}}$=E.callback,$!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[$]:ot.push($))}else ot={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ct===null?(J=ct=ot,P=_t):ct=ct.next=ot,g|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ct===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),ya|=g,t.lanes=g,t.memoizedState=_t}}function Mp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Ep(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Mp(a[t],n)}var Vs=L(null),ol=L(0);function Tp(t,n){t=ji,St(ol,t),St(Vs,n),ji=t|n.baseLanes}function Su(){St(ol,ji),St(Vs,Vs.current)}function yu(){ji=ol.current,tt(Vs),tt(ol)}var qn=L(null),ai=null;function _a(t){var n=t.alternate;St(tn,tn.current&1),St(qn,t),ai===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(ai=t)}function Mu(t){St(tn,tn.current),St(qn,t),ai===null&&(ai=t)}function bp(t){t.tag===22?(St(tn,tn.current),St(qn,t),ai===null&&(ai=t)):va()}function va(){St(tn,tn.current),St(qn,qn.current)}function Yn(t){tt(qn),ai===t&&(ai=null),tt(tn)}var tn=L(0);function ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=0,se=null,ze=null,an=null,cl=!1,ks=!1,ss=!1,ul=0,eo=0,Xs=null,Kv=0;function Ke(){throw Error(s(321))}function Eu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Tu(t,n,a,r,c,f){return Hi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?lm:Fu,ss=!1,f=a(r,c),ss=!1,ks&&(f=Rp(n,a,r,c)),Ap(t),f}function Ap(t){O.H=ao;var n=ze!==null&&ze.next!==null;if(Hi=0,an=ze=se=null,cl=!1,eo=0,Xs=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&tl(t)&&(sn=!0))}function Rp(t,n,a,r){se=t;var c=0;do{if(ks&&(Xs=null),eo=0,ks=!1,25<=c)throw Error(s(301));if(c+=1,an=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=cm,f=n(a,r)}while(ks);return f}function Qv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(se.flags|=1024),n}function bu(){var t=ul!==0;return ul=0,t}function Au(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ru(t){if(cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cl=!1}Hi=0,an=ze=se=null,ks=!1,eo=ul=0,Xs=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?se.memoizedState=an=t:an=an.next=t,an}function en(){if(ze===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=an===null?se.memoizedState:an.next;if(n!==null)an=n,ze=t;else{if(t===null)throw se.alternate===null?Error(s(467)):Error(s(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},an===null?se.memoizedState=an=t:an=an.next=t}return an}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=eo;return eo+=1,Xs===null&&(Xs=[]),t=_p(Xs,t,n),n=se,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?lm:Fu),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===N)return Sn(t)}throw Error(s(438,String(t)))}function Cu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=R;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function dl(t){var n=en();return wu(n,ze,t)}function wu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,P=null,J=n,ct=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(me&_t)===_t:(Hi&_t)===_t){var $=J.revertLane;if($===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Is&&(ct=!0);else if((Hi&$)===$){J=J.next,$===Is&&(ct=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=_t,g=f):P=P.next=_t,se.lanes|=$,ya|=$;_t=J.action,ss&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else $={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=$,g=f):P=P.next=$,se.lanes|=_t,ya|=_t;J=J.next}while(J!==null&&J!==n);if(P===null?g=f:P.next=E,!Xn(f,t.memoizedState)&&(sn=!0,ct&&(a=Fs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Du(t){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Xn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Cp(t,n,a){var r=se,c=en(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Xn((ze||c).memoizedState,a);if(g&&(c.memoizedState=a,sn=!0),c=c.queue,Nu(Up.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||an!==null&&an.memoizedState.tag&1){if(r.flags|=2048,Ws(9,{destroy:void 0},Dp.bind(null,r,c,a,n),null),He===null)throw Error(s(349));f||(Hi&127)!==0||wp(r,n,a)}return a}function wp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=fl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Dp(t,n,a,r){n.value=a,n.getSnapshot=r,Lp(n)&&Np(t)}function Up(t,n,a){return a(function(){Lp(n)&&Np(t)})}function Lp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Np(t){var n=Ka(t,2);n!==null&&Hn(n,t,2)}function Uu(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),ss){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function Op(t,n,a,r){return t.baseState=a,wu(t,ze,typeof r=="function"?r:Gi)}function Jv(t,n,a,r,c){if(gl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function zp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var E=a(c,r),P=O.S;P!==null&&P(g,E),Pp(t,n,E)}catch(J){Lu(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,r),Pp(t,n,f)}catch(J){Lu(t,n,J)}}function Pp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Bp(t,n,r)},function(r){return Lu(t,n,r)}):Bp(t,n,a)}function Bp(t,n,a){n.status="fulfilled",n.value=a,Ip(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,zp(t,a)))}function Lu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Ip(n),n=n.next;while(n!==r)}t.action=null}function Ip(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fp(t,n){return n}function Hp(t,n){if(xe){var a=He.formState;if(a!==null){t:{var r=se;if(xe){if(ke){e:{for(var c=ke,f=ii;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=si(c.nextSibling),r=c.data==="F!";break t}}ha(r)}r=!1}r&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=r,a=sm.bind(null,se,r),r.dispatch=a,r=Uu(!1),f=Iu.bind(null,se,!1,r.queue),r=Un(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Jv.bind(null,se,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Gp(t){var n=en();return Vp(n,ze,t)}function Vp(t,n,a){if(n=wu(t,n,Fp)[0],t=dl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=no(n)}catch(g){throw g===Hs?il:g}else r=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Ws(9,{destroy:void 0},$v.bind(null,c,a),null)),[r,f,t]}function $v(t,n){t.action=n}function kp(t){var n=en(),a=ze;if(a!==null)return Vp(n,a,t);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ws(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=se.updateQueue,n===null&&(n=fl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Xp(){return en().memoizedState}function pl(t,n,a,r){var c=Un();se.flags|=t,c.memoizedState=Ws(1|n,{destroy:void 0},a,r===void 0?null:r)}function ml(t,n,a,r){var c=en();r=r===void 0?null:r;var f=c.memoizedState.inst;ze!==null&&r!==null&&Eu(r,ze.memoizedState.deps)?c.memoizedState=Ws(n,f,a,r):(se.flags|=t,c.memoizedState=Ws(1|n,f,a,r))}function Wp(t,n){pl(8390656,8,t,n)}function Nu(t,n){ml(2048,8,t,n)}function tx(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=fl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function qp(t){var n=en().memoizedState;return tx({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Yp(t,n){return ml(4,2,t,n)}function jp(t,n){return ml(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Kp(t,n,a){a=a!=null?a.concat([t]):null,ml(4,4,Zp.bind(null,n,t),a)}function Ou(){}function Qp(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Eu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Jp(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Eu(n,r[1]))return r[0];if(r=t(),ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function zu(t,n,a){return a===void 0||(Hi&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=$m(),se.lanes|=t,ya|=t,a)}function $p(t,n,a,r){return Xn(a,n)?a:Vs.current!==null?(t=zu(t,a,r),Xn(t,n)||(sn=!0),t):(Hi&42)===0||(Hi&1073741824)!==0&&(me&261930)===0?(sn=!0,t.memoizedState=a):(t=$m(),se.lanes|=t,ya|=t,n)}function tm(t,n,a,r,c){var f=K.p;K.p=f!==0&&8>f?f:8;var g=O.T,E={};O.T=E,Iu(t,!1,n,a);try{var P=c(),J=O.S;if(J!==null&&J(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=Zv(P,r);io(t,n,ct,Kn(t))}else io(t,n,r,Kn(t))}catch(_t){io(t,n,{then:function(){},status:"rejected",reason:_t},Kn())}finally{K.p=f,g!==null&&E.types!==null&&(g.types=E.types),O.T=g}}function ex(){}function Pu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=em(t).queue;tm(t,c,n,Y,a===null?ex:function(){return nm(t),a(r)})}function em(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function nm(t){var n=em(t);n.next===null&&(n=t.alternate.memoizedState),io(t,n.next.queue,{},Kn())}function Bu(){return Sn(yo)}function im(){return en().memoizedState}function am(){return en().memoizedState}function nx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=ma(a);var r=ga(n,t,a);r!==null&&(Hn(r,n,a),Jr(r,n,a)),n={cache:hu()},t.payload=n;return}n=n.return}}function ix(t,n,a){var r=Kn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(t)?rm(n,a):(a=eu(t,n,a,r),a!==null&&(Hn(a,t,r),om(a,n,r)))}function sm(t,n,a){var r=Kn();io(t,n,a,r)}function io(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(t))rm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Xn(E,g))return Ko(t,n,c,0),He===null&&Zo(),!1}catch{}finally{}if(a=eu(t,n,c,r),a!==null)return Hn(a,t,r),om(a,n,r),!0}return!1}function Iu(t,n,a,r){if(r={lane:2,revertLane:_f(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(n)throw Error(s(479))}else n=eu(t,a,r,2),n!==null&&Hn(n,t,2)}function gl(t){var n=t.alternate;return t===se||n!==null&&n===se}function rm(t,n){ks=cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function om(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Nr(t,a)}}var ao={readContext:Sn,use:hl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};ao.useEffectEvent=Ke;var lm={readContext:Sn,use:hl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Wp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,pl(4194308,4,Zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return pl(4194308,4,t,n)},useInsertionEffect:function(t,n){pl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var r=t();if(ss){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Un();if(a!==void 0){var c=a(n);if(ss){Ot(!0);try{a(n)}finally{Ot(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=ix.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=Uu(t);var n=t.queue,a=sm.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(t,n){var a=Un();return zu(a,t,n)},useTransition:function(){var t=Uu(!1);return t=tm.bind(null,se,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=se,c=Un();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),He===null)throw Error(s(349));(me&127)!==0||wp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Wp(Up.bind(null,r,f,t),[t]),r.flags|=2048,Ws(9,{destroy:void 0},Dp.bind(null,r,f,a,n),null),a},useId:function(){var t=Un(),n=He.identifierPrefix;if(xe){var a=Ai,r=bi;a=(r&~(1<<32-Jt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Cu,useCacheRefresh:function(){return Un().memoizedState=nx.bind(null,se)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:Sn,use:hl,useCallback:Qp,useContext:Sn,useEffect:Nu,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:dl,useRef:Xp,useState:function(){return dl(Gi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=en();return $p(a,ze.memoizedState,t,n)},useTransition:function(){var t=dl(Gi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Bu,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,n){var a=en();return Op(a,ze,t,n)},useMemoCache:Cu,useCacheRefresh:am};Fu.useEffectEvent=qp;var cm={readContext:Sn,use:hl,useCallback:Qp,useContext:Sn,useEffect:Nu,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:Du,useRef:Xp,useState:function(){return Du(Gi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=en();return ze===null?zu(a,t,n):$p(a,ze.memoizedState,t,n)},useTransition:function(){var t=Du(Gi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Cp,useId:im,useHostTransitionStatus:Bu,useFormState:kp,useActionState:kp,useOptimistic:function(t,n){var a=en();return ze!==null?Op(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:am};cm.useEffectEvent=qp;function Hu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Kn(),c=ma(r);c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,r),n!==null&&(Hn(n,t,r),Jr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Kn(),c=ma(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,r),n!==null&&(Hn(n,t,r),Jr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),r=ma(a);r.tag=2,n!=null&&(r.callback=n),n=ga(t,r,a),n!==null&&(Hn(n,t,a),Jr(n,t,a))}};function um(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Xr(a,r)||!Xr(c,f):!0}function fm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Gu.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function hm(t){jo(t)}function dm(t){console.error(t)}function pm(t){jo(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(t,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function gm(t){return t=ma(t),t.tag=3,t}function _m(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){mm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){mm(n,a,r),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function ax(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return ai===null?wl():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),pf(t,r,c)),!1;case 22:return a.flags|=65536,r===al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),pf(t,r,c)),!1}throw Error(s(435,a.tag))}return pf(t,r,c),wl(),!1}if(xe)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ou&&(t=Error(s(422),{cause:r}),Yr(ti(t,a)))):(r!==ou&&(n=Error(s(423),{cause:r}),Yr(ti(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ti(r,a),c=Vu(t.stateNode,r,c),vu(t,c),Qe!==4&&(Qe=2)),!1;var f=Error(s(520),{cause:r});if(f=ti(f,a),ho===null?ho=[f]:ho.push(f),Qe!==4&&(Qe=2),n===null)return!0;r=ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Vu(a.stateNode,r,t),vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=gm(c),_m(c,t,a,r),vu(a,c),!1}a=a.return}while(a!==null);return!1}var ku=Error(s(461)),sn=!1;function yn(t,n,a,r){n.child=t===null?yp(n,null,a,r):as(n,t.child,a,r)}function vm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return ts(n),r=Tu(t,n,a,g,f,c),E=bu(),t!==null&&!sn?(Au(t,n,c),Vi(t,n,c)):(xe&&E&&su(n),n.flags|=1,yn(t,n,r,c),n.child)}function xm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sm(t,n,f,r,c)):(t=Jo(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Qu(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xr,a(g,r)&&t.ref===n.ref)return Vi(t,n,c)}return n.flags|=1,t=Pi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Sm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Xr(f,r)&&t.ref===n.ref)if(sn=!1,n.pendingProps=r=f,Qu(t,c))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,Vi(t,n,c)}return Xu(t,n,a,r,c)}function ym(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Mm(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nl(n,f!==null?f.cachePool:null),f!==null?Tp(n,f):Su(),bp(n);else return r=n.lanes=536870912,Mm(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(nl(n,f.cachePool),Tp(n,f),va(),n.memoizedState=null):(t!==null&&nl(n,null),Su(),va());return yn(t,n,c,a),n.child}function so(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mm(t,n,a,r,c){var f=pu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&nl(n,null),Su(),bp(n),t!==null&&Bs(t,n,r,!0),n.childLanes=c,null}function vl(t,n){return n=Sl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Em(t,n,a){return as(n,t.child,null,a),t=vl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function sx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=vl(n,r),n.lanes=536870912,so(null,t);if(Mu(n),(t=ke)?(t=zg(t,ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw ha(n);return n.lanes=536870912,null}return vl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=Em(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(sn||Bs(t,n,a,!1),c=(a&t.childLanes)!==0,sn||c){if(r=He,r!==null&&(g=Ti(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ka(t,g),Hn(r,t,g),ku;wl(),n=Em(t,n,a)}else t=f.treeContext,ke=si(g.nextSibling),xn=n,xe=!0,fa=null,ii=!1,t!==null&&cp(n,t),n=vl(n,r),n.flags|=4096;return n}return t=Pi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Xu(t,n,a,r,c){return ts(n),a=Tu(t,n,a,r,void 0,c),r=bu(),t!==null&&!sn?(Au(t,n,c),Vi(t,n,c)):(xe&&r&&su(n),n.flags|=1,yn(t,n,a,c),n.child)}function Tm(t,n,a,r,c,f){return ts(n),n.updateQueue=null,a=Rp(n,r,a,c),Ap(t),r=bu(),t!==null&&!sn?(Au(t,n,f),Vi(t,n,f)):(xe&&r&&su(n),n.flags|=1,yn(t,n,a,f),n.child)}function bm(t,n,a,r,c){if(ts(n),n.stateNode===null){var f=Ns,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},gu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Ns,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Hu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Gu.enqueueReplaceState(f,f.state,null),to(n,r,f,c),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=rs(a,E);f.props=P;var J=f.context,ct=a.contextType;g=Ns,typeof ct=="object"&&ct!==null&&(g=Sn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==g)&&fm(n,f,r,g),pa=!1;var $=n.memoizedState;f.state=$,to(n,r,f,c),$r(),J=n.memoizedState,E||$!==J||pa?(typeof _t=="function"&&(Hu(n,a,_t,r),J=n.memoizedState),(P=pa||um(n,a,P,r,$,J,g))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=g,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,_u(t,n),g=n.memoizedProps,ct=rs(a,g),f.props=ct,_t=n.pendingProps,$=f.context,J=a.contextType,P=Ns,typeof J=="object"&&J!==null&&(P=Sn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_t||$!==P)&&fm(n,f,r,P),pa=!1,$=n.memoizedState,f.state=$,to(n,r,f,c),$r();var ot=n.memoizedState;g!==_t||$!==ot||pa||t!==null&&t.dependencies!==null&&tl(t.dependencies)?(typeof E=="function"&&(Hu(n,a,E,r),ot=n.memoizedState),(ct=pa||um(n,a,ct,r,$,ot,P)||t!==null&&t.dependencies!==null&&tl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=P,r=ct):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,xl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=as(n,t.child,null,c),n.child=as(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Vi(t,n,c),t}function Am(t,n,a,r){return Ja(),n.flags|=256,yn(t,n,a,r),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:mp()}}function Yu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function Rm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?_a(n):va(),(t=ke)?(t=zg(t,ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw ha(n);return Df(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(va(),c=n.mode,E=Sl({mode:"hidden",children:E},c),r=Qa(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=qu(a),r.childLanes=Yu(t,g,a),n.memoizedState=Wu,so(null,r)):(_a(n),ju(n,E))}var P=t.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=Zu(t,n,a)):n.memoizedState!==null?(va(),n.child=t.child,n.flags|=128,n=null):(va(),E=r.fallback,c=n.mode,r=Sl({mode:"visible",children:r.children},c),E=Qa(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,as(n,t.child,null,a),r=n.child,r.memoizedState=qu(a),r.childLanes=Yu(t,g,a),n.memoizedState=Wu,n=so(null,r));else if(_a(n),Df(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var J=g.dgst;g=J,r=Error(s(419)),r.stack="",r.digest=g,Yr({value:r,source:null,stack:null}),n=Zu(t,n,a)}else if(sn||Bs(t,n,a,!1),g=(a&t.childLanes)!==0,sn||g){if(g=He,g!==null&&(r=Ti(g,a),r!==0&&r!==P.retryLane))throw P.retryLane=r,Ka(t,r),Hn(g,t,r),ku;wf(E)||wl(),n=Zu(t,n,a)}else wf(E)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,ke=si(E.nextSibling),xn=n,xe=!0,fa=null,ii=!1,t!==null&&cp(n,t),n=ju(n,r.children),n.flags|=4096);return n}return c?(va(),E=r.fallback,c=n.mode,P=t.child,J=P.sibling,r=Pi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,J!==null?E=Pi(J,E):(E=Qa(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,so(null,r),r=n.child,E=t.child.memoizedState,E===null?E=qu(a):(c=E.cachePool,c!==null?(P=nn._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=mp(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Yu(t,g,a),n.memoizedState=Wu,so(t.child,r)):(_a(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ju(t,n){return n=Sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function Zu(t,n,a){return as(n,t.child,null,a),t=ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Cm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),uu(t.return,n,a)}function Ku(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function wm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=tn.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,St(tn,g),yn(t,n,r,a),r=xe?qr:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,a,n);else if(t.tag===19)Cm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ll(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ll(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ku(n,!0,a,null,f,r);break;case"together":Ku(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tl(t)))}function rx(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),da(n,nn,t.memoizedState.cache),Ja();break;case 27:case 5:jt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rm(t,n,a):(_a(n),t=Vi(t,n,a),t!==null?t.sibling:null);_a(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Bs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return wm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(tn,tn.current),r)break;return null;case 22:return n.lanes=0,ym(t,n,a,n.pendingProps);case 24:da(n,nn,t.memoizedState.cache)}return Vi(t,n,a)}function Dm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!Qu(t,a)&&(n.flags&128)===0)return sn=!1,rx(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,xe&&(n.flags&1048576)!==0&&lp(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")nu(t)?(r=rs(t,r),n.tag=1,n=bm(null,n,t,r,a)):(n.tag=0,n=Xu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=vm(null,n,t,r,a);break t}else if(c===z){n.tag=14,n=xm(null,n,t,r,a);break t}}throw n=ht(t)||t,Error(s(306,n,""))}}return n;case 0:return Xu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=rs(r,n.pendingProps),bm(t,n,r,c,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,_u(t,n),to(n,r,null,a);var g=n.memoizedState;if(r=g.cache,da(n,nn,r),r!==f.cache&&fu(n,[nn],a,!0),$r(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Am(t,n,r,a);break t}else if(r!==c){c=ti(Error(s(424)),n),Yr(c),n=Am(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ke=si(t.firstChild),xn=n,xe=!0,fa=null,ii=!0,a=yp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),r===c){n=Vi(t,n,a);break t}yn(t,n,r,a)}n=n.child}return n;case 26:return xl(t,n),t===null?(a=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Pl(Mt.current).createElement(a),r[je]=n,r[_n]=t,Mn(r,a,t),V(r),n.stateNode=r):n.memoizedState=Gg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return jt(n),t===null&&xe&&(r=n.stateNode=Ig(n.type,n.pendingProps,Mt.current),xn=n,ii=!0,c=ke,Aa(n.type)?(Uf=c,ke=si(r.firstChild)):ke=c),yn(t,n,n.pendingProps.children,a),xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=ke)&&(r=Px(r,n.type,n.pendingProps,ii),r!==null?(n.stateNode=r,xn=n,ke=si(r.firstChild),ii=!1,c=!0):c=!1),c||ha(n)),jt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Af(c,f)?r=null:g!==null&&Af(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Tu(t,n,Qv,null,null,a),yo._currentValue=c),xl(t,n),yn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=ke)&&(a=Bx(a,n.pendingProps,ii),a!==null?(n.stateNode=a,xn=n,ke=null,t=!0):t=!1),t||ha(n)),null;case 13:return Rm(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=as(n,null,r,a):yn(t,n,r,a),n.child;case 11:return vm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,da(n,n.type,r.value),yn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=Sn(c),r=r(c),n.flags|=1,yn(t,n,r,a),n.child;case 14:return xm(t,n,n.type,n.pendingProps,a);case 15:return Sm(t,n,n.type,n.pendingProps,a);case 19:return wm(t,n,a);case 31:return sx(t,n,a);case 22:return ym(t,n,a,n.pendingProps);case 24:return ts(n),r=Sn(nn),t===null?(c=pu(),c===null&&(c=He,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},gu(n),da(n,nn,c)):((t.lanes&a)!==0&&(_u(t,n),to(n,null,null,a),$r()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,nn,r)):(r=f.cache,da(n,nn,r),r!==c.cache&&fu(n,[nn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ki(t){t.flags|=4}function Ju(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(ig())t.flags|=8192;else throw is=al,mu}else t.flags&=-16777217}function Um(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qg(n))if(ig())t.flags|=8192;else throw is=al,mu}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ln():536870912,t.lanes|=n,Zs|=n)}function ro(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function ox(t,n,a){var r=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Fi(nn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ps(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ki(n),f!==null?(Xe(n),Um(n,f)):(Xe(n),Ju(n,c,null,r,a))):f?f!==t.memoizedState?(ki(n),Xe(n),Um(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ki(n),Xe(n),Ju(n,c,t,r,a)),null;case 27:if(Ge(n),a=Mt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}t=q.current,Ps(n)?up(n):(t=Ig(c,r,a),n.stateNode=t,ki(n))}return Xe(n),null;case 5:if(Ge(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Xe(n),null}if(f=q.current,Ps(n))up(n);else{var g=Pl(Mt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[je]=n,f[_n]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Mn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ki(n)}}return Xe(n),Ju(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ki(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Mt.current,Ps(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=xn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Rg(t.nodeValue,a)),t||ha(n,!0)}else t=Pl(t).createTextNode(r),t[je]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ps(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[je]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Xe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ps(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[je]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Xe(n),null);case 4:return Gt(),t===null&&yf(n.stateNode.containerInfo),Xe(n),null;case 10:return Fi(n.type),Xe(n),null;case 19:if(tt(tn),r=n.memoizedState,r===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ro(r,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ll(t),f!==null){for(n.flags|=128,ro(r,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sp(a,t),a=a.sibling;return St(tn,tn.current&1|2),xe&&Bi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&dt()>Al&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304)}else{if(!c)if(t=ll(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),ro(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return Xe(n),null}else 2*dt()-r.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=dt(),t.sibling=null,a=tn.current,St(tn,c?a&1|2:a&1),xe&&Bi(n,r.treeForkCount),t):(Xe(n),null);case 22:case 23:return Yn(n),yu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&tt(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(nn),Xe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function lx(t,n){switch(ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(nn),Gt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(tn),null;case 4:return Gt(),null;case 10:return Fi(n.type),null;case 22:case 23:return Yn(n),yu(),t!==null&&tt(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(nn),null;case 25:return null;default:return null}}function Lm(t,n){switch(ru(n),n.tag){case 3:Fi(nn),Gt();break;case 26:case 27:case 5:Ge(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:tt(tn);break;case 10:Fi(n.type);break;case 22:case 23:Yn(n),yu(),t!==null&&tt(es);break;case 24:Fi(nn)}}function oo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(E){Le(n,n.return,E)}}function xa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var P=a,J=E;try{J()}catch(ct){Le(c,P,ct)}}}r=r.next}while(r!==f)}}catch(ct){Le(n,n.return,ct)}}function Nm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ep(n,a)}catch(r){Le(t,t.return,r)}}}function Om(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Le(t,n,r)}}function lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Le(t,n,c)}}function Ri(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function zm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function $u(t,n,a){try{var r=t.stateNode;Dx(r,t.type,a,n),r[_n]=n}catch(c){Le(t,t.return,c)}}function Pm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Pm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Oi));else if(r!==4&&(r===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ef(t,n,a),t=t.sibling;t!==null;)ef(t,n,a),t=t.sibling}function Ml(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ml(t,n,a),t=t.sibling;t!==null;)Ml(t,n,a),t=t.sibling}function Bm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,r,a),n[je]=t,n[_n]=a}catch(f){Le(t,t.return,f)}}var Xi=!1,rn=!1,nf=!1,Im=typeof WeakSet=="function"?WeakSet:Set,pn=null;function cx(t,n){if(t=t.containerInfo,Tf=kl,t=Kd(t),Zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,P=-1,J=0,ct=0,_t=t,$=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(E=g+c),_t!==f||r!==0&&_t.nodeType!==3||(P=g+r),_t.nodeType===3&&(g+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)$=_t,_t=ot;for(;;){if(_t===t)break e;if($===a&&++J===c&&(E=g),$===f&&++ct===r&&(P=g),(ot=_t.nextSibling)!==null)break;_t=$,$=_t.parentNode}_t=ot}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(bf={focusedElem:t,selectionRange:a},kl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=rs(a.type,c);t=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Cf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Fm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),r&4&&oo(5,a);break;case 1:if(qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Le(a,a.return,g)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Le(a,a.return,g)}}r&64&&Nm(a),r&512&&lo(a,a.return);break;case 3:if(qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(t,n)}catch(g){Le(a,a.return,g)}}break;case 27:n===null&&r&4&&Bm(a);case 26:case 5:qi(t,a),n===null&&r&4&&zm(a),r&512&&lo(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),r&4&&Vm(t,a);break;case 13:qi(t,a),r&4&&km(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=vx.bind(null,a),Ix(t,a))));break;case 22:if(r=a.memoizedState!==null||Xi,!r){n=n!==null&&n.memoizedState!==null||rn,c=Xi;var f=rn;Xi=r,(rn=n)&&!f?Yi(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),Xi=c,rn=f}break;case 30:break;default:qi(t,a)}}function Hm(t){var n=t.alternate;n!==null&&(t.alternate=null,Hm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Pn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Gm(t,n,a),a=a.sibling}function Gm(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:rn||Ri(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ri(a,n);var r=qe,c=Pn;Aa(a.type)&&(qe=a.stateNode,Pn=!1),Wi(t,n,a),vo(a.stateNode),qe=r,Pn=c;break;case 5:rn||Ri(a,n);case 6:if(r=qe,c=Pn,qe=null,Wi(t,n,a),qe=r,Pn=c,qe!==null)if(Pn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:qe!==null&&(Pn?(t=qe,Ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ir(t)):Ng(qe,a.stateNode));break;case 4:r=qe,c=Pn,qe=a.stateNode.containerInfo,Pn=!0,Wi(t,n,a),qe=r,Pn=c;break;case 0:case 11:case 14:case 15:xa(2,a,n),rn||xa(4,a,n),Wi(t,n,a);break;case 1:rn||(Ri(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Om(a,n,r)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,Wi(t,n,a),rn=r;break;default:Wi(t,n,a)}}function Vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ir(t)}catch(a){Le(n,n.return,a)}}}function km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ir(t)}catch(a){Le(n,n.return,a)}}function ux(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Im),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Im),n;default:throw Error(s(435,t.tag))}}function El(t,n){var a=ux(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=xx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Aa(E.type)){qe=E.stateNode,Pn=!1;break t}break;case 5:qe=E.stateNode,Pn=!1;break t;case 3:case 4:qe=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(qe===null)throw Error(s(160));Gm(f,g,c),qe=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Xm(n,t),n=n.sibling}var mi=null;function Xm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),r&4&&(xa(3,t,t.return),oo(3,t),xa(5,t,t.return));break;case 1:Bn(n,t),In(t),r&512&&(rn||a===null||Ri(a,a.return)),r&64&&Xi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=mi;if(Bn(n,t),In(t),r&512&&(rn||a===null||Ri(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[qa]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,r,a),f[je]=t,V(f),r=f;break t;case"link":var g=Xg("link","href",c).get(r+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=Xg("meta","content",c).get(r+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(r),Mn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[je]=t,V(f),r=f}t.stateNode=r}else Wg(c,t.type,t.stateNode);else t.stateNode=kg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Wg(c,t.type,t.stateNode):kg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&$u(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),r&512&&(rn||a===null||Ri(a,a.return)),a!==null&&r&4&&$u(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),r&512&&(rn||a===null||Ri(a,a.return)),t.flags&32){c=t.stateNode;try{On(c,"")}catch(Ft){Le(t,t.return,Ft)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,$u(t,c,a!==null?a.memoizedProps:c)),r&1024&&(nf=!0);break;case 6:if(Bn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ft){Le(t,t.return,Ft)}}break;case 3:if(Fl=null,c=mi,mi=Bl(n.containerInfo),Bn(n,t),mi=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{ir(n.containerInfo)}catch(Ft){Le(t,t.return,Ft)}nf&&(nf=!1,Wm(t));break;case 4:r=mi,mi=Bl(t.stateNode.containerInfo),Bn(n,t),In(t),mi=r;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,El(t,r)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bl=dt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,El(t,r)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Xi,ct=rn;if(Xi=J||c,rn=ct||P,Bn(n,t),rn=ct,Xi=J,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||rn||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=P.stateNode;var _t=P.memoizedProps.style,$=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ft){Le(P,P.return,Ft)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(Ft){Le(P,P.return,Ft)}}}else if(n.tag===18){if(a===null){P=n;try{var ot=P.stateNode;c?Og(ot,!0):Og(P.stateNode,!1)}catch(Ft){Le(P,P.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,El(t,a))));break;case 19:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,El(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Pm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(t);Ml(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(On(g,""),a.flags&=-33);var E=tf(t);Ml(t,E,g);break;case 3:case 4:var P=a.stateNode.containerInfo,J=tf(t);ef(t,J,P);break;default:throw Error(s(161))}}catch(ct){Le(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Wm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Wm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fm(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),os(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Om(n,n.return,a),os(n);break;case 27:vo(n.stateNode);case 26:case 5:Ri(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Yi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),oo(4,f);break;case 1:if(Yi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Le(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Mp(P[c],E)}catch(J){Le(r,r.return,J)}}a&&g&64&&Nm(f),lo(f,f.return);break;case 27:Bm(f);case 26:case 5:Yi(c,f,a),a&&r===null&&g&4&&zm(f),lo(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&g&4&&Vm(c,f);break;case 13:Yi(c,f,a),a&&g&4&&km(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),lo(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&jr(a))}function sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t))}function gi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(t,n,a,r),n=n.sibling}function qm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,r),c&2048&&oo(9,n);break;case 1:gi(t,n,a,r);break;case 3:gi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jr(t)));break;case 12:if(c&2048){gi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Le(n,n.return,P)}}else gi(t,n,a,r);break;case 31:gi(t,n,a,r);break;case 13:gi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,r):co(t,n):f._visibility&2?gi(t,n,a,r):(f._visibility|=2,qs(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(g,n);break;case 24:gi(t,n,a,r),c&2048&&sf(n.alternate,n);break;default:gi(t,n,a,r)}}function qs(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,P=r,J=g.flags;switch(g.tag){case 0:case 11:case 15:qs(f,g,E,P,c),oo(8,g);break;case 23:break;case 22:var ct=g.stateNode;g.memoizedState!==null?ct._visibility&2?qs(f,g,E,P,c):co(f,g):(ct._visibility|=2,qs(f,g,E,P,c)),c&&J&2048&&af(g.alternate,g);break;case 24:qs(f,g,E,P,c),c&&J&2048&&sf(g.alternate,g);break;default:qs(f,g,E,P,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:co(a,r),c&2048&&af(r.alternate,r);break;case 24:co(a,r),c&2048&&sf(r.alternate,r);break;default:co(a,r)}n=n.sibling}}var uo=8192;function Ys(t,n,a){if(t.subtreeFlags&uo)for(t=t.child;t!==null;)Ym(t,n,a),t=t.sibling}function Ym(t,n,a){switch(t.tag){case 26:Ys(t,n,a),t.flags&uo&&t.memoizedState!==null&&Kx(a,mi,t.memoizedState,t.memoizedProps);break;case 5:Ys(t,n,a);break;case 3:case 4:var r=mi;mi=Bl(t.stateNode.containerInfo),Ys(t,n,a),mi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=uo,uo=16777216,Ys(t,n,a),uo=r):Ys(t,n,a));break;default:Ys(t,n,a)}}function jm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Km(r,t)}jm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zm(t),t=t.sibling}function Zm(t){switch(t.tag){case 0:case 11:case 15:fo(t),t.flags&2048&&xa(9,t,t.return);break;case 3:fo(t);break;case 12:fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tl(t)):fo(t);break;default:fo(t)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];pn=r,Km(r,t)}jm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}t=t.sibling}}function Km(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=t;pn!==null;){r=pn;var c=r.sibling,f=r.return;if(Hm(r),r===a){pn=null;break t}if(c!==null){c.return=f,pn=c;break t}pn=f}}}var fx={getCacheForType:function(t){var n=Sn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(nn).controller.signal}},hx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,He=null,fe=null,me=0,Ue=0,jn=null,Sa=!1,js=!1,rf=!1,ji=0,Qe=0,ya=0,ls=0,of=0,Zn=0,Zs=0,ho=null,Fn=null,lf=!1,bl=0,Qm=0,Al=1/0,Rl=null,Ma=null,un=0,Ea=null,Ks=null,Zi=0,cf=0,uf=null,Jm=null,po=0,ff=null;function Kn(){return(Ce&2)!==0&&me!==0?me&-me:O.T!==null?_f():Or()}function $m(){if(Zn===0)if((me&536870912)===0||xe){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Zn=t}else Zn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Zn}function Hn(t,n,a){(t===He&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(Qs(t,0),Ta(t,me,Zn,!1)),gn(t,a),((Ce&2)===0||t!==He)&&(t===He&&((Ce&2)===0&&(ls|=a),Qe===4&&Ta(t,me,Zn,!1)),Ci(t))}function tg(t,n,a){if((Ce&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),c=r?mx(t,n):df(t,n,!0),f=r;do{if(c===0){js&&!r&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!dx(a)){c=df(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=ho;var P=E.current.memoizedState.isDehydrated;if(P&&(Qs(E,g).flags|=256),g=df(E,g,!1),g!==2){if(rf&&!P){E.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Qs(t,0),Ta(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ta(r,n,Zn,!Sa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=bl+300-dt(),10<c)){if(Ta(r,n,Zn,!Sa),Dt(r,0,!0)!==0)break t;Zi=n,r.timeoutHandle=Ug(eg.bind(null,r,a,Fn,Rl,lf,n,Zn,ls,Zs,Sa,f,"Throttled",-0,0),c);break t}eg(r,a,Fn,Rl,lf,n,Zn,ls,Zs,Sa,f,null,-0,0)}}break}while(!0);Ci(t)}function eg(t,n,a,r,c,f,g,E,P,J,ct,_t,$,ot){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},Ym(n,f,_t);var Ft=(f&62914560)===f?bl-dt():(f&4194048)===f?Qm-dt():0;if(Ft=Qx(_t,Ft),Ft!==null){Zi=f,t.cancelPendingCommit=Ft(cg.bind(null,t,n,f,a,r,c,g,E,P,ct,_t,null,$,ot)),Ta(t,f,g,!J);return}}cg(t,n,f,a,r,c,g,E,P)}function dx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,r){n&=~of,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Jt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Lr(t,a,n)}function Cl(){return(Ce&6)===0?(mo(0),!1):!0}function hf(){if(fe!==null){if(Ue===0)var t=fe.return;else t=fe,Ii=$a=null,Ru(t),Gs=null,Kr=0,t=fe;for(;t!==null;)Lm(t.alternate,t),t=t.return;fe=null}}function Qs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Nx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zi=0,hf(),He=t,fe=a=Pi(t.current,null),me=n,Ue=0,jn=null,Sa=!1,js=$t(t,n),rf=!1,Zs=Zn=of=ls=ya=Qe=0,Fn=ho=null,lf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Jt(r),f=1<<c;n|=t[c],r&=~f}return ji=n,Zo(),a}function ng(t,n){se=null,O.H=ao,n===Hs||n===il?(n=vp(),Ue=3):n===mu?(n=vp(),Ue=4):Ue=n===ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,fe===null&&(Qe=1,_l(t,ti(n,t.current)))}function ig(){var t=qn.current;return t===null?!0:(me&4194048)===me?ai===null:(me&62914560)===me||(me&536870912)!==0?t===ai:!1}function ag(){var t=O.H;return O.H=ao,t===null?ao:t}function sg(){var t=O.A;return O.A=fx,t}function wl(){Qe=4,Sa||(me&4194048)!==me&&qn.current!==null||(js=!0),(ya&134217727)===0&&(ls&134217727)===0||He===null||Ta(He,me,Zn,!1)}function df(t,n,a){var r=Ce;Ce|=2;var c=ag(),f=sg();(He!==t||me!==n)&&(Rl=null,Qs(t,n)),n=!1;var g=Qe;t:do try{if(Ue!==0&&fe!==null){var E=fe,P=jn;switch(Ue){case 8:hf(),g=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var J=Ue;if(Ue=0,jn=null,Js(t,E,P,J),a&&js){g=0;break t}break;default:J=Ue,Ue=0,jn=null,Js(t,E,P,J)}}px(),g=Qe;break}catch(ct){ng(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Ii=$a=null,Ce=r,O.H=c,O.A=f,fe===null&&(He=null,me=0,Zo()),g}function px(){for(;fe!==null;)rg(fe)}function mx(t,n){var a=Ce;Ce|=2;var r=ag(),c=sg();He!==t||me!==n?(Rl=null,Al=dt()+500,Qs(t,n)):js=$t(t,n);t:do try{if(Ue!==0&&fe!==null){n=fe;var f=jn;e:switch(Ue){case 1:Ue=0,jn=null,Js(t,n,f,1);break;case 2:case 9:if(gp(f)){Ue=0,jn=null,og(n);break}n=function(){Ue!==2&&Ue!==9||He!==t||(Ue=7),Ci(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:gp(f)?(Ue=0,jn=null,og(n)):(Ue=0,jn=null,Js(t,n,f,7));break;case 5:var g=null;switch(fe.tag){case 26:g=fe.memoizedState;case 5:case 27:var E=fe;if(g?qg(g):E.stateNode.complete){Ue=0,jn=null;var P=E.sibling;if(P!==null)fe=P;else{var J=E.return;J!==null?(fe=J,Dl(J)):fe=null}break e}}Ue=0,jn=null,Js(t,n,f,5);break;case 6:Ue=0,jn=null,Js(t,n,f,6);break;case 8:hf(),Qe=6;break t;default:throw Error(s(462))}}gx();break}catch(ct){ng(t,ct)}while(!0);return Ii=$a=null,O.H=r,O.A=c,Ce=a,fe!==null?0:(He=null,me=0,Zo(),Qe)}function gx(){for(;fe!==null&&!T();)rg(fe)}function rg(t){var n=Dm(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Dl(t):fe=n}function og(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Tm(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=Tm(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:Ru(n);default:Lm(a,n),n=fe=sp(n,ji),n=Dm(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Dl(t):fe=n}function Js(t,n,a,r){Ii=$a=null,Ru(n),Gs=null,Kr=0;var c=n.return;try{if(ax(t,c,n,a,me)){Qe=1,_l(t,ti(a,t.current)),fe=null;return}}catch(f){if(c!==null)throw fe=c,f;Qe=1,_l(t,ti(a,t.current)),fe=null;return}n.flags&32768?(xe||r===1?t=!0:js||(me&536870912)!==0?t=!1:(Sa=t=!0,(r===2||r===9||r===3||r===6)&&(r=qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),lg(n,t)):Dl(n)}function Dl(t){var n=t;do{if((n.flags&32768)!==0){lg(n,Sa);return}t=n.return;var a=ox(n.alternate,n,ji);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);Qe===0&&(Qe=5)}function lg(t,n){do{var a=lx(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);Qe=6,fe=null}function cg(t,n,a,r,c,f,g,E,P){t.cancelPendingCommit=null;do Ul();while(un!==0);if((Ce&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=tu,fi(t,a,f,g,E,P),t===He&&(fe=He=null,me=0),Ks=n,Ea=t,Zi=a,cf=f,uf=c,Jm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sx(wt,function(){return pg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=K.p,K.p=2,g=Ce,Ce|=4;try{cx(t,n,a)}finally{Ce=g,K.p=c,O.T=r}}un=1,ug(),fg(),hg()}}function ug(){if(un===1){un=0;var t=Ea,n=Ks,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=K.p;K.p=2;var c=Ce;Ce|=4;try{Xm(n,t);var f=bf,g=Kd(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Zd(E.ownerDocument.documentElement,E)){if(P!==null&&Zc(E)){var J=P.start,ct=P.end;if(ct===void 0&&(ct=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ct,E.value.length);else{var _t=E.ownerDocument||document,$=_t&&_t.defaultView||window;if($.getSelection){var ot=$.getSelection(),Ft=E.textContent.length,Qt=Math.min(P.start,Ft),Be=P.end===void 0?Qt:Math.min(P.end,Ft);!ot.extend&&Qt>Be&&(g=Be,Be=Qt,Qt=g);var W=jd(E,Qt),H=jd(E,Be);if(W&&H&&(ot.rangeCount!==1||ot.anchorNode!==W.node||ot.anchorOffset!==W.offset||ot.focusNode!==H.node||ot.focusOffset!==H.offset)){var Q=_t.createRange();Q.setStart(W.node,W.offset),ot.removeAllRanges(),Qt>Be?(ot.addRange(Q),ot.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),ot.addRange(Q))}}}}for(_t=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var pt=_t[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}kl=!!Tf,bf=Tf=null}finally{Ce=c,K.p=r,O.T=a}}t.current=n,un=2}}function fg(){if(un===2){un=0;var t=Ea,n=Ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=K.p;K.p=2;var c=Ce;Ce|=4;try{Fm(t,n.alternate,n)}finally{Ce=c,K.p=r,O.T=a}}un=3}}function hg(){if(un===4||un===3){un=0,et();var t=Ea,n=Ks,a=Zi,r=Jm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Ks=Ea=null,dg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ma=null),bs(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Kt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=K.p,K.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var E=r[g];f(E.value,{componentStack:E.stack})}}finally{O.T=n,K.p=c}}(Zi&3)!==0&&Ul(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===ff?po++:(po=0,ff=t):po=0,mo(0)}}function dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,jr(n)))}function Ul(){return ug(),fg(),hg(),pg()}function pg(){if(un!==5)return!1;var t=Ea,n=cf;cf=0;var a=bs(Zi),r=O.T,c=K.p;try{K.p=32>a?32:a,O.T=null,a=uf,uf=null;var f=Ea,g=Zi;if(un=0,Ks=Ea=null,Zi=0,(Ce&6)!==0)throw Error(s(331));var E=Ce;if(Ce|=4,Zm(f.current),qm(f,f.current,g,a),Ce=E,mo(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Kt,f)}catch{}return!0}finally{K.p=c,O.T=r,dg(t,n)}}function mg(t,n,a){n=ti(a,n),n=Vu(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(gn(t,2),Ci(t))}function Le(t,n,a){if(t.tag===3)mg(t,t,a);else for(;n!==null;){if(n.tag===3){mg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ma===null||!Ma.has(r))){t=ti(a,t),a=gm(2),r=ga(n,a,2),r!==null&&(_m(a,r,n,t),gn(r,2),Ci(r));break}}n=n.return}}function pf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new hx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(rf=!0,c.add(a),t=_x.bind(null,t,n,a),n.then(t,t))}function _x(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(me&a)===a&&(Qe===4||Qe===3&&(me&62914560)===me&&300>dt()-bl?(Ce&2)===0&&Qs(t,0):of|=a,Zs===me&&(Zs=0)),Ci(t)}function gg(t,n){n===0&&(n=ln()),t=Ka(t,n),t!==null&&(gn(t,n),Ci(t))}function vx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),gg(t,a)}function xx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),gg(t,a)}function Sx(t,n){return Xt(t,n)}var Ll=null,$s=null,mf=!1,Nl=!1,gf=!1,ba=0;function Ci(t){t!==$s&&t.next===null&&($s===null?Ll=$s=t:$s=$s.next=t),Nl=!0,mf||(mf=!0,Mx())}function mo(t,n){if(!gf&&Nl){gf=!0;do for(var a=!1,r=Ll;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sg(r,f))}else f=me,f=Dt(r,r===He?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||$t(r,f)||(a=!0,Sg(r,f));r=r.next}while(a);gf=!1}}function yx(){_g()}function _g(){Nl=mf=!1;var t=0;ba!==0&&Lx()&&(t=ba);for(var n=dt(),a=null,r=Ll;r!==null;){var c=r.next,f=vg(r,n);f===0?(r.next=null,a===null?Ll=c:a.next=c,c===null&&($s=a)):(a=r,(t!==0||(f&3)!==0)&&(Nl=!0)),r=c}un!==0&&un!==5||mo(t),ba!==0&&(ba=0)}function vg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Jt(f),E=1<<g,P=c[g];P===-1?((E&a)===0||(E&r)!==0)&&(c[g]=We(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=He,a=me,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&U(r),bs(a)){case 2:case 8:a=Vt;break;case 32:a=wt;break;case 268435456:a=pe;break;default:a=wt}return r=xg.bind(null,t),a=Xt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&U(r),t.callbackPriority=2,t.callbackNode=null,2}function xg(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ul()&&t.callbackNode!==a)return null;var r=me;return r=Dt(t,t===He?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(tg(t,r,n),vg(t,dt()),t.callbackNode!=null&&t.callbackNode===a?xg.bind(null,t):null)}function Sg(t,n){if(Ul())return null;tg(t,n,!0)}function Mx(){Ox(function(){(Ce&6)!==0?Xt(gt,yx):_g()})}function _f(){if(ba===0){var t=Is;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),ba=t}return ba}function yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function Mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ex(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=yg((c[_n]||null).action),g=r.submitter;g&&(n=(n=g[_n]||null)?yg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Wo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ba!==0){var P=g?Mg(c,g):new FormData(c);Pu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=g?Mg(c,g):new FormData(c),Pu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var vf=0;vf<$c.length;vf++){var xf=$c[vf],Tx=xf.toLowerCase(),bx=xf[0].toUpperCase()+xf.slice(1);pi(Tx,"on"+bx)}pi($d,"onAnimationEnd"),pi(tp,"onAnimationIteration"),pi(ep,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Gv,"onTransitionRun"),pi(Vv,"onTransitionStart"),pi(kv,"onTransitionCancel"),pi(np,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],P=E.instance,J=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ct){jo(ct)}c.currentTarget=null,f=P}else for(g=0;g<r.length;g++){if(E=r[g],P=E.instance,J=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ct){jo(ct)}c.currentTarget=null,f=P}}}}function he(t,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var r=t+"__bubble";a.has(r)||(Tg(n,t,2,!1),a.add(r))}function Sf(t,n,a){var r=0;n&&(r|=4),Tg(a,t,r,n)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function yf(t){if(!t[Ol]){t[Ol]=!0,bt.forEach(function(a){a!=="selectionchange"&&(Ax.has(a)||Sf(a,!1,t),Sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ol]||(n[Ol]=!0,Sf("selectionchange",!1,n))}}function Tg(t,n,a,r){switch($g(n)){case 2:var c=tS;break;case 8:c=eS;break;default:c=Pf}a=c.bind(null,n,a,t),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Mf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=r.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=A(E),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){r=f=g;continue t}E=E.parentNode}}r=r.return}wd(function(){var J=f,ct=Ic(a),_t=[];t:{var $=ip.get(t);if($!==void 0){var ot=Wo,Ft=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":ot=xv;break;case"focusin":Ft="focus",ot=Xc;break;case"focusout":Ft="blur",ot=Xc;break;case"beforeblur":case"afterblur":ot=Xc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Mv;break;case $d:case tp:case ep:ot=uv;break;case np:ot=Tv;break;case"scroll":case"scrollend":ot=sv;break;case"wheel":ot=Av;break;case"copy":case"cut":case"paste":ot=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Od;break;case"toggle":case"beforetoggle":ot=Cv}var Qt=(n&4)!==0,Be=!Qt&&(t==="scroll"||t==="scrollend"),W=Qt?$!==null?$+"Capture":null:$;Qt=[];for(var H=J,Q;H!==null;){var pt=H;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||W===null||(pt=Br(H,W),pt!=null&&Qt.push(_o(H,pt,Q))),Be)break;H=H.return}0<Qt.length&&($=new ot($,Ft,null,a,ct),_t.push({event:$,listeners:Qt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",$&&a!==Bc&&(Ft=a.relatedTarget||a.fromElement)&&(A(Ft)||Ft[Ni]))break t;if((ot||$)&&($=ct.window===ct?ct:($=ct.ownerDocument)?$.defaultView||$.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=J,Ft=Ft?A(Ft):null,Ft!==null&&(Be=u(Ft),Qt=Ft.tag,Ft!==Be||Qt!==5&&Qt!==27&&Qt!==6)&&(Ft=null)):(ot=null,Ft=J),ot!==Ft)){if(Qt=Ld,pt="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Od,pt="onPointerLeave",W="onPointerEnter",H="pointer"),Be=ot==null?$:nt(ot),Q=Ft==null?$:nt(Ft),$=new Qt(pt,H+"leave",ot,a,ct),$.target=Be,$.relatedTarget=Q,pt=null,A(ct)===J&&(Qt=new Qt(W,H+"enter",Ft,a,ct),Qt.target=Q,Qt.relatedTarget=Be,pt=Qt),Be=pt,ot&&Ft)e:{for(Qt=Rx,W=ot,H=Ft,Q=0,pt=W;pt;pt=Qt(pt))Q++;pt=0;for(var Yt=H;Yt;Yt=Qt(Yt))pt++;for(;0<Q-pt;)W=Qt(W),Q--;for(;0<pt-Q;)H=Qt(H),pt--;for(;Q--;){if(W===H||H!==null&&W===H.alternate){Qt=W;break e}W=Qt(W),H=Qt(H)}Qt=null}else Qt=null;ot!==null&&bg(_t,$,ot,Qt,!1),Ft!==null&&Be!==null&&bg(_t,Be,Ft,Qt,!0)}}t:{if($=J?nt(J):window,ot=$.nodeName&&$.nodeName.toLowerCase(),ot==="select"||ot==="input"&&$.type==="file")var be=Vd;else if(Hd($))if(kd)be=Iv;else{be=Pv;var Ht=zv}else ot=$.nodeName,!ot||ot.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?J&&Pc(J.elementType)&&(be=Vd):be=Bv;if(be&&(be=be(t,J))){Gd(_t,be,a,ct);break t}Ht&&Ht(t,$,J),t==="focusout"&&J&&$.type==="number"&&J.memoizedProps.value!=null&&bn($,"number",$.value)}switch(Ht=J?nt(J):window,t){case"focusin":(Hd(Ht)||Ht.contentEditable==="true")&&(Ds=Ht,Kc=J,Wr=null);break;case"focusout":Wr=Kc=Ds=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Qd(_t,a,ct);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":Qd(_t,a,ct)}var re;if(qc)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else ws?Id(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(zd&&a.locale!=="ko"&&(ws||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ws&&(re=Dd()):(ca=ct,Gc="value"in ca?ca.value:ca.textContent,ws=!0)),Ht=zl(J,ge),0<Ht.length&&(ge=new Nd(ge,t,null,a,ct),_t.push({event:ge,listeners:Ht}),re?ge.data=re:(re=Fd(a),re!==null&&(ge.data=re)))),(re=Dv?Uv(t,a):Lv(t,a))&&(ge=zl(J,"onBeforeInput"),0<ge.length&&(Ht=new Nd("onBeforeInput","beforeinput",null,a,ct),_t.push({event:Ht,listeners:ge}),Ht.data=re)),Ex(_t,t,J,a,ct)}Eg(_t,n)})}function _o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Br(t,a),c!=null&&r.unshift(_o(t,c,f)),c=Br(t,n),c!=null&&r.push(_o(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Rx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bg(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var E=a,P=E.alternate,J=E.stateNode;if(E=E.tag,P!==null&&P===r)break;E!==5&&E!==26&&E!==27||J===null||(P=J,c?(J=Br(a,f),J!=null&&g.unshift(_o(a,J,P))):c||(J=Br(a,f),J!=null&&g.push(_o(a,J,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Cx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function Ag(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(wx,"")}function Rg(t,n){return n=Ag(n),Ag(t)===n}function Pe(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||On(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&On(t,""+r);break;case"className":Ve(t,"class",r);break;case"tabIndex":Ve(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(t,a,r);break;case"style":Rd(t,r,f);break;case"data":if(n!=="object"){Ve(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Go(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",c.name,c,null),Pe(t,n,"formEncType",c.formEncType,c,null),Pe(t,n,"formMethod",c.formMethod,c,null),Pe(t,n,"formTarget",c.formTarget,c,null)):(Pe(t,n,"encType",c.encType,c,null),Pe(t,n,"method",c.method,c,null),Pe(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Go(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Oi);break;case"onScroll":r!=null&&he("scroll",t);break;case"onScrollEnd":r!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":he("beforetoggle",t),he("toggle",t),ve(t,"popover",r);break;case"xlinkActuate":Te(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Te(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Te(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Te(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Te(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Te(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Te(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Te(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Te(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ve(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=iv.get(a)||a,ve(t,a,r))}}function Ef(t,n,a,r,c,f){switch(a){case"style":Rd(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?On(t,r):(typeof r=="number"||typeof r=="bigint")&&On(t,""+r);break;case"onScroll":r!=null&&he("scroll",t);break;case"onScrollEnd":r!=null&&he("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Oi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ve(t,a,r)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(t,n,f,g,a,null)}}c&&Pe(t,n,"srcSet",a.srcSet,a,null),r&&Pe(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var E=f=g=c=null,P=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":g=ct;break;case"checked":P=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":E=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Pe(t,n,r,ct,a,null)}}Dn(t,f,E,P,J,g,c,!1);return;case"select":he("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Pe(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!r,n!=null?Ze(t,!!r,n,!1):a!=null&&Ze(t,!!r,a,!0);return;case"textarea":he("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Pe(t,n,g,E,a,null)}As(t,r,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(t,n,P,r,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(r=0;r<go.length;r++)he(go[r],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(t,n,J,r,a,null)}return;default:if(Pc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Ef(t,n,ct,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Pe(t,n,E,r,a,null))}function Dx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,P=null,J=null,ct=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":P=_t;default:r.hasOwnProperty(ot)||Pe(t,n,ot,null,r,_t)}}for(var $ in r){var ot=r[$];if(_t=a[$],r.hasOwnProperty($)&&(ot!=null||_t!=null))switch($){case"type":f=ot;break;case"name":c=ot;break;case"checked":J=ot;break;case"defaultChecked":ct=ot;break;case"value":g=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==_t&&Pe(t,n,$,ot,r,_t)}}Oe(t,g,E,P,J,ct,f,c);return;case"select":ot=g=E=$=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ot=P;default:r.hasOwnProperty(f)||Pe(t,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==P&&Pe(t,n,c,f,r,P)}n=E,a=g,r=ot,$!=null?Ze(t,!!a,$,!1):!!r!=!!a&&(n!=null?Ze(t,!!a,n,!0):Ze(t,!!a,a?[]:"",!1));return;case"textarea":ot=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,n,E,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":$=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Pe(t,n,g,c,r,f)}vn(t,$,ot);return;case"option":for(var Ft in a)if($=a[Ft],a.hasOwnProperty(Ft)&&$!=null&&!r.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Pe(t,n,Ft,null,r,$)}for(P in r)if($=r[P],ot=a[P],r.hasOwnProperty(P)&&$!==ot&&($!=null||ot!=null))switch(P){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Pe(t,n,P,$,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)$=a[Qt],a.hasOwnProperty(Qt)&&$!=null&&!r.hasOwnProperty(Qt)&&Pe(t,n,Qt,null,r,$);for(J in r)if($=r[J],ot=a[J],r.hasOwnProperty(J)&&$!==ot&&($!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Pe(t,n,J,$,r,ot)}return;default:if(Pc(n)){for(var Be in a)$=a[Be],a.hasOwnProperty(Be)&&$!==void 0&&!r.hasOwnProperty(Be)&&Ef(t,n,Be,void 0,r,$);for(ct in r)$=r[ct],ot=a[ct],!r.hasOwnProperty(ct)||$===ot||$===void 0&&ot===void 0||Ef(t,n,ct,$,r,ot);return}}for(var W in a)$=a[W],a.hasOwnProperty(W)&&$!=null&&!r.hasOwnProperty(W)&&Pe(t,n,W,null,r,$);for(_t in r)$=r[_t],ot=a[_t],!r.hasOwnProperty(_t)||$===ot||$==null&&ot==null||Pe(t,n,_t,$,r,ot)}function Cg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ux(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&Cg(g)){for(g=0,E=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],J=P.startTime;if(J>E)break;var ct=P.transferSize,_t=P.initiatorType;ct&&Cg(_t)&&(P=P.responseEnd,g+=ct*(P<E?1:(E-J)/(P-J)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Tf=null,bf=null;function Pl(t){return t.nodeType===9?t:t.ownerDocument}function wg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Af(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function Lx(){var t=window.event;return t&&t.type==="popstate"?t===Rf?!1:(Rf=t,!0):(Rf=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(zx)}:Ug;function zx(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function Ng(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),ir(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[qa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&vo(t.ownerDocument.body);a=c}while(a);ir(n)}function Og(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Cf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Px(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function Bx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function zg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$?"||t.data==="$~"}function Df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ix(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Uf=null;function Pg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Bg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ig(t,n,a){switch(n=Pl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pr(t)}var ri=new Map,Fg=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=K.d;K.d={f:Fx,r:Hx,D:Gx,C:Vx,L:kx,m:Xx,X:qx,S:Wx,M:Yx};function Fx(){var t=Ki.f(),n=Cl();return t||n}function Hx(t){var n=X(t);n!==null&&n.tag===5&&n.type==="form"?nm(n):Ki.r(t)}var tr=typeof document>"u"?null:document;function Hg(t,n,a){var r=tr;if(r&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fg.has(c)||(Fg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Mn(n,"link",t),V(n),r.head.appendChild(n)))}}function Gx(t){Ki.D(t),Hg("dns-prefetch",t,null)}function Vx(t,n){Ki.C(t,n),Hg("preconnect",t,n)}function kx(t,n,a){Ki.L(t,n,a);var r=tr;if(r&&t&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(t)+'"]';var f=c;switch(n){case"style":f=er(t);break;case"script":f=nr(t)}ri.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(xo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),Mn(n,"link",t),V(n),r.head.appendChild(n)))}}function Xx(t,n){Ki.m(t,n);var a=tr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(r)+'"][href="'+dn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=nr(t)}if(!ri.has(f)&&(t=x({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),Mn(r,"link",t),V(r),a.head.appendChild(r)}}}function Wx(t,n,a){Ki.S(t,n,a);var r=tr;if(r&&t){var c=it(r).hoistableStyles,f=er(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(xo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Lf(t,a);var P=g=r.createElement("link");V(P),Mn(P,"link",t),P._p=new Promise(function(J,ct){P.onload=J,P.onerror=ct}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Il(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function qx(t,n){Ki.X(t,n);var a=tr;if(a&&t){var r=it(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0},n),(n=ri.get(c))&&Nf(t,n),f=a.createElement("script"),V(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Yx(t,n){Ki.M(t,n);var a=tr;if(a&&t){var r=it(a).hoistableScripts,c=nr(t),f=r.get(c);f||(f=a.querySelector(So(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ri.get(c))&&Nf(t,n),f=a.createElement("script"),V(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Gg(t,n,a,r){var c=(c=Mt.current)?Bl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=er(a.href),a=it(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=er(a.href);var f=it(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(xo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||jx(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=nr(a),a=it(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function er(t){return'href="'+dn(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Vg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function jx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Mn(n,"link",a),V(n),t.head.appendChild(n))}function nr(t){return'[src="'+dn(t)+'"]'}function So(t){return"script[async]"+t}function kg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(r)return n.instance=r,V(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),V(r),Mn(r,"style",c),Il(r,a.precedence,t),n.instance=r;case"stylesheet":c=er(a.href);var f=t.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,V(f),f;r=Vg(a),(c=ri.get(c))&&Lf(r,c),f=(t.ownerDocument||t).createElement("link"),V(f);var g=f;return g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),Mn(f,"link",r),n.state.loading|=4,Il(f,a.precedence,t),n.instance=f;case"script":return f=nr(a.src),(c=t.querySelector(So(f)))?(n.instance=c,V(c),c):(r=a,(c=ri.get(f))&&(r=x({},a),Nf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),V(c),Mn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Il(r,a.precedence,t));return n.instance}function Il(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fl=null;function Xg(t,n,a){if(Fl===null){var r=new Map,c=Fl=new Map;c.set(a,r)}else c=Fl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[qa]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(f):r.set(g,[f])}}return r}function Wg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Zx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Kx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=er(r.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,V(f);return}f=n.ownerDocument||n,r=Vg(r),(c=ri.get(c))&&Lf(r,c),f=f.createElement("link"),V(f);var g=f;g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),Mn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function Qx(t,n){return t.stylesheets&&t.count===0&&Vl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Of===0&&(Of=62500*Ux());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Of?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Hl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gl=null;function Vl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gl=new Map,n.forEach(Jx,t),Gl=null,Hl.call(t))}function Jx(t,n){if(!(n.state.loading&4)){var a=Gl.get(t);if(a)var r=a.get(null);else{a=new Map,Gl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Hl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function $x(t,n,a,r,c,f,g,E,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Yg(t,n,a,r,c,f,g,E,P,J,ct,_t){return t=new $x(t,n,a,g,P,J,ct,_t,E),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=hu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},gu(f),t}function jg(t){return t?(t=Ns,t):Ns}function Zg(t,n,a,r,c,f){c=jg(c),r.context===null?r.context=c:r.pendingContext=c,r=ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(t,r,n),a!==null&&(Hn(a,t,n),Jr(a,t,n))}function Kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function zf(t,n){Kg(t,n),(t=t.alternate)&&Kg(t,n)}function Qg(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Hn(n,t,67108864),zf(t,67108864)}}function Jg(t){if(t.tag===13||t.tag===31){var n=Kn();n=Xa(n);var a=Ka(t,n);a!==null&&Hn(a,t,n),zf(t,n)}}var kl=!0;function tS(t,n,a,r){var c=O.T;O.T=null;var f=K.p;try{K.p=2,Pf(t,n,a,r)}finally{K.p=f,O.T=c}}function eS(t,n,a,r){var c=O.T;O.T=null;var f=K.p;try{K.p=8,Pf(t,n,a,r)}finally{K.p=f,O.T=c}}function Pf(t,n,a,r){if(kl){var c=Bf(r);if(c===null)Mf(t,n,r,Xl,a),t_(t,r);else if(iS(c,t,n,a,r))r.stopPropagation();else if(t_(t,r),n&4&&-1<nS.indexOf(t)){for(;c!==null;){var f=X(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Ct(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var P=1<<31-Jt(g);E.entanglements[1]|=P,g&=~P}Ci(f),(Ce&6)===0&&(Al=dt()+500,mo(0))}}break;case 31:case 13:E=Ka(f,2),E!==null&&Hn(E,f,2),Cl(),zf(f,2)}if(f=Bf(r),f===null&&Mf(t,n,r,Xl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Mf(t,n,r,null,a)}}function Bf(t){return t=Ic(t),If(t)}var Xl=null;function If(t){if(Xl=null,t=A(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xl=t,null}function $g(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case gt:return 2;case Vt:return 8;case wt:case Bt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Ff=!1,Ra=null,Ca=null,wa=null,Mo=new Map,Eo=new Map,Da=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=X(n),n!==null&&Qg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function iS(t,n,a,r,c){switch(n){case"focusin":return Ra=To(Ra,t,n,a,r,c),!0;case"dragenter":return Ca=To(Ca,t,n,a,r,c),!0;case"mouseover":return wa=To(wa,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,To(Mo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,t,n,a,r,c)),!0}return!1}function e_(t){var n=A(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Wa(t.priority,function(){Jg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Wa(t.priority,function(){Jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Bf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Bc=r,a.target.dispatchEvent(r),Bc=null}else return n=X(a),n!==null&&Qg(n),t.blockedOn=a,!1;n.shift()}return!0}function n_(t,n,a){Wl(t)&&a.delete(n)}function aS(){Ff=!1,Ra!==null&&Wl(Ra)&&(Ra=null),Ca!==null&&Wl(Ca)&&(Ca=null),wa!==null&&Wl(wa)&&(wa=null),Mo.forEach(n_),Eo.forEach(n_)}function ql(t,n){t.blockedOn===n&&(t.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,aS)))}var Yl=null;function i_(t){Yl!==t&&(Yl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===t&&(Yl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(If(r||a)===null)continue;break}var f=X(a);f!==null&&(t.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function ir(t){function n(P){return ql(P,t)}Ra!==null&&ql(Ra,t),Ca!==null&&ql(Ca,t),wa!==null&&ql(wa,t),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Da.length;a++){var r=Da[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[_n]||null;if(typeof f=="function")g||i_(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)E=g.formAction;else if(If(c)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),i_(a)}}}function a_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(t){this._internalRoot=t}jl.prototype.render=Hf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Kn();Zg(a,r,t,n,null,null)},jl.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Zg(t.current,2,null,t,null,null),Cl(),n[Ni]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Or();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&e_(t)}};var s_=e.version;if(s_!=="19.2.8")throw Error(s(527,s_,"19.2.8"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var sS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Kt=Zl.inject(sS),kt=Zl}catch{}}return Ao.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=hm,f=dm,g=pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Yg(t,1,!1,null,null,a,r,null,c,f,g,a_),t[Ni]=n.current,yf(t),new Hf(n)},Ao.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=hm,g=dm,E=pm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Yg(t,1,!0,n,a??null,r,c,P,f,g,E,a_),n.context=jg(null),a=n.current,r=Kn(),r=Xa(r),c=ma(r),c.callback=null,ga(a,c,r),a=r,n.current.lanes=a,gn(n,a),Ci(n),t[Ni]=n.current,yf(t),new jl(n)},Ao.version="19.2.8",Ao}var m_;function gS(){if(m_)return kf.exports;m_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kf.exports=mS(),kf.exports}var _S=gS();const vS=x0(_S);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gd="174",xS=0,g_=1,SS=2,S0=1,yS=2,na=3,Va=0,Vn=1,ia=2,Fa=0,xr=1,__=2,v_=3,x_=4,MS=5,vs=100,ES=101,TS=102,bS=103,AS=104,RS=200,CS=201,wS=202,DS=203,Ch=204,wh=205,US=206,LS=207,NS=208,OS=209,zS=210,PS=211,BS=212,IS=213,FS=214,Dh=0,Uh=1,Lh=2,Mr=3,Nh=4,Oh=5,zh=6,Ph=7,y0=0,HS=1,GS=2,Ha=0,VS=1,kS=2,XS=3,WS=4,qS=5,YS=6,jS=7,M0=300,Er=301,Tr=302,Bh=303,Ih=304,Dc=306,Fh=1e3,Ss=1001,Hh=1002,Mi=1003,ZS=1004,Kl=1005,Di=1006,Yf=1007,ys=1008,oa=1009,E0=1010,T0=1011,zo=1012,_d=1013,Ms=1014,aa=1015,Po=1016,vd=1017,xd=1018,br=1020,b0=35902,A0=1021,R0=1022,yi=1023,C0=1024,w0=1025,Sr=1026,Ar=1027,D0=1028,Sd=1029,U0=1030,yd=1031,Md=1033,xc=33776,Sc=33777,yc=33778,Mc=33779,Gh=35840,Vh=35841,kh=35842,Xh=35843,Wh=36196,qh=37492,Yh=37496,jh=37808,Zh=37809,Kh=37810,Qh=37811,Jh=37812,$h=37813,td=37814,ed=37815,nd=37816,id=37817,ad=37818,sd=37819,rd=37820,od=37821,Ec=36492,ld=36494,cd=36495,L0=36283,ud=36284,fd=36285,hd=36286,KS=3200,QS=3201,N0=0,JS=1,Ia="",li="srgb",Rr="srgb-linear",bc="linear",Ie="srgb",ar=7680,S_=519,$S=512,ty=513,ey=514,O0=515,ny=516,iy=517,ay=518,sy=519,y_=35044,M_="300 es",sa=2e3,Ac=2001;class wr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,dd=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function ry(o,e){return(o%e+e)%e}function Zf(o,e,i){return(1-i)*o+i*e}function Ro(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,i=0){we.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,s,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],x=s[7],S=s[2],M=s[5],b=s[8],C=l[0],y=l[3],_=l[6],B=l[1],N=l[4],D=l[7],Z=l[2],G=l[5],z=l[8];return u[0]=h*C+d*B+m*Z,u[3]=h*y+d*N+m*G,u[6]=h*_+d*D+m*z,u[1]=p*C+v*B+x*Z,u[4]=p*y+v*N+x*G,u[7]=p*_+v*D+x*z,u[2]=S*C+M*B+b*Z,u[5]=S*y+M*N+b*G,u[8]=S*_+M*D+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*u*v+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*h-d*p,S=d*m-v*u,M=p*u-h*m,b=i*x+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=x*C,e[1]=(l*p-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Kf.makeScale(e,i)),this}rotate(e){return this.premultiply(Kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new oe;function z0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oy(){const o=Rc("canvas");return o.style.display="block",o}const E_={};function ms(o){o in E_||(E_[o]=!0,console.warn(o))}function ly(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function cy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const T_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const o={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ie&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=yr(l.r),l.g=yr(l.g),l.b=yr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Rr]:{primaries:e,whitePoint:s,transfer:bc,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:s,transfer:Ie,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),o}const Re=fy();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class hy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Rc("canvas")),sr.width=e.width,sr.height=e.height;const s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ra(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ra(i[s]/255)*255):i[s]=ra(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dy=0;class Ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Qf(l[h].image)):u.push(Qf(l[h]))}else u=Qf(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let py=0;class kn extends wr{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=Ss,l=Ss,u=Di,h=ys,d=yi,m=oa,p=kn.DEFAULT_ANISOTROPY,v=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Bo(),this.name="",this.source=new Ed(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=M0;kn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],v=m[4],x=m[8],S=m[1],M=m[5],b=m[9],C=m[2],y=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(x-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(M+1)/2,Z=(_+1)/2,G=(v+S)/4,z=(x+C)/4,j=(b+y)/4;return N>D&&N>Z?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=G/s,u=z/s):D>Z?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=j/l):Z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(Z),s=z/u,l=j/u),this.set(s,l,u,i),this}let B=Math.sqrt((y-b)*(y-b)+(x-C)*(x-C)+(S-v)*(S-v));return Math.abs(B)<.001&&(B=1),this.x=(y-b)/B,this.y=(x-C)/B,this.z=(S-v)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class my extends wr{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new kn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ed(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends my{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class P0 extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],C=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(x!==C||m!==S||p!==M||v!==b){let y=1-d;const _=m*S+p*M+v*b+x*C,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const Z=Math.sqrt(N),G=Math.atan2(Z,_*B);y=Math.sin(y*G)/Z,d=Math.sin(d*G)/Z}const D=d*B;if(m=m*y+S*D,p=p*y+M*D,v=v*y+b*D,x=x*y+C*D,y===1-d){const Z=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=Z,p*=Z,v*=Z,x*=Z}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+v*x+m*M-p*S,e[i+1]=m*b+v*S+p*x-d*M,e[i+2]=p*b+v*M+d*S-m*x,e[i+3]=v*b-d*x-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),x=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*v*x+p*M*b,this._y=p*M*x-S*v*b,this._z=p*v*b+S*M*x,this._w=p*v*x-S*M*b;break;case"YXZ":this._x=S*v*x+p*M*b,this._y=p*M*x-S*v*b,this._z=p*v*b-S*M*x,this._w=p*v*x+S*M*b;break;case"ZXY":this._x=S*v*x-p*M*b,this._y=p*M*x+S*v*b,this._z=p*v*b+S*M*x,this._w=p*v*x-S*M*b;break;case"ZYX":this._x=S*v*x-p*M*b,this._y=p*M*x+S*v*b,this._z=p*v*b-S*M*x,this._w=p*v*x+S*M*b;break;case"YZX":this._x=S*v*x+p*M*b,this._y=p*M*x+S*v*b,this._z=p*v*b-S*M*x,this._w=p*v*x-S*M*b;break;case"XZY":this._x=S*v*x-p*M*b,this._y=p*M*x-S*v*b,this._z=p*v*b+S*M*x,this._w=p*v*x+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],S=s+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-s*p,this._z=u*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),x=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=h*x+this._w*S,this._x=s*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,s=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(A_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-u*l),x=2*(u*s-h*i);return this.x=i+m*p+h*x-d*v,this.y=s+m*v+d*p-u*x,this.z=l+m*x+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new st,A_=new Io;class Fo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,_i):_i.fromBufferAttribute(u,h),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ql.copy(s.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Jl.subVectors(this.max,Co),rr.subVectors(e.a,Co),or.subVectors(e.b,Co),lr.subVectors(e.c,Co),La.subVectors(or,rr),Na.subVectors(lr,or),cs.subVectors(rr,lr);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-cs.z,cs.y,La.z,0,-La.x,Na.z,0,-Na.x,cs.z,0,-cs.x,-La.y,La.x,0,-Na.y,Na.x,0,-cs.y,cs.x,0];return!$f(i,rr,or,lr,Jl)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,rr,or,lr,Jl))?!1:($l.crossVectors(La,Na),i=[$l.x,$l.y,$l.z],$f(i,rr,or,lr,Jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new st,new st,new st,new st,new st,new st,new st,new st],_i=new st,Ql=new Fo,rr=new st,or=new st,lr=new st,La=new st,Na=new st,cs=new st,Co=new st,Jl=new st,$l=new st,us=new st;function $f(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){us.fromArray(o,u);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),v=s.dot(us);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const _y=new Fo,wo=new st,th=new st;class Uc{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):_y.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(th)),this.expandByPoint(wo.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new st,eh=new st,tc=new st,Oa=new st,nh=new st,ec=new st,ih=new st;class B0{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){eh.copy(e).add(i).multiplyScalar(.5),tc.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(eh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(tc),d=Oa.dot(this.direction),m=-Oa.dot(tc),p=Oa.lengthSq(),v=Math.abs(1-h*h);let x,S,M,b;if(v>0)if(x=h*m-d,S=h*d-m,b=u*v,x>=0)if(S>=-b)if(S<=b){const C=1/v;x*=C,S*=C,M=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S<=-b?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=b?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(eh).addScaledVector(tc,S),M}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const s=Ji.dot(this.direction),l=Ji.dot(Ji)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,s,l,u){nh.subVectors(i,e),ec.subVectors(s,e),ih.crossVectors(nh,ec);let h=this.direction.dot(ih),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,e);const m=d*this.direction.dot(ec.crossVectors(Oa,ec));if(m<0)return null;const p=d*this.direction.dot(nh.cross(Oa));if(p<0||m+p>h)return null;const v=-d*Oa.dot(ih);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,i,s,l,u,h,d,m,p,v,x,S,M,b,C,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,v,x,S,M,b,C,y)}set(e,i,s,l,u,h,d,m,p,v,x,S,M,b,C,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=x,_[14]=S,_[3]=M,_[7]=b,_[11]=C,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/cr.setFromMatrixColumn(e,0).length(),u=1/cr.setFromMatrixColumn(e,1).length(),h=1/cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*v,M=h*x,b=d*v,C=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,M=m*x,b=p*v,C=p*x;i[0]=S+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,M=m*x,b=p*v,C=p*x;i[0]=S-C*d,i[4]=-h*x,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,M=h*x,b=d*v,C=d*x;i[0]=m*v,i[4]=b*p-M,i[8]=S*p+C,i[1]=m*x,i[5]=C*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=C-S*x,i[8]=b*x+M,i[1]=x,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*x+b,i[10]=S-C*x}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=S*x+C,i[5]=h*v,i[9]=M*x-b,i[2]=b*x-M,i[6]=d*v,i[10]=C*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,xy)}lookAt(e,i,s){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),za.crossVectors(s,Qn),za.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),za.crossVectors(s,Qn)),za.normalize(),nc.crossVectors(Qn,za),l[0]=za.x,l[4]=nc.x,l[8]=Qn.x,l[1]=za.y,l[5]=nc.y,l[9]=Qn.y,l[2]=za.z,l[6]=nc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],x=s[5],S=s[9],M=s[13],b=s[2],C=s[6],y=s[10],_=s[14],B=s[3],N=s[7],D=s[11],Z=s[15],G=l[0],z=l[4],j=l[8],w=l[12],R=l[1],F=l[5],rt=l[9],at=l[13],ht=l[2],mt=l[6],O=l[10],K=l[14],Y=l[3],yt=l[7],Tt=l[11],L=l[15];return u[0]=h*G+d*R+m*ht+p*Y,u[4]=h*z+d*F+m*mt+p*yt,u[8]=h*j+d*rt+m*O+p*Tt,u[12]=h*w+d*at+m*K+p*L,u[1]=v*G+x*R+S*ht+M*Y,u[5]=v*z+x*F+S*mt+M*yt,u[9]=v*j+x*rt+S*O+M*Tt,u[13]=v*w+x*at+S*K+M*L,u[2]=b*G+C*R+y*ht+_*Y,u[6]=b*z+C*F+y*mt+_*yt,u[10]=b*j+C*rt+y*O+_*Tt,u[14]=b*w+C*at+y*K+_*L,u[3]=B*G+N*R+D*ht+Z*Y,u[7]=B*z+N*F+D*mt+Z*yt,u[11]=B*j+N*rt+D*O+Z*Tt,u[15]=B*w+N*at+D*K+Z*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],S=e[10],M=e[14],b=e[3],C=e[7],y=e[11],_=e[15];return b*(+u*m*x-l*p*x-u*d*S+s*p*S+l*d*M-s*m*M)+C*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*v-u*m*v)+y*(+i*p*x-i*d*M-u*h*x+s*h*M+u*d*v-s*p*v)+_*(-l*d*v-i*m*x+i*d*S+l*h*x-s*h*S+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],S=e[10],M=e[11],b=e[12],C=e[13],y=e[14],_=e[15],B=x*y*p-C*S*p+C*m*M-d*y*M-x*m*_+d*S*_,N=b*S*p-v*y*p-b*m*M+h*y*M+v*m*_-h*S*_,D=v*C*p-b*x*p+b*d*M-h*C*M-v*d*_+h*x*_,Z=b*x*m-v*C*m-b*d*S+h*C*S+v*d*y-h*x*y,G=i*B+s*N+l*D+u*Z;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=B*z,e[1]=(C*S*u-x*y*u-C*l*M+s*y*M+x*l*_-s*S*_)*z,e[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*_+s*m*_)*z,e[3]=(x*m*u-d*S*u-x*l*p+s*S*p+d*l*M-s*m*M)*z,e[4]=N*z,e[5]=(v*y*u-b*S*u+b*l*M-i*y*M-v*l*_+i*S*_)*z,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*_-i*m*_)*z,e[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*M+i*m*M)*z,e[8]=D*z,e[9]=(b*x*u-v*C*u-b*s*M+i*C*M+v*s*_-i*x*_)*z,e[10]=(h*C*u-b*d*u+b*s*p-i*C*p-h*s*_+i*d*_)*z,e[11]=(v*d*u-h*x*u-v*s*p+i*x*p+h*s*M-i*d*M)*z,e[12]=Z*z,e[13]=(v*C*l-b*x*l+b*s*S-i*C*S-v*s*y+i*x*y)*z,e[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*y-i*d*y)*z,e[15]=(h*x*l-v*d*l+v*s*m-i*x*m-h*s*S+i*d*S)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,x=d+d,S=u*p,M=u*v,b=u*x,C=h*v,y=h*x,_=d*x,B=m*p,N=m*v,D=m*x,Z=s.x,G=s.y,z=s.z;return l[0]=(1-(C+_))*Z,l[1]=(M+D)*Z,l[2]=(b-N)*Z,l[3]=0,l[4]=(M-D)*G,l[5]=(1-(S+_))*G,l[6]=(y+B)*G,l[7]=0,l[8]=(b+N)*z,l[9]=(y-B)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const h=cr.set(l[4],l[5],l[6]).length(),d=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const p=1/u,v=1/h,x=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=v,vi.elements[5]*=v,vi.elements[6]*=v,vi.elements[8]*=x,vi.elements[9]*=x,vi.elements[10]*=x,i.setFromRotationMatrix(vi),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=sa){const m=this.elements,p=2*u/(i-e),v=2*u/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let M,b;if(d===sa)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Ac)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=sa){const m=this.elements,p=1/(i-e),v=1/(s-l),x=1/(h-u),S=(i+e)*p,M=(s+l)*v;let b,C;if(d===sa)b=(h+u)*x,C=-2*x;else if(d===Ac)b=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const cr=new st,vi=new Ye,vy=new st(0,0,0),xy=new st(1,1,1),za=new st,nc=new st,Qn=new st,R_=new Ye,C_=new Io;class Li{constructor(e=0,i=0,s=0,l=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return R_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return C_.setFromEuler(this),this.setFromQuaternion(C_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";let I0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sy=0;const w_=new st,ur=new Io,$i=new Ye,ic=new st,Do=new st,yy=new st,My=new Io,D_=new st(1,0,0),U_=new st(0,1,0),L_=new st(0,0,1),N_={type:"added"},Ey={type:"removed"},fr={type:"childadded",child:null},ah={type:"childremoved",child:null};class En extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new st,i=new Li,s=new Io,l=new st(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new oe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(D_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(L_,e)}translateOnAxis(e,i){return w_.copy(e).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(D_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(L_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ic.copy(e):ic.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Do,ic,this.up):$i.lookAt(ic,Do,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ur.setFromRotationMatrix($i),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N_),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ey),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N_),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),x=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new st(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new st,ta=new st,sh=new st,ea=new st,hr=new st,dr=new st,O_=new st,rh=new st,oh=new st,lh=new st,ch=new $e,uh=new $e,fh=new $e;class Si{constructor(e=new st,i=new st,s=new st){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),xi.subVectors(e,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){xi.subVectors(l,i),ta.subVectors(s,i),sh.subVectors(e,i);const h=xi.dot(xi),d=xi.dot(ta),m=xi.dot(sh),p=ta.dot(ta),v=ta.dot(sh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-d*v)*S,b=(h*v-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(d,ea.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(e,i),uh.fromBufferAttribute(e,s),fh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ch,u.x),h.addScaledVector(uh,u.y),h.addScaledVector(fh,u.z),h}static isFrontFacing(e,i,s,l){return xi.subVectors(s,i),ta.subVectors(e,i),xi.cross(ta).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),xi.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Si.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;hr.subVectors(l,s),dr.subVectors(u,s),rh.subVectors(e,s);const m=hr.dot(rh),p=dr.dot(rh);if(m<=0&&p<=0)return i.copy(s);oh.subVectors(e,l);const v=hr.dot(oh),x=dr.dot(oh);if(v>=0&&x<=v)return i.copy(l);const S=m*x-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(hr,h);lh.subVectors(e,u);const M=hr.dot(lh),b=dr.dot(lh);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(dr,d);const y=v*b-M*x;if(y<=0&&x-v>=0&&M-b>=0)return O_.subVectors(u,l),d=(x-v)/(x-v+(M-b)),i.copy(l).addScaledVector(O_,d);const _=1/(y+C+S);return h=C*_,d=S*_,i.copy(s).addScaledVector(hr,h).addScaledVector(dr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},ac={h:0,s:0,l:0};function hh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Re.workingColorSpace){if(e=ry(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=hh(h,u,e+1/3),this.g=hh(h,u,e),this.b=hh(h,u,e-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(e,i=li){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const s=F0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Re.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Se(Cn.r*255,0,255))*65536+Math.round(Se(Cn.g*255,0,255))*256+Math.round(Se(Cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=v<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=li){Re.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(ac);const s=Zf(Pa.h,ac.h,i),l=Zf(Pa.s,ac.s,i),u=Zf(Pa.l,ac.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ye;ye.NAMES=F0;let Ty=0;class Dr extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=xr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(s.blending=this.blending),this.side!==Va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ch&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class H0 extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new st,sc=new we;let by=0;class Ui{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:by++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=y_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(e),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y_&&(e.usage=this.usage),e}}class G0 extends Ui{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class V0 extends Ui{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ei extends Ui{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Ay=0;const oi=new Ye,dh=new En,pr=new st,Jn=new Fo,Uo=new Fo,mn=new st;class la extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z0(e)?V0:G0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,s){return oi.makeTranslation(e,i,s),this.applyMatrix4(oi),this}scale(e,i,s){return oi.makeScale(e,i,s),this.applyMatrix4(oi),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ei(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const s=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Jn.min,Uo.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,Uo.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(Uo.min),Jn.expandByPoint(Uo.max))}Jn.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)mn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)mn.fromBufferAttribute(d,p),m&&(pr.fromBufferAttribute(e,p),mn.add(pr)),l=Math.max(l,s.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new st,m[j]=new st;const p=new st,v=new st,x=new st,S=new we,M=new we,b=new we,C=new st,y=new st;function _(j,w,R){p.fromBufferAttribute(s,j),v.fromBufferAttribute(s,w),x.fromBufferAttribute(s,R),S.fromBufferAttribute(u,j),M.fromBufferAttribute(u,w),b.fromBufferAttribute(u,R),v.sub(p),x.sub(p),M.sub(S),b.sub(S);const F=1/(M.x*b.y-b.x*M.y);isFinite(F)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(F),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(F),d[j].add(C),d[w].add(C),d[R].add(C),m[j].add(y),m[w].add(y),m[R].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let j=0,w=B.length;j<w;++j){const R=B[j],F=R.start,rt=R.count;for(let at=F,ht=F+rt;at<ht;at+=3)_(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const N=new st,D=new st,Z=new st,G=new st;function z(j){Z.fromBufferAttribute(l,j),G.copy(Z);const w=d[j];N.copy(w),N.sub(Z.multiplyScalar(Z.dot(w))).normalize(),D.crossVectors(G,w);const F=D.dot(m[j])<0?-1:1;h.setXYZW(j,N.x,N.y,N.z,F)}for(let j=0,w=B.length;j<w;++j){const R=B[j],F=R.start,rt=R.count;for(let at=F,ht=F+rt;at<ht;at+=3)z(e.getX(at+0)),z(e.getX(at+1)),z(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,v=new st,x=new st;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,S=new p.constructor(m.length*v);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let _=0;_<v;_++)S[b++]=p[M++]}return new Ui(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new la,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,x=p.length;v<x;v++){const S=p[v],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],x=u[p];for(let S=0,M=x.length;S<M;S++)v.push(x[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z_=new Ye,fs=new B0,rc=new Uc,P_=new st,oc=new st,lc=new st,cc=new st,ph=new st,uc=new st,B_=new st,fc=new st;class ui extends En{constructor(e=new la,i=new H0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){uc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],x=u[m];v!==0&&(ph.fromBufferAttribute(x,e),h?uc.addScaledVector(ph,v):uc.addScaledVector(ph.sub(i),v))}i.add(uc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(rc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(rc,P_)===null||fs.origin.distanceToSquared(P_)>(e.far-e.near)**2))&&(z_.copy(u).invert(),fs.copy(e.ray).applyMatrix4(z_),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,Z=N;D<Z;D+=3){const G=d.getX(D),z=d.getX(D+1),j=d.getX(D+2);l=hc(this,_,e,s,p,v,x,G,z,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const B=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);l=hc(this,h,e,s,p,v,x,B,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=B,Z=N;D<Z;D+=3){const G=D,z=D+1,j=D+2;l=hc(this,_,e,s,p,v,x,G,z,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,_=C;y<_;y+=3){const B=y,N=y+1,D=y+2;l=hc(this,h,e,s,p,v,x,B,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ry(o,e,i,s,l,u,h,d){let m;if(e.side===Vn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Va,d),m===null)return null;fc.copy(d),fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(fc);return p<i.near||p>i.far?null:{distance:p,point:fc.clone(),object:o}}function hc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,oc),o.getVertexPosition(m,lc),o.getVertexPosition(p,cc);const v=Ry(o,e,i,s,oc,lc,cc,B_);if(v){const x=new st;Si.getBarycoord(B_,oc,lc,cc,x),l&&(v.uv=Si.getInterpolatedAttribute(l,d,m,p,x,new we)),u&&(v.uv1=Si.getInterpolatedAttribute(u,d,m,p,x,new we)),h&&(v.normal=Si.getInterpolatedAttribute(h,d,m,p,x,new st),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new st,materialIndex:0};Si.getNormal(oc,lc,cc,S.normal),v.face=S,v.barycoord=x}return v}class Ga extends la{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],x=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(v,3)),this.setAttribute("uv",new Ei(x,2));function b(C,y,_,B,N,D,Z,G,z,j,w){const R=D/z,F=Z/j,rt=D/2,at=Z/2,ht=G/2,mt=z+1,O=j+1;let K=0,Y=0;const yt=new st;for(let Tt=0;Tt<O;Tt++){const L=Tt*F-at;for(let tt=0;tt<mt;tt++){const St=tt*R-rt;yt[C]=St*B,yt[y]=L*N,yt[_]=ht,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[_]=G>0?1:-1,v.push(yt.x,yt.y,yt.z),x.push(tt/z),x.push(1-Tt/j),K+=1}}for(let Tt=0;Tt<j;Tt++)for(let L=0;L<z;L++){const tt=S+L+mt*Tt,St=S+L+mt*(Tt+1),q=S+(L+1)+mt*(Tt+1),ut=S+(L+1)+mt*Tt;m.push(tt,St,ut),m.push(St,q,ut),Y+=6}d.addGroup(M,Y,w),M+=Y,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)e[l]=s[l]}return e}function Cy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function k0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const wy={clone:Cr,merge:Ln};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class X0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=sa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new st,I_=new we,F_=new we;class ci extends X0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dd*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,I_,F_),i.subVectors(F_,I_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const mr=-90,gr=1;class Ly extends En{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(mr,gr,e,i);l.layers=this.layers,this.add(l);const u=new ci(mr,gr,e,i);u.layers=this.layers,this.add(u);const h=new ci(mr,gr,e,i);h.layers=this.layers,this.add(h);const d=new ci(mr,gr,e,i);d.layers=this.layers,this.add(d);const m=new ci(mr,gr,e,i);m.layers=this.layers,this.add(m);const p=new ci(mr,gr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ac)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(x,S,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class W0 extends kn{constructor(e,i,s,l,u,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Er,super(e,i,s,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ny extends Es{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new W0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ga(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Fa});u.uniforms.tEquirect.value=i;const h=new ui(l,u),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Di),new Ly(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class No extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oy={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),_=this._getHandJoint(p,C);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=v.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Oy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new No;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class zy extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const gh=new st,Py=new st,By=new oe;class gs{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=gh.subVectors(s,i).cross(Py.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(gh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||By.getNormalMatrix(e),l=this.coplanarPoint(gh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Uc,dc=new st;class Td{constructor(e=new gs,i=new gs,s=new gs,l=new gs,u=new gs,h=new gs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=sa){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],x=l[6],S=l[7],M=l[8],b=l[9],C=l[10],y=l[11],_=l[12],B=l[13],N=l[14],D=l[15];if(s[0].setComponents(m-u,S-p,y-M,D-_).normalize(),s[1].setComponents(m+u,S+p,y+M,D+_).normalize(),s[2].setComponents(m+h,S+v,y+b,D+B).normalize(),s[3].setComponents(m-h,S-v,y-b,D-B).normalize(),s[4].setComponents(m-d,S-x,y-C,D-N).normalize(),i===sa)s[5].setComponents(m+d,S+x,y+C,D+N).normalize();else if(i===Ac)s[5].setComponents(d,x,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(dc.x=l.normal.x>0?e.max.x:e.min.x,dc.y=l.normal.y>0?e.max.y:e.min.y,dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q0 extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new st,wc=new st,H_=new Ye,Lo=new B0,pc=new Uc,_h=new st,G_=new st;class Iy extends En{constructor(e=new la,i=new q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Cc.fromBufferAttribute(i,l-1),wc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Cc.distanceTo(wc);e.setAttribute("lineDistance",new Ei(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(l),pc.radius+=u,e.ray.intersectsSphere(pc)===!1)return;H_.copy(l).invert(),Lo.copy(e.ray).applyMatrix4(H_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,S=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=p){const _=v.getX(C),B=v.getX(C+1),N=mc(this,e,Lo,m,_,B,C);N&&i.push(N)}if(this.isLineLoop){const C=v.getX(b-1),y=v.getX(M),_=mc(this,e,Lo,m,C,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=p){const _=mc(this,e,Lo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=mc(this,e,Lo,m,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function mc(o,e,i,s,l,u,h){const d=o.geometry.attributes.position;if(Cc.fromBufferAttribute(d,l),wc.fromBufferAttribute(d,u),i.distanceSqToSegment(Cc,wc,_h,G_)>s)return;_h.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(_h);if(!(p<e.near||p>e.far))return{distance:p,point:G_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const V_=new st,k_=new st;class Fy extends Iy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)V_.fromBufferAttribute(i,l),k_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+V_.distanceTo(k_);e.setAttribute("lineDistance",new Ei(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends kn{constructor(e,i,s,l,u,h,d,m,p,v=Sr){if(v!==Sr&&v!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Sr&&(s=Ms),s===void 0&&v===Ar&&(s=br),super(null,l,u,h,d,m,v,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Mi,this.minFilter=m!==void 0?m:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ed(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lc extends la{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,x=e/d,S=i/m,M=[],b=[],C=[],y=[];for(let _=0;_<v;_++){const B=_*S-h;for(let N=0;N<p;N++){const D=N*x-u;b.push(D,-B,0),C.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const N=B+p*_,D=B+p*(_+1),Z=B+1+p*(_+1),G=B+1+p*_;M.push(N,D,G),M.push(D,Z,G)}this.setIndex(M),this.setAttribute("position",new Ei(b,3)),this.setAttribute("normal",new Ei(C,3)),this.setAttribute("uv",new Ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class vh extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N0,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hy extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class j0 extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const xh=new Ye,X_=new st,W_=new st;class Vy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Td,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;X_.setFromMatrixPosition(e.matrixWorld),i.position.copy(X_),W_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(W_),i.updateMatrixWorld(),xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Z0 extends X0{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ky extends Vy{constructor(){super(new Z0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xy extends j0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new ky}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wy extends j0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qy extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Yy extends Fy{constructor(e=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const u=i/2,h=e/i,d=e/2,m=[],p=[];for(let S=0,M=0,b=-d;S<=i;S++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const C=S===u?s:l;C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3}const v=new la;v.setAttribute("position",new Ei(m,3)),v.setAttribute("color",new Ei(p,3));const x=new q0({vertexColors:!0,toneMapped:!1});super(v,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function q_(o,e,i,s){const l=jy(s);switch(i){case A0:return o*e;case C0:return o*e;case w0:return o*e*2;case D0:return o*e/l.components*l.byteLength;case Sd:return o*e/l.components*l.byteLength;case U0:return o*e*2/l.components*l.byteLength;case yd:return o*e*2/l.components*l.byteLength;case R0:return o*e*3/l.components*l.byteLength;case yi:return o*e*4/l.components*l.byteLength;case Md:return o*e*4/l.components*l.byteLength;case xc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Xh:return Math.max(o,16)*Math.max(e,8)/4;case Gh:case kh:return Math.max(o,8)*Math.max(e,8)/2;case Wh:case qh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case $h:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ed:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case nd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case id:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case sd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case rd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case od:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ec:case ld:case cd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case L0:case ud:return Math.ceil(o/4)*Math.ceil(e/4)*8;case fd:case hd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jy(o){switch(o){case oa:case E0:return{byteLength:1,components:1};case zo:case T0:case Po:return{byteLength:2,components:1};case vd:case xd:return{byteLength:2,components:4};case Ms:case _d:case aa:return{byteLength:4,components:1};case b0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function K0(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Zy(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const v=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,v);else{x.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<x.length;M++){const b=x[S],C=x[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,x[S]=C)}x.length=S+1;for(let M=0,b=x.length;M<b;M++){const C=x[M];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:Ky,alphahash_pars_fragment:Qy,alphamap_fragment:Jy,alphamap_pars_fragment:$y,alphatest_fragment:tM,alphatest_pars_fragment:eM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:aM,batching_vertex:sM,begin_vertex:rM,beginnormal_vertex:oM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:uM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:_M,color_vertex:vM,common:xM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:yM,displacementmap_pars_vertex:MM,displacementmap_vertex:EM,emissivemap_fragment:TM,emissivemap_pars_fragment:bM,colorspace_fragment:AM,colorspace_pars_fragment:RM,envmap_fragment:CM,envmap_common_pars_fragment:wM,envmap_pars_fragment:DM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:VM,envmap_vertex:LM,fog_vertex:NM,fog_pars_vertex:OM,fog_fragment:zM,fog_pars_fragment:PM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:IM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:HM,lights_pars_begin:GM,lights_toon_fragment:kM,lights_toon_pars_fragment:XM,lights_phong_fragment:WM,lights_phong_pars_fragment:qM,lights_physical_fragment:YM,lights_physical_pars_fragment:jM,lights_fragment_begin:ZM,lights_fragment_maps:KM,lights_fragment_end:QM,logdepthbuf_fragment:JM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:eE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:aE,map_particle_pars_fragment:sE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:oE,morphinstance_vertex:lE,morphcolor_vertex:cE,morphnormal_vertex:uE,morphtarget_pars_vertex:fE,morphtarget_vertex:hE,normal_fragment_begin:dE,normal_fragment_maps:pE,normal_pars_fragment:mE,normal_pars_vertex:gE,normal_vertex:_E,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:bE,project_vertex:AE,dithering_fragment:RE,dithering_pars_fragment:CE,roughnessmap_fragment:wE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:UE,shadowmap_pars_vertex:LE,shadowmap_vertex:NE,shadowmask_pars_fragment:OE,skinbase_vertex:zE,skinning_pars_vertex:PE,skinning_vertex:BE,skinnormal_vertex:IE,specularmap_fragment:FE,specularmap_pars_fragment:HE,tonemapping_fragment:GE,tonemapping_pars_fragment:VE,transmission_fragment:kE,transmission_pars_fragment:XE,uv_pars_fragment:WE,uv_pars_vertex:qE,uv_vertex:YE,worldpos_vertex:jE,background_vert:ZE,background_frag:KE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:$E,cube_frag:tT,depth_vert:eT,depth_frag:nT,distanceRGBA_vert:iT,distanceRGBA_frag:aT,equirect_vert:sT,equirect_frag:rT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:cT,meshbasic_frag:uT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:_T,meshphong_frag:vT,meshphysical_vert:xT,meshphysical_frag:ST,meshtoon_vert:yT,meshtoon_frag:MT,points_vert:ET,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:RT,sprite_frag:CT},Lt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},wi={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ye(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};wi.physical={uniforms:Ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const gc={r:0,b:0,g:0},ds=new Li,wT=new Ye;function DT(o,e,i,s,l,u,h){const d=new ye(0);let m=u===!0?0:1,p,v,x=null,S=0,M=null;function b(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:e).get(D)),D}function C(N){let D=!1;const Z=b(N);Z===null?_(d,m):Z&&Z.isColor&&(_(Z,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,D){const Z=b(D);Z&&(Z.isCubeTexture||Z.mapping===Dc)?(v===void 0&&(v=new ui(new Ga(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Cr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),ds.copy(D.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,Z.isCubeTexture&&Z.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),v.material.uniforms.envMap.value=Z,v.material.uniforms.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(ds)),v.material.toneMapped=Re.getTransfer(Z.colorSpace)!==Ie,(x!==Z||S!==Z.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,x=Z,S=Z.version,M=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):Z&&Z.isTexture&&(p===void 0&&(p=new ui(new Lc(2,2),new ka({name:"BackgroundMaterial",uniforms:Cr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=Z,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(Z.colorSpace)!==Ie,Z.matrixAutoUpdate===!0&&Z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(Z.matrix),(x!==Z||S!==Z.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=Z,S=Z.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,D){N.getRGB(gc,k0(o)),s.buffers.color.setClear(gc.r,gc.g,gc.b,D,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:y,dispose:B}}function UT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(R,F,rt,at,ht){let mt=!1;const O=x(at,rt,F);u!==O&&(u=O,p(u.object)),mt=M(R,at,rt,ht),mt&&b(R,at,rt,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,D(R,F,rt,at),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function x(R,F,rt){const at=rt.wireframe===!0;let ht=s[R.id];ht===void 0&&(ht={},s[R.id]=ht);let mt=ht[F.id];mt===void 0&&(mt={},ht[F.id]=mt);let O=mt[at];return O===void 0&&(O=S(m()),mt[at]=O),O}function S(R){const F=[],rt=[],at=[];for(let ht=0;ht<i;ht++)F[ht]=0,rt[ht]=0,at[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:rt,attributeDivisors:at,object:R,attributes:{},index:null}}function M(R,F,rt,at){const ht=u.attributes,mt=F.attributes;let O=0;const K=rt.getAttributes();for(const Y in K)if(K[Y].location>=0){const Tt=ht[Y];let L=mt[Y];if(L===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Tt===void 0||Tt.attribute!==L||L&&Tt.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function b(R,F,rt,at){const ht={},mt=F.attributes;let O=0;const K=rt.getAttributes();for(const Y in K)if(K[Y].location>=0){let Tt=mt[Y];Tt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const L={};L.attribute=Tt,Tt&&Tt.data&&(L.data=Tt.data),ht[Y]=L,O++}u.attributes=ht,u.attributesNum=O,u.index=at}function C(){const R=u.newAttributes;for(let F=0,rt=R.length;F<rt;F++)R[F]=0}function y(R){_(R,0)}function _(R,F){const rt=u.newAttributes,at=u.enabledAttributes,ht=u.attributeDivisors;rt[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),ht[R]!==F&&(o.vertexAttribDivisor(R,F),ht[R]=F)}function B(){const R=u.newAttributes,F=u.enabledAttributes;for(let rt=0,at=F.length;rt<at;rt++)F[rt]!==R[rt]&&(o.disableVertexAttribArray(rt),F[rt]=0)}function N(R,F,rt,at,ht,mt,O){O===!0?o.vertexAttribIPointer(R,F,rt,ht,mt):o.vertexAttribPointer(R,F,rt,at,ht,mt)}function D(R,F,rt,at){C();const ht=at.attributes,mt=rt.getAttributes(),O=F.defaultAttributeValues;for(const K in mt){const Y=mt[K];if(Y.location>=0){let yt=ht[K];if(yt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const Tt=yt.normalized,L=yt.itemSize,tt=e.get(yt);if(tt===void 0)continue;const St=tt.buffer,q=tt.type,ut=tt.bytesPerElement,Mt=q===o.INT||q===o.UNSIGNED_INT||yt.gpuType===_d;if(yt.isInterleavedBufferAttribute){const xt=yt.data,Pt=xt.stride,Gt=yt.offset;if(xt.isInstancedInterleavedBuffer){for(let jt=0;jt<Y.locationSize;jt++)_(Y.location+jt,xt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let jt=0;jt<Y.locationSize;jt++)y(Y.location+jt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let jt=0;jt<Y.locationSize;jt++)N(Y.location+jt,L/Y.locationSize,q,Tt,Pt*ut,(Gt+L/Y.locationSize*jt)*ut,Mt)}else{if(yt.isInstancedBufferAttribute){for(let xt=0;xt<Y.locationSize;xt++)_(Y.location+xt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let xt=0;xt<Y.locationSize;xt++)y(Y.location+xt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let xt=0;xt<Y.locationSize;xt++)N(Y.location+xt,L/Y.locationSize,q,Tt,L*ut,L/Y.locationSize*xt*ut,Mt)}}else if(O!==void 0){const Tt=O[K];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(Y.location,Tt);break;case 3:o.vertexAttrib3fv(Y.location,Tt);break;case 4:o.vertexAttrib4fv(Y.location,Tt);break;default:o.vertexAttrib1fv(Y.location,Tt)}}}}B()}function Z(){j();for(const R in s){const F=s[R];for(const rt in F){const at=F[rt];for(const ht in at)v(at[ht].object),delete at[ht];delete F[rt]}delete s[R]}}function G(R){if(s[R.id]===void 0)return;const F=s[R.id];for(const rt in F){const at=F[rt];for(const ht in at)v(at[ht].object),delete at[ht];delete F[rt]}delete s[R.id]}function z(R){for(const F in s){const rt=s[F];if(rt[R.id]===void 0)continue;const at=rt[R.id];for(const ht in at)v(at[ht].object),delete at[ht];delete rt[R.id]}}function j(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:Z,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function LT(o,e,i){let s;function l(p){s=p}function u(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,x){x!==0&&(o.drawArraysInstanced(s,p,v,x),i.update(v,s,x))}function d(p,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,x);let M=0;for(let b=0;b<x;b++)M+=v[b];i.update(M,s,1)}function m(p,v,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,x);let b=0;for(let C=0;C<x;C++)b+=v[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==yi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==oa&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==aa&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Z=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:Z,maxSamples:G}}function OT(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new gs,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||s!==0||l;return l=S,s=x.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=v(x,S,0)},this.setState=function(x,S,M){const b=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,_=o.get(x);if(!l||b===null||b.length===0||u&&!y)u?v(null):p();else{const B=u?0:s,N=B*4;let D=_.clippingState||null;m.value=D,D=v(b,S,N,M);for(let Z=0;Z!==N;++Z)D[Z]=i[Z];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,S,M,b){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const _=M+C*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,D=M;N!==C;++N,D+=4)h.copy(x[N]).applyMatrix4(B,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function zT(o){let e=new WeakMap;function i(h,d){return d===Bh?h.mapping=Er:d===Ih&&(h.mapping=Tr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bh||d===Ih)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ny(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const vr=4,Y_=[.125,.215,.35,.446,.526,.582],xs=20,Sh=new Z0,j_=new ye;let yh=null,Mh=0,Eh=0,Th=!1;const _s=(1+Math.sqrt(5))/2,_r=1/_s,Z_=[new st(-_s,_r,0),new st(_s,_r,0),new st(-_r,0,_s),new st(_r,0,_s),new st(0,_s,-_r),new st(0,_s,_r),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],PT=new st;class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=PT}=u;yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Po,format:yi,colorSpace:Rr,depthBuffer:!1},l=Q_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BT(u)),this._blurMaterial=IT(u,e,i)}return l}_compileMaterial(e){const i=new ui(this._lodPlanes[0],e);this._renderer.compile(i,Sh)}_sceneToCubeUV(e,i,s,l,u){const m=new ci(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(j_),x.toneMapping=Ha,x.autoClear=!1;const b=new H0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),C=new ui(new Ga,b);let y=!1;const _=e.background;_?_.isColor&&(b.color.copy(_),e.background=null,y=!0):(b.color.copy(j_),y=!0);for(let B=0;B<6;B++){const N=B%3;N===0?(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[B],u.y,u.z)):N===1?(m.up.set(0,0,p[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[B],u.z)):(m.up.set(0,p[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[B]));const D=this._cubeSize;_c(l,N*D,B>2?D:0,D,D),x.setRenderTarget(l),y&&x.render(C,m),x.render(e,m)}C.geometry.dispose(),C.material.dispose(),x.toneMapping=M,x.autoClear=S,e.background=_}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Er||e.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ui(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;_c(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Sh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Z_[(l-u-1)%Z_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new ui(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),C=u/b,y=isFinite(u)?1+Math.floor(v*C):xs;y>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const _=[];let B=0;for(let z=0;z<xs;++z){const j=z/C,w=Math.exp(-j*j/2);_.push(w),z===0?B+=w:z<y&&(B+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/B;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const D=this._sizeLods[l],Z=3*D*(l>N-vr?l-N+vr:0),G=4*(this._cubeSize-D);_c(i,Z,G,3*D,2*D),m.setRenderTarget(i),m.render(x,Sh)}}function BT(o){const e=[],i=[],s=[];let l=o;const u=o-vr+1+Y_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-vr?m=Y_[h-o+vr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,x=1+p,S=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,b=6,C=3,y=2,_=1,B=new Float32Array(C*b*M),N=new Float32Array(y*b*M),D=new Float32Array(_*b*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,j=G>2?0:-1,w=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];B.set(w,C*b*G),N.set(S,y*b*G);const R=[G,G,G,G,G,G];D.set(R,_*b*G)}const Z=new la;Z.setAttribute("position",new Ui(B,C)),Z.setAttribute("uv",new Ui(N,y)),Z.setAttribute("faceIndex",new Ui(D,_)),e.push(Z),l>vr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Q_(o,e,i){const s=new Es(o,e,i);return s.texture.mapping=Dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _c(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function IT(o,e,i){const s=new Float32Array(xs),l=new st(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function J_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function $_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FT(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Bh||m===Ih,v=m===Er||m===Tr;if(p||v){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new K_(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new K_(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function HT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ms("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function GT(o,e,i,s){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(x){const S=[],M=x.index,b=x.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let N=0,D=B.length;N<D;N+=3){const Z=B[N+0],G=B[N+1],z=B[N+2];S.push(Z,G,G,z,z,Z)}}else if(b!==void 0){const B=b.array;C=b.version;for(let N=0,D=B.length/3-1;N<D;N+=3){const Z=N+0,G=N+1,z=N+2;S.push(Z,G,G,z,z,Z)}}else return;const y=new(z0(S)?V0:G0)(S,1);y.version=C;const _=u.get(x);_&&e.remove(_),u.set(x,y)}function v(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function VT(o,e,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function x(S,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],C[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,C,0,b);let _=0;for(let B=0;B<b;B++)_+=M[B]*C[B];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function kT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function XT(o,e,i){const s=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==x){let R=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let Z=d.attributes.position.count*D,G=1;Z>e.maxTextureSize&&(G=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const z=new Float32Array(Z*G*4*x),j=new P0(z,Z,G,x);j.type=aa,j.needsUpdate=!0;const w=D*4;for(let F=0;F<x;F++){const rt=_[F],at=B[F],ht=N[F],mt=Z*G*4*F;for(let O=0;O<rt.count;O++){const K=O*w;b===!0&&(l.fromBufferAttribute(rt,O),z[mt+K+0]=l.x,z[mt+K+1]=l.y,z[mt+K+2]=l.z,z[mt+K+3]=0),C===!0&&(l.fromBufferAttribute(at,O),z[mt+K+4]=l.x,z[mt+K+5]=l.y,z[mt+K+6]=l.z,z[mt+K+7]=0),y===!0&&(l.fromBufferAttribute(ht,O),z[mt+K+8]=l.x,z[mt+K+9]=l.y,z[mt+K+10]=l.z,z[mt+K+11]=ht.itemSize===4?l.w:1)}}S={count:x,texture:j,size:new we(Z,G)},s.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function WT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,x=e.get(m,v);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Q0=new kn,t0=new Y0(1,1),J0=new P0,$0=new gy,tv=new W0,e0=[],n0=[],i0=new Float32Array(16),a0=new Float32Array(9),s0=new Float32Array(4);function Ur(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=e0[l];if(u===void 0&&(u=new Float32Array(l),e0[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Nc(o,e){let i=n0[e];i===void 0&&(i=new Int32Array(e),n0[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function KT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;s0.set(s),o.uniformMatrix2fv(this.addr,!1,s0),hn(i,s)}}function QT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;a0.set(s),o.uniformMatrix3fv(this.addr,!1,a0),hn(i,s)}}function JT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,s))return;i0.set(s),o.uniformMatrix4fv(this.addr,!1,i0),hn(i,s)}}function $T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function ib(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function ob(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(t0.compareFunction=O0,u=t0):u=Q0,i.setTexture2D(e||u,l)}function lb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||$0,l)}function cb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||tv,l)}function ub(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||J0,l)}function fb(o){switch(o){case 5126:return qT;case 35664:return YT;case 35665:return jT;case 35666:return ZT;case 35674:return KT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return tb;case 35668:case 35672:return eb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return ab;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function hb(o,e){o.uniform1fv(this.addr,e)}function db(o,e){const i=Ur(e,this.size,2);o.uniform2fv(this.addr,i)}function pb(o,e){const i=Ur(e,this.size,3);o.uniform3fv(this.addr,i)}function mb(o,e){const i=Ur(e,this.size,4);o.uniform4fv(this.addr,i)}function gb(o,e){const i=Ur(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function _b(o,e){const i=Ur(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function vb(o,e){const i=Ur(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function xb(o,e){o.uniform1iv(this.addr,e)}function Sb(o,e){o.uniform2iv(this.addr,e)}function yb(o,e){o.uniform3iv(this.addr,e)}function Mb(o,e){o.uniform4iv(this.addr,e)}function Eb(o,e){o.uniform1uiv(this.addr,e)}function Tb(o,e){o.uniform2uiv(this.addr,e)}function bb(o,e){o.uniform3uiv(this.addr,e)}function Ab(o,e){o.uniform4uiv(this.addr,e)}function Rb(o,e,i){const s=this.cache,l=e.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Q0,u[h])}function Cb(o,e,i){const s=this.cache,l=e.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||$0,u[h])}function wb(o,e,i){const s=this.cache,l=e.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||tv,u[h])}function Db(o,e,i){const s=this.cache,l=e.length,u=Nc(i,l);fn(s,u)||(o.uniform1iv(this.addr,u),hn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||J0,u[h])}function Ub(o){switch(o){case 5126:return hb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return Sb;case 35668:case 35672:return yb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Db}}class Lb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=fb(i.type)}}class Nb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ub(i.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function r0(o,e){o.seq.push(e),o.map[e.id]=e}function zb(o,e,i){const s=o.name,l=s.length;for(bh.lastIndex=0;;){const u=bh.exec(s),h=bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){r0(i,p===void 0?new Lb(d,o,e):new Nb(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new Ob(d),r0(i,x)),i=x}}}class Tc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);zb(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function o0(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Pb=37297;let Bb=0;function Ib(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const l0=new oe;function Fb(o){Re._getMatrix(l0,Re.workingColorSpace,o);const e=`mat3( ${l0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case bc:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function c0(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Ib(o.getShaderSource(e),h)}else return l}function Hb(o,e){const i=Fb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Gb(o,e){let i;switch(e){case VS:i="Linear";break;case kS:i="Reinhard";break;case XS:i="Cineon";break;case WS:i="ACESFilmic";break;case YS:i="AgX";break;case jS:i="Neutral";break;case qS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new st;function Vb(){Re.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function Xb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Wb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Oo(o){return o!==""}function u0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(o){return o.replace(qb,jb)}const Yb=new Map;function jb(o,e){let i=le[e];if(i===void 0){const s=Yb.get(e);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return pd(i)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(o){return o.replace(Zb,Kb)}function Kb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function d0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===yS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function Jb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $b(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function t1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case y0:e="ENVMAP_BLENDING_MULTIPLY";break;case HS:e="ENVMAP_BLENDING_MIX";break;case GS:e="ENVMAP_BLENDING_ADD";break}return e}function e1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function n1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Qb(i),p=Jb(i),v=$b(i),x=t1(i),S=e1(i),M=kb(i),b=Xb(u),C=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Oo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(y=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[d0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?le.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Gb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Hb("linearToOutputTexel",i.outputColorSpace),Vb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=pd(h),h=u0(h,i),h=f0(h,i),d=pd(d),d=u0(d,i),d=f0(d,i),h=h0(h),d=h0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+y+h,D=B+_+d,Z=o0(l,l.VERTEX_SHADER,N),G=o0(l,l.FRAGMENT_SHADER,D);l.attachShader(C,Z),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(F){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C).trim(),at=l.getShaderInfoLog(Z).trim(),ht=l.getShaderInfoLog(G).trim();let mt=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(mt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,Z,G);else{const K=c0(l,Z,"vertex"),Y=c0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+K+`
`+Y)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(at===""||ht==="")&&(O=!1);O&&(F.diagnostics={runnable:mt,programLog:rt,vertexShader:{log:at,prefix:y},fragmentShader:{log:ht,prefix:_}})}l.deleteShader(Z),l.deleteShader(G),j=new Tc(l,C),w=Wb(l,C)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,Pb)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Bb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=Z,this.fragmentShader=G,this}let i1=0;class a1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new s1(e),i.set(e,s)),s}}class s1{constructor(e){this.id=i1++,this.code=e,this.usedTimes=0}}function r1(o,e,i,s,l,u,h){const d=new I0,m=new a1,p=new Set,v=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,F,rt,at){const ht=rt.fog,mt=at.geometry,O=w.isMeshStandardMaterial?rt.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),Y=K&&K.mapping===Dc?K.image.height:null,yt=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Tt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,L=Tt!==void 0?Tt.length:0;let tt=0;mt.morphAttributes.position!==void 0&&(tt=1),mt.morphAttributes.normal!==void 0&&(tt=2),mt.morphAttributes.color!==void 0&&(tt=3);let St,q,ut,Mt;if(yt){const Ee=wi[yt];St=Ee.vertexShader,q=Ee.fragmentShader}else St=w.vertexShader,q=w.fragmentShader,m.update(w),ut=m.getVertexShaderID(w),Mt=m.getFragmentShaderID(w);const xt=o.getRenderTarget(),Pt=o.state.buffers.depth.getReversed(),Gt=at.isInstancedMesh===!0,jt=at.isBatchedMesh===!0,Ge=!!w.map,Fe=!!w.matcap,ue=!!K,I=!!w.aoMap,Tn=!!w.lightMap,ce=!!w.bumpMap,de=!!w.normalMap,Wt=!!w.displacementMap,De=!!w.emissiveMap,Xt=!!w.metalnessMap,U=!!w.roughnessMap,T=w.anisotropy>0,et=w.clearcoat>0,dt=w.dispersion>0,Et=w.iridescence>0,gt=w.sheen>0,Vt=w.transmission>0,wt=T&&!!w.anisotropyMap,Bt=et&&!!w.clearcoatMap,pe=et&&!!w.clearcoatNormalMap,At=et&&!!w.clearcoatRoughnessMap,It=Et&&!!w.iridescenceMap,Kt=Et&&!!w.iridescenceThicknessMap,kt=gt&&!!w.sheenColorMap,Ot=gt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,ae=!!w.specularColorMap,Ne=!!w.specularIntensityMap,k=Vt&&!!w.transmissionMap,Rt=Vt&&!!w.thicknessMap,lt=!!w.gradientMap,vt=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,$t=!!w.extensions;let We=Ha;w.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(We=o.toneMapping);const ln={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:q,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:jt,batchingColor:jt&&at._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&at.instanceColor!==null,instancingMorph:Gt&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Rr,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:Fe,envMap:ue,envMapMode:ue&&K.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:Tn,bumpMap:ce,normalMap:de,displacementMap:S&&Wt,emissiveMap:De,normalMapObjectSpace:de&&w.normalMapType===JS,normalMapTangentSpace:de&&w.normalMapType===N0,metalnessMap:Xt,roughnessMap:U,anisotropy:T,anisotropyMap:wt,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:pe,clearcoatRoughnessMap:At,dispersion:dt,iridescence:Et,iridescenceMap:It,iridescenceThicknessMap:Kt,sheen:gt,sheenColorMap:kt,sheenRoughnessMap:Ot,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Ne,transmission:Vt,transmissionMap:k,thicknessMap:Rt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===xr&&w.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Ge&&C(w.map.channel),aoMapUv:I&&C(w.aoMap.channel),lightMapUv:Tn&&C(w.lightMap.channel),bumpMapUv:ce&&C(w.bumpMap.channel),normalMapUv:de&&C(w.normalMap.channel),displacementMapUv:Wt&&C(w.displacementMap.channel),emissiveMapUv:De&&C(w.emissiveMap.channel),metalnessMapUv:Xt&&C(w.metalnessMap.channel),roughnessMapUv:U&&C(w.roughnessMap.channel),anisotropyMapUv:wt&&C(w.anisotropyMap.channel),clearcoatMapUv:Bt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:pe&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&C(w.sheenRoughnessMap.channel),specularMapUv:Jt&&C(w.specularMap.channel),specularColorMapUv:ae&&C(w.specularColorMap.channel),specularIntensityMapUv:Ne&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:vt&&C(w.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(de||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!mt.attributes.uv&&(Ge||vt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Pt,skinning:at.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:We,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Re.getTransfer(w.map.colorSpace)===Ie,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Re.getTransfer(w.emissiveMap.colorSpace)===Ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ia,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||jt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ln.vertexUv1s=p.has(1),ln.vertexUv2s=p.has(2),ln.vertexUv3s=p.has(3),p.clear(),ln}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)R.push(F),R.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(B(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=b[w.type];let F;if(R){const rt=wi[R];F=wy.clone(rt.uniforms)}else F=w.uniforms;return F}function Z(w,R){let F;for(let rt=0,at=v.length;rt<at;rt++){const ht=v[rt];if(ht.cacheKey===R){F=ht,++F.usedTimes;break}}return F===void 0&&(F=new n1(o,R,w,u),v.push(F)),F}function G(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:Z,releaseProgram:G,releaseShaderCache:z,programs:v,dispose:j}}function o1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function l1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function p0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function m0(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(x,S,M,b,C,y){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:b,renderOrder:x.renderOrder,z:C,group:y},o[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=b,_.renderOrder=x.renderOrder,_.z=C,_.group=y),e++,_}function d(x,S,M,b,C,y){const _=h(x,S,M,b,C,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,S,M,b,C,y){const _=h(x,S,M,b,C,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||l1),s.length>1&&s.sort(S||p0),l.length>1&&l.sort(S||p0)}function v(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function c1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new m0,o.set(s,[h])):l>=u.length?(h=new m0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function u1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new ye};break;case"SpotLight":i={position:new st,direction:new st,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=i,i}}}function f1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let h1=0;function d1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function p1(o){const e=new u1,i=f1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new st);const l=new st,u=new Ye,h=new Ye;function d(p){let v=0,x=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,C=0,y=0,_=0,B=0,N=0,D=0,Z=0,G=0,z=0;p.sort(d1);for(let w=0,R=p.length;w<R;w++){const F=p[w],rt=F.color,at=F.intensity,ht=F.distance,mt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=rt.r*at,x+=rt.g*at,S+=rt.b*at;else if(F.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(F.sh.coefficients[O],at);z++}else if(F.isDirectionalLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=mt,s.directionalShadowMatrix[M]=F.shadow.matrix,B++}s.directional[M]=O,M++}else if(F.isSpotLight){const O=e.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(rt).multiplyScalar(at),O.distance=ht,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,s.spot[C]=O;const K=F.shadow;if(F.map&&(s.spotLightMap[Z]=F.map,Z++,K.updateMatrices(F),F.castShadow&&G++),s.spotLightMatrix[C]=K.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=mt,D++}C++}else if(F.isRectAreaLight){const O=e.get(F);O.color.copy(rt).multiplyScalar(at),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=O,y++}else if(F.isPointLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const K=F.shadow,Y=i.get(F);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[b]=Y,s.pointShadowMap[b]=mt,s.pointShadowMatrix[b]=F.shadow.matrix,N++}s.point[b]=O,b++}else if(F.isHemisphereLight){const O=e.get(F);O.skyColor.copy(F.color).multiplyScalar(at),O.groundColor.copy(F.groundColor).multiplyScalar(at),s.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==M||j.pointLength!==b||j.spotLength!==C||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==B||j.numPointShadows!==N||j.numSpotShadows!==D||j.numSpotMaps!==Z||j.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+Z-G,s.spotLightMap.length=Z,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=z,j.directionalLength=M,j.pointLength=b,j.spotLength=C,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=B,j.numPointShadows=N,j.numSpotShadows=D,j.numSpotMaps=Z,j.numLightProbes=z,s.version=h1++)}function m(p,v){let x=0,S=0,M=0,b=0,C=0;const y=v.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const N=p[_];if(N.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(N.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function g0(o){const e=new p1(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function m1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new g0(o),e.set(l,[d])):u>=h.length?(d=new g0(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function v1(o,e,i){let s=new Td;const l=new we,u=new we,h=new $e,d=new Hy({depthPacking:QS}),m=new Gy,p={},v=i.maxTextureSize,x={[Va]:Vn,[Vn]:Va,[ia]:ia},S=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:g1,fragmentShader:_1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new la;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ui(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S0;let _=this.type;this.render=function(G,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Fa),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const at=_!==na&&this.type===na,ht=_===na&&this.type!==na;for(let mt=0,O=G.length;mt<O;mt++){const K=G[mt],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const yt=Y.getFrameExtents();if(l.multiply(yt),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/yt.x),l.x=u.x*yt.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/yt.y),l.y=u.y*yt.y,Y.mapSize.y=u.y)),Y.map===null||at===!0||ht===!0){const L=this.type!==na?{minFilter:Mi,magFilter:Mi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Es(l.x,l.y,L),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Tt=Y.getViewportCount();for(let L=0;L<Tt;L++){const tt=Y.getViewport(L);h.set(u.x*tt.x,u.y*tt.y,u.x*tt.z,u.y*tt.w),rt.viewport(h),Y.updateMatrices(K,L),s=Y.getFrustum(),D(z,j,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===na&&B(Y,j),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,F)};function B(G,z){const j=e.update(C);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Es(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,j,S,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,j,M,C,null)}function N(G,z,j,w){let R=null;const F=j.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)R=F;else if(R=j.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const rt=R.uuid,at=z.uuid;let ht=p[rt];ht===void 0&&(ht={},p[rt]=ht);let mt=ht[at];mt===void 0&&(mt=R.clone(),ht[at]=mt,z.addEventListener("dispose",Z)),R=mt}if(R.visible=z.visible,R.wireframe=z.wireframe,w===na?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:x[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const rt=o.properties.get(R);rt.light=j}return R}function D(G,z,j,w,R){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===na)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,G.matrixWorld);const at=e.update(G),ht=G.material;if(Array.isArray(ht)){const mt=at.groups;for(let O=0,K=mt.length;O<K;O++){const Y=mt[O],yt=ht[Y.materialIndex];if(yt&&yt.visible){const Tt=N(G,yt,w,R);G.onBeforeShadow(o,G,z,j,at,Tt,Y),o.renderBufferDirect(j,null,at,Tt,G,Y),G.onAfterShadow(o,G,z,j,at,Tt,Y)}}}else if(ht.visible){const mt=N(G,ht,w,R);G.onBeforeShadow(o,G,z,j,at,mt,null),o.renderBufferDirect(j,null,at,mt,G,null),G.onAfterShadow(o,G,z,j,at,mt,null)}}const rt=G.children;for(let at=0,ht=rt.length;at<ht;at++)D(rt[at],z,j,w,R)}function Z(G){G.target.removeEventListener("dispose",Z);for(const j in p){const w=p[j],R=G.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const x1={[Dh]:Uh,[Lh]:zh,[Nh]:Ph,[Mr]:Oh,[Uh]:Dh,[zh]:Lh,[Ph]:Nh,[Oh]:Mr};function S1(o,e){function i(){let k=!1;const Rt=new $e;let lt=null;const vt=new $e(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Dt,$t,We,ln){ln===!0&&(Ct*=We,Dt*=We,$t*=We),Rt.set(Ct,Dt,$t,We),vt.equals(Rt)===!1&&(o.clearColor(Ct,Dt,$t,We),vt.copy(Rt))},reset:function(){k=!1,lt=null,vt.set(-1,0,0,0)}}}function s(){let k=!1,Rt=!1,lt=null,vt=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const $t=e.get("EXT_clip_control");Rt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const We=Ct;Ct=null,this.setClear(We)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?xt(o.DEPTH_TEST):Pt(o.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!k&&(o.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Rt&&(Dt=x1[Dt]),vt!==Dt){switch(Dt){case Dh:o.depthFunc(o.NEVER);break;case Uh:o.depthFunc(o.ALWAYS);break;case Lh:o.depthFunc(o.LESS);break;case Mr:o.depthFunc(o.LEQUAL);break;case Nh:o.depthFunc(o.EQUAL);break;case Oh:o.depthFunc(o.GEQUAL);break;case zh:o.depthFunc(o.GREATER);break;case Ph:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){k=!1,lt=null,vt=null,Ct=null,Rt=!1}}}function l(){let k=!1,Rt=null,lt=null,vt=null,Ct=null,Dt=null,$t=null,We=null,ln=null;return{setTest:function(Ee){k||(Ee?xt(o.STENCIL_TEST):Pt(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!k&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,gn,fi){(lt!==Ee||vt!==gn||Ct!==fi)&&(o.stencilFunc(Ee,gn,fi),lt=Ee,vt=gn,Ct=fi)},setOp:function(Ee,gn,fi){(Dt!==Ee||$t!==gn||We!==fi)&&(o.stencilOp(Ee,gn,fi),Dt=Ee,$t=gn,We=fi)},setLocked:function(Ee){k=Ee},setClear:function(Ee){ln!==Ee&&(o.clearStencil(Ee),ln=Ee)},reset:function(){k=!1,Rt=null,lt=null,vt=null,Ct=null,Dt=null,$t=null,We=null,ln=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},S=new WeakMap,M=[],b=null,C=!1,y=null,_=null,B=null,N=null,D=null,Z=null,G=null,z=new ye(0,0,0),j=0,w=!1,R=null,F=null,rt=null,at=null,ht=null;const mt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=K>=2);let yt=null,Tt={};const L=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),St=new $e().fromArray(L),q=new $e().fromArray(tt);function ut(k,Rt,lt,vt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(k,Dt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<lt;$t++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const Mt={};Mt[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),xt(o.DEPTH_TEST),h.setFunc(Mr),ce(!1),de(g_),xt(o.CULL_FACE),I(Fa);function xt(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function Pt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Gt(k,Rt){return x[k]!==Rt?(o.bindFramebuffer(k,Rt),x[k]=Rt,k===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),k===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function jt(k,Rt){let lt=M,vt=!1;if(k){lt=S.get(Rt),lt===void 0&&(lt=[],S.set(Rt,lt));const Ct=k.textures;if(lt.length!==Ct.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)lt[Dt]=o.COLOR_ATTACHMENT0+Dt;lt.length=Ct.length,vt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,vt=!0);vt&&o.drawBuffers(lt)}function Ge(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Fe={[vs]:o.FUNC_ADD,[ES]:o.FUNC_SUBTRACT,[TS]:o.FUNC_REVERSE_SUBTRACT};Fe[bS]=o.MIN,Fe[AS]=o.MAX;const ue={[RS]:o.ZERO,[CS]:o.ONE,[wS]:o.SRC_COLOR,[Ch]:o.SRC_ALPHA,[zS]:o.SRC_ALPHA_SATURATE,[NS]:o.DST_COLOR,[US]:o.DST_ALPHA,[DS]:o.ONE_MINUS_SRC_COLOR,[wh]:o.ONE_MINUS_SRC_ALPHA,[OS]:o.ONE_MINUS_DST_COLOR,[LS]:o.ONE_MINUS_DST_ALPHA,[PS]:o.CONSTANT_COLOR,[BS]:o.ONE_MINUS_CONSTANT_COLOR,[IS]:o.CONSTANT_ALPHA,[FS]:o.ONE_MINUS_CONSTANT_ALPHA};function I(k,Rt,lt,vt,Ct,Dt,$t,We,ln,Ee){if(k===Fa){C===!0&&(Pt(o.BLEND),C=!1);return}if(C===!1&&(xt(o.BLEND),C=!0),k!==MS){if(k!==y||Ee!==w){if((_!==vs||D!==vs)&&(o.blendEquation(o.FUNC_ADD),_=vs,D=vs),Ee)switch(k){case xr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case __:o.blendFunc(o.ONE,o.ONE);break;case v_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case x_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case xr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case __:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case v_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case x_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,N=null,Z=null,G=null,z.set(0,0,0),j=0,y=k,w=Ee}return}Ct=Ct||Rt,Dt=Dt||lt,$t=$t||vt,(Rt!==_||Ct!==D)&&(o.blendEquationSeparate(Fe[Rt],Fe[Ct]),_=Rt,D=Ct),(lt!==B||vt!==N||Dt!==Z||$t!==G)&&(o.blendFuncSeparate(ue[lt],ue[vt],ue[Dt],ue[$t]),B=lt,N=vt,Z=Dt,G=$t),(We.equals(z)===!1||ln!==j)&&(o.blendColor(We.r,We.g,We.b,ln),z.copy(We),j=ln),y=k,w=!1}function Tn(k,Rt){k.side===ia?Pt(o.CULL_FACE):xt(o.CULL_FACE);let lt=k.side===Vn;Rt&&(lt=!lt),ce(lt),k.blending===xr&&k.transparent===!1?I(Fa):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const vt=k.stencilWrite;d.setTest(vt),vt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function de(k){k!==xS?(xt(o.CULL_FACE),k!==F&&(k===g_?o.cullFace(o.BACK):k===SS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pt(o.CULL_FACE),F=k}function Wt(k){k!==rt&&(O&&o.lineWidth(k),rt=k)}function De(k,Rt,lt){k?(xt(o.POLYGON_OFFSET_FILL),(at!==Rt||ht!==lt)&&(o.polygonOffset(Rt,lt),at=Rt,ht=lt)):Pt(o.POLYGON_OFFSET_FILL)}function Xt(k){k?xt(o.SCISSOR_TEST):Pt(o.SCISSOR_TEST)}function U(k){k===void 0&&(k=o.TEXTURE0+mt-1),yt!==k&&(o.activeTexture(k),yt=k)}function T(k,Rt,lt){lt===void 0&&(yt===null?lt=o.TEXTURE0+mt-1:lt=yt);let vt=Tt[lt];vt===void 0&&(vt={type:void 0,texture:void 0},Tt[lt]=vt),(vt.type!==k||vt.texture!==Rt)&&(yt!==lt&&(o.activeTexture(lt),yt=lt),o.bindTexture(k,Rt||Mt[k]),vt.type=k,vt.texture=Rt)}function et(){const k=Tt[yt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function dt(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(k){St.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Ot(k){q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function Jt(k,Rt){let lt=p.get(Rt);lt===void 0&&(lt=new WeakMap,p.set(Rt,lt));let vt=lt.get(k);vt===void 0&&(vt=o.getUniformBlockIndex(Rt,k.name),lt.set(k,vt))}function ae(k,Rt){const vt=p.get(Rt).get(k);m.get(Rt)!==vt&&(o.uniformBlockBinding(Rt,vt,k.__bindingPointIndex),m.set(Rt,vt))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,Tt={},x={},S=new WeakMap,M=[],b=null,C=!1,y=null,_=null,B=null,N=null,D=null,Z=null,G=null,z=new ye(0,0,0),j=0,w=!1,R=null,F=null,rt=null,at=null,ht=null,St.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:xt,disable:Pt,bindFramebuffer:Gt,drawBuffers:jt,useProgram:Ge,setBlending:I,setMaterial:Tn,setFlipSided:ce,setCullFace:de,setLineWidth:Wt,setPolygonOffset:De,setScissorTest:Xt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:dt,compressedTexImage3D:Et,texImage2D:It,texImage3D:Kt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:pe,texStorage3D:At,texSubImage2D:gt,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Bt,scissor:kt,viewport:Ot,reset:Ne}}function y1(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,v=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Rc("canvas")}function C(U,T,et){let dt=1;const Et=Xt(U);if((Et.width>et||Et.height>et)&&(dt=et/Math.max(Et.width,Et.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const gt=Math.floor(dt*Et.width),Vt=Math.floor(dt*Et.height);x===void 0&&(x=b(gt,Vt));const wt=T?b(gt,Vt):x;return wt.width=gt,wt.height=Vt,wt.getContext("2d").drawImage(U,0,0,gt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+gt+"x"+Vt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,T,et,dt,Et=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let gt=T;if(T===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),T===o.RGBA){const Vt=Et?bc:Re.getTransfer(dt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=Vt===Ie?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function D(U,T){let et;return U?T===null||T===Ms||T===br?et=o.DEPTH24_STENCIL8:T===aa?et=o.DEPTH32F_STENCIL8:T===zo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===br?et=o.DEPTH_COMPONENT24:T===aa?et=o.DEPTH_COMPONENT32F:T===zo&&(et=o.DEPTH_COMPONENT16),et}function Z(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Mi&&U.minFilter!==Di?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),j(T),T.isVideoTexture&&v.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),R(T)}function j(U){const T=s.get(U);if(T.__webglInit===void 0)return;const et=U.source,dt=S.get(et);if(dt){const Et=dt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(U),Object.keys(dt).length===0&&S.delete(et)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const et=U.source,dt=S.get(et);delete dt[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let Et=0;Et<T.__webglFramebuffer[dt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[dt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[dt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let dt=0,Et=et.length;dt<Et;dt++){const gt=s.get(et[dt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),s.remove(et[dt])}s.remove(U)}let F=0;function rt(){F=0}function at(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function ht(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function mt(U,T){const et=s.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(et,U,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function O(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){q(et,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function K(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){q(et,U,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Y(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){ut(et,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const yt={[Fh]:o.REPEAT,[Ss]:o.CLAMP_TO_EDGE,[Hh]:o.MIRRORED_REPEAT},Tt={[Mi]:o.NEAREST,[ZS]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[ys]:o.LINEAR_MIPMAP_LINEAR},L={[$S]:o.NEVER,[sy]:o.ALWAYS,[ty]:o.LESS,[O0]:o.LEQUAL,[ey]:o.EQUAL,[ay]:o.GEQUAL,[ny]:o.GREATER,[iy]:o.NOTEQUAL};function tt(U,T){if(T.type===aa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Di||T.magFilter===Yf||T.magFilter===Kl||T.magFilter===ys||T.minFilter===Di||T.minFilter===Yf||T.minFilter===Kl||T.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,yt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,yt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,yt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Tt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==Kl&&T.minFilter!==ys||T.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const dt=T.source;let Et=S.get(dt);Et===void 0&&(Et={},S.set(dt,Et));const gt=ht(T);if(gt!==U.__cacheKey){Et[gt]===void 0&&(Et[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Et[gt].usedTimes++;const Vt=Et[U.__cacheKey];Vt!==void 0&&(Et[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(T)),U.__cacheKey=gt,U.__webglTexture=Et[gt].texture}return et}function q(U,T,et){let dt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=o.TEXTURE_3D);const Et=St(U,T),gt=T.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+et);const Vt=s.get(gt);if(gt.version!==Vt.__version||Et===!0){i.activeTexture(o.TEXTURE0+et);const wt=Re.getPrimaries(Re.workingColorSpace),Bt=T.colorSpace===Ia?null:Re.getPrimaries(T.colorSpace),pe=T.colorSpace===Ia||wt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let At=C(T.image,!1,l.maxTextureSize);At=De(T,At);const It=u.convert(T.format,T.colorSpace),Kt=u.convert(T.type);let kt=N(T.internalFormat,It,Kt,T.colorSpace,T.isVideoTexture);tt(dt,T);let Ot;const Jt=T.mipmaps,ae=T.isVideoTexture!==!0,Ne=Vt.__version===void 0||Et===!0,k=gt.dataReady,Rt=Z(T,At);if(T.isDepthTexture)kt=D(T.format===Ar,T.type),Ne&&(ae?i.texStorage2D(o.TEXTURE_2D,1,kt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,It,Kt,null));else if(T.isDataTexture)if(Jt.length>0){ae&&Ne&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Jt[0].width,Jt[0].height);for(let lt=0,vt=Jt.length;lt<vt;lt++)Ot=Jt[lt],ae?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,Kt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,It,Kt,Ot.data);T.generateMipmaps=!1}else ae?(Ne&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,It,Kt,At.data)):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,It,Kt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,Jt[0].width,Jt[0].height,At.depth);for(let lt=0,vt=Jt.length;lt<vt;lt++)if(Ot=Jt[lt],T.format!==yi)if(It!==null)if(ae){if(k)if(T.layerUpdates.size>0){const Ct=q_(Ot.width,Ot.height,T.format,T.type);for(const Dt of T.layerUpdates){const $t=Ot.data.subarray(Dt*Ct/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Dt,Ot.width,Ot.height,1,It,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,It,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ot.width,Ot.height,At.depth,It,Kt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Ot.width,Ot.height,At.depth,0,It,Kt,Ot.data)}else{ae&&Ne&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Jt[0].width,Jt[0].height);for(let lt=0,vt=Jt.length;lt<vt;lt++)Ot=Jt[lt],T.format!==yi?It!==null?ae?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ot.width,Ot.height,It,Kt,Ot.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Ot.width,Ot.height,0,It,Kt,Ot.data)}else if(T.isDataArrayTexture)if(ae){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,At.width,At.height,At.depth),k)if(T.layerUpdates.size>0){const lt=q_(At.width,At.height,T.format,T.type);for(const vt of T.layerUpdates){const Ct=At.data.subarray(vt*lt/At.data.BYTES_PER_ELEMENT,(vt+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,It,Kt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,It,Kt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,At.width,At.height,At.depth,0,It,Kt,At.data);else if(T.isData3DTexture)ae?(Ne&&i.texStorage3D(o.TEXTURE_3D,Rt,kt,At.width,At.height,At.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,It,Kt,At.data)):i.texImage3D(o.TEXTURE_3D,0,kt,At.width,At.height,At.depth,0,It,Kt,At.data);else if(T.isFramebufferTexture){if(Ne)if(ae)i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height);else{let lt=At.width,vt=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,kt,lt,vt,0,It,Kt,null),lt>>=1,vt>>=1}}else if(Jt.length>0){if(ae&&Ne){const lt=Xt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}for(let lt=0,vt=Jt.length;lt<vt;lt++)Ot=Jt[lt],ae?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,It,Kt,Ot):i.texImage2D(o.TEXTURE_2D,lt,kt,It,Kt,Ot);T.generateMipmaps=!1}else if(ae){if(Ne){const lt=Xt(At);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,Kt,At)}else i.texImage2D(o.TEXTURE_2D,0,kt,It,Kt,At);y(T)&&_(dt),Vt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ut(U,T,et){if(T.image.length!==6)return;const dt=St(U,T),Et=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const gt=s.get(Et);if(Et.version!==gt.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Vt=Re.getPrimaries(Re.workingColorSpace),wt=T.colorSpace===Ia?null:Re.getPrimaries(T.colorSpace),Bt=T.colorSpace===Ia||Vt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,It=[];for(let vt=0;vt<6;vt++)!pe&&!At?It[vt]=C(T.image[vt],!0,l.maxCubemapSize):It[vt]=At?T.image[vt].image:T.image[vt],It[vt]=De(T,It[vt]);const Kt=It[0],kt=u.convert(T.format,T.colorSpace),Ot=u.convert(T.type),Jt=N(T.internalFormat,kt,Ot,T.colorSpace),ae=T.isVideoTexture!==!0,Ne=gt.__version===void 0||dt===!0,k=Et.dataReady;let Rt=Z(T,Kt);tt(o.TEXTURE_CUBE_MAP,T);let lt;if(pe){ae&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,Kt.width,Kt.height);for(let vt=0;vt<6;vt++){lt=It[vt].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];T.format!==yi?kt!==null?ae?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,kt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,kt,Ot,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Jt,Dt.width,Dt.height,0,kt,Ot,Dt.data)}}}else{if(lt=T.mipmaps,ae&&Ne){lt.length>0&&Rt++;const vt=Xt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It[vt].width,It[vt].height,kt,Ot,It[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,It[vt].width,It[vt].height,0,kt,Ot,It[vt].data);for(let Ct=0;Ct<lt.length;Ct++){const $t=lt[Ct].image[vt].image;ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,$t.width,$t.height,kt,Ot,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Jt,$t.width,$t.height,0,kt,Ot,$t.data)}}else{ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,Ot,It[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,kt,Ot,It[vt]);for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];ae?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,kt,Ot,Dt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Jt,kt,Ot,Dt.image[vt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),gt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,et,dt,Et,gt){const Vt=u.convert(et.format,et.colorSpace),wt=u.convert(et.type),Bt=N(et.internalFormat,Vt,wt,et.colorSpace),pe=s.get(T),At=s.get(et);if(At.__renderTarget=T,!pe.__hasExternalTextures){const It=Math.max(1,T.width>>gt),Kt=Math.max(1,T.height>>gt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,gt,Bt,It,Kt,T.depth,0,Vt,wt,null):i.texImage2D(Et,gt,Bt,It,Kt,0,Vt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Et,At.__webglTexture,0,ce(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Et,At.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(U,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const dt=T.depthTexture,Et=dt&&dt.isDepthTexture?dt.type:null,gt=D(T.stencilBuffer,Et),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ce(T);de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,gt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,gt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,gt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const dt=T.textures;for(let Et=0;Et<dt.length;Et++){const gt=dt[Et],Vt=u.convert(gt.format,gt.colorSpace),wt=u.convert(gt.type),Bt=N(gt.internalFormat,Vt,wt,gt.colorSpace),pe=ce(T);et&&de(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Bt,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,Bt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),mt(T.depthTexture,0);const Et=dt.__webglTexture,gt=ce(T);if(T.depthTexture.format===Sr)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Ar)de(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Gt(U){const T=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",Et)};dt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=dt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Pt(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=o.createRenderbuffer(),xt(T.__webglDepthbuffer[dt],U,!1);else{const Et=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,gt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),xt(T.__webglDepthbuffer,U,!1);else{const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,Et)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(U,T,et){const dt=s.get(U);T!==void 0&&Mt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Gt(U)}function Ge(U){const T=U.texture,et=s.get(U),dt=s.get(T);U.addEventListener("dispose",z);const Et=U.textures,gt=U.isWebGLCubeRenderTarget===!0,Vt=Et.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=T.version,h.memory.textures++),gt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)et.__webglFramebuffer[wt][Bt]=o.createFramebuffer()}else et.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)et.__webglFramebuffer[wt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let wt=0,Bt=Et.length;wt<Bt;wt++){const pe=s.get(Et[wt]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&de(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<Et.length;wt++){const Bt=Et[wt];et.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const pe=u.convert(Bt.format,Bt.colorSpace),At=u.convert(Bt.type),It=N(Bt.internalFormat,pe,At,Bt.colorSpace,U.isXRRenderTarget===!0),Kt=ce(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,It,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),xt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),tt(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Mt(et.__webglFramebuffer[wt][Bt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Bt);else Mt(et.__webglFramebuffer[wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,Bt=Et.length;wt<Bt;wt++){const pe=Et[wt],At=s.get(pe);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),tt(o.TEXTURE_2D,pe),Mt(et.__webglFramebuffer,U,pe,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(pe)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,dt.__webglTexture),tt(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Mt(et.__webglFramebuffer[Bt],U,T,o.COLOR_ATTACHMENT0,wt,Bt);else Mt(et.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&_(wt),i.unbindTexture()}U.depthBuffer&&Gt(U)}function Fe(U){const T=U.textures;for(let et=0,dt=T.length;et<dt;et++){const Et=T[et];if(y(Et)){const gt=B(U),Vt=s.get(Et).__webglTexture;i.bindTexture(gt,Vt),_(gt),i.unbindTexture()}}}const ue=[],I=[];function Tn(U){if(U.samples>0){if(de(U)===!1){const T=U.textures,et=U.width,dt=U.height;let Et=o.COLOR_BUFFER_BIT;const gt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(U),wt=T.length>1;if(wt)for(let Bt=0;Bt<T.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Bt=0;Bt<T.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const pe=s.get(T[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,Et,o.NEAREST),m===!0&&(ue.length=0,I.length=0,ue.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ue.push(gt),I.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Bt=0;Bt<T.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const pe=s.get(T[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,pe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ce(U){return Math.min(l.maxSamples,U.samples)}function de(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function De(U,T){const et=U.colorSpace,dt=U.format,Et=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Rr&&et!==Ia&&(Re.getTransfer(et)===Ie?(dt!==yi||Et!==oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=rt,this.setTexture2D=mt,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=jt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=de}function M1(o,e){function i(s,l=Ia){let u;const h=Re.getTransfer(l);if(s===oa)return o.UNSIGNED_BYTE;if(s===vd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===xd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===b0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===E0)return o.BYTE;if(s===T0)return o.SHORT;if(s===zo)return o.UNSIGNED_SHORT;if(s===_d)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===aa)return o.FLOAT;if(s===Po)return o.HALF_FLOAT;if(s===A0)return o.ALPHA;if(s===R0)return o.RGB;if(s===yi)return o.RGBA;if(s===C0)return o.LUMINANCE;if(s===w0)return o.LUMINANCE_ALPHA;if(s===Sr)return o.DEPTH_COMPONENT;if(s===Ar)return o.DEPTH_STENCIL;if(s===D0)return o.RED;if(s===Sd)return o.RED_INTEGER;if(s===U0)return o.RG;if(s===yd)return o.RG_INTEGER;if(s===Md)return o.RGBA_INTEGER;if(s===xc||s===Sc||s===yc||s===Mc)if(h===Ie)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===xc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===xc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===kh||s===Xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Gh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh||s===qh||s===Yh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Wh||s===qh)return h===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Yh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jh)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$h)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===td)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ed)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===id)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ad)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===od)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ec||s===ld||s===cd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Ec)return h===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ld)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===L0||s===ud||s===fd||s===hd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Ec)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ud)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new kn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ka({vertexShader:E1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new Lc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A1 extends wr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,x=null,S=null,M=null,b=null;const C=new b1,y=i.getContextAttributes();let _=null,B=null;const N=[],D=[],Z=new we;let G=null;const z=new ci;z.viewport=new $e;const j=new ci;j.viewport=new $e;const w=[z,j],R=new qy;let F=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ut=N[q];return ut===void 0&&(ut=new mh,N[q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(q){let ut=N[q];return ut===void 0&&(ut=new mh,N[q]=ut),ut.getGripSpace()},this.getHand=function(q){let ut=N[q];return ut===void 0&&(ut=new mh,N[q]=ut),ut.getHandSpace()};function at(q){const ut=D.indexOf(q.inputSource);if(ut===-1)return;const Mt=N[ut];Mt!==void 0&&(Mt.update(q.inputSource,q.frame,p||h),Mt.dispatchEvent({type:q.type,data:q.inputSource}))}function ht(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",mt);for(let q=0;q<N.length;q++){const ut=D[q];ut!==null&&(D[q]=null,N[q].disconnect(ut))}F=null,rt=null,C.reset(),e.setRenderTarget(_),M=null,S=null,x=null,l=null,B=null,St.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(Z.width,Z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",mt),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(Z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,xt=null,Pt=null;y.depth&&(Pt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?Ar:Sr,xt=y.stencil?br:Ms);const Gt={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Gt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Es(S.textureWidth,S.textureHeight,{format:yi,type:oa,depthTexture:new Y0(S.textureWidth,S.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Es(M.framebufferWidth,M.framebufferHeight,{format:yi,type:oa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function mt(q){for(let ut=0;ut<q.removed.length;ut++){const Mt=q.removed[ut],xt=D.indexOf(Mt);xt>=0&&(D[xt]=null,N[xt].disconnect(Mt))}for(let ut=0;ut<q.added.length;ut++){const Mt=q.added[ut];let xt=D.indexOf(Mt);if(xt===-1){for(let Gt=0;Gt<N.length;Gt++)if(Gt>=D.length){D.push(Mt),xt=Gt;break}else if(D[Gt]===null){D[Gt]=Mt,xt=Gt;break}if(xt===-1)break}const Pt=N[xt];Pt&&Pt.connect(Mt)}}const O=new st,K=new st;function Y(q,ut,Mt){O.setFromMatrixPosition(ut.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const xt=O.distanceTo(K),Pt=ut.projectionMatrix.elements,Gt=Mt.projectionMatrix.elements,jt=Pt[14]/(Pt[10]-1),Ge=Pt[14]/(Pt[10]+1),Fe=(Pt[9]+1)/Pt[5],ue=(Pt[9]-1)/Pt[5],I=(Pt[8]-1)/Pt[0],Tn=(Gt[8]+1)/Gt[0],ce=jt*I,de=jt*Tn,Wt=xt/(-I+Tn),De=Wt*-I;if(ut.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pt[10]===-1)q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Xt=jt+Wt,U=Ge+Wt,T=ce-De,et=de+(xt-De),dt=Fe*Ge/U*Xt,Et=ue*Ge/U*Xt;q.projectionMatrix.makePerspective(T,et,dt,Et,Xt,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function yt(q,ut){ut===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ut.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ut=q.near,Mt=q.far;C.texture!==null&&(C.depthNear>0&&(ut=C.depthNear),C.depthFar>0&&(Mt=C.depthFar)),R.near=j.near=z.near=ut,R.far=j.far=z.far=Mt,(F!==R.near||rt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,rt=R.far),z.layers.mask=q.layers.mask|2,j.layers.mask=q.layers.mask|4,R.layers.mask=z.layers.mask|j.layers.mask;const xt=q.parent,Pt=R.cameras;yt(R,xt);for(let Gt=0;Gt<Pt.length;Gt++)yt(Pt[Gt],xt);Pt.length===2?Y(R,z,j):R.projectionMatrix.copy(z.projectionMatrix),Tt(q,R,xt)};function Tt(q,ut,Mt){Mt===null?q.matrix.copy(ut.matrixWorld):(q.matrix.copy(Mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ut.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ut.projectionMatrix),q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=dd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(q){m=q,S!==null&&(S.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let L=null;function tt(q,ut){if(v=ut.getViewerPose(p||h),b=ut,v!==null){const Mt=v.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let xt=!1;Mt.length!==R.cameras.length&&(R.cameras.length=0,xt=!0);for(let jt=0;jt<Mt.length;jt++){const Ge=Mt[jt];let Fe=null;if(M!==null)Fe=M.getViewport(Ge);else{const I=x.getViewSubImage(S,Ge);Fe=I.viewport,jt===0&&(e.setRenderTargetTextures(B,I.colorTexture,S.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(B))}let ue=w[jt];ue===void 0&&(ue=new ci,ue.layers.enable(jt),ue.viewport=new $e,w[jt]=ue),ue.matrix.fromArray(Ge.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ge.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),jt===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xt===!0&&R.cameras.push(ue)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const jt=x.getDepthInformation(Mt[0]);jt&&jt.isValid&&jt.texture&&C.init(e,jt,l.renderState)}}for(let Mt=0;Mt<N.length;Mt++){const xt=D[Mt],Pt=N[Mt];xt!==null&&Pt!==void 0&&Pt.update(xt,ut,p||h)}L&&L(q,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),b=null}const St=new K0;St.setAnimationLoop(tt),this.setAnimationLoop=function(q){L=q},this.dispose=function(){}}}const ps=new Li,R1=new Ye;function C1(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,k0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),b(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),C(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),N=B.envMap,D=B.envMapRotation;N&&(y.envMap.value=N,ps.copy(D),ps.x*=-1,ps.y*=-1,ps.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(ps)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function w1(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const D=N.program;s.uniformBlockBinding(B,D)}function p(B,N){let D=l[B.id];D===void 0&&(b(B),D=v(B),l[B.id]=D,B.addEventListener("dispose",y));const Z=N.program;s.updateUBOMapping(B,Z);const G=e.render.frame;u[B.id]!==G&&(S(B),u[B.id]=G)}function v(B){const N=x();B.__bindingPointIndex=N;const D=o.createBuffer(),Z=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,Z,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function x(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],D=B.uniforms,Z=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,z=D.length;G<z;G++){const j=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,R=j.length;w<R;w++){const F=j[w];if(M(F,G,w,Z)===!0){const rt=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let ht=0;for(let mt=0;mt<at.length;mt++){const O=at[mt],K=C(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,rt+ht,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,ht),ht+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,N,D,Z){const G=B.value,z=N+"_"+D;if(Z[z]===void 0)return typeof G=="number"||typeof G=="boolean"?Z[z]=G:Z[z]=G.clone(),!0;{const j=Z[z];if(typeof G=="number"||typeof G=="boolean"){if(j!==G)return Z[z]=G,!0}else if(j.equals(G)===!1)return j.copy(G),!0}return!1}function b(B){const N=B.uniforms;let D=0;const Z=16;for(let z=0,j=N.length;z<j;z++){const w=Array.isArray(N[z])?N[z]:[N[z]];for(let R=0,F=w.length;R<F;R++){const rt=w[R],at=Array.isArray(rt.value)?rt.value:[rt.value];for(let ht=0,mt=at.length;ht<mt;ht++){const O=at[ht],K=C(O),Y=D%Z,yt=Y%K.boundary,Tt=Y+yt;D+=yt,Tt!==0&&Z-Tt<K.storage&&(D+=Z-Tt),rt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=K.storage}}}const G=D%Z;return G>0&&(D+=Z-G),B.__size=D,B.__cache={},this}function C(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function y(B){const N=B.target;N.removeEventListener("dispose",y);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class D1{constructor(e={}){const{canvas:i=oy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,_=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let Z=!1,G=0,z=0,j=null,w=-1,R=null;const F=new $e,rt=new $e;let at=null;const ht=new ye(0);let mt=0,O=i.width,K=i.height,Y=1,yt=null,Tt=null;const L=new $e(0,0,O,K),tt=new $e(0,0,O,K);let St=!1;const q=new Td;let ut=!1,Mt=!1;this.transmissionResolutionScale=1;const xt=new Ye,Pt=new Ye,Gt=new st,jt=new $e,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ue(){return j===null?Y:1}let I=s;function Tn(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gd}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),I===null){const X="webgl2";if(I=Tn(X,A),I===null)throw Tn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,de,Wt,De,Xt,U,T,et,dt,Et,gt,Vt,wt,Bt,pe,At,It,Kt,kt,Ot,Jt,ae,Ne,k;function Rt(){ce=new HT(I),ce.init(),ae=new M1(I,ce),de=new NT(I,ce,e,ae),Wt=new S1(I,ce),de.reverseDepthBuffer&&S&&Wt.buffers.depth.setReversed(!0),De=new kT(I),Xt=new o1,U=new y1(I,ce,Wt,Xt,de,ae,De),T=new zT(D),et=new FT(D),dt=new Zy(I),Ne=new UT(I,dt),Et=new GT(I,dt,De,Ne),gt=new WT(I,Et,dt,De),kt=new XT(I,de,U),At=new OT(Xt),Vt=new r1(D,T,et,ce,de,Ne,At),wt=new C1(D,Xt),Bt=new c1,pe=new m1(ce),Kt=new DT(D,T,et,Wt,gt,M,m),It=new v1(D,gt,de),k=new w1(I,De,de,Wt),Ot=new LT(I,ce,De),Jt=new VT(I,ce,De),De.programs=Vt.programs,D.capabilities=de,D.extensions=ce,D.properties=Xt,D.renderLists=Bt,D.shadowMap=It,D.state=Wt,D.info=De}Rt();const lt=new A1(D,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(O,K,!1))},this.getSize=function(A){return A.set(O,K)},this.setSize=function(A,X,nt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,K=X,i.width=Math.floor(A*Y),i.height=Math.floor(X*Y),nt===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,X,nt){O=A,K=X,Y=nt,i.width=Math.floor(A*nt),i.height=Math.floor(X*nt),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,X,nt,it){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,X,nt,it),Wt.viewport(F.copy(L).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,X,nt,it){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,X,nt,it),Wt.scissor(rt.copy(tt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Wt.setScissorTest(St=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,nt=!0){let it=0;if(A){let V=!1;if(j!==null){const bt=j.texture.format;V=bt===Md||bt===yd||bt===Sd}if(V){const bt=j.texture.type,Ut=bt===oa||bt===Ms||bt===zo||bt===br||bt===vd||bt===xd,Nt=Kt.getClearColor(),zt=Kt.getClearAlpha(),te=Nt.r,ee=Nt.g,qt=Nt.b;Ut?(b[0]=te,b[1]=ee,b[2]=qt,b[3]=zt,I.clearBufferuiv(I.COLOR,0,b)):(C[0]=te,C[1]=ee,C[2]=qt,C[3]=zt,I.clearBufferiv(I.COLOR,0,C))}else it|=I.COLOR_BUFFER_BIT}X&&(it|=I.DEPTH_BUFFER_BIT),nt&&(it|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Kt.dispose(),Bt.dispose(),pe.dispose(),Xt.dispose(),T.dispose(),et.dispose(),gt.dispose(),Ne.dispose(),k.dispose(),Vt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Lr),lt.removeEventListener("sessionend",Nr),Ti.stop()};function vt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;const A=De.autoReset,X=It.enabled,nt=It.autoUpdate,it=It.needsUpdate,V=It.type;Rt(),De.autoReset=A,It.enabled=X,It.autoUpdate=nt,It.needsUpdate=it,It.type=V}function Dt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const X=A.target;X.removeEventListener("dispose",$t),We(X)}function We(A){ln(A),Xt.remove(A)}function ln(A){const X=Xt.get(A).programs;X!==void 0&&(X.forEach(function(nt){Vt.releaseProgram(nt)}),A.isShaderMaterial&&Vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,nt,it,V,bt){X===null&&(X=Ge);const Ut=V.isMesh&&V.matrixWorld.determinant()<0,Nt=zr(A,X,nt,it,V);Wt.setMaterial(it,Ut);let zt=nt.index,te=1;if(it.wireframe===!0){if(zt=Et.getWireframeAttribute(nt),zt===void 0)return;te=2}const ee=nt.drawRange,qt=nt.attributes.position;let _e=ee.start*te,ve=(ee.start+ee.count)*te;bt!==null&&(_e=Math.max(_e,bt.start*te),ve=Math.min(ve,(bt.start+bt.count)*te)),zt!==null?(_e=Math.max(_e,0),ve=Math.min(ve,zt.count)):qt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,qt.count));const Ve=ve-_e;if(Ve<0||Ve===1/0)return;Ne.setup(V,it,Nt,nt,zt);let Te,ne=Ot;if(zt!==null&&(Te=dt.get(zt),ne=Jt,ne.setIndex(Te)),V.isMesh)it.wireframe===!0?(Wt.setLineWidth(it.wireframeLinewidth*ue()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(V.isLine){let Zt=it.linewidth;Zt===void 0&&(Zt=1),Wt.setLineWidth(Zt*ue()),V.isLineSegments?ne.setMode(I.LINES):V.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else V.isPoints?ne.setMode(I.POINTS):V.isSprite&&ne.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Zt=V._multiDrawStarts,cn=V._multiDrawCounts,Me=V._multiDrawCount,Nn=zt?dt.get(zt).bytesPerElement:1,di=Xt.get(it).currentProgram.getUniforms();for(let wn=0;wn<Me;wn++)di.setValue(I,"_gl_DrawID",wn),ne.render(Zt[wn]/Nn,cn[wn])}else if(V.isInstancedMesh)ne.renderInstances(_e,Ve,V.count);else if(nt.isInstancedBufferGeometry){const Zt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,cn=Math.min(nt.instanceCount,Zt);ne.renderInstances(_e,Ve,cn)}else ne.render(_e,Ve)};function Ee(A,X,nt){A.transparent===!0&&A.side===ia&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,je(A,X,nt),A.side=Va,A.needsUpdate=!0,je(A,X,nt),A.side=ia):je(A,X,nt)}this.compile=function(A,X,nt=null){nt===null&&(nt=A),_=pe.get(nt),_.init(X),N.push(_),nt.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),A!==nt&&A.traverseVisible(function(V){V.isLight&&V.layers.test(X.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights();const it=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const bt=V.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const Nt=bt[Ut];Ee(Nt,nt,V),it.add(Nt)}else Ee(bt,nt,V),it.add(bt)}),_=N.pop(),it},this.compileAsync=function(A,X,nt=null){const it=this.compile(A,X,nt);return new Promise(V=>{function bt(){if(it.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&it.delete(Ut)}),it.size===0){V(A);return}setTimeout(bt,10)}ce.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let gn=null;function fi(A){gn&&gn(A)}function Lr(){Ti.stop()}function Nr(){Ti.start()}const Ti=new K0;Ti.setAnimationLoop(fi),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){gn=A,lt.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},lt.addEventListener("sessionstart",Lr),lt.addEventListener("sessionend",Nr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,X,j),_=pe.get(A,N.length),_.init(X),N.push(_),Pt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,ut=At.init(this.clippingPlanes,Mt),y=Bt.get(A,B.length),y.init(),B.push(y),lt.enabled===!0&&lt.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&Xa(bt,X,-1/0,D.sortObjects)}Xa(A,X,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(yt,Tt),Fe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Fe&&Kt.addToRenderList(y,A),this.info.render.frame++,ut===!0&&At.beginShadows();const nt=_.state.shadowsArray;It.render(nt,A,X),ut===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=y.opaque,V=y.transmissive;if(_.setupLights(),X.isArrayCamera){const bt=X.cameras;if(V.length>0)for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++){const zt=bt[Ut];Or(it,V,A,zt)}Fe&&Kt.render(A);for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++){const zt=bt[Ut];bs(y,A,zt,zt.viewport)}}else V.length>0&&Or(it,V,A,X),Fe&&Kt.render(A),bs(y,A,X);j!==null&&z===0&&(U.updateMultisampleRenderTarget(j),U.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(D,A,X),Ne.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],ut===!0&&At.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Xa(A,X,nt,it){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)nt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){it&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const Ut=gt.update(A),Nt=A.material;Nt.visible&&y.push(A,Ut,Nt,nt,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Ut=gt.update(A),Nt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),jt.copy(Ut.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(Nt)){const zt=Ut.groups;for(let te=0,ee=zt.length;te<ee;te++){const qt=zt[te],_e=Nt[qt.materialIndex];_e&&_e.visible&&y.push(A,Ut,_e,nt,jt.z,qt)}}else Nt.visible&&y.push(A,Ut,Nt,nt,jt.z,null)}}const bt=A.children;for(let Ut=0,Nt=bt.length;Ut<Nt;Ut++)Xa(bt[Ut],X,nt,it)}function bs(A,X,nt,it){const V=A.opaque,bt=A.transmissive,Ut=A.transparent;_.setupLightsView(nt),ut===!0&&At.setGlobalState(D.clippingPlanes,nt),it&&Wt.viewport(F.copy(it)),V.length>0&&Wa(V,X,nt),bt.length>0&&Wa(bt,X,nt),Ut.length>0&&Wa(Ut,X,nt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Or(A,X,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[it.id]===void 0&&(_.state.transmissionRenderTarget[it.id]=new Es(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Po:oa,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const bt=_.state.transmissionRenderTarget[it.id],Ut=it.viewport||F;bt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(bt),D.getClearColor(ht),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),Fe&&Kt.render(nt);const zt=D.toneMapping;D.toneMapping=Ha;const te=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),_.setupLightsView(it),ut===!0&&At.setGlobalState(D.clippingPlanes,it),Wa(A,nt,it),U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let qt=0,_e=X.length;qt<_e;qt++){const ve=X[qt],Ve=ve.object,Te=ve.geometry,ne=ve.material,Zt=ve.group;if(ne.side===ia&&Ve.layers.test(it.layers)){const cn=ne.side;ne.side=Vn,ne.needsUpdate=!0,hi(Ve,nt,it,Te,ne,Zt),ne.side=cn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt))}D.setRenderTarget(Nt),D.setClearColor(ht,mt),te!==void 0&&(it.viewport=te),D.toneMapping=zt}function Wa(A,X,nt){const it=X.isScene===!0?X.overrideMaterial:null;for(let V=0,bt=A.length;V<bt;V++){const Ut=A[V],Nt=Ut.object,zt=Ut.geometry,te=it===null?Ut.material:it,ee=Ut.group;Nt.layers.test(nt.layers)&&hi(Nt,X,nt,zt,te,ee)}}function hi(A,X,nt,it,V,bt){A.onBeforeRender(D,X,nt,it,V,bt),A.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(D,X,nt,it,A,bt),V.transparent===!0&&V.side===ia&&V.forceSinglePass===!1?(V.side=Vn,V.needsUpdate=!0,D.renderBufferDirect(nt,X,it,V,A,bt),V.side=Va,V.needsUpdate=!0,D.renderBufferDirect(nt,X,it,V,A,bt),V.side=ia):D.renderBufferDirect(nt,X,it,V,A,bt),A.onAfterRender(D,X,nt,it,V,bt)}function je(A,X,nt){X.isScene!==!0&&(X=Ge);const it=Xt.get(A),V=_.state.lights,bt=_.state.shadowsArray,Ut=V.state.version,Nt=Vt.getParameters(A,V.state,bt,X,nt),zt=Vt.getProgramCacheKey(Nt);let te=it.programs;it.environment=A.isMeshStandardMaterial?X.environment:null,it.fog=X.fog,it.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",$t),te=new Map,it.programs=te);let ee=te.get(zt);if(ee!==void 0){if(it.currentProgram===ee&&it.lightsStateVersion===Ut)return Ni(A,Nt),ee}else Nt.uniforms=Vt.getUniforms(A),A.onBeforeCompile(Nt,D),ee=Vt.acquireProgram(Nt,zt),te.set(zt,ee),it.uniforms=Nt.uniforms;const qt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=At.uniform),Ni(A,Nt),it.needsLights=zc(A),it.lightsStateVersion=Ut,it.needsLights&&(qt.ambientLightColor.value=V.state.ambient,qt.lightProbe.value=V.state.probe,qt.directionalLights.value=V.state.directional,qt.directionalLightShadows.value=V.state.directionalShadow,qt.spotLights.value=V.state.spot,qt.spotLightShadows.value=V.state.spotShadow,qt.rectAreaLights.value=V.state.rectArea,qt.ltc_1.value=V.state.rectAreaLTC1,qt.ltc_2.value=V.state.rectAreaLTC2,qt.pointLights.value=V.state.point,qt.pointLightShadows.value=V.state.pointShadow,qt.hemisphereLights.value=V.state.hemi,qt.directionalShadowMap.value=V.state.directionalShadowMap,qt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,qt.spotShadowMap.value=V.state.spotShadowMap,qt.spotLightMatrix.value=V.state.spotLightMatrix,qt.spotLightMap.value=V.state.spotLightMap,qt.pointShadowMap.value=V.state.pointShadowMap,qt.pointShadowMatrix.value=V.state.pointShadowMatrix),it.currentProgram=ee,it.uniformsList=null,ee}function _n(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Tc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ni(A,X){const nt=Xt.get(A);nt.outputColorSpace=X.outputColorSpace,nt.batching=X.batching,nt.batchingColor=X.batchingColor,nt.instancing=X.instancing,nt.instancingColor=X.instancingColor,nt.instancingMorph=X.instancingMorph,nt.skinning=X.skinning,nt.morphTargets=X.morphTargets,nt.morphNormals=X.morphNormals,nt.morphColors=X.morphColors,nt.morphTargetsCount=X.morphTargetsCount,nt.numClippingPlanes=X.numClippingPlanes,nt.numIntersection=X.numClipIntersection,nt.vertexAlphas=X.vertexAlphas,nt.vertexTangents=X.vertexTangents,nt.toneMapping=X.toneMapping}function zr(A,X,nt,it,V){X.isScene!==!0&&(X=Ge),U.resetTextureUnits();const bt=X.fog,Ut=it.isMeshStandardMaterial?X.environment:null,Nt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rr,zt=(it.isMeshStandardMaterial?et:T).get(it.envMap||Ut),te=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ee=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),qt=!!nt.morphAttributes.position,_e=!!nt.morphAttributes.normal,ve=!!nt.morphAttributes.color;let Ve=Ha;it.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Te=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ne=Te!==void 0?Te.length:0,Zt=Xt.get(it),cn=_.state.lights;if(ut===!0&&(Mt===!0||A!==R)){const Ze=A===R&&it.id===w;At.setState(it,A,Ze)}let Me=!1;it.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==cn.state.version||Zt.outputColorSpace!==Nt||V.isBatchedMesh&&Zt.batching===!1||!V.isBatchedMesh&&Zt.batching===!0||V.isBatchedMesh&&Zt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Zt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Zt.instancing===!1||!V.isInstancedMesh&&Zt.instancing===!0||V.isSkinnedMesh&&Zt.skinning===!1||!V.isSkinnedMesh&&Zt.skinning===!0||V.isInstancedMesh&&Zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Zt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Zt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Zt.instancingMorph===!1&&V.morphTexture!==null||Zt.envMap!==zt||it.fog===!0&&Zt.fog!==bt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==ee||Zt.morphTargets!==qt||Zt.morphNormals!==_e||Zt.morphColors!==ve||Zt.toneMapping!==Ve||Zt.morphTargetsCount!==ne)&&(Me=!0):(Me=!0,Zt.__version=it.version);let Nn=Zt.currentProgram;Me===!0&&(Nn=je(it,X,V));let di=!1,wn=!1,dn=!1;const Oe=Nn.getUniforms(),Dn=Zt.uniforms;if(Wt.useProgram(Nn.program)&&(di=!0,wn=!0,dn=!0),it.id!==w&&(w=it.id,wn=!0),di||R!==A){Wt.buffers.depth.getReversed()?(xt.copy(A.projectionMatrix),cy(xt),uy(xt),Oe.setValue(I,"projectionMatrix",xt)):Oe.setValue(I,"projectionMatrix",A.projectionMatrix),Oe.setValue(I,"viewMatrix",A.matrixWorldInverse);const vn=Oe.map.cameraPosition;vn!==void 0&&vn.setValue(I,Gt.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&Oe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Oe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,wn=!0,dn=!0)}if(V.isSkinnedMesh){Oe.setOptional(I,V,"bindMatrix"),Oe.setOptional(I,V,"bindMatrixInverse");const Ze=V.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Oe.setValue(I,"boneTexture",Ze.boneTexture,U))}V.isBatchedMesh&&(Oe.setOptional(I,V,"batchingTexture"),Oe.setValue(I,"batchingTexture",V._matricesTexture,U),Oe.setOptional(I,V,"batchingIdTexture"),Oe.setValue(I,"batchingIdTexture",V._indirectTexture,U),Oe.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Oe.setValue(I,"batchingColorTexture",V._colorsTexture,U));const bn=nt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&kt.update(V,nt,Nn),(wn||Zt.receiveShadow!==V.receiveShadow)&&(Zt.receiveShadow=V.receiveShadow,Oe.setValue(I,"receiveShadow",V.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Dn.envMap.value=zt,Dn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&X.environment!==null&&(Dn.envMapIntensity.value=X.environmentIntensity),wn&&(Oe.setValue(I,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Oc(Dn,dn),bt&&it.fog===!0&&wt.refreshFogUniforms(Dn,bt),wt.refreshMaterialUniforms(Dn,it,Y,K,_.state.transmissionRenderTarget[A.id]),Tc.upload(I,_n(Zt),Dn,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Tc.upload(I,_n(Zt),Dn,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Oe.setValue(I,"center",V.center),Oe.setValue(I,"modelViewMatrix",V.modelViewMatrix),Oe.setValue(I,"normalMatrix",V.normalMatrix),Oe.setValue(I,"modelMatrix",V.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Ze=it.uniformsGroups;for(let vn=0,As=Ze.length;vn<As;vn++){const On=Ze[vn];k.update(On,Nn),k.bind(On,Nn)}}return Nn}function Oc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function zc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,X,nt){Xt.get(A.texture).__webglTexture=X,Xt.get(A.depthTexture).__webglTexture=nt;const it=Xt.get(A);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const nt=Xt.get(A);nt.__webglFramebuffer=X,nt.__useDefaultFramebuffer=X===void 0};const Ho=I.createFramebuffer();this.setRenderTarget=function(A,X=0,nt=0){j=A,G=X,z=nt;let it=!0,V=null,bt=!1,Ut=!1;if(A){const zt=Xt.get(A);if(zt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),it=!1;else if(zt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(zt.__hasExternalTextures)U.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(zt.__boundDepthTexture!==qt){if(qt!==null&&Xt.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ut=!0);const ee=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?V=ee[X][nt]:V=ee[X],bt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?V=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?V=ee[nt]:V=ee,F.copy(A.viewport),rt.copy(A.scissor),at=A.scissorTest}else F.copy(L).multiplyScalar(Y).floor(),rt.copy(tt).multiplyScalar(Y).floor(),at=St;if(nt!==0&&(V=Ho),Wt.bindFramebuffer(I.FRAMEBUFFER,V)&&it&&Wt.drawBuffers(A,V),Wt.viewport(F),Wt.scissor(rt),Wt.setScissorTest(at),bt){const zt=Xt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,zt.__webglTexture,nt)}else if(Ut){const zt=Xt.get(A.texture),te=X;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,nt,te)}else if(A!==null&&nt!==0){const zt=Xt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,nt)}w=-1},this.readRenderTargetPixels=function(A,X,nt,it,V,bt,Ut){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Wt.bindFramebuffer(I.FRAMEBUFFER,Nt);try{const zt=A.texture,te=zt.format,ee=zt.type;if(!de.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-it&&nt>=0&&nt<=A.height-V&&I.readPixels(X,nt,it,V,ae.convert(te),ae.convert(ee),bt)}finally{const zt=j!==null?Xt.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,X,nt,it,V,bt,Ut){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){const zt=A.texture,te=zt.format,ee=zt.type;if(!de.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-it&&nt>=0&&nt<=A.height-V){Wt.bindFramebuffer(I.FRAMEBUFFER,Nt);const qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),I.readPixels(X,nt,it,V,ae.convert(te),ae.convert(ee),0);const _e=j!==null?Xt.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,_e);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ly(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(qt),I.deleteSync(ve),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,nt=0){A.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const it=Math.pow(2,-nt),V=Math.floor(A.image.width*it),bt=Math.floor(A.image.height*it),Ut=X!==null?X.x:0,Nt=X!==null?X.y:0;U.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,nt,0,0,Ut,Nt,V,bt),Wt.unbindTexture()};const qa=I.createFramebuffer(),Pr=I.createFramebuffer();this.copyTextureToTexture=function(A,X,nt=null,it=null,V=0,bt=null){A.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,A=arguments[1],X=arguments[2],bt=arguments[3]||0,nt=null),bt===null&&(V!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=V,V=0):bt=0);let Ut,Nt,zt,te,ee,qt,_e,ve,Ve;const Te=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(nt!==null)Ut=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,zt=nt.isBox3?nt.max.z-nt.min.z:1,te=nt.min.x,ee=nt.min.y,qt=nt.isBox3?nt.min.z:0;else{const bn=Math.pow(2,-V);Ut=Math.floor(Te.width*bn),Nt=Math.floor(Te.height*bn),A.isDataArrayTexture?zt=Te.depth:A.isData3DTexture?zt=Math.floor(Te.depth*bn):zt=1,te=0,ee=0,qt=0}it!==null?(_e=it.x,ve=it.y,Ve=it.z):(_e=0,ve=0,Ve=0);const ne=ae.convert(X.format),Zt=ae.convert(X.type);let cn;X.isData3DTexture?(U.setTexture3D(X,0),cn=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(U.setTexture2DArray(X,0),cn=I.TEXTURE_2D_ARRAY):(U.setTexture2D(X,0),cn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),Nn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),di=I.getParameter(I.UNPACK_SKIP_PIXELS),wn=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const Oe=A.isDataArrayTexture||A.isData3DTexture,Dn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const bn=Xt.get(A),Ze=Xt.get(X),vn=Xt.get(bn.__renderTarget),As=Xt.get(Ze.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,vn.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let On=0;On<zt;On++)Oe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,V,qt+On),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(X).__webglTexture,bt,Ve+On)),I.blitFramebuffer(te,ee,Ut,Nt,_e,ve,Ut,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||Xt.has(A)){const bn=Xt.get(A),Ze=Xt.get(X);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,qa),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pr);for(let vn=0;vn<zt;vn++)Oe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,V,qt+vn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,V),Dn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,bt,Ve+vn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ze.__webglTexture,bt),V!==0?I.blitFramebuffer(te,ee,Ut,Nt,_e,ve,Ut,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):Dn?I.copyTexSubImage3D(cn,bt,_e,ve,Ve+vn,te,ee,Ut,Nt):I.copyTexSubImage2D(cn,bt,_e,ve,te,ee,Ut,Nt);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Dn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(cn,bt,_e,ve,Ve,Ut,Nt,zt,ne,Zt,Te.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(cn,bt,_e,ve,Ve,Ut,Nt,zt,ne,Te.data):I.texSubImage3D(cn,bt,_e,ve,Ve,Ut,Nt,zt,ne,Zt,Te):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,_e,ve,Ut,Nt,ne,Zt,Te.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,_e,ve,Te.width,Te.height,ne,Te.data):I.texSubImage2D(I.TEXTURE_2D,bt,_e,ve,Ut,Nt,ne,Zt,Te);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,di),I.pixelStorei(I.UNPACK_SKIP_ROWS,wn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),bt===0&&X.generateMipmaps&&I.generateMipmap(cn),Wt.unbindTexture()},this.copyTextureToTexture3D=function(A,X,nt=null,it=null,V=0){return A.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,A=arguments[2],X=arguments[3],V=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,nt,it,V)},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Wt.unbindTexture()},this.resetState=function(){G=0,z=0,j=null,Wt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=o=>{const e=L1(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ah={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},O1=Je.createContext({}),z1=()=>Je.useContext(O1),P1=Je.forwardRef(({color:o,size:e,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},m)=>{const{size:p=24,strokeWidth:v=2,absoluteStrokeWidth:x=!1,color:S="currentColor",className:M=""}=z1()??{},b=s??x?Number(i??v)*24/Number(e??p):i??v;return Je.createElement("svg",{ref:m,...Ah,width:e??p??Ah.width,height:e??p??Ah.height,stroke:o??S,strokeWidth:b,className:ev("lucide",M,l),...!u&&!N1(d)&&{"aria-hidden":"true"},...d},[...h.map(([C,y])=>Je.createElement(C,y)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=(o,e)=>{const i=Je.forwardRef(({className:s,...l},u)=>Je.createElement(P1,{ref:u,iconNode:e,className:ev(`lucide-${U1(_0(o))}`,`lucide-${o}`,s),...l}));return i.displayName=_0(o),i};/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],v0=Ts("activity",B1);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],F1=Ts("circle-alert",I1);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],G1=Ts("download",H1);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],k1=Ts("layers",V1);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],W1=Ts("settings",X1);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],Y1=Ts("sliders-vertical",q1);/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Z1=Ts("terminal",j1),Rh="/api";function K1(){const[o,e]=Je.useState(1),[i,s]=Je.useState(.1),[l,u]=Je.useState(.01),[h,d]=Je.useState(.002),[m,p]=Je.useState("glass"),[v,x]=Je.useState("cad"),[S,M]=Je.useState("Custom"),[b,C]=Je.useState(null),[y,_]=Je.useState(null),[B,N]=Je.useState(!1),[D,Z]=Je.useState(null),G=Je.useRef(null);Je.useEffect(()=>{(async()=>{N(!0),Z(null);try{const R=new URLSearchParams({length:o,width:i,depth:l,velocity:h}),[F,rt]=await Promise.all([fetch(`${Rh}/simulate?${R}`),fetch(`${Rh}/velocity_profile?${R}`)]);if(!F.ok||!rt.ok)throw new Error("Backend unreachable");const at=await F.json(),ht=await rt.json();C(at),_(ht)}catch(R){Z(R.message)}finally{N(!1)}})()},[o,i,l,h]),Je.useEffect(()=>{if(v!=="cad")return;const w=G.current;if(!w)return;const R=new zy;R.background=new ye(132631);const F=new ci(45,w.clientWidth/w.clientHeight,.1,100);F.position.set(1.5,.8,1.2);const rt=new D1({antialias:!0});rt.setSize(w.clientWidth,w.clientHeight),w.appendChild(rt.domElement);const at=new Wy(16777215,.8);R.add(at);const ht=new Xy(16777215,1.2);ht.position.set(5,10,7),R.add(ht);const mt=new No,O=new Ga(o,.005,i),K=new vh({color:413243,roughness:.9}),Y=new ui(O,K);Y.position.set(0,-.0025,0),mt.add(Y);const yt=new Ga(o,l,i),Tt=new vh({color:959977,transparent:!0,opacity:.4,roughness:.1}),L=new ui(yt,Tt);L.position.set(0,l/2,0),mt.add(L);const tt=new Ga(o,.002,i),St=new vh({color:m==="glass"?14870768:16638023,transparent:!0,opacity:.6,metalness:.2}),q=new ui(tt,St);q.position.set(0,l+.001,0),mt.add(q),mt.position.x=-o/2,R.add(mt);const ut=new Yy(4,20,3359061,1976635);ut.position.y=-.01,R.add(ut);let Mt;const xt=()=>{Mt=requestAnimationFrame(xt),mt.rotation.y+=.002,rt.render(R,F)};xt();const Pt=()=>{w&&(F.aspect=w.clientWidth/w.clientHeight,F.updateProjectionMatrix(),rt.setSize(w.clientWidth,w.clientHeight))};return window.addEventListener("resize",Pt),()=>{window.removeEventListener("resize",Pt),cancelAnimationFrame(Mt),R.traverse(Gt=>{Gt.geometry&&Gt.geometry.dispose(),Gt.material&&(Array.isArray(Gt.material)?Gt.material.forEach(jt=>jt.dispose()):Gt.material.dispose())}),rt.dispose(),w&&rt.domElement&&w.removeChild(rt.domElement)}},[o,i,l,m,v]);const z=async()=>{N(!0),Z(null);try{const w=new URLSearchParams({length:o,width:i,depth:l,velocity:h}),R=await fetch(`${Rh}/export_case?${w}`);if(!R.ok)throw new Error("Export failed");const F=await R.blob(),rt=URL.createObjectURL(F),at=document.createElement("a");at.href=rt,at.download="nostoc_case.zip",at.click(),URL.revokeObjectURL(rt)}catch(w){Z(w.message)}finally{N(!1)}},j=w=>{w==="laminar-low"?(e(.8),s(.08),u(.005),d(.001),p("glass"),M("Low Shear Laminar")):w==="nutrient-optimum"?(e(1.2),s(.15),u(.012),d(.0035),p("lexan"),M("Nutrient Optimum")):w==="high-throughput"?(e(1.5),s(.2),u(.02),d(.008),p("lexan"),M("High Throughput")):M("Custom")};return ft.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col",children:[ft.jsxs("header",{className:"border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between",children:[ft.jsxs("div",{className:"flex items-center space-x-3",children:[ft.jsx("div",{className:"bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 text-emerald-400",children:ft.jsx(k1,{className:"w-6 h-6"})}),ft.jsxs("div",{children:[ft.jsxs("h1",{className:"text-xl font-bold tracking-tight text-white flex items-center gap-2",children:["Solar Nostoc CAD & CFD Bridge ",ft.jsx("span",{className:"text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30",children:"v1.5"})]}),ft.jsx("p",{className:"text-xs text-slate-400",children:"Integrated OpenFOAM & Three.js Photobioreactor Design Dashboard"})]})]}),ft.jsxs("div",{className:"flex items-center space-x-2",children:[ft.jsx("button",{onClick:()=>x("cad"),className:`px-4 py-2 text-sm font-medium rounded-lg transition ${v==="cad"?"bg-emerald-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"3D CAD View"}),ft.jsx("button",{onClick:()=>x("cfd"),className:`px-4 py-2 text-sm font-medium rounded-lg transition ${v==="cfd"?"bg-emerald-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"OpenFOAM Sweep & CFD"})]})]}),ft.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row p-6 gap-6 max-w-7xl mx-auto w-full",children:[ft.jsxs("div",{className:"w-full lg:w-80 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6 shadow-xl",children:[ft.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[ft.jsxs("div",{className:"flex items-center gap-2 text-emerald-400 font-semibold",children:[ft.jsx(W1,{className:"w-5 h-5"}),ft.jsx("span",{children:"Reactor Parameters"})]}),ft.jsx("span",{className:"text-xs font-mono bg-slate-800 text-emerald-300 px-2 py-0.5 rounded border border-slate-700",children:S})]}),ft.jsxs("div",{children:[ft.jsxs("label",{className:"text-xs font-medium text-slate-400 block mb-2 flex items-center gap-1.5",children:[ft.jsx(Y1,{className:"w-3.5 h-3.5 text-emerald-400"})," Parameter Presets"]}),ft.jsxs("div",{className:"grid grid-cols-1 gap-1.5",children:[ft.jsxs("button",{onClick:()=>j("laminar-low"),className:"text-left px-3 py-1.5 text-xs rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50 transition flex justify-between items-center",children:[ft.jsx("span",{children:"Low Shear Laminar"}),ft.jsx("span",{className:"text-[10px] font-mono text-emerald-400",children:"1 mm/s"})]}),ft.jsxs("button",{onClick:()=>j("nutrient-optimum"),className:"text-left px-3 py-1.5 text-xs rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50 transition flex justify-between items-center",children:[ft.jsx("span",{children:"Nutrient Optimum"}),ft.jsx("span",{className:"text-[10px] font-mono text-emerald-400",children:"3.5 mm/s"})]}),ft.jsxs("button",{onClick:()=>j("high-throughput"),className:"text-left px-3 py-1.5 text-xs rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/50 transition flex justify-between items-center",children:[ft.jsx("span",{children:"High Throughput"}),ft.jsx("span",{className:"text-[10px] font-mono text-emerald-400",children:"8 mm/s"})]})]})]}),ft.jsxs("div",{className:"space-y-4 border-t border-slate-800 pt-4",children:[ft.jsxs("div",{children:[ft.jsxs("label",{className:"text-xs font-medium text-slate-400 flex justify-between mb-1",children:[ft.jsx("span",{children:"Channel Length"}),ft.jsxs("span",{className:"text-emerald-400 font-mono",children:[o," m"]})]}),ft.jsx("input",{type:"range",min:"0.2",max:"2.0",step:"0.1",value:o,onChange:w=>{e(parseFloat(w.target.value)),M("Custom")},className:"w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer"})]}),ft.jsxs("div",{children:[ft.jsxs("label",{className:"text-xs font-medium text-slate-400 flex justify-between mb-1",children:[ft.jsx("span",{children:"Channel Width"}),ft.jsxs("span",{className:"text-emerald-400 font-mono",children:[i," m"]})]}),ft.jsx("input",{type:"range",min:"0.05",max:"0.5",step:"0.05",value:i,onChange:w=>{s(parseFloat(w.target.value)),M("Custom")},className:"w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer"})]}),ft.jsxs("div",{children:[ft.jsxs("label",{className:"text-xs font-medium text-slate-400 flex justify-between mb-1",children:[ft.jsx("span",{children:"Water Depth"}),ft.jsxs("span",{className:"text-emerald-400 font-mono",children:[(l*1e3).toFixed(1)," mm"]})]}),ft.jsx("input",{type:"range",min:"0.002",max:"0.025",step:"0.001",value:l,onChange:w=>{u(parseFloat(w.target.value)),M("Custom")},className:"w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer"})]}),ft.jsxs("div",{children:[ft.jsxs("label",{className:"text-xs font-medium text-slate-400 flex justify-between mb-1",children:[ft.jsx("span",{children:"Inlet Velocity (U)"}),ft.jsxs("span",{className:"text-emerald-400 font-mono",children:[(h*1e3).toFixed(1)," mm/s"]})]}),ft.jsx("input",{type:"range",min:"0.0005",max:"0.025",step:"0.0005",value:h,onChange:w=>{d(parseFloat(w.target.value)),M("Custom")},className:"w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 cursor-pointer"})]}),ft.jsxs("div",{children:[ft.jsx("label",{className:"text-xs font-medium text-slate-400 block mb-1",children:"Cover Material"}),ft.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[ft.jsx("button",{onClick:()=>p("glass"),className:`py-2 text-xs font-medium rounded-lg border transition ${m==="glass"?"bg-emerald-500/20 border-emerald-500 text-emerald-300":"bg-slate-800 border-slate-700 text-slate-400"}`,children:"Glass"}),ft.jsx("button",{onClick:()=>p("lexan"),className:`py-2 text-xs font-medium rounded-lg border transition ${m==="lexan"?"bg-emerald-500/20 border-emerald-500 text-emerald-300":"bg-slate-800 border-slate-700 text-slate-400"}`,children:"Lexan"})]})]})]}),ft.jsxs("div",{className:"mt-auto bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[ft.jsxs("div",{className:"text-xs font-semibold text-slate-300 flex items-center gap-1.5",children:[ft.jsx(v0,{className:"w-4 h-4 text-emerald-400"}),ft.jsx("span",{children:"Hydrodynamic Metrics"})]}),B&&ft.jsx("div",{className:"text-xs text-slate-400",children:"Loading..."}),D&&ft.jsxs("div",{className:"text-xs text-red-400 flex items-center gap-1",children:[ft.jsx(F1,{className:"w-3 h-3"})," ",D]}),b&&ft.jsxs(ft.Fragment,{children:[ft.jsxs("div",{className:"text-xs text-slate-400 flex justify-between",children:[ft.jsx("span",{children:"Reynolds Number (Re):"}),ft.jsx("span",{className:"font-mono text-white",children:b.reynoldsNumber.toFixed(2)})]}),ft.jsxs("div",{className:"text-xs text-slate-400 flex justify-between",children:[ft.jsx("span",{children:"Volumetric Flow Rate:"}),ft.jsxs("span",{className:"font-mono text-white",children:[b.flowRateLpm.toFixed(2)," L/min"]})]}),ft.jsxs("div",{className:"text-xs text-slate-400 flex justify-between",children:[ft.jsx("span",{children:"Regime:"}),ft.jsx("span",{className:"font-mono text-white",children:b.regime})]})]})]})]}),ft.jsx("div",{className:"flex-1 flex flex-col bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl",children:v==="cad"?ft.jsxs("div",{className:"relative flex-1 w-full h-[500px] lg:h-auto flex flex-col",children:[ft.jsx("div",{ref:G,className:"flex-1 w-full cursor-grab active:cursor-grabbing"}),y&&ft.jsxs("div",{className:"absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur border border-slate-800 p-4 rounded-xl shadow-2xl w-72",children:[ft.jsxs("div",{className:"flex items-center justify-between mb-2",children:[ft.jsxs("span",{className:"text-xs font-semibold text-slate-300 flex items-center gap-1.5",children:[ft.jsx(v0,{className:"w-3.5 h-3.5 text-emerald-400"})," Velocity Profile Preview"]}),ft.jsx("span",{className:"text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded",children:"1D Parabolic"})]}),ft.jsx("div",{className:"h-28 w-full bg-slate-900 rounded-lg border border-slate-800 p-2",children:ft.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 200 100",children:[ft.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"90",stroke:"#475569",strokeWidth:"2"}),ft.jsx("line",{x1:"20",y1:"90",x2:"180",y2:"90",stroke:"#475569",strokeWidth:"2"}),ft.jsx("text",{x:"15",y:"15",fill:"#94a3b8",fontSize:"8",children:"Cover"}),ft.jsx("text",{x:"10",y:"95",fill:"#94a3b8",fontSize:"8",children:"Nostoc"}),y.points.map((w,R)=>{const rt=90-w.y/l*80,ht=20+w.u/y.maxU*160;return ft.jsx("circle",{cx:ht,cy:rt,r:"1.5",fill:"#0ea5e9"},R)}),ft.jsx("path",{d:`M ${y.points.map((w,R)=>{const rt=90-w.y/l*80,ht=20+w.u/y.maxU*160;return(R===0?"M":"L")+ht+" "+rt}).join(" ")}`,fill:"none",stroke:"#0ea5e9",strokeWidth:"2"}),ft.jsx("text",{x:"100",y:"55",fill:"#0ea5e9",fontSize:"9",fontFamily:"monospace",children:"U_max"})]})}),ft.jsxs("div",{className:"text-[10px] text-slate-400 mt-2 flex justify-between",children:[ft.jsx("span",{children:"Max Velocity:"}),ft.jsxs("span",{className:"font-mono text-white",children:[(y.maxU*1e3).toFixed(1)," mm/s"]})]})]}),ft.jsxs("div",{className:"absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400 flex items-center gap-2",children:[ft.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"Interactive 3D CAD Renderer (Three.js)"]})]}):ft.jsxs("div",{className:"flex-1 p-6 flex flex-col gap-6 overflow-y-auto",children:[ft.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-4",children:[ft.jsxs("div",{children:[ft.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[ft.jsx(Z1,{className:"w-5 h-5 text-emerald-400"})," OpenFOAM Sweep Configuration"]}),ft.jsx("p",{className:"text-xs text-slate-400",children:"Generated blockMeshDict and laminar simpleFoam solver parameters for Nostoc boundary layers."})]}),ft.jsxs("button",{onClick:z,disabled:B,className:"flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-medium transition shadow-lg shadow-emerald-900/20 disabled:opacity-50",children:[ft.jsx(G1,{className:"w-4 h-4"})," ",B?"Generating...":"Download Case ZIP"]})]}),ft.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[ft.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[ft.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Solver Target"}),ft.jsx("div",{className:"text-sm font-mono font-bold text-emerald-400",children:"simpleFoam (Laminar)"})]}),ft.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[ft.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Wall Shear Calculation"}),ft.jsx("div",{className:"text-sm font-mono font-bold text-emerald-400",children:"wallShearStress function"})]}),ft.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800",children:[ft.jsx("div",{className:"text-xs text-slate-400 mb-1",children:"Boundary Condition"}),ft.jsx("div",{className:"text-sm font-mono font-bold text-emerald-400",children:"nostocSurface (noSlip)"})]})]}),D&&ft.jsx("div",{className:"bg-red-900/20 border border-red-800 text-red-300 p-3 rounded text-xs",children:D}),ft.jsx("div",{className:"bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs text-emerald-300 overflow-x-auto",children:ft.jsx("pre",{children:`# OpenFOAM case will be generated with:
LENGTH=${o}
WIDTH=${i}
DEPTH=${l}
VELOCITY=${h}
`})})]})})]})]})}vS.createRoot(document.getElementById("root")).render(ft.jsx(uS.StrictMode,{children:ft.jsx(K1,{})}));

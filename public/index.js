!function n(r,t,e){function u(i,a){if(!t[i]){if(!r[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(o)return o(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[i]={exports:{}};r[i][0].call(l.exports,(function(n){return u(r[i][1][n]||n)}),l,l.exports,n,r,t,e)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<e.length;i++)u(e[i]);return u}({1:[function(n,r,t){(function(n){!function(n,e){"object"==typeof t&&void 0!==r?r.exports=e():"function"==typeof define&&define.amd?define("underscore",e):(n=n||self,function(){var r=n._,t=n._=e();t.noConflict=function(){return n._=r,t}}())}(this,(function(){var r="object"==typeof self&&self.self===self&&self||"object"==typeof n&&n.global===n&&n||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,o=t.push,i=t.slice,a=e.toString,c=e.hasOwnProperty,f="undefined"!=typeof ArrayBuffer,l=Array.isArray,s=Object.keys,p=Object.create,h=f&&ArrayBuffer.isView,v=isNaN,d=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),y=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function b(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var o=Array(r+1);for(u=0;u<r;u++)o[u]=arguments[u];return o[r]=e,n.apply(this,o)}}function w(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function _(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function j(n){return function(r){return a.call(r)==="[object "+n+"]"}}var x=j("String"),S=j("Number"),A=j("Date"),E=j("RegExp"),O=j("Error"),M=j("Symbol"),N=j("Map"),T=j("WeakMap"),k=j("Set"),R=j("WeakSet"),D=j("ArrayBuffer"),I=j("DataView"),q=l||j("Array"),B=j("Function"),F=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof F&&(B=function(n){return"function"==typeof n||!1});var V=B;function U(n,r){return null!=n&&c.call(n,r)}var C=j("Arguments");!function(){C(arguments)||(C=function(n){return U(n,"callee")})}();var $=C;function H(n){return S(n)&&v(n)}function K(n){return function(){return n}}function z(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function P(n){return function(r){return null==r?void 0:r[n]}}var J=P("byteLength"),L=z(J),W=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var G=f?function(n){return h?h(n)&&!I(n):L(n)&&W.test(a.call(n))}:K(!1),X=P("length"),Q=z(X);function Y(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=y.length,u=n.constructor,o=V(u)&&u.prototype||e,i="constructor";for(U(n,i)&&!r.contains(i)&&r.push(i);t--;)(i=y[t])in n&&n[i]!==o[i]&&!r.contains(i)&&r.push(i)}function Z(n){if(!w(n))return[];if(s)return s(n);var r=[];for(var t in n)U(n,t)&&r.push(t);return g&&Y(n,r),r}function nn(n,r){var t=Z(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function rn(n){return n instanceof rn?n:this instanceof rn?void(this._wrapped=n):new rn(n)}function tn(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var o=typeof n;return("function"===o||"object"===o||"object"==typeof r)&&function n(r,t,e,o){r instanceof rn&&(r=r._wrapped);t instanceof rn&&(t=t._wrapped);var i=a.call(r);if(i!==a.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":return n(new DataView(r),new DataView(t),e,o);case"[object DataView]":var c=J(r);if(c!==J(t))return!1;for(;c--;)if(r.getUint8(c)!==t.getUint8(c))return!1;return!0}if(G(r))return n(new DataView(r.buffer),new DataView(t.buffer),e,o);var f="[object Array]"===i;if(!f){if("object"!=typeof r||"object"!=typeof t)return!1;var l=r.constructor,s=t.constructor;if(l!==s&&!(V(l)&&l instanceof l&&V(s)&&s instanceof s)&&"constructor"in r&&"constructor"in t)return!1}o=o||[];var p=(e=e||[]).length;for(;p--;)if(e[p]===r)return o[p]===t;if(e.push(r),o.push(t),f){if((p=r.length)!==t.length)return!1;for(;p--;)if(!tn(r[p],t[p],e,o))return!1}else{var h,v=Z(r);if(p=v.length,Z(t).length!==p)return!1;for(;p--;)if(h=v[p],!U(t,h)||!tn(r[h],t[h],e,o))return!1}return e.pop(),o.pop(),!0}(n,r,t,e)}function en(n){if(!w(n))return[];var r=[];for(var t in n)r.push(t);return g&&Y(n,r),r}function un(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function on(n){for(var r={},t=Z(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function an(n){var r=[];for(var t in n)V(n[t])&&r.push(t);return r.sort()}function cn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,c=0;c<a;c++){var f=i[c];r&&void 0!==t[f]||(t[f]=o[f])}return t}}rn.VERSION="1.11.0",rn.prototype.value=function(){return this._wrapped},rn.prototype.valueOf=rn.prototype.toJSON=rn.prototype.value,rn.prototype.toString=function(){return String(this._wrapped)};var fn=cn(en),ln=cn(Z),sn=cn(en,!0);function pn(n){if(!w(n))return{};if(p)return p(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function hn(n){return w(n)?q(n)?n.slice():fn({},n):n}function vn(n){return n}function dn(n){return n=ln({},n),function(r){return nn(r,n)}}function gn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function yn(n){return q(n)?function(r){return gn(r,n)}:P(n)}function mn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}}function bn(n,r,t){return null==n?vn:V(n)?mn(n,r,t):w(n)&&!q(n)?dn(n):yn(n)}function wn(n,r){return bn(n,r,1/0)}function _n(n,r,t){return rn.iteratee!==wn?rn.iteratee(n,r):bn(n,r,t)}function jn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}rn.iteratee=wn;var xn=Date.now||function(){return(new Date).getTime()};function Sn(n){var r=function(r){return n[r]},t="(?:"+Z(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var An={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},En=Sn(An),On=Sn(on(An)),Mn=rn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Nn=/(.)^/,Tn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},kn=/\\|'|\r|\n|\u2028|\u2029/g;function Rn(n){return"\\"+Tn[n]}var Dn=0;function In(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=pn(n.prototype),i=n.apply(o,u);return w(i)?i:o}var qn=b((function(n,r){var t=qn.placeholder,e=function(){for(var u=0,o=r.length,i=Array(o),a=0;a<o;a++)i[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)i.push(arguments[u++]);return In(n,e,this,this,i)};return e}));qn.placeholder=rn;var Bn=b((function(n,r,t){if(!V(n))throw new TypeError("Bind must be called on a function");var e=b((function(u){return In(n,e,r,this,t.concat(u))}));return e}));function Fn(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=X(n);o<i;o++){var a=n[o];if(Q(a)&&(q(a)||$(a)))if(r>1)Fn(a,r-1,t,e),u=e.length;else for(var c=0,f=a.length;c<f;)e[u++]=a[c++];else t||(e[u++]=a)}return e}var Vn=b((function(n,r){var t=(r=Fn(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Bn(n[e],n)}return n}));var Un=b((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),Cn=qn(Un,rn,1);function $n(n){return function(){return!n.apply(this,arguments)}}function Hn(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var Kn=qn(Hn,2);function zn(n,r,t){r=_n(r,t);for(var e,u=Z(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function Pn(n){return function(r,t,e){t=_n(t,e);for(var u=X(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}var Jn=Pn(1),Ln=Pn(-1);function Wn(n,r,t,e){for(var u=(t=_n(t,e,1))(r),o=0,i=X(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function Gn(n,r,t){return function(e,u,o){var a=0,c=X(e);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+c,a):c=o>=0?Math.min(o+1,c):o+c+1;else if(t&&o&&c)return e[o=t(e,u)]===u?o:-1;if(u!=u)return(o=r(i.call(e,a,c),H))>=0?o+a:-1;for(o=n>0?a:c-1;o>=0&&o<c;o+=n)if(e[o]===u)return o;return-1}}var Xn=Gn(1,Jn,Wn),Qn=Gn(-1,Ln);function Yn(n,r,t){var e=(Q(n)?Jn:zn)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function Zn(n,r,t){var e,u;if(r=mn(r,t),Q(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=Z(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n}function nr(n,r,t){r=_n(r,t);for(var e=!Q(n)&&Z(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function rr(n){var r=function(r,t,e,u){var o=!Q(r)&&Z(r),i=(o||r).length,a=n>0?0:i-1;for(u||(e=r[o?o[a]:a],a+=n);a>=0&&a<i;a+=n){var c=o?o[a]:a;e=t(e,r[c],c,r)}return e};return function(n,t,e,u){var o=arguments.length>=3;return r(n,mn(t,u,4),e,o)}}var tr=rr(1),er=rr(-1);function ur(n,r,t){var e=[];return r=_n(r,t),Zn(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function or(n,r,t){r=_n(r,t);for(var e=!Q(n)&&Z(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function ir(n,r,t){r=_n(r,t);for(var e=!Q(n)&&Z(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function ar(n,r,t,e){return Q(n)||(n=un(n)),("number"!=typeof t||e)&&(t=0),Xn(n,r,t)>=0}var cr=b((function(n,r,t){var e,u;return V(r)?u=r:q(r)&&(e=r.slice(0,-1),r=r[r.length-1]),nr(n,(function(n){var o=u;if(!o){if(e&&e.length&&(n=gn(n,e)),null==n)return;o=n[r]}return null==o?o:o.apply(n,t)}))}));function fr(n,r){return nr(n,yn(r))}function lr(n,r,t){var e,u,o=-1/0,i=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=Q(n)?n:un(n)).length;a<c;a++)null!=(e=n[a])&&e>o&&(o=e);else r=_n(r,t),Zn(n,(function(n,t,e){((u=r(n,t,e))>i||u===-1/0&&o===-1/0)&&(o=n,i=u)}));return o}function sr(n,r,t){if(null==r||t)return Q(n)||(n=un(n)),n[jn(n.length-1)];var e=Q(n)?hn(n):un(n),u=X(e);r=Math.max(Math.min(r,u),0);for(var o=u-1,i=0;i<r;i++){var a=jn(i,o),c=e[i];e[i]=e[a],e[a]=c}return e.slice(0,r)}function pr(n,r){return function(t,e,u){var o=r?[[],[]]:{};return e=_n(e,u),Zn(t,(function(r,u){var i=e(r,u,t);n(o,r,i)})),o}}var hr=pr((function(n,r,t){U(n,t)?n[t].push(r):n[t]=[r]})),vr=pr((function(n,r,t){n[t]=r})),dr=pr((function(n,r,t){U(n,t)?n[t]++:n[t]=1})),gr=pr((function(n,r,t){n[t?0:1].push(r)}),!0),yr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mr(n,r,t){return r in t}var br=b((function(n,r){var t={},e=r[0];if(null==n)return t;V(e)?(r.length>1&&(e=mn(e,r[1])),r=en(n)):(e=mr,r=Fn(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}return t})),wr=b((function(n,r){var t,e=r[0];return V(e)?(e=$n(e),r.length>1&&(t=r[1])):(r=nr(Fn(r,!1,!1),String),e=function(n,t){return!ar(r,t)}),br(n,e,t)}));function _r(n,r,t){return i.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function jr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:_r(n,n.length-r)}function xr(n,r,t){return i.call(n,null==r||t?1:r)}var Sr=b((function(n,r){return r=Fn(r,!0,!0),ur(n,(function(n){return!ar(r,n)}))})),Ar=b((function(n,r){return Sr(n,r)}));function Er(n,r,t,e){_(r)||(e=t,t=r,r=!1),null!=t&&(t=_n(t,e));for(var u=[],o=[],i=0,a=X(n);i<a;i++){var c=n[i],f=t?t(c,i,n):c;r&&!t?(i&&o===f||u.push(c),o=f):t?ar(o,f)||(o.push(f),u.push(c)):ar(u,c)||u.push(c)}return u}var Or=b((function(n){return Er(Fn(n,!0,!0))}));function Mr(n){for(var r=n&&lr(n,X).length||0,t=Array(r),e=0;e<r;e++)t[e]=fr(n,e);return t}var Nr=b(Mr);function Tr(n,r){return n._chain?rn(r).chain():r}function kr(n){return Zn(an(n),(function(r){var t=rn[r]=n[r];rn.prototype[r]=function(){var n=[this._wrapped];return o.apply(n,arguments),Tr(this,t.apply(rn,n))}})),rn}Zn(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];rn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Tr(this,t)}})),Zn(["concat","join","slice"],(function(n){var r=t[n];rn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Tr(this,n)}}));var Rr=kr({__proto__:null,VERSION:"1.11.0",restArguments:b,isObject:w,isNull:function(n){return null===n},isUndefined:function(n){return void 0===n},isBoolean:_,isElement:function(n){return!(!n||1!==n.nodeType)},isString:x,isNumber:S,isDate:A,isRegExp:E,isError:O,isSymbol:M,isMap:N,isWeakMap:T,isSet:k,isWeakSet:R,isArrayBuffer:D,isDataView:I,isArray:q,isFunction:V,isArguments:$,isFinite:function(n){return!M(n)&&d(n)&&!isNaN(parseFloat(n))},isNaN:H,isTypedArray:G,isEmpty:function(n){return null==n||(Q(n)&&(q(n)||x(n)||$(n))?0===n.length:0===Z(n).length)},isMatch:nn,isEqual:function(n,r){return tn(n,r)},keys:Z,allKeys:en,values:un,pairs:function(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:on,functions:an,methods:an,extend:fn,extendOwn:ln,assign:ln,defaults:sn,create:function(n,r){var t=pn(n);return r&&ln(t,r),t},clone:hn,tap:function(n,r){return r(n),n},has:function(n,r){if(!q(r))return U(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!c.call(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=_n(r,t);for(var e=Z(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:vn,constant:K,noop:function(){},property:yn,propertyOf:function(n){return null==n?function(){}:function(r){return q(r)?gn(n,r):n[r]}},matcher:dn,matches:dn,times:function(n,r,t){var e=Array(Math.max(0,n));r=mn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:jn,now:xn,escape:En,unescape:On,templateSettings:Mn,template:function(n,r,t){!r&&t&&(r=t),r=sn({},r,rn.templateSettings);var e,u=RegExp([(r.escape||Nn).source,(r.interpolate||Nn).source,(r.evaluate||Nn).source].join("|")+"|$","g"),o=0,i="__p+='";n.replace(u,(function(r,t,e,u,a){return i+=n.slice(o,a).replace(kn,Rn),o=a+r.length,t?i+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(i+="';\n"+u+"\n__p+='"),r})),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{e=new Function(r.variable||"obj","_",i)}catch(n){throw n.source=i,n}var a=function(n){return e.call(this,n,rn)},c=r.variable||"obj";return a.source="function("+c+"){\n"+i+"}",a},result:function(n,r,t){q(r)||(r=[r]);var e=r.length;if(!e)return V(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=V(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Dn+"";return n?n+r:r},chain:function(n){var r=rn(n);return r._chain=!0,r},iteratee:wn,partial:qn,bind:Bn,bindAll:Vn,memoize:function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return U(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},delay:Un,defer:Cn,throttle:function(n,r,t){var e,u,o,i,a=0;t||(t={});var c=function(){a=!1===t.leading?0:xn(),e=null,i=n.apply(u,o),e||(u=o=null)},f=function(){var f=xn();a||!1!==t.leading||(a=f);var l=r-(f-a);return u=this,o=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=f,i=n.apply(u,o),e||(u=o=null)):e||!1===t.trailing||(e=setTimeout(c,l)),i};return f.cancel=function(){clearTimeout(e),a=0,e=u=o=null},f},debounce:function(n,r,t){var e,u,o=function(r,t){e=null,t&&(u=n.apply(r,t))},i=b((function(i){if(e&&clearTimeout(e),t){var a=!e;e=setTimeout(o,r),a&&(u=n.apply(this,i))}else e=Un(o,r,this,i);return u}));return i.cancel=function(){clearTimeout(e),e=null},i},wrap:function(n,r){return qn(r,n)},negate:$n,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:Hn,once:Kn,findKey:zn,findIndex:Jn,findLastIndex:Ln,sortedIndex:Wn,indexOf:Xn,lastIndexOf:Qn,find:Yn,detect:Yn,findWhere:function(n,r){return Yn(n,dn(r))},each:Zn,forEach:Zn,map:nr,collect:nr,reduce:tr,foldl:tr,inject:tr,reduceRight:er,foldr:er,filter:ur,select:ur,reject:function(n,r,t){return ur(n,$n(_n(r)),t)},every:or,all:or,some:ir,any:ir,contains:ar,includes:ar,include:ar,invoke:cr,pluck:fr,where:function(n,r){return ur(n,dn(r))},max:lr,min:function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=Q(n)?n:un(n)).length;a<c;a++)null!=(e=n[a])&&e<o&&(o=e);else r=_n(r,t),Zn(n,(function(n,t,e){((u=r(n,t,e))<i||u===1/0&&o===1/0)&&(o=n,i=u)}));return o},shuffle:function(n){return sr(n,1/0)},sample:sr,sortBy:function(n,r,t){var e=0;return r=_n(r,t),fr(nr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:hr,indexBy:vr,countBy:dr,partition:gr,toArray:function(n){return n?q(n)?i.call(n):x(n)?n.match(yr):Q(n)?nr(n,vn):un(n):[]},size:function(n){return null==n?0:Q(n)?n.length:Z(n).length},pick:br,omit:wr,first:jr,head:jr,take:jr,initial:_r,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:xr(n,Math.max(0,n.length-r))},rest:xr,tail:xr,drop:xr,compact:function(n){return ur(n,Boolean)},flatten:function(n,r){return Fn(n,r,!1)},without:Ar,uniq:Er,unique:Er,union:Or,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=X(n);e<u;e++){var o=n[e];if(!ar(r,o)){var i;for(i=1;i<t&&ar(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Sr,unzip:Mr,transpose:Mr,zip:Nr,object:function(n,r){for(var t={},e=0,u=X(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(i.call(n,e,e+=r));return t},mixin:kr,default:rn});return Rr._=Rr,Rr}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(n,r,t){const e=n("underscore"),u=n("./javascripts/generator"),o=ace.edit("ace-editor"),i=document.querySelector(".grammar-input"),a=document.querySelector(".grammar-output");function c(){return document.querySelector(".enable-caching").checked}function f(n){a.innerText=n}function l(){const n=o.getValue(),r=i.value;!function(n,r){sessionStorage.setItem("state",JSON.stringify({grammar:n,input:r}))}(n,r);let t=null;try{t=new Pasukon(n,{cache:c()})}catch(n){return f("Invalid grammar: "+n),void(i.disabled=!0)}try{i.disabled=!1;const n=t.parse(r);return e=prettyPrintJson.toHtml(n,{indent:2}),a.innerHTML=e,n}catch(n){f(n)}var e}function s(){try{const e=new u,i=new Pasukon(grammar,{cache:c()}),a=e.generate(JSON.stringify(i.parse(o.getValue())));n="grammar.js",r=a,(t=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(r)),t.setAttribute("download",n),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}catch(n){console.error(n)}var n,r,t}!function(){const n=e.throttle(l,500);o.setOptions({fontSize:"1rem",tabSize:2}),o.setTheme("ace/theme/sqlserver"),o.session.setMode("ace/mode/pasukon"),o.session.on("change",n),i.onkeyup=n,document.querySelector(".vim-mode").onchange=function(n){n.target.checked?o.setKeyboardHandler("ace/keyboard/vim"):o.setKeyboardHandler("")},document.querySelector(".btn.compile").onclick=s;const{grammar:r,input:t}=JSON.parse(sessionStorage.getItem("state"));r&&o.session.setValue(r),t&&(i.value=t),l()}()},{"./javascripts/generator":3,underscore:1}],3:[function(n,r,t){r.exports=class{generate(n){if(!n)return;let r=n;return r=this.inlineFunctions(r),r=this.inlineRegexes(r),r=this.wrapUMD(r),r}inlineFunctions(n){const r=n.matchAll(/"code":"((?:\\"|[^"])*?)"/g),t=[];for(const n of r)t.push(n[1].replace(/\\"/g,'"'));const e=n.split(/"code":"(?:\\"|[^"])*?"/),u=[];return e.forEach(n=>{u.push(n),t.length>0&&u.push(`"code":function($1,$2,$,$ctx){${t.shift()}}`)}),u.join("")}inlineRegexes(n){const r=n.matchAll(/{"type":"TOKEN_REGEX_MATCHER","regex":"((?:\\"|[^"])*?)"}/g),t=[];for(const n of r)t.push(this.escapeStringForRegex(n[1]));const e=n.split(/{"type":"TOKEN_REGEX_MATCHER","regex":"(?:\\"|[^"])*?"}/),u=[];return e.forEach(n=>{u.push(n),t.length>0&&u.push(`{"type":"TOKEN_REGEX_MATCHER","regex":/${t.shift()}/}`)}),u.join("")}escapeStringForRegex(n){return n.replace(/\//g,"\\/").replace(/\\\\/g,"\\")}wrapUMD(n){return`(function (root, factory) {\n  if (typeof module === 'object') {\n    module.exports = factory();\n  } else {\n    root.grammar = factory();\n  }\n}(this, function () { return ${n} }));`}}},{}]},{},[2]);
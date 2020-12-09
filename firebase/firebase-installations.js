!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).firebase)}(this,function(Ct){"use strict";try{(function(){function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=t(Ct),n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function c(t,a,s,u){return new(s=s||Promise)(function(n,e){function r(t){try{i(u.next(t))}catch(t){e(t)}}function o(t){try{i(u.throw(t))}catch(t){e(t)}}function i(t){var e;t.done?n(t.value):((e=t.value)instanceof s?e:new s(function(t){t(e)})).then(r,o)}i((u=u.apply(t,a||[])).next())})}function f(n,r){var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&e[0]?i.return:e[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,e[1])).done)return a;switch(i=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return s.label++,{value:e[1],done:!1};case 5:s.label++,i=e[1],e=[0];continue;case 7:e=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===e[0]||2===e[0])){s=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){s.label=e[1];break}if(6===e[0]&&s.label<a[1]){s.label=a[1],a=e;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(e);break}a[2]&&s.ops.pop(),s.trys.pop();continue}e=r.call(n,s)}catch(t){e=[6,t],i=0}finally{o=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function s(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||0<e--)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}(arguments[e]));return t}var o,i,u,l="FirebaseError",p=(o=Error,n(i=h,u=o),i.prototype=null===u?Object.create(u):(d.prototype=u.prototype,new d),h);function d(){this.constructor=i}function h(t,e,n){e=o.call(this,e)||this;return e.code=t,e.customData=n,e.name=l,Object.setPrototypeOf(e,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(e,v.prototype.create),e}var v=(y.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r,o=e[0]||{},i=this.service+"/"+t,t=this.errors[t],t=t?(r=o,t.replace(g,function(t,e){var n=r[e];return null!=n?String(n):"<"+e+"?>"})):"Error",t=this.serviceName+": "+t+" ("+i+").";return new p(i,t,o)},y);function y(t,e,n){this.service=t,this.serviceName=e,this.errors=n}var g=/\{\$([^}]+)}/g,b=(m.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},m.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},m.prototype.setServiceProps=function(t){return this.serviceProps=t,this},m);function m(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function w(n){return new Promise(function(t,e){n.onsuccess=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function S(n,r,o){var i,t=new Promise(function(t,e){w(i=n[r].apply(n,o)).then(t,e)});return t.request=i,t}function _(t,n,e){e.forEach(function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[n][e]},set:function(t){this[n][e]=t}})})}function I(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return S(this[n],t,arguments)})})}function C(e,n,r,t){t.forEach(function(t){t in r.prototype&&(e.prototype[t]=function(){return this[n][t].apply(this[n],arguments)})})}function j(t,r,e,n){n.forEach(function(n){n in e.prototype&&(t.prototype[n]=function(){return t=this[r],(e=S(t,n,arguments)).then(function(t){if(t)return new T(t,e.request)});var t,e})})}function k(t){this._index=t}function T(t,e){this._cursor=t,this._request=e}function x(t){this._store=t}function P(n){this._tx=n,this.complete=new Promise(function(t,e){n.oncomplete=function(){t()},n.onerror=function(){e(n.error)},n.onabort=function(){e(n.error)}})}function E(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new P(n)}function q(t){this._db=t}_(k,"_index",["name","keyPath","multiEntry","unique"]),I(k,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),j(k,"_index",IDBIndex,["openCursor","openKeyCursor"]),_(T,"_cursor",["direction","key","primaryKey","value"]),I(T,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(T.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),w(e._request).then(function(t){if(t)return new T(t,e._request)})})})}),x.prototype.createIndex=function(){return new k(this._store.createIndex.apply(this._store,arguments))},x.prototype.index=function(){return new k(this._store.index.apply(this._store,arguments))},_(x,"_store",["name","keyPath","indexNames","autoIncrement"]),I(x,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),j(x,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),C(x,"_store",IDBObjectStore,["deleteIndex"]),P.prototype.objectStore=function(){return new x(this._tx.objectStore.apply(this._tx,arguments))},_(P,"_tx",["objectStoreNames","mode"]),C(P,"_tx",IDBTransaction,["abort"]),E.prototype.createObjectStore=function(){return new x(this._db.createObjectStore.apply(this._db,arguments))},_(E,"_db",["name","version","objectStoreNames"]),C(E,"_db",IDBDatabase,["deleteObjectStore","close"]),q.prototype.transaction=function(){return new P(this._db.transaction.apply(this._db,arguments))},_(q,"_db",["name","version","objectStoreNames"]),C(q,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[x,k].forEach(function(t){o in t.prototype&&(t.prototype[o.replace("open","iterate")]=function(){var t=(n=arguments,Array.prototype.slice.call(n)),e=t[t.length-1],n=this._store||this._index,r=n[o].apply(n,t.slice(0,-1));r.onsuccess=function(){e(r.result)}})})}),[k,x].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,n){var r=this,o=[];return new Promise(function(e){r.iterateCursor(t,function(t){t?(o.push(t.value),void 0===n||o.length!=n?t.continue():e(o)):e(o)})})})});var D="0.4.19",O=1e4,A="w:"+D,N="FIS_v2",B="https://firebaseinstallations.googleapis.com/v1",K=36e5,L=((L={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',L["not-registered"]="Firebase Installation is not registered.",L["installation-not-found"]="Firebase Installation not found.",L["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',L["app-offline"]="Could not process request. Application offline.",L["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",L),M=new v("installations","Installations",L);function V(t){return t instanceof p&&t.code.includes("request-failed")}function F(t){t=t.projectId;return B+"/projects/"+t+"/installations"}function $(t){return{token:t.token,requestStatus:2,expiresIn:(t=t.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()}}function z(n,r){return c(this,void 0,void 0,function(){var e;return f(this,function(t){switch(t.label){case 0:return[4,r.json()];case 1:return e=t.sent(),e=e.error,[2,M.create("request-failed",{requestName:n,serverCode:e.code,serverMessage:e.message,serverStatus:e.status})]}})})}function G(t){t=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function J(t,e){e=e.refreshToken,t=G(t);return t.append("Authorization",N+" "+e),t}function R(n){return c(this,void 0,void 0,function(){var e;return f(this,function(t){switch(t.label){case 0:return[4,n()];case 1:return 500<=(e=t.sent()).status&&e.status<600?[2,n()]:[2,e]}})})}function U(e){return new Promise(function(t){setTimeout(t,e)})}var H=/^[cdef][\w-]{21}$/,Y="";function Z(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;t=function(t){return btoa(String.fromCharCode.apply(String,r(t))).replace(/\+/g,"-").replace(/\//g,"_")}(t).substr(0,22);return H.test(t)?t:Y}catch(t){return Y}}function Q(t){return t.appName+"!"+t.appId}var W=new Map;function X(t,e){t=Q(t);tt(t,e),function(t,e){var n=nt();n&&n.postMessage({key:t,fid:e});rt()}(t,e)}function tt(t,e){var n,r,o=W.get(t);if(o)try{for(var i=s(o),a=i.next();!a.done;a=i.next()){(0,a.value)(e)}}catch(t){n={error:t}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}var et=null;function nt(){return!et&&"BroadcastChannel"in self&&((et=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){tt(t.data.key,t.data.fid)}),et}function rt(){0===W.size&&et&&(et.close(),et=null)}var ot,it="firebase-installations-database",at=1,st="firebase-installations-store",ut=null;function ct(){var t,e,n;return ut||(t=at,e=function(t){0===t.oldVersion&&t.createObjectStore(st)},(n=(t=S(indexedDB,"open",[it,t])).request)&&(n.onupgradeneeded=function(t){e&&e(new E(n.result,t.oldVersion,n.transaction))}),ut=t.then(function(t){return new q(t)})),ut}function ft(i,a){return c(this,void 0,void 0,function(){var e,n,r,o;return f(this,function(t){switch(t.label){case 0:return e=Q(i),[4,ct()];case 1:return r=t.sent(),n=r.transaction(st,"readwrite"),[4,(r=n.objectStore(st)).get(e)];case 2:return o=t.sent(),[4,r.put(a,e)];case 3:return t.sent(),[4,n.complete];case 4:return t.sent(),o&&o.fid===a.fid||X(i,a.fid),[2,a]}})})}function lt(r){return c(this,void 0,void 0,function(){var e,n;return f(this,function(t){switch(t.label){case 0:return e=Q(r),[4,ct()];case 1:return n=t.sent(),[4,(n=n.transaction(st,"readwrite")).objectStore(st).delete(e)];case 2:return t.sent(),[4,n.complete];case 3:return t.sent(),[2]}})})}function pt(a,s){return c(this,void 0,void 0,function(){var e,n,r,o,i;return f(this,function(t){switch(t.label){case 0:return e=Q(a),[4,ct()];case 1:return r=t.sent(),n=r.transaction(st,"readwrite"),[4,(r=n.objectStore(st)).get(e)];case 2:return o=t.sent(),void 0!==(i=s(o))?[3,4]:[4,r.delete(e)];case 3:return t.sent(),[3,6];case 4:return[4,r.put(i,e)];case 5:t.sent(),t.label=6;case 6:return[4,n.complete];case 7:return t.sent(),!i||o&&o.fid===i.fid||X(a,i.fid),[2,i]}})})}function dt(o){return c(this,void 0,void 0,function(){var e,n,r;return f(this,function(t){switch(t.label){case 0:return[4,pt(o,function(t){t=vt(t||{fid:Z(),registrationStatus:0}),t=function(t,e){{if(0!==e.registrationStatus)return 1===e.registrationStatus?{installationEntry:e,registrationPromise:function(o){return c(this,void 0,void 0,function(){var e,n,r;return f(this,function(t){switch(t.label){case 0:return[4,ht(o)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,U(100)];case 3:return t.sent(),[4,ht(o)];case 4:return e=t.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,dt(o)];case 6:return r=t.sent(),n=r.installationEntry,(r=r.registrationPromise)?[2,r]:[2,n];case 7:return[2,e]}})})}(t)}:{installationEntry:e};if(!navigator.onLine){var n=Promise.reject(M.create("app-offline"));return{installationEntry:e,registrationPromise:n}}e={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},t=function(r,o){return c(this,void 0,void 0,function(){var e,n;return f(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,7]),[4,function(a,t){var s=t.fid;return c(this,void 0,void 0,function(){var e,n,r,o,i;return f(this,function(t){switch(t.label){case 0:return e=F(a),n=G(a),i={fid:s,authVersion:N,appId:a.appId,sdkVersion:A},r={method:"POST",headers:n,body:JSON.stringify(i)},[4,R(function(){return fetch(e,r)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return i=t.sent(),[2,{fid:i.fid||s,registrationStatus:2,refreshToken:i.refreshToken,authToken:$(i.authToken)}];case 3:return[4,z("Create Installation",o)];case 4:throw t.sent()}})})}(r,o)];case 1:return e=t.sent(),[2,ft(r,e)];case 2:return V(n=t.sent())&&409===n.customData.serverCode?[4,lt(r)]:[3,4];case 3:return t.sent(),[3,6];case 4:return[4,ft(r,{fid:o.fid,registrationStatus:0})];case 5:t.sent(),t.label=6;case 6:throw n;case 7:return[2]}})})}(t,e);return{installationEntry:e,registrationPromise:t}}}(o,t);return e=t.registrationPromise,t.installationEntry})];case 1:return(n=t.sent()).fid!==Y?[3,3]:(r={},[4,e]);case 2:return[2,(r.installationEntry=t.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:e}]}})})}function ht(t){return pt(t,function(t){if(!t)throw M.create("installation-not-found");return vt(t)})}function vt(t){return 1===(e=t).registrationStatus&&e.registrationTime+O<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function yt(t,a){var s=t.appConfig,u=t.platformLoggerProvider;return c(this,void 0,void 0,function(){var e,n,r,o,i;return f(this,function(t){switch(t.label){case 0:return e=function(t,e){e=e.fid;return F(t)+"/"+e+"/authTokens:generate"}(s,a),n=J(s,a),(i=u.getImmediate({optional:!0}))&&n.append("x-firebase-client",i.getPlatformInfoString()),i={installation:{sdkVersion:A}},r={method:"POST",headers:n,body:JSON.stringify(i)},[4,R(function(){return fetch(e,r)})];case 1:return(o=t.sent()).ok?[4,o.json()]:[3,3];case 2:return i=t.sent(),[2,$(i)];case 3:return[4,z("Generate Auth Token",o)];case 4:throw t.sent()}})})}function gt(o,i){return void 0===i&&(i=!1),c(this,void 0,void 0,function(){var r,e,n;return f(this,function(t){switch(t.label){case 0:return[4,pt(o.appConfig,function(t){if(!mt(t))throw M.create("not-registered");var e,n=t.authToken;if(i||2!==(e=n).requestStatus||function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+K}(e)){if(1===n.requestStatus)return r=function(n,r){return c(this,void 0,void 0,function(){var e;return f(this,function(t){switch(t.label){case 0:return[4,bt(n.appConfig)];case 1:e=t.sent(),t.label=2;case 2:return 1!==e.authToken.requestStatus?[3,5]:[4,U(100)];case 3:return t.sent(),[4,bt(n.appConfig)];case 4:return e=t.sent(),[3,2];case 5:return 0===(e=e.authToken).requestStatus?[2,gt(n,r)]:[2,e]}})})}(o,i),t;if(!navigator.onLine)throw M.create("app-offline");n=(e=t,n={requestStatus:1,requestTime:Date.now()},a(a({},e),{authToken:n}));return r=function(o,i){return c(this,void 0,void 0,function(){var e,n,r;return f(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,8]),[4,yt(o,i)];case 1:return e=t.sent(),r=a(a({},i),{authToken:e}),[4,ft(o.appConfig,r)];case 2:return t.sent(),[2,e];case 3:return!V(n=t.sent())||401!==n.customData.serverCode&&404!==n.customData.serverCode?[3,5]:[4,lt(o.appConfig)];case 4:return t.sent(),[3,7];case 5:return r=a(a({},i),{authToken:{requestStatus:0}}),[4,ft(o.appConfig,r)];case 6:t.sent(),t.label=7;case 7:throw n;case 8:return[2]}})})}(o,n),n}return t})];case 1:return e=t.sent(),r?[4,r]:[3,3];case 2:return n=t.sent(),[3,4];case 3:n=e.authToken,t.label=4;case 4:return[2,n]}})})}function bt(t){return pt(t,function(t){if(!mt(t))throw M.create("not-registered");var e=t.authToken;return 1===(e=e).requestStatus&&e.requestTime+O<Date.now()?a(a({},t),{authToken:{requestStatus:0}}):t})}function mt(t){return void 0!==t&&2===t.registrationStatus}function wt(e,n){return void 0===n&&(n=!1),c(this,void 0,void 0,function(){return f(this,function(t){switch(t.label){case 0:return[4,function(n){return c(this,void 0,void 0,function(){var e;return f(this,function(t){switch(t.label){case 0:return[4,dt(n)];case 1:return(e=t.sent().registrationPromise)?[4,e]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}})})}(e.appConfig)];case 1:return t.sent(),[4,gt(e,n)];case 2:return[2,t.sent().token]}})})}function St(o,i){return c(this,void 0,void 0,function(){var e,n,r;return f(this,function(t){switch(t.label){case 0:return e=function(t,e){e=e.fid;return F(t)+"/"+e}(o,i),r=J(o,i),n={method:"DELETE",headers:r},[4,R(function(){return fetch(e,n)})];case 1:return(r=t.sent()).ok?[3,3]:[4,z("Delete Installation",r)];case 2:throw t.sent();case 3:return[2]}})})}function _t(t,r){var o=t.appConfig;return function(t,e){nt();var n=Q(t);(t=W.get(n))||(t=new Set,W.set(n,t)),t.add(e)}(o,r),function(){var t,e,n;e=r,n=Q(t=o),(t=W.get(n))&&(t.delete(e),0===t.size&&W.delete(n),rt())}}function It(t){return M.create("missing-app-config-values",{valueName:t})}(ot=e.default).INTERNAL.registerComponent(new b("installations",function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw It("App Configuration");if(!t.name)throw It("App Name");try{for(var r=s(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var i=o.value;if(!t.options[i])throw It(i)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(r){return c(this,void 0,void 0,function(){var e,n;return f(this,function(t){switch(t.label){case 0:return[4,dt(r.appConfig)];case 1:return e=t.sent(),n=e.installationEntry,(e.registrationPromise||gt(r)).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(t){return wt(n,t)},delete:function(){return function(r){return c(this,void 0,void 0,function(){var e,n;return f(this,function(t){switch(t.label){case 0:return[4,pt(e=r.appConfig,function(t){if(!t||0!==t.registrationStatus)return t})];case 1:if(!(n=t.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw M.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw M.create("app-offline");case 3:return[4,St(e,n)];case 4:return t.sent(),[4,lt(e)];case 5:t.sent(),t.label=6;case 6:return[2]}})})}(n)},onIdChange:function(t){return _t(n,t)}}},"PUBLIC")),ot.registerVersion("@firebase/installations",D)}).apply(this,arguments)}catch(t){throw console.error(t),new Error("Cannot instantiate firebase-installations.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-installations.js.map

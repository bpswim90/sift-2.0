(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3436069a"],{"02f4":function(t,e,r){var n=r("4588"),a=r("be13");t.exports=function(t){return function(e,r){var o,i,c=String(a(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):o:t?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),o=r("79e5"),i=r("be13"),c=r("2b4c"),s=r("520a"),u=c("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var p=c(t),d=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),v=d?!o(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[p](""),!e}):void 0;if(!d||!v||"replace"===t&&!l||"split"===t&&!f){var g=/./[p],h=r(i,p,""[t],function(t,e,r,n,a){return e.exec===s?d&&!a?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),m=h[0],b=h[1];n(String.prototype,t,m),a(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"520a":function(t,e,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(i=function(t){var e,r,i,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(e=f[c]),i=a.call(f,t),s&&i&&(f[c]=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)}),i}),t.exports=i},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},7904:function(t,e,r){"use strict";var n=r("d747"),a=r.n(n);a.a},"9ddf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"card mx-auto",attrs:{id:"login"}},[r("div",{staticClass:"card-body p-5"},[r("h5",{staticClass:"card-title mb-3"},[t._v("Welcome to sift.")]),r("p",{staticClass:"card-subtitle text-muted mb-5"},[t._v("Search for recipes from your favorite sites across the internet.")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.logIn(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control mb-1",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control mb-1",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("button",{staticClass:"btn btn-primary form-control",attrs:{type:"submit"}},[t._v("Log In")])])]),r("div",{staticClass:"card-footer text-muted text-center"},[r("small",[t._v("Not a member yet? "),r("router-link",{attrs:{to:"/signup"}},[t._v("Sign up!")])],1)])])])},a=[],o=(r("a481"),r("8aa5")),i=r.n(o),c={name:"app",data:function(){return{email:"",password:""}},methods:{logIn:function(){var t=this;i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.replace("/search");var r="Now logged in as "+t.email;t.$store.commit("clearNotifications"),t.$store.commit("addNotification",r)},function(t){alert(t.message)})}}},s=c,u=(r("7904"),r("2877")),l=Object(u["a"])(s,n,a,!1,null,null,null);e["default"]=l.exports},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),o=r("9def"),i=r("4588"),c=r("0390"),s=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,g){return[function(n,a){var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o,a):r.call(String(o),n,a)},function(t,e){var a=g(r,t,this,e);if(a.done)return a.value;var f=n(t),p=String(this),d="function"===typeof e;d||(e=String(e));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}var x=[];while(1){var w=s(f,p);if(null===w)break;if(x.push(w),!m)break;var y=String(w[0]);""===y&&(f.lastIndex=c(p,o(f.lastIndex),b))}for(var E="",S=0,$=0;$<x.length;$++){w=x[$];for(var C=String(w[0]),k=u(l(i(w.index),p.length),0),I=[],R=1;R<w.length;R++)I.push(v(w[R]));var A=w.groups;if(d){var _=[C].concat(I,k,p);void 0!==A&&_.push(A);var N=String(e.apply(void 0,_))}else N=h(C,p,k,I,A,e);k>=S&&(E+=p.slice(S,k)+N,S=k+C.length)}return E+p.slice(S)}];function h(t,e,n,o,i,c){var s=n+t.length,u=o.length,l=d;return void 0!==i&&(i=a(i),l=p),r.call(c,l,function(r,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return r;if(l>u){var p=f(l/10);return 0===p?r:p<=u?void 0===o[p-1]?a.charAt(1):o[p-1]+a.charAt(1):r}c=o[l-1]}return void 0===c?"":c})}})},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},d747:function(t,e,r){}}]);
//# sourceMappingURL=chunk-3436069a.09cdcbbb.js.map
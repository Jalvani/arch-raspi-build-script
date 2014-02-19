(function(){var k=this,aa=function(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b},ba=function(){},ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},l=function(a){return"array"==ca(a)},da=function(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length},m=function(a){return"string"==typeof a},n=function(a){return"function"==ca(a)},ea=function(a,
b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return p.apply(null,arguments)},ga=Date.now||function(){return+new Date},
q=function(a,b){function c(){}c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.jb=function(a,c,f){var g=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,g)}};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return p.apply(null,c)}return p(this,a)};var r=function(a){Error.captureStackTrace?Error.captureStackTrace(this,r):this.stack=Error().stack||"";a&&(this.message=String(a))};q(r,Error);r.prototype.name="CustomError";var ha=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ja=function(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",wa=e[g]||"",R=RegExp("(\\d*)(\\D*)","g"),Vb=RegExp("(\\d*)(\\D*)","g");do{var S=R.exec(h)||["","",""],T=Vb.exec(wa)||["","",""];
if(0==S[0].length&&0==T[0].length)break;c=ia(0==S[1].length?0:parseInt(S[1],10),0==T[1].length?0:parseInt(T[1],10))||ia(0==S[2].length,0==T[2].length)||ia(S[2],T[2])}while(0==c)}return c},ia=function(a,b){return a<b?-1:a>b?1:0};var ka=function(a){this.hb=a};ka.prototype.toString=function(){return this.hb};var la=new ka("ma");var s=function(a,b){this.Fa=a||"e";this.la=null!=a&&"p"==a?"e":"p";this.c=this.pa=null;this.Ea=b||"u";this.P=this.ja=null;this.ia=[]};s.prototype.message=function(){var a={};a.i=this.P;a.m=this.ia;a.r=this.Ea;a.o=this.ja;a.s=this.c;a.st=this.la;a.d=this.pa;a.dt=this.Fa;return a};aa("ace.base.Message.prototype.message",s.prototype.message);
s.prototype.parse=function(a){for(var b in a)switch(b){case "r":this.Ea=a[b];break;case "i":this.P=a[b];break;case "m":this.ia=a[b];break;case "o":this.ja=a[b];break;case "s":this.c=a[b];break;case "d":this.pa=a[b];break;case "st":this.la=a[b];break;case "dt":this.Fa=a[b]}return this};s.prototype.F=function(){return JSON.stringify(this.message())};s.prototype.target=function(){return this.pa};var t=Array.prototype,ma=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},na=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},oa=function(a,b){for(var c=m(a)?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},pa=t.some?
function(a,b,c){return t.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},qa=function(a,b){var c=ma(a,b),d;(d=0<=c)&&t.splice.call(a,c,1);return d};var ra=function(a){this.$=a};ra.prototype.F=function(a){var b=[];sa(this,a,b);return b.join("")};
var sa=function(a,b,c){switch(typeof b){case "string":ta(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(l(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],sa(a,a.$?a.$.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),ta(f,
c),c.push(":"),sa(a,a.$?a.$.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},ua={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},va=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ta=function(a,b){b.push('"',a.replace(va,function(a){if(a in ua)return ua[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return ua[a]=
e+b.toString(16)}),'"')};var xa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},ya=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};var za=function(){};za.prototype.F=function(){return k.JSON&&k.JSON.stringify?k.JSON.stringify(this.H):(new ra(void 0)).F(this.H)};za.prototype.toString=function(){return this.H.toString()};var Aa={};var Ba=function(a){var b=a;a=[];b||(b=["h_cc"]);this.cb="h_cc";this.H=b;if(a)for(b=0;b<a.length;b++)this.H[a[b]]=this.H[a[b]]||[]};q(Ba,za);Aa.h_cc=Ba;Ba.cb="h_cc";var Ca=function(a,b){for(var c=[],d=0;d<arguments.length;d++)c.push(arguments[d]||"");return c.join("_;_")};var u=function(){};u.prototype.Z=!1;u.prototype.u=function(){this.Z||(this.Z=!0,this.b())};u.prototype.b=function(){if(this.Qa)for(;this.Qa.length;)this.Qa.shift()()};var Da=function(a){a&&"function"==typeof a.u&&a.u()};var Ea="StopIteration"in k?k.StopIteration:Error("StopIteration"),Fa=function(){};Fa.prototype.next=function(){throw Ea;};Fa.prototype.fb=function(){return this};var v=function(a,b){this.l={};this.a=[];this.V=this.L=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof v?(c=a.q(),d=a.W()):(c=ya(a),d=xa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};v.prototype.W=function(){Ga(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.l[this.a[b]]);return a};v.prototype.q=function(){Ga(this);return this.a.concat()};
v.prototype.remove=function(a){return w(this.l,a)?(delete this.l[a],this.L--,this.V++,this.a.length>2*this.L&&Ga(this),!0):!1};var Ga=function(a){if(a.L!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];w(a.l,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.L!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],w(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};v.prototype.get=function(a,b){return w(this.l,a)?this.l[a]:b};
v.prototype.set=function(a,b){w(this.l,a)||(this.L++,this.a.push(a),this.V++);this.l[a]=b};v.prototype.fb=function(a){Ga(this);var b=0,c=this.a,d=this.l,e=this.V,f=this,g=new Fa;g.next=function(){for(;;){if(e!=f.V)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw Ea;var g=c[b++];return a?g:d[g]}};return g};var w=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var x,Ha,Ia,Ja,y=function(){return k.navigator?k.navigator.userAgent:null};Ja=Ia=Ha=x=!1;var z;if(z=y()){var Ka=k.navigator;x=0==z.lastIndexOf("Opera",0);Ha=!x&&(-1!=z.indexOf("MSIE")||-1!=z.indexOf("Trident"));Ia=!x&&-1!=z.indexOf("WebKit");Ja=!x&&!Ia&&!Ha&&"Gecko"==Ka.product}var La=x,A=Ha,B=Ja,C=Ia,Ma=function(){var a=k.document;return a?a.documentMode:void 0},Na;
t:{var Oa="",D;if(La&&k.opera)var Pa=k.opera.version,Oa="function"==typeof Pa?Pa():Pa;else if(B?D=/rv\:([^\);]+)(\)|;)/:A?D=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:C&&(D=/WebKit\/(\S+)/),D)var Qa=D.exec(y()),Oa=Qa?Qa[1]:"";if(A){var Ra=Ma();if(Ra>parseFloat(Oa)){Na=String(Ra);break t}}Na=Oa}var Sa=Na,Ta={},E=function(a){return Ta[a]||(Ta[a]=0<=ja(Sa,a))},Ua=k.document,Va=Ua&&A?Ma()||("CSS1Compat"==Ua.compatMode?parseInt(Sa,10):5):void 0;var Wa,Xa,Ya,Za,$a,ab,bb;bb=ab=$a=Za=Ya=Xa=Wa=!1;var F=y();F&&(-1!=F.indexOf("Firefox")?Wa=!0:-1!=F.indexOf("Camino")?Xa=!0:-1!=F.indexOf("iPhone")||-1!=F.indexOf("iPod")?Ya=!0:-1!=F.indexOf("iPad")?Za=!0:-1!=F.indexOf("Chrome")?ab=!0:-1!=F.indexOf("Android")?$a=!0:-1!=F.indexOf("Safari")&&(bb=!0));var cb=Wa,db=Xa,eb=Ya,fb=Za,gb=$a,hb=ab,ib=bb;var G=function(a){return(a=a.exec(y()))?a[1]:""},jb=function(){if(cb)return G(/Firefox\/([0-9.]+)/);if(A||La)return Sa;if(hb)return G(/Chrome\/([0-9.]+)/);if(ib)return G(/Version\/([0-9.]+)/);if(eb||fb){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(y()))return a[1]+"."+a[2]}else{if(gb)return(a=G(/Android\s+([0-9.]+)/))?a:G(/Version\/([0-9.]+)/);if(db)return G(/Camino\/([0-9.]+)/)}return""}();var H=function(a,b,c,d,e){this.t=a;this.j=b;this.B=typeof b;this.ca=c?c:!1;this.ga=!0;this.ba=d?d:!1;this.aa=e?e:!1};q(H,u);H.prototype.b=function(){H.v.b.call(this);this.t="";this.j=null;this.B=""};H.prototype.id=function(){return this.t};H.prototype.type=function(){return this.B};H.prototype.setEnabled=function(a){this.ga=a};var I=function(a){this.n=new v;if(a)for(var b in a){var c=a[b],d=null;w(this.n.l,b)?(d=this.n.get(b),d.j=c.value,c.changed&&(d.aa=c.changed)):(d=new H(b,c.value,c.multiple,c.inverse,c.changed),d.setEnabled(!c.disabled));this.n.set(b,d)}};q(I,u);var kb=0<=ja(jb,"23.0.1262.0")&&!(0<=navigator.userAgent.indexOf("CrOS"));I.prototype.b=function(){I.v.b.call(this);for(var a=this.n.q(),b=0;b<a.length;++b)Da(this.n.get(a[b]));delete this.n};
I.prototype.getItem=function(a){return w(this.n.l,a)?this.n.get(a):null};I.prototype.setItem=function(a){this.n.set(a.id(),a)};I.prototype.F=function(){for(var a=this.n.q(),b={},c=0;c<a.length;c++){var d=a[c],e=this.n.get(d);b[d]={value:e.j,type:e.type(),multiple:e.ca,disabled:!e.ga,inverse:e.ba,changed:e.aa}}return b};var lb=function(a){if("function"==typeof a.W)return a.W();if(m(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return xa(a)},mb=function(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(da(a)||m(a))na(a,b,void 0);else{var c;if("function"==typeof a.q)c=a.q();else if("function"!=typeof a.W)if(da(a)||m(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=ya(a);else c=void 0;for(var d=lb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],
a)}};var J=function(a){var b;b=b||[];b.length||(b[0]="");var c=chrome.i18n.getMessage(a,b);if(c)return c;(c=(c=k.ace_i18n[a.toLowerCase()])?c.message:k.ace_i18n["MSG_"+a])&&(c=c.replace("$1",b[0]).replace("$2",b[1]).replace("$3",b[2]));return c};var K=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Ra=!1};K.prototype.b=function(){};K.prototype.u=function(){};K.prototype.preventDefault=function(){this.defaultPrevented=!0};var nb=function(a){nb[" "](a);return a};nb[" "]=ba;var ob=!A||A&&9<=Va,pb=A&&!E("9");!C||E("528");B&&E("1.9b")||A&&E("8")||La&&E("9.5")||C&&E("528");B&&!E("8")||A&&E("9");var L=function(a,b){K.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.Ka=this.state=null;a&&this.A(a,b)};q(L,K);
L.prototype.A=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(B){var e;t:{try{nb(d.nodeName);e=!0;break t}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=C||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=C||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;
this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.Ka=a;a.defaultPrevented&&this.preventDefault()};
L.prototype.preventDefault=function(){L.v.preventDefault.call(this);var a=this.Ka;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,pb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};L.prototype.b=function(){};var qb="closure_listenable_"+(1E6*Math.random()|0),rb=function(a){try{return!(!a||!a[qb])}catch(b){return!1}},sb=0;var tb=function(a,b,c,d,e){this.I=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.wa=e;this.key=++sb;this.removed=this.ta=!1},ub=function(a){a.removed=!0;a.I=null;a.proxy=null;a.src=null;a.wa=null};var M=function(a){this.src=a;this.e={};this.O=0};M.prototype.add=function(a,b,c,d,e){var f=this.e[a];f||(f=this.e[a]=[],this.O++);var g=vb(f,b,d,e);-1<g?(a=f[g],c||(a.ta=!1)):(a=new tb(b,this.src,a,!!d,e),a.ta=c,f.push(a));return a};M.prototype.remove=function(a,b,c,d){if(!(a in this.e))return!1;var e=this.e[a];b=vb(e,b,c,d);return-1<b?(ub(e[b]),t.splice.call(e,b,1),0==e.length&&(delete this.e[a],this.O--),!0):!1};
var wb=function(a,b){var c=b.type;if(!(c in a.e))return!1;var d=qa(a.e[c],b);d&&(ub(b),0==a.e[c].length&&(delete a.e[c],a.O--));return d};M.prototype.removeAll=function(a){var b=0,c;for(c in this.e)if(!a||c==a){for(var d=this.e[c],e=0;e<d.length;e++)++b,ub(d[e]);delete this.e[c];this.O--}return b};M.prototype.N=function(a,b,c,d){a=this.e[a];var e=-1;a&&(e=vb(a,b,c,d));return-1<e?a[e]:null};
var vb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.I==b&&f.capture==!!c&&f.wa==d)return e}return-1};var xb="closure_lm_"+(1E6*Math.random()|0),N={},yb=0,zb=function(a,b,c,d,e){if(l(b)){for(var f=0;f<b.length;f++)zb(a,b[f],c,d,e);return null}c=Ab(c);if(rb(a))a=a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=O(a);g||(a[xb]=g=new M(a));c=g.add(b,c,!1,d,e);c.proxy||(d=Bb(),c.proxy=d,d.src=a,d.I=c,a.addEventListener?a.addEventListener(b,d,f):a.attachEvent(b in N?N[b]:N[b]="on"+b,d),yb++);a=c}return a},Bb=function(){var a=Cb,b=ob?function(c){return a.call(b.src,b.I,c)}:function(c){c=
a.call(b.src,b.I,c);if(!c)return c};return b},Db=function(a,b,c,d,e){if(l(b))for(var f=0;f<b.length;f++)Db(a,b[f],c,d,e);else c=Ab(c),rb(a)?a.ua(b,c,d,e):a&&(a=O(a))&&(b=a.N(b,c,!!d,e))&&Eb(b)},Eb=function(a){if("number"==typeof a||!a||a.removed)return!1;var b=a.src;if(rb(b))return wb(b.G,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(c in N?N[c]:N[c]="on"+c,d);yb--;(c=O(b))?(wb(c,a),0==c.O&&(c.src=null,b[xb]=null)):ub(a);return!0},
Gb=function(a,b,c,d){var e=1;if(a=O(a))if(b=a.e[b]){a=b.length;if(0<a){for(var f=Array(a),g=0;g<a;g++)f[g]=b[g];b=f}else b=[];for(a=0;a<b.length;a++)(f=b[a])&&f.capture==c&&!f.removed&&(e&=!1!==Fb(f,d))}return Boolean(e)},Fb=function(a,b){var c=a.I,d=a.wa||a.src;a.ta&&Eb(a);return c.call(d,b)},Cb=function(a,b){if(a.removed)return!0;if(!ob){var c;if(!(c=b))t:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break t}c=d}e=c;c=new L(e,this);d=!0;if(!(0>e.keyCode||void 0!=
e.returnValue)){t:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break t}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;!c.Ra&&0<=h;h--)c.currentTarget=e[h],d&=Gb(e[h],f,!0,c);for(h=0;!c.Ra&&h<e.length;h++)c.currentTarget=e[h],d&=Gb(e[h],f,!1,c)}return d}return Fb(a,new L(b,this))},O=function(a){a=a[xb];return a instanceof M?a:null},Hb="__closure_events_fn_"+(1E9*Math.random()>>>0),Ab=function(a){return n(a)?
a:a[Hb]||(a[Hb]=function(b){return a.handleEvent(b)})};var P=function(){this.G=new M(this)};q(P,u);P.prototype[qb]=!0;P.prototype.addEventListener=function(a,b,c,d){zb(this,a,b,c,d)};P.prototype.removeEventListener=function(a,b,c,d){Db(this,a,b,c,d)};P.prototype.b=function(){P.v.b.call(this);this.G&&this.G.removeAll(void 0)};P.prototype.listen=function(a,b,c,d){return this.G.add(String(a),b,!1,c,d)};P.prototype.ua=function(a,b,c,d){return this.G.remove(String(a),b,c,d)};P.prototype.N=function(a,b,c,d){return this.G.N(String(a),b,c,d)};!B&&!A||A&&A&&9<=Va||B&&E("1.9.1");A&&E("9");var Q=function(a){var b=document;return m(a)?b.getElementById(a):a},Ib=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var U=function(a){this.Ja=a;this.a={}};q(U,u);var Jb=[];U.prototype.listen=function(a,b,c,d){l(b)||(Jb[0]=b,b=Jb);for(var e=0;e<b.length;e++){var f=zb(a,b[e],c||this.handleEvent,d||!1,this.Ja||this);if(!f)break;this.a[f.key]=f}return this};U.prototype.ua=function(a,b,c,d,e){if(l(b))for(var f=0;f<b.length;f++)this.ua(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.Ja||this,c=Ab(c),d=!!d,b=rb(a)?a.N(b,c,d,e):a?(a=O(a))?a.N(b,c,d,e):null:null,b&&(Eb(b),delete this.a[b.key]);return this};
U.prototype.removeAll=function(){var a=this.a,b=Eb,c;for(c in a)b.call(void 0,a[c],c,a);this.a={}};U.prototype.b=function(){U.v.b.call(this);this.removeAll()};U.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var V=function(a){this.t=Ca("setting",""+ga());this.Q=null;this.R=new U;this.k=new v;this.da=a.get(la);this.R.listen(window,"unload",this.u)};q(V,u);aa("ace.ui.SettingsDialog",V);aa("ace.ui.SettingsDialog",V);
V.prototype.A=function(){document.title=J("CHROME_EXT_SHORT_NAME");this.Q=chrome.runtime.connect({name:this.t});var a=this;this.Q.onMessage.addListener(function(b){switch((new s).parse(b).P){case "focus":Kb(a);a.sendMessage("extensionLibrary",["selectTab",a.t,!0,!0]);window.focus();break;case "close":a.ea()}});this.k.set("StartOnBrowserLaunch",["BrowserStartup",1]);this.k.set("StopOnBrowserClose",["Shutdown",1]);this.k.set("TopMost",["TopMost",1]);this.k.set("TrayIcon",["TrayIcon",1]);Ib(Q("fieldsetDestPage"));
Lb("legendApp",J("QUASAR_LEGEND_STARTUP_SHUTDOWN"));Lb("legendNotice",J("QUASAR_LEGEND_NOTIFICATIONS"));Mb(this,"StartOnBrowserLaunch",J("CHROME_EXT_RUN_AT_BROWSER_START"));Mb(this,"StopOnBrowserClose",J("CHROME_EXT_RUN_AFTER_BROWSER_CLOSE"));Mb(this,"TrayIcon",J("QUASAR_LABEL_TRAY_ICON"));Ib(Q("systemIndicatorSetting"));Ib(Q("autoRecoverSetting"));Ib(Q("useNewRoster"));kb?Mb(this,"TopMost",J("CHROME_EXT_NEW_WINDOWS_TOPMOST")):Nb(this,"TopMost");0<=navigator.userAgent.indexOf("CrOS")&&Nb(this,"TrayIcon");
Kb(this);var b=Q("feedbackLink");b.innerText=J("CHROME_EXT_MENUTEXT_FEEDBACK");b.href=chrome.runtime.getURL("feedbackdialog.html");b=Q("helpLink");b.innerText=J("QUASAR_HELP");b.href=ha("https://support.google.com/hangouts?p=help&hl=%s",chrome.i18n.getMessage("@@ui_locale"));this.sa=Q("buttonSave");this.sa.innerText=J("QUASAR_BUTTON_SAVE");this.sa.className="goog-settings-button";this.R.listen(this.sa,"click",p(this.Wa,this),!1);this.ra=Q("buttonCancel");this.ra.innerText=J("QUASAR_BUTTON_CANCEL");
this.ra.className="goog-settings-button";this.R.listen(this.ra,"click",p(this.ea,this),!1)};V.prototype.init=V.prototype.A;V.prototype.b=function(){V.v.b.call(this);Da(this.R)};
var Ob=function(a,b,c){var d=[];b+=a.k.get(c)[0];a=a.k.get(c)[1];if(1<a)for(c=0;c<a;c++)d.push(Q(b+c));else d.push(Q(b));return d},Kb=function(a){for(var b=new I(a.da.get("settings")),c=a.k.q(),d=0;d<c.length;d++){var e=b.getItem(c[d]);if(e){var f=Ob(a,"field",c[d]);if(e.ca){var g=e.j;0<=g&&f[g]&&(f[g].checked=!0)}else f[0]&&("boolean"==e.B?f[0].checked=e.ba?!e.j:e.j:f[0].value=e.j);if(!e.ga)for(e=Ob(a,"label",c[d]),g=0;g<e.length;g++)e[g]&&(e[g].className="goog-settings-label-disabled",e[g].disabled=
!0),f[g]&&(f[g].className="goog-settings-field-disabled",f[g].disabled=!0)}}},Lb=function(a,b){var c=Q(a);c&&(c.innerText=b)},Mb=function(a,b,c){var d=a.k.get(b)[0];a=a.k.get(b)[1];if(1<a)for(b=0;b<a;b++){var e=Q("label"+d+b),f=Q("field"+d+b);e&&c&&(e.innerText=c[b],e.className="goog-settings-label");f&&(f.className="goog-settings-field")}else e=Q("label"+d),f=Q("field"+d),e&&c&&(e.innerText=c,e.className="goog-settings-label"),f&&(f.className="goog-settings-field")},Nb=function(a,b){var c=a.k.get(b)[0],
d=Q("field"+c);(d=(c=(c=Q("label"+c)||d)&&c.parentNode)&&c.parentNode)&&d.removeChild(c)};V.prototype.Wa=function(){for(var a=new I(this.da.get("settings")),b=this.k.q(),c=0;c<b.length;c++){var d=a.getItem(b[c]);if(d){var e=Ob(this,"field",b[c]),f=d.j;if(d.ca){for(var g=-1,h=0;h<e.length;h++)if(e[h]&&e[h].checked){g=h;break}-1==g&&(g=0);d.j=g}else e[0]&&(d.j="boolean"==d.B?d.ba?!e[0].checked:e[0].checked:e[0].value);f!=d.j&&(d.aa=!0,a.setItem(d))}}this.da.set("settings",a.F());this.ea()};
V.prototype.ea=function(){this.sendMessage("settingsManager",["updateSettingsFromStorage"]);window.close()};V.prototype.sendMessage=function(a,b,c){c=c?c:""+ga();var d=new s,e=this.t;null!=e&&(d.c=e,d.la="p");null!=a&&(d.ja=a);null!=c&&(d.P=c);d.ia="object"==typeof b?b:[b];this.Q&&this.Q.postMessage(d.message())};var Pb=function(a,b){this.Ya=a;this.B=b;this.constructor.Ma||(this.constructor.Ma={});this.constructor.Ma[this.toString()]=this};Pb.prototype.F=function(){return this.toString()};Pb.prototype.toString=function(){this.La||(this.La=this.Ya.bb+":"+this.B);return this.La};var Qb=function(a,b){Pb.call(this,a,b)};q(Qb,Pb);var Rb=function(a){this.bb=a};new Rb("lib");var Ub=function(a){n(k.setImmediate)?k.setImmediate(a):(Sb||(Sb=Tb()),Sb(a))},Sb,Tb=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d=b.location.protocol+"//"+b.location.host,a=p(function(a){if(a.origin==
d||a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){c=c.next;var a=c.Oa;c.Oa=null;a()};return function(a){d.next={Oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=
null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Wb=function(a){Ub(function(){throw a;})},ac=function(a,b){Xb||(Ub(Yb),Xb=!0);Zb.push(new $b(a,b))},Xb=!1,Zb=[],Yb=function(){for(;Zb.length;){var a=Zb;Zb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.gb.call(c.scope)}catch(d){Wb(d)}}}Xb=!1},$b=function(a,b){this.gb=a;this.scope=b};var bc=function(a){a.prototype.then=a.prototype.J;a.prototype.$goog_labs_Thenable=!0},cc=function(a){if(!a)return!1;try{return!!a.$goog_labs_Thenable}catch(b){return!1}};var X=function(a,b){this.f=0;this.p=void 0;this.g=this.h=null;this.X=this.ma=!1;try{var c=this;a.call(b,function(a){W(c,2,a)},function(a){W(c,3,a)})}catch(d){W(this,3,d)}};X.prototype.J=function(a,b,c){return dc(this,n(a)?a:null,n(b)?b:null,c)};bc(X);X.prototype.cancel=function(a){0==this.f&&ac(function(){var b=new Y(a);ec(this,b)},this)};
var ec=function(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=-1,f=0,g;g=c.g[f];f++)if(g=g.Y)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(0==c.f&&1==d?ec(c,b):(d=c.g.splice(e,1)[0],fc(c),d.na(b)))}}else W(a,3,b)},hc=function(a,b){a.g&&a.g.length||2!=a.f&&3!=a.f||gc(a);a.g||(a.g=[]);a.g.push(b)},dc=function(a,b,c,d){var e={Y:null,Da:null,na:null};e.Y=new X(function(a,g){e.Da=b?function(c){try{var e=b.call(d,c);a(e)}catch(R){g(R)}}:a;e.na=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof
Y?g(b):a(e)}catch(R){g(R)}}:g});e.Y.h=a;hc(a,e);return e.Y};X.prototype.Ha=function(a){this.f=0;W(this,2,a)};X.prototype.Ia=function(a){this.f=0;W(this,3,a)};
var W=function(a,b,c){if(0==a.f){if(a==c)b=3,c=new TypeError("Promise cannot resolve to itself");else{if(cc(c)){a.f=1;c.J(a.Ha,a.Ia,a);return}var d=typeof c;if("object"==d&&null!=c||"function"==d)try{var e=c.then;if(n(e)){ic(a,c,e);return}}catch(f){b=3,c=f}}a.p=c;a.f=b;gc(a);3!=b||c instanceof Y||jc(a,c)}},ic=function(a,b,c){a.f=1;var d=!1,e=function(b){d||(d=!0,a.Ha(b))},f=function(b){d||(d=!0,a.Ia(b))};try{c.call(b,e,f)}catch(g){f(g)}},gc=function(a){a.ma||(a.ma=!0,ac(a.eb,a))};
X.prototype.eb=function(){for(;this.g&&this.g.length;){var a=this.g;this.g=[];for(var b=0;b<a.length;b++){var c=a[b],d=this.p;2==this.f?c.Da(d):(fc(this),c.na(d))}}this.ma=!1};var fc=function(a){for(;a&&a.X;a=a.h)a.X=!1},jc=function(a,b){a.X=!0;ac(function(){a.X&&kc.call(null,b)})},kc=Wb,Y=function(a){r.call(this,a)};q(Y,r);Y.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Z=function(a,b){this.S=[];this.Ba=a;this.za=b||null;this.K=this.C=!1;this.p=void 0;this.ka=this.Sa=this.ha=!1;this.T=0;this.h=null;this.fa=0};Z.prototype.cancel=function(a){if(this.C)this.p instanceof Z&&this.p.cancel();else{if(this.h){var b=this.h;delete this.h;a?b.cancel(a):(b.fa--,0>=b.fa&&b.cancel())}this.Ba?this.Ba.call(this.za,this):this.ka=!0;this.C||(a=new lc,mc(this),nc(this,!1,a))}};Z.prototype.Ca=function(a,b){this.ha=!1;nc(this,a,b)};
var nc=function(a,b,c){a.C=!0;a.p=c;a.K=!b;oc(a)},mc=function(a){if(a.C){if(!a.ka)throw new pc;a.ka=!1}},qc=function(a,b,c){a.S.push([b,c,void 0]);a.C&&oc(a)};Z.prototype.J=function(a,b,c){var d,e,f=new X(function(a,b){d=a;e=b});qc(this,d,function(a){a instanceof lc?f.cancel():e(a)});return f.J(a,b,c)};bc(Z);
var rc=function(a){return pa(a.S,function(a){return n(a[1])})},oc=function(a){if(a.T&&a.C&&rc(a)){var b=a.T,c=sc[b];c&&(k.clearTimeout(c.Ua),delete sc[b]);a.T=0}a.h&&(a.h.fa--,delete a.h);for(var b=a.p,d=c=!1;a.S.length&&!a.ha;){var e=a.S.shift(),f=e[0],g=e[1],e=e[2];if(f=a.K?g:f)try{var h=f.call(e||a.za,b);void 0!==h&&(a.K=a.K&&(h==b||h instanceof Error),a.p=b=h);cc(b)&&(d=!0,a.ha=!0)}catch(wa){b=wa,a.K=!0,rc(a)||(c=!0)}}a.p=b;d&&(h=p(a.Ca,a,!0),d=p(a.Ca,a,!1),b instanceof Z?(qc(b,h,d),b.Sa=!0):
b.J(h,d));c&&(c=++tc,sc[c]=new uc(c,b),a.T=c)},pc=function(){r.call(this)};q(pc,r);pc.prototype.message="Deferred has already fired";pc.prototype.name="AlreadyCalledError";var lc=function(){r.call(this)};q(lc,r);lc.prototype.message="Deferred was canceled";lc.prototype.name="CanceledError";var uc=function(a,b){this.t=a;this.$a=b;this.Ua=k.setTimeout(p(this.ab,this),0)};uc.prototype.ab=function(){delete sc[this.t];throw this.$a;};var sc={},tc=0;var wc=function(a){this.D={};this.qa={};this.oa={};this.w={};this.Ga={};this.ya={};this.Aa=a?a.Aa:new P;this.Ta=!a;this.M=null;a?(this.M=a,this.oa=a.oa,this.w=a.w,this.qa=a.qa,this.Ga=a.Ga):ga();a=vc(this);this!=a&&(a.U?a.U.push(this):a.U=[this])};q(wc,u);var vc=function(a){for(;a.M;)a=a.M;return a};
wc.prototype.get=function(a){var b;t:{for(b=this;b;b=b.M){if(b.Z)throw Error("AppContext is disposed.");if(b.D[a]){b=b.D[a][0];break t}if(b.ya[a])break}if(b=this.oa[a]){b=b(this);if(null==b)throw Error("Factory method for service "+a+" returned null or undefined.");xc(this,a,b)}else b=null}if(null==b)throw new yc(a);return b};
var xc=function(a,b,c){if(a.Z)Da(c);else{a.D[b]=[c,!0];c=zc(a,a,b);for(var d=0;d<c.length;d++){var e=c[d];mc(e);nc(e,!0,null)}delete a.qa[b]}},zc=function(a,b,c){var d=[],e=a.w[c];e&&(oa(e,function(a){var c;t:{for(c=a.Za;c;){if(c==b){c=!0;break t}c=c.M}c=!1}c&&(d.push(a.ib),qa(e,a))}),0==e.length&&delete a.w[c]);return d},Ac=function(a,b){a.w&&mb(a.w,function(a,d,e){oa(a,function(d){d.Za==b&&qa(a,d)});0==a.length&&delete e[d]})};
wc.prototype.b=function(){if(vc(this)==this){var a=this.U;if(a)for(;a.length;)a[0].u()}else for(var a=vc(this).U,b=0;b<a.length;b++)if(a[b]==this){a.splice(b,1);break}for(var c in this.D)a=this.D[c],a[1]&&"undefined"!=typeof a[0].u&&a[0].u();this.D=null;this.Ta&&this.Aa.u();Ac(this,this);this.w=null;Da(this.Va);this.ya=this.Va=null;wc.v.b.call(this)};var yc=function(a){r.call(this);this.id=a;this.message='Service for "'+a+'" is not registered'};q(yc,r);var Bc=new Rb("fva");new Qb(Bc,1);var Cc=function(a){try{this.c=window[a]}catch(b){this.c=null}},Dc=new Cc("localStorage");Cc.prototype.q=function(){if(!this.c)return[];for(var a=[],b=0;b<this.c.length;b++)a.push(this.c.key(b));return a};Cc.prototype.get=function(a){if(!this.c)return null;var b=null;try{b=this.c.getItem(a)}catch(c){}if(b)switch(b=JSON.parse(b),a=b.data,b.type){case "jspb":b=Aa[a[0]];if(!b)throw Error("Unknown JsPb message type: "+a[0]);a=new b(a)}else a=null;return a};
Cc.prototype.set=function(a,b){if(this.c){var c=null;b instanceof za&&(b=b.H,c="jspb");var d={};d.data=b;d.timestamp=ga();c&&(d.type=c);c=JSON.stringify(d);try{this.c.setItem(a,c)}catch(e){}}};Cc.prototype.remove=function(a){if(this.c)try{this.c.removeItem(a)}catch(b){}};var $=function(){this.Xa=new v;this.xa=Dc;this.va=!0;this.A()};$.Na=function(){return $.Pa?$.Pa:$.Pa=new $};$.prototype.A=function(a){var b=a||ba;this.va?b():chrome.storage.local.get(p(function(a){if(!this.va){for(var d in a)this.Xa.set(d,a[d]);this.va=!0}b()},this))};$.prototype.get=function(a){return this.xa.get(a)};$.prototype.set=function(a,b){this.xa.set(a,b)};$.prototype.remove=function(a){this.xa.remove(a)};window.addEventListener("load",function(){$.Na().A(function(){var a=new wc;xc(a,la,$.Na());(new V(a)).A()})},!1);k.ace_i18n={chrome_ext_short_name:{message:"Hangouts"},chrome_ext_description:{message:"Hangouts brings conversations to life with photos, emoji, and even group video calls for free."},quasar_chat_toast_info:{message:"Click to go to page..."},quasar_answer_button_text:{message:"Answer"},quasar_decline_button_text:{message:"Decline"},quasar_help:{message:"Help"},quasar_legend_startup_shutdown:{message:"Application"},chrome_ext_run_at_browser_start:{message:"Sign in to Hangouts when Chrome starts"},
chrome_ext_run_after_browser_close:{message:"Allow background mode"},chrome_ext_new_windows_topmost:{message:"Keep Hangouts on top of other windows"},quasar_label_tray_icon:{message:"Show system tray icon"},quasar_legend_notifications:{message:"Notifications"},quasar_label_all_notification:{message:"Disable notifications"},quasar_label_chat_notification:{message:"Disable chat notifications"},quasar_label_toast_timeout_chat:{message:"Allow chat notifications to timeout automatically"},quasar_label_toast_duration_chat:{message:"Timeout length (in seconds):"},
quasar_button_save:{message:"Ok"},quasar_button_apply:{message:"Apply"},quasar_button_cancel:{message:"Cancel"},chrome_ext_menutext_feedback:{message:"Send feedback"},quasar_feedback_server_uri:{message:"https://www.google.com/tools/feedback"},chrome_ext_feedback_subtitle:{message:"Send feedback"},chrome_ext_feedback_comments:{message:"Comments"},quasar_feedback_system_legend:{message:"System Information"},quasar_feedback_platform_label:{message:"Platform:"},quasar_feedback_user_agent_label:{message:"User Agent:"},
quasar_feedback_privacy_legend:{message:"Privacy Statement"},quasar_feedback_privacy_text:{message:"The description, product information, additional information and your email address will be sent to Google. See the Google Feedback Terms of Service. By submitting this content you are granting to Google the right to use it to improve our products and services. See our Privacy Policy."},quasar_feedback_submit_button:{message:"Send Feedback"},quasar_feedback_cancel_button:{message:"Cancel"},quasar_video_title:{message:"Video call from $1...",
placeholders:{1:{content:"$1"}}},quasar_voice_title:{message:"Voice call from $1...",placeholders:{1:{content:"$1"}}},quasar_group_chat_title:{message:"From group chat..."},quasar_chat_title:{message:"$1 says...",placeholders:{1:{content:"$1"}}},quasar_hangout_title:{message:"$1 is hanging out",placeholders:{1:{content:"$1"}}},chrome_ext_oneonone_plus_hangout_details:{message:"is video calling you via Hangouts"},chrome_ext_group_plus_hangout_details:{message:"has invited you to a group Hangout video call"},
quasar_video_details:{message:"is calling you with video chat"},quasar_voice_details:{message:"is calling you"},quasar_tip_connected:{message:"Status: Connected"},chrome_ext_tip_connected_missed_messages:{message:"Status: Connected\nMissed messages"},quasar_tip_connecting:{message:"Status: Connecting"},quasar_tip_reconnecting:{message:"Status: Reconnecting"},quasar_tip_disconnected:{message:"Status: Disconnected"},quasar_tip_not_login:{message:"Status: Not logged in"},quasar_tip_not_load:{message:"Status: Loading error"},
chrome_ext_menutext_unsigned_user:{message:"Not signed in"},quasar_menutext_unknown_user:{message:"Unknown"},quasar_menutext_feedback:{message:"Feedback"},quasar_menutext_settings:{message:"Options"},quasar_menutext_quit:{message:"Exit"},quasar_menutext_signout:{message:"Sign out"},chrome_ext_cannot_connect:{message:"Unable to connect to Google. Please check your internet connection."},quasar_try_now:{message:"Try now"},quasar_sign_in_to_start_talking:{message:"Sign in to start talking with friends"},
quasar_sign_in:{message:"Sign in"}};})()

/* Copyright 2011 Google Inc. All Rights Reserved. */ (function(){var g=RegExp("<[^>]*>","g"),n=RegExp("[<>]","g"),p="\" ' ( ) , - . / 1 2 2012 : ? a about and are as be but com for from have i in is it like may more my next not of on search that the this to was when with you your".split(" "),q={},t=0,u=-1,v=-1,w=function(a){a=a.replace(g,"");a=a.replace(n,"");return a=a.substring(0,100).toLowerCase()},x=function(){q=JSON.parse(window.localStorage.options)},y=function(a,b,c){"initialize"==a.type&&(a={instanceId:t++},c(a))},z=function(a,b,c){"options"==a.type&&c({options:q})},
C=function(a,b,c){if("fetch_raw"!=a.type&&"fetch_html"!=a.type)return!1;_gaq&&_gaq.push(["_trackEvent","lookup",a.type]);-1!=u&&v!=a.instanceId&&chrome.tabs.sendMessage(u,{type:"hide",instanceId:v});"fetch_raw"==a.type?(u=b.tab.id,v=a.instanceId):v=u=-1;var d=w(a.query),e={request:a,sanitizedQuery:d,dictResponse:null,enDictResponse:null,translateResponse:null,tabLangTranslateResponse:null,tabLang:null,numResponses:0,callback:c};b="pr,de";"fetch_html"==a.type&&(b="pr,de,sy");google.language.define(d,
q.language,q.language,function(a){e.dictResponse=a;A(e)},{restricts:b});"en"!=q.language&&google.language.define(d,"en","en",function(a){e.enDictResponse=a;A(e)},{restricts:b});B(d,"auto",function(a){e.translateResponse=a;A(e)});chrome.tabs.getSelected(null,function(a){var b=window.setTimeout(function(){e.tabLangTranslateResponse||(e.tabLangTranslateResponse=null,A(e))},800);chrome.tabs.detectLanguage(a.id,function(a){window.clearTimeout(b);"und"!=a&&(e.tabLang="he"==a?"iw":a,B(d,e.tabLang,function(a){e.tabLangTranslateResponse=
a;A(e)}))})});return!0},B=function(a,b,c){var d=new XMLHttpRequest;d.open("GET","https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl="+b+"&tl="+q.language+"&q="+encodeURIComponent(a),!0);d.onreadystatechange=function(){if(4==d.readyState)try{c(JSON.parse(d.responseText))}catch(a){c(null)}};d.send()},A=function(a){var b=3;"en"!=q.language&&(b=4);a.numResponses++;if(a.numResponses==b){var c=D(a.dictResponse),d=c;"en"!=q.language&&(d=D(a.enDictResponse));var e=E(a.translateResponse,!0),
f=E(a.tabLangTranslateResponse,!0),h=q.language.toLowerCase(),k=!1,l=b=null;f&&a.tabLang!=h?(k=!0,b=a.tabLangTranslateResponse,l=f):!c&&e&&(k=!0,b=a.translateResponse,l=e);h=k?"translation":"definition";f||(c||e)||(h="none");_gaq&&_gaq.push(["_trackEvent","lookup","type_"+h]);var m=encodeURIComponent(a.sanitizedQuery),f="";k&&(f="http://translate.google.com/translate_t?source=dict-chrome-ex&sl="+l.srcLang+"&tl="+q.language+"&q="+m);h="http://www.google.com/search?source=dict-chrome-ex&defl="+q.language+
"&hl="+q.language+"&q="+m+"&tbo=1&tbs=dfn:1";"en"==q.language&&(h="http://www.google.com/search?q=define+"+m);if("fetch_html"==a.request.type){if(k)if(c=E(b,!1)){c='<div class="translate-main">'+c.meaningText+'</div><div class="translate-attrib">('+c.attribution+")</div>";d="";if(b.dict&&0<b.dict.length)for(d='<h3 class="dct-tl">Translated definitions</h3>',e=0,k=b.dict.length;e<k;e++){l=b.dict[e];d+="<b>"+l.pos+"</b><ol>";h=0;for(m=l.terms.length;h<m;h++){var r=l.terms[h];0<r.length&&(d+="<li>"+
r+"</li>")}d+="</ol>"}b=c+d+('<br><div class="translate-powered">Powered by <a href="'+f+'" class="translate-link">Google Translate</a></div><br>')}else b="";else if(f=a.dictResponse,b=h,!f||f.error)b="";else{c=google.language.dictionary.createResultHtml(f);f=document.createElement("div");f.innerHTML=c;c=f.getElementsByTagName("a");for(d=c.length-1;0<=d;d--)e=c[d],"Google Dictionary"==e.innerText&&0==e.href.lastIndexOf("http://www.google.com/dictionary",0)&&(e.href=b);b=f.innerHTML}b={eventKey:a.request.eventKey,
sanitizedQuery:a.sanitizedQuery,html:b}}else{b=null;k?(b=l,b.moreUrl=f,d&&(d.audio&&"en"==e.srcLang.toLowerCase())&&(b.audio=d.audio)):c&&(b=c,b.moreUrl=h);b&&!b.prettyQuery&&(b.prettyQuery=a.sanitizedQuery);f=!1;if(c="true"==q.popupDblclick&&"none"==q.popupDblclickKey||"true"==q.popupSelect&&"none"==q.popupSelectKey)e:{c=0;for(d=p.length;c<d;c++)if(a.sanitizedQuery==p[c]){c=!0;break e}c=!1}c&&(f=!0);b={eventKey:a.request.eventKey,sanitizedQuery:a.sanitizedQuery,meaningObj:b,showOptionsTip:f}}a.callback(b)}},
E=function(a,b){if(!a||a.sentences[0].orig.toLowerCase()==a.sentences[0].trans.toLowerCase())return null;var c=a.sentences[0].orig.toLowerCase(),d=a.sentences[0].trans.toLowerCase(),e=d;if(b&&a.dict&&0<a.dict.length)for(var f=0,h=a.dict.length;f<h;f++)for(var k=a.dict[f],l=0,m=0,r=k.terms.length;m<r&&2>l;m++){var s=k.terms[m].toLowerCase();0<s.length&&(s!=c&&s!=d)&&(e+=", "+s,l++)}(c=window["gdx.LANG_MAP"][a.src.toLowerCase()])||(c=a.src);return{type:"translation",meaningText:e,attribution:"Translated from "+
c,srcLang:a.src}},F=function(a,b){for(var c=0,d;d=a[c];c++)if(d.type&&d.type==b&&d.text)return d.text;return""},G=function(a){if(!a||0==a.length)return null;for(var b=0,c;c=a[b];b++)for(var d=0,e;e=c.entries[d];d++)if("meaning"==e.type&&e.terms&&0<e.terms.length){var f=F(e.terms,"text");if(f)return a=F(c.terms,"sound").replace("http://","https://"),{prettyQuery:F(c.terms,"text"),meaningText:f,audio:a,attribution:F(e.terms,"url")}}return null},D=function(a){if(!a||a.error)return null;var b=G(a.primaries);
b?(b.attribution="",b.type="licensedDef"):(b=G(a.webDefinitions))&&(b.type="webDef");return b},I=function(){var a=H,b={};b.language=a.language||"en";var c=function(a,b){return"true"==a||"false"==a?a:!0==a?"true":!1==a?"false":b};b.popupDblclick=c(a.popupDblclick,"true");b.popupSelect=c(a.popupSelect,"false");b.enableHttps=c(a.enableHttps,"true");b.popupDblclickKey=a.popupDblclickKey||"none";b.popupSelectKey=a.popupSelectKey||"ctrl";a.popupMode&&("popup_disabled"==a.popupMode?b.popupDblclick="false":
"popup_key_ctrl"==a.popupMode&&(b.popupDblclickKey="ctrl",b.popupSelect="true",b.popupSelectKey="ctrl"));return b},J=J||!1;if("undefined"==typeof J||!J){dict_api.load("https://clients5.google.com?client=dict-chrome-ex","1","en");var K=window.localStorage.options,H={};K&&(H=JSON.parse(K));q=I();window.localStorage.options=JSON.stringify(q);chrome.extension.onMessage.addListener(y);chrome.extension.onMessage.addListener(z);chrome.extension.onMessage.addListener(C);window["gdx.updateOptions"]=x};})();

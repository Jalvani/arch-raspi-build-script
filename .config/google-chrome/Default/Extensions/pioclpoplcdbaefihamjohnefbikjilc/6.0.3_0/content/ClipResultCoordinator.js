function ClipResultCoordinator(){function c(b){a&&a.parentNode&&(b?(a.addEventListener("webkitAnimationEnd",function(){a.parentNode.removeChild(a);a=null},!1),a.className="hide"):(a.parentNode.removeChild(a),a=null))}function d(b,d){c(!1);a=document.createElement("iframe");a.id="evernoteClipperResult";a.style.cssText+=" visibility: visible !important;";/^frameset$/i.test(document.body.nodeName)?document.body.parentNode.insertBefore(a,null):document.body.insertBefore(a,null);a.addEventListener("load",
d);a.src=Browser.extension.getURL("content/clip_result/clip_result.html#"+b);window.focus()}var a;window.addEventListener("click",c);window.addEventListener("message",function(b){"setClipResultHeight"==b.data.name?a&&(a.style.height=b.data.height+"px"):"hideClipResult"==b.data.name&&c(!0)});this.hideClipResult=c;this.setInfo=function(b){a&&a.contentWindow.postMessage(b,Browser.extension.getURL(""))};this.showClipResult=d;Browser.addMessageHandlers({showClipResult:function(a,c,e){d(a.pendingNoteKey,
function(){document.body.style.overflow="";Browser.sendToExtension({name:"clipResultShown",pendingNoteKey:a.pendingNoteKey,userId:a.userId,userType:a.userType})})}});Object.preventExtensions(this)}Object.preventExtensions(ClipResultCoordinator);

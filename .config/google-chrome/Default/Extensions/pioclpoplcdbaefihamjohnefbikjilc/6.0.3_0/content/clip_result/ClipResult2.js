Browser.addMessageHandlers({content_showClipResult:msgHandlerShowClipResult,content_siteNotesReady:msgHandlerSiteNotesReady,content_waitComplete:waitComplete,content_getAttributes:startWithAttributes,content_dismissClipResult:dismiss,config:msgHandlerConfig,clipResult_isAuthenticated:msgHandlerIsAuthenticated,content_relatedNotesReady:msgHandlerRelatedNotesReady,showFoodPromo:msgHandlerShowFoodPromo});
function msgHandlerConfig(a,b,c){if(!configComplete)for(configComplete=!0,options=a.options,bootstrapInfo=a.bootstrapInfo,baseUrl=options.secureProto+bootstrapInfo.serviceHost,options.showRelatedNotes?(document.querySelector("#hideRelatedControl").innerHTML=Browser.i18n.getMessage("hideRelatedNotes"),document.querySelector("#hideRelated img").className=""):(document.querySelector("#hideRelatedControl").innerHTML=Browser.i18n.getMessage("showRelatedNotes"),document.querySelector("#hideRelated img").className=
"reversed"),relatedSnippets=new NoteSnippets(document.querySelector("#relatedNotesContainer"),baseUrl,auth.userId,auth.shardId,options.client,{pers:auth.authenticationToken,biz:auth.bizAuthenticationToken}),siteSnippets=new NoteSnippets(document.querySelector("#siteNotesContainer"),baseUrl,auth.userId,auth.shardId,options.client,{pers:auth.authenticationToken,biz:auth.bizAuthenticationToken}),parent.postMessage({name:"content_getAttributes"},"*"),a=0;a<waitingOnConfig.length;a++)b=waitingOnConfig[a],
b[0].apply(this,b[1])}function startWithAttributes(a,b,c){attrs||(attrs={});if(!0!==a.attrs)for(var d in a.attrs)attrs[d]=a.attrs[d];attrs.title&&(title=attrs.title);message&&notesAndAttrsReady();startupComplete||(doneWaiting?showSyncing():showClipping())}
function hideOverlay(){Persistent.set("suppressRelatedNotesDiscoveryNotice",!0);var a=document.querySelector(".newFeatureOverlay");a.className+=" hidden";a.addEventListener("webkitAnimationEnd",function(){a.style.display="none"},!1);document.removeEventListener("click",hideOverlay)}
function msgHandlerSiteNotesReady(a,b,c){configComplete?!siteNotes&&a&&a.notes&&(siteNotes=a.notes,attrs&&attrs.notebookGuid&&!/^shared_/.test(attrs.notebookGuid)&&message&&message.success&&(siteNotes.notes.list.shift(),siteNotes.totalNotes--),siteSnippets.setNotes(siteNotes.notes.list,siteNotes.totalNotes)):waitingOnConfig.push([msgHandlerSiteNotesReady,[a,b,c]])}
function msgHandlerRelatedNotesReady(a,b,c){attrs||(attrs={});if(a.relatedNotes){attrs.relatedNotes=a.relatedNotes.list;relatedSnippets.setNotes(attrs.relatedNotes);if(relatedSnippets.hasAtLeastOneNotebookName())for(a=document.querySelectorAll("#relatedNotesContainer, #siteNotesContainer, #slider, #relatedNotesScrollable, #relatedNotes"),b=0;b<a.length&&!/hasNotebookName/.test(a[b].className);b++)a[b].className+=" hasNotebookName";relatedShown=!1;showRelated()}}
function notesAndAttrsReady(){var a=document.getElementById("relatedNotesButton");if(a&&(a=a.getBoundingClientRect().width)){var b=document.getElementById("siteSearchButton");b&&(b.style.maxWidth=413-a+"px")}doneWaiting&&showRelated();finishedPrereq()}function waitComplete(){doneWaiting=!0;showSyncing()}
function setTitle(a,b){a||(a=Browser.i18n.getMessage("quickNote_untitledNote"));a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");setHeadline(Browser.i18n.getMessage(b,[a]))}function showSyncing(){showActiveIcon();setTitle(title,"contentclipper_syncing");attrs&&attrs.relatedNotes&&showRelated()}
function showClipping(){document.querySelector(errorActions).style.display="none";document.querySelector(successActions).style.display="none";showClippingIcon();title?setTitle(title,"contentclipper_clipping"):setTitle(title,"contentclipper_clipping_no_title")}
function msgHandlerShowClipResult(a,b,c){if(configComplete){doneWaiting=!0;message=a.message;if(!attrs||!attrs.relatedNotes||attrs.relatedNotes&&0==attrs.relatedNotes.length)if(attrs||(attrs={}),message.relatedNotes){attrs.relatedNotes=message.relatedNotes.list;relatedSnippets.setNotes(attrs.relatedNotes);if(relatedSnippets.hasAtLeastOneNotebookName())for(a=document.querySelectorAll("#relatedNotesContainer, #siteNotesContainer, #slider, #relatedNotesScrollable, #relatedNotes"),b=0;b<a.length&&!/hasNotebookName/.test(a[b].className);b++)a[b].className+=
" hasNotebookName";relatedShown=!1}notesAndAttrsReady();finishedPrereq()}else waitingOnConfig.push([msgHandlerShowClipResult,[a,b,c]])}
function addHandlers(){document.querySelector("#hideRelated").addEventListener("click",function(){Browser.sendToExtension({name:"main_recordActivity"});var a=document.querySelector("#relatedNotes"),b=document.querySelector("#hideRelated img"),c=document.querySelector("#hideRelatedControl");a.className.match("expanded")?(a.className=a.className.replace("expanded","")+" contracted",b.className="reversing",c.textContent=Browser.i18n.getMessage("showRelatedNotes"),Browser.sendToExtension({name:"main_setOption",
options:{showRelatedNotes:!1}})):(a.className=a.className.replace("contracted","")+" expanded",b.className="unreversing",c.textContent=Browser.i18n.getMessage("hideRelatedNotes"),Browser.sendToExtension({name:"main_setOption",options:{showRelatedNotes:!0}}));return!1});document.querySelector("#closeResultControl").addEventListener("click",function(){dismiss()});document.querySelector("#relatedNotesButton").addEventListener("click",handleRelatedNotesClick)}
function handleSiteSearchClick(){Browser.sendToExtension({name:"main_recordActivity"});var a=document.querySelector("#relatedNotesButton").className;document.querySelector("#relatedNotesButton").className=a.replace(/(^|\s+)selected($|\s+)/,"");document.querySelector("#siteSearchButton").className="selected";document.querySelector("#slider").className=document.querySelector("#slider").className.replace(/show\w+/g,"")+" showRight";siteNotesRequested||(parent.postMessage({name:"content_frameReady"},
"*"),siteNotesRequested=!0)}function handleRelatedNotesClick(){Browser.sendToExtension({name:"main_recordActivity"});document.querySelector("#slider").className=document.querySelector("#slider").className.replace(/show\w+/g,"")+" showLeft";var a=document.querySelector("#siteSearchButton").className;document.querySelector("#siteSearchButton").className=a.replace(/(^|\s+)selected($|\s+)/,"");document.querySelector("#relatedNotesButton").className="selected"}
function handleComplete(){message&&message.lookupKey&&message.success?(Browser.sendToExtension({name:"main_getNoteByKeyAndClear",lookupKey:message.lookupKey}),handleSuccess()):handleFailure()}
function handleSuccess(){clear();showSuccessIcon();setTitle(message.title,"desktopNotification_clipUploaded");document.querySelector(successActions).style.display="block";message.linked?(document.querySelector("#viewClip").addEventListener("click",function(a){doSharedNoteSuccessAction("view",a)}),document.querySelector("#editClip").style.display="none",document.querySelector("#editClip").previousElementSibling.style.display="none"):(document.querySelector("#viewClip").addEventListener("click",function(a){doNoteSuccessAction("view",
a)}),document.querySelector("#editClip").addEventListener("click",function(a){doNoteSuccessAction("edit",a)}));showRelated()}
function showRelated(){if(!relatedShown){relatedShown=!0;Persistent.get("suppressRelatedNotesDiscoveryNotice")||(Persistent.set("suppressRelatedNotesDiscoveryNotice",!0),document.querySelector(".newFeatureOverlay").style.display="",document.addEventListener("click",hideOverlay));if(attrs&&attrs.relatedNotes&&attrs.relatedNotes.length){document.querySelector("#hideRelated").style.display="";relatedSnippets.setNotes(attrs.relatedNotes);if(relatedSnippets.hasAtLeastOneNotebookName())for(var a=document.querySelectorAll("#relatedNotesContainer, #siteNotesContainer, #slider, #relatedNotesScrollable, #relatedNotes"),
b=0;b<a.length;b++)a[b].className+=" hasNotebookName";options.showRelatedNotes&&relatedSnippets.show();attrs.relatedNotes&&0!=attrs.relatedNotes.length||(handleSiteSearchClick(),document.querySelector("#relatedNotesButton").className="disabled",document.querySelector("#relatedNotesButton").removeEventListener("click",handleRelatedNotesClick));a="";attrs&&attrs.url&&(a=attrs.url.replace(/^https?:\/\/(.*?)\/.*/,"$1"));document.querySelector("#siteSearchButton").innerHTML=Browser.i18n.getMessage("clipsFromThisSite",
a);document.querySelector("#siteSearchButton").addEventListener("click",handleSiteSearchClick)}document.querySelector("#footer").className="expanded"}}
function handleFailure(){clear();showErrorIcon();isError=!0;message||(message={});document.querySelector("#retryClip").addEventListener("click",function(a){doNoteFailureAction("retry",a)});document.querySelector("#cancelClip").addEventListener("click",function(a){doNoteFailureAction("cancel",a)});if("quotaExceeded"==message.errorType)auth.premium?setHeadline(Browser.i18n.getMessage("notification_quotaExceededPremium",[baseUrl+"/QuotaCheckout.action"])):setHeadline(Browser.i18n.getMessage("notification_quotaExceededFree",
[baseUrl+"/Checkout.action"])),document.querySelector(errorActions).style.display="block";else if("http"==message.errorType)setTitle(message.title,"desktopNotification_unableToSaveClip"),document.querySelector(errorActions).style.display="block";else if("tooManyRetries"==message.errorType)setTitle(message.title,"desktopNotification_clipProcessorTooManyRetries");else if("authenticationToken"==message.errorType)setTitle(message.title,"desktopNotification_clipProcessorSignInTitle"),setDetails(Browser.i18n.getMessage("desktopNotification_clipProcessorSignInMessage")),
document.querySelector(errorActions).style.display="block";else if("unknownNotebook"==message.errorType)setTitle(message.title,"desktopNotification_unableToSaveClip"),setDetails(Browser.i18n.getMessage("EDAMError_1_notebookGuid"));else if("noteSizeExceeded"==message.errorType)auth.premium?setTitle(message.title,"noteSizeExceededPremium"):setHeadline(Browser.i18n.getMessage("noteSizeExceededFree",[baseUrl]));else if("authExpired"==message.errorType)setHeadline(Browser.i18n.getMessage("authExpired"));
else{var a="None Given.";""!=message.errorType&&(a=message.errorType);setHeadline(Browser.i18n.getMessage("desktopNotification_unableToSaveClipUnknown"));setDetails(Browser.i18n.getMessage("desktopNotification_unableToSaveClipUnknownMessage",[a]));document.querySelector(errorActions).style.display="block"}document.querySelector("#notificationHeadline a")&&document.querySelector("#notificationHeadline a").addEventListener("click",function(a){Browser.sendToExtension({name:"main_openTab",url:this.href});
a.preventDefault();return!1});document.querySelector("#footer").className="expanded"}function dismiss(){message&&message.lookupKey&&Browser.sendToExtension({name:"main_getNoteByKeyAndClear",lookupKey:message.lookupKey});parent&&parent.postMessage({name:"content_hideClipResult"},"*")}
function doNoteFailureAction(a,b){var c=null;"cancel"===a?c="main_getNoteByKeyAndClear":"retry"==a&&(c="main_getNoteByKeyAndRetry");c&&message.lookupKey?(Browser.sendToExtension({name:c,lookupKey:message.lookupKey}),parent&&parent.postMessage({name:"content_hideClipResult"},"*")):log.warn("Can't look up message info so can't retry or cancel it.");b&&b.stopPropagation()}
function doSharedNoteSuccessAction(a,b){if("view"==a){var c=GlobalUtils.getNoteURI(options.client,baseUrl,message,a,auth.userId,0,{pers:auth.authenticationToken,biz:auth.bizAuthenticationToken});"WEB"==options.client?Browser.sendToExtension({name:"main_openWindow",width:800,height:600,url:c}):"DESKTOP"==options.client&&window.location.assign(c)}b.stopPropagation()}
function doNoteSuccessAction(a,b){Browser.sendToExtension({name:"main_recordActivity"});var c=GlobalUtils.getNoteURI(options.client,baseUrl,message,a,auth.userId,0,{pers:auth.authenticationToken,biz:auth.bizAuthenticationToken});"WEB"==options.client?Browser.sendToExtension({name:"main_openWindow",width:800,height:600,url:c}):"DESKTOP"==options.client&&window.location.assign(c);b.stopPropagation()}
function clear(){document.querySelector(notificationHeadline).innerHTML="";document.querySelector(notificationDetails).innerHTML="";document.querySelector(successActions).style.display="none";document.querySelector(errorActions).style.display="none"}
function showSuccessIcon(){document.querySelector(errorIcon).style.display="none";document.querySelector(activeIcon).style.display="none";document.querySelector(clippingIcon).style.display="none";document.querySelector(successIcon).style.display="inline-block"}
function showErrorIcon(){document.querySelector(successIcon).style.display="none";document.querySelector(activeIcon).style.display="none";document.querySelector(clippingIcon).style.display="none";document.querySelector(errorIcon).style.display="inline-block"}
function showActiveIcon(){document.querySelector(errorIcon).style.display="none";document.querySelector(successIcon).style.display="none";document.querySelector(clippingIcon).style.display="none";document.querySelector(activeIcon).style.display="inline-block"}
function showClippingIcon(){document.querySelector(errorIcon).style.display="none";document.querySelector(successIcon).style.display="none";document.querySelector(activeIcon).style.display="none";document.querySelector(clippingIcon).style.display="inline-block"}function setHeadline(a){document.querySelector(notificationHeadline).innerHTML=a}function setDetails(a){document.querySelector(notificationDetails).innerHTML=a}
function msgHandlerIsAuthenticated(a,b,c){auth=a.auth;Browser.sendToExtension({name:"main_getConfig",options:{secureProto:null,showRelatedNotes:null,client:null},bootstrapInfo:{serviceHost:null,marketingUrl:null}})}function msgHandlerShowFoodPromo(a,b,c){document.querySelector("#foodPromo").style.display="block"};

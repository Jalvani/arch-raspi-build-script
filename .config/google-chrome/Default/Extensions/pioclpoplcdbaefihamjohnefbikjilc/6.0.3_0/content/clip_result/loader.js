function ClipResult(){function c(a){Browser.sendToExtension({name:"bounce",message:{name:"content_getAttributes",attrs:d}})}function e(a,b,c){Browser.sendToExtension({name:"main_performNoteSearch",resultSpec:{includeTitle:!0,includeUpdated:!0,includeAttributes:!0,includeLargestResourceMime:!0,includeLargestResourceSize:!0,includeNotebookGuid:!0,includeUpdateSequenceNum:!0},noteFilter:{order:2,words:buildSiteQuery()}})}var d=null;window.addEventListener("message",function(a){if(a&&a.data&&a.data.name){var b=
{content_getAttributes:c,content_frameReady:e};if(a.data.name&&b[a.data.name])b[a.data.name](a.data,null,null)}});Browser.addMessageHandlers({noteSearchResult:receiveSiteNotes});Object.preventExtensions(this)}Object.preventExtensions(ClipResult);var clipResult;window.parent===window&&(clipResult=new ClipResult);

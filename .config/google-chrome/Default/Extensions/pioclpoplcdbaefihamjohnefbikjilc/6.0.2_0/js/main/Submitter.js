function Submitter(p,E,t,z,u,g,v){function A(a,b,h,e,g){var d=new Resource;d.data=new Data;d.data.body=a;b&&(d.mime=b);d.attributes=new ResourceAttributes;d.attributes.sourceURL=h;d.attributes.attachment=g?!0:!1;e?d.attributes.fileName=e:(a=decodeURIComponent(/.+\/(.+)$/.exec(h)[1]),b&&/(pdf|gif|png|jpe?g)$/i.test(b)?/\.(pdf|gif|png|jpe?g)$/i.test(a)?d.attributes.fileName=a:/pdf/i.test(b)?d.attributes.fileName="resource.pdf":/gif/i.test(b)?d.attributes.fileName="resource.gif":/png/i.test(b)?d.attributes.fileName=
"resource.png":/jpe?g/i.test(b)&&(d.attributes.fileName="resource.jpg"):d.attributes.fileName=a);return d}function w(a,b,h,e){var g=!0;if(/<embed src=/.test(h)||e)g=!1;e="";if(g)if(e="<div",/style=\"(.[^"]+)\"/i.test(h)){var d=/style=\"(.[^"]+)\"/i.exec(h)[1];/display/i.test(d)||(d+="display:inline-block;");e+=' style="'+d+'">'}else e+=' style="display:inline-block;">';e+='<en-media type="';a=SparkMD5.ArrayBuffer.hash(a);e+=b+'" hash="'+a+'"';b="height width usemap align border hspace vspace longdesc alt".split(" ");
for(a=0;a<b.length;a++)(d=RegExp(b[a]+'="([^"]*)"',"i").exec(h))&&""!=d[1].trim()&&(e+=" "+b[a]+'="'+d[1]+'"');e+="></en-media>";g&&(e+="</div>");return e}function G(a){log.error(a.__proto__.name+JSON.stringify(a));v&&v(!1);var b;switch(a.name){case "EDAMNotFoundException":"Note.notebookGuid"==a.identifier&&(b="unknownNotebook");break;case "EDAMUserException":switch(a.errorCode){case EDAMErrorCode.LIMIT_REACHED:switch(a.parameter){case "Note.size":b="noteSizeExceeded";break;case "Resource.data.size":b=
"noteSizeExceeded"}break;case EDAMErrorCode.QUOTA_REACHED:"Accounting.uploadLimit"==a.parameter&&(b="overQuota")}}Browser.sendToTab(u,{name:"handleFailure",error:b})}function H(a){function b(b,c){var d={guid:a.guid,noteSize:q,shardId:/^"?S=([^:]+)/.exec(r)[1],recipe:b,skitch:c},e={name:"handleSuccess",noteSize:q,noteGuid:a.guid,shardId:/^"?S=([^:]+)/.exec(r)[1],attributes:a.attributes,recipe:b,skitch:c,uploaded:Persistent.get("uploaded"),savedAuthInfo:Persistent.get("savedAuthInfo"),shownNearQuotaUpsell:Persistent.get("shownNearQuotaUpsell")};
v&&v(d);Browser.sendToTab(u,e)}function h(){x.getNote(r,a.guid,!1,!1,!1,!1,function(a){a.attributes&&a.attributes.classifications&&("001"==a.attributes.classifications.recipe||"002"==a.attributes.classifications.recipe)?((a=Persistent.get(g+"_foodClipsCount"))||(a=0),Persistent.set(g+"_foodClipsCount",++a),0==(a-1)%3?((a=Persistent.get(g+"_foodPromoShownCount"))||(a=0),Persistent.set(g+"_foodPromoShownCount",++a),b(!0)):b()):b()},function(a){log.error(JSON.stringify(a));b()})}function e(){var b=Persistent.get(g+
"_foodPromoShownCount");return!b||0<b&&10>b}function F(){var b=Persistent.get(g+"_skitchPromoShownCount"),a=Persistent.get(g+"_skitchClipsCount");a||(a=0);return B&&(!b||0<b&&10>b)&&0==(a-1)%3}console.log(a);if(B){var d=Persistent.get(g+"_skitchClipsCount");d||(d=0);Persistent.set(g+"_skitchClipsCount",++d)}F()||e()?I.getCrossPromotionInfo(p.pers,function(a){J=a.usesSkitchAndroid||a.usesSkitchIOS||a.usesSkitchMac||a.usesSkitchWindows||!1;K=a.usesFoodAndroid||a.usesFoodIOS||!1;J&&Persistent.set(g+
"_skitchPromoShownCount",10);K&&Persistent.set(g+"_foodPromoShownCount",10);F()?((a=Persistent.get(g+"_skitchPromoShownCount"))||(a=0),Persistent.set(g+"_skitchPromoShownCount",++a),b(!1,!0)):e()?h():b()},function(a){log.error(JSON.stringify(a));b()}):b()}function M(a){for(var b=[/<img.+?src="(.[^"]+)"/,/<embed.+?src="(.[^"]+)"/,/<div.+?evernote_attachment_url="(.[^"]+)"/],h=0;h<b.length;h++)if(b[h].test(a))return b[h];return!1}var x,L,I,C,q=0,B=!1,r=p.submit,D=p.previous,y,J=!1,K=!1;this.createNoteWithThrift=
function(a,b,h){function e(){if(g&&d==p){q=c.content.length;if(c.resources)for(var a=0;a<c.resources.length;a++)q+=c.resources[a].data.body.byteLength;E&&q>EDAM_NOTE_SIZE_MAX_PREMIUM||!E&&q>EDAM_NOTE_SIZE_MAX_FREE?Browser.sendToTab(u,{name:"handleFailure",error:"noteSizeExceeded"}):(Browser.sendToTab(u,{name:"showSyncing"}),t&&y==C?(c.guid=t,x.updateNote(r,c,H,G)):(t&&L.deleteNote(D,t,function(){},function(a){log.error("error deleting note: "+a.__proto__.name+JSON.stringify(a))}),x.createNote(r,c,
H,G)))}}var g=!1,d=0,p=0,c=new Note;c.title=a.title;c.notebookGuid=a.notebookGuid;c.attributes=new NoteAttributes;"evernote.skitch"==a.contentClass&&(B=!0);c.attributes.source="Clearly"==a.contentClass?"Clearly":"web.clip";c.attributes.sourceURL=a.url;c.content='<?xml version="1.0" encoding="utf-8"?><!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd"><en-note>';a.comment&&(c.content+=a.comment+"<hr/>");b=b.split(/(<div evernote_attachment_url.+?<\/div>)|(<img.+?<\/img>)|(<embed.+?<\/embed>)|(<em[^>]+?clearly.+?<\/em>)|(<highlight.*?<\/highlight>)/);
for(var k=0;k<b.length;k++)if(b[k]){var f=M(b[k]);if(f)if(f=GlobalUtils.unescapeXML(f.exec(b[k])[1]),/^https?:\/\//.test(f)){var l=new XMLHttpRequest;l.open("GET",f,!0);l.responseType="blob";l.url=f;l.original=b[k];/evernote_attachment_name="(.+?)"/.test(b[k])&&(l.fileName=/evernote_attachment_name="(.+?)"/.exec(b[k])[1]);d++;c.content+="clipper|"+f+"|clipper";l.onreadystatechange=function(){if(4==this.readyState)if(200==this.status&&this.response){var a=new FileReader;a.contentType=this.getResponseHeader("Content-Type");
a.url=this.url;a.fileName=this.fileName;a.original=this.original;a.onloadend=function(){a.buf=this.result;a.onloadend=function(){var a=this.result,b="";this.contentType&&(b=this.contentType.split(";")[0]);c.resources||(c.resources=[]);if("image/x-icon"==b||"image/vnd.microsoft.icon"==b||/\.ico$/i.test(this.url)&&!/image/i.test(b))b="image/png";else if(""==b.trim())/\.png($|\?)/.test(this.url)?b="image/png":/\.jpe?g($|\?)/.test(this.url)?b="image/jpeg":/\.gif($|\?)/.test(this.url)?b="image/gif":/\.pdf($|\?)/.test(this.url)?
b="application/pdf":"string"==typeof a&&(b="PNG"==a.substr(1,3)?"image/png":"GIF8"==a.substr(0,4)?"image/gif":"%PDF"==a.substr(0,4)?"application/pdf":"image/jpeg");else if("png"==b.toLowerCase()||"jpg"==b.toLowerCase()||"jpeg"==b.toLowerCase()||"gif"==b.toLowerCase())b="image/"+b.toLowerCase();c.resources.push(A(this.buf,b,this.url,this.fileName,/evernote_attachment_url/.test(this.original)));c.content=c.content.replace("clipper|"+this.url+"|clipper",w(this.buf,b,this.original));p++;e()};if(this.contentType||
/\.(png|jpe?g|gif|pdf)($|\?)/.test(this.url))a.onloadend();else a.readAsText(this.blob)};a.blob=this.response;a.readAsArrayBuffer(this.response)}else p++,c.content=c.content.replace("clipper|"+this.url+"|clipper",""),e()};l.send()}else if(/data:(.+);base64,(.+)/.test(f)){var f=/data:(.+);base64,(.+)/.exec(f),m=f[1],s=window.atob(f[2]);c.resources||(c.resources=[]);for(var f=new ArrayBuffer(2*s.length),l=new Uint8Array(f),n=0;n<s.length;n++)l[n]=s.charCodeAt(n);c.resources.push(A(f,m,a.url));c.content+=
w(f,m,b[k])}else if(/^resource:(\d*)$/.test(f)){m=parseInt(/^resource:(\d*)$/.exec(f)[1]);l=new Uint8Array(h[m].bytes);if(l.byteLength)f=l.buffer;else for(s=Object.keys(h[m].bytes).length,f=new ArrayBuffer(s),l=new Uint8Array(f),n=0;n<s;n++)l[n]=h[m].bytes[n];c.resources||(c.resources=[]);c.resources.push(A(f,h[m].mime,a.url));c.content="evernote.skitch"==a.contentClass?c.content+w(f,h[m].mime,b[k],!0):c.content+w(f,h[m].mime,b[k])}else c.content+=b[k];else/<img/.test(b[k])?c.content+=b[k]:/<em[^>]+?clearly.+?>(.*?)<\/em>/.test(b[k])?
c.content+='<span style="x-evernote: highlighted; background-color: #F6EE96">'+/<em.+?clearly.+?>(.*?)<\/em>/.exec(b[k])[1]+"</span>":/<highlight>(.*?)<\/highlight>/.test(b[k])?c.content+='<span style="x-evernote: highlighted; background-color: #F6EE96">'+/<highlight>(.*?)<\/highlight>/.exec(b[k])[1]+"</span>":c.content+=b[k]}g=!0;c.content+="</en-note>";a.tagNames&&0<a.tagNames.length&&(c.tagNames=a.tagNames);e()};Object.preventExtensions(this);(function(){C=/^"?S=(s\d+)/.exec(r)[1];var a=/^"?S=(s\d+)/.exec(p.pers)[1];
D&&(y=/^"?S=(s\d+)/.exec(D)[1]);var b;b=new Thrift.BinaryHttpTransport(z+"/edam/note/"+C);b=new Thrift.BinaryProtocol(b);x=new NoteStoreClient(b);y&&(b=new Thrift.BinaryHttpTransport(z+"/edam/note/"+y),b=new Thrift.BinaryProtocol(b),L=new NoteStoreClient(b));a=new Thrift.BinaryHttpTransport(z+"/shard/"+a+"/utility");a=new Thrift.BinaryProtocol(a);I=new UtilityClient(a)})()}Object.preventExtensions(Submitter);

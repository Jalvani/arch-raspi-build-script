window.onload=function(){"use strict";var code,duration,sound,flood;var version=22;var history=[];var audio=new Audio("sounds/new.ogg");var richNotifications=webkitNotifications.createHTMLNotification===undefined;var slowcount=0;var slowlevel=0;var actionList={};var questionnaireList=[];var questionnaireCache=[];var questionnaireTimer=0;var questionnaireNext=1e3*60*60;var DEFAULT_CODE=null;var DEFAULT_DURATION=7e3;var DEFAULT_SOUND=false;var DEFAULT_FLOOD=true;var ENABLE_SOCKET_IO=true;chrome.storage.sync.get(["code","duration","sound","flood"],function(items){code=items.code||DEFAULT_CODE;duration=items.duration||DEFAULT_DURATION;sound=items.sound||DEFAULT_SOUND;flood=items.flood===false?false:DEFAULT_FLOOD});chrome.storage.onChanged.addListener(function(changes,namespace){if(namespace!="sync")return;for(var key in changes){switch(key){case"code":code=changes[key].newValue||DEFAULT_CODE;break;case"duration":duration=changes[key].newValue||DEFAULT_DURATION;break;case"sound":sound=changes[key].newValue||DEFAULT_SOUND;break;case"flood":flood=changes[key].newValue===false?false:DEFAULT_FLOOD;break}if(key=="code"&&code!=""){showNotification("_setup",["Android Desktop Notifications","Setup complete!"])}}slowcount=0});function loadConfig(path,callback){var xhr=new XMLHttpRequest;xhr.open("GET",chrome.extension.getURL(path),true);xhr.onload=function(){var json=JSON.parse(xhr.responseText);if(json!=null)callback(json)};xhr.send()}loadConfig("/config/actions.json",function(json){actionList=json});function getSlowlevel(slowcount){var slowlevel;if(slowcount>=96){slowlevel=5}else if(slowcount>=48){slowlevel=4}else if(slowcount>=24){slowlevel=3}else if(slowcount>=12){slowlevel=2}else if(slowcount>=6){slowlevel=1}else{slowlevel=0}return slowlevel}function get(){if(!navigator.onLine||!code)return;slowlevel=getSlowlevel(slowcount);slowcount++;if(slowlevel>0&&slowcount%(slowlevel+1)!=0){return}var params="code="+encodeURIComponent(code);var req=new XMLHttpRequest;req.open("POST","https://projects.hci.simtech.uni-stuttgart.de/tapsnap/notification/php/get.php?version="+version+"&slowlevel="+slowlevel,true);req.setRequestHeader("Content-type","application/x-www-form-urlencoded");req.onload=function(){var json=JSON.parse(req.responseText);if(json==null){return}json=json.filter(function(item){return history.indexOf(item.id)==-1});history=[];if(json.length==0){return}if(!richNotifications&&flood&&length>3){json=json.slice(0,3)}json.forEach(function(item){item.questionnaire=false});var i;if(questionnaireTimer+questionnaireNext<(new Date).getTime()){for(i=json.length-1;i>=0;i--){if(questionnaireList.indexOf(json[i].package)!=-1){json[i].questionnaire=true;questionnaireCache=questionnaireCache.filter(function(item){return item.package!=json[i].package});questionnaireCache.push({id:json[i].id,"package":json[i].package,appname:json[i].appname,limited:json[i].limited===undefined?0:1,time:json[i].time});questionnaireTimer=(new Date).getTime()+questionnaireNext;break}}}for(i=0;i<json.length;i++){if(json[i].limited){showNotification(json[i].package,["Android Desktop Notifications",json[i].appname],json[i].questionnaire)}else{showNotification(json[i].package,[json[i].appname,json[i].title,json[i].info,json[i].content],json[i].questionnaire)}history.push(json[i].id)}if(sound)audio.play();slowcount=0};req.send(params)}setInterval(get,1e4);function showClassicNotification(title,message){var n=webkitNotifications.createNotification("images/icon48.png",title,message);n.onclick=function(event){event.currentTarget.cancel()};if(duration>0){n.ondisplay=function(event){setTimeout(function(){event.currentTarget.cancel()},duration)}}n.show()}function showNotification(id,text,showQuestionnaire){if(!richNotifications){if(text.length==2){showClassicNotification(text[0],text[1])}else{showClassicNotification(text[1],text[3])}return}if(actionList[id]!==undefined){var buttons=[{title:actionList[id]["title"]}]}else{buttons=[]}if(showQuestionnaire){buttons.push({title:"How important is this notification to you?"})}var opt={};if(text.length==2){opt={type:"basic",title:text[0],message:text[1],iconUrl:"images/icon_rich_80.png",priority:2,buttons:buttons}}else{var info=text[2]==""?"":"("+text[2]+")";opt={type:"list",title:text[0],message:"",iconUrl:"images/icon_rich_80.png",priority:2,items:[{title:text[1],message:info},{title:text[3],message:""}],buttons:buttons}}chrome.notifications.clear(id,function(){});chrome.notifications.create(id,opt,function(id){if(duration>0){setTimeout(function(){chrome.notifications.clear(id,function(){})},duration)}})}if(richNotifications){chrome.notifications.onButtonClicked.addListener(function(id,index){var actionButtonExists=actionList[id]!==undefined;if(actionButtonExists){if(index==0){window.open(actionList[id]["url"])}else if(index==1){showQuestionnaire(id)}}else if(index==0){showQuestionnaire(id)}})}function showQuestionnaire(packageName){for(var i=0;i<questionnaireCache.length;i++){if(questionnaireCache[i].package==packageName){questionnaireCache[i].code=code;var param=btoa(JSON.stringify(questionnaireCache[i]));chrome.windows.create({url:"https://projects.hci.simtech.uni-stuttgart.de/tapsnap/notification/php/questionnaire.php?p="+param,type:"popup",focused:true,incognito:true,width:820,height:720},function(window){});break}}}if(ENABLE_SOCKET_IO){try{var socket=io.connect("http://projects.hcilab.org:10935");socket.on("notification",function(data){var json=JSON.parse(data);console.log(json)})}catch(e){}}};
var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-21391541-2"]);_gaq.push(["_trackPageview"]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://ssl.google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();var _kmq=_kmq||[],_kmk=_kmk||"a009d9e3633da7d7456e8e1478c8f05f33e35f8e";
function _kms(a){setTimeout(function(){var b=document,c=b.getElementsByTagName("script")[0],b=b.createElement("script");b.type="text/javascript";b.async=!0;b.src=a;c.parentNode.insertBefore(b,c)},1)}_kms("https://i.kissmetrics.com/i.js");_kms("https://doug1izaerwt3.cloudfront.net/"+_kmk+".1.js");
var globalIfIncomingSMSThenUseLegacyQuickReply=!0,network_connection_status=!1,notification_no_network_connection,notification_general_error_global,contacts=[],which_phone_num_for_notif="000000",apiVersion=5,baseUrl="https://textyserver.appspot.com",textyStaticServerURL="http://textyapp.com",globalIntervalGetPhoneStatus,sendUrl=baseUrl+"/client?function=send",signInUrlCRX=baseUrl+"/signin?extret="+encodeURIComponent(chrome.extension.getURL("help.html"))+"%23signed_in&ver="+apiVersion,signOutUrl=baseUrl+
"/signout?extret="+encodeURIComponent(chrome.extension.getURL("signed_out.html"))+"&ver="+apiVersion,registerUrl=baseUrl+"/register?ver="+apiVersion,STATUS_SUCCESS="success",STATUS_LOGIN_REQUIRED="login_required",STATUS_DEVICE_NOT_REGISTERED="device_not_registered",STATUS_GENERAL_ERROR="general_error",BROWSER_CHANNEL_RETRY_INTERVAL_MS=1E4*(1+Math.random()-0.5),channel,socket,phone_number,globalLastKnownGoogleUserName="none";
function _ab7936a60bf11f63c721faf4b0b61b40aaebc57684849d21ff18ca69d36c32ed1933a08781b7b57a(a){a?chrome.browserAction.setIcon({path:"img/19x19_MT_logo_boom_gradient_white.png"}):chrome.browserAction.setIcon({path:"img/icon-19-off.png"})}var NEW_COUNT_GLOBAL_NOTIF=0;
function _d6a25dec13064dbe7497a362993e0c0c565fec70f835d1cd5d4f8c00b7b7243474399d9420d59fb1(){var a=NEW_COUNT_GLOBAL_NOTIF;10<NEW_COUNT_GLOBAL_NOTIF&&(a="10plus");_gaq.push(["_trackEvent","CRX-Background","Error","getUserInfo-CRX-GU72-"+a,1]);console.log("----------------");NEW_COUNT_GLOBAL_NOTIF++;2>NEW_COUNT_GLOBAL_NOTIF&&(a=window.webkitNotifications.createNotification("error_icon.png","MightyText Connection Issue","Error connecting to MightyText. If this error continues, please inform our team. We are sorry for the inconvenience.(Error Code: CRX-GU72)"),
a.ondisplay=function(a){setTimeout(function(){a.currentTarget.cancel()},1E4)},a.show())}
function _ce5b3600271972874a660995394fda9bcbe49dc721e9be98c437445c5d572571fe228ddc3036fb59(){_gaq.push(["_trackEvent","CRX-Background","Error","getDistinctHeaders-CRX-GTHRD59",1]);console.log("----------------");if(1>NEW_COUNT_GLOBAL_NOTIF){var a=window.webkitNotifications.createNotification("error_icon.png","MightyText System issues","MightyText is having system issues. We're aware of the problem and working on it. We are sorry for the inconvenience. (Error Code: CRX-GTHRD59)");a.ondisplay=function(a){setTimeout(function(){a.currentTarget.cancel()},
1E4)};a.show()}}
function _ab95b05b187bda8729a124e2f611751263f8c5fcf9e2ba54fe91d947a030dd90a92998527da7f59e(){_gaq.push(["_trackEvent","Background","CAPI-Experiment-On",google_username_currently_logged_in,1]);capi_rollout_factor=2.8;_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("CAPI RolloutFactor in experiment is: "+capi_rollout_factor);clearInterval(currentGlobalIntervalID);poll_freq*=capi_rollout_factor;currentGlobalIntervalID=window.setInterval(function(){_da253c7ba78480482cac9d7878922a2c0e1f9d2afa6a8fbff4ace1f1bddfde9d6960dabb9ca87f0e()},poll_freq);
console.log("poll_freq after capi check is "+poll_freq)}
function _cd0337b9de5958337155ef220f2b2429a3a072f9086a96ad79c79402a98616fd49a7c20dd1e37ea7(a,b,c,d){var e=new XMLHttpRequest;phone_number=dest_num;e.open("POST",sendUrl,!0);e.setRequestHeader("Content-Type","application/x-www-form-urlencoded");e.setRequestHeader("X-Same-Domain","true");e.onreadystatechange=function(){if(4==this.readyState)if(200==e.status){var a=e.responseText;0==a.indexOf("OK")?d(STATUS_SUCCESS,c,e):0==a.indexOf("LOGIN_REQUIRED")?d(STATUS_LOGIN_REQUIRED,c,e):0==a.indexOf("DEVICE_NOT_REGISTERED")&&
d(STATUS_DEVICE_NOT_REGISTERED,c,e)}else d(STATUS_GENERAL_ERROR,c,e)};if("send_sms"==a)var f="phone="+encodeURIComponent(phone_number)+"&deviceType=ac2dm&action=send_sms&action_data="+encodeURIComponent(b);else"mark_single_message_read"==a?(f="deviceType=ac2dm&action=mark_single_message_read&action_data="+encodeURIComponent(b),console.log(f)):"mark_whole_thread_read"==a&&(f="deviceType=ac2dm&action=mark_whole_thread_read&action_data="+encodeURIComponent(b));e.send(f)}
function _47c0c403bcb6104f98210958217c1a4d687bf365419a2a7f6cd2cb0b8ebd81585fc2c15f52c3df04(a,b,c,d){var e=new XMLHttpRequest;phone_number=dest_num;e.open("POST",sendUrl,!0);e.setRequestHeader("Content-Type","application/x-www-form-urlencoded");e.setRequestHeader("X-Same-Domain","true");e.onreadystatechange=function(){if(4==this.readyState)if(200==e.status){var d=e.responseText;console.log("for C2DM call: "+a+"..... response received: "+d);0==d.indexOf("OK")?console.log(STATUS_SUCCESS):0==d.indexOf("LOGIN_REQUIRED")?
console.log(STATUS_LOGIN_REQUIRED):0==d.indexOf("DEVICE_NOT_REGISTERED")&&console.log(STATUS_DEVICE_NOT_REGISTERED)}else console.log(STATUS_GENERAL_ERROR)};if("send_sms"==a)var f="phone="+encodeURIComponent(phone_number)+"&deviceType=ac2dm&action=send_sms&action_data="+encodeURIComponent(b);else"mark_single_message_read"==a?(f="deviceType=ac2dm&action=mark_single_message_read&action_data="+encodeURIComponent(b),console.log(f)):"mark_whole_thread_read"==a&&(f="deviceType=ac2dm&action=mark_whole_thread_read&action_data="+
encodeURIComponent(b));e.send(f)}function _5c72000e6eab63b1d1a7d2f07492e15267f7ec8ea149bb40448749f069bd33e74891e6c22e53fd08(a){$.ajax({type:"GET",url:"https://accounts.google.com/latitude/mobile_phone-16.gif",cache:!1,success:function(b,c,d){a()}})}
function _a02d3d4c3064ddbce693dc03846c41cb301b9f3f31a306277138ee8b6a782597c5f7958be3e38236(a,b){a||(a=1);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Entering function CheckGoogleLoginTokenAndSetUserName");$().ajaxError(function(a,b,c,g){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("AJAX error calling URL: "+c.url+"... Reponse is: "+b.responseText);-1<c.url.search("getUserInfoFull")&&-1<b.responseText.search("500 Server Error")&&
(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Texty trying to get Full User Auth info for this user (GetUserInfoFull)...and got Error Code 500 - likely case 1 is they are not set up Beta..."),a='<img  align=BOTTOM src="error_icon.png" width=20 height=18 /> <span style="color:black;font-size:12px"> This Google user is not registered for MightyText. Make sure you have completed the full signup process on the MightyText Android App and were invited to the beta.</span>  <a href="#" onclick="window.close();chrome.tabs.create({url: \''+
signOutUrl+'\'})"> Sign out now</a>, or <a href="#" onclick="window.close();chrome.tabs.create({url:\'http://mightytext.net/beta\'})"> Sign up for the beta</a>',window.localStorage.userRegistrationStatus=-1,document.getElementById("top-notif-bar").innerHTML=a);-1<b.responseText.search("500 Server Error")&&(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Texty trying to get Full User Auth info for this user (GetUserInfoFull)...and got Error Code 500 - likely case 2 is they are not set up Beta..."),
a='<img  align=BOTTOM src="error_icon.png" width=20 height=18 /> <span style="color:black;font-size:12px"> This Google user is not registered for MightyText. Make sure you have completed the full signup process on the MightyText Android App and were invited to the beta.</span>  <a href="#" onclick="window.close();chrome.tabs.create({url: \''+signOutUrl+'\'})"> Sign out now</a>, or <a href="#" onclick="window.close();chrome.tabs.create({url:\'http://mightytext.net/beta\'})"> Sign up for the beta</a>',
document.getElementById("top-notif-bar").innerHTML=a)});$.ajaxSetup({error:function(a,b){console.error(a);console.error(b);if(0==a.status)console.error("*** AJAX REQUEST FAIL -- NETWORK CONNECTION PROBLEM? ***"),_ab7936a60bf11f63c721faf4b0b61b40aaebc57684849d21ff18ca69d36c32ed1933a08781b7b57a(!1),num_consecutive_internet_connection_failures+=1,_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Number of consecutive internet connection failures: "+num_consecutive_internet_connection_failures),
1==num_consecutive_internet_connection_failures&&(network_connection_status=!1);else if(404==a.status)_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Error 404. Requested URL not found."),document.getElementById("msg").innerHTML="Error 404. Requested URL not found. Showing Local Messages only.";else if(500==a.status){extra_login_status_info="USER_NOT_REG_BETA";_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Error: 500 - Texty trying to get Full User Auth info for this user (GetUserInfoFull)...and got Error Code 500 - likely case 3 is they are not set up Beta...");
var c='<img  align=BOTTOM src="error_icon.png" width=20 height=18 /> <span style="color:black;font-size:14px"> This user is not registered for MightyText. Make sure you have been invited (by e-mail) to the private beta,  and have completed the full signup process on the MightyText Android App.</span>  <a href="#" onclick="window.close();chrome.tabs.create({url: \''+signOutUrl+'\'})"> Sign out now</a>, or <a href="#" onclick="window.close();chrome.tabs.create({url:\'http://mightytext.net/beta\'})"> Sign up for the beta</a>';
document.getElementById("top-notif-bar").innerHTML=c}else"parsererror"==b?(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Error. Parsing JSON Request failed."),console.log(b),console.log(a)):"timeout"==b?_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Request Time out."):_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Unknown Error:"+a.status);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Response text returned from server is: "+
a.responseText)}});var c=baseUrl+"/api?function=getUserInfoFull&CLIENT=CRX";_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Inside checkGoogleLoginToken function");$.ajax({url:c,global:!1,type:"GET",timeout:11E3,dataType:"json",error:function(b,c,f){console.log("ERROR in AJAX in getUserInfoFull: "+f);1==a?window.setTimeout(function(){_a02d3d4c3064ddbce693dc03846c41cb301b9f3f31a306277138ee8b6a782597c5f7958be3e38236(999)},6E3):999==a&&(console.log("retry attempt 999 (sentinel val)"),
_5c72000e6eab63b1d1a7d2f07492e15267f7ec8ea149bb40448749f069bd33e74891e6c22e53fd08(_d6a25dec13064dbe7497a362993e0c0c565fec70f835d1cd5d4f8c00b7b7243474399d9420d59fb1))},success:function(a,b,c){console.log(a);network_connection_status=!0;time_last_success_mighty_ping=new Date;_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Response from Google Login Token check: "+a);console.log("url is "+signInUrlCRX);if(a.user&&-1<a.user.search("user not logged in")){if(2>Math.floor(10*
Math.random())&&_gaq.push(["_trackEvent","CRX-Background","Error","User-Not-Logged-In-CRX-Ten-Pct-Sample",1]),_kmq.push(["record","CRX-UserState-"+state]),console.error("No Google Account user logged in."),_ab7936a60bf11f63c721faf4b0b61b40aaebc57684849d21ff18ca69d36c32ed1933a08781b7b57a(!1),login_and_beta_ready=google_login_status=!1,extra_login_status_info=google_username_currently_logged_in="",console.log("url is "+signInUrlCRX),console.log(chrome.extension.getURL("error_icon.png")),0==total_aggregate_polls||
80==total_aggregate_polls||150==total_aggregate_polls)a=window.webkitNotifications.createNotification("error_icon.png","MightyText - Not Signed In"," You won't be able to send/receive messages. Click here to sign in."),a.ondisplay=function(a){setTimeout(function(){a.currentTarget.cancel()},8E3)},a.onclick=function(a){window.open("https://mightytext.net/app");this.cancel()},a.show(),total_aggregate_polls++}else{if(a.user_info_full&&0<a.user_info_full.email.length){jQuery.parseJSON(a);google_username_currently_logged_in=
a.user_info_full.email;window.localStorage.lastKnownGoogleUserName=a.user_info_full.email;_kmq.push(["identify",google_username_currently_logged_in]);b=new Date;b=b.setHours(0,0,0,0);$.jStorage.get("ts_last_kissmetrics_login_call","0")==b?_kmq.push(["record","User Logged In",{"CRX-Login":"true",Client:"CRX","Dup-Intraday":"true"}]):(_kmq.push(["record","User Logged In",{"CRX-Login":"true",Client:"CRX","Dup-Intraday":"false"}]),$.jStorage.set("ts_last_kissmetrics_login_call",b));b=a.user_info_full.ts_creation;
if(void 0!=a.user_info_full.channelapi_enabled&&100==a.user_info_full.channelapi_enabled){c=moment.utc();var g=moment.utc([2014,0,21,4,17,53]);c>g&&window.setTimeout(function(){_356feb6a289f7f8ee3113b1aa2da344495926db8140c5b200307222070d26992ffa81976bb3c46b0()},5E3);_5bad70bfa10def08ed9c6f23f1d94a58f0dda25d3dfdef7a9cda3c74ebe5a475ac569f6afc48c6ca();_ab7936a60bf11f63c721faf4b0b61b40aaebc57684849d21ff18ca69d36c32ed1933a08781b7b57a(!0);_12b0e5e2eeac32e29b8eaf0208bfaf504f740dc2b5450a4fd388eae91dd005a4e0136148767ea741();
_56646c2750117f50a7d0d9a4fee19c520ee9fb3845a685f772fb83673419208f6c414ff3506ecbc2("REG-OK");clearInterval(currentGlobalIntervalID);console.log("User is NOT a legacy extension user - so no more polling whatsoever!");_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("!!!!!!!! ChannelAPI enabled flag (used for webapp beta testing flag) is : "+a.user_info_full.channelapi_enabled);google_login_status=!0;login_and_beta_ready=!1;google_username_currently_logged_in=a.user_info_full.email;
extra_login_status_info="WEBAPP_BETA";username_prefix_jstrg_purpose=a.user_info_full.email.substr(0,a.user_info_full.email.indexOf("@"));_gaq.push(["_trackEvent","Background","CRX-Startup-WEBAPP","",1]);console.log("******** calling webapp code");clearInterval(globalHeartbeatInterval);globalHeartbeatInterval=setInterval(_6c63a2becc72714faef43e5dc14807e129769afdc9db045496fa8414407c952f8cd040450ab05d1d,2E4);_7bfb34c10f2e3f6cfe1cf62b15976a086371680a453a4f9a6954c7e1987ed1e99043b99f10c4fa90();$.getScript("https://mightytext.net/prod-assets/crx-support.js",
function(a,b,c){console.log(a);console.log(b);console.log(c.status);console.log("Load was performed.");processHostedInstructions()});_c478d3e40f2a0bdb75cfdcbe85c3303e5c0cbe7a7afdb46062b646ac4180ed51ff794beace10f8da();clearInterval(globalIntervalGetPhoneStatus);globalIntervalGetPhoneStatus=setInterval(_c478d3e40f2a0bdb75cfdcbe85c3303e5c0cbe7a7afdb46062b646ac4180ed51ff794beace10f8da,24E4);_14fbe2b4f92b49e0212426b54af15d397812dc1a5ff12bf06071d7c04e59e711c9622c71f7a7fa1e(google_username_currently_logged_in,
a);_a2e10d03b2c62bda32f227034e930b09a6a0513b4485e7342202934d1412ca0a7db10fddfa9db2e0(google_username_currently_logged_in,b,a.user_info_full.current_app_version,a.user_info_full.ts_last_login,"CRX-MODERN-USER");capi_rollout_factor=4.5;return}_56646c2750117f50a7d0d9a4fee19c520ee9fb3845a685f772fb83673419208f6c414ff3506ecbc2("Legacy-CRX-User-SWITCH");console.log("********* LEGACY CRX USER *********");_gaq.push(["_trackEvent","Background","CRX-Startup-LEGACY-SWITCHING","",1]);_a2e10d03b2c62bda32f227034e930b09a6a0513b4485e7342202934d1412ca0a7db10fddfa9db2e0(google_username_currently_logged_in,
b,a.user_info_full.current_app_version,a.user_info_full.ts_last_login,"CRX-LEGACY-OLD");chrome.tabs.create({url:"https://mightytext.net/app/#v1"});alert("Switching you to the new MightyText Web App. \r\n \r\n Please make sure you have the latest MightyText Android App on your phone (v 3.55) \r\n \r\n Please keep the Chrome Extension installed to receive notifications for incoming SMS.");return!1}-1!=a.user_status.search("not registered")?(_56646c2750117f50a7d0d9a4fee19c520ee9fb3845a685f772fb83673419208f6c414ff3506ecbc2("NOT-REG"),
google_login_status=!0,login_and_beta_ready=!1,google_username_currently_logged_in="",extra_login_status_info="USER_REG_BUT_NO_ACTIVE_ANDROID_REG",_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("This user does not have an active Android App registration! (either never set up or they disconnected..)"),notify_android_app_install_once||(a=webkitNotifications.createNotification("error_icon.png","MightyText - Install Android App ","It looks like you haven't installed the MightyText app on your Android phone. You'll need to first install it on your Android phone using Google Play, and select this same Google account ("+
a.email+").  Click here for full instructions."),capi_rollout_factor=7,a.show(),a.onclick=function(a){window.open("http://mightytext.net/install");this.cancel()},notify_android_app_install_once=!0)):(console.log(a.user_status.search("not reg")),notification_general_error_global=webkitNotifications.createNotification("error_icon.png","MightyText","General Error. Please contact the MightyText team."),notification_general_error_global.show())}_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Google Login Status - based on OPENID token from Google: "+
google_login_status+" / username is: "+google_username_currently_logged_in)}})}(function(a){a.getScriptCacheTrueOverrideCustom=function(b,c,d){a.ajax({type:"GET",url:b,success:c,dataType:"jsonp",cache:!0})}})(jQuery);function _56646c2750117f50a7d0d9a4fee19c520ee9fb3845a685f772fb83673419208f6c414ff3506ecbc2(a){2>Math.floor(80*Math.random())&&_kmq.push(["record","CRX-UserState-"+a])}
function _e0c0fd3c4e7631dff2ef4724515a6b7c54b008d067d38dcf74815590b600efe43b567ec3565d8e93(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript";c.onload=_14fbe2b4f92b49e0212426b54af15d397812dc1a5ff12bf06071d7c04e59e711c9622c71f7a7fa1e;c.src=a;b.appendChild(c)}
function _7e322d6d8dd58a1b37839a865cc739217355f0842fc3d507d69cd47eca3157a9608e15490a8c1ee6(){webkitNotifications.createNotification("img/mightytext_square_logo_48px.png","MightyText - Switch to New Web App","Hi - please upgrade to our new web app by February 25th. You should still keep the MightyText Chrome Extension installed for incoming SMS and calls notifications. If you don't switch by February 25th, you will be automatically switched over. The new version is much more stable and has many new features.  Thanks.").show()}
function _5ffc00606ede148e311a14a2954d79def279d6ba7a9fc32a4288045bf1dc227cad8ff40c7a7eaa22(a){var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src=a;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}
function _a2e10d03b2c62bda32f227034e930b09a6a0513b4485e7342202934d1412ca0a7db10fddfa9db2e0(a,b,c,d,e){b=Math.round((new Date(b)).getTime()/1E3);d=Math.round((new Date(d)).getTime()/1E3);intercomSettings={email:a,created_at:b,app_id:"7guo5kws",web_app:e,phone_app_version:c,ts_last_login_at:d,wagda:"27-Jan"};(function(){function a(){var b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="https://api.intercom.io/api/js/library.js";var d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,
d)}var b=window,c=document,d=function(){d.c(arguments)};d.q=[];d.c=function(a){d.q.push(a)};b.Intercom=d;a();b.attachEvent?b.attachEvent("onload",a):b.addEventListener("load",a,!1)})()}function _b646820748da1f5c25581ab8fce23f995935ea578124c285dcc9a358e8fa6b43770aa72291c6dbb6(){should_get_contacts_token_in_new_tab=!1;window.setTimeout(function(){_417c0fac05873ac2d242b677cf58afa94d463d9b40204ddbcc55d9a54db86bb36f6dd0cb65a0b81e()},10)}
function _ed094677ed93178f033abb9f442bef592f232e1c50e2a8b991f3f224dee35ff9affc20e51c58e706(a){var b=baseUrl+"/getJson?function=GetMessage";$.ajaxSetup({error:function(a,b){if(0==a.status){if(num_consecutive_internet_connection_failures+=1,_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Number of consecutive internet connection failures: "+num_consecutive_internet_connection_failures),3==num_consecutive_internet_connection_failures||15==num_consecutive_internet_connection_failures)network_connection_status=
!1,_ab7936a60bf11f63c721faf4b0b61b40aaebc57684849d21ff18ca69d36c32ed1933a08781b7b57a(!1)}else 404==a.status?(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Error 404. Requested URL not found."),document.getElementById("msg").innerHTML="Error 404. Requested URL not found."):500==a.status?(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Error 500. Internal Server Error."),document.getElementById("msg").innerHTML="Error 500. Internal Server Error."):
"parsererror"==b?_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Error. Parsing JSON Request failed."):"timeout"==b?_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Request Time out."):_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Unknown Error");_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Response text returned from server is: "+a.responseText)}});$.get(b,
{},function(b){network_connection_status=!0;time_last_success_mighty_ping=new Date;num_consecutive_internet_connection_failures=0;_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("JSON Raw text response from GetMessage function is: "+b);if(0<b.search("not logged in"))_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("User NOT logged in to MightyText"),a&&(google_login_status=!1,google_username_currently_logged_in="");else if('{"messages":}'==
b)console.log("BLANK - no messages");else if(0<b.length){_ab7936a60bf11f63c721faf4b0b61b40aaebc57684849d21ff18ca69d36c32ed1933a08781b7b57a(!0);var d=JSON.parse(b),e=0,f=0,g=0,f=b.split('"type":"0","source":"0"').length-1;console.log("*** Number of Inbox (incoming msgs), based on string match splits is: "+f);var m=!1;b=!1;6<f&&(m=!0,_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("TOO Many messages retrieved in JSON - so don't show any notifs. Total num messages retrieved (incoming only: "+
f),b=!0);$.each(d.messages,function(b,c){var d=c.orig_address,f="",h="";for(a&&_28680617afebc3b891b4ebc51d8b079b3adc5ad9239c464dd6c4acd91a8d820af0ec41071cb8f701("Found at least 1 Message or ACK/etc, decrease polling frequency",9E3);-1<d.search("[-]");)d=d.replace("-","");-1==d.search("[+]")&&(h="1"==d.charAt(0)?"+":"+1");OLD_phonenum_normalized=h+d;f=c.orig_address;_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("found message to sync... "+f+": "+c.body);0==c.status&&
2==c.source?(_48a7d343cdb1d88188fc813dab1bf55627536411ece72c9cde713ed75321ca749dc26c021d45c894(c.email,c.body,f,c.android_uid),e++):db.transaction(function(b){b.executeSql("INSERT INTO Messages (googleusername,msgid,time_client,time_server,from_phone_num,body,type,status,source) VALUES (?,?,?,?,?,?,?,?,?)",[c.email,c.android_uid,_0c800fd990afaa098e2b4c4a8e59f273d3cdb66372a63f72e856d8ded49ee65077238a4ec8b5b453(c.ts),_0c800fd990afaa098e2b4c4a8e59f273d3cdb66372a63f72e856d8ded49ee65077238a4ec8b5b453(c.ts_server),
f,c.body,c.type,c.status,c.source],function(b,d){_137f07a35ab466a247b51b168966127e34b62622786c11ea907c6f1ccf97c9f3709ec2701db31ddb(c.android_uid);var e=!1;0!=c.type&&81!=c.type&&80!=c.type||!1!=m?(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("MsgType=1 (sync sent SMS from phone), so don't pop notif"),g++):(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("called from BG page and MsgType=0, and not too many messages, so popping single notif now"),
e=!0,which_phone_num_for_notif=f);if(a){var k=new Date(c.ts),h=new Date,n=h.getTime()-k.getTime(),l=1;81==c.type?l=0.1:80==c.type&&(l=0.005);n>36E5*l&&(e=!1,_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("** Message is too old to pop Notif** - for message type: "+c.type));_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("...JS date is "+k);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("current time is"+
h);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("TIME DIFF (in ms) IS -- "+n+"ms since msg was sent -- comparing to: "+36E5*l);e&&(e="popup_one_text_message.html#"+c.android_uid,k=webkitNotifications.createHTMLNotification(chrome.extension.getURL(e)),_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("showing notif to user...URL is: "+e),_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Notif Level Preference from Local datastore is: "+
window.localStorage.notifLevel),k.ondisplay=function(){setTimeout("notification_html.cancel();",5E3)},k.show(),msgcount="")}},function(a,b){_1a3c6704744af98a35a3a473f3b817d90988125e5ecc40eea2154c3a305b55857a152c80f05d5668(a,b,c.android_uid)})})});b&&(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("showing GENERIC (too many messages) notif to user..."),b=webkitNotifications.createNotification("",f+" Text Messages","You've received "+f+" text messages since the last time you used MightyText, so we won't show you each popup for these messages."),
_gaq.push(["_trackEvent","Background","Lots-Of-Incoming-Messages-Trigger-Popup","TOO-MANY-NOTIF-"+google_username_currently_logged_in,f]),b.show());_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("msg_count_ack is "+e);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("msg_count_incoming is "+f);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("msg_count_outgoing_sync_from_phone is "+g);d=d.messages.length;
_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Num messages pulled from this JSON feed is: "+d);0<d&&(f="",f=a?"Background":"Popup",1<d?_gaq.push(["_trackEvent",f,"Got-Messages-SMS","Got-Multiple-Messages",d]):_gaq.push(["_trackEvent",f,"Got-Messages-SMS","Got-1-Message",d]))}})}
function _48a7d343cdb1d88188fc813dab1bf55627536411ece72c9cde713ed75321ca749dc26c021d45c894(a,b,c,d){_gaq.push(["_trackEvent","Background","Got-Message-ACK","",1]);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Reconciling SMS where originally sent from chrome...");db.transaction(function(e){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("UPDATE Messages SET status=52 WHERE googleusername="+a+"and body="+b+" and from_phone_num="+
c+"  and status=51");e.executeSql("UPDATE Messages SET status=52 WHERE googleusername=? and body=? and from_phone_num=? and status=51",[a,b,c],function(a,b){_137f07a35ab466a247b51b168966127e34b62622786c11ea907c6f1ccf97c9f3709ec2701db31ddb(d)},_43b3364ac2dbb9c8957b01fabfdc1b8c71332e75d5759c2495f730727f0b8ba13b00faaca7f7a2dc)})}
function _1a3c6704744af98a35a3a473f3b817d90988125e5ecc40eea2154c3a305b55857a152c80f05d5668(a,b,c){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("SQL insert error: "+b.message);-1<b.message.search("constraint failed")&&(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("because it IS a constraint message, we will now RETRY to delete message on server, with android_uid "+c+" from the Cloud Server"),_137f07a35ab466a247b51b168966127e34b62622786c11ea907c6f1ccf97c9f3709ec2701db31ddb(c))}
function _137f07a35ab466a247b51b168966127e34b62622786c11ea907c6f1ccf97c9f3709ec2701db31ddb(a){var b=baseUrl+"/getJson?function=DeleteMessages&android_uid="+a;_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Attempting to delete from cloud server this android_uid:"+a);$.ajax({type:"GET",url:b,success:function(a){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Response from cloud after delete attempt: "+a)},error:function(a,b,e){console.log("error in deletemessagefrom server")}})}
var globalWidgetNotifTester;function _f80729c744cfce11836022a621c821946207bda5a7833463ee7901607a1988ffdaefbfe4a2346d48(){globalWidgetNotifTester=webkitNotifications.createHTMLNotification("mighty-widget.html");globalWidgetNotifTester.show()}
function _4f81adb24009bfd6e9fb7d1a54b09f4dd8af4cba81c7b502b01aeb2a606e580d3c01e852e0c988e5(){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Getting channel API token...");$.ajax({type:"GET",url:baseUrl+"/getJson?function=getChannelToken&mins=240",success:function(a){console.log("Response from cloud after channel attempt (should have valid_token prepend): "+a);if(0>a.search("valid_token:"))console.log("No valid_token prepend found from Channel API!");else{time_last_channel_token_obtained=
new Date;console.log("Resetting Last Channel ATTEMPT TO OBTAIN Token time . . .");a=a.replace("valid_token:","");var b=(new goog.appengine.Channel(a)).open();console.log("calling channel.open");b.onopen=function(){console.log("Socket Opened via Channel API with token: "+a);_gaq.push(["_trackEvent","Background","ChannelAPI-Open-Socket","",1])};b.onmessage=function(a){_017ace14d4a6fe9725cd64fd3e11ea3dfabdb84bf304e52272af70b9c02bdec46876d60317ece936();2>Math.floor(10*Math.random())&&_gaq.push(["_trackEvent",
"Background","ChannelAPI-Message-Received-10PCT-Sample"]);console.log("**** CHANNEL SOCKET ONMESSAGE *** Force a poll... ");console.log("Message arrived via channel API= "+a.data)};b.onerror=function(a){console.log("!!!!!!!!!!!!! TOKEN GONE (via onerror callback)!!!!!!!!!!!!");_gaq.push(["_trackEvent","Background","ChannelAPI-Socket-ONERROR-Token-Expired","",1]);_4f81adb24009bfd6e9fb7d1a54b09f4dd8af4cba81c7b502b01aeb2a606e580d3c01e852e0c988e5()};b.onclose=function(a){console.log("!!!!!!!!!!!!! TOKEN GONE (via onclose callback) !!!!!!!!!!!!");
_gaq.push(["_trackEvent","Background","ChannelAPI-Socket-ONCLOSE","",1])}}}})}function _e68a16cb84f339b6d7c7ac81903c2a400031e92d208edaa915e8910e75b0312e269b2b490aa9e424(a){webkitNotifications.createNotification("",Date(),a).show()}
function _4d03ed59d6db2c533e4bb490afddecd106cb5ed7f08b777a6ba50a1d54121a37292a3c50143922c2(){var a="popup_one_text_message.html#"+thismessage.android_uid,b=webkitNotifications.createHTMLNotification(chrome.extension.getURL(a));_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("showing notif to user...URL is: "+a);_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Notif Level Preference from Local datastore is: "+window.localStorage.notifLevel);
b.show()}function _08adf3ea766f5d2c28b851d688fa094c88e0a71d21bd4331eb52fc80cd862c12df15b59e6889c67a(a){chrome.windows.create({url:a,left:10,top:10,width:810,height:610,type:"popup"},function(a){})}
function _0c800fd990afaa098e2b4c4a8e59f273d3cdb66372a63f72e856d8ded49ee65077238a4ec8b5b453(a){var b=new Date(a);a=b.getHours();var c=b.getSeconds(),d=b.getMinutes(),e=b.getDate(),f=b.getMonth(),b=b.getFullYear();f++;10>f&&(f="0"+f);10>e&&(e="0"+e);10>a&&(a="0"+a);10>d&&(d="0"+d);10>c&&(c="0"+c);return b+"-"+f+"-"+e+" "+a+":"+d+":"+c}var should_get_contacts_token_in_new_tab=!1;
function _417c0fac05873ac2d242b677cf58afa94d463d9b40204ddbcc55d9a54db86bb36f6dd0cb65a0b81e(){oauth.authorize(function(){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("on google contacts - oauth.authorize()");oauth.sendSignedRequest("http://www.google.com/m8/feeds/contacts/default/full",_fbd240ec1e2ef65000c2316e1b39392c5551f87c50e956261a608f2b0f011f1830bed0916518e165,{parameters:{alt:"json","max-results":1E4}})})}
function _e47b46b90853b465c193968051c2554b3bc25ef1cc7932316b2081620c9f9e6659529a783c5d7607(){oauth.clearTokens()}function _70cadeb47fb8033e0c4724f18c44c6b6bdca37c7e1b4d2cfc548b41527e06c21f9464e6c1749d2c1(){window.localStorage.notifLevel=3}
function _2f63ce5f7c0efdf707922f226024de63762b0b1502fd9a2a469391caf4507fcfba0ffbbdfa6ebd5b(){db||(db=openDatabase("Texty","1.0","Texty-SMS",2E5));db.transaction(function(a){a.executeSql("SELECT COUNT(*) as cnt FROM sqlite_master where name='Messages'",[],function(a,c){var d=c.rows.item(0).cnt;_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Messages table exists?: "+d);0==d&&(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Couldnt find table LocalGoogleContacts...creating..."),
_a754b3b0dc763f32c739ca6fee5007d051a18c1df47dbcb1c351e98fe9a24d4c963d71eda3727ab5())},_43b3364ac2dbb9c8957b01fabfdc1b8c71332e75d5759c2495f730727f0b8ba13b00faaca7f7a2dc)});db.transaction(function(a){a.executeSql("SELECT COUNT(*) as cnt FROM sqlite_master where name='LocalGoogleContacts'",[],function(a,c){var d=c.rows.item(0).cnt;_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("LocalGoogleContacts table exists?: "+d);0==d&&(_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Couldnt find table LocalGoogleContacts...creating..."),
_38da7ad9ace6225b1fcd52872a3fdb7e7d2ab5195f3307d957a718ee2df794a78ab47d5f5fb7cd4d())},_43b3364ac2dbb9c8957b01fabfdc1b8c71332e75d5759c2495f730727f0b8ba13b00faaca7f7a2dc)})}
function _a754b3b0dc763f32c739ca6fee5007d051a18c1df47dbcb1c351e98fe9a24d4c963d71eda3727ab5(){db.transaction(function(a){a.executeSql("CREATE TABLE Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, googleusername TEXT, msgid TEXT UNIQUE, time_client DATE, time_server DATE, from_phone_num TEXT, body TEXT, type INTEGER, status INTEGER, source INTEGER)",[],function(a){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("table Messages created")},_43b3364ac2dbb9c8957b01fabfdc1b8c71332e75d5759c2495f730727f0b8ba13b00faaca7f7a2dc)})}
function _38da7ad9ace6225b1fcd52872a3fdb7e7d2ab5195f3307d957a718ee2df794a78ab47d5f5fb7cd4d(){db.transaction(function(a){a.executeSql("CREATE TABLE LocalGoogleContacts (id INTEGER PRIMARY KEY AUTOINCREMENT, googleusername TEXT, phone_num TEXT UNIQUE, contact_name TEXT)",[],function(a){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("table LocalGoogleContacts created")},_43b3364ac2dbb9c8957b01fabfdc1b8c71332e75d5759c2495f730727f0b8ba13b00faaca7f7a2dc)})}
function _9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528(a,b){1==debug_mode&&console.log(a)}
function _dbc69650be3f281abbb43bf69b8d4badb201f730fdd2906a0065a2700ce380bccbaf16b0fe5b30c9(a,b){for(var c=0;c<contacts.length;c++){var d=_c8fc9058d7c18b9c6b3b026df2cc1f9648b5940d30300cf3e152e70679acbf4b36af0ebadb2607ee(contacts[c].phonenums[0]).search(a);if(-1<d)return _9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("FOUND substring in Google Contact Array- substring match position is: "+d),_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Inserting this contact into Local Contact DB table...full phone num is "+
b+"..."+contacts[c].name),_52ee494f2a69bcbd373e08091aac04ae4a5a73d5915787e6535aaed22423a71c7a664a6bb9e428a9(contacts[c].phonenums[0],contacts[c].name),{contactPhoneNumberfromGoogleContactsArray:b,contactNamefromGoogleContactsArray:contacts[c].name}}return""}
function _1bb9c0f712a99afc7d6cf3557f027fff595950c6ae4374ca0b67482d986da5f6d3e712b924f08bf9(a){for(var b=0;b<localContactsArray.length;b++){var c=_c8fc9058d7c18b9c6b3b026df2cc1f9648b5940d30300cf3e152e70679acbf4b36af0ebadb2607ee(localContactsArray[b].phone_num).search(a);if(-1<c)return _9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("FOUND substring in local contact - substring match position is: "+c),{contactPhoneNumberLocalDB:localContactsArray[b].phone_num,contactNameLocalDB:localContactsArray[b].contact_name}}return""}
function _c8fc9058d7c18b9c6b3b026df2cc1f9648b5940d30300cf3e152e70679acbf4b36af0ebadb2607ee(a){for(;-1<a.search("[-]");)a=a.replace("-","");for(;-1<a.search("[ ]");)a=a.replace(" ","");for(;-1<a.search("[(]");)a=a.replace("(","");for(;-1<a.search("[)]");)a=a.replace(")","");7>a.length&&(a=_cd728dc99608f03b47a0ba2f76eeadb7d6722c11722944f89091ce5d9b1c5fbdfd00568555f67a8a(a,7));return a}
function _52ee494f2a69bcbd373e08091aac04ae4a5a73d5915787e6535aaed22423a71c7a664a6bb9e428a9(a,b){db.transaction(function(c){c.executeSql("INSERT INTO LocalGoogleContacts (googleusername,phone_num,contact_name) VALUES (?,?,?)",[google_username_currently_logged_in,a,b],function(c,e){_9fee5110996487c12e15f4583e83702e4af6ce6e0b1ea91d44be154a5ee3041cc94b172fa6647528("Added Contact to local SQL: "+b+" / "+a+" / "+google_username_currently_logged_in)},_43b3364ac2dbb9c8957b01fabfdc1b8c71332e75d5759c2495f730727f0b8ba13b00faaca7f7a2dc)})}
function _311ffec39cad97bb010c3c8149a64f86feffd9f10a7032add55231cc9586fab8470208b9676fd916(){$.get("http://textyapp.com/get_dynamic_info.php",function(a){dynamic_info_global=a})}function _cd728dc99608f03b47a0ba2f76eeadb7d6722c11722944f89091ce5d9b1c5fbdfd00568555f67a8a(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function _d650f34642346b66d8960867689b22ec8f4fb2e1432cee131835e0372b4fbdae960bbe69178fb8e7(a){return a};
/*! scroblr 2014-02-04 */
!function(a,b){"use strict";function c(){j.on("click","#authorizeBtn",function(a){a.preventDefault(),h("authButtonClicked")}),j.on("click","#logoutLink",function(a){a.preventDefault(),h("logoutLinkClicked")}),b(".container input").on("change",function(a){d.call(this,a)}),chrome.extension.onMessage.addListener(f)}function d(){var a=b(this).attr("id");this.checked?localStorage.removeItem(a):localStorage[a]="true",h("localSettingsChanged")}function e(){c(),i(),g()}function f(a){switch(a.name){case"localSettingsChanged":g();break;case"userLoggedOut":case"userSessionRetrieved":i()}}function g(){var a,c,d;for(d=["disable_scrobbling","disable_notifications","disable_autodismiss","disable_eighttracks","disable_accujazz","disable_accuradio","disable_bandcamp","disable_beats","disable_google","disable_indieshuffle","disable_jango","disable_pandora","disable_playerfm","disable_plugdj","disable_rhapsody","disable_songza","disable_soundcloud","disable_vk","disable_youtube"],a=0,c=d.length;c>a;a+=1)"true"===localStorage[d[a]]?b("#"+d[a]).prop("checked",!1):b("#"+d[a]).prop("checked",!0)}function h(b,c){a.messageHandler({name:b,message:c})}function i(){var c=a.getSession();c?(b("#userSettings").show(),b("#authenticate").hide(),b("#userProfile").text(c.name)):(b("#userSettings").hide(),b("#authenticate").show())}var j=b("body");e()}(chrome.extension.getBackgroundPage().scroblrGlobal,jQuery);
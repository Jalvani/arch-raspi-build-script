var oAuth={instance:null,hasInstance:function(){return this.instance?true:false},initialize:function(a){this.instance=ChromeExOAuth.initBackgroundPage(a)},hasToken:function(){return this.instance.hasToken()},authorize:function(){if(this.hasInstance()){this.instance.authorize(function(){chrome.extension.getViews().forEach(function(b){dialog=b.document.querySelector("form.authorization.oauth");if(dialog){var a=dialog.querySelector('input[name="token_key"]');var c=dialog.querySelector('input[name="token_secret"]');a.value=oAuth.instance.getToken();a.fireEvent("change");c.value=oAuth.instance.getTokenSecret();c.fireEvent("change")}})})}},clear:function(){if(this.hasInstance()){this.instance.clearTokens();this.instance=null}}};
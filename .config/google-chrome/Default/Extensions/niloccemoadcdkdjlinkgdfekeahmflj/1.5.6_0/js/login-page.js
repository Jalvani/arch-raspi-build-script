(function(){function e(){var e=document.getElementById("subtext-field");e.className="",e.innerHTML="You can log into Pocket with your existing Read It Later account.",document.getElementById("username-field").value="",document.getElementById("password-field").value=""}function t(e){openTabWithURL(e),isSafari()&&safari.extension.popovers[0].hide()}function n(){var e=document.getElementById("subtext-field");e.className="",e.innerHTML="Logging in...";var t=document.getElementById("username-field").value,n=document.getElementById("password-field").value,r=function(){isChrome()&&this.close()}.bind(this),i=function(t){e.className="error",e.innerHTML="The username and or password you entered was incorrect.",e.style.display="block"}.bind(this),s=getBackgroundPage().backgroundPage;s.authentication.login(t,n,r,i)}function r(){event.keyCode=="13"&&n()}function i(){$("#content").hide(),$("#login-attempt").show();var e=function(){isChrome()?this.close():isSafari()&&safari.application.removeEventListener("popover",i,!0)}.bind(this),t=function(){$("#login-attempt").hide(),$("#content").show(),setTimeout(function(){$("#username-field").focus()},100)},n=getBackgroundPage().backgroundPage;n.authentication.loginViaCookie(e,t)}function s(){$("#login-button-link").click(function(e){n(),e.preventDefault()}),$("#create-account-link").click(function(e){var n;isOpera()?n="http://getpocket.com/signup/?src=operax":isChrome()?n="http://getpocket.com/signup/?src=chromex":isSafari()&&(n="http://getpocket.com/signup/?src=safarix"),t(n),e.preventDefault()}),$("#forgot-password-link").click(function(e){var n="http://getpocket.com/forgot/";t(n),e.preventDefault()}),isSafari()?window.onkeydown=r:window.onkeyup=r,isSafari()&&safari.application.addEventListener("popover",i,!0),i()}window.reset=e,window.onload=s})();
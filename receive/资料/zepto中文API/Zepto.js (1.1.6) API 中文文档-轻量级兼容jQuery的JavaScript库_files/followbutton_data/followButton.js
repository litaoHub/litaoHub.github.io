!function(a,b){var STK=function(){var a={},b=[];a.inc=function(a,b){return!0};a.register=function(c,d){var e=c.split("."),f=a,g=null;while(g=e.shift())if(e.length){f[g]===undefined&&(f[g]={});f=f[g]}else if(f[g]===undefined)try{f[g]=d(a)}catch(h){b.push(h)}};a.regShort=function(b,c){if(a[b]!==undefined)throw"["+b+"] : short : has been register";a[b]=c};a.IE=/msie/i.test(navigator.userAgent);a.E=function(a){return typeof a=="string"?document.getElementById(a):a};a.C=function(a){var b;a=a.toUpperCase();a=="TEXT"?b=document.createTextNode(""):a=="BUFFER"?b=document.createDocumentFragment():b=document.createElement(a);return b};a.log=function(a){b.push("["+(new Date).getTime()%1e5+"]: "+a)};a.getErrorLogInformationList=function(a){return b.splice(0,a||b.length)};return a}();$Import=STK.inc;
STK.register("core.evt.addEvent",function(a){return function(b,c,d){var e=a.E(b);if(e==null)return!1;c=c||"click";if((typeof d).toLowerCase()=="function"){e.addEventListener?e.addEventListener(c,d,!1):e.attachEvent?e.attachEvent("on"+c,d):e["on"+c]=d;return!0}}});
STK.register("core.util.browser",function(a){var b=navigator.userAgent.toLowerCase(),c=window.external||"",d,e,f,g,h,i=function(a){var b=0;return parseFloat(a.replace(/\./g,function(){return b++==1?"":"."}))};try{/windows|win32/i.test(b)?h="windows":/macintosh/i.test(b)?h="macintosh":/rhino/i.test(b)&&(h="rhino");if((e=b.match(/applewebkit\/([^\s]*)/))&&e[1]){d="webkit";g=i(e[1])}else if((e=b.match(/presto\/([\d.]*)/))&&e[1]){d="presto";g=i(e[1])}else if(e=b.match(/msie\s([^;]*)/)){d="trident";g=1;(e=b.match(/trident\/([\d.]*)/))&&e[1]&&(g=i(e[1]))}else if(/gecko/.test(b)){d="gecko";g=1;(e=b.match(/rv:([\d.]*)/))&&e[1]&&(g=i(e[1]))}/world/.test(b)?f="world":/360se/.test(b)?f="360":/maxthon/.test(b)||typeof c.max_version=="number"?f="maxthon":/tencenttraveler\s([\d.]*)/.test(b)?f="tt":/se\s([\d.]*)/.test(b)&&(f="sogou")}catch(j){}var k={OS:h,CORE:d,Version:g,EXTRA:f?f:!1,IE:/msie/.test(b),OPERA:/opera/.test(b),MOZ:/gecko/.test(b)&&!/(compatible|webkit)/.test(b),IE5:/msie 5 /.test(b),IE55:/msie 5.5/.test(b),IE6:/msie 6/.test(b),IE7:/msie 7/.test(b),IE8:/msie 8/.test(b),IE9:/msie 9/.test(b),SAFARI:!/chrome\/([\d.]*)/.test(b)&&/\/([\d.]*) safari/.test(b),CHROME:/chrome\/([\d.]*)/.test(b),IPAD:/\(ipad/i.test(b),IPHONE:/\(iphone/i.test(b),ITOUCH:/\(itouch/i.test(b),MOBILE:/mobile/i.test(b)};return k});
STK.register("core.evt.getEvent",function(a){return function(){if(a.IE)return window.event;if(window.event)return window.event;var b=arguments.callee.caller,c,d=0;while(b!=null&&d<40){c=b.arguments[0];if(!(!c||c.constructor!=Event&&c.constructor!=MouseEvent&&c.constructor!=KeyboardEvent))return c;d++;b=b.caller}return c}});
STK.register("core.evt.stopEvent",function(a){return function(b){var c=b?b:a.core.evt.getEvent();if(a.IE){c.cancelBubble=!0;c.returnValue=!1}else{c.preventDefault();c.stopPropagation()}return!1}});
STK.register("core.evt.removeEvent",function(a){return function(b,c,d,e){var f=a.E(b);if(f==null)return!1;if(typeof d!="function")return!1;f.removeEventListener?f.removeEventListener(c,d,e):f.detachEvent?f.detachEvent("on"+c,d):f["on"+c]=null;return!0}});
STK.register("core.io.getXHR",function(a){return function(){var a=!1;try{a=new XMLHttpRequest}catch(b){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(c){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(d){a=!1}}}return a}});
STK.register("core.obj.parseParam",function(a){return function(a,b,c){var d,e={};b=b||{};for(d in a){e[d]=a[d];b[d]!=null&&(c?a.hasOwnProperty[d]&&(e[d]=b[d]):e[d]=b[d])}return e}});
STK.register("core.str.parseURL",function(a){return function(a){var b=/^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,c=["url","scheme","slash","host","port","path","query","hash"],d=b.exec(a),e={};for(var f=0,g=c.length;f<g;f+=1)e[c[f]]=d[f]||"";return e}});
STK.register("core.arr.isArray",function(a){return function(a){return Object.prototype.toString.call(a)==="[object Array]"}});
STK.register("core.str.trim",function(a){return function(a){if(typeof a!="string")throw"trim need a string as parameter";var b=a.length,c=0,d=/(\u3000|\s|\t|\u00A0)/;while(c<b){if(!d.test(a.charAt(c)))break;c+=1}while(b>c){if(!d.test(a.charAt(b-1)))break;b-=1}return a.slice(c,b)}});
STK.register("core.json.queryToJson",function(a){return function(b,c){var d=a.core.str.trim(b).split("&"),e={},f=function(a){return c?decodeURIComponent(a):a};for(var g=0,h=d.length;g<h;g++)if(d[g]){var i=d[g].split("="),j=i[0],k=i[1];if(i.length<2){k=j;j="$nullName"}if(!e[j])e[j]=f(k);else{a.core.arr.isArray(e[j])!=!0&&(e[j]=[e[j]]);e[j].push(f(k))}}return e}});
STK.register("core.json.jsonToQuery",function(a){var b=function(b,c){b=b==null?"":b;b=a.core.str.trim(b.toString());return c?encodeURIComponent(b):b};return function(a,c){var d=[];if(typeof a=="object")for(var e in a){if(e==="$nullName"){d=d.concat(a[e]);continue}if(a[e]instanceof Array)for(var f=0,g=a[e].length;f<g;f++)d.push(e+"="+b(a[e][f],c));else typeof a[e]!="function"&&d.push(e+"="+b(a[e],c))}return d.length?d.join("&"):""}});
STK.register("core.util.URL",function(a){return function(b,c){var d=a.core.obj.parseParam({isEncodeQuery:!1,isEncodeHash:!1},c||{}),e={},f=a.core.str.parseURL(b),g=a.core.json.queryToJson(f.query),h=a.core.json.queryToJson(f.hash);e.setParam=function(a,b){g[a]=b;return this};e.getParam=function(a){return g[a]};e.setParams=function(a){for(var b in a)e.setParam(b,a[b]);return this};e.setHash=function(a,b){h[a]=b;return this};e.getHash=function(a){return h[a]};e.valueOf=e.toString=function(){var b=[],c=a.core.json.jsonToQuery(g,d.isEncodeQuery),e=a.core.json.jsonToQuery(h,d.isEncodeQuery);if(f.scheme!=""){b.push(f.scheme+":");b.push(f.slash)}if(f.host!=""){b.push(f.host);if(f.port!=""){b.push(":");b.push(f.port)}}b.push("/");b.push(f.path);c!=""&&b.push("?"+c);e!=""&&b.push("#"+e);return b.join("")};return e}});
STK.register("core.func.empty",function(){return function(){}});
STK.register("core.io.ajax",function($){return function(oOpts){var opts=$.core.obj.parseParam({url:"",charset:"UTF-8",timeout:3e4,args:{},onComplete:null,onTimeout:$.core.func.empty,uniqueID:null,onFail:$.core.func.empty,method:"get",asynchronous:!0,header:{},isEncode:!1,responseType:"json"},oOpts);if(opts.url=="")throw"ajax need url in parameters object";var tm,trans=$.core.io.getXHR(),cback=function(){if(trans.readyState==4){clearTimeout(tm);var data="";if(opts.responseType==="xml")data=trans.responseXML;else if(opts.responseType==="text")data=trans.responseText;else try{trans.responseText&&typeof trans.responseText=="string"?data=eval("("+trans.responseText+")"):data={}}catch(exp){data=opts.url+"return error : data error"}trans.status==200?opts.onComplete!=null&&opts.onComplete(data):trans.status!=0&&opts.onFail!=null&&opts.onFail(data,trans)}else opts.onTraning!=null&&opts.onTraning(trans)};trans.onreadystatechange=cback;opts.header["Content-Type"]||(opts.header["Content-Type"]="application/x-www-form-urlencoded");opts.header["X-Requested-With"]||(opts.header["X-Requested-With"]="XMLHttpRequest");if(opts.method.toLocaleLowerCase()=="get"){var url=$.core.util.URL(opts.url,{isEncodeQuery:opts.isEncode});url.setParams(opts.args);url.setParam("__rnd",(new Date).valueOf());trans.open(opts.method,url,opts.asynchronous);try{for(var k in opts.header)trans.setRequestHeader(k,opts.header[k])}catch(exp){}trans.send("")}else{trans.open(opts.method,opts.url,opts.asynchronous);try{for(var k in opts.header)trans.setRequestHeader(k,opts.header[k])}catch(exp){}trans.send($.core.json.jsonToQuery(opts.args,opts.isEncode))}opts.timeout&&(tm=setTimeout(function(){try{trans.abort()}catch(a){}opts.onTimeout({},trans);opts.onFail(data,trans)},opts.timeout));return trans}});
typeof window.App=="undefined"&&(App={});STK.register("common.widget.log",function(a){var b={app_sharebutton:1,app_followbutton:2,app_livestream:4,app_listweibo:5,app_weiboshow:6,app_commentbox:7};return function(c){var d=a.core.obj.parseParam({vsrc:"app_weiboshow",refer:"",step:1},c),e=scope.refer||scope.$refer||d.refer,f=scope.loginKit().uid||"",g=scope.appkey||$CONFIG.$appkey||$CONFIG.appkey||0,h=b[d.vsrc]||"",i="http://rs.sinajs.cn/r.gif?uid="+f+"&appid="+g+"&refer="+e+"&cat="+h+"&step="+d.step+"&rnd="+ +(new Date),j=new Image;j.src=i;j=null}});
STK.register("comp.widget.followButton.login",function(a){var b=scope.language?scope.language:"zh_cn",c="http://"+location.host+"/dialog/follow.php?fuid="+scope.uid+"&refer="+scope.refer+"&language="+b+"&type=widget_page&vsrc=app_followbutton&backurl="+encodeURIComponent(document.referrer)+"&rnd="+(new Date).valueOf();/service/.test(location.host)&&(c="http://"+location.host+"/widget/dialog/follow.php?fuid="+scope.uid+"&refer="+scope.refer+"&language="+b+"&type=widget_page&vsrc=app_followbutton&backurl="+encodeURIComponent(document.referrer)+"&rnd="+(new Date).valueOf());scope.$spr&&(c+="&c="+scope.$spr);return function(){var b=function(b){App.loginBackUrlCallBack=function(){b&&b();a.common.widget.log({vsrc:"app_followbutton",step:2})};scope.postLogin=1;var d=window.open(c,"miniblog_login",["toolbar=0,status=0,resizable=1,width=620,height=540,left=",(screen.width-620)/2,",top=",(screen.height-450)/2].join(""));try{d.focus()}catch(e){}App.loginPopWindow=d;a.common.widget.log({vsrc:"app_followbutton"})};return b}});
typeof scope=="undefined"&&(scope={});scope.loginKit=function(){var a=document.cookie+";",b=["SUP","=([^;]*)?;"].join(""),c=["(\\?|&)","uid","=([^&]*)(&|$)"].join(""),d=a.match(new RegExp(b,"i"));d=d?d[1]||"":"";d=unescape(d);var e=d.match(new RegExp(c));e=e?e[2]||"":"";var f=scope.$oid;return{uid:e,isLogin:!!e,isAdmin:e&&f&&e==f}};scope.$isLogin=function(){return scope.loginKit().isLogin};scope.$isAdmin=function(){return scope.loginKit().isAdmin};
STK.register("comp.widget.followButton.ssologin",function(a){var b=function(a){a=typeof a=="undefined"?-1:a;var b=scope.loginKit().uid;(new Image).src="http://rs.sinajs.cn/b.gif?uid="+b+"&refer="+encodeURIComponent(scope.refer)+"&url="+encodeURIComponent(document.referrer)+"&followed="+a+"&login="+(a==-1?0:1)+"&follow_uid="+scope.uid+"&rnd="+(new Date).getTime()},c=a.core.io.ajax,d="http://widget.weibo.com/relationship/aj_isfans.php";if(/service/.test(location.host)){d="http://"+location.host+"/widget/relationship/aj_isfans.php";/jssdk/.test(location.href)&&(d="http://"+location.host+"/widget/jssdk/aj_isfans.php")}return function(a){(function(){this.entry="wbwidget";this.service="miniblog";this.domain="weibo.com";this.appLoginURL["weibo.com"]="http://weibo.com/sso/login.php"}).call(sinaSSOController);sinaSSOController.autoLogin(function(){scope.$isLogin()?c({method:"get",url:d,args:{uid:scope.uid},onComplete:function(c){c.firstAjax=1;typeof a=="function"&&a(c);b(c.code)}}):b()})}});
STK.register("comp.widget.followButton.lang",function(a){return function(){var a={zh_cn:{n001:"已关注",n002:"你已经关注",n003:"的微博",n004:"你自己",n005:"请重试",n006:"关注",n007:"点此开通微博",n008:"你还未开通微博,不能加关注",n009:"加关注",n010:"取消",n011:"相互关注"},zh_tw:{n001:"已關注",n002:"你已經關注",n003:"的微博",n004:"你自己",n005:"請重試",n006:"關注",n007:"點此開通微博",n008:"你還未開通微博,不能加關注",n009:"加關注",n010:"取消",n011:"相互關注"}},b=a[scope.language?scope.language:"zh_cn"];return b}});
STK.register("common.widget.analytics",function(a){var b=document.location.protocol.indexOf("https")>-1?"https://":"http://",c="beacon.sina.com.cn",d=b+c+"/e.gif",e="http://rs.sinajs.cn/social.gif";return function(b){var c={},f=a.core.obj.parseParam({gid:"",sid:"",uid:"",sup:"",acode:"weibo_socialshare_widget",aext:"",referer:"",href:document.location.href,requrl:""},b),g="?UATrack||"+f.gid+"||"+f.sid+"||::"+f.uid+"::"+"||"+f.acode+"||"+f.aext+"||"+f.referer+"||"+f.href+"||"+f.requrl+"||&gUid_"+(new Date).valueOf(),h=d+g,i=e+g,j=new Image;j.src=h;var j=new Image;j.src=i;return c}});
var $=STK,sCore=$.core,login=$.comp.widget.followButton.login(),ssologin=$.comp.widget.followButton.ssologin,removeEvent=sCore.evt.removeEvent,addEvent=sCore.evt.addEvent,stopEvent=sCore.evt.stopEvent,ajax=sCore.io.ajax,followUrl="http://"+location.host+"/relationship/aj_attention.php",isfansUrl="http://widget.weibo.com/relationship/aj_isfans.php";if(/service/.test(location.host)){followUrl="http://"+location.host+"/widget/relationship/aj_attention.php";isfansUrl="http://"+location.host+"/widget/relationship/aj_isfans.php"}var Lang=$.comp.widget.followButton.lang(),$followBtn=$.E("followBtn"),$fStatus=$.E("fStatus"),$fText=$.E("fText"),$fNum=$.E("fNum"),fClass=$fStatus.className,lock=0,status={init:function(a,b,c){a=a?fClass+" "+a:fClass;b&&($fText.innerHTML=b);$fStatus.className=a;c&&($fStatus.title=c)},load:function(){this.init("WB_Bloading",null,"")},followed:function(a,b){this.init("WB_followed",a,b);$followBtn.setAttribute("href","http://weibo.com/u/"+scope.uid);$followBtn.setAttribute("target","_blank");addEvent($followBtn,"click",log)}},log=function(){var a=new Image;a.src="http://rs.sinajs.cn/social.gif?followbutton=1"},error=function(){status.init("",Lang.n005)},numWrite=function(){if($fNum&&scope.write==1){var a=$fNum.innerHTML;a=parseInt(a,10)+1;isNaN(a)||($fNum.innerHTML=a)}},callback=function(a){lock=0;if(a.code=="0")status.init(null,null,Lang.n006+scope.uname);else if(a.code==="A00006"||a.code==="A00008"||a.code==="A10007"||a.code==1||a.code==2){a.first||numWrite();unbindDOM();status.followed(Lang.n001,Lang.n002+scope.uname)}else if(a.code==="M00006"||a.code==3){unbindDOM();status.followed(Lang.n004,Lang.n004)}else{if(a.code==="M00005"){if(!a.firstAjax){login(addFollow);status.init(null,null,Lang.n006+scope.uname)}return}a.firstAjax||error()}},suda=function(){var a=$.core.util.URL(document.location.href),b=a.getParam("social"),c=scope.loginKit().uid||0,d=scope.uid||0;b&&$.common.widget.analytics({uid:c,aext:"followclk:"+c+":"+d+":"+a.getParam("domain")})},addFollow=function(a){if(lock!==1){if(parent!=self&&parent!=parent.parent)return;suda();if(!scope.loginKit().isLogin){login(addFollow);return}lock=1;var b={refer:scope.refer||"",login:scope.postLogin,wsrc:$CONFIG.wsrc||"app_follow_button",uid:scope.uid};status.load();ajax({method:"post",url:followUrl,args:b,onComplete:callback,onTimeout:error,onFail:error})}},bindDOM=function(){addEvent($followBtn,"click",addFollow)},unbindDOM=function(){removeEvent($followBtn,"click",addFollow)};bindDOM();ssologin(callback);window.App=window.App||{};window.App.doFollow=addFollow;window.App.loginBackUrlCallBack=function(){};
}(window,document);

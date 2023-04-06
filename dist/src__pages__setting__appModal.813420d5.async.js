(self.webpackChunk=self.webpackChunk||[]).push([[2313],{94293:function(z,b,e){"use strict";e.r(b);var d=e(25359),g=e.n(d),k=e(57213),y=e.n(k),M=e(49811),T=e.n(M),s=e(54306),f=e.n(s),h=e(63313),v=e.n(h),P=e(91692),L=e(32049),I=e(24550),A=e(38626),B=e(57179),m=e(96786),a=e(45277),r=e(11527),_=function(i){var o=i.app,t=i.handleCancel,C=i.visible,n=P.Z.useForm(),p=f()(n,1),R=p[0],Q=(0,h.useState)(!1),F=f()(Q,2),V=F[0],S=F[1],Y=function(){var u=T()(g()().mark(function E(D){var w,j,Z,U,q;return g()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return S(!0),w=o?"put":"post",j=y()({},D),o&&(j.id=o.id),l.prev=4,l.next=7,m.W[w]("".concat(a.Z.apiPrefix,"apps"),{data:j});case 7:Z=l.sent,U=Z.code,q=Z.data,U===200&&(L.ZP.success(o?"\u66F4\u65B0\u5E94\u7528\u6210\u529F":"\u65B0\u5EFA\u5E94\u7528\u6210\u529F"),t(q)),S(!1),l.next=17;break;case 14:l.prev=14,l.t0=l.catch(4),S(!1);case 17:case"end":return l.stop()}},E,null,[[4,14]])}));return function(D){return u.apply(this,arguments)}}();return(0,h.useEffect)(function(){R.resetFields()},[o,C]),(0,r.jsx)(I.Z,{title:o?"\u7F16\u8F91\u5E94\u7528":"\u65B0\u5EFA\u5E94\u7528",open:C,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){R.validateFields().then(function(E){Y(E)}).catch(function(E){console.log("Validate Failed:",E)})},onCancel:function(){return t()},confirmLoading:V,children:(0,r.jsxs)(P.Z,{form:R,layout:"vertical",name:"form_app_modal",initialValues:o,children:[(0,r.jsx)(P.Z.Item,{name:"name",label:"\u540D\u79F0",rules:[{validator:function(E,D){return["system"].includes(D)?Promise.reject(new Error("\u540D\u79F0\u4E0D\u80FD\u4E3A\u4FDD\u7559\u5173\u952E\u5B57")):Promise.resolve()}}],children:(0,r.jsx)(A.Z,{placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D\u79F0"})}),(0,r.jsx)(P.Z.Item,{name:"scopes",label:"\u6743\u9650",rules:[{required:!0}],children:(0,r.jsx)(B.Z,{mode:"multiple",placeholder:"\u8BF7\u9009\u62E9\u6A21\u5757\u6743\u9650",allowClear:!0,style:{width:"100%"},children:a.Z.scopes.map(function(u){return(0,r.jsx)(B.Z.Option,{value:u.value,children:u.name},u.value)})})})]})})};b.default=_},45277:function(z,b){"use strict";b.Z={siteName:"\u9752\u9F99",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u65E5\u5FD7\u7BA1\u7406",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u65E5\u5FD7\u7BA1\u7406",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"aibotk",label:"\u667A\u80FD\u5FAE\u79D8\u4E66"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"lark",label:"\u98DE\u4E66\u673A\u5668\u4EBA"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0},{label:"pushDeerUrl",tip:"PushDeer\u7684\u81EA\u67B6API endpoint\uFF0C\u9ED8\u8BA4\u662F https://api2.pushdeer.com/message/push"}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],aibotk:[{label:"aibotkKey",tip:"\u5BC6\u94A5key,\u667A\u80FD\u5FAE\u79D8\u4E66\u4E2A\u4EBA\u4E2D\u5FC3\u83B7\u53D6apikey\uFF0C\u7533\u8BF7\u5730\u5740\uFF1Ahttps://wechat.aibotk.com/signup?from=ql",required:!0},{label:"aibotkType",tip:"\u53D1\u9001\u7684\u76EE\u6807\uFF0C\u7FA4\u7EC4\u6216\u8005\u597D\u53CB",required:!0,placeholder:"\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u76EE\u6807",items:[{value:"room",label:"\u7FA4\u804A"},{value:"contact",label:"\u597D\u53CB"}]},{label:"aibotkName",tip:"\u8981\u53D1\u9001\u7684\u7528\u6237\u6635\u79F0\u6216\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u7FA4\uFF0C\u9700\u8981\u586B\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u597D\u53CB\uFF0C\u9700\u8981\u586B\u597D\u53CB\u6635\u79F0",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],lark:[{label:"larkKey",tip:"\u98DE\u4E66\u7FA4\u7EC4\u673A\u5668\u4EBA\uFF1Ahttps://www.feishu.cn/hc/zh-CN/articles/360024984973",required:!0}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/crontab":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u65E5\u5FD7\u7BA1\u7406","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7","/dependence":"\u4F9D\u8D56\u7BA1\u7406"},dependenceTypes:["nodejs","python3","linux"]}},96786:function(z,b,e){"use strict";e.d(b,{W:function(){return B}});var d=e(25359),g=e.n(d),k=e(49811),y=e.n(k),M=e(57213),T=e.n(M),s=e(50659),f=e(32049),h=e(45277),v=e(95354);f.ZP.config({duration:1.5});var P=Date.now(),L=function(a){if(a.response){var r=a.data?a.data.message||a.message||a.data:a.response.statusText,_=a.response.status;[502,504].includes(_)?v.m8.push("/error"):_===401?v.m8.location.pathname!=="/login"&&(f.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(h.Z.authKey),v.m8.push("/login")):f.ZP.error(r)}else console.log(a.message);throw a},I=(0,s.l7)({timeout:6e4,params:{t:P},errorHandler:L}),A=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];I.interceptors.request.use(function(m,a){var r=localStorage.getItem(h.Z.authKey);if(r&&!A.includes(m)){var _={Authorization:"Bearer ".concat(r)};return{url:m,options:T()(T()({},a),{},{headers:_})}}return{url:m,options:a}}),I.interceptors.response.use(function(){var m=y()(g()().mark(function a(r){var _,O,i;return g()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(_=r.status,![502,504].includes(_)){t.next=5;break}v.m8.push("/error"),t.next=14;break;case 5:if(_!==401){t.next=9;break}v.m8.location.pathname!=="/login"&&(localStorage.removeItem(h.Z.authKey),v.m8.push("/login")),t.next=14;break;case 9:return t.next=11,r.clone().json();case 11:return O=t.sent,O.code!==200&&(i=O.message||O.data,i&&f.ZP.error(i)),t.abrupt("return",O);case 14:return t.abrupt("return",r);case 15:case"end":return t.stop()}},a)}));return function(a){return m.apply(this,arguments)}}());var B=I},57179:function(z,b,e){"use strict";var d=e(24572),g=e(51163),k=e(84875),y=e.n(k),M=e(7032),T=e(33759),s=e(63313),f=e.n(s),h=e(56220),v=e(31588),P=e(40987),L=e(75654),I=e(82689),A=e(35764),B=e(18952),m=e(29826),a=e(80386),r=function(o,t){var C={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&t.indexOf(n)<0&&(C[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,n=Object.getOwnPropertySymbols(o);p<n.length;p++)t.indexOf(n[p])<0&&Object.prototype.propertyIsEnumerable.call(o,n[p])&&(C[n[p]]=o[n[p]]);return C},_="SECRET_COMBOBOX_MODE_DO_NOT_USE",O=function(t,C){var n,p=t.prefixCls,R=t.bordered,Q=R===void 0?!0:R,F=t.className,V=t.getPopupContainer,S=t.dropdownClassName,Y=t.popupClassName,u=t.listHeight,E=u===void 0?256:u,D=t.placement,w=t.listItemHeight,j=w===void 0?24:w,Z=t.size,U=t.disabled,q=t.notFoundContent,ee=t.status,l=t.showArrow,K=r(t,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),x=s.useContext(h.E_),oe=x.getPopupContainer,te=x.getPrefixCls,le=x.renderEmpty,W=x.direction,_e=x.virtual,se=x.dropdownMatchSelectWidth,ie=s.useContext(L.Z),c=te("select",p),ue=te(),ae=(0,a.ri)(c,W),de=ae.compactSize,me=ae.compactItemClassnames,H=s.useMemo(function(){var $=K.mode;if($!=="combobox")return $===_?"combobox":$},[K.mode]),ne=H==="multiple"||H==="tags",pe=l!==void 0?l:K.loading||!(ne||H==="combobox"),N=(0,s.useContext)(I.aM),ce=N.status,J=N.hasFeedback,ge=N.isFormItemInput,he=N.feedbackIcon,ve=(0,B.F)(ce,ee),X;q!==void 0?X=q:H==="combobox"?X=null:X=(le||v.Z)("Select");var G=(0,m.Z)((0,g.Z)((0,g.Z)({},K),{multiple:ne,hasFeedback:J,feedbackIcon:he,showArrow:pe,prefixCls:c})),Ee=G.suffixIcon,be=G.itemIcon,fe=G.removeIcon,Pe=G.clearIcon,Oe=(0,T.Z)(K,["suffixIcon","itemIcon"]),Ce=y()(Y||S,(0,d.Z)({},"".concat(c,"-dropdown-").concat(W),W==="rtl")),re=de||Z||ie,De=s.useContext(P.Z),Me=U!=null?U:De,Ie=y()((n={},(0,d.Z)(n,"".concat(c,"-lg"),re==="large"),(0,d.Z)(n,"".concat(c,"-sm"),re==="small"),(0,d.Z)(n,"".concat(c,"-rtl"),W==="rtl"),(0,d.Z)(n,"".concat(c,"-borderless"),!Q),(0,d.Z)(n,"".concat(c,"-in-form-item"),ge),n),(0,B.Z)(c,ve,J),me,F),Be=function(){return D!==void 0?D:W==="rtl"?"bottomRight":"bottomLeft"};return s.createElement(M.ZP,(0,g.Z)({ref:C,virtual:_e,dropdownMatchSelectWidth:se},Oe,{transitionName:(0,A.mL)(ue,(0,A.q0)(D),K.transitionName),listHeight:E,listItemHeight:j,mode:H,prefixCls:c,placement:Be(),direction:W,inputIcon:Ee,menuItemSelectedIcon:be,removeIcon:fe,clearIcon:Pe,notFoundContent:X,className:Ie,getPopupContainer:V||oe,dropdownClassName:Ce,showArrow:J||l,disabled:Me}))},i=s.forwardRef(O);i.SECRET_COMBOBOX_MODE_DO_NOT_USE=_,i.Option=M.Wx,i.OptGroup=M.Xo,b.Z=i},71129:function(){}}]);

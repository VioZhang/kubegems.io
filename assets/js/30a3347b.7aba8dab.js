"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[9730],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55325:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"\u5de5\u4f5c\u8d1f\u8f7d",hide_title:!0,sidebar_position:1},u=void 0,l={unversionedId:"tasks/user-operation/workerloads/workloads",id:"tasks/user-operation/workerloads/workloads",title:"\u5de5\u4f5c\u8d1f\u8f7d",description:"\u5de5\u4f5c\u8d1f\u8f7d",source:"@site/docs/tasks/user-operation/workerloads/workloads.md",sourceDirName:"tasks/user-operation/workerloads",slug:"/tasks/user-operation/workerloads/workloads",permalink:"/docs/tasks/user-operation/workerloads/workloads",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/user-operation/workerloads/workloads.md",tags:[],version:"current",lastUpdatedBy:"yu.deng",lastUpdatedAt:1648026547,formattedLastUpdatedAt:"2022/3/23",sidebarPosition:1,frontMatter:{title:"\u5de5\u4f5c\u8d1f\u8f7d",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u955c\u50cf\u4ed3\u5e93",permalink:"/docs/tasks/user-operation/userapplication/image-registry"},next:{title:"\u5bb9\u5668\u7ec4",permalink:"/docs/tasks/user-operation/workerloads/pods"}},p={},c=[{value:"\u5de5\u4f5c\u8d1f\u8f7d",id:"\u5de5\u4f5c\u8d1f\u8f7d",level:2},{value:"\u8d44\u6e90\u5efa\u8bae\u7b56\u7565",id:"\u8d44\u6e90\u5efa\u8bae\u7b56\u7565",level:3}],d={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5de5\u4f5c\u8d1f\u8f7d"},"\u5de5\u4f5c\u8d1f\u8f7d"),(0,a.kt)("p",null,"kubegems \u9488\u5bf9k8s\u539f\u751f\u8d44\u6e90\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u754c\u9762\uff0c\u5b83\u4e3b\u8981\u662f\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment(\u65e0\u72b6\u6001\u670d\u52a1)"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"StatefulSet(\u6709\u72b6\u6001\u670d\u52a1)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"DeamonSet(\u5b88\u62a4\u8fdb\u7a0b\u670d\u52a1)"),"\u7684\u7ba1\u7406\u529f\u80fd;"),(0,a.kt)("p",null,"kubegems \u5217\u51faworkloads,\u5e76\u4e14\u6839\u636e\u8fc7\u53bb\u4e00\u5468\u7684\u4f7f\u7528\u91cf\u63d0\u4f9b\u4e86\u8d44\u6e90\u5efa\u8bae;"),(0,a.kt)("img",{src:r(78802).Z,align:"center"}),(0,a.kt)("h3",{id:"\u8d44\u6e90\u5efa\u8bae\u7b56\u7565"},"\u8d44\u6e90\u5efa\u8bae\u7b56\u7565"),(0,a.kt)("p",null,"kubegems \u76ee\u524d\u7248\u672c\u7684\u8d44\u6e90\u5efa\u8bae\u7b56\u7565\u662f\u57fa\u4e8e\u56fa\u5b9a\u65f6\u95f4\u7684\uff0c\u5177\u4f53\u7b56\u7565\u4e3a\uff0ckubegems\u7edf\u8ba1\u4e0a\u5468\u4e00\u5230\u5468\u65e5\u5f53\u524d\u670d\u52a1\u4e0b\u7684pods\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u5982\u679c\u4efb\u4e00pod\u7684cpu\u6216\u8005\u5185\u5b58\u4f7f\u7528\u7387\u8d85\u8fc790%\uff0c\u90a3\u4e48\u8ba4\u4e3a\u5f53\u524d\u670d\u52a1\u7684\u8d44\u6e90\u4f7f\u7528\u7387\u6781\u9ad8\uff0c\u5c3d\u5feb\u6269\u5bb9\u6216\u8005\u5347\u7ea7\u5bf9\u5e94\u8d44\u6e90\uff0c\u5982\u679c\u4efb\u4e00pod\u7684cpu\u6216\u8005\u5185\u5b58\u4f7f\u7528\u7387\u8d85\u8fc7\u4e8660%,\u5c31\u8ba4\u4e3a\u5f53\u524d\u670d\u52a1\u8d44\u6e90\u4f7f\u7528\u7387\u8f83\u9ad8\uff0c\u53ef\u4ee5\u8003\u8651\u6269\u5bb9\u6216\u8005\u5347\u7ea7\u5bf9\u5e94\u8d44\u6e90\uff0c\u5f53cpu\u548c\u5185\u5b58\u4f7f\u7528\u7387\u4f4e\u4e8e10%, \u90a3\u4e48\u8ba4\u4e3a\u5f53\u524d\u670d\u52a1\u8d44\u6e90\u4f7f\u7528\u7387\u8f83\u4f4e\uff0c\u53ef\u4ee5\u8003\u8651\u7f29\u5bb9\u5bf9\u5e94\u8d44\u6e90."),(0,a.kt)("p",null,"kubegems \u9ed8\u8ba4\u914d\u7f6e\u8d44\u6e90\u4f7f\u7528\u7387\u5065\u5eb7\u533a\u95f4\u4e3a 30%-50%, \u76ee\u6807\u503c\u4e3a40%\uff1b\u4f8b\u5982\u8fc7\u53bb\u4e00\u5468\u7684\u5185\u5b58\u4f7f\u7528\u7387\u4e3a6.7%\uff0c\u5185\u5b58\u9650\u5236\u914d\u7f6e\u7684\u662f1Gi\uff0ckubegems\u8ba4\u4e3a\u8fd9\u4e2a\u5185\u5b58\u4f7f\u7528\u7387\u8f83\u4f4e\uff0c\u6839\u636e40%\u7684\u76ee\u6807\uff0c",(0,a.kt)("strong",{parentName:"p"},"(1Gi * 6.7%) / 0.4")," \u5f97\u5230\u5efa\u8bae\u503c171Mi;"),(0,a.kt)("img",{src:r(16719).Z,width:"25%",align:"center"}))}m.isMDXComponent=!0},16719:function(e,t,r){t.Z=r.p+"assets/images/resource-advise-87da3b44a4905b0240c211d440151a84.png"},78802:function(e,t,r){t.Z=r.p+"assets/images/workload-list-31802944954d595f82c6b28d73543a2f.png"}}]);
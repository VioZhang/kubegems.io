"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[905],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"\u4ea7\u54c1\u751f\u6001",hide_title:!0,sidebar_position:2},s=void 0,u={unversionedId:"concepts/ecosystem",id:"concepts/ecosystem",title:"\u4ea7\u54c1\u751f\u6001",description:"KubeGems\u751f\u6001",source:"@site/docs/concepts/ecosystem.md",sourceDirName:"concepts",slug:"/concepts/ecosystem",permalink:"/docs/concepts/ecosystem",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/concepts/ecosystem.md",tags:[],version:"current",lastUpdatedBy:"link.ma",lastUpdatedAt:1648023228,formattedLastUpdatedAt:"2022/3/23",sidebarPosition:2,frontMatter:{title:"\u4ea7\u54c1\u751f\u6001",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"KubeGems\u4ecb\u7ecd",permalink:"/docs/concepts/what-is-kubegems"},next:{title:"\u4ea7\u54c1\u67b6\u6784",permalink:"/docs/concepts/architecture"}},p={},l=[{value:"KubeGems\u751f\u6001",id:"kubegems\u751f\u6001",level:2}],m={toc:l};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kubegems\u751f\u6001"},"KubeGems\u751f\u6001"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"KubeGems\u5e7f\u6cdb\u7684\u4f7f\u7528\u6765\u81ea\u5305\u62ec ",(0,i.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"\u4e91\u539f\u751f\u57fa\u91d1\u4f1a\uff08CNCF)")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/"},"Istio\u793e\u533a")," \u5f00\u6e90\u7684\u4ea7\u54c1\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u505a\u4e86\u4e8c\u6b21\u5f00\u53d1\u548c\u9002\u914d\u3002\u9488\u5bf9\u4ea7\u54c1\u5185\u90e8\u6bd4\u8f83\u901a\u7528\u7684\u9700\u6c42\uff0cKubeGems\u4e5f\u4f1a\u53ca\u65f6\u5c06\u4ee3\u7801\u4ee5PR\u7684\u65b9\u5f0f\u56de\u9988\u793e\u533a\uff0c\u4ee5\u4fdd\u8bc1\u4ea7\u54c1\u80fd\u591f\u4e0e\u793e\u533a\u8fdb\u884c\u540c\u6b65\u66f4\u65b0\u3002"),(0,i.kt)("p",null,"\u4e3a\u66f4\u597d\u7684\u964d\u4f4e\u7528\u6237\u5bf9\u4e91\u539f\u751f\u751f\u6001\u5185\u7684\u719f\u6089\u95e8\u69db\uff0cKubeGems\u63d0\u4f9b\u4e86\u4e13\u95e8\u7684\u5b89\u88c5\u63a7\u5236\u5668\u5bf9\u96c6\u6210\u7684\u4e09\u65b9\u63d2\u4ef6\u8fdb\u884c\u96c6\u4e2d\u7ba1\u7406\uff0c\u5e76\u4ee5\u6b64\u4fdd\u8bc1\u6211\u4eec\u7684\u4ea7\u54c1\u80fd\u59cb\u7ec8\u5982\u4e00\u7684\u90e8\u7f72\u5728\u4e0d\u540c\u65b9\u5f0f\u6784\u5efa\u7684Kubernetes\u96c6\u7fa4\u4e4b\u4e0a\uff0c\u4f7f\u7528\u6237\u80fd\u66f4\u5b8c\u6574\u80fd\u591f\u4f53\u9a8c\u5230KubeGems\u7684\u529f\u80fd\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 v1.20.0 \u7248\u672c\u4e2d\uff0cKubeGems \u5185\u90e8\u96c6\u6210\u4e86\u8fd1 30 \u6765\u4e2a\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u662f\u5426\u542f\u7528\u5b83\u4eec\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(96394).Z,width:"1810",height:"1422"})))}d.isMDXComponent=!0},96394:function(e,t,n){t.Z=n.p+"assets/images/ecosystem-f7d4cd8fccb914ec880c5dcdd874c9ca.jpg"}}]);
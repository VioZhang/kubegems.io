"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[4958],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84891:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97",hide_title:!0,sidebar_position:3},p=void 0,c={unversionedId:"tasks/platform/appstore-manage",id:"tasks/platform/appstore-manage",title:"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97",description:"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97",source:"@site/docs/tasks/platform/appstore-manage.md",sourceDirName:"tasks/platform",slug:"/tasks/platform/appstore-manage",permalink:"/docs/tasks/platform/appstore-manage",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u79df\u6237\u7ba1\u7406",permalink:"/docs/tasks/platform/tenant"},next:{title:"\u7a7a\u95f4\u7ba1\u7406",permalink:"/docs/tasks/platform/space"}},l={},m=[{value:"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97",id:"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97",level:2}],u={toc:m};function f(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97"},"\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97"),(0,o.kt)("p",null,"\u901a\u5e38\u4e1a\u52a1\u90fd\u4f1a\u4f9d\u8d56\u5f88\u591a\u5e38\u7528\u7684\u4e2d\u95f4\u4ef7\uff0c\u4f8b\u5982mysql,redis\u7b49\u7b49\uff1b kubegems\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684\u5e94\u7528\u5546\u5e97\uff0c\u91cc\u9762\u5df2\u7ecf\u5185\u7f6e\u4e86\u4e00\u90e8\u5206\u7684\u5e38\u7528\u4e2d\u95f4\u4ef7\uff0c\u4f46\u662f\u5e76\u4e0d\u5b8c\u5168\uff1bkubegems\u5141\u8bb8\u7cfb\u7edf\u7ba1\u7406\u5458\u6dfb\u52a0\u7b2c\u4e09\u65b9\u7684\u5e94\u7528\u5546\u5e97\uff1b"),(0,o.kt)("p",null,"\u5e94\u7528\u5546\u5e97\u7684\u672c\u8d28\u5c31\u662fhelm chart repo; \u662f\u8981\u662f\u517c\u5bb9helm chart index \u7684\u670d\u52a1\uff0c\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u7b2c\u4e09\u65b9\u5e94\u7528\u5546\u5e97\u88ab\u6dfb\u52a0\u5230kubegems\u4e2d\uff0c\u7b2c\u4e09\u65b9\u7684helm chart repo\u4f1a\u5728\u7b2c\u4e00\u6b21\u6dfb\u52a0\u4e4b\u540e\uff0c\u7acb\u5373\u540c\u6b65\u7b2c\u4e09\u65b9\u4ed3\u5e93\u7684chart \u5230 kubegems\u5185\u7f6e\u7684chartmusem\u4e2d\uff0c\u4e4b\u540e\u6bcf\u5929\u4f1a\u5b9a\u65f6\u540c\u6b65\u4e00\u6b21\uff1b\u6240\u4ee5\uff0c\u5982\u679c\u51fa\u73b0\u627e\u4e0d\u5230\u7b2c\u4e09\u65b9\u6e90\u5e93\u7684chart\u7684\u65f6\u5019\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u5728 \u7ba1\u7406\u754c\u9762\u624b\u52a8\u51fa\u53d1\u540c\u6b65\uff1b"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"kubegems \u4e0d\u4f1a\u626b\u63cf\u7b2c\u4e09\u65b9\u5e94\u7528\u5546\u5e97\u7684\u5b89\u5168\u6027\uff0c\u6240\u4ee5\u4f5c\u4e3a\u7cfb\u7edf\u7ba1\u7406\u5458\u9700\u8981\u8c28\u614e\u6dfb\u52a0\u7b2c\u4e09\u65b9\u4ed3\u5e93\uff0c\u907f\u514d\u5f15\u5165\u5b89\u5168\u95ee\u9898\uff1b"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"\u6dfb\u52a0\u754c\u9762",src:n(24803).Z,width:"2880",height:"1518"})),(0,o.kt)("p",null,"\u6dfb\u52a0\u7b2c\u4e09\u65b9\u5e94\u7528\u5546\u5e97\u9700\u8981\u63d0\u4f9b",(0,o.kt)("inlineCode",{parentName:"p"},"\u540d\u5b57"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"index\u5730\u5740"),", \u5176\u4e2d\u540d\u5b57\u5728kubegems\u4e2d\uff0c\u5fc5\u987b\u552f\u4e00"))}f.isMDXComponent=!0},24803:function(e,t,n){t.Z=n.p+"assets/images/tasks-platform-appstore-create-26a8741fde560617b210af8646b6ba59.png"}}]);
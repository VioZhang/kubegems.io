"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5019],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",hide_title:!0,sidebar_position:2},c=void 0,s={unversionedId:"tasks/microservice-manage/workload",id:"tasks/microservice-manage/workload",title:"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",description:"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",source:"@site/docs/tasks/microservice-manage/workload.md",sourceDirName:"tasks/microservice-manage",slug:"/tasks/microservice-manage/workload",permalink:"/docs/tasks/microservice-manage/workload",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/microservice-manage/workload.md",tags:[],version:"current",lastUpdatedBy:"sunlintong",lastUpdatedAt:1648461319,formattedLastUpdatedAt:"2022/3/28",sidebarPosition:2,frontMatter:{title:"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u865a\u62df\u7a7a\u95f4\u7ba1\u7406",permalink:"/docs/tasks/microservice-manage/virtualspace"},next:{title:"\u670d\u52a1\u7ba1\u7406",permalink:"/docs/tasks/microservice-manage/service"}},p={},m=[{value:"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",id:"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",level:2},{value:"\u6ce8\u5165sidecar",id:"\u6ce8\u5165sidecar",level:3},{value:"\u5de5\u4f5c\u8d1f\u8f7d\u8be6\u60c5",id:"\u5de5\u4f5c\u8d1f\u8f7d\u8be6\u60c5",level:3}],u={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406"},"\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406"),(0,i.kt)("p",null,"\u57fa\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"istio"),"\uff0c\u7ba1\u7406\u865a\u62df\u7a7a\u95f4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,i.kt)("h3",{id:"\u6ce8\u5165sidecar"},"\u6ce8\u5165sidecar"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sidecar"),"\u4e5f\u5c31\u662fistio \u7684",(0,i.kt)("inlineCode",{parentName:"p"},"sidecar\u5bb9\u5668"),"\uff0c\u6ce8\u5165\u4e4b\u540e\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u4fbf\u7eb3\u5165\u4e86\u670d\u52a1\u7f51\u683c\uff0c\u5176\u6d41\u91cf\u4fbf\u7531istio\u7ba1\u7406\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u865a\u62df\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u5e94\u7528"),"\u680f\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d")),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u8981\u7ba1\u7406\u7684\u73af\u5883\n",(0,i.kt)("img",{loading:"lazy",src:n(47439).Z,width:"1920",height:"961"})),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u6ce8\u5165/\u53d6\u6d88\u6ce8\u5165sidecar"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u66f4\u597d\u7684\u9002\u914d\u5fae\u670d\u52a1\u7ba1\u7406\u529f\u80fd\uff0c\u6211\u4eec\u5efa\u8bae\u670d\u52a1\u7f51\u683c\u4e2d\u7684\u7ed9\u5de5\u4f5c\u8d1f\u8f7d\u6253\u4e0a\u4e24\u4e2a\u6807\u7b7e:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app"),": \u5e94\u7528\u540d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),"\uff1a\u7248\u672c\u53f7")))),(0,i.kt)("h3",{id:"\u5de5\u4f5c\u8d1f\u8f7d\u8be6\u60c5"},"\u5de5\u4f5c\u8d1f\u8f7d\u8be6\u60c5"),(0,i.kt)("p",null,"\u70b9\u51fb\u4f60\u8981\u5173\u6ce8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5373\u53ef\u8fdb\u5165\u8be6\u60c5\u9875\uff0c\u6211\u4eec\u63d0\u4f9b\u4ee5\u4e0b\u89c6\u56fe\u534f\u52a9\u4f60\u5206\u6790\u8be5\u5de5\u4f5c\u8d1f\u8f7d\u5728\u670d\u52a1\u7f51\u683c\u4e2d\u7684\u72b6\u6001:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6982\u89c8: \u5c55\u793a\u5176\u5f53\u524d\u4ee5\u53ca\u8fc7\u53bb\u4e00\u6bb5\u65f6\u95f4\u7684\u6d41\u91cf\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u6570\u3001\u54cd\u5e94\u65f6\u95f4\u3001\u5f02\u5e38\u7b49"),(0,i.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u62d3\u6251\uff1a\u4ee5\u62d3\u6251\u56fe\u7684\u5f62\u5f0f\u5c55\u793a\u5f53\u524d\u5de5\u4f5c\u8d1f\u8f7d\u6240\u5728\u7684\u5fae\u670d\u52a1\u5e94\u7528\u7684\u6574\u4f53",(0,i.kt)("strong",{parentName:"li"},"\u6d41\u91cf\u62d3\u6251\u56fe")),(0,i.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\uff1a\u4fbf\u6377\u67e5\u770b\u65e5\u5fd7"),(0,i.kt)("li",{parentName:"ul"},"\u5165\u53e3/\u51fa\u53e3\u6d41\u91cf\uff1a\u4ee5\u65f6\u5e8f\u56fe\u7684\u5f62\u5f0f\u5c55\u793a\u5176\u8fd1\u671f\u6d41\u91cf\u89c6\u56fe"),(0,i.kt)("li",{parentName:"ul"},"\u94fe\u8def\u8ffd\u8e2a\uff1a\u5c55\u793a\u5176\u8fd1\u671f\u7684\u94fe\u8def\u8c03\u7528\u4fe1\u606f")))}d.isMDXComponent=!0},47439:function(e,t,n){t.Z=n.p+"assets/images/workload-07d020aafdabc396663f05c647b35ce1.png"}}]);
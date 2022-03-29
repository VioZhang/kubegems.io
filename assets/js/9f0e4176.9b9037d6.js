"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[8208],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),s=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,k=c["".concat(r,".").concat(u)]||c[u]||p[u]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var m={};for(var r in t)hasOwnProperty.call(t,r)&&(m[r]=t[r]);m.originalType=e,m.mdxType="string"==typeof e?e:i,o[1]=m;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41928:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return p}});var n=a(87462),i=a(63366),l=(a(67294),a(3905)),o=["components"],m={title:"\u5e38\u89c1\u64cd\u4f5c",hide_title:!0,sidebar_position:3,description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u666e\u901a\u7528\u6237\u5728 KubeGems \u5e73\u53f0\u5185\u7684\u4e00\u4e9b\u5e38\u89c1\u7684\u9ad8\u9891\u64cd\u4f5c\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u4e86\u89e3\u548c\u64cd\u4f5c\u4e91\u5e73\u53f0",keywords:["kubegems","KubeGems","kubernetes","workload","deployment","pod","debug","metrics"]},r=void 0,s={unversionedId:"quick-starts/example/common-operation",id:"quick-starts/example/common-operation",title:"\u5e38\u89c1\u64cd\u4f5c",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u666e\u901a\u7528\u6237\u5728 KubeGems \u5e73\u53f0\u5185\u7684\u4e00\u4e9b\u5e38\u89c1\u7684\u9ad8\u9891\u64cd\u4f5c\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u4e86\u89e3\u548c\u64cd\u4f5c\u4e91\u5e73\u53f0",source:"@site/docs/quick-starts/example/common-operation.md",sourceDirName:"quick-starts/example",slug:"/quick-starts/example/common-operation",permalink:"/docs/quick-starts/example/common-operation",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5e38\u89c1\u64cd\u4f5c",hide_title:!0,sidebar_position:3,description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u666e\u901a\u7528\u6237\u5728 KubeGems \u5e73\u53f0\u5185\u7684\u4e00\u4e9b\u5e38\u89c1\u7684\u9ad8\u9891\u64cd\u4f5c\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u4e86\u89e3\u548c\u64cd\u4f5c\u4e91\u5e73\u53f0",keywords:["kubegems","KubeGems","kubernetes","workload","deployment","pod","debug","metrics"]},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u5e94\u7528\u5546\u5e97\u670d\u52a1",permalink:"/docs/quick-starts/example/appstore-example"},next:{title:"\u7528\u6237\u7ba1\u7406",permalink:"/docs/tasks/platform/user"}},d={},p=[{value:"\u5e38\u89c1\u64cd\u4f5c",id:"\u5e38\u89c1\u64cd\u4f5c",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u5de5\u4f5c\u8d1f\u8f7d",id:"\u5de5\u4f5c\u8d1f\u8f7d",level:3},{value:"\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7",id:"\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7",level:4},{value:"\u8bbf\u95ee\u5bb9\u5668\u63a7\u5236\u53f0",id:"\u8bbf\u95ee\u5bb9\u5668\u63a7\u5236\u53f0",level:4},{value:"\u8c03\u6574\u526f\u672c\u6570",id:"\u8c03\u6574\u526f\u672c\u6570",level:4},{value:"\u5e94\u7528\u56de\u6eda",id:"\u5e94\u7528\u56de\u6eda",level:4},{value:"\u8c03\u6574\u52a8\u6001\u6269\u7f29\u5bb9",id:"\u8c03\u6574\u52a8\u6001\u6269\u7f29\u5bb9",level:4},{value:"\u8d44\u6e90\u667a\u80fd\u5efa\u8bae",id:"\u8d44\u6e90\u667a\u80fd\u5efa\u8bae",level:4},{value:"\u5e94\u7528\u8d44\u6e90\u8bbe\u7f6e",id:"\u5e94\u7528\u8d44\u6e90\u8bbe\u7f6e",level:4},{value:"\u65e5\u5fd7\u5206\u6790",id:"\u65e5\u5fd7\u5206\u6790",level:3},{value:"\u65e5\u5fd7\u67e5\u8be2",id:"\u65e5\u5fd7\u67e5\u8be2",level:4},{value:"\u9009\u62e9\u65f6\u95f4",id:"\u9009\u62e9\u65f6\u95f4",level:4},{value:"\u67e5\u8be2\u5386\u53f2",id:"\u67e5\u8be2\u5386\u53f2",level:4},{value:"\u5b58\u50a8\u64cd\u4f5c",id:"\u5b58\u50a8\u64cd\u4f5c",level:3},{value:"\u5b58\u50a8\u5377\u6269\u5bb9",id:"\u5b58\u50a8\u5377\u6269\u5bb9",level:4},{value:"\u8d44\u6e90\u914d\u989d",id:"\u8d44\u6e90\u914d\u989d",level:3},{value:"\u8c03\u6574\u73af\u5883\u8d44\u6e90\u914d\u989d",id:"\u8c03\u6574\u73af\u5883\u8d44\u6e90\u914d\u989d",level:4},{value:"\u8c03\u6574\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",id:"\u8c03\u6574\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",level:4},{value:"\u96c6\u7fa4\u8d44\u6e90\u7533\u8bf7",id:"\u96c6\u7fa4\u8d44\u6e90\u7533\u8bf7",level:4},{value:"\u6210\u5458\u6743\u9650\u7ba1\u7406",id:"\u6210\u5458\u6743\u9650\u7ba1\u7406",level:3},{value:"\u79df\u6237\u7a7a\u95f4\u6210\u5458",id:"\u79df\u6237\u7a7a\u95f4\u6210\u5458",level:4},{value:"\u9879\u76ee\u7a7a\u95f4\u6210\u5458",id:"\u9879\u76ee\u7a7a\u95f4\u6210\u5458",level:4},{value:"\u73af\u5883\u7a7a\u95f4\u6210\u5458",id:"\u73af\u5883\u7a7a\u95f4\u6210\u5458",level:4}],c={toc:p};function u(e){var t=e.components,m=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,m,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5e38\u89c1\u64cd\u4f5c"},"\u5e38\u89c1\u64cd\u4f5c"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u666e\u901a\u7528\u6237\u5728 KubeGems \u5e73\u53f0\u7684\u4e00\u4e9b\u65e5\u5e38\u9ad8\u9891\u64cd\u4f5c\uff0c \u65e8\u5728\u7528\u6237\u80fd\u591f\u5bf9\u4e91\u5e73\u53f0\u6709\u4e00\u4e2a\u66f4\u52a0\u5168\u9762\u7684\u8ba4\u8bc6\u3002"),(0,l.kt)("h3",{id:"\u5de5\u4f5c\u8d1f\u8f7d"},"\u5de5\u4f5c\u8d1f\u8f7d"),(0,l.kt)("h4",{id:"\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7"},"\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u3010\u5bb9\u5668\u670d\u52a1\u3011- \u3010\u8fd0\u884c\u65f6\u3011-\u3010\u5bb9\u5668\u7ec4\u3011\u9875\u9762\uff0c\u70b9\u51fb\u5bb9\u5668\u6700\u53f3\u8fb9\u7684\u6309\u94ae\u5c55\u5f00\u5bb9\u5668\u7ec4\u62bd\u5c49\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(44422).Z,width:"3354",height:"1824"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5bb9\u5668\u7ec4\u62bd\u5c49\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u6587\u672c")," \u56fe\u6807\u5f39\u51fa\u5bb9\u5668\u65e5\u5fd7\u7a97\u53e3")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(28721).Z,width:"3352",height:"1820"})),(0,l.kt)("h4",{id:"\u8bbf\u95ee\u5bb9\u5668\u63a7\u5236\u53f0"},"\u8bbf\u95ee\u5bb9\u5668\u63a7\u5236\u53f0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5bb9\u5668\u7ec4\u62bd\u5c49\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u7ec8\u7aef")," \u56fe\u6807\u5f39\u51fa\u5bb9\u5668\u63a7\u5236\u53f0\u7a97\u53e3")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(32351).Z,width:"3354",height:"1822"})),(0,l.kt)("h4",{id:"\u8c03\u6574\u526f\u672c\u6570"},"\u8c03\u6574\u526f\u672c\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u3010\u5bb9\u5668\u670d\u52a1\u3011- \u3010\u8fd0\u884c\u65f6\u3011-\u3010\u5de5\u4f5c\u8d1f\u8f7d\u3011\u9875\u9762\uff0c\u70b9\u51fb\u4efb\u610f\u4e00\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u8fdb\u5165\u8be6\u60c5\u9875")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(87572).Z,width:"3355",height:"1820"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5de5\u4f5c\u8d1f\u8f7d\u8be6\u60c5\u9875\u7684\u53f3\u4e0a\u89d2\u3010\u8c03\u6574\u526f\u672c\u6570\u3011\u6309\u94ae\uff0c\u8f93\u5165\u9700\u8981\u6269\uff08\u7f29\uff09\u7684\u5bb9\u5668\u526f\u672c\u6570")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(171).Z,width:"3352",height:"1820"})),(0,l.kt)("h4",{id:"\u5e94\u7528\u56de\u6eda"},"\u5e94\u7528\u56de\u6eda"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5de5\u4f5c\u8d1f\u8f7d\u8be6\u60c5\u9875\u7684\u53f3\u4e0a\u89d2\u3010\u56de\u6eda\u3011\u6309\u94ae\uff0c\u9009\u62e9\u5373\u5c06\u56de\u6eda\u7684\u5386\u53f2\u7248\u672c")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(88198).Z,width:"3354",height:"1818"})),(0,l.kt)("h4",{id:"\u8c03\u6574\u52a8\u6001\u6269\u7f29\u5bb9"},"\u8c03\u6574\u52a8\u6001\u6269\u7f29\u5bb9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5de5\u4f5c\u8d1f\u8f7d\u8be6\u60c5\u9875\u7684\u53f3\u4e0a\u89d2\u3010\u5f39\u6027\u4f38\u7f29\u8bbe\u7f6e\u3011\u6309\u94ae\uff0c\u6839\u636e\u8868\u5355\u586b\u5199\u6269\u7f29\u5bb9\u7b56\u7565")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(49859).Z,width:"3350",height:"1823"})),(0,l.kt)("alert",{type:"warning"},"\u6ce8\u610f\uff1a\u5f39\u6027\u6269\u7f29\u5bb9\u7b56\u7565\u4e2d\u7684 `\u6700\u5927CPU\u4f7f\u7528\u7387` \u548c `\u6700\u5927\u5185\u5b58\u4f7f\u7528\u7387` \u53ef\u4ee5\u5206\u5f00\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u540c\u65f6\u6ee1\u8db3\u3002"),(0,l.kt)("h4",{id:"\u8d44\u6e90\u667a\u80fd\u5efa\u8bae"},"\u8d44\u6e90\u667a\u80fd\u5efa\u8bae"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u3010\u5bb9\u5668\u670d\u52a1\u3011-\u3010\u5de5\u4f5c\u8d1f\u8f7d\u3011\u9875\u9762\uff0c\u5f53\u5de5\u4f5c\u8d1f\u8f7d\u5728\u8fc7\u53bb\u4e00\u5468\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u4e0d\u8db3\u6216\u7e41\u5fd9\u65f6\uff0c\u4f1a\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u6a59\u8272")," \u7684\u8d44\u6e90\u5efa\u8bae\u6807\u7b7e")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(98847).Z,width:"3352",height:"1813"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u611f\u53f9\u53f7")," \u56fe\u6807\uff0c\u5373\u53ef\u5f39\u7a97\u8c03\u6574 ",(0,l.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d")," \u7684\u8d44\u6e90\u9650\u5236\u5230\u5efa\u8bae\u503c")),(0,l.kt)("img",{src:a(99169).Z,width:"80%",align:"center"}),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u4f1a\u89e6\u53d1\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u6eda\u52a8\u66f4\u65b0\uff0c\u751f\u4ea7\u73af\u5883\u64cd\u4f5c\u65f6\u8bf7\u8c28\u614e\uff01"))),(0,l.kt)("h4",{id:"\u5e94\u7528\u8d44\u6e90\u8bbe\u7f6e"},"\u5e94\u7528\u8d44\u6e90\u8bbe\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fdb\u5165\u3010\u5bb9\u5668\u670d\u52a1\u3011-\u3010\u5de5\u4f5c\u8d1f\u8f7d\u3011\u9875\u9762\uff0c\u9009\u62e9\u8981\u4fee\u6539\u8d44\u6e90\u7684 workerload\uff0c\u70b9\u51fb\u6700\u53f3\u8fb9\u6309\u94ae\uff0c\u9009\u62e9\u3010\u7f16\u8f91\u3011\u8fdb\u5165\u7f16\u6392\u7a97\u53e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u9ad8\u7ea7\u914d\u7f6e\u4e2d\uff0c\u9009\u62e9\u3010\u8d44\u6e90\u9650\u5236\u3011\u8fdb\u5165\u8d44\u6e90\u5206\u914d\u83dc\u5355\uff0c\u6839\u636e\u7528\u6237\u5b9e\u9645\u60c5\u51b5\u586b\u5199"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(50871).Z,width:"3834",height:"1882"})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),": \u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"CPU\u8d44\u6e90\u5355\u4f4d\u6362\u7b97\uff1a1 Core = 1000m\uff0c\u5185\u5b58\u8d44\u6e90\u5355\u4f4d\u6362\u7b97: 1GB = 1Gi or 1024Mi "))),(0,l.kt)("h3",{id:"\u65e5\u5fd7\u5206\u6790"},"\u65e5\u5fd7\u5206\u6790"),(0,l.kt)("h4",{id:"\u65e5\u5fd7\u67e5\u8be2"},"\u65e5\u5fd7\u67e5\u8be2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u9875\u9762\u4fa7\u8fb9\u680f\u5de6\u4e0a\u89d2\u7684\u3010\u5bb9\u5668\u670d\u52a1\u3011\uff0c\u5c55\u5f00\u62bd\u5c49\uff0c\u9009\u62e9\u3010\u53ef\u89c2\u6d4b\u6027\u3011\uff0c\u8fdb\u5165\u9875\u9762\u540e\uff0c\u9009\u62e9\u3010\u65e5\u5fd7\u67e5\u8be2\u5668\u3011")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(50262).Z,width:"3836",height:"1880"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u3010\u67e5\u8be2\u3011\u6309\u94ae\uff0c\u5c55\u5f00\u65e5\u5fd7\u6807\u7b7e\uff0c\u6839\u636e\u65e5\u5fd7\u6807\u7b7e\u8fdb\u884c\u8fc7\u6ee4\u7b5b\u9009\u540e\u70b9\u51fb\u3010\u786e\u8ba4\u3011")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(21868).Z,width:"3828",height:"1880"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u9700\u5bf9\u65e5\u5fd7\u5185\u5173\u952e\u5b57\u8fdb\u884c\u7b5b\u9009\uff0c\u5728\u6807\u7b7e\u680f\u4e2d\u76f4\u63a5\u8f93\u5165\u5173\u952e\u5b57\u5373\u53ef\uff0c\u70b9\u51fb\u3010\u8fd0\u884c\u3011\u5f97\u5230\u67e5\u8be2\u65e5\u5fd7")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(86546).Z,width:"1914",height:"940"})),(0,l.kt)("h4",{id:"\u9009\u62e9\u65f6\u95f4"},"\u9009\u62e9\u65f6\u95f4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u65e5\u5fd7\u67e5\u8be2\u5668\u53f3\u8fb9\u4e0a\u89d2\u7684\u65f6\u95f4\u9009\u62e9\u5668\uff0c\u53ef\u4ee5\u8fdb\u884c\u5feb\u901f\u65f6\u95f4\u9009\u62e9\u6216\u8005\u7cbe\u7ec6\u65f6\u95f4\u9009\u62e9")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(89071).Z,width:"3825",height:"1214"})),(0,l.kt)("h4",{id:"\u67e5\u8be2\u5386\u53f2"},"\u67e5\u8be2\u5386\u53f2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u65e5\u5fd7\u67e5\u8be2\u5668\u4e0a\u7684\u3010\u5386\u53f2\u3011\u6309\u94ae\u53ef\u5f39\u51fa\u7a97\u53e3\u8bb0\u5f55\u4e86\u7528\u6237\u6700\u8fd1\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u70b9\u51fb\u3010\u67e5\u8be2\u3011\u8fdb\u5165\u5feb\u901f\u586b\u5145\u65e5\u5fd7\u6807\u7b7e")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(26202).Z,width:"3833",height:"898"})),(0,l.kt)("h3",{id:"\u5b58\u50a8\u64cd\u4f5c"},"\u5b58\u50a8\u64cd\u4f5c"),(0,l.kt)("h4",{id:"\u5b58\u50a8\u5377\u6269\u5bb9"},"\u5b58\u50a8\u5377\u6269\u5bb9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u3010\u5bb9\u5668\u670d\u52a1\u3011-\u3010\u5b58\u50a8\u4e2d\u5fc3\u3011-\u3010\u5b58\u50a8\u5377\u3011\u9875\u9762\uff0c\u5728\u5b58\u50a8\u5377\u5217\u8868\u7684\u6700\u53f3\u4fa7\u70b9\u51fb\u3010\u6269\u5bb9\u3011 \u6309\u94ae\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(88625).Z,width:"3355",height:"1820"})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5b58\u50a8\u5377\u7684\u5feb\u7167\u4f9d\u9760\u5916\u90e8\u5b58\u50a8\u8bbe\u5907\u7684\u6280\u672f\u652f\u6301"))),(0,l.kt)("img",{src:a(80271).Z,width:"60%",align:"center"}),"#### \u5b58\u50a8\u5377\u5feb\u7167",(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u3010\u5bb9\u5668\u670d\u52a1\u3011-\u3010\u5b58\u50a8\u4e2d\u5fc3\u3011-\u3010\u5b58\u50a8\u5377\u3011\u9875\u9762\uff0c\u5728\u5b58\u50a8\u5377\u5217\u8868\u7684\u6700\u53f3\u4fa7\u70b9\u51fb\u3010\u521b\u5efa\u5feb\u7167\u3011 \u6309\u94ae\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(64884).Z,width:"3343",height:"1700"})),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5b58\u50a8\u5377\u7684\u5feb\u7167\u4f9d\u9760\u5916\u90e8\u5b58\u50a8\u8bbe\u5907\u7684\u6280\u672f\u652f\u6301 "))),(0,l.kt)("h3",{id:"\u8d44\u6e90\u914d\u989d"},"\u8d44\u6e90\u914d\u989d"),(0,l.kt)("h4",{id:"\u8c03\u6574\u73af\u5883\u8d44\u6e90\u914d\u989d"},"\u8c03\u6574\u73af\u5883\u8d44\u6e90\u914d\u989d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u9876\u90e8\u529f\u80fd\u680f\u7684\u3010\u5de5\u4f5c\u53f0\u3011\uff0c\u8fdb\u5165\u79df\u6237\u7a7a\u95f4\u9996\u9875\uff0c\u5728\u3010\u9879\u76ee\u3011\u4e0b\u627e\u5230\u4e00\u4e2a\u73af\u5883\u7a7a\u95f4\uff0c\u70b9\u51fb\u3010\u8fdb\u5165\u73af\u5883\u3011")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(92965).Z,width:"3354",height:"1826"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u73af\u5883\u7a7a\u95f4\u9996\u9875\u53f3\u4e0a\u89d2\u7684\u3010\u8c03\u6574\u8d44\u6e90\u9650\u5236\u3011\u6309\u94ae\uff0c\u8fdb\u5165\u8d44\u6e90\u914d\u989d\u7ba1\u7406")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(75581).Z,width:"3352",height:"1814"})),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u73af\u5883\u7a7a\u95f4\u5185\u53ef\u914d\u7f6e\u7684\u6700\u5927\u8d44\u6e90\u4e3a\u8be5\u79df\u6237\u5728\u5f53\u524d kubernetes \u96c6\u7fa4\u4e0b\u7684\u6700\u5927\u53ef\u7528\u8d44\u6e90!"))),(0,l.kt)("h4",{id:"\u8c03\u6574\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236"},"\u8c03\u6574\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u3010\u4fee\u6539\u9650\u5236\u3011\u4fee\u6539\u73af\u5883\u7a7a\u95f4\u5185\u7684\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"li"},"LimitRange"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ec0\u4e48\u662f",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/policy/limit-range/"},"LimitRange"),"?"))),(0,l.kt)("img",{src:a(28758).Z,width:"80%",align:"center"}),(0,l.kt)("h4",{id:"\u96c6\u7fa4\u8d44\u6e90\u7533\u8bf7"},"\u96c6\u7fa4\u8d44\u6e90\u7533\u8bf7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u9876\u90e8\u529f\u80fd\u680f\u7684\u3010\u5de5\u4f5c\u53f0\u3011\uff0c\u8fdb\u5165\u79df\u6237\u7a7a\u95f4\u9996\u9875\uff0c\u5728\u3010\u96c6\u7fa4\u3011\u4e0b\u627e\u5230\u9700\u8981\u7533\u8bf7\u8d44\u6e90\u7684\u96c6\u7fa4\uff0c\u70b9\u51fb\u6700\u53f3\u8fb9\u7684\u3010\u7533\u8bf7\u8d44\u6e90\u3011")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(56207).Z,width:"3352",height:"1820"})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u79df\u6237\u7a7a\u95f4\u5185\u53ef\u914d\u7f6e\u7684\u6700\u5927\u8d44\u6e90\u4e3a\u8be5 kubernetes \u96c6\u7fa4\u4e0b\u7684\u6700\u5927\u53ef\u7528\u8d44\u6e90!"))),(0,l.kt)("h3",{id:"\u6210\u5458\u6743\u9650\u7ba1\u7406"},"\u6210\u5458\u6743\u9650\u7ba1\u7406"),(0,l.kt)("h4",{id:"\u79df\u6237\u7a7a\u95f4\u6210\u5458"},"\u79df\u6237\u7a7a\u95f4\u6210\u5458"),(0,l.kt)("p",null,"::tip \u63d0\u793a\n\u79df\u6237\u7ba1\u7406\u5458\u5177\u5907\u79df\u6237\u7a7a\u95f4\u4e0b\u7684\u6210\u5458\u7ba1\u7406\n:::"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u9876\u90e8\u529f\u80fd\u680f\u7684\u3010\u5de5\u4f5c\u53f0\u3011\uff0c\u8fdb\u5165\u79df\u6237\u7a7a\u95f4\u9996\u9875\uff0c\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u89d2\u7684\u3010\u79df\u6237\u6210\u5458\u3011\u8fdb\u884c\u6210\u5458\u7ba1\u7406")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(3652).Z,width:"3357",height:"1819"})),(0,l.kt)("h4",{id:"\u9879\u76ee\u7a7a\u95f4\u6210\u5458"},"\u9879\u76ee\u7a7a\u95f4\u6210\u5458"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u9876\u90e8\u529f\u80fd\u680f\u7684\u3010\u5de5\u4f5c\u53f0\u3011\uff0c\u8fdb\u5165\u79df\u6237\u7a7a\u95f4\u9996\u9875\uff0c\u5728\u3010\u9879\u76ee\u3011\u533a\u57df\u9009\u62e9\u3010\u8fdb\u5165\u9879\u76ee\u3011")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(69612).Z,width:"3342",height:"1823"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u9879\u76ee\u9996\u9875\u53f3\u4e0a\u89d2\u7684\u3010\u9879\u76ee\u6210\u5458\u3011\u6309\u94ae\u8fdb\u884c\u6210\u5458\u7ba1\u7406")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(77094).Z,width:"3357",height:"1816"})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9879\u76ee\u7528\u6237\u6210\u5458\u5217\u8868\u7ee7\u627f\u81f3\u79df\u6237\u7528\u6237\u5217\u8868"))),(0,l.kt)("p",null,"\u89d2\u8272\u4fe1\u606f\u8bf4\u660e:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ea\u8bfb\u6743\u9650"),": \u6d4b\u8bd5\u3001\u5f00\u53d1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bfb\u5199\u6743\u9650"),"\uff1a\u8fd0\u7ef4\u3001\u7ba1\u7406\u5458"),(0,l.kt)("h4",{id:"\u73af\u5883\u7a7a\u95f4\u6210\u5458"},"\u73af\u5883\u7a7a\u95f4\u6210\u5458"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u9876\u90e8\u529f\u80fd\u680f\u7684\u3010\u5de5\u4f5c\u53f0\u3011\uff0c\u8fdb\u5165\u79df\u6237\u7a7a\u95f4\u9996\u9875\uff0c\u5728\u3010\u9879\u76ee\u3011\u533a\u57df\u9009\u62e9\u4e00\u4e2a\u73af\u5883\u7a7a\u95f4\uff0c\u70b9\u51fb\u3010\u8fdb\u5165\u73af\u5883\u3011")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(92965).Z,width:"3354",height:"1826"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u73af\u5883\u9996\u9875\u53f3\u4e0a\u89d2\u7684\u3010\u73af\u5883\u6210\u5458\u3011\u6309\u94ae\u8fdb\u884c\u6210\u5458\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("img",{loading:"lazy",src:a(61651).Z,width:"3356",height:"1818"}))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u73af\u5883\u7528\u6237 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6210\u5458")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u89d2\u8272")," \u7ee7\u627f\u81f3\u9879\u76ee\u7528\u6237"))))}u.isMDXComponent=!0},28758:function(e,t,a){t.Z=a.p+"assets/images/example-common-env-lr-beb8202ebf1c686044da9f3436c89aa0.jpg"},80271:function(e,t,a){t.Z=a.p+"assets/images/example-common-pvc-resize-317858f94c4796004819946308960714.jpg"},99169:function(e,t,a){t.Z=a.p+"assets/images/example-common-resource-set-a270aeda24e344c2aa04cd2ea31b91e2.jpg"},56207:function(e,t,a){t.Z=a.p+"assets/images/example-common-cluster-quota-6977346ff07f7c932393b6db45c34f37.jpg"},92965:function(e,t,a){t.Z=a.p+"assets/images/example-common-env-enter-52c7979598a9d6aa660acbb6b8f7ac04.jpg"},61651:function(e,t,a){t.Z=a.p+"assets/images/example-common-env-member-1e1e79cfd174dbca9e9a2e41b1e625ce.jpg"},75581:function(e,t,a){t.Z=a.p+"assets/images/example-common-env-rq-4c5f081d3d8a05aace3daae454f533a9.jpg"},49859:function(e,t,a){t.Z=a.p+"assets/images/example-common-hpa-dc88ab7c0ce89305178b73bcef3c61b2.jpg"},50262:function(e,t,a){t.Z=a.p+"assets/images/example-common-logging-dash-3b1f4ba83cfe18cddc2116e694f54584.jpg"},86546:function(e,t,a){t.Z=a.p+"assets/images/example-common-logging-filter-run-f3aa74aed3fd7da29edb56bbad8c1600.jpg"},26202:function(e,t,a){t.Z=a.p+"assets/images/example-common-logging-history-ebd62745613b5dfc490ff745d7f289d0.jpg"},21868:function(e,t,a){t.Z=a.p+"assets/images/example-common-logging-labels-c602c5ce3c83ac95d2e9beb1aeecc2f2.jpg"},89071:function(e,t,a){t.Z=a.p+"assets/images/example-common-logging-time-picker-062b346e3787a852efd35999e5b3e13f.jpg"},32351:function(e,t,a){t.Z=a.p+"assets/images/example-common-pod-exec-40f4caa67204ba2e0acacc0c03801f73.jpg"},44422:function(e,t,a){t.Z=a.p+"assets/images/example-common-pod-info-f12aa0c46462e8479c7ae3883e054391.jpg"},28721:function(e,t,a){t.Z=a.p+"assets/images/example-common-pod-logs-0f439eaac7f0f2913b9ebff4178ebd32.jpg"},69612:function(e,t,a){t.Z=a.p+"assets/images/example-common-project-enter-0caa23f4b1ffc7da4d633a38a358ee0a.jpg"},77094:function(e,t,a){t.Z=a.p+"assets/images/example-common-project-member-50f703e253420b954747b897d4763d21.jpg"},88625:function(e,t,a){t.Z=a.p+"assets/images/example-common-pvc-extend-5b625256766114bd938fe9ee158f3ecf.jpg"},64884:function(e,t,a){t.Z=a.p+"assets/images/example-common-pvc-snapshot-8b7849fc835b158472615030a0184e9d.jpg"},98847:function(e,t,a){t.Z=a.p+"assets/images/example-common-resource-recommend-eb7edb1d0666528ae8ea956cfab16d80.jpg"},3652:function(e,t,a){t.Z=a.p+"assets/images/example-common-tenant-member-e735d9bca70ab26d315610a8fa57a670.jpg"},87572:function(e,t,a){t.Z=a.p+"assets/images/example-common-workload-info-aafeb4f7645b6e56e11a07369522490d.jpg"},171:function(e,t,a){t.Z=a.p+"assets/images/example-common-workload-replicas-3d957fad7a50d6df2157374da6935edd.jpg"},50871:function(e,t,a){t.Z=a.p+"assets/images/example-common-workload-resource-5c14c4394188f8ec096b4d70d4ff7fdf.jpg"},88198:function(e,t,a){t.Z=a.p+"assets/images/example-common-workload-rollout-47c29e81a70b43814e25e5b66c35cda5.jpg"}}]);
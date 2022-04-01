"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[6886],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=m(r),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return r?n.createElement(k,o(o({ref:e},s),{},{components:r})):n.createElement(k,o({ref:e},s))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},54730:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"\u4ea7\u54c1\u67b6\u6784",hide_title:!0,sidebar_position:3},p=void 0,m={unversionedId:"concepts/architecture",id:"concepts/architecture",title:"\u4ea7\u54c1\u67b6\u6784",description:"\u4ea7\u54c1\u67b6\u6784",source:"@site/docs/concepts/architecture.md",sourceDirName:"concepts",slug:"/concepts/architecture",permalink:"/docs/concepts/architecture",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/concepts/architecture.md",tags:[],version:"current",lastUpdatedBy:"link.ma",lastUpdatedAt:1648023228,formattedLastUpdatedAt:"2022/3/23",sidebarPosition:3,frontMatter:{title:"\u4ea7\u54c1\u67b6\u6784",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4ea7\u54c1\u751f\u6001",permalink:"/docs/concepts/ecosystem"},next:{title:"\u591a\u79df\u6237\u7ba1\u7406",permalink:"/docs/concepts/feature/multi-tenancy"}},s={},c=[{value:"\u4ea7\u54c1\u67b6\u6784",id:"\u4ea7\u54c1\u67b6\u6784",level:2},{value:"\u7ec4\u4ef6\u5217\u8868",id:"\u7ec4\u4ef6\u5217\u8868",level:3}],d={toc:c};function u(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ea7\u54c1\u67b6\u6784"},"\u4ea7\u54c1\u67b6\u6784"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"KubeGems \u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u7684\u67b6\u6784\u8bbe\u8ba1\uff0c\u540e\u7aef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"gem-sservice"),"\u670d\u52a1\u5bf9\u5916\u90e8\u63d0\u4f9b ",(0,i.kt)("a",{parentName:"p",href:"https://www.apifox.cn/apidoc/project-729575/api-13879389"},(0,i.kt)("strong",{parentName:"a"},"Rest API"))," \u63a5\u53e3\uff0c\u540c\u65f6\u5185\u90e8\u5b9e\u73b0\u5bf9\u4e2a\u6a21\u5757\u7684\u96c6\u6210\u4e0e\u5c01\u88c5\u3002\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"gems-controller")," \u670d\u52a1\u5bf9 kubernetes \u7684\u8d44\u6e90\u8fdb\u884c\u7ba1\u7406\uff0c\u5df2\u5b9e\u73b0\u5b9e\u73b0\u64cd\u4f5c\u4e0d\u540c\u57fa\u7840\u8bbe\u65bd\u7684\u96c6\u7fa4\u3002\u4f9d\u6258Kubernetes\u67b6\u6784\uff0cKubeGems \u65e0\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u4f9d\u8d56\uff0c\u5b83\u53ef\u4ee5\u5728\u4efb\u4f55\u9075\u5faa\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes\u4e00\u81f4\u6027\u8ba4\u8bc1")," \u7684\u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u5176\u4e2d\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff0c\u539f\u751fKubernetes\u3001\u79c1\u6709\u4e91\u5e73\u53f0\u3001\u516c\u6709\u4e91\u3001\u88f8\u91d1\u5c5e\u6216\u865a\u62df\u673a\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63a8\u8350 Kubernetes \u7248\u672c")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e3a\u4fdd\u6301\u6700\u4f73\u7684\u4f7f\u7528\u4f53\u9a8c\uff0cKubeGems \u63a8\u8350\u8fd0\u884c\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Kubernetes v1.18.0 - 1.20.15")," \u4e4b\u95f4\u7684\u7248\u672c\u5f53\u4e2d\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:r(25526).Z,width:"1760",height:"1642"})),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u5217\u8868"},"\u7ec4\u4ef6\u5217\u8868"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u540d\u79f0"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u7ec4\u4ef6\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gems-dashbaord"),(0,i.kt)("td",{parentName:"tr",align:"left"},"KubeGems \u7528\u6237\u7ba1\u7406\u754c\u9762\uff0c\u7528\u6237\u5728\u4e0a\u9762\u53ef\u4ee5\u5b8c\u6210\u5e73\u53f0\u652f\u6301\u7684\u6240\u6709\u529f\u80fd\u64cd\u4f5c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gems-service"),(0,i.kt)("td",{parentName:"tr",align:"left"},"KubeGems \u6838\u5fc3\u670d\u52a1\uff0c\u8d1f\u8d23\u7ba1\u7406API \u63a5\u53e3\u548c\u96c6\u7fa4\u5185\u90e8\u5404\u4e2a\u6a21\u5757\u4e4b\u95f4\u901a\u4fe1\u7684\u67a2\u7ebd\uff0c\u4ee5\u53ca\u96c6\u7fa4\u5b89\u5168\u3001\u5ba1\u8ba1\u63a7\u5236")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gems-msgbus"),(0,i.kt)("td",{parentName:"tr",align:"left"},"KubeGems \u5b9e\u65f6\u6d88\u606f\u670d\u52a1\uff0c\u8d1f\u8d23\u5904\u7406\u524d\u7aef\u5bf9Kubernetes\u5b9e\u65f6\u6027\u8f83\u5f3a\u7684\u4e1a\u52a1\u903b\u8f91")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gems-worker"),(0,i.kt)("td",{parentName:"tr",align:"left"},"KubeGems \u5f02\u6b65\u4efb\u52a1\u670d\u52a1\uff0c\u8d1f\u8d23\u6267\u884c\u7cfb\u7edf\u7684\u540e\u53f0\u5f02\u6b65\u4efb\u52a1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gems-agent"),(0,i.kt)("td",{parentName:"tr",align:"left"},"KubeGems \u96c6\u7fa4Agent\uff0c\u8d1f\u8d23\u5904\u7406\u5e73\u53f0\u4e1a\u52a1\u903b\u8f91\uff0c\u76f4\u63a5\u4e0e Kubernetes API\u901a\u4fe1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gems-controller-manager"),(0,i.kt)("td",{parentName:"tr",align:"left"},"KubeGems Operator\uff0c\u8d1f\u8d23\u5b8c\u6210 Kubernetes \u7684 CRD \u4e0e Webhook \u7684\u5904\u7406")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gems-installer-manager"),(0,i.kt)("td",{parentName:"tr",align:"left"},"KubeGems  Operator\uff0c\u8d1f\u8d23\u5b8c\u6210 KubeGems \u4ea7\u54c1\u7684\u90e8\u7f72\u4e0e Kubernetes \u521d\u59cb\u5316")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"nginx-ingress-operator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Nginx Ingress Operator\uff0c\u8d1f\u8d23\u63d0\u4f9bKubeGems\u4ea7\u54c1\u591a\u79df\u6237\u72ec\u7acb\u7f51\u5173\u7684\u80fd\u529b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"cert-manager"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Kubernetes \u8bc1\u4e66\u7ba1\u7406\u5957\u4ef6\uff0c\u8d1f\u8d23\u5904\u7406\u5e73\u53f0\u5185TLS\u8bc1\u4e66\u7684\u81ea\u52a8\u7ba1\u7406")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"prometheus-operator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"kubernetes \u76d1\u63a7\u63a7\u5236\u5668\uff0c\u4e3aKubeGems\u63d0\u4f9b\u4e3b\u673a\u3001\u5bb9\u5668\u3001\u5fae\u670d\u52a1\u7b49\u76d1\u63a7\u544a\u8b66\u7b49\u529f\u80fd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"logging-operator"),(0,i.kt)("td",{parentName:"tr",align:"left"},"kubernetes \u76d1\u63a7\u63a7\u5236\u5668\uff0c\u4e3aKubeGems\u63d0\u4f9b\u5bb9\u5668\u65e5\u5fd7\u91c7\u96c6\u7b49\u529f\u80fd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"grafana"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5f00\u6e90\u7684\u76d1\u63a7\u6307\u6807\u5c55\u793a\u5e73\u53f0\uff0c\uff0c\u4e3aKubeGems\u63d0\u4f9b\u6307\u6807\u5c55\u793a\u7684\u6269\u5c55")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"fluentd"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u65e5\u5fd7\u91c7\u96c6\u5ba2\u6237\u7aef\uff0c\u5177\u5907\u4e30\u5bcc\u7075\u6d3b\u7684\u63d2\u4ef6\u914d\u7f6e\uff0c\u4e3aKubeGems\u63d0\u4f9b\u4e3b\u673a\u3001\u5bb9\u5668\u7684\u65e5\u5fd7\u91c7\u96c6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"loki"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e91\u539f\u751f\u65e5\u5fd7\u5206\u6790\u670d\u52a1\uff0c\u4e3aKubeGems\u63d0\u4f9b\u65e5\u5fd7\u5b58\u50a8\u3001\u67e5\u8be2\u548c\u5206\u6790\u670d\u52a1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"helm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u79cd\u5e94\u7528\u5bb9\u5668\u6253\u5305\u548c\u90e8\u7f72\u6807\u51c6\uff0c\u4e3aKubeGems\u63d0\u4f9b\u5e94\u7528\u5546\u5e97\u63a5\u5165\u7684\u80fd\u529b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"kustomize"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u79cd\u5e94\u7528\u5bb9\u5668\u7f16\u6392\u7684\u65b9\u6cd5\uff0c\u4e3aKubeGems\u63d0\u4f9b\u7528\u6237\u5e94\u7528\u7f16\u6392\u7684\u80fd\u529b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"argocd"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4e00\u5957\u5f00\u6e90\u5b9e\u73b0ci/cd\u6d41\u7a0b\u7684\u7cfb\u7edf\uff0c\u4e3aKubeGems\u63d0\u4f9b\u7528\u6237CD\u7684\u90e8\u7f72\u80fd\u529b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"istio"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1\u7f51\u683c\uff0c\u4e3aKubeGems\u63d0\u4f9b\u5fae\u670d\u52a1\u6cbb\u7406\u548c\u6d41\u91cf\u7ba1\u63a7\u7684\u80fd\u529b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"jaeger"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u5206\u5e03\u5f0f\u94fe\u8def\u8ddf\u8e2a\u670d\u52a1\uff0c\u4e3aSidecar\u548c\u5e94\u7528\u63d0\u4f9b\u6570\u636e\u63a5\u53d7\u7684\u670d\u52a1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"calico"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Kubernetes\u5bb9\u5668\u7ec4\u7f51\u670d\u52a1\uff0c\u8d1f\u8d23\u5bb9\u5668\u95f4\u901a\u4fe1\u548c\u7f51\u7edc\u9694\u79bb\u7b56\u7565\u7ba1\u7406")))))}u.isMDXComponent=!0},25526:function(t,e,r){e.Z=r.p+"assets/images/architecture-f71d6c6d341bd76ebc165a4be6889219.jpg"}}]);
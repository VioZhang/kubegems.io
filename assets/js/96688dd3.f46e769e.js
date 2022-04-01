"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[768],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return t?a.createElement(g,s(s({ref:n},d),{},{components:t})):a.createElement(g,s({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88266:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),s=["components"],i={title:"\u914d\u7f6eInstaller",hide_title:!0,sidebar_position:2},o=void 0,p={unversionedId:"installation/more-install-guides/installer-config",id:"installation/more-install-guides/installer-config",title:"\u914d\u7f6eInstaller",description:"Installer \u8d44\u6e90",source:"@site/docs/installation/more-install-guides/installer-config.md",sourceDirName:"installation/more-install-guides",slug:"/installation/more-install-guides/installer-config",permalink:"/docs/installation/more-install-guides/installer-config",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/installation/more-install-guides/installer-config.md",tags:[],version:"current",lastUpdatedBy:"link.ma",lastUpdatedAt:1648023228,formattedLastUpdatedAt:"2022/3/23",sidebarPosition:2,frontMatter:{title:"\u914d\u7f6eInstaller",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6eLinux\u5185\u6838",permalink:"/docs/installation/more-install-guides/kernel-optimize"},next:{title:"\u914d\u7f6eMonitoring",permalink:"/docs/installation/more-install-guides/monitoring"}},d={},u=[{value:"Installer \u8d44\u6e90",id:"installer-\u8d44\u6e90",level:2},{value:"installerSpec",id:"installerspec",level:3},{value:"globalSpec",id:"globalspec",level:3},{value:"pluginsSpec",id:"pluginsspec",level:3},{value:"operatorSpec",id:"operatorspec",level:3},{value:"Centrol \u96c6\u7fa4",id:"centrol-\u96c6\u7fa4",level:2},{value:"Worker \u96c6\u7fa4",id:"worker-\u96c6\u7fa4",level:2}],m={toc:u};function c(e){var n=e.components,i=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installer-\u8d44\u6e90"},"Installer \u8d44\u6e90"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Installer operator\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Ansible"),"\u5411Kubernetes\u63d0\u4ea4",(0,l.kt)("inlineCode",{parentName:"p"},"Artifact"),"\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u8d44\u6e90\u7684\u4e00\u81f4\u6027\uff0cController\u4f1a\u5b9a\u65f6\u5faa\u73af\u6267\u884c\u4efb\u52a1\u3002"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u88ab\u6258\u7ba1\u7684\u8d44\u6e90\u6709\u4efb\u4f55\u7684\u4fee\u6539\u90fd\u4f1a\u88abOperator\u8fd8\u539f"),"\u3002"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:t(41780).Z,width:"1258",height:"741"})),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u5728\u4f7f\u7528Installer\u65f6\uff0c\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"k8s \u4e2d\u5fc3\u96c6\u7fa4")),(0,l.kt)("p",null,"\u6b64\u79cd\u573a\u666f\u4e0b\uff0c\u7531\u4e8eKubeGems\u662f\u9996\u6b21\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u7684\u73af\u5883\uff0c\u6240\u4ee5\u9664\u4e86\u6b63\u5e38\u7684\u5e73\u53f0\u670d\u52a1\u5916\uff0c\u8fd8\u9700\u8981\u5c06\u5e73\u53f0\u4f9d\u8d56\u7684\u7ec4\u4ef6\u4e00\u8d77\u5b89\u88c5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"K8S \u5de5\u4f5c\u96c6\u7fa4")),(0,l.kt)("p",null,"\u5728\u6b64\u79cd\u573a\u666f\u4e0b\uff0c\u7528\u6237\u5728 KubeGems \u540e\u53f0\u6dfb\u52a0 Kubernetes\u96c6\u7fa4\uff0c\u5e73\u53f0\u81ea\u52a8\u5c06Insatller Operator\u4e0b\u53d1\u5230\u5de5\u4f5c\u96c6\u7fa4\uff0c\u5e76\u6267\u884c\u90e8\u7f72\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u4e3b\u8981\u9488\u5bf9\u573a\u666f\u4e00\u6a21\u5f0f\u4e0b\u505a\u4e3b\u8981\u8bf4\u660e\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210Installer operator\u5b89\u88c5\u540e\uff0c\u60a8\u53ef\u4ee5\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl api-resources"),"\u547d\u4ee4\u67e5\u770b\u96c6\u7fa4\u4e2d\u662f\u5426\u5df2\u7ecf\u6ce8\u518cInstaller\u7684CRD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"NAME                              SHORTNAMES         APIVERSION                             NAMESPACED   KIND\ninstallers                                           plugins.kubegems.io/v1beta1            true         Installer\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8bf4\u660e")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u867d\u7136 Installer \u8d44\u6e90\u7684 scope \u662f",(0,l.kt)("inlineCode",{parentName:"p"},"namespace"),"\uff0c\u4f46\u662f\u5728\u90e8\u7f72\u65f6\u60a8\u9700\u8981 ",(0,l.kt)("strong",{parentName:"p"},"\u5c06installer\u7684RBAC\u5173\u8054\u7ed9cluster-admin")," \uff0c\u4ee5\u4fdd\u8bc1Ansbile\u5728\u6267\u884cTask\u65f6\u6709\u8db3\u591f\u7684\u6743\u9650\u63d0\u4ea4\u8d44\u6e90\u3002",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"div"},"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u547d\u4ee4",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get clusterrole gems-installer-role -o yaml"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get clusterrolebinding gems-installer-role -o yaml"),"\u6765\u67e5\u770b\u5177\u4f53\u7684RBAC\u6743\u9650\u3002"))),(0,l.kt)("h3",{id:"installerspec"},"installerSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster_name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes\u96c6\u7fa4\u540d\u79f0\uff0c\u7528\u4e8e\u5728\u76d1\u63a7\u3001\u65e5\u5fd7\u7b49\u670d\u52a1\u4e2d\u63d0\u4f9b\u96c6\u7fa4\u7684\u5143\u6570\u636e\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"runtime"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u4e3b\u8981\u5728\u65e5\u5fd7\u91c7\u96c6\u548c\u4e09\u65b9\u63d2\u4ef6\u9700\u8981\u4e0e\u5bb9\u5668\u8fdb\u884cSocket\u901a\u4fe1\u65f6\u4f7f\u7528\uff0c\u4ec5\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"td"},"docker/conatinerd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"global"),(0,l.kt)("td",{parentName:"tr",align:null},"*globalSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Installer\u7684\u4e00\u4e9b\u5168\u5c40\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"core_plugins"),(0,l.kt)("td",{parentName:"tr",align:null},"*pluginsSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"KubeGems\u5e73\u53f0\u7684\u6838\u5fc3\u7ec4\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kubernetes_plguins"),(0,l.kt)("td",{parentName:"tr",align:null},"*plguinsSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes\u4e09\u65b9\u7ec4\u4ef6")))),(0,l.kt)("h3",{id:"globalspec"},"globalSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repository"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u7684\u955c\u50cf\u4ed3\u5e93\u65e5\u5fd7\uff0cinstaller \u5728\u5b89\u88c5\u65f6\u4f1a\u4ee5\u6b64\u4e0b\u8f7d\u955c\u50cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imagepullsecret"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u7684\u955c\u50cf\u4ed3\u5e93\u4e0b\u8f7d\u79d8\u94a5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storageclass"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u7684\u5b58\u50a8\u5377\u58f0\u660e\uff0c\u9ed8\u8ba4\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"local-path"))))),(0,l.kt)("h3",{id:"pluginsspec"},"pluginsSpec"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[component]"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"details"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u5728KubeGems\u7684\u7ec4\u4ef6\u7ba1\u7406\u4e2d\u5c55\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"details.catalog"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7c7b\u578b\uff0c\u5728KubeGems\u7684\u7ec4\u4ef6\u5c55\u793a\u4e2d\u8fdb\u884c\u5206\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"details.description"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"details.version"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7248\u672c\uff0cinstaller\u5728\u90e8\u7f72\u65f6",(0,l.kt)("inlineCode",{parentName:"td"},"version"),"\u4f1a\u7528\u505a\u955c\u50cf\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"tag"),"\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u5f00\u5173\uff0c\u7528\u4e8e\u63a7\u5236Installer Operator\u662f\u5426\u5b89\u88c5\u7ec4\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operator"),(0,l.kt)("td",{parentName:"tr",align:null},"*operatorSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u65b9\u5f0f\uff0c\u53ea\u63d0\u4f9b",(0,l.kt)("inlineCode",{parentName:"td"},"manual"),"\u548c",(0,l.kt)("inlineCode",{parentName:"td"},"operator"),"\u4e24\u79cd\u65b9\u5f0f\uff0c\u7528\u6237\u4e0d\u9700\u8981\u4fee\u6539\uff0c\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u8fd0\u884c\u7684\u547d\u540d\u7a7a\u95f4\uff0cInstaller\u5927\u90e8\u5206\u5b89\u88c5\u90fd\u5f3a\u5236\u4f7f\u7528\u4e86\u9ed8\u8ba4\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u8be5\u53c2\u6570\u4e3b\u8981\u7528\u4e8eKubeGems\u72b6\u6001\u68c0\u67e5\u65f6\u53d1\u73b0\u7ec4\u4ef6\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u72b6\u6001\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status.","[workloadKind]"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u8fd0\u884c\u65f6\u7684\u8d44\u6e90\u540d\u79f0\uff0cKubeGems\u4f1a\u68c0\u67e5\u7ec4\u4ef6\u72b6\u6001\u5e76\u5728\u96c6\u7fa4\u7ec4\u4ef6\u7ba1\u7406\u754c\u9762\u4e2d\u5c55\u793a\u7ec4\u4ef6\u7684\u76f8\u5173\u4fe1\u606f")))),(0,l.kt)("h3",{id:"operatorspec"},"operatorSpec"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"operator"),"\u7c7b\u578b\u4e3ainstaller\u64cd\u4f5c\u4e09\u65b9Operator\u65f6\u7684\u63a7\u5236\u53d8\u91cf\uff0c\u652f\u6301\u7684\u53c2\u6570\u4ee5\u5b9e\u9645\u4e0b\u8f7d\u7684\u4e3a\u51c6\u3002"),(0,l.kt)("h2",{id:"centrol-\u96c6\u7fa4"},"Centrol \u96c6\u7fa4"),(0,l.kt)("p",null,"\u4e2d\u5fc3\u4fa7\u5728\u90e8\u7f72Installer operator\u65f6\uff0c\u8d44\u6e90\u9700\u8981\u624b\u52a8\u63d0\u4ea4\uff0c\u5927\u591a\u6570\u573a\u666f\u4e0bKubeGems\u5df2\u7ecf\u96c6\u6210\u5e76\u5c01\u88c5\u597d\u4e86\u7ec4\u4ef6\uff0c\u4e0d\u9700\u8981\u7528\u6237\u989d\u5916\u7684\u7f16\u8f91\u3002\u5982\u679c\u60a8\u9700\u8981\u5b9a\u5236\u4fee\u6539\u63d2\u4ef6\u914d\u7f6e\u65f6\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: plugins.kubegems.io/v1beta1\nkind: Installer\nmetadata:\n  name: kubegems-plugins\n  namespace: kubegems-installer\nspec:\n  cluster_name: kubegems-centrol\n  # Container runtime, this field used to record container\'s logs\n  # runtime: docker or containerd\n  runtime: containerd\n  \n  global:\n    # Container repository on kubegems installer running.\n    # default vvariable used to "docker.io/kubegems" if not set.\n    # available container repositories "docker.io/kubegem" is default, other reigstry incoude <ghcr.io/kubegems> and <registry.cn-beijing.aliyuncs.com/kubegems>.\n    # If you are using a private repository, you can configure a policy to replicat image locallly from any of the srouce registry listed above.\n    repository: registry.cn-beijing.aliyuncs.com/kubegems\n  \n    # Secret for container repositories.\n    # imagepullsecret: kubegems\n  \n    # Kubegems uses the built-in local-path-provisioner by defaults.\n    # If you need to set a personalised storageclass for the component, please configure it in the field "<component>.operator.persisten.storageclass".\n    #storageclass: local-path\n  \n  core_plugins:\n    kubegems_local:\n      details:\n        catalog: KubeGems\n        description: KubeGems\u672c\u5730\u7ec4\u4ef6\u670d\u52a1,\u8fd0\u884c\u5728Kubernetes\u96c6\u7fa4\u5185\u90e8.\n        version: v1.20.0-beta.1\n      namespace: gemcloud-system\n      enabled: true\n      operator:\n        cert_manager:\n          version: v1.4.0\n          namespace: cert-manager\n        basic_gateway:\n          version: v1.0\n          namespace: gemcloud-gateway-system\n        gems_agent:\n          # replicas: 1\n        gems_controller:\n          replicas: 1\n      status:\n        deployment:\n        - gems-agent\n        - gems-controller-manager\n        required: true\n  \n    kubegems_dashboard:\n      details:\n        catalog: KubeGems\n        description: KubeGems\u7528\u6237\u754c\u9762.\n        version: v1.20.0-beta.1\n      enabled: true\n      namespace: gemcloud-system\n      operator:\n        replicas: 1\n      status:\n        deployment:\n        - gems-dashboard\n  \n    kubegems_centrol:\n      details:\n        catalog: KubeGems\n        description: KubeGems\u96c6\u7fa4\u63a7\u5236\u4e2d\u5fc3\u7ec4\u4ef6\u670d\u52a1.\n        version: v1.20.0-beta.1\n      enabled: true\n      namespace: gemcloud-system\n      operator:\n        gems_service:\n          replicas: 1\n          #debug: false\n          persistent:\n            #size: 10Gi\n            #Required persistent volume which type is RWX.\n            #storageclass: local-path\n        gems_msgbus:\n          replicas: 1\n          #debug: false\n        gems_worker:\n          replicas: 1\n          #debug: false\n          persistent:\n            #size: 10Gi\n            #Required persistent volume which type is RWX.\n            #storageclass:local-path\n      status:\n        deployment:\n        - gems-service\n        - gems-msgbus\n        - gems-worker\n  \n    monitoring:\n      details:\n        catalog: \u76d1\u63a7&\u544a\u8b66\n        description: KubeGems\u5e73\u53f0\u76d1\u63a7&\u544a\u8b66\u63a7\u5236\u5668,\u5305\u542bPrometheus\u548cAlertManager\u670d\u52a1.\n        version: v0.50.1-gems\n      enabled: true\n      namespace: gemcloud-monitoring-system\n      operator:\n        prometheus: \n          enabled: true\n          replicas: 1\n          retention: 30d\n          apply_rules: true\n          image:\n            tag: 2.27.1-debian-10-r16\n          resources:\n            cpu: 4000m\n            memory: 8Gi\n          persistent:\n            size: 50Gi\n            # Specify stralgeclass to use, local-path was default value\n            # storageclass: local-path\n  \n          # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field\n          # Tips: host only support <ipaddress>:<ports>\n          #external_host: 172.16.0.1:9093\n        alertmanager:\n          enabled: true\n          replicas: 1\n          image:\n            tag: 0.22.2-debian-10-r2\n          retention: 146h\n          persistent:\n            size: 10Gi\n            # Specify stralgeclass to use, local-path was default value\n            # storageclass: local-path\n  \n          # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field\n          # Tips: host only support <ipaddress>:<ports>\n          #external_host: 172.16.0.1:9093\n      status:\n        deployment:\n        - prometheus-operator\n  \n    node_exporter:\n      details:\n        catalog: \u76d1\u63a7&\u544a\u8b66\n        description: \u7269\u7406\u673a\u76d1\u63a7\u6307\u6807\u66b4\u9732\u5668.\n        version: v1.1.1-debian-10-r0\n      enabled: true\n      namespace: gemcloud-monitoring-system\n      status:\n        daemonset:\n        - node-exporter\n  \n    kube_state_metrics:\n      details:\n        catalog: \u76d1\u63a7&\u544a\u8b66\n        description: \u76d1\u63a7Kubernetes\u5185\u5404\u4e2a\u8d44\u6e90\u7684\u8fd0\u884c\u72b6\u6001.\n        version: v1.9.8-debian-10-r0\n      enabled: true\n      namespace: gemcloud-monitoring-system\n      status:\n        deployment:\n        - kube-state-metrics\n  \n    argocd:\n      details:\n        catalog: GitOps\n        description: KubeGems\u5185\u90e8\u5e94\u7528\u7ba1\u7406\u7684GitOps\u5f15\u64ce.\n        version: v1.8.7\n      enabled: true\n      namespace: gemcloud-workflow-system\n      status:\n        deployment:\n        - argocd-application-controller\n        - argocd-dex-server\n        - argocd-redis\n        - argocd-repo-server\n        - argocd-server\n  \n    argo_rollouts:\n      details:\n        catalog: GitOps\n        description: KubeGems\u5185\u90e8\u5e94\u7528\u7b56\u7565\u90e8\u7f72\u7684GitOps\u5f15\u64ce,\u652f\u6301\u84dd\u7eff\u3001\u91d1\u4e1d\u96c0\u53d1\u5e03\u7b49\u9ad8\u7ea7\u7b56\u7565.\n        version: v1.1.0\n      enabled: true\n      namespace: gemcloud-workflow-system\n      status:\n        deployment:\n        - argo-rollouts\n        required: true\n  \n    logging:\n      details:\n        catalog: \u65e5\u5fd7\u4e2d\u5fc3\n        description: KubeGems\u5e73\u53f0\u7ba1\u7406\u5bb9\u5668\u65e5\u5fd7\u6846\u67b6,\u5305\u542b\u63a7\u5236\u5668\u3001Loki Stack\u7b49\u670d\u52a1.\n        version: v3.15.0\n      enabled: false\n      namespace: gemcloud-logging-system\n      operator:\n        # Upstream used by logs whitch fluentbit collect, forward to fluentdpstream uspfluentbit and forwarded to flunetd\n        enable_upstream: false\n        fluentbit:\n          # Set the buffer size for HTTP client when reading responses from Kubernetes API server. \n          # The value must be according to the Unit Size specification.\n          #buffer: 256k\n          resources:\n            cpu: "2"\n            memory: 1Gi\n          # If the container logs are redirected to another path(not /var/log/pods), the path needs to be mounted to fluentbit.\n          #volume_mounts:\n          #  source: /data\n          #  destination: /data\n        fluentd:\n          # The replicas of flunetd\n          replicas: 2\n          resources:\n            cpu: "1"\n            memory: 2Gi\n          persistent:\n            size: 10Gi\n            #storageclass: local-path\n        loki:\n          enabled: true\n          #image:\n          #  repository: \n          #  tag:\n          #resources:\n          #  cpu: "4"\n          #  memory: "8Gi"\n          persistent:\n            size: 100Gi\n            #storageclass: local-path\n          # If you need to interface to an external loki service, disealed loki and configured the host field\n          # Tips: host only support <ipaddress>:<ports>\n          #external_host: 172.168.0.1:3100\n      status:\n        deployment:\n        - logging-operator\n  \n    eventer:\n      details:\n        catalog: \u65e5\u5fd7\u4e2d\u5fc3\n        description: Kubernetes\u96c6\u7fa4\u4e8b\u4ef6\u6536\u96c6\u5668(\u9700\u5f00\u542f logging \u5957\u4ef6).\n        version: v1.1\n      enabled: true\n      namespace: gemcloud-logging-system\n      status:\n        deployment:\n        - gems-eventer\n  \n    istio:\n      details:\n        catalog: \u670d\u52a1\u7f51\u683c\n        description: KubeGems\u5e73\u53f0\u670d\u52a1\u6cbb\u7406\u5957\u4ef6.\n        version: v1.11.7\n      enabled: false\n      namespace: istio-system\n      operator:\n        eastwestgateway:\n          enabled: false\n        dnsproxy:\n          enabled: true\n        istio-cni:\n          enabled: true\n        tracing:\n          enabled: true\n          param: 50\n          address: "jaeger-collector.observability.svc.cluster.local:9411"\n        kiali:\n          enabled: true\n          prometheus_urls: "http://prometheus.gemcloud-monitoring-system.svc.cluster.local:9090"\n          trace_urls: "http://jaeger-query.observability.svc.cluster.local:16685/jaeger"\n          grafana_urls: "http://grafana-service.gemcloud-monitoring-system.svc.cluster.local:3000"\n      status:\n        deployment:\n        - istiod\n  \n    jaeger:\n      details:\n        catalog: \u670d\u52a1\u7f51\u683c\n        description: KubeGems\u5e73\u53f0\u670d\u52a1\u8ffd\u8e2a\u5957\u4ef6.\n        version: v1.25.0\n      enabled: false\n      namespace: observability\n      operator:\n        sampling:\n          type: probabilistic\n          param: 0.5\n        elasticsearch:\n          enabled: true\n          # Elasticsearch running mode, default is single node. <cluster> mode will be set 3 replicas as a cluster.\n          mode: single\n          persistent:\n            size: 100Gi\n            # storageclass: local-path\n  \n          # If you need to interface to an external ElasticSearch service, disealed ElasticSearch and configured the external_urls fielda.\n          # external_urls: "http://172.16.0.1:9200"\n      status:\n        deployment:\n        - jaeger-collector\n        - jaeger-query\n  \n  kubernetes_plugins:\n    local_path:\n      details:\n        catalog: \u5b58\u50a8\n        description: Rancher\u7684\u5f00\u6e90\u7684\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u5377\u7ba1\u7406\u63a7\u5236\u5668.\n        version: v0.0.19\n      enabled: true\n      # Set kubernetes default StorageClass,if cluster don\'t have any storageclass.\n      default_class: false\n      namespace: local-path-storage\n      status:\n        deployment:\n        - local-path-provisioner\n        required: true\n  \n    node_problem_detector:\n      details:\n        catalog: \u65e5\u5fd7&\u4e8b\u4ef6\n        description: Kubernees\u96c6\u7fa4\u8282\u70b9\u4e8b\u4ef6\u8bca\u65ad\u5668.\n        version: v0.8.7\n      enabled: false\n      namespace: kube-system\n      status:\n        daemonset:\n        - node-problem-detector\n  \n    node_local_dns:\n      details:\n        catalog: \u7f51\u7edc\n        description: Kuberntes\u4e3b\u673aDNS\u7f13\u5b58\u670d\u52a1.\n        version: v1.15.13\n      enabled: false\n      operator:\n        dns_upsteam: 192.168.0.10\n      namespace: kube-system\n      status:\n        daemonset:\n        - node-local-dns\n  \n    nvidia_device_plugin:\n      details:\n        catalog: \u8bbe\u5907\u7ba1\u7406\n        description: Nvidia\u516c\u53f8\u4e3aKubernetes\u63d0\u4f9b\u7684\u4e91\u4e0a\u5bb9\u5668\u72ec\u5360\u663e\u5361\u63d2\u4ef6\n        version: v1.0.0-beta\n      enabled: false\n      namespace: kube-system\n      status:\n        daemonset:\n          - nvidia-device-plugin-daemonset\n  \n    gpu_manager:\n      details:\n        catalog: \u8bbe\u5907\u7ba1\u7406\n        description: \u817e\u8baf\u4e91(TKE)\u5f00\u6e90\u7684GPU\u663e\u5361\u8d44\u6e90\u865a\u62df\u5316\u5206\u914d\u7684Kubernetes\u63d2\u4ef6.\n        version: v1.1.2\n      enabled: false\n      namespace: kube-system\n      status:\n        daemonset:\n        - tke-gpu-manager\n')),(0,l.kt)("h2",{id:"worker-\u96c6\u7fa4"},"Worker \u96c6\u7fa4"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4fe1\u606f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"}," Worker \u96c6\u7fa4\u7684 installer \u901a\u5e38\u7531 KubeGems \u5e73\u53f0\u5728\u6dfb\u52a0\u96c6\u7fa4\u662f\u81ea\u52a8\u6ce8\u5165\uff0c\u7528\u6237\u65e0\u9700\u7279\u522b\u5173\u6ce8"))))}c.isMDXComponent=!0},41780:function(e,n,t){n.Z=t.p+"assets/images/installer_shixu-0fb8c273d92d9a7b7cf70e7b00c6e4a5.jpg"}}]);
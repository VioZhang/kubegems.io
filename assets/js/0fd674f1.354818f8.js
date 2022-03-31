"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[2534],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,c=k["".concat(m,".").concat(N)]||k[N]||s[N]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},11412:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"\u76d1\u63a7\u6307\u6807",hide_title:!0,sidebar_position:1},m=void 0,o={unversionedId:"tasks/observability/monitor/monitors",id:"tasks/observability/monitor/monitors",title:"\u76d1\u63a7\u6307\u6807",description:"\u6307\u6807\u91c7\u96c6",source:"@site/docs/tasks/observability/monitor/monitors.md",sourceDirName:"tasks/observability/monitor",slug:"/tasks/observability/monitor/monitors",permalink:"/docs/tasks/observability/monitor/monitors",tags:[],version:"current",lastUpdatedBy:"leon.chen",lastUpdatedAt:1648718627,formattedLastUpdatedAt:"2022/3/31",sidebarPosition:1,frontMatter:{title:"\u76d1\u63a7\u6307\u6807",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5b58\u50a8\u7c7b\u58f0\u660e",permalink:"/docs/tasks/cluster-manage/storageclass"},next:{title:"\u544a\u8b66\u901a\u77e5",permalink:"/docs/tasks/observability/monitor/alerts"}},d={},s=[{value:"\u6307\u6807\u91c7\u96c6",id:"\u6307\u6807\u91c7\u96c6",level:2},{value:"\u521b\u5efa\u76d1\u63a7\u91c7\u96c6\u5668",id:"\u521b\u5efa\u76d1\u63a7\u91c7\u96c6\u5668",level:3},{value:"\u6807\u7b7e\u6765\u6e90",id:"\u6807\u7b7e\u6765\u6e90",level:4},{value:"\u7aef\u53e3\u6765\u6e90",id:"\u7aef\u53e3\u6765\u6e90",level:4},{value:"Kubegems\u5e73\u53f0relabel\u7684\u6807\u7b7e",id:"kubegems\u5e73\u53f0relabel\u7684\u6807\u7b7e",level:4},{value:"\u6307\u6807\u67e5\u8be2",id:"\u6307\u6807\u67e5\u8be2",level:2},{value:"\u914d\u7f6e\u67e5\u8be2\u6a21\u677f",id:"\u914d\u7f6e\u67e5\u8be2\u6a21\u677f",level:3},{value:"\u67e5\u8be2\u51fa\u56fe",id:"\u67e5\u8be2\u51fa\u56fe",level:3},{value:"\u5355\u4f4d\u8868",id:"\u5355\u4f4d\u8868",level:4}],k={toc:s};function N(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6307\u6807\u91c7\u96c6"},"\u6307\u6807\u91c7\u96c6"),(0,l.kt)("p",null,"Kubegems\u63d0\u4f9b\u4e86\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"service"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"workload"),"\u7684\u76d1\u63a7\u6307\u6807\u91c7\u96c6\u5668\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4e3a\u81ea\u5df1\u7684\u5e94\u7528\u914d\u7f6e\u5bf9\u5e94\u7684\u91c7\u96c6\u5668\uff0c\u91c7\u96c6\u5230\u7684\u6307\u6807\u4f1a\u6c47\u96c6\u5728\u8be5\u96c6\u7fa4\u5185\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"prometheus"),"\u4e2d\u3002"),(0,l.kt)("h3",{id:"\u521b\u5efa\u76d1\u63a7\u91c7\u96c6\u5668"},"\u521b\u5efa\u76d1\u63a7\u91c7\u96c6\u5668"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u53f3\u4e0a\u89d2\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u89c2\u6d4b\u6027")),(0,l.kt)("li",{parentName:"ol"},"\u5728\u53ef\u89c2\u6d4b\u6027\u680f\u76ee\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u6307\u6807")),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u91c7\u96c6\u5668"))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(98416).Z,width:"1920",height:"961"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u53f3\u4e0a\u89d2\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa\u91c7\u96c6\u5668"))),(0,l.kt)("img",{src:a(64690).Z,width:"80%",align:"center"}),(0,l.kt)("p",null,"\u5b57\u6bb5\u53ca\u91ca\u4e49:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u91ca\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u91c7\u96c6\u5668\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u91c7\u96c6\u5668\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u91c7\u96c6\u76ee\u6807\u7684\u7c7b\u578b\uff0c\u652f\u6301\u56db\u79cd: ",(0,l.kt)("inlineCode",{parentName:"td"},"service"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"deployment"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"statefulset"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"daemonset"),", \u540e\u9762\u4e09\u79cd\u90fd\u7b97\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"workload"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u6807\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u91c7\u96c6\u76ee\u6807\u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u901a\u5e38\u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u540c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u6807"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u91c7\u96c6\u7684\u76ee\u6807\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6807\u7b7e\u914d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u91c7\u96c6\u76ee\u6807\u7684\u6807\u7b7e\uff0c\u901a\u5e38\u4f1a\u6839\u636e\u7528\u6237\u6240\u9009\u76ee\u6807\u81ea\u52a8\u586b\u5145\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u4fee\u6539\u3002\u9ed8\u8ba4\u586b\u5145\u65b9\u5f0f\u6839\u636e\u91c7\u96c6\u5668\u7c7b\u578b\u4e5f\u4f1a\u6709\u6240\u4e0d\u540c, \u6807\u7b7e\u6765\u81ea\u4e8e ",(0,l.kt)("a",{parentName:"td",href:"#%E6%A0%87%E7%AD%BE%E6%9D%A5%E6%BA%90"},"\u6807\u7b7e\u6765\u6e90"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u91c7\u96c6\u76ee\u6807\u7684\u7aef\u53e3\u540d\uff0c\u7aef\u53e3\u6765\u81ea\u4e8e ",(0,l.kt)("a",{parentName:"td",href:"#%E7%AB%AF%E5%8F%A3%E6%9D%A5%E6%BA%90"},"\u7aef\u53e3\u6765\u6e90"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728\u6240\u914d\u7f6e\u7aef\u53e3\u4e0a\u7684URL \u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"/metrics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u91c7\u96c6\u95f4\u9694"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u591a\u4e45\u91c7\u96c6\u4e00\u6b21\uff0c\u4f8b\u5982: ",(0,l.kt)("inlineCode",{parentName:"td"},"30s"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u6807\u6807\u7b7e\u4f18\u5148"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u82e5\u91c7\u96c6\u5230\u7684\u6807\u7b7e\u548c ",(0,l.kt)("a",{parentName:"td",href:"#Kubegems%E5%B9%B3%E5%8F%B0relabel%E7%9A%84%E6%A0%87%E7%AD%BE"},"Kubegems\u5e73\u53f0relabel\u7684\u6807\u7b7e")," \u91cd\u540d\uff0c\u662f\u5426\u91c7\u96c6\u5230\u7684\u6307\u6807\u6807\u7b7e\u4f18\u5148\uff0c\u66f4\u591a\u4fe1\u606f\u53c2\u8003: ",(0,l.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"},"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"))))),(0,l.kt)("h4",{id:"\u6807\u7b7e\u6765\u6e90"},"\u6807\u7b7e\u6765\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service"),": \u53d6metadata.labels\u5b57\u6bb5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployment/statefulset/daemonset"),"\uff1a\u53d6spec.template.metadata.labels\u5b57\u6bb5")),(0,l.kt)("h4",{id:"\u7aef\u53e3\u6765\u6e90"},"\u7aef\u53e3\u6765\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service"),": spec.ports\u7684\u6240\u6709name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployment/statefulset/daemonset"),": spec.template.spec.containers\u4e2d\uff0c\u6240\u6709container\u7684\u6240\u6709ports\u7684name")),(0,l.kt)("h4",{id:"kubegems\u5e73\u53f0relabel\u7684\u6807\u7b7e"},"Kubegems\u5e73\u53f0relabel\u7684\u6807\u7b7e"),(0,l.kt)("p",null,"\u5728\u91c7\u96c6\u5230\u6307\u6807\u65f6\uff0c\u5e73\u53f0\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u7684 ",(0,l.kt)("em",{parentName:"p"},"relabel")," \u5de5\u4f5c\uff0c\u901a\u8fc7relabel\u4f1a\u7ed9\u6307\u6807\u6dfb\u52a0\u989d\u5916\u7684\u6807\u7b7e\uff0c\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service"),": job, container, endpoint, instance, namespace, pod, service"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployment/statefulset/daemonset"),"\uff1ajob, container, endpoint, instance, namespace, pod")),(0,l.kt)("p",null,"relabel\u89c4\u5219\u5927\u81f4\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  relabel_configs:\n  - source_labels: [job]\n    separator: ;\n    regex: (.*)\n    target_label: __tmp_prometheus_job_name\n    replacement: $1\n    action: replace\n  - source_labels: [__meta_kubernetes_service_label_name]\n    separator: ;\n    regex: nginx-ingress-operator\n    replacement: $1\n    action: keep\n  - source_labels: [__meta_kubernetes_endpoint_address_target_kind, __meta_kubernetes_endpoint_address_target_name]\n    separator: ;\n    regex: Node;(.*)\n    target_label: node\n    replacement: ${1}\n    action: replace\n  - source_labels: [__meta_kubernetes_endpoint_address_target_kind, __meta_kubernetes_endpoint_address_target_name]\n    separator: ;\n    regex: Pod;(.*)\n    target_label: pod\n    replacement: ${1}\n    action: replace\n  - source_labels: [__meta_kubernetes_namespace]\n    separator: ;\n    regex: (.*)\n    target_label: namespace\n    replacement: $1\n    action: replace\n  - source_labels: [__meta_kubernetes_service_name]\n    separator: ;\n    regex: (.*)\n    target_label: service\n    replacement: $1\n    action: replace\n  - source_labels: [__meta_kubernetes_pod_name]\n    separator: ;\n    regex: (.*)\n    target_label: pod\n    replacement: $1\n    action: replace\n  - source_labels: [__meta_kubernetes_pod_container_name]\n    separator: ;\n    regex: (.*)\n    target_label: container\n    replacement: $1\n    action: replace\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u76d1\u63a7\u91c7\u96c6\u5668")),(0,l.kt)("p",null,"\u8bbf\u95ee\u8be5\u96c6\u7fa4\u7684 ",(0,l.kt)("a",{parentName:"p",href:"http://prometheus.gemcloud-monitoring-system:9090/targets"},"http://prometheus.gemcloud-monitoring-system:9090/targets")," \u9a8c\u8bc1\u662f\u5426\u6210\u529f\u91c7\u96c6"),(0,l.kt)("h2",{id:"\u6307\u6807\u67e5\u8be2"},"\u6307\u6807\u67e5\u8be2"),(0,l.kt)("p",null,"\u5728\u53ef\u89c2\u6d4b\u6027\u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u76d1\u63a7\u67e5\u8be2\u6a21\u677f\uff0c\u4fbf\u4e8e\u7528\u6237\u5b9e\u65f6\u67e5\u8be2\u81ea\u5df1\u5173\u5fc3\u7684\u76d1\u63a7\u6307\u6807\uff0c\u5e76\u7ed8\u5236\u51fa\u5bf9\u5e94\u7684\u65f6\u5e8f\u56fe\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u67e5\u8be2\u6a21\u677f"},"\u914d\u7f6e\u67e5\u8be2\u6a21\u677f"),(0,l.kt)("p",null,"Kubegems\u914d\u7f6ePrometheus\u7684\u67e5\u8be2\u6a21\u677f\uff0c\u7528\u4ee5\u7b80\u4fbf\u3001\u4f18\u96c5\u5730\u8fdb\u884c\u6307\u6807\u67e5\u8be2\u53ca\u544a\u8b66\u89c4\u5219\u914d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u70b9\u51fb\u53f3\u4e0b\u89d2\u5de5\u5177\u7bb1\u6309\u94ae\uff0c\u8fdb\u5165",(0,l.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u53ea\u6709",(0,l.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u7ba1\u7406\u5458"),"\u7528\u6237\u624d\u80fd\u8fdb\u5165",(0,l.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c55\u5f00\u5de6\u4e0b\u89d2",(0,l.kt)("strong",{parentName:"p"},"\u96c6\u6210"),"\u83dc\u5355\u680f")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"Promethus\u6a21\u677f")))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(14351).Z,width:"1920",height:"961"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u9009\u62e9\u521b\u5efa\u3001\u7f16\u8f91\u3001\u5220\u9664\u6a21\u677f\uff0c\u6a21\u677f\u6784\u6210\u5982\u4e0b:")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(26929).Z,width:"1255",height:"657"})),(0,l.kt)("p",null,"\u6a21\u677f\u91ca\u4e49:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6a21\u677f\u6784\u6210"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u91ca\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u677f\u6240\u5c5e\u6a21\u5757\uff0c\u6309\u662f\u5426\u6709",(0,l.kt)("inlineCode",{parentName:"td"},"namespace"),"\u5c5e\u6027\u533a\u5206")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u677f\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u89c4\u5219"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e0e\u6a21\u677f\u540d\u5bf9\u5e94\uff0c\u4e2d\u6587\u91ca\u4e49\uff0c\u67e5\u8be2\u548c\u544a\u8b66\u65f6\u4f1a\u5c55\u793a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"expr"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"promql"),"\u8868\u8fbe\u5f0f\uff0c\u67e5\u8be2",(0,l.kt)("inlineCode",{parentName:"td"},"prometheus"),"\u65f6\u4f1a\u6267\u884c\u6539\u67e5\u8be2\u8bed\u53e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u4f4d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u6761\u89c4\u5219\u652f\u6301\u7684\u5355\u4f4d",(0,l.kt)("inlineCode",{parentName:"td"},"key"),", \u5177\u4f53\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"#%E5%8D%95%E4%BD%8D%E8%A1%A8"},"\u5355\u4f4d\u8868"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6807\u7b7e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5",(0,l.kt)("inlineCode",{parentName:"td"},"promql"),"\u652f\u6301\u7b5b\u9009\u7684\u6807\u7b7e\uff0c\u914d\u7f6e\u540e\u53ef\u4ee5\u5728\u67e5\u8be2\u3001\u544a\u8b66\u65f6\u8fdb\u884c\u6807\u7b7e\u7b5b\u9009")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u7f16\u8f91\u3001\u5220\u9664\u6a21\u677f\u65f6\uff0c\u8981\u6ce8\u610f\u68c0\u67e5\u6a21\u677f\u6709\u6ca1\u6709\u88ab\u544a\u8b66\u89c4\u5219\u5f15\u7528\uff0c\u5f53\u7136\uff0c\u88ab\u5f15\u7528\u4e86\u7684\u6a21\u677f\u662f\u65e0\u6cd5\u5220\u9664\u7684"))),(0,l.kt)("h3",{id:"\u67e5\u8be2\u51fa\u56fe"},"\u67e5\u8be2\u51fa\u56fe"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4e0a\u89d2\u83dc\u5355\u680f\uff0c\u8fdb\u5165",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u89c2\u6d4b\u6027")),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4fa7\u8fb9\u680f",(0,l.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u6307\u6807")),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9",(0,l.kt)("strong",{parentName:"li"},"\u6307\u6807\u67e5\u8be2\u5668")),(0,l.kt)("li",{parentName:"ol"},"\u586b\u5199\u4f60\u60f3\u67e5\u7684\u53c2\u6570\uff0c\u5e76\u6267\u884c\u67e5\u8be2:")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:a(25422).Z,width:"1732",height:"854"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u91ca\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u96c6\u7fa4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u54ea\u4e2a\u96c6\u7fa4\u7684\u6307\u6807\uff08\u53ea\u6709 ",(0,l.kt)("strong",{parentName:"td"},"\u7ba1\u7406\u5458")," \u624d\u4f1a\u9009\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9879\u76ee\u73af\u5883"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u67e5\u8be2\u7684\u76ee\u6807\u9879\u76ee\u3001\u73af\u5883\uff0c\u4f1a\u6839\u636e\u7528\u6237\u5f53\u524d\u79df\u6237\u8fdb\u884c\u7b5b\u9009")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d44\u6e90\u89c4\u5219"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e5f\u5c31\u662f\u9009\u62e9\u67e5\u8be2\u7684\u6a21\u677f\u53ca\u5355\u4f4d\uff0c\u666e\u901a\u7528\u6237\u53ea\u80fd\u67e5\u8be2\u6709",(0,l.kt)("inlineCode",{parentName:"td"},"namespace"),"\u5c5e\u6027\u7684\u6a21\u677f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Topk"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307promtheus\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"topk"),"\u51fd\u6570, \u5c55\u793a\u6570\u7ec4\u6700\u5927\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"k"),"\u7ec4\u6307\u6807\uff0c\u907f\u514d\u6570\u636e\u8fc7\u591a\u5f71\u54cd\u754c\u9762\u67e5\u770b\uff0c\u9ed8\u8ba4",(0,l.kt)("inlineCode",{parentName:"td"},"20"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Step"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65f6\u5e8f\u56fe\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u7528\u4ee5\u63a7\u5236\u8fd4\u56de\u7684\u6837\u672c\u5bc6\u5ea6\uff0c\u9ed8\u8ba4",(0,l.kt)("inlineCode",{parentName:"td"},"auto"),"\uff0c\u4e5f\u5c31\u662f\u6309\u67e5\u8be2\u7684\u65f6\u95f4\u8303\u56f4\u81ea\u9002\u5e94")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d77\u6b62\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u65f6\u5e8f\u56fe\u7684\u65f6\u95f4\u8303\u56f4\uff0c\u9ed8\u8ba4\u6700\u8fd130\u5206\u949f")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Topk\u3001Step\u3001\u8d77\u6b62\u65f6\u95f4 \u4f5c\u7528\u4e8e\u5f53\u524d\u754c\u9762\u7684\u6240\u6709\u67e5\u8be2\u9762\u677f"))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u51fa\u56fe\u540e\uff0c\u53ef\u9009\u62e9\u6807\u7b7e\uff0c\u7b5b\u9009\u51fa\u4f60\u5173\u5fc3\u7684\u6307\u6807"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u6dfb\u52a0\u67e5\u8be2\uff0c\u652f\u6301\u540c\u65f6\u67e5\u8be2\u591a\u4e2a\u6307\u6807\u5e76\u51fa\u56fe")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u6280\u5de7")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6bcf\u4e2a\u9762\u677f\u53f3\u4e0a\u89d2\u6709 ",(0,l.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u544a\u8b66")," \u6309\u94ae\uff0c\u70b9\u51fb\u53ef\u4ee5\u901a\u8fc7\u5f53\u524d\u9762\u677f\u7684\u53c2\u6570\u5feb\u6377\u521b\u5efa\u544a\u8b66\u89c4\u5219\uff0c\u8be6\u89c1 ",(0,l.kt)("strong",{parentName:"p"},"\u544a\u8b66\u89c4\u5219")," \u76f8\u5173\u6587\u6863"))),(0,l.kt)("h4",{id:"\u5355\u4f4d\u8868"},"\u5355\u4f4d\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"key"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"percent"),(0,l.kt)("td",{parentName:"tr",align:null},"%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"core"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6838")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mcore"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6beb\u6838")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"b"),(0,l.kt)("td",{parentName:"tr",align:null},"B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kb"),(0,l.kt)("td",{parentName:"tr",align:null},"KB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mb"),(0,l.kt)("td",{parentName:"tr",align:null},"MB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gb"),(0,l.kt)("td",{parentName:"tr",align:null},"GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tb"),(0,l.kt)("td",{parentName:"tr",align:null},"TB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bps"),(0,l.kt)("td",{parentName:"tr",align:null},"B/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kbps"),(0,l.kt)("td",{parentName:"tr",align:null},"KB/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mbps"),(0,l.kt)("td",{parentName:"tr",align:null},"MB/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ops"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b21/s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"times"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6b21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fae\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6beb\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u949f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"h"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u65f6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5929")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"w"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5468")))))}N.isMDXComponent=!0},64690:function(t,e,a){e.Z=a.p+"assets/images/create-metric-target-161622c4f5d2de9671fe3b2959d1889f.jpg"},26929:function(t,e,a){e.Z=a.p+"assets/images/edit-template-b04082e7bda6e9062ace981cae699bb9.jpg"},98416:function(t,e,a){e.Z=a.p+"assets/images/metric-target-e7afa6db967b02de34fdc7d08f58c810.jpg"},25422:function(t,e,a){e.Z=a.p+"assets/images/metrics-5340b75c8c9cea7d49392764a947f35d.jpg"},14351:function(t,e,a){e.Z=a.p+"assets/images/template-9bcf72dc1d250e498ede5c15c0fc8921.jpg"}}]);
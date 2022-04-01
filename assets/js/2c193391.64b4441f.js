"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5548],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return u}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(i),u=a,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return i?n.createElement(k,s(s({ref:t},c),{},{components:i})):n.createElement(k,s({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=i[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},76734:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var n=i(87462),a=i(63366),o=(i(67294),i(3905)),s=["components"],r={title:"\u914d\u7f6eIstio",hide_title:!0,sidebar_position:5,description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5c06 KubeGems \u4e0e Istio \u670d\u52a1\u7684\u96c6\u6210\u3002",keywords:["kubegems","kubernetes","jaeger","tracing\uff0cdistributited","operator","istio","servicemesh","mesh","envoy","gateway"]},l=void 0,p={unversionedId:"installation/more-install-guides/istio",id:"installation/more-install-guides/istio",title:"\u914d\u7f6eIstio",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5c06 KubeGems \u4e0e Istio \u670d\u52a1\u7684\u96c6\u6210\u3002",source:"@site/docs/installation/more-install-guides/istio.md",sourceDirName:"installation/more-install-guides",slug:"/installation/more-install-guides/istio",permalink:"/docs/installation/more-install-guides/istio",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/installation/more-install-guides/istio.md",tags:[],version:"current",lastUpdatedBy:"leon.chen",lastUpdatedAt:1648631790,formattedLastUpdatedAt:"2022/3/30",sidebarPosition:5,frontMatter:{title:"\u914d\u7f6eIstio",hide_title:!0,sidebar_position:5,description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5c06 KubeGems \u4e0e Istio \u670d\u52a1\u7684\u96c6\u6210\u3002",keywords:["kubegems","kubernetes","jaeger","tracing\uff0cdistributited","operator","istio","servicemesh","mesh","envoy","gateway"]},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6eLogging",permalink:"/docs/installation/more-install-guides/logging"},next:{title:"\u914d\u7f6eJaeger",permalink:"/docs/installation/more-install-guides/jaeger"}},c={},m=[{value:"\u914d\u7f6e Istio",id:"\u914d\u7f6e-istio",level:2},{value:"\u624b\u52a8\u90e8\u7f72 Istio",id:"\u624b\u52a8\u90e8\u7f72-istio",level:2},{value:"\u7248\u672c\u68c0\u67e5",id:"\u7248\u672c\u68c0\u67e5",level:3},{value:"\u5b89\u88c5 istioctl",id:"\u5b89\u88c5-istioctl",level:3},{value:"\u5b89\u88c5 istio operator",id:"\u5b89\u88c5-istio-operator",level:3},{value:"\u5b89\u88c5 istio",id:"\u5b89\u88c5-istio",level:3},{value:"\u914d\u7f6e istio gateway",id:"\u914d\u7f6e-istio-gateway",level:3},{value:"\u5f00\u542f istio cni",id:"\u5f00\u542f-istio-cni",level:3},{value:"\u5b89\u88c5 kiali",id:"\u5b89\u88c5-kiali",level:2},{value:"\u914d\u7f6e kiali",id:"\u914d\u7f6e-kiali",level:3},{value:"\u4e0e prometheus \u96c6\u6210",id:"\u4e0e-prometheus-\u96c6\u6210",level:3},{value:"\u8c03\u4f18",id:"\u8c03\u4f18",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"1.\u65e0\u6cd5\u62c9\u53d6\u955c\u50cf",id:"1\u65e0\u6cd5\u62c9\u53d6\u955c\u50cf",level:3},{value:"2.\u65e0\u6cd5\u8bbf\u95ee jaeger.observability:9411",id:"2\u65e0\u6cd5\u8bbf\u95ee-jaegerobservability9411",level:3},{value:"3.istio gateway \u6ca1\u6709\u8ffd\u8e2a\u6570\u636e\u53d1\u9001",id:"3istio-gateway-\u6ca1\u6709\u8ffd\u8e2a\u6570\u636e\u53d1\u9001",level:3}],d={toc:m};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u914d\u7f6e-istio"},"\u914d\u7f6e Istio"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"KubeGems Installer \u9ed8\u8ba4\u5185\u7f6e\u4e86\u5b89\u88c5\u4e86 Istio \u63a7\u5236\u5668\uff0c\u7528\u4e8e\u7ba1\u7406\u96c6\u7fa4\u5185\u7684 Istio \u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u5728",(0,o.kt)("inlineCode",{parentName:"p"}," kubernetes_plugins.istio")," \u4e2d\u5bf9 istio \u8fdb\u884c\u4e2a\u6027\u5316\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6837\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'core_plugins:\n  details:\n    catalog: \u670d\u52a1\u7f51\u683c\n    description: KubeGems\u5e73\u53f0\u670d\u52a1\u6cbb\u7406\u5957\u4ef6.\n    version: v1.11.7\n  enabled: false\n  namespace: istio-system\n  operator:\n    eastwestgateway:\n      enabled: false\n    dnsproxy:\n      enabled: true\n    istio-cni:\n      enabled: true\n    tracing:\n      enabled: true\n      param: 50\n      address: "jaeger-collector.observability.svc.cluster.local:9411"\n    kiali:\n      enabled: true\n      prometheus_urls: "http://prometheus.gemcloud-monitoring-system.svc.cluster.local:9090"\n      trace_urls: "http://jaeger-query.observability.svc.cluster.local:16685/jaeger"\n      grafana_urls: "http://grafana-service.gemcloud-monitoring-system.svc.cluster.local:3000"\n  status:\n    deployment:\n      - istiod\n')),(0,o.kt)("h2",{id:"\u624b\u52a8\u90e8\u7f72-istio"},"\u624b\u52a8\u90e8\u7f72 Istio"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u7248\u672c\u68c0\u67e5"},"\u7248\u672c\u68c0\u67e5"),(0,o.kt)("p",null,"istio \u4f9d\u8d56 kubernetes \u529f\u80fd\uff0c\u9700\u8981\u6309\u7167\u5f53\u524d\u7684 k8s \u7248\u672c\u9009\u62e9\u9002\u5408\u7684 istio \u7248\u672c\u3002"),(0,o.kt)("p",null,"\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/releases/supported-releases/#support-status-of-istio-releases"},"Support status of Istio releases")),(0,o.kt)("h3",{id:"\u5b89\u88c5-istioctl"},"\u5b89\u88c5 istioctl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -L https://istio.io/downloadIstio | sh -\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5b9e\u9645\u4f7f\u7528\u7684\u811a\u672c\u4e3a istio/istio/downloadIstioCandidate.sh"),(0,o.kt)("p",{parentName:"div"},"\u63a8\u8350\u901a\u8fc7 istioctl \u5b89\u88c5 istio operator\uff0c\u540e\u7eed\u7684\u5b89\u88c5\u5747\u7531 operator CR \u5b8c\u6210\u3002"))),(0,o.kt)("h3",{id:"\u5b89\u88c5-istio-operator"},"\u5b89\u88c5 istio operator"),(0,o.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u5b89\u88c5 istioctl \u5e76\u4f7f\u7528 istioctl \u76f8\u5173\u547d\u4ee4\u6765\u914d\u7f6e istio \u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5728\u96c6\u7fa4\u4e2d\u5b89\u88c5 istio operator \u7684\u65b9\u5f0f\u6765\u914d\u7f6e istio \u90e8\u7f72\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"istio operator init\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e docker.io \u62c9\u53d6\u955c\u50cf\u5931\u8d25\u7684\u573a\u666f\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"istioctl operator init --hub example.com/istio\n")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4fdd\u6301\u9ed8\u8ba4\uff0c\u5728\u5b89\u88c5 CR \u65f6\u4e5f\u53ef\u6307\u5b9a hub"),(0,o.kt)("h3",{id:"\u5b89\u88c5-istio"},"\u5b89\u88c5 istio"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u5b8c\u6210 istio-operator \u540e\u53ef\u4ee5\u901a\u8fc7 istio-operator CR \u6765\u5b89\u88c5 istio\u3002\n(\u63a8\u8350)\u5728 istio-system \u7a7a\u95f4\u4e2d\u5b89\u88c5 istio\uff0c\u56e0\u5176\u4e3a istio \u9ed8\u8ba4\u7a7a\u95f4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns istio-system\nkubectl apply -f - <<EOF\napiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nmetadata:\n  namespace: istio-system\n  name: default-istiocontrolplane\nspec:\n  profile: default\nEOF\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u8bbf\u95ee docker.io \u4e0d\u65b9\u4fbf\u7684\u60c5\u51b5\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6 OCI \u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nmetadata:\n  namespace: istio-system\n  name: default-istiocontrolplane\nspec:\n  profile: default\n  hub: example.com/istio # \u7b2c\u4e09\u65b9\u4ed3\u5e93\uff08\u53ef\u9009\uff09\n  tag: 1.11.0 #\u6307\u5b9atag(\u53ef\u9009)\uff0c\u63a8\u8350\u4e0d\u6307\u5b9a\uff0c\u4e0eoperator\u7248\u672c\u76f8\u540c\u3002\n")),(0,o.kt)("p",null,"\u53ef\u914d\u7f6e\u5b57\u6bb5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.operator.v1alpha1/"},"IstioOperatorSpec")),(0,o.kt)("h3",{id:"\u914d\u7f6e-istio-gateway"},"\u914d\u7f6e istio gateway"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684 istio operator \u6ca1\u6709\u5bf9 istio-gateway \u8bbe\u7f6e\u5f00\u542f\u6ce8\u5165\uff0c\u4e5f\u5c31\u65e0\u6cd5\u8bb0\u5f55\u7f51\u5173\u7684\u8ffd\u8e2a\u6570\u636e\u3002\u9ed8\u8ba4\u5c06 gateway \u5b89\u88c5\u5728\u4e86 istio-system \u7a7a\u95f4\uff0c\u5b89\u5168\u8d77\u89c1\uff0c\u63a8\u8350\u5c06\u5176\u79fb\u52a8\u81f3\u72ec\u7acb\u7684\u7a7a\u95f4\u3002\n\u9700\u8981\u66f4\u6539\u4e24\u4e2a\u914d\u7f6e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Gateway \u5b89\u88c5\u7684\u76ee\u6807\u7a7a\u95f4\u3002"),(0,o.kt)("li",{parentName:"ol"},"Gateway \u8bbe\u7f6e\u6ce8\u5165\u65b9\u5f0f\u4e3a gateway \u65b9\u5f0f(\u533a\u522b\u4e8e sidecar \u6a21\u5f0f)\u3002")),(0,o.kt)("p",null,"\u53c2\u8003\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"1.11 \u65b0\u589e\u7684\u9488\u5bf9 gateway \u7684\u6ce8\u5165\u65b9\u5f0f\uff0c\u4e0d\u518d\u4f7f\u7528 sidecar\u3002",(0,o.kt)("a",{parentName:"li",href:"https://istio.io/latest/news/releases/1.11.x/announcing-1.11/#gateway-injection"},"gateway-injection")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/setup/additional-setup/gateway/#deploying-a-gateway"},"deploying-a-gateway"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nmetadata:\n  name: istio\n  namespace: istio-system\nspec:\n  profile: default\n  hub: example.com/istio\n  tag: 1.11.0\n  meshConfig:\n    enableTracing: true\n    defaultConfig:\n      tracing:\n        sampling: 1.0 # defualt 1%\n        zipkin:\n          address: jaeger-collector.observability:9411\n  components:\n    ingressGateways:\n      - name: istio-ingress\n        namespace: istio-ingress # gateway namespace\n  values:\n    gateways:\n      istio-ingressgateway:\n        injectionTemplate: "gateway" # enable gateway injection\n')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"istio \u5bf9 gateway \u7684\u6ce8\u5165\u65b9\u5f0f\u4e0e\u5e38\u89c4\u4e0d\u540c\uff0c\u65e0\u6cd5\u4f7f\u7528 sidecar \u65b9\u5f0f\u6ce8\u5165 gateway\uff0c\u9700\u8981\u6307\u5b9a injectionTemplate \u4e3a gateway\u3002"))),(0,o.kt)("p",null,"\u6b64\u65f6\u518d\u4ece jaeger \u754c\u9762\u67e5\u8be2\u5373\u53ef\u67e5\u8be2\u5230\u4ece gateway \u5f00\u59cb\u7684\u8ffd\u8e2a\u6570\u636e\u4e86\u3002"),(0,o.kt)("h3",{id:"\u5f00\u542f-istio-cni"},"\u5f00\u542f istio cni"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/additional-setup/cni/"},"install Istio with the Istio CNI plugin")),(0,o.kt)("p",null,"istio cni \u6709\u6548\u89e3\u51b3\u4e86 istio \u5f80 pod \u6ce8\u5165 sidecar \u65f6\u8981\u6c42 pod \u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," \u80fd\u529b\uff0c\u7528\u4e8e\u5728 initContainer \u9636\u6bb5\u6765\u6539\u53d8 iptables \u89c4\u5219\u5c06\u6d41\u91cf\u5bfc\u81f3 sidecar \u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3a\u6b64 Pod \u6743\u9650\uff0c\u53ef\u80fd\u8ba9\u7f51\u7edc\u5b58\u5728\u5b89\u5168\u98ce\u9669\u6216\u8005\u6709\u5176\u4ed6\u7684\u9690\u60a3\uff0cistio cni \u5728 Pod \u751f\u547d\u5468\u671f\u7684\u521b\u5efa\u7f51\u7edc\u9636\u6bb5\u5c31\u8fdb\u884c\u4e86\u8fd9\u4e2a\u66f4\u6539\uff0c\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u5c31\u4e0d\u518d\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," \u80fd\u529b\u4e86"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nmetadata:\n  namespace: istio-system\n  name: default-istiocontrolplane\nspec:\n  profile: default\n  hub: example.com/istio\n  tag: 1.11.0\n  meshConfig:\n    enableTracing: true\n    defaultConfig:\n      tracing:\n        sampling: 1.0 # defualt 1%\n        zipkin:\n          address: jaeger-collector.observability:9411\n  components:\n    ingressGateways:\n      - name: istio-ingress\n        namespace: istio-ingress # gateway namespace\n    cni:\n      enabled: true # enable cni\n  values:\n    gateways:\n      istio-ingressgateway:\n        injectionTemplate: "gateway" # enable gateway injection\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u9192")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"istio cni \u4e0d\u4f1a\u4e0e\u5176\u4ed6 cni \u51b2\u7a81\uff0c\u5b89\u88c5 istio cni \u65f6\u5b83\u4e5f\u4e0d\u4f1a\u66ff\u6362\u5df2\u5b58\u5728\u7684 cni \u63d2\u4ef6\uff0ccni \u63d2\u4ef6\u662f\u94fe\u5f0f\u6267\u884c\u7684\u3002\u4f8b\u5982\u5728 calico cni \u4e0b\u542f\u7528 istio cni \u540e\u7684 cni \u914d\u7f6e\u7c7b\u4f3c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cniVersion": "0.3.1",\n  "name": "k8s-pod-network",\n  "plugins": [\n    {\n      "type": "calico"\n      ...\n    },\n    ...\n    {\n      "kubernetes": {\n        "cni_bin_dir": "/opt/cni/bin",\n        "exclude_namespaces": ["istio-system", "kube-system"],\n        "kubeconfig": "/etc/cni/net.d/ZZZ-istio-cni-kubeconfig"\n      },\n      "log_level": "info",\n      "log_uds_address": "/var/run/istio-cni/log.sock",\n      "name": "istio-cni",\n      "type": "istio-cni"\n    }\n  ]\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u66f4\u591a\u5173\u4e8e CNi \u914d\u7f6e\u7684\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni/blob/master/SPEC.md#example-configuration"},"cni-example-configuration")))),(0,o.kt)("h2",{id:"\u5b89\u88c5-kiali"},"\u5b89\u88c5 kiali"),(0,o.kt)("p",null,"kiali \u662f mesh \u7684\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 istio addon \u65b9\u5f0f ",(0,o.kt)("a",{parentName:"p",href:"https://kiali.io/documentation/latest/quick-start/#_install_via_istio_addons"},"\u624b\u52a8\u5b89\u88c5")," \uff0c\u6216\u8005\u91c7\u7528",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kiali/kiali-operator"}," kiali-operator \u5b89\u88c5"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.11/samples/addons/kiali.yaml\n")),(0,o.kt)("p",null,"kiali \u5728\u7aef\u53e3 20001 \u76d1\u542c webui \u5730\u5740\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5176 service."),(0,o.kt)("h3",{id:"\u914d\u7f6e-kiali"},"\u914d\u7f6e kiali"),(0,o.kt)("p",null,"\u5982\u4f7f\u7528\u4e86\u5916\u90e8 promethus \u4ee5\u53ca jaeger \u7b49\uff0c\u9700\u8981\u4fee\u6539\u914d\u7f6e\u624d\u80fd\u4f7f kiali \u6b63\u5e38\u751f\u6548\u3002\u4e3b\u8981\u6d89\u53ca\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# configmap kiali\nexternal_services:\n  grafana:\n    in_cluster_url: http://grafana.grafana:3000\n  prometheus:\n    url: http://prometheus.monitoring:9090\n  tracing:\n    in_cluster_url: http://jaeger-query.observability:16685/jaeger\n")),(0,o.kt)("h3",{id:"\u4e0e-prometheus-\u96c6\u6210"},"\u4e0e prometheus \u96c6\u6210"),(0,o.kt)("p",null,"kiali \u4f7f\u7528\u4e86 prometheus \u6570\u636e\u6765\u751f\u6210 kiali graph\uff0c\u4e3a\u4e86\u80fd\u591f\u6b63\u786e\u7684\u751f\u6210\u8fd9\u4e9b\u56fe\uff0c\u9700\u8981\u4ece prometheus \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"envoy sidecar")," \u7684\u6307\u6807\u3002\u5373\u9700\u8981\u4fdd\u8bc1 envoy \u76f8\u5173\u6307\u6807\u88ab primetheus \u91c7\u96c6\u5230\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/ops/integrations/prometheus/#configuration"},"prometheus/#configuration")," \u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\u5b9e\u73b0\u3002\nsidecar \u5728\u6ce8\u5165\u7684\u65f6\u5019\u5b58\u5728\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"meshConfig.enablePrometheusMerge"),", \u5176\u63a7\u5236\u4e86 sidecar \u7684\u6ce8\u5165\u884c\u4e3a\uff0c\u5982\u679c\u4e3a true \u5219\u4f1a\u5c06\u539f pod \u7684 prometheus \u6ce8\u89e3\u66f4\u6362\u4e3a\u805a\u5408\u7684 prometheus \u6ce8\u89e3\uff08\u5982\u4e0b\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Pod\nmetadata:\n  annotations:\n    prometheus.io/path: /stats/prometheus\n    prometheus.io/port: "15020"\n    prometheus.io/scrape: "true"\n')),(0,o.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u6709\u51e0\u79cd\u914d\u7f6e\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'sidecar \u4f1a\u4e3a pod \u589e\u52a0 prometheus.io/scrape: "true" \u6ce8\u89e3\uff0c\u8fd9\u4e2a\u6ce8\u89e3\u7ea6\u5b9a\u4e3a\u5b58\u5728\u8be5\u6ce8\u89e3\u7684 pod \u4f1a\u88ab prometheus \u53d1\u73b0\u5e76\u91c7\u96c6\u3002\u4e5f\u5c31\u80fd\u591f\u88ab kiali \u6240\u4f7f\u7528\u3002')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u4f7f\u7528\u4e86 prometheus operator \u8fd9\u53ef\u4ee5\u5ffd\u7565\u8be5\u65b9\u5f0f"))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u914d\u7f6e\u4e0a\u6ca1\u6709\u5bf9\u4e0a\u8ff0\u6ce8\u89e3\u54cd\u5e94\uff0c\u5373\u4f7f\u6307\u5b9a\u4e86\u6ce8\u89e3\u4e5f\u65e0\u6cd5\u88ab\u53d1\u73b0\u3002\u8fd9\u662f\u9700\u8981\u4e3b\u52a8\u8bbe\u7f6e prometheus \u91c7\u96c6\u89c4\u5219",(0,o.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/ops/integrations/prometheus/#option-2-customized-scraping-configurations"},"customized-scraping-configurations"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- job_name: "istiod"\n  kubernetes_sd_configs:\n    - role: endpoints\n      namespaces:\n        names:\n          - istio-system\n  relabel_configs:\n    - source_labels:\n        [__meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]\n      action: keep\n      regex: istiod;http-monitoring\n\n- job_name: "envoy-stats"\n  metrics_path: /stats/prometheus\n  kubernetes_sd_configs:\n    - role: pod\n  relabel_configs:\n    - source_labels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: ".*-envoy-prom"\n')),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus operator")," \u7684\u53ef\u4ee5\u5c06\u4e0a\u8ff0\u914d\u7f6e\u6dfb\u52a0\u81f3 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/additional-scrape-config.md"},"secret/additional-scrape-configs")," \u3002"),(0,o.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\u6b64\u5916\uff0c\u4e3a\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\uff0c\u60a8\u8fd8\u53ef\u4ee5\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"RecordRule"),",\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/ops/best-practices/observability/#using-prometheus-for-production-scale-monitoring"},"using-prometheus-for-production-scale-monitoring")),(0,o.kt)("h2",{id:"\u8c03\u4f18"},"\u8c03\u4f18"),(0,o.kt)("p",null,"istio \u9ed8\u8ba4\u5b89\u88c5\u4e0b\u76d1\u542c\u6240\u6709\u7a7a\u95f4\u4e0b\u7684 service \u4ee5\u4fbf\u4e8e\u7f51\u683c\u670d\u52a1\u4e4b\u95f4\u90fd\u80fd\u591f\u4e92\u76f8\u901a\u4fe1\u3002\u4f46\u5728\u96c6\u7fa4 workload \u8f83\u591a\u7684\u60c5\u51b5\u4e0b\uff0cistio sidecar \u4e2d\u4f1a\u5b58\u5728\u96c6\u7fa4\u6240\u6709\u7684\u670d\u52a1\u914d\u7f6e\uff0c\u5360\u7528\u7684\u5185\u5b58\u751a\u81f3\u8d85\u8fc7\u4e86\u90e8\u5206\u4e1a\u52a1\u5185\u5b58\u3002\u5982\u679c\u80fd\u591f\u5c06 sidecar \u4e2d\u5b58\u50a8\u7684\u914d\u7f6e\u9879\u76ee\u7f29\u51cf\u5219\u53ef\u663e\u8457\u964d\u4f4e\u5185\u5b58\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"istio \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecars.networking.istio.io")," \u8d44\u6e90\u53ef\u4ee5\u9488\u5bf9\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u5bf9\u670d\u52a1\u6761\u76ee\u8fdb\u884c\u9650\u5236\u3002\u8ba9\u8be5\u7a7a\u95f4\u4e0b\u7684 envoy \u4ec5\u80fd\u8bbf\u95ee\u6240\u914d\u7f6e\u7684\u670d\u52a1\u3002"),(0,o.kt)("p",null,"sidecar \u652f\u6301\u901a\u8fc7 ingress/egress \u9879\u76ee\u548c workloadSelector \u9009\u62e9\u9700\u8981\u914d\u7f6e\u7684\u670d\u52a1\u3002\u66f4\u591a\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/networking/sidecar/"},"istio/sidecar")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4ee5 book-info \u4e3a\u4f8b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1beta1\nkind: Sidecar\nmetadata:\n  name: default\n  namespace: istio-demo\nspec:\n  egress:\n    - hosts:\n        - "./*"\n')),(0,o.kt)("p",null,"\u8c03\u6574\u524d\u540e envoy \u7684\u5185\u5b58\u5360\u7528\u5bf9\u6bd4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl -n istio-demo top pod\nNAME                             CPU(cores)   MEMORY(bytes)\ndetails-v1-6f6bc76446-4bksd      10m          327Mi\nproductpage-v1-69d595976-c8qkj   56m          281Mi\nratings-v1-75475c49cd-cbbnn      7m           325Mi\nreviews-v1-c5f75b9d4-ngst4       67m          381Mi\nreviews-v2-65dffdf654-s7kt4      50m          375Mi\nreviews-v3-755bf5cf76-52bxj      9m           457Mi\n$ kubectl -n istio-demo top pod --use-protocol-buffers\nNAME                             CPU(cores)   MEMORY(bytes)\ndetails-v1-6f6bc76446-vjkrw      8m           60Mi\nproductpage-v1-69d595976-sk8lc   56m          98Mi\nratings-v1-75475c49cd-bv6q6      10m          50Mi\nreviews-v1-c5f75b9d4-2nk52       132m         150Mi\nreviews-v2-65dffdf654-mdrbv      39m          189Mi\nreviews-v3-755bf5cf76-lk829      140m         192Mi\n")),(0,o.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h3",{id:"1\u65e0\u6cd5\u62c9\u53d6\u955c\u50cf"},"1.\u65e0\u6cd5\u62c9\u53d6\u955c\u50cf"),(0,o.kt)("p",null,"\u5efa\u8bae\u66f4\u6362\u955c\u50cf\u6e90\uff0c\u56e0\u9ed8\u8ba4\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"docker.io"),"\u62c9\u53d6\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f - <<EOF\napiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nmetadata:\n  namespace: istio-system\n  name: default-istiocontrolplane\nspec:\n  profile: default\n  hub: gcr.io/istio\n  tag: 1.11.0\nEOF\n")),(0,o.kt)("p",null,"\u56e0\u5f53\u524d\u96c6\u7fa4\u4e3a 1.18 \uff0cingress \u7248\u672c\u5c1a\u672a\u652f\u6301 v1\uff0c\u76ee\u524d\u4e3a v1beta1;\u53ef\u9009\u62e9\u964d\u4f4e operator \u7248\u672c\uff0c\u9009\u62e9\u5219 1.22.0 \u7248\u672c\u3002"),(0,o.kt)("h3",{id:"2\u65e0\u6cd5\u8bbf\u95ee-jaegerobservability9411"},"2.\u65e0\u6cd5\u8bbf\u95ee jaeger.observability:9411"),(0,o.kt)("p",null,"istio \u4f7f\u7528 zipkin \u534f\u8bae\u8fdb\u884c tracing \u6570\u636e\u53d1\u9001\uff0cjaeger \u652f\u6301\u8be5\u534f\u8bae\uff0c\u4f46\u662f\u9ed8\u8ba4 jaeger \u914d\u7f6e\u672a\u5f00\u542f\u8be5\u529f\u7aef\u53e3\u3002\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.25/deployment/#collectors"},"collectors")),(0,o.kt)("p",null,"jaeger \u5c06\u5728\u76f8\u540c\u7684\u7aef\u53e3\u652f\u6301 zipkin \u534f\u8bae\uff0c\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jaegertracing/jaeger#backwards-compatibility-with-zipkin"},"backwards-compatibility-with-zipkin"),"\u3002"),(0,o.kt)("h3",{id:"3istio-gateway-\u6ca1\u6709\u8ffd\u8e2a\u6570\u636e\u53d1\u9001"},"3.istio gateway \u6ca1\u6709\u8ffd\u8e2a\u6570\u636e\u53d1\u9001"),(0,o.kt)("p",null,"istio gateway \u9ed8\u8ba4\u4e0d\u53d1\u9001\u8ffd\u8e2a\u6570\u636e\uff0c\u9700\u8981\u4e3a\u5176\u914d\u7f6e sidecar\u3002\u5e76\u5efa\u8bae\u4e0d\u8981\u5c06\u5176\u653e\u7f6e\u5728 istio-system \u7a7a\u95f4"))}u.isMDXComponent=!0}}]);
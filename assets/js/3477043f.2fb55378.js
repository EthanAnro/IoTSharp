"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[3640],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(n),k=a,N=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return n?r.createElement(N,i(i({ref:e},u),{},{components:n})):r.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},402:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:5},p="\u914d\u7f6eIoTSharp",s={unversionedId:"tutorial-basics/appsettings",id:"tutorial-basics/appsettings",title:"\u914d\u7f6eIoTSharp",description:"\u200b\t\t\u672c\u6559\u7a0b\u4e3b\u8981\u8bb2\u8ff0 appsettings \u7684\u914d\u7f6e , \u5927\u5bb6\u53ef\u4ee5\u5728 \u4ee3\u7801\u76ee\u5f55\u6216\u8005\u5b89\u88c5\u6587\u4ef6\u76ee\u5f55\u770b\u5230  \u6709\u5f88\u591a\u4e2a appsettings.xxxxx.json \u7684\u6587\u4ef6, \u4e3b\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c \u6211\u4eec\u662f\u901a\u8fc7 appsettings.json  \u914d\u7f6e\u3002\u4f46\u662f\u7531\u4e8e\u5f00\u53d1\u9700\u8981\uff0c \u6211\u4eec\u63d0\u4f9b\u4e86\u6839\u636e\u6570\u636e\u5e93\u4e0d\u901a\u800c\u4e0d\u901a\u7684\u914d\u7f6e\uff0c \u53ef\u4ee5\u6839\u636e\u4f60\u4f7f\u7528\u60c5\u51b5\u6765\u53c2\u8003\u8fd9\u4e9b\u914d\u7f6e\u3002 \u6bd4\u5982\uff0c \u73af\u5883\u4e2d\u4f7f\u7528Mysql \uff0c \u53ef\u4ee5\u628a   appsettings.MySql.json  \u6539\u4e3a appsettings.Production.json  \u3002\u4f46\u63a8\u8350\u901a\u8fc7\u73af\u5883\u53d8\u91cf ASPNETCOREENVIRONMENT  \u6765\u51b3\u5b9a\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\uff0c   \u6bd4\u5982 ASPNETCOREENVIRONMENT \u8bbe\u7f6e\u4e3a MySQL \uff0c \u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u5c31\u662f appsettings.MySQL.json \u6587\u4ef6\uff0c \u5982\u679cASPNETCORE_ENVIRONMENT \u8bbe\u7f6e\u4e3a Sqlite\uff0c\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u5c31\u662f appsettings.Sqlite.json \u6587\u4ef6\u3002\u4e8e\u6b64\u540c\u65f6\uff0c \u5728VS\u4e2d\u8c03\u8bd5\u65f6 \uff0c \u4e5f\u901a\u8fc7 launchSettings.json \u6587\u4ef6\u9884\u914d\u4e86\u652f\u6301\u7684\u6570\u636e\u5e93 \u73af\u5883\u53d8\u91cf\u548c\u5bf9\u5e94\u7684\u6587\u4ef6 \uff0c \u65b9\u4fbf\u8c03\u8bd5\uff0c \u53ea\u9700\u8981\u5728VS\u4e2d\u9009\u62e9\u8c03\u8bd5\u73af\u5883\u5373\u53ef\u3002",source:"@site/docs/tutorial-basics/appsettings.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/appsettings",permalink:"/docs/tutorial-basics/appsettings",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-basics/appsettings.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5728Windows\u4e2d\u90e8\u7f72IoTSharp",permalink:"/docs/tutorial-basics/deploy_win"},next:{title:"\u5982\u4f55\u5bf9\u63a5\u7b2c\u4e09\u65b9\u7f51\u5173\uff1f",permalink:"/docs/tutorial-basics/gateway"}},u={},m=[],c={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6eiotsharp"},"\u914d\u7f6eIoTSharp"),(0,o.kt)("p",null,"\u200b\t\t\u672c\u6559\u7a0b\u4e3b\u8981\u8bb2\u8ff0 appsettings \u7684\u914d\u7f6e , \u5927\u5bb6\u53ef\u4ee5\u5728 \u4ee3\u7801\u76ee\u5f55\u6216\u8005\u5b89\u88c5\u6587\u4ef6\u76ee\u5f55\u770b\u5230  \u6709\u5f88\u591a\u4e2a appsettings.xxxxx.json \u7684\u6587\u4ef6, \u4e3b\u8981\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c \u6211\u4eec\u662f\u901a\u8fc7 appsettings.json  \u914d\u7f6e\u3002\u4f46\u662f\u7531\u4e8e\u5f00\u53d1\u9700\u8981\uff0c \u6211\u4eec\u63d0\u4f9b\u4e86\u6839\u636e\u6570\u636e\u5e93\u4e0d\u901a\u800c\u4e0d\u901a\u7684\u914d\u7f6e\uff0c \u53ef\u4ee5\u6839\u636e\u4f60\u4f7f\u7528\u60c5\u51b5\u6765\u53c2\u8003\u8fd9\u4e9b\u914d\u7f6e\u3002 \u6bd4\u5982\uff0c \u73af\u5883\u4e2d\u4f7f\u7528Mysql \uff0c \u53ef\u4ee5\u628a   appsettings.MySql.json  \u6539\u4e3a appsettings.Production.json  \u3002\u4f46\u63a8\u8350\u901a\u8fc7\u73af\u5883\u53d8\u91cf ASPNETCORE_ENVIRONMENT  \u6765\u51b3\u5b9a\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\uff0c   \u6bd4\u5982 ASPNETCORE_ENVIRONMENT \u8bbe\u7f6e\u4e3a MySQL \uff0c \u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u5c31\u662f appsettings.MySQL.json \u6587\u4ef6\uff0c \u5982\u679cASPNETCORE_ENVIRONMENT \u8bbe\u7f6e\u4e3a Sqlite\uff0c\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u5c31\u662f appsettings.Sqlite.json \u6587\u4ef6\u3002\u4e8e\u6b64\u540c\u65f6\uff0c \u5728VS\u4e2d\u8c03\u8bd5\u65f6 \uff0c \u4e5f\u901a\u8fc7 launchSettings.json \u6587\u4ef6\u9884\u914d\u4e86\u652f\u6301\u7684\u6570\u636e\u5e93 \u73af\u5883\u53d8\u91cf\u548c\u5bf9\u5e94\u7684\u6587\u4ef6 \uff0c \u65b9\u4fbf\u8c03\u8bd5\uff0c \u53ea\u9700\u8981\u5728VS\u4e2d\u9009\u62e9\u8c03\u8bd5\u73af\u5883\u5373\u53ef\u3002  "),(0,o.kt)("h1",{id:"\u6570\u636e\u5e93\u548c\u4e2d\u95f4\u4ef6\u914d\u7f6e"},"\u6570\u636e\u5e93\u548c\u4e2d\u95f4\u4ef6\u914d\u7f6e"),(0,o.kt)("p",null,"  \u5f00\u59cb\u4f7f\u7528\u524d\uff0c \u6211\u4eec\u9700\u8981\u6700\u5148\u4e86\u89e3\u7684\u5e94\u8be5\u662f\u6570\u636e\u5e93\uff0c \u6570\u636e\u5982\u4f55\u5b58\u653e\uff0c \u65f6\u5e8f\u6570\u636e\u5982\u4f55\u5b58\u653e\u7b49\uff0c \u8fd9\u91cc\u6211\u4eec\u8003\u8651\u5230\u4e86\u5404\u79cd\u60c5\u51b5\uff0c \u591a\u79cd\u6570\u636e\u5e93\u548c\u591a\u79cd\u4e2d\u95f4\u4ef6\u7684\u7ec4\u5408\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u559c\u597d\uff0c \u9009\u62e9\u4e94\u79cd\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u5176\u4e2d\u4e00\u4e2a\uff0c \u4e5f\u53ef\u4ee5\u4ece\u6211\u4eec\u652f\u6301\u7684\u56db\u4e2a\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\u9009\u62e9\u4e00\u4e2a\uff0c \u5f53\u7136\uff0c \u4f60\u53ef\u4ee5\u9009\u62e9\u5728\u5173\u7cfb\u6570\u636e\u5e93\u4e2d\u5b58\u50a8\u65f6\u5e8f\u6570\u636e\uff0c \u53ef\u4ee5\u9009\u62e9\u5355\u8868 \uff0c \u4e5f\u53ef\u4ee5\u9009\u62e9\u5206\u8868\uff0c \u5982\u679c\u5206\u8868\uff0c \u4f60\u53ef\u4ee5\u9009\u62e9\u6309\u5206\u949f\uff0c \u6309\u65e5\uff0c \u6309\u6708\uff0c \u6309\u5e74\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u5404\u79cd\u652f\u6301\u7684 \u6d88\u606f\u4e2d\u95f4\u4ef6\u7b49\uff0c  \u4e0b\u9762\u6211\u4eec\u63cf\u8ff0\u5982\u4f55\u914d\u7f6e\u4ed6\u4eec\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'\u4f60\u9700\u8981\u901a\u8fc7 "DataBase" \u6765\u6307\u5b9a\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c \u6bd4\u5982\u6307\u5b9a\u4e3a  "Sqlite"\u3002 '),(0,o.kt)("li",{parentName:"ol"},'\u914d\u7f6e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32 \uff0c \u901a\u8fc7  "ConnectionStrings"  \u4e2d\u7684 "IoTSharp"\u914d\u7f6e\u9879\u914d\u7f6e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c  \u6bd4\u5982 "Data Source=IoTSharp.db"'),(0,o.kt)("li",{parentName:"ol"},'\u914d\u7f6e\u65f6\u5e8f\u5b58\u50a8\u6a21\u5f0f \uff0c \u901a\u8fc7 "TelemetryStorage" \u6765\u914d\u7f6e\u65f6\u5e8f\u6570\u636e\u5b58\u50a8\u65b9\u5f0f\uff0c \u6bd4\u5982 \u6211\u4eec\u5728Sqlite\u4e2d\u4f7f\u7528\u5206\u8868\u6a21\u5f0f\uff0c \u90a3\u4e48\u5c31\u9700\u8981 "Sharding" , \u5982\u679c\u662f\u5355\u8868\u5c31\u586b\u5199\u4e3a SingleTable , \u5982\u679c\u4f7f\u7528InfluxDB , \u5219\u8fde\u5199InfluxDB'),(0,o.kt)("li",{parentName:"ol"},'\u914d\u7f6e\u65f6\u5e8f\u5b58\u50a8\u8fde\u63a5\u5b57\u7b26\u4e32 \uff0c\u901a\u8fc7  "ConnectionStrings"\u4e2d\u7684  "TelemetryStorage"\u6211\u4eec\u914d\u7f6e\u4f7f\u7528Sqlite\u7684\u5206\u8868\u6a21\u5f0f\uff0c \u90a3\u4e48\u8fde\u63a5\u5b57\u7b26\u4e32\u5c31\u662f\u8fd9\u6837\uff0c \u201cData Source=TelemetryStorage.db\u201d\uff0c  '),(0,o.kt)("li",{parentName:"ol"},'\u914d\u7f6e\u4e8b\u4ef6\u603b\u7ebf\u4e2d\u95f4\u4ef6, \u901a\u8fc7\u914d\u7f6e\u9879"EventBusMQ" \u6765\u914d\u7f6e\u6d88\u606f\u603b\u7ebf\u4f7f\u7528\u4ec0\u4e48\u4e2d\u95f4\u4ef6\uff0c \u4f60\u53ef\u4ee5\u914d\u7f6e RabbitMQ\u6216 \u5185\u5b58\u6a21\u5f0f InMemory \uff0c\u5982\u679c\u4f7f\u7528\u4e86InMemory\u53ef\u4ee5\u4e0d\u7528\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u8bf7\u5ffd\u7565 \u7b2c\u516d\u6761\u3002  '),(0,o.kt)("li",{parentName:"ol"},'\u914d\u7f6e\u4e8b\u4ef6\u603b\u7ebf\u8fde\u63a5\u5b57\u7b26\u4e32 \uff0c\u901a\u8fc7"ConnectionStrings"\u4e2d\u7684 "EventBusMQ" \u6765\u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c \u5185\u5b58\u6a21\u5f0f\u65f6\u4e0d\u9700\u8981\u914d\u4eba\uff0c \u4f46\u6bd4\u5982\u5f53\u6211\u4eec\u4f7f\u7528 RabbitMQ\u7b49\u4e2d\u95f4\u4ef6\u65f6\u5219\u9700\u8981\u914d\u7f6e\uff0c \u6bd4\u5982  "EventBusMQ": "amqp://root:kissme@rabbitmq:5672"'),(0,o.kt)("li",{parentName:"ol"},'\u914d\u7f6e\u4e8b\u4ef6\u603b\u7ebf\u6d88\u606f\u5b58\u50a8\u65b9\u5f0f\uff0c \u6211\u4eec\u901a\u8fc7 "EventBusStore" \u6765\u8bbe\u7f6e\u7528\u4f55\u79cd\u65b9\u5f0f\u6765\u5b58\u50a8\u6d88\u606f\uff0c \u6bd4\u5982\u4f7f\u7528\uff0c MongoDB, \u90a3\u4e48\u5c31\u9700\u8981\u5c06\u914d\u7f6e\u9879 "EventBusStore" \u6539\u4e3a MongoDB, \u4e5f\u53ef\u4ee5\u4f7f\u7528 InMemory\uff0c \u5982\u679c\u4f7f\u7528\u4e86InMemory\u53ef\u4ee5\u4e0d\u914d\u7f6e \u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u8bf7\u5ffd\u7565\u7b2c\u516b\u6761\u3002 '),(0,o.kt)("li",{parentName:"ol"},'\u914d\u7f6e\u4e8b\u4ef6\u6d88\u606f\u5b58\u50a8\u8fde\u63a5\u5b57\u7b26\u4e32 \uff0c \u5982\u679c\u4f7f\u7528\u4e86MongoDB \u7b49\u4e00\u4e9b\u5b58\u50a8\u6d88\u606f\u7684\u7ec4\u4ef6\uff0c \u90a3\u4e48\u9700\u8981\u901a\u8fc7 \u901a\u8fc7"ConnectionStrings"\u4e2d\u7684 "EventBusStore" \u6765\u914d\u7f6e\uff0c \u6bd4\u5982 \u5982\u679c\u4f7f\u7528\u4e86MongoDB \u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u662f "mongodb://root:kissme@mongodb:27017')),(0,o.kt)("h1",{id:"\u652f\u6301\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u914d\u7f6e\u9879"},"\u652f\u6301\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u914d\u7f6e\u9879"),(0,o.kt)("p",null,"\u914d\u7f6e\u9879\u540d\u79f0\u662f DataBase"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PostgreSql")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SqlServer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"MySql")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Oracle")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sqlite")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"InMemory")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cassandra"),(0,o.kt)("h1",{parentName:"li",id:"\u652f\u6301\u7684\u65f6\u5e8f\u6570\u636e\u5e93\u53ca\u5176\u914d\u7f6e\u9879"},"\u652f\u6301\u7684\u65f6\u5e8f\u6570\u636e\u5e93\u53ca\u5176\u914d\u7f6e\u9879"),(0,o.kt)("p",{parentName:"li"},"\u914d\u7f6e\u9879\u540d\u79f0\u662f TelemetryStorage ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SingleTable")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sharding")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Taos")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"InfluxDB")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"PinusDB")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"TimescaleDB")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"IoTDB"))),(0,o.kt)("h1",{id:"\u652f\u6301\u7684\u4e8b\u4ef6\u603b\u7ebf"},"\u652f\u6301\u7684\u4e8b\u4ef6\u603b\u7ebf"),(0,o.kt)("p",null," \u914d\u7f6e\u9879\u540d\u79f0\u4e3a EventBusMQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"RabbitMQ"),(0,o.kt)("li",{parentName:"ol"},"Kafka"),(0,o.kt)("li",{parentName:"ol"},"InMemory"),(0,o.kt)("li",{parentName:"ol"},"ZeroMQ"),(0,o.kt)("li",{parentName:"ol"},"NATS"),(0,o.kt)("li",{parentName:"ol"},"Pulsar"),(0,o.kt)("li",{parentName:"ol"},"RedisStreams"),(0,o.kt)("li",{parentName:"ol"},"AmazonSQS"),(0,o.kt)("li",{parentName:"ol"},"AzureServiceBus")),(0,o.kt)("h1",{id:"\u652f\u6301\u7684\u4e8b\u4ef6\u603b\u7ebf\u5b58\u50a8\u65b9\u5f0f"},"\u652f\u6301\u7684\u4e8b\u4ef6\u603b\u7ebf\u5b58\u50a8\u65b9\u5f0f"),(0,o.kt)("p",null,"\u914d\u7f6e\u9879\u540d\u79f0\u4e3a EventBusStore     "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"PostgreSql"),(0,o.kt)("li",{parentName:"ol"},"MongoDB  "),(0,o.kt)("li",{parentName:"ol"},"InMemory"),(0,o.kt)("li",{parentName:"ol"},"LiteDB"),(0,o.kt)("li",{parentName:"ol"},"MySql"),(0,o.kt)("li",{parentName:"ol"},"SqlServer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u4e0b\u9762\u662f\u51e0\u4e2a\u793a\u4f8b:\n")))}k.isMDXComponent=!0}}]);
(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/analysis/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"26eb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Analytics logo",width:"30%",src:n("d9e5")}}),r("qrcode",{attrs:{value:e.url}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Analytics",currentSessionID:e.currentSession}})],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v(" Here are informations about your current session "),n("b",[e._v(e._s(e.currentSessionID))]),e._v(" and the overall placements. ")]),n("div",{staticClass:"outputWrapperWrapper"},[n("div",{staticClass:"outputWrapper"},[n("div",{staticClass:"realTimeInfos"},[n("details",{attrs:{open:"open"}},[n("summary",[e._v("Real-time data")]),n("RealtimeResults")],1)]),n("div",{staticClass:"outputSession"},[n("details",[n("summary",[e._v(" Results for your current session")]),n("ResultTable",{attrs:{overall:!1,url:e.url_session}})],1)]),n("div",{staticClass:"outputHighscore"},[n("details",[n("summary",[e._v("Overall highscore")]),n("ResultTable",{attrs:{overall:!0,url:e.url_overall}})],1)])])])])},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table"},[n("table",[n("thead",[n("tr",[n("th",[e._v("Placement")]),n("th",[e._v("Name")]),n("th",[e._v("Energy")]),e.overall?n("th",[e._v("Date")]):e._e()])]),n("tbody",[e.list.length<=0?n("tr",[e._v("Loading...")]):e._e(),e._l(e.list,(function(t,r){return void 0!==e.list||e.list.length>0?n("tr",[n("td",[e._v(e._s(r+1))]),n("td",[e._v(e._s(t.deviceID))]),n("td",[e._v(e._s(t.energy))]),e.overall?n("td",[e._v(e._s(e.getDateFromSession(t.sessionID)))]):e._e()]):e._e()}))],2)])])},l=[],u=(n("fb6a"),n("96cf"),n("1da1")),d=n("bc3a").default,f={name:"ResultTable",props:{url:String,overall:Boolean},data:function(){return{list:[]}},created:function(){this.getData()},methods:{getData:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get(this.url);case 3:t=e.sent,console.log(t.data),this.list=t.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("Error getting data: "+e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),getDateFromSession:function(e){return e.slice(7,9)+"/"+e.slice(5,7)+"/"+e.slice(1,5)}}},p=f,h=(n("d9f5"),n("2877")),m=Object(h["a"])(p,c,l,!1,null,"48ab0e16",null),v=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"realtimeData"}},[n("ul",e._l(e.players,(function(t,r){return n("li",{key:r},[n("div",{staticClass:"realtimePlayer"},[n("p",[e._v("Player "+e._s(t))]),n("RealtimePlayer",{ref:"player",refInFor:!0})],1)])})),0)])])},b=[],_=(n("c975"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("GChart",{attrs:{type:"LineChart",data:e.chartData,options:e.chartOptions}})}),y=[],w=(n("a9e3"),n("cb43")),C={name:"RealtimePlayer",components:{GChart:w["GChart"]},data:function(){return{firstTimestamp:Number,chartData:[["Date","X-Axis","Y-Axis","Z-Axis"],[0,0,0,0]],chartOptions:{hAxis:{title:"Time"},vAxis:{title:"Acceleration"},width:900,explorer:{actions:["dragToZoom","rightClickToReset"],axis:"horizontal",keepInBounds:!0,maxZoomIn:10}}}},methods:{setFirstTimestamp:function(e){this.firstTimestamp=e},getFirstTimestamp:function(){return this.firstTimestamp},newChartData:function(e){this.chartData.push(e)}}},D=C,x=Object(h["a"])(D,_,y,!1,null,"edab16ec",null),S=x.exports,T=n("1a9a"),O=n("bc3a").default,R={name:"RealtimeResults",components:{RealtimePlayer:S},data:function(){return{ready:!1,players:[]}},created:function(){var e=this;this.getSignalRConnectionInfo().then((function(t){return e.getConnectionInfo(t)}))},methods:{getConnectionInfo:function(e){var t=this;console.log(e.url+"  token  "+e.accessToken),this.ready=!0;var n={accessTokenFactory:function(){return e.accessToken}},r=(new T.HubConnectionBuilder).withUrl(e.url,n).configureLogging(T.LogLevel.Information).build();r.on("newMessage",(function(e){console.log("Connection from SignalR with message: "),console.log(e);var n=JSON.parse(e);if(-1==t.players.indexOf(n.deviceID)){t.players.push(n.deviceID);var r=t.$refs[n.deviceID];r.setFirstTimestamp(n.sendingTimestamp),r.newChartData([n.sendingTimestamp-r.getFirstTimestamp(),n.deviceCoordinateX,n.deviceCoordinateY,n.deviceCoordinateZ])}else{var a=t.$refs[n.deviceID];a.newChartData([n.sendingTimestamp-a.getFirstTimestamp(),n.deviceCoordinateX,n.deviceCoordinateY,n.deviceCoordinateZ])}})),r.onclose((function(){return console.log("disconnected")})),console.log("connecting..."),r.start().then((function(){return console.log("connected!")})).catch(console.error)},getAxiosConfig:function(){var e={headers:{}};return e},getSignalRConnectionInfo:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",O.post("https://showcaseFunctions.azurewebsites.net/api/negotiate",null,this.getAxiosConfig()).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},I=R,j=(n("59c0"),Object(h["a"])(I,g,b,!1,null,"26372719",null)),k=j.exports,F={name:"HelloWorld",components:{RealtimeResults:k,ResultTable:v},props:{msg:String,currentSessionID:String},data:function(){return{url_overall:"https://showcaseFunctions.azurewebsites.net/api/DataAnalytics",url_session:"https://showcaseFunctions.azurewebsites.net/api/DataAnalyticsSession?session="+this.currentSessionID}}},P=F,A=(n("ae8a"),Object(h["a"])(P,o,i,!1,null,"ef329f44",null)),M=A.exports,$=n("e19f").sprintf,E={name:"app",components:{HelloWorld:M},created:function(){this.count=Math.floor(101*Math.random());var e=new Date(Date.now());this.currentSession=$("S%04d%02d%02d%03d_%02d",e.getFullYear(),e.getMonth()+1,e.getDate(),e.getMilliseconds(),this.count),this.url="https://steffimo.github.io/iotgame?session="+this.currentSession},data:function(){return{currentSession:String,count:1,url:String}}},W=E,H=(n("034f"),Object(h["a"])(W,a,s,!1,null,null,null)),L=H.exports,Y=n("b2e5"),Z=n.n(Y);r["a"].config.productionTip=!1,r["a"].component(Z.a.name,Z.a),r["a"].use(w["default"]),new r["a"]({render:function(e){return e(L)}}).$mount("#app")},"59c0":function(e,t,n){"use strict";var r=n("d572"),a=n.n(r);a.a},"85ec":function(e,t,n){},ae8a:function(e,t,n){"use strict";var r=n("26eb"),a=n.n(r);a.a},d572:function(e,t,n){},d9e5:function(e,t,n){e.exports=n.p+"img/analytics.9135f0ff.png"},d9f5:function(e,t,n){"use strict";var r=n("e5dd"),a=n.n(r);a.a},e5dd:function(e,t,n){}});
//# sourceMappingURL=app.cb17979a.js.map
(function(t){function e(e){for(var i,o,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function o(t){return a.p+"js/"+({list:"list",settings:"settings"}[t]||t)+"."+{list:"34b3b61b",settings:"27d19dcd"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=o(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1771:function(t,e,n){var i={"./Bluesy.mp3":"1bd5","./Cartoon.mp3":"43d2","./Cheer.mp3":"a5ca","./Cold.mp3":"92ee","./Cruise.mp3":"79d5","./Danzon.mp3":"2304","./Dizzy.mp3":"cad2","./Doug.mp3":"64e8","./Guitar.mp3":"ee00","./Left.mp3":"cf46","./Loping.mp3":"ce21","./Mess.mp3":"53ce","./Puppy.mp3":"f45f","./Slay.mp3":"8cdd","./Sour.mp3":"7fbe"};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id="1771"},"1bd5":function(t,e,n){t.exports=n.p+"media/Bluesy.1e1e8282.mp3"},2304:function(t,e,n){t.exports=n.p+"media/Danzon.95a714ef.mp3"},"3e8e":function(t,e,n){},"43d2":function(t,e,n){t.exports=n.p+"media/Cartoon.65eae6a1.mp3"},"53ce":function(t,e,n){t.exports=n.p+"media/Mess.3130c673.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var i=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");i["default"].use(r["a"]);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}},[n("h1",[t._v("POMODORO")])]),n("keep-alive",[n("router-view")],1)],1)},o=[],a=n("2877"),c={},l=Object(a["a"])(c,s,o,!1,null,null,null),u=l.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{staticClass:"iconGroup d-flex flex-column"},[n("router-link",{attrs:{to:"/list"}},[n("font-awesome-icon",{attrs:{icon:["fas","list"],size:"lg"}})],1),n("router-link",{attrs:{to:"/analytics"}},[n("font-awesome-icon",{attrs:{icon:["fas","chart-bar"],size:"lg"}})],1),n("router-link",{attrs:{to:"/settings"}},[n("font-awesome-icon",{attrs:{icon:["fas","music"],size:"lg"}})],1)],1),n("div",{staticClass:"pink"},[1===t.current.length?n("div",{staticClass:"ping-bg",style:{background:t.bgblue}}):n("div",{staticClass:"ping-bg"}),1===t.current.length?n("div",{staticClass:"pink-outside",style:{borderColor:t.blue}}):n("div",{staticClass:"pink-outside"}),1!==t.status&&1===t.current.length?n("div",{staticClass:"pink-inside",style:t.bcircleBreak}):1===t.status&&1===t.current.length?n("div",{staticClass:"pink-inside",style:t.bcircleCount}):1===t.status&&t.current.length>1?n("div",{staticClass:"pink-inside",style:t.rcircleCount}):n("div",{staticClass:"pink-inside"}),n("div",{staticClass:"rightSquare"},[1===t.current.length?n("div",{ref:"rightCircle",staticClass:"rightCircle",class:{circleRightBlue:!0},style:t.rightBlue}):t._e(),t.current.length>1?n("div",{ref:"rightCircle",staticClass:"rightCircle",class:{circleRightPink:!0},style:t.rightPink}):n("div",{ref:"rightCircle",staticClass:"rightCircle"})]),n("div",{staticClass:"leftSquare"},[1===t.current.length?n("div",{ref:"leftCircle",staticClass:"leftCircle",class:{circleLeftBlue:!0},style:t.leftBlue}):t._e(),t.current.length>1?n("div",{ref:"leftCircle",staticClass:"leftCircle",class:{circleLeftPink:!0},style:t.leftPink}):n("div",{ref:"leftCircle",staticClass:"leftCircle"})]),1!==t.status&&1===t.current.length?n("b-btn",{staticClass:"playBtn",style:t.bbtnBreak,on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"],size:"lg"}})],1):1===t.status&&1===t.current.length?n("b-btn",{staticClass:"playBtn",style:t.bbtnCount,on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"],size:"lg"}})],1):1===t.status&&t.current.length>1?n("b-btn",{staticClass:"playBtn",style:t.rbtnCount,on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"],size:"lg"}})],1):n("b-btn",{staticClass:"playBtn",on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"],size:"lg"}})],1)],1),n("b-container",{staticClass:"rightContainer"},[n("b-row",{staticClass:"h-100 flex-column justify-content-between"},[n("b-col",{staticClass:"addInput"},[n("b-input-group",{attrs:{"invalid-feedback":"Enter at least 4 characters.",state:t.state}},[n("b-form-input",{class:[1===t.current.length?"placeBlue":"placePink"],attrs:{placeholder:"ADD A NEW MISSION...",state:t.state,trim:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.additem.apply(null,arguments)}},model:{value:t.newitem,callback:function(e){t.newitem=e},expression:"newitem"}}),n("b-input-group-append",[n("b-button",{class:[1===t.current.length?"addBlue":"addPink"],on:{click:t.additem}},[n("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1)],1)],1)],1),n("div",{staticClass:"middle d-flex flex-column justify-content-center"},[n("h2",{staticClass:"currentText"},[1===t.current.length?n("b-btn",{staticClass:"stepBtn",style:t.skipBreak,on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","forward"],size:"lg"}})],1):n("b-btn",{staticClass:"stepBtn",on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","forward"],size:"lg"}})],1),n("span",[t._v(" "+t._s(t.current))])],1),1===t.current.length?n("h2",{staticClass:"timeText",style:{color:t.blue}},[t._v(t._s(t.timeText))]):n("h2",{staticClass:"timeText"},[t._v(t._s(t.timeText))])]),t._l(t.restText,(function(e,i){return t.list.length>0?n("div",{key:i,staticClass:"rest d-flex justify-content-between"},[n("div",[n("font-awesome-icon",{attrs:{icon:["far","circle"]}}),n("span",[t._v(" "+t._s(e.name))])],1),n("div",{staticClass:"d-flex"},[1===t.current.length?n("font-awesome-icon",{staticClass:"restBtn",style:{background:t.bgblue},attrs:{icon:["far","play-circle"]},on:{click:function(e){return t.changeorder(i)}}}):n("font-awesome-icon",{staticClass:"restBtn",attrs:{icon:["far","play-circle"]},on:{click:function(e){return t.changeorder(i)}}})],1)]):t._e()}))],2),t.rest.length>3&&t.list.length>0?n("router-link",{staticClass:"moreBtn",attrs:{to:"/list"}},[t._v("MORE")]):t._e()],1)],1)},m=[],h=(n("fb6a"),n("99af"),{name:"Home",data:function(){return{newitem:"",timer:0,bgblue:"#E5F3FF",blue:"#00A7FF",rbtnCount:{color:"white",background:"#FF4384"},bbtnBreak:{color:"#00A7FF",background:"white"},bbtnCount:{color:"white",background:"#00A7FF"},bcircleBreak:{background:"#00A7FF",borderColor:"#00A7FF"},bcircleCount:{background:"white",borderColor:"#00A7FF"},rcircleCount:{background:"white"},skipBreak:{background:"#E5F3FF",color:"#00A7FF"},rightBlue:{borderTopColor:"#00A7FF",borderRightColor:"#00A7FF"},rightPink:{borderTopColor:"#FF4384",borderRightColor:"#FF4384"},leftBlue:{borderBottomColor:"#00A7FF",borderLeftColor:"#00A7FF"},leftPink:{borderBottomColor:"#FF4384",borderLeftColor:"#FF4384"}}},computed:{tomato:function(){return this.$store.state.tomato},state:function(){return 0===this.newitem.length?null:!(this.newitem.length<2)},status:function(){return this.$store.state.status},list:function(){return this.$store.state.list},rest:function(){return this.$store.state.rest},restText:function(){var t=this.rest;return t.length>3&&(t=t.slice(0,3)),t},current:function(){return this.$store.state.current},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)},isBreak:function(){return this.$store.state.isBreak}},methods:{additem:function(){this.state?(this.$store.commit("addList",this.newitem),this.newitem=""):this.$swal({icon:"error",title:"錯誤",text:"必須要兩個字以上"})},changeorder:function(t){this.current.length>1&&this.$store.commit("changeOrder",t)},pause:function(){clearInterval(this.timer),this.$store.commit("changeStatus",2)},start:function(){var t=this;2!==this.status&&this.list.length>0&&this.$store.commit("start"),this.current.length>0&&(this.$store.commit("changeStatus",1),this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.$store.commit("changeStatus",0),this.$store.commit("addFinish"),!t){console.log(this.isBreak);var e=new Audio;0===this.list.length||this.isBreak?e.src=n("1771")("./"+this.$store.state.sound2):e.src=n("1771")("./"+this.$store.state.sound1),e.play()}this.list.length>0?this.start():(this.restText="",this.$swal({icon:"success",title:"結束"}))}},watch:{current:{handler:function(){this.$store.commit("tomato"),console.log(Math.floor(this.tomato/2))},deep:!0}}}),g=h,b=Object(a["a"])(g,p,m,!1,null,null,null),v=b.exports;i["default"].use(d["a"]);var C=[{path:"/",name:"Home",component:v,meta:{title:"番茄鐘"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 清單"}},{path:"/analytics",name:"Analytics",component:function(){return n.e("list").then(n.bind(null,"41f2"))},meta:{title:"番茄鐘 | 分析"}}],k=new d["a"]({routes:C});k.afterEach((function(t,e){document.title=t.meta.title}));var y=k,w=(n("b0c0"),n("a434"),n("2f62")),x=n("0e44"),F=parseInt("1500"),B=parseInt("300");i["default"].use(w["a"]);var O=new w["a"].Store({state:{sound1:"Cartoon.mp3",sound2:"Cartoon.mp3",list:[],finished:[],rest:[],current:"",timeleft:F,isBreak:!1,status:0,tomato:0,tomatoArray:[]},mutations:{selectSound1:function(t,e){t.sound1=e},selectSound2:function(t,e){t.sound2=e},tomato:function(t){t.tomato++,window.setInterval((function(){var e=new Date;0===e.getHours()&&0===e.getMinutes()&&(t.tomatoArray.push(t.tomato),t.tomato=0)}),6e4)},addList:function(t,e){t.list.push({name:e,edit:!1,model:e})},editList:function(t,e){t.list[e].edit=!0},changeList:function(t,e){t.list[e].name=t.list[e].model,t.list[e].edit=!1},cancelList:function(t,e){t.list[e].model=t.list[e].name,t.list[e].edit=!1},delList:function(t,e){t.list.splice(e,1)},start:function(t){t.isBreak?t.current=" ":(t.current=t.list.shift().name,t.rest=t.list.slice(0,t.list.length))},changeStatus:function(t,e){t.status=e},countdown:function(t){t.timeleft--},addFinish:function(t){t.current.length>1&&t.finished.push(t.current),t.current="",t.list.length>0&&(t.isBreak=!t.isBreak),t.timeleft=t.isBreak?B:F},delFinish:function(t,e){t.finished.splice(e,1)},changeOrder:function(t,e){var n=t.current,i=t.rest[e].name;t.current=i,t.rest[e].name=n}},getters:{list:function(t){return t.list}},actions:{},modules:{},plugins:[Object(x["a"])({key:"pomodoro"})]}),_=(n("3e8e"),n("1321")),$=n.n(_),S=n("ecee"),j=n("ad3d"),A=n("c074"),P=n("b702"),L=n("5886");n("4413");S["c"].add(A["d"],A["e"],A["h"],P["c"],P["b"],P["a"],A["a"],A["i"],A["b"],A["g"],A["l"],A["k"],A["f"],A["c"],A["j"]),i["default"].component("font-awesome-icon",j["a"]),i["default"].use(L["a"]),i["default"].use($.a),i["default"].component("apexchart",$.a),i["default"].config.productionTip=!1,new i["default"]({router:y,store:O,render:function(t){return t(u)}}).$mount("#app")},"64e8":function(t,e,n){t.exports=n.p+"media/Doug.8f129a17.mp3"},"79d5":function(t,e,n){t.exports=n.p+"media/Cruise.d05f3bf3.mp3"},"7fbe":function(t,e,n){t.exports=n.p+"media/Sour.5c4c5506.mp3"},"8cdd":function(t,e,n){t.exports=n.p+"media/Slay.590735e0.mp3"},"92ee":function(t,e,n){t.exports=n.p+"media/Cold.ba1adf5c.mp3"},a5ca:function(t,e,n){t.exports=n.p+"media/Cheer.91f7b9d5.mp3"},cad2:function(t,e,n){t.exports=n.p+"media/Dizzy.5a0177eb.mp3"},ce21:function(t,e,n){t.exports=n.p+"media/Loping.5079073d.mp3"},cf46:function(t,e,n){t.exports=n.p+"media/Left.fb508cd7.mp3"},ee00:function(t,e,n){t.exports=n.p+"media/Guitar.f0635e40.mp3"},f45f:function(t,e,n){t.exports=n.p+"media/Puppy.d35a977a.mp3"}});
//# sourceMappingURL=app.8b9de95b.js.map
(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/erdos/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0023":function(e,t,n){"use strict";var o=n("b19e"),a=n.n(o);a.a},"1a8f":function(e,t,n){"use strict";var o=n("da20"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),a=n("8c4f"),r=n("2f62"),i=n("4eb5"),s=n.n(i),c=n("5530"),u=(n("96cf"),n("1da1")),l=n("bc3a"),d=n.n(l),p=d.a.create({baseURL:"http://81.68.122.106/v1",timeout:3e3,headers:{}}),h=p;function m(){return f.apply(this,arguments)}function f(){return f=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.get("/version");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}var v={getVersion:m};function b(){return g.apply(this,arguments)}function g(){return g=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.get("/brands");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return x=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.get("/brands/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var y={getBrands:b,getBrand:w};function O(e,t){return E.apply(this,arguments)}function E(){return E=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.post("/coupons/achieve",{mobile:t,brand_id:n});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function j(e){return _.apply(this,arguments)}function _(){return _=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.get("/coupons",{params:{mobile:t}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}var C={achieveCoupon:O,getCoupons:j},k=Object(c["a"])(Object(c["a"])(Object(c["a"])({},v),y),C),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":e.isFullPage},style:{zIndex:e.zIndex},attrs:{tabindex:"0","aria-busy":e.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:e.backgroundColor},on:{click:function(t){return t.preventDefault(),e.cancel(t)}}}),n("div",{staticClass:"vld-icon"},[e._t("before"),e._t("default",[n(e.loader,{tag:"component",attrs:{color:e.color,width:e.width,height:e.height}})]),e._t("after")],2)])])},A=[],P=(n("a9e3"),function(e){"undefined"!==typeof e.remove?e.remove():e.parentNode.removeChild(e)}),L=function(){return"undefined"!==typeof window},N=L()?window.HTMLElement:Object,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[n("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])},R=[],B={name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},D=B,F=n("2877"),M=Object(F["a"])(D,S,R,!1,null,null,null),$=M.exports,Y={Spinner:$},I={name:"vue-loading",mixins:[],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,N],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:Y,beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0)},methods:{hide:function(){var e=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){e.$destroy(),P(e.$el)}),1500))}},watch:{active:function(e){this.isActive=e}}},H=I,q=(n("ed2b"),Object(F["a"])(H,T,A,!1,null,"c11b0b34",null)),z=q.exports,V=(n("d81d"),n("b64b"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;console.log("Loading show");var r={programmatic:!0},i=Object.assign({},t,o,r),s=new(e.extend(z))({el:document.createElement("div"),propsData:i}),c=Object.assign({},n,a);return Object.keys(c).map((function(e){s.$slots[e]=c[e]})),s}}}),X=V,Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=X(e,t);e.$loading=n,e.prototype.$loading=n};z.install=Z;var U=z,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.shouldShow,expression:"shouldShow"}],staticClass:"nav-bar"},[n("div",{staticClass:"nav-btn"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.hasHistory,expression:"hasHistory"}],on:{click:e.tapBack}},[e._v(" Back ")])]),n("div",{staticClass:"nav-title"},[e._t("default",[e._v(e._s(this.$router.history.current.meta.title))])],2)])},W=[],K=(n("ac1f"),n("466d"),{isInApp:function(){var e=navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)||"qq"==e.match(/QQ/i)}}),Q={name:"NavBar",props:{},computed:{shouldShow:function(){return!K.isInApp()},hasHistory:function(){return this.$pageHistory.length>=2}},data:function(){return{}},mounted:function(){},destory:function(){},methods:{tapBack:function(){this.$router.go(-1)}}},J=Q,ee=(n("a71f"),Object(F["a"])(J,G,W,!1,null,"07a8a4d7",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"has-nav-bar":!this.$agent.isInApp()}},[n("nav-bar"),n("div",{staticClass:"brand-list"},e._l(e.brands,(function(t){return n("div",{key:t.id},[n("router-link",{attrs:{to:{name:"vr",params:{id:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)})),0)],1)},oe=[],ae={name:"BrandList",computed:Object(c["a"])({},Object(r["c"])({brands:function(e){return e.brand.brands}})),methods:Object(c["a"])({},Object(r["b"])(["getBrands"])),mounted:function(){this.getBrands()}},re=ae,ie=Object(F["a"])(re,ne,oe,!1,null,null,null),se=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"has-nav-bar":!this.$agent.isInApp()}},[n("nav-bar"),e._m(0),n("div",{staticClass:"mobile-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"input-line mobile-input",attrs:{placeholder:"请输入手机号"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),n("button",{staticClass:"btn",on:{click:e.genCoupon}},[e._v("生成优惠码")])]),n("div",{staticClass:"code-area"},[n("div",{staticClass:"code-field",class:{"code-placeholder":!e.coupon.code}},[e._v(" "+e._s(e.coupon.code||"优惠券码")+" ")])]),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.coupon.code,expression:"coupon.code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-transparent",attrs:{type:"button"}},[e._v(" 复制券码 ")]),n("div",{staticClass:"description-field"},[e._v(" 使用方法 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ")]),n("div",{staticClass:"brand-list"},e._l(e.brands,(function(t){return n("span",{key:t.id,staticClass:"brand",class:{selected:e.selectedBrandId==t.id},on:{click:function(n){return e.selectBrand(t)}}},[e._v(" "+e._s(t.name)+" ")])})),0),e._m(1)],1)},ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-area"},[n("div",{staticClass:"gift-card"},[n("img",{staticClass:"logo",attrs:{src:"https://erdos-1302433443.cos.ap-shanghai.myqcloud.com/logo%403x.png",width:"162"}}),n("div",{staticClass:"text"},[n("span",{staticClass:"title"},[e._v("GIFT VOUCHER")]),n("span",{staticClass:"desc"},[e._v("1000元秋冬新品专享礼券")]),n("br"),n("span",{staticClass:"desc font-xs"},[e._v("2020 秋冬正价商品可用 | 使用期限：2020.00.00 - 2020.00.00")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"link-area"},[n("img",{staticClass:"qrcode",attrs:{src:"https://erdos-1302433443.cos.ap-shanghai.myqcloud.com/ERDOS-%E5%B0%8F%E7%A8%8B%E5%BA%8F%403x.png",width:"108"}}),n("button",{staticClass:"btn"},[e._v("进入小程序")])])}],le={name:"Coupons",data:function(){return{mobile:"",selectedBrandId:null}},computed:Object(c["a"])({},Object(r["c"])({brands:function(e){return e.brand.brands},coupon:function(e){return e.coupon.coupon}})),methods:Object(c["a"])(Object(c["a"])({},Object(r["b"])(["getBrands","achieveCoupon","getCoupons"])),{},{genCoupon:function(){this.achieveCoupon({mobile:this.mobile,brandId:this.selectedBrandId})},selectBrand:function(e){this.selectedBrandId=e.id},showCoupon:function(){this.getCoupons({mobile:this.mobile})},onCopy:function(){console.log("copy success")}}),mounted:function(){this.getBrands()}},de=le,pe=(n("0023"),Object(F["a"])(de,ce,ue,!1,null,null,null)),he=pe.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"has-nav-bar":!this.$agent.isInApp()}},[n("nav-bar"),n("swiper",{ref:"mySwiper",attrs:{options:e.swiperOptions}},[e._l(e.brands,(function(e){return n("swiper-slide",{key:e.id},[n("img",{attrs:{src:"http://192.168.3.152:8080/"+e.id+".jpg",height:"500"}})])})),n("swiper-slide",[n("img",{attrs:{src:"http://192.168.3.152:8080/3.jpg",height:"500"}})]),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),n("div",{staticClass:"brands-select"},e._l(e.brands,(function(t){return n("span",{key:t.id},[n("router-link",{attrs:{to:{name:"showroom",params:{id:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)})),0),n("div",{staticStyle:{width:"100%"},style:{height:"300px"}},[n("vr-viewer",{attrs:{href:"https://erdos-1302433443.cos.ap-shanghai.myqcloud.com/1%E9%A6%96%E9%A1%B5-1436.jpg",showFullScreenBtn:"",showControls:""},on:{fullScreen:e.tapVr}})],1)],1)},fe=[],ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"vr-viewer"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showControls,expression:"showControls"}],staticClass:"controls"},[n("button",{on:{click:e.useGyroscope}},[e._v("Gryoscope")]),n("button",{on:{click:e.useFinger}},[e._v("Finger")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showFullScreenBtn,expression:"showFullScreenBtn"}],staticClass:"fullscreen-btn"},[n("button",{on:{click:e.goFullscreen}},[e._v("VR Showroom")])]),n("div",{staticClass:"container"})])},be=[],ge=n("5a89"),we=(n("d3b7"),n("4c53"),n("ddb0"),function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new ge["q"],this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:ge["c"].ROTATE,MIDDLE:ge["c"].DOLLY,RIGHT:ge["c"].PAN},this.touches={ONE:ge["n"].ROTATE,TWO:ge["n"].DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),s=i.NONE},this.update=function(){var t=new ge["q"],a=(new ge["i"]).setFromUnitVectors(e.up,new ge["q"](0,1,0)),r=a.clone().inverse(),m=new ge["q"],f=new ge["i"];return function(){var e=n.object.position;return t.copy(e).sub(n.target),t.applyQuaternion(a),u.setFromVector3(t),n.autoRotate&&s===i.NONE&&_(E()),n.enableDamping?(u.theta+=l.theta*n.dampingFactor,u.phi+=l.phi*n.dampingFactor):(u.theta+=l.theta,u.phi+=l.phi),u.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=d,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),!0===n.enableDamping?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),t.setFromSpherical(u),t.applyQuaternion(r),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),p.set(0,0,0)),d=1,!!(h||m.distanceToSquared(n.object.position)>c||8*(1-f.dot(n.object.quaternion))>c)&&(n.dispatchEvent(o),m.copy(n.object.position),f.copy(n.object.quaternion),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie,!1),n.domElement.removeEventListener("mousedown",Q,!1),n.domElement.removeEventListener("wheel",te,!1),n.domElement.removeEventListener("touchstart",oe,!1),n.domElement.removeEventListener("touchend",re,!1),n.domElement.removeEventListener("touchmove",ae,!1),document.removeEventListener("mousemove",J,!1),document.removeEventListener("mouseup",ee,!1),n.domElement.removeEventListener("keydown",ne,!1)};var n=this,o={type:"change"},a={type:"start"},r={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,c=1e-6,u=new ge["m"],l=new ge["m"],d=1,p=new ge["q"],h=!1,m=new ge["p"],f=new ge["p"],v=new ge["p"],b=new ge["p"],g=new ge["p"],w=new ge["p"],x=new ge["p"],y=new ge["p"],O=new ge["p"];function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function j(){return Math.pow(.95,n.zoomSpeed)}function _(e){l.theta-=e}function C(e){l.phi-=e}var k=function(){var e=new ge["q"];return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),p.add(e)}}(),T=function(){var e=new ge["q"];return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),p.add(e)}}(),A=function(){var e=new ge["q"];return function(t,o){var a=n.domElement;if(n.object.isPerspectiveCamera){var r=n.object.position;e.copy(r).sub(n.target);var i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),k(2*t*i/a.clientHeight,n.object.matrix),T(2*o*i/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),T(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(e){n.object.isPerspectiveCamera?d/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(e){n.object.isPerspectiveCamera?d*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(e){m.set(e.clientX,e.clientY)}function S(e){x.set(e.clientX,e.clientY)}function R(e){b.set(e.clientX,e.clientY)}function B(e){f.set(e.clientX,e.clientY),v.subVectors(f,m).multiplyScalar(n.rotateSpeed);var t=n.domElement;_(2*Math.PI*v.x/t.clientHeight),C(2*Math.PI*v.y/t.clientHeight),m.copy(f),n.update()}function D(e){y.set(e.clientX,e.clientY),O.subVectors(y,x),O.y>0?P(j()):O.y<0&&L(j()),x.copy(y),n.update()}function F(e){g.set(e.clientX,e.clientY),w.subVectors(g,b).multiplyScalar(n.panSpeed),A(w.x,w.y),b.copy(g),n.update()}function M(){}function $(e){e.deltaY<0?L(j()):e.deltaY>0&&P(j()),n.update()}function Y(e){var t=!1;switch(e.keyCode){case n.keys.UP:A(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:A(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:A(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:A(-n.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),n.update())}function I(e){if(1==e.touches.length)m.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);m.set(t,n)}}function H(e){if(1==e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,n)}}function q(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);x.set(0,o)}function z(e){n.enableZoom&&q(e),n.enablePan&&H(e)}function V(e){n.enableZoom&&q(e),n.enableRotate&&I(e)}function X(e){if(1==e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,o)}v.subVectors(f,m).multiplyScalar(n.rotateSpeed);var a=n.domElement;_(2*Math.PI*v.x/a.clientHeight),C(2*Math.PI*v.y/a.clientHeight),m.copy(f)}function Z(e){if(1==e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,o)}w.subVectors(g,b).multiplyScalar(n.panSpeed),A(w.x,w.y),b.copy(g)}function U(e){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);y.set(0,a),O.set(0,Math.pow(y.y/x.y,n.zoomSpeed)),P(O.y),x.copy(y)}function G(e){n.enableZoom&&U(e),n.enablePan&&Z(e)}function W(e){n.enableZoom&&U(e),n.enableRotate&&X(e)}function K(){}function Q(e){if(!1!==n.enabled){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ge["c"].DOLLY:if(!1===n.enableZoom)return;S(e),s=i.DOLLY;break;case ge["c"].ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;R(e),s=i.PAN}else{if(!1===n.enableRotate)return;N(e),s=i.ROTATE}break;case ge["c"].PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;N(e),s=i.ROTATE}else{if(!1===n.enablePan)return;R(e),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&(document.addEventListener("mousemove",J,!1),document.addEventListener("mouseup",ee,!1),n.dispatchEvent(a))}}function J(e){if(!1!==n.enabled)switch(e.preventDefault(),s){case i.ROTATE:if(!1===n.enableRotate)return;B(e);break;case i.DOLLY:if(!1===n.enableZoom)return;D(e);break;case i.PAN:if(!1===n.enablePan)return;F(e);break}}function ee(e){!1!==n.enabled&&(M(e),document.removeEventListener("mousemove",J,!1),document.removeEventListener("mouseup",ee,!1),n.dispatchEvent(r),s=i.NONE)}function te(e){!1===n.enabled||!1===n.enableZoom||s!==i.NONE&&s!==i.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(a),$(e),n.dispatchEvent(r))}function ne(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&Y(e)}function oe(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(n.touches.ONE){case ge["n"].ROTATE:if(!1===n.enableRotate)return;I(e),s=i.TOUCH_ROTATE;break;case ge["n"].PAN:if(!1===n.enablePan)return;H(e),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ge["n"].DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;z(e),s=i.TOUCH_DOLLY_PAN;break;case ge["n"].DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;V(e),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(a)}}function ae(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),s){case i.TOUCH_ROTATE:if(!1===n.enableRotate)return;X(e),n.update();break;case i.TOUCH_PAN:if(!1===n.enablePan)return;Z(e),n.update();break;case i.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;G(e),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;W(e),n.update();break;default:s=i.NONE}}function re(e){!1!==n.enabled&&(K(e),n.dispatchEvent(r),s=i.NONE)}function ie(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",ie,!1),n.domElement.addEventListener("mousedown",Q,!1),n.domElement.addEventListener("wheel",te,!1),n.domElement.addEventListener("touchstart",oe,!1),n.domElement.addEventListener("touchend",re,!1),n.domElement.addEventListener("touchmove",ae,!1),n.domElement.addEventListener("keydown",ne,!1),-1===n.domElement.tabIndex&&(n.domElement.tabIndex=0),this.update()});we.prototype=Object.create(ge["b"].prototype),we.prototype.constructor=we;var xe=function(e,t){we.call(this,e,t),this.mouseButtons.LEFT=ge["c"].PAN,this.mouseButtons.RIGHT=ge["c"].ROTATE,this.touches.ONE=ge["n"].PAN,this.touches.TWO=ge["n"].DOLLY_ROTATE};xe.prototype=Object.create(ge["b"].prototype),xe.prototype.constructor=xe;var ye=function(e){var t=this;this.object=e,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alphaOffset=0;var n=function(e){t.deviceOrientation=e},o=function(){t.screenOrientation=window.orientation||0},a=function(){var e=new ge["q"](0,0,1),t=new ge["a"],n=new ge["i"],o=new ge["i"](-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(a,r,i,s,c){t.set(i,r,-s,"YXZ"),a.setFromEuler(t),a.multiply(o),a.multiply(n.setFromAxisAngle(e,-c))}}();this.connect=function(){o(),void 0!==window.DeviceOrientationEvent&&"function"===typeof window.DeviceOrientationEvent.requestPermission?window.DeviceOrientationEvent.requestPermission().then((function(e){"granted"==e&&(window.addEventListener("orientationchange",o,!1),window.addEventListener("deviceorientation",n,!1))})).catch((function(e){console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:",e)})):(window.addEventListener("orientationchange",o,!1),window.addEventListener("deviceorientation",n,!1)),t.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",o,!1),window.removeEventListener("deviceorientation",n,!1),t.enabled=!1},this.update=function(){if(!1!==t.enabled){var e=t.deviceOrientation;if(e){var n=e.alpha?ge["d"].degToRad(e.alpha)+t.alphaOffset:0,o=e.beta?ge["d"].degToRad(e.beta):0,r=e.gamma?ge["d"].degToRad(e.gamma):0,i=t.screenOrientation?ge["d"].degToRad(t.screenOrientation):0;a(t.object.quaternion,n,o,r,i)}}},this.dispose=function(){t.disconnect()},this.connect()},Oe={name:"VrViewer",props:{href:String,showControls:{type:Boolean,default:!1},showFullScreenBtn:{type:Boolean,default:!1}},data:function(){return{camera:null,scene:null,mesh:null,renderer:null,loop:!1,controls:null,gyroscope:null,mode:"Finger"}},created:function(){console.log("crerated")},mounted:function(){var e=this;console.log("init"),setTimeout((function(){e.init()}),400)},destory:function(){console.log("destory")},methods:{init:function(){var e=document.querySelector("#vr-viewer .container");this.camera=new ge["h"](70,e.clientWidth/e.clientHeight,.1,1e3),this.scene=new ge["k"];var t=new ge["o"],n=this;t.load(this.href,(function(e){e.maxFilter=ge["g"],e.minFilter=ge["g"],e.format=ge["j"];var t=new ge["f"]({map:e}),o=new ge["l"](10,60,60);o.scale(-1,1,1),n.mesh=new ge["e"](o,t),n.scene.add(n.mesh),n.startLoop()}),void 0,(function(e){console.log(e)})),this.renderer=new ge["r"],this.renderer.setSize(e.clientWidth,e.clientHeight),e.appendChild(this.renderer.domElement),this.controls=new we(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.rotateSpeed=-.25,this.controls.zoomSpeed=1.2,this.controls.enableZoom=!0,this.controls.minDistance=0,this.controls.maxDistance=5,this.gyroscope=new ye(this.camera),this.camera.target=new ge["q"](0,0,0),this.camera.position=new ge["q"](0,0,1)},controlChanged:function(){},touchStart:function(){},touchEnd:function(){},startLoop:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.loop||(this.loop=!0,this.render())},endLoop:function(){if(this.loop){var e=this;this.timer=setTimeout((function(){e.loop=!1}),500)}},render:function(){this.loop&&requestAnimationFrame(this.render),"Finger"==this.mode?this.controls.update():this.gyroscope.update(),this.renderer.render(this.scene,this.camera)},useFinger:function(){this.mode="Finger",this.gyroscope.disconnect(),this.controls.update()},useGyroscope:function(){this.mode="Gyroscope",this.gyroscope.connect()},goFullscreen:function(){console.log("full screen"),this.$emit("fullScreen")}}},Ee=Oe,je=(n("8a5e"),Object(F["a"])(Ee,ve,be,!1,null,"491cba74",null)),_e=je.exports,Ce=n("7212"),ke=(n("a7a3"),{name:"Home",computed:Object(c["a"])({},Object(r["c"])({brands:function(e){return e.brand.brands}})),methods:Object(c["a"])(Object(c["a"])({},Object(r["b"])(["getBrands"])),{},{tapVr:function(){this.$router.push({name:"brands"})}}),data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"},direction:"horizontal",loop:!0}}},components:{Swiper:Ce["Swiper"],SwiperSlide:Ce["SwiperSlide"],VrViewer:_e},mounted:function(){this.$api.getVersion().then((function(e){console.log(e)})),this.getBrands()}}),Te=ke,Ae=(n("89f1"),Object(F["a"])(Te,me,fe,!1,null,null,null)),Pe=Ae.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"has-nav-bar":!this.$agent.isInApp()}},[n("nav-bar")],1)},Ne=[],Se={name:"Lookbook"},Re=Se,Be=Object(F["a"])(Re,Le,Ne,!1,null,null,null),De=Be.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panorama-view",class:{"has-nav-bar":!this.$agent.isInApp()}},[n("nav-bar",[e._v("VR")]),n("div",{attrs:{id:"info"}}),n("div",{staticStyle:{width:"100%"},style:{height:e.height+"px"}},[n("vr",{attrs:{href:"http://192.168.3.152:8080/5c599f6edf8f4c79bed40aea4b601fd3.jpg",showControls:""}})],1)],1)},Me=[],$e={name:"Panarama",components:{vr:_e},mounted:function(){},computed:{height:function(){return window.innerHeight}},methods:{}},Ye=$e,Ie=Object(F["a"])(Ye,Fe,Me,!1,null,"6e6ff94e",null),He=Ie.exports,qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"has-nav-bar":!this.$agent.isInApp()}},[n("nav-bar",[e._v(e._s(e.brand.name))]),n("video-container",{attrs:{href:"http://192.168.3.152:8080/behinder.mp4",type:"video/mp4",poster:"http://192.168.3.152:8080/1.jpg"}}),e._l([4,5,6,7,8,9],(function(e){return n("img",{key:e,staticStyle:{width:"100%"},attrs:{src:"http://192.168.3.152:8080/"+e+".jpg"}})})),n("div",{staticStyle:{width:"100%"},style:{height:"300px"}},[n("vr-viewer",{attrs:{href:"http://192.168.3.152:3000/5c599f6edf8f4c79bed40aea4b601fd3.jpg",showFullScreenBtn:""},on:{fullScreen:e.gotoVr}})],1),n("div",[n("router-link",{attrs:{to:"lookbook"}},[e._v("Look Book")])],1)],2)},ze=[],Ve=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:"poster"==e.state,expression:"state == 'poster'"}],staticStyle:{position:"relative"}},[n("div",{staticClass:"play-btn",on:{click:e.startPlay}},[e._v("Play")]),n("img",{directives:[{name:"show",rawName:"v-show",value:e.poster,expression:"poster"}],staticStyle:{width:"100%",height:"100%"},attrs:{src:e.poster}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:"video"==e.state,expression:"state == 'video'"}]},[n("video",{staticClass:"video-js",attrs:{id:"video",controls:"",width:"100%",height:"500"}},[n("source",{attrs:{src:e.href,type:e.type}}),e._m(0)])])])}),Xe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"vjs-no-js"},[e._v(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),n("a",{attrs:{href:"https://videojs.com/html5-video-support/",target:"_blank"}},[e._v("supports HTML5 video")])])}],Ze={name:"NavBar",props:{href:null,type:null,poster:null},computed:{},data:function(){return{state:"poster"}},mounted:function(){},destory:function(){},methods:{startPlay:function(){this.state="video",document.getElementById("video").play()}}},Ue=Ze,Ge=(n("1a8f"),Object(F["a"])(Ue,Ve,Xe,!1,null,"4a7736c7",null)),We=Ge.exports,Ke={name:"ShowRoom",components:{VrViewer:_e,VideoContainer:We},computed:Object(c["a"])({},Object(r["c"])({brand:function(e){return e.brand.brand}})),mounted:function(){this.refreshBrand()},methods:Object(c["a"])(Object(c["a"])({},Object(r["b"])(["getBrand"])),{},{refreshBrand:function(){var e=this;this.getBrand(this.$route.params.id).then((function(){document.title=e.brand.name}))},gotoVr:function(){this.$router.push({name:"vr",params:{id:this.brand.id}})}}),watch:{$route:function(){this.refreshBrand()}}},Qe=Ke,Je=Object(F["a"])(Qe,qe,ze,!1,null,null,null),et=Je.exports,tt={routes:[{name:"home",path:"/",component:Pe,meta:{title:"AW 2020 云上发布会"}},{name:"brands",path:"/brands",component:se,meta:{title:"Brands"}},{name:"vr",path:"/brands/:id/vr",component:He},{name:"showroom",path:"/brands/:id/show_room",component:et},{path:"/brands/:id/lookbook",component:De,meta:{title:"Lookbook"}},{path:"/coupons",component:he,meta:{title:"Erdos秋季新品专享礼券"}},{path:"*",component:{}}]},nt={state:function(){return{brands:[],brand:{}}},mutations:{},actions:{getBrands:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.getBrands();case 2:n=t.sent,e.state.brands=n.brands;case 4:case"end":return t.stop()}}),t)})))()},getBrand:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,k.getBrand(t);case 2:o=n.sent,e.state.brand=o.brand;case 4:case"end":return n.stop()}}),n)})))()}},getters:{}},ot={state:function(){return{coupon:{}}},mutations:{},actions:{achieveCoupon:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,k.achieveCoupon(t.mobile,t.brandId);case 2:o=n.sent,o.coupon?e.state.coupon=o.coupon:console.log(o.status,o.message);case 4:case"end":return n.stop()}}),n)})))()},getCoupons:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,k.getCoupons(t.mobile);case 2:o=n.sent,o.coupons?e.state.coupon=o.coupons[0]:console.log(o.status,o.message);case 4:case"end":return n.stop()}}),n)})))()}},getters:{}},at={state:{appName:"Erdos"},mutations:{},actions:{},getters:{},modules:{brand:nt,coupon:ot}};n("8a71");o["default"].use(a["a"]),o["default"].use(r["a"]),o["default"].use(s.a),o["default"].use(U),o["default"].config.productionTip=!1,o["default"].component("nav-bar",te),o["default"].prototype.$api=k,o["default"].prototype.$agent=K;var rt=new a["a"]({routes:tt.routes,scrollBehavior:function(){return{x:0,y:0}}}),it="2020 AW 云上发布会",st=[];o["default"].prototype.$pageHistory=st,rt.beforeEach((function(e,t,n){document.title=e.meta.title||it,K.isInApp()||(e.path==st[st.length-2]&&t.path==st[st.length-1]?st.pop():st.push(e.path)),n()}));var ct=new r["a"].Store(at);new o["default"]({router:rt,store:ct}).$mount("#app")},"89f1":function(e,t,n){"use strict";var o=n("fca2"),a=n.n(o);a.a},"8a5e":function(e,t,n){"use strict";var o=n("9846"),a=n.n(o);a.a},"8a71":function(e,t,n){},"952e":function(e,t,n){},9846:function(e,t,n){},a71f:function(e,t,n){"use strict";var o=n("952e"),a=n.n(o);a.a},b19e:function(e,t,n){},d9a2:function(e,t,n){},da20:function(e,t,n){},ed2b:function(e,t,n){"use strict";var o=n("d9a2"),a=n.n(o);a.a},fca2:function(e,t,n){}});
//# sourceMappingURL=app.a8ddabba.js.map
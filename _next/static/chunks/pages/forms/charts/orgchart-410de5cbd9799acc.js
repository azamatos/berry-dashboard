(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3794],{73579:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=o.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));var a=n=i(i({},n),t);if(a.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(a.suspense)return r(a);n.loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};s(r(67294));var o=s(r(23668));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},3982:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},23668:function(e,t,r){"use strict";var n=r(33227),a=r(88361),i=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,d=(u=r(67294))&&u.__esModule?u:{default:u},p=r(67161),m=r(3982);var f=[],h=[],g=!1;function y(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var b=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=d.default.lazy(r.loader));var n=null;function a(){if(!n){var t=new b(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!g&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&h.push((function(e){var t,r=l(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(o){r.e(o)}finally{r.f()}}))}var o=r.suspense?function(e,t){return d.default.createElement(r.lazy,s(s({},e),{},{ref:t}))}:function(e,t){a();var i=d.default.useContext(m.LoadableContext),o=p.useSubscription(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return o.loading||o.error?d.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:n.retry}):o.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return o.preload=function(){return!r.suspense&&a()},o.displayName="LoadableComponent",d.default.forwardRef(o)}(y,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){w(f).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return g=!0,t()};w(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var x=v;t.default=x},18776:function(e,t,r){"use strict";var n=r(59499),a=r(4730),i=r(2734),o=r(87952),s=r(85893),l=["className","color","outline","size","sx"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){e.className;var t=e.color,r=e.outline,n=e.size,c=e.sx,d=(0,a.Z)(e,l),p=(0,i.Z)(),m=t&&!r&&{color:p.palette.background.paper,bgcolor:"".concat(t,".main")},f=r&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:p.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(n){case"badge":h={width:p.spacing(3.5),height:p.spacing(3.5)};break;case"xs":h={width:p.spacing(4.25),height:p.spacing(4.25)};break;case"sm":h={width:p.spacing(5),height:p.spacing(5)};break;case"lg":h={width:p.spacing(9),height:p.spacing(9)};break;case"xl":h={width:p.spacing(10.25),height:p.spacing(10.25)};break;case"md":h={width:p.spacing(7.5),height:p.spacing(7.5)};break;default:h={}}return(0,s.jsx)(o.Z,u({sx:u(u(u(u({},m),f),h),c)},d))}},9202:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(67294),a=r(15861),i=r(86886),o=r(78445),s=r(66242),l=r(2734),c=r(5152),u=r(7941),d=r(78462),p=r(19294),m=r(18987),f=r(59334),h=r(26447),g=r(87357),y=r(87918),b=r(93946),v=r(85893);var w=function(){return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 48 48",children:[(0,v.jsx)("path",{fill:"#03a9f4",d:"M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"}),(0,v.jsx)("path",{fill:"#03a9f4",d:"M33.5 22A11.5 11.5 0 1 0 33.5 45 11.5 11.5 0 1 0 33.5 22zM14.5 3A11.5 11.5 0 1 0 14.5 26 11.5 11.5 0 1 0 14.5 3z"}),(0,v.jsx)("path",{fill:"#fff",d:"M24.602,36C18,36,15,32.699,15,30.199C15,28.898,15.898,28,17.199,28c2.801,0,2.102,4.102,7.402,4.102c2.699,0,4.199-1.5,4.199-3c0-0.902-0.402-1.902-2.199-2.402l-5.902-1.5C16,24,15.102,21.398,15.102,18.898c0-5.098,4.699-6.898,9.098-6.898C28.301,12,33,14.199,33,17.199c0,1.301-1,2.102-2.301,2.102c-2.398,0-2-3.402-6.801-3.402c-2.398,0-3.797,1.102-3.797,2.703c0,1.598,1.898,2.098,3.598,2.5l4.402,1C32.898,23.199,34,26,34,28.699C33.898,32.898,30.898,36,24.602,36z"})]})};var x=function(){return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 48 48",children:[(0,v.jsx)("rect",{width:"16",height:"16",x:"12",y:"16",fill:"#fff",transform:"rotate(-90 20 24)"}),(0,v.jsx)("polygon",{fill:"#1e88e5",points:"3,17 3,31 8,32 13,31 13,17 8,16"}),(0,v.jsx)("path",{fill:"#4caf50",d:"M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"}),(0,v.jsx)("path",{fill:"#fbc02d",d:"M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"}),(0,v.jsx)("path",{fill:"#1565c0",d:"M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"}),(0,v.jsx)("polygon",{fill:"#e53935",points:"13,7 13,17 3,17"}),(0,v.jsx)("polygon",{fill:"#2e7d32",points:"38,24 37,32.45 27,24 37,15.55"}),(0,v.jsx)("path",{fill:"#4caf50",d:"M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"})]})};var k=function(){return(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24",height:"24",viewBox:"0 0 48 48",children:[(0,v.jsx)("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"}),(0,v.jsx)("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})]})},j=r(18776);var O=function(e){var t=e.name,r=e.role,n=e.avatar,i=e.linkedin,o=e.meet,s=e.skype,c=e.root,O=function(e){window.open(e)},_=(0,l.Z)(),C="dark"===_.palette.mode?"dark.800":"grey.100",P="dark"===_.palette.mode?"dark.900":"secondary.light";return(0,v.jsx)(u.Z,{sx:{bgcolor:c?P:C,border:c?"1px solid ".concat(_.palette.primary.main):"1px solid".concat(_.palette.secondary.main),width:"max-content",m:"0px auto"},content:!1,children:(0,v.jsxs)(d.Z,{sx:{width:"100%",border:"transparent",p:1.5},children:[(0,v.jsxs)(p.ZP,{sx:{p:0,alignItems:"flex-start"},children:[(0,v.jsx)(m.Z,{children:(0,v.jsx)(j.Z,{src:n,size:"sm"})}),(0,v.jsx)(f.Z,{sx:{m:0},primary:(0,v.jsx)(a.Z,{variant:"subtitle1",sx:{color:c?"primary.dark":"secondary.dark"},children:t})})]}),(0,v.jsxs)(h.Z,{spacing:2,sx:{pl:7,mt:-1.75},children:[(0,v.jsxs)(g.Z,{sx:{display:"flex"},children:[!c&&(0,v.jsx)(y.Z,{label:r,sx:{fontSize:"0.625rem",height:20,"& .MuiChip-label":{px:.75}},color:"primary",variant:"outlined",size:"small"}),c&&(0,v.jsx)(a.Z,{sx:{color:"secondary.dark"},variant:"caption",children:r})]}),(0,v.jsxs)(h.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,v.jsx)(b.Z,{onClick:function(){return O(i)},size:"small",sx:{bgcolor:"dark"===_.palette.mode?"dark.main":"background.paper",borderRadius:1,p:.25},children:(0,v.jsx)(k,{})}),(0,v.jsx)(b.Z,{onClick:function(){return O(o)},size:"small",sx:{bgcolor:"dark"===_.palette.mode?"dark.main":"background.paper",borderRadius:1,p:.25},children:(0,v.jsx)(x,{})}),(0,v.jsx)(b.Z,{onClick:function(){return O(s)},size:"small",sx:{bgcolor:"dark"===_.palette.mode?"dark.main":"background.paper",borderRadius:1,p:.25},children:(0,v.jsx)(w,{})})]})]})]})})},_=(0,c.default)((function(){return r.e(3917).then(r.bind(r,63917)).then((function(e){return e.TreeNode}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[63917]}}});var C=function e(t){var r=t.items;return(0,v.jsx)(v.Fragment,{children:r.map((function(t,r){return(0,v.jsx)(n.Fragment,{children:t.children?(0,v.jsx)(_,{label:(0,v.jsx)(O,{name:t.name,role:t.role,avatar:t.avatar,linkedin:t.linkedin,meet:t.meet,skype:t.skype,root:!1}),children:(0,v.jsx)(e,{items:t.children})}):(0,v.jsx)(_,{label:(0,v.jsx)(O,{name:t.name,role:t.role,avatar:t.avatar,linkedin:t.linkedin,meet:t.meet,skype:t.skype,root:!1})})},r)}))})},P=r(53147),Z=r(21955),E=(0,c.default)((function(){return r.e(3917).then(r.bind(r,63917)).then((function(e){return e.Tree}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[63917]}}}),M=(0,c.default)((function(){return r.e(3917).then(r.bind(r,63917)).then((function(e){return e.TreeNode}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[63917]}}}),z=[{name:"Anne Teak",role:"CEO",avatar:"https://i.pravatar.cc/100?img=3",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Colin Sik",role:"CFO",avatar:"https://i.pravatar.cc/100?img=1",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Karen Onnabit",role:"Controller",avatar:"https://i.pravatar.cc/100?img=2",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"}]},{name:"Jen Tile",role:"VP of Marketing",avatar:"https://i.pravatar.cc/100?img=4",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Anne Thurium",role:"Manager",avatar:"https://i.pravatar.cc/100?img=5",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Liz Erd",role:"Junior Manager",avatar:"https://i.pravatar.cc/100?img=6",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"},{name:"Percy Vere",role:"Programmer",avatar:"https://i.pravatar.cc/100?img=7",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"}]}]},{name:"Harriet Upp",role:"VP of IT",avatar:"https://i.pravatar.cc/100?img=8",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/",children:[{name:"Mark Ateer",role:"System Admin",avatar:"https://i.pravatar.cc/100?img=6",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"},{name:"Dave Allippa",role:"System Admin",avatar:"https://i.pravatar.cc/100?img=7",linkedin:"https://www.linkedin.com/",meet:"https://meet.google.com/",skype:"https://www.skype.com/en/"}]}]}];function D(e){var t=e.name,r=(0,l.Z)();return(0,v.jsx)(a.Z,{sx:{p:2,border:"1px solid ".concat("dark"===r.palette.mode?r.palette.secondary.main:r.palette.primary.main),width:"max-content",m:"auto",color:"dark"===r.palette.mode?"text.secondary":"secondary.dark",bgcolor:"dark"===r.palette.mode?"background.default":"secondary.light",borderRadius:1},children:t})}function S(e){var t=e.items;return(0,v.jsx)(v.Fragment,{children:t.map((function(e,t){return(0,v.jsx)(n.Fragment,{children:e.children?(0,v.jsx)(M,{label:(0,v.jsx)(D,{name:e.name}),children:(0,v.jsx)(S,{items:e.children})}):(0,v.jsx)(M,{label:(0,v.jsx)(D,{name:e.name})})},t)}))})}var A=function(){var e=(0,l.Z)(),t=(0,Z.I0)();return(0,n.useEffect)((function(){t((0,P.FJ)(!1))}),[]),(0,v.jsxs)(i.ZP,{container:!0,rowSpacing:2,justifyContent:"center",children:[(0,v.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,v.jsx)(s.Z,{children:(0,v.jsx)(o.Z,{title:"Organization Chart"})})}),(0,v.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,v.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,v.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,v.jsx)(u.Z,{title:"Simple Chart",sx:{overflow:"auto"},children:(0,v.jsx)(E,{lineWidth:"1px",lineColor:e.palette.secondary.main,lineBorderRadius:"10px",label:(0,v.jsx)(D,{name:z[0].name}),children:(0,v.jsx)(S,{items:z[0].children})})})}),(0,v.jsx)(i.ZP,{item:!0,md:12,lg:12,xs:12,children:(0,v.jsx)(u.Z,{title:"Styled Chart",sx:{overflow:"auto"},children:(0,v.jsx)(E,{lineWidth:"1px",lineColor:e.palette.secondary.main,lineBorderRadius:"10px",label:(0,v.jsx)(O,{name:z[0].name,role:z[0].role,avatar:z[0].avatar,linkedin:z[0].linkedin,meet:z[0].meet,skype:z[0].skype,root:!0}),children:(0,v.jsx)(C,{items:z[0].children})})})})]})})]})};A.Layout="authGuard";var T=A},46467:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/charts/orgchart",function(){return r(9202)}])},5152:function(e,t,r){e.exports=r(73579)},68217:function(e,t,r){"use strict";var n=r(96086),a=r(67294);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,i=a.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=i[0];var o=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===r||(i=t(),o({getCurrentValue:t,subscribe:r,value:i})),a.useDebugValue(i),a.useEffect((function(){function e(){if(!a){var e=t();o((function(a){return a.getCurrentValue!==t||a.subscribe!==r||a.value===e?a:n({},a,{value:e})}))}}var a=!1,i=r(e);return e(),function(){a=!0,i()}}),[t,r]),i}},67161:function(e,t,r){"use strict";e.exports=r(68217)}},function(e){e.O(0,[9774,2888,179],(function(){return t=46467,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3983],{69368:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(63366),s=r(87462),i=r(67294),o=r(27192),l=r(41796),c=r(21964),a=r(82066),x=r(85893),d=(0,a.Z)((0,x.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,a.Z)((0,x.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,a.Z)((0,x.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=r(98216),j=r(33616),Z=r(90948),p=r(28979);function g(e){return(0,p.Z)("MuiCheckbox",e)}var f=(0,r(76087).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const P=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],b=(0,Z.ZP)(c.Z,{shouldForwardProp:e=>(0,Z.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,"default"!==r.color&&t[`color${(0,u.Z)(r.color)}`]]}})((({theme:e,ownerState:t})=>(0,s.Z)({color:e.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${f.checked}, &.${f.indeterminate}`]:{color:e.palette[t.color].main},[`&.${f.disabled}`]:{color:e.palette.action.disabled}}))),v=(0,x.jsx)(h,{}),y=(0,x.jsx)(d,{}),O=(0,x.jsx)(m,{});var w=i.forwardRef((function(e,t){var r,l;const c=(0,j.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:a=v,color:d="primary",icon:h=y,indeterminate:m=!1,indeterminateIcon:Z=O,inputProps:p,size:f="medium"}=c,w=(0,n.Z)(c,P),k=m?Z:h,E=m?Z:a,z=(0,s.Z)({},c,{color:d,indeterminate:m,size:f}),C=(e=>{const{classes:t,indeterminate:r,color:n}=e,i={root:["root",r&&"indeterminate",`color${(0,u.Z)(n)}`]},l=(0,o.Z)(i,g,t);return(0,s.Z)({},t,l)})(z);return(0,x.jsx)(b,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":m},p),icon:i.cloneElement(k,{fontSize:null!=(r=k.props.fontSize)?r:f}),checkedIcon:i.cloneElement(E,{fontSize:null!=(l=E.props.fontSize)?l:f}),ownerState:z,ref:t},w,{classes:C}))}))},8298:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(87462),s=r(63366),i=r(67294);const o=["getTrigger","target"];function l(e,t){const{disableHysteresis:r=!1,threshold:n=100,target:s}=t,i=e.current;return s&&(e.current=void 0!==s.pageYOffset?s.pageYOffset:s.scrollTop),!(!r&&void 0!==i&&e.current<i)&&e.current>n}const c="undefined"!==typeof window?window:null;function a(e={}){const{getTrigger:t=l,target:r=c}=e,a=(0,s.Z)(e,o),x=i.useRef(),[d,h]=i.useState((()=>t(x,a)));return i.useEffect((()=>{const e=()=>{h(t(x,(0,n.Z)({target:r},a)))};return e(),r.addEventListener("scroll",e),()=>{r.removeEventListener("scroll",e)}}),[r,t,JSON.stringify(a)]),d}},37514:function(e,t,r){"use strict";var n=r(4730),s=r(59499),i=r(90948),o=r(47312),l=r(85893),c=["children","horizontal"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=(0,i.ZP)((function(e){return(0,l.jsx)(o.Z,x({},e))}),{shouldForwardProp:function(e){return"horizontal"!==e}})((function(e){var t=e.theme,r=e.horizontal;return{color:t.palette.text.primary,fontWeight:500,marginBottom:r?0:8}})),h=function(e){var t=e.children,r=e.horizontal,s=(0,n.Z)(e,c);return(0,l.jsx)(d,x(x({horizontal:r},s),{},{children:t}))};h.defaultProps={horizontal:!1},t.Z=h},46255:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(59499),s=r(36864),i=r(2734),o=r(86886),l=r(62023),c=r(15861),a=r(11057),x=r(67720),d=r(44267),h=r(87952),m=r(50135),u=r(56815),j=r(50480),Z=r(69368),p=r(7941),g=r(37514),f=r(67294),P=r(98396),b=r(8298),v=r(21955);var y=function(e){var t=e.children,r=e.window,n=(0,i.Z)(),s=(0,P.Z)(n.breakpoints.down("lg")),o=(0,v.v9)((function(e){return e.menu})).drawerOpen,l=s?80:83,c=s?38:41,a=s?38:o?281:42,x=(0,b.Z)({disableHysteresis:!0,threshold:180,target:r||void 0}),d="dark"===n.palette.mode?n.palette.dark.dark:n.palette.grey[200];return f.cloneElement(t,{style:{backgroundColor:n.palette.background.default,zIndex:1099,borderTop:x?"1px solid":"none",borderBottom:x?"1px solid":"none",borderColor:x?d:"",position:x?"fixed":"relative",top:x?l:"auto",right:x?c:"auto",left:x?a:"auto"}})},O=r(86924),w=r(63991),k=r(85893);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e){var t=(0,s.Z)({},e),r=(0,i.Z)();return(0,k.jsx)(o.ZP,{container:!0,spacing:O.dv,children:(0,k.jsx)(o.ZP,{item:!0,xs:12,children:(0,k.jsxs)(p.Z,{title:"Top & Bottom Actions Bars",content:!1,children:[(0,k.jsx)(y,z(z({},t),{},{children:(0,k.jsx)(l.Z,{children:(0,k.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:2,children:[(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsx)(c.Z,{variant:"h5",sx:{m:0},children:"Sticky Action Bar:"})}),(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyContent:"flex-end",spacing:2,children:[(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsx)(a.Z,{variant:"contained",color:"secondary",children:"Submit"})}),(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsx)(a.Z,{variant:"contained",children:"Clear"})})]})})]})})})),(0,k.jsx)(x.Z,{}),(0,k.jsx)(d.Z,{children:(0,k.jsxs)(o.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,k.jsx)(o.ZP,{item:!0,xs:12,children:(0,k.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(h.Z,{variant:"rounded",color:"inherit",sx:{bgcolor:r.palette.secondary.main,ml:"auto"},children:(0,k.jsx)(w.n0o,{color:"#fff"})})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(c.Z,{variant:"h3",sx:{mb:0},children:"Personal Information"}),(0,k.jsx)(c.Z,{variant:"body2",sx:{mb:2},children:"Sticky Action Bar Lorem Ipsum is simply"})]})]})}),(0,k.jsx)(o.ZP,{item:!0,xs:12,children:(0,k.jsx)(x.Z,{})}),(0,k.jsx)(o.ZP,{item:!0,xs:12,children:(0,k.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:(0,k.jsx)(c.Z,{variant:"h5",component:"div",sx:{mb:3},children:"A. Personal Info:"})}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Name :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(m.Z,{fullWidth:!0,placeholder:"Enter full name"}),(0,k.jsx)(u.Z,{children:"Please enter your full name"})]}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Email :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(m.Z,{fullWidth:!0,placeholder:"Enter email"}),(0,k.jsx)(u.Z,{children:"Please enter your Email"})]}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Password :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(m.Z,{fullWidth:!0,placeholder:"Enter Password"}),(0,k.jsx)(u.Z,{children:"Please enter your Password"})]})]})}),(0,k.jsx)(o.ZP,{item:!0,xs:12,children:(0,k.jsx)(x.Z,{})}),(0,k.jsx)(o.ZP,{item:!0,xs:12,children:(0,k.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:(0,k.jsx)(c.Z,{variant:"h5",component:"div",sx:{mb:3},children:"B. Educational Info:"})}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Degree Name :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(m.Z,{fullWidth:!0,placeholder:"Enter Degree name"}),(0,k.jsx)(u.Z,{children:"Please enter your Degree name"})]}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Passing Year :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(m.Z,{fullWidth:!0,placeholder:"Enter Passing Year"}),(0,k.jsx)(u.Z,{children:"Please enter Passing Year"})]}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"College Name :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(m.Z,{fullWidth:!0,placeholder:"Enter College name"}),(0,k.jsx)(u.Z,{children:"Please enter your College name"})]}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Work Experience :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(m.Z,{fullWidth:!0,placeholder:"Enter Work Experience"}),(0,k.jsx)(u.Z,{children:"Please enter your Work Experience"})]}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"1 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Language :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(j.Z,{control:(0,k.jsx)(Z.Z,{defaultChecked:!0}),label:"English"}),(0,k.jsx)(j.Z,{control:(0,k.jsx)(Z.Z,{}),label:"French"}),(0,k.jsx)(j.Z,{control:(0,k.jsx)(Z.Z,{}),label:"Dutch"})]}),(0,k.jsx)(o.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"1 !important"}},children:(0,k.jsx)(g.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Hobby :"})}),(0,k.jsxs)(o.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,k.jsx)(j.Z,{control:(0,k.jsx)(Z.Z,{}),label:"Reading"}),(0,k.jsx)(j.Z,{control:(0,k.jsx)(Z.Z,{}),label:"Dancing"}),(0,k.jsx)(j.Z,{control:(0,k.jsx)(Z.Z,{}),label:"Swimming"})]})]})})]})}),(0,k.jsx)(x.Z,{}),(0,k.jsx)(l.Z,{children:(0,k.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,k.jsx)(o.ZP,{item:!0,xs:12,lg:4}),(0,k.jsx)(o.ZP,{item:!0,xs:12,lg:6,children:(0,k.jsxs)(o.ZP,{container:!0,alignItems:"center",spacing:2,children:[(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsx)(a.Z,{variant:"contained",color:"secondary",children:"Submit"})}),(0,k.jsx)(o.ZP,{item:!0,children:(0,k.jsx)(a.Z,{variant:"contained",children:"Clear"})})]})})]})})]})})})}C.Layout="authGuard";var I=C},28569:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/layouts/sticky-action-bar",function(){return r(46255)}])},36864:function(e,t,r){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[9774,2888,179],(function(){return t=28569,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
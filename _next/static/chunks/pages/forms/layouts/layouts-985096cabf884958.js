(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1580],{69368:function(e,n,s){"use strict";s.d(n,{Z:function(){return z}});var r=s(63366),t=s(87462),l=s(67294),i=s(27192),o=s(41796),c=s(21964),a=s(82066),x=s(85893),h=(0,a.Z)((0,x.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=(0,a.Z)((0,x.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,a.Z)((0,x.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),Z=s(98216),j=s(33616),u=s(90948),p=s(28979);function P(e){return(0,p.Z)("MuiCheckbox",e)}var g=(0,s(76087).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const f=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],b=(0,u.ZP)(c.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:s}=e;return[n.root,s.indeterminate&&n.indeterminate,"default"!==s.color&&n[`color${(0,Z.Z)(s.color)}`]]}})((({theme:e,ownerState:n})=>(0,t.Z)({color:e.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:(0,o.Fq)("default"===n.color?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${g.checked}, &.${g.indeterminate}`]:{color:e.palette[n.color].main},[`&.${g.disabled}`]:{color:e.palette.action.disabled}}))),v=(0,x.jsx)(d,{}),E=(0,x.jsx)(h,{}),y=(0,x.jsx)(m,{});var z=l.forwardRef((function(e,n){var s,o;const c=(0,j.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:a=v,color:h="primary",icon:d=E,indeterminate:m=!1,indeterminateIcon:u=y,inputProps:p,size:g="medium"}=c,z=(0,r.Z)(c,f),k=m?u:d,w=m?u:a,O=(0,t.Z)({},c,{color:h,indeterminate:m,size:g}),I=(e=>{const{classes:n,indeterminate:s,color:r}=e,l={root:["root",s&&"indeterminate",`color${(0,Z.Z)(r)}`]},o=(0,i.Z)(l,P,n);return(0,t.Z)({},n,o)})(O);return(0,x.jsx)(b,(0,t.Z)({type:"checkbox",inputProps:(0,t.Z)({"data-indeterminate":m},p),icon:l.cloneElement(k,{fontSize:null!=(s=k.props.fontSize)?s:g}),checkedIcon:l.cloneElement(w,{fontSize:null!=(o=w.props.fontSize)?o:g}),ownerState:O,ref:n},z,{classes:I}))}))},37514:function(e,n,s){"use strict";var r=s(4730),t=s(59499),l=s(90948),i=s(47312),o=s(85893),c=["children","horizontal"];function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}function x(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){(0,t.Z)(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}var h=(0,l.ZP)((function(e){return(0,o.jsx)(i.Z,x({},e))}),{shouldForwardProp:function(e){return"horizontal"!==e}})((function(e){var n=e.theme,s=e.horizontal;return{color:n.palette.text.primary,fontWeight:500,marginBottom:s?0:8}})),d=function(e){var n=e.children,s=e.horizontal,t=(0,r.Z)(e,c);return(0,o.jsx)(h,x(x({horizontal:s},t),{},{children:n}))};d.defaultProps={horizontal:!1},n.Z=d},60894:function(e,n,s){"use strict";s.r(n);var r=s(86886),t=s(50135),l=s(56815),i=s(53457),o=s(50480),c=s(69368),a=s(15861),x=s(67720),h=s(7941),d=s(37514),m=s(86924),Z=s(85893);function j(){return(0,Z.jsxs)(r.ZP,{container:!0,spacing:m.dv,children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,Z.jsx)(h.Z,{title:"Simple Form Layout",children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Name"}),(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter full name"}),(0,Z.jsx)(l.Z,{children:"Please enter your full name"})]}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Email"}),(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter email"}),(0,Z.jsx)(l.Z,{children:"Please enter your Email"})]}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Password"}),(0,Z.jsx)(t.Z,{type:"password",fullWidth:!0,placeholder:"Enter Password"})]}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Language"}),(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{defaultChecked:!0}),label:"English"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"French"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"Dutch"})]})]})]})})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,Z.jsx)(h.Z,{title:"Horizontal Form Layout",children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(a.Z,{variant:"h5",component:"div",sx:{mb:3},children:"A. Personal Info:"}),(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,children:"Name"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter full name"}),(0,Z.jsx)(l.Z,{children:"Please enter your full name"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,children:"Email"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter email"}),(0,Z.jsx)(l.Z,{children:"Please enter your Email"})]})]})]}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(a.Z,{variant:"h5",component:"div",sx:{mb:3},children:"B. Educational Info:"}),(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,children:"Degree Name"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter Degree name"}),(0,Z.jsx)(l.Z,{children:"Please enter your Degree name"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,children:"Passing Year"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter Passing Year"}),(0,Z.jsx)(l.Z,{children:"Please enter Passing Year"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,children:"Language"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{defaultChecked:!0}),label:"English"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"French"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"Dutch"})]})]})]})]})})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,Z.jsx)(h.Z,{title:"Control Divider",children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Name"}),(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter full name"}),(0,Z.jsx)(l.Z,{children:"Please enter your full name"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(x.Z,{})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Email"}),(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter email"}),(0,Z.jsx)(l.Z,{children:"Please enter your Email"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(x.Z,{})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Password"}),(0,Z.jsx)(t.Z,{type:"password",fullWidth:!0,placeholder:"Enter Password"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(x.Z,{})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(d.Z,{children:"Language"}),(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{defaultChecked:!0}),label:"English"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"French"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"Dutch"})]})]})]})})}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,Z.jsx)(h.Z,{title:"Input Label Alignment",children:(0,Z.jsxs)(r.ZP,{container:!0,spacing:3,alignItems:"center",children:[(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(a.Z,{variant:"h5",component:"div",sx:{mb:3},children:"A. Personal Info:"}),(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Name :"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter full name"}),(0,Z.jsx)(l.Z,{children:"Please enter your full name"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Email :"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter email"}),(0,Z.jsx)(l.Z,{children:"Please enter your Email"})]})]})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,children:(0,Z.jsx)(x.Z,{})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,Z.jsx)(a.Z,{variant:"h5",component:"div",sx:{mb:3},children:"B. Educational Info:"}),(0,Z.jsxs)(r.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Degree Name :"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter Degree name"}),(0,Z.jsx)(l.Z,{children:"Please enter your Degree name"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Passing Year :"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(t.Z,{fullWidth:!0,placeholder:"Enter Passing Year"}),(0,Z.jsx)(l.Z,{children:"Please enter Passing Year"})]}),(0,Z.jsx)(r.ZP,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:(0,Z.jsx)(d.Z,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Language :"})}),(0,Z.jsxs)(r.ZP,{item:!0,xs:12,sm:9,lg:6,children:[(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{defaultChecked:!0}),label:"English"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"French"}),(0,Z.jsx)(o.Z,{control:(0,Z.jsx)(c.Z,{}),label:"Dutch"})]})]})]})]})})})]})}j.Layout="authGuard",n.default=j},51598:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/layouts/layouts",function(){return s(60894)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=51598,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9184],{41733:function(e,t,n){"use strict";var r=n(95318);t.Z=void 0;var i=r(n(64938)),o=n(85893),c=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=c},69368:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(63366),i=n(87462),o=n(67294),c=n(27192),a=n(41796),l=n(21964),s=n(82066),d=n(85893),u=(0,s.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,s.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(98216),f=n(33616),b=n(90948),g=n(28979);function x(e){return(0,g.Z)("MuiCheckbox",e)}var Z=(0,n(76087).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],v=(0,b.ZP)(l.Z,{shouldForwardProp:e=>(0,b.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t[`color${(0,m.Z)(n.color)}`]]}})((({theme:e,ownerState:t})=>(0,i.Z)({color:e.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,a.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${Z.checked}, &.${Z.indeterminate}`]:{color:e.palette[t.color].main},[`&.${Z.disabled}`]:{color:e.palette.action.disabled}}))),y=(0,d.jsx)(p,{}),w=(0,d.jsx)(u,{}),k=(0,d.jsx)(h,{});var P=o.forwardRef((function(e,t){var n,a;const l=(0,f.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:s=y,color:u="primary",icon:p=w,indeterminate:h=!1,indeterminateIcon:b=k,inputProps:g,size:Z="medium"}=l,P=(0,r.Z)(l,j),O=h?b:p,S=h?b:s,C=(0,i.Z)({},l,{color:u,indeterminate:h,size:Z}),L=(e=>{const{classes:t,indeterminate:n,color:r}=e,o={root:["root",n&&"indeterminate",`color${(0,m.Z)(r)}`]},a=(0,c.Z)(o,x,t);return(0,i.Z)({},t,a)})(C);return(0,d.jsx)(v,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":h},g),icon:o.cloneElement(O,{fontSize:null!=(n=O.props.fontSize)?n:Z}),checkedIcon:o.cloneElement(S,{fontSize:null!=(a=S.props.fontSize)?a:Z}),ownerState:C,ref:t},P,{classes:L}))}))},26280:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(63366),i=n(87462),o=n(27192),c=n(86010),a=n(67294),l=n(49990),s=n(82066),d=n(85893),u=(0,s.Z)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),p=n(90948),h=n(33616),m=n(98216),f=n(28979);function b(e){return(0,f.Z)("MuiTableSortLabel",e)}var g=(0,n(76087).Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]);const x=["active","children","className","direction","hideSortIcon","IconComponent"],Z=(0,p.ZP)(l.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.active&&t.active]}})((({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,[`& .${g.icon}`]:{opacity:.5}},[`&.${g.active}`]:{color:e.palette.text.primary,[`& .${g.icon}`]:{opacity:1,color:e.palette.text.secondary}}}))),j=(0,p.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,t[`iconDirection${(0,m.Z)(n.direction)}`]]}})((({theme:e,ownerState:t})=>(0,i.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},"desc"===t.direction&&{transform:"rotate(0deg)"},"asc"===t.direction&&{transform:"rotate(180deg)"})));var v=a.forwardRef((function(e,t){const n=(0,h.Z)({props:e,name:"MuiTableSortLabel"}),{active:a=!1,children:l,className:s,direction:p="asc",hideSortIcon:f=!1,IconComponent:g=u}=n,v=(0,r.Z)(n,x),y=(0,i.Z)({},n,{active:a,direction:p,hideSortIcon:f,IconComponent:g}),w=(e=>{const{classes:t,direction:n,active:r}=e,i={root:["root",r&&"active"],icon:["icon",`iconDirection${(0,m.Z)(n)}`]};return(0,o.Z)(i,b,t)})(y);return(0,d.jsxs)(Z,(0,i.Z)({className:(0,c.default)(w.root,s),component:"span",disableRipple:!0,ownerState:y,ref:t},v,{children:[l,f&&!a?null:(0,d.jsx)(j,{as:g,className:(0,c.default)(w.icon),ownerState:y})]}))}))},84189:function(e,t,n){"use strict";var r=n(2734),i=n(21023),o=n(49990),c=n(50122),a=n(18776),l=n(85893);t.Z=function(e){var t=e.title,n=e.link,s=e.icon,d=(0,r.Z)();return(0,l.jsx)(i.Z,{title:t||"Reference",placement:"left",children:(0,l.jsxs)(o.Z,{disableRipple:!0,children:[!s&&(0,l.jsx)(a.Z,{component:c.Z,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0",children:(0,l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&(0,l.jsx)(a.Z,{component:c.Z,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},18776:function(e,t,n){"use strict";var r=n(59499),i=n(4730),o=n(2734),c=n(87952),a=n(85893),l=["className","color","outline","size","sx"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){e.className;var t=e.color,n=e.outline,r=e.size,s=e.sx,u=(0,i.Z)(e,l),p=(0,o.Z)(),h=t&&!n&&{color:p.palette.background.paper,bgcolor:"".concat(t,".main")},m=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:p.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},f={};switch(r){case"badge":f={width:p.spacing(3.5),height:p.spacing(3.5)};break;case"xs":f={width:p.spacing(4.25),height:p.spacing(4.25)};break;case"sm":f={width:p.spacing(5),height:p.spacing(5)};break;case"lg":f={width:p.spacing(9),height:p.spacing(9)};break;case"xl":f={width:p.spacing(10.25),height:p.spacing(10.25)};break;case"md":f={width:p.spacing(7.5),height:p.spacing(7.5)};break;default:f={}}return(0,a.jsx)(c.Z,d({sx:d(d(d(d({},h),m),f),s)},u))}},38408:function(e,t,n){"use strict";n.r(t);var r=n(16835),i=n(59499),o=n(67294),c=n(53184),a=n(53816),l=n(98102),s=n(69368),d=n(26280),u=n(87357),p=n(10155),h=n(15861),m=n(21023),f=n(93946),b=n(55113),g=n(72882),x=n(7906),Z=n(295),j=n(36125),v=n(13113),y=n(7941),w=n(84189),k=n(41733),P=n(85893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n,r,i){return{name:e,calories:t,fat:n,carbs:r,protein:i}}var L=[C("Cupcake",305,3.7,67,4.3),C("Donut",452,25,51,4.9),C("Eclair",262,16,24,6),C("Frozen yoghurt",159,6,24,4),C("Gingerbread",356,16,49,3.9),C("Honeycomb",408,3.2,87,6.5),C("Ice cream sandwich",237,9,37,4.3),C("Jelly Bean",375,0,94,0),C("KitKat",518,26,65,7),C("Lollipop",392,.2,98,0),C("Marshmallow",318,0,81,2),C("Nougat",360,19,9,37),C("Oreo",437,18,63,4)];function z(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}var M=function(e,t){return"desc"===e?function(e,n){return z(e,n,t)}:function(e,n){return-z(e,n,t)}};function D(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}var V=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function I(e){var t=e.onSelectAllClick,n=e.order,r=e.orderBy,i=e.numSelected,o=e.rowCount,p=e.onRequestSort;return(0,P.jsx)(c.Z,{children:(0,P.jsxs)(a.Z,{children:[(0,P.jsx)(l.Z,{padding:"checkbox",sx:{pl:3},children:(0,P.jsx)(s.Z,{color:"primary",indeterminate:i>0&&i<o,checked:o>0&&i===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})}),V.map((function(e){return(0,P.jsx)(l.Z,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:r===e.id&&n,children:(0,P.jsxs)(d.Z,{active:r===e.id,direction:r===e.id?n:"asc",onClick:(t=e.id,function(e){p(e,t)}),children:[e.label,r===e.id?(0,P.jsx)(u.Z,{component:"span",sx:v.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var t}))]})})}var R=function(e){var t=e.numSelected;return(0,P.jsxs)(p.Z,{sx:S({p:0,pl:1,pr:1},t>0&&{color:function(e){return e.palette.secondary.main}}),children:[t>0?(0,P.jsxs)(h.Z,{color:"inherit",variant:"subtitle1",children:[t," selected"]}):(0,P.jsx)(h.Z,{variant:"h6",id:"tableTitle",children:"Nutrition"}),(0,P.jsx)(u.Z,{sx:{flexGrow:1}}),t>0&&(0,P.jsx)(m.Z,{title:"Delete",children:(0,P.jsx)(f.Z,{size:"large",children:(0,P.jsx)(k.Z,{})})})]})};function _(){var e=o.useState("asc"),t=(0,r.Z)(e,2),n=t[0],i=t[1],c=o.useState("calories"),d=(0,r.Z)(c,2),u=d[0],p=d[1],h=o.useState([]),m=(0,r.Z)(h,2),f=m[0],v=m[1],k=o.useState(0),O=(0,r.Z)(k,2),S=O[0],C=O[1],z=o.useState(!1),V=(0,r.Z)(z,1)[0],_=o.useState(5),N=(0,r.Z)(_,2),E=N[0],T=N[1],$=S>0?Math.max(0,(1+S)*E-L.length):0;return(0,P.jsx)(y.Z,{content:!1,title:"Data Tables",secondary:(0,P.jsx)(w.Z,{link:"https://next.material-ui.com/components/tables/"}),children:(0,P.jsxs)(b.Z,{sx:{width:"100%",mb:2},children:[(0,P.jsx)(R,{numSelected:f.length}),(0,P.jsx)(g.Z,{children:(0,P.jsxs)(x.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:V?"small":"medium",children:[(0,P.jsx)(I,{numSelected:f.length,order:n,orderBy:u,onSelectAllClick:function(e){if(e.target.checked){var t=L.map((function(e){return e.name}));v(t)}else v([])},onRequestSort:function(e,t){i(u===t&&"asc"===n?"desc":"asc"),p(t)},rowCount:L.length}),(0,P.jsxs)(Z.Z,{children:[D(L,M(n,u)).slice(S*E,S*E+E).map((function(e,t){if("number"===typeof e)return null;var n,r=(n=e.name,-1!==f.indexOf(n)),i="enhanced-table-checkbox-".concat(t);return(0,P.jsxs)(a.Z,{hover:!0,onClick:function(t){return function(e,t){var n=f.indexOf(t),r=[];-1===n?r=r.concat(f,t):0===n?r=r.concat(f.slice(1)):n===f.length-1?r=r.concat(f.slice(0,-1)):n>0&&(r=r.concat(f.slice(0,n),f.slice(n+1))),v(r)}(0,e.name)},role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[(0,P.jsx)(l.Z,{padding:"checkbox",sx:{pl:3},children:(0,P.jsx)(s.Z,{color:"primary",checked:r,inputProps:{"aria-labelledby":i}})}),(0,P.jsx)(l.Z,{component:"th",id:i,scope:"row",padding:"none",children:e.name}),(0,P.jsx)(l.Z,{align:"right",children:e.calories}),(0,P.jsx)(l.Z,{align:"right",children:e.fat}),(0,P.jsx)(l.Z,{align:"right",children:e.carbs}),(0,P.jsx)(l.Z,{sx:{pr:3},align:"right",children:e.protein})]},e.name)})),$>0&&(0,P.jsx)(a.Z,{style:{height:(V?33:53)*$},children:(0,P.jsx)(l.Z,{colSpan:6})})]})]})}),(0,P.jsx)(j.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:L.length,rowsPerPage:E,page:S,onPageChange:function(e,t){C(t)},onRowsPerPageChange:function(e){T(parseInt(null===e||void 0===e?void 0:e.target.value,10)),C(0)}})]})})}_.Layout="authGuard",t.default=_},8395:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/tables/tbl-data",function(){return n(38408)}])}},function(e){e.O(0,[3584,7456,9774,2888,179],(function(){return t=8395,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
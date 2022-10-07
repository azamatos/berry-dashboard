(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2965],{98456:function(e,r,t){"use strict";t.d(r,{Z:function(){return C}});var n=t(63366),i=t(87462),s=t(67294),a=t(86010),c=t(27192),o=t(70917),l=t(98216),d=t(33616),h=t(90948),x=t(28979);function j(e){return(0,x.Z)("MuiCircularProgress",e)}(0,t(76087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=t(85893);const Z=["className","color","disableShrink","size","style","thickness","value","variant"];let u,p,v,P,f=e=>e;const g=44,y=(0,o.F4)(u||(u=f`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,o.F4)(p||(p=f`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:r.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,o.iv)(v||(v=f`
      animation: ${0} 1.4s linear infinite;
    `),y))),k=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),O=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,o.iv)(P||(P=f`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)));var C=s.forwardRef((function(e,r){const t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:h=!1,size:x=40,style:u,thickness:p=3.6,value:v=0,variant:P="indeterminate"}=t,f=(0,n.Z)(t,Z),y=(0,i.Z)({},t,{color:o,disableShrink:h,size:x,thickness:p,value:v,variant:P}),b=(e=>{const{classes:r,variant:t,color:n,disableShrink:i}=e,s={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,i&&"circleDisableShrink"]};return(0,c.Z)(s,j,r)})(y),C={},M={},S={};if("determinate"===P){const e=2*Math.PI*((g-p)/2);C.strokeDasharray=e.toFixed(3),S["aria-valuenow"]=Math.round(v),C.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,m.jsx)(w,(0,i.Z)({className:(0,a.default)(b.root,s),style:(0,i.Z)({width:x,height:x},M,u),ownerState:y,ref:r,role:"progressbar"},S,f,{children:(0,m.jsx)(k,{className:b.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,m.jsx)(O,{className:b.circle,style:C,ownerState:y,cx:g,cy:g,r:(g-p)/2,fill:"none",strokeWidth:p})})}))}))},84189:function(e,r,t){"use strict";var n=t(2734),i=t(21023),s=t(49990),a=t(50122),c=t(18776),o=t(85893);r.Z=function(e){var r=e.title,t=e.link,l=e.icon,d=(0,n.Z)();return(0,o.jsx)(i.Z,{title:r||"Reference",placement:"left",children:(0,o.jsxs)(s.Z,{disableRipple:!0,children:[!l&&(0,o.jsx)(c.Z,{component:a.Z,href:t,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,o.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,o.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:d.palette.primary.main}),(0,o.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:d.palette.primary[800]}),(0,o.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:d.palette.primary.main})]}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0",children:(0,o.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&(0,o.jsx)(c.Z,{component:a.Z,href:t,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}},18776:function(e,r,t){"use strict";var n=t(59499),i=t(4730),s=t(2734),a=t(87952),c=t(85893),o=["className","color","outline","size","sx"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){e.className;var r=e.color,t=e.outline,n=e.size,l=e.sx,h=(0,i.Z)(e,o),x=(0,s.Z)(),j=r&&!t&&{color:x.palette.background.paper,bgcolor:"".concat(r,".main")},m=t&&{color:r?"".concat(r,".main"):"primary.main",bgcolor:x.palette.background.paper,border:"2px solid",borderColor:r?"".concat(r,".main"):"primary.main"},Z={};switch(n){case"badge":Z={width:x.spacing(3.5),height:x.spacing(3.5)};break;case"xs":Z={width:x.spacing(4.25),height:x.spacing(4.25)};break;case"sm":Z={width:x.spacing(5),height:x.spacing(5)};break;case"lg":Z={width:x.spacing(9),height:x.spacing(9)};break;case"xl":Z={width:x.spacing(10.25),height:x.spacing(10.25)};break;case"md":Z={width:x.spacing(7.5),height:x.spacing(7.5)};break;default:Z={}}return(0,c.jsx)(a.Z,d({sx:d(d(d(d({},j),m),Z),l)},h))}},97715:function(e,r,t){"use strict";t.r(r);var n=t(16835),i=t(59499),s=t(4730),a=t(67294),c=t(40440),o=t(2734),l=t(87357),d=t(98456),h=t(15861),x=t(88441),j=t(86886),m=t(84003),Z=t(7941),u=t(84189),p=t(86924),v=t(85893),P=["value"],f=["value"];function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e){var r=e.value,t=(0,s.Z)(e,P);return(0,v.jsxs)(l.Z,{sx:{position:"relative",display:"inline-flex"},children:[(0,v.jsx)(d.Z,y({variant:"determinate",value:r},t)),(0,v.jsx)(l.Z,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,v.jsx)(h.Z,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(r),"%")})})]})}function w(e){var r=e.value,t=(0,s.Z)(e,f);return(0,v.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,v.jsx)(l.Z,{sx:{width:"100%",mr:1},children:(0,v.jsx)(x.Z,y({variant:"determinate",value:r},t))}),(0,v.jsx)(l.Z,{sx:{minWidth:35},children:(0,v.jsx)(h.Z,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(r),"%")})})]})}var k=(0,c.Z)((function(e){return{root:{height:10,borderRadius:5},bar:{borderRadius:5}}}))(x.Z),O=function(){var e=(0,o.Z)(),r=a.useState(0),t=(0,n.Z)(r,2),i=t[0],s=t[1],c=a.useState(10),l=(0,n.Z)(c,2),P=l[0],f=l[1],g=a.useRef((function(){}));return a.useEffect((function(){g.current=function(){if(i>100)s(0),f(10);else{var e=10*Math.random(),r=10*Math.random();s(i+e),f(i+e+r)}}})),a.useEffect((function(){var e=setInterval((function(){g.current()}),500);return function(){clearInterval(e)}}),[]),(0,v.jsx)(Z.Z,{title:"Progress",secondary:(0,v.jsx)(u.Z,{link:"https://next.material-ui.com/components/progress/"}),children:(0,v.jsxs)(j.ZP,{container:!0,spacing:p.dv,children:[(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,v.jsx)(m.Z,{title:"Circular Indeterminate",children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{color:"secondary"})})]})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,v.jsx)(m.Z,{title:"Circular Determinate",children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{variant:"determinate",value:25})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{variant:"determinate",value:50})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{variant:"determinate",value:75})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{variant:"determinate",value:100})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{variant:"determinate",value:50})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(d.Z,{variant:"determinate",value:i})})]})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,v.jsx)(m.Z,{title:"Circular Label",children:(0,v.jsx)(j.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(b,{value:i})})})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,v.jsx)(m.Z,{title:"Linear Indeterminate",children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{color:"secondary"})})]})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,v.jsx)(m.Z,{title:"Linear Label",children:(0,v.jsx)(j.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,v.jsx)(j.ZP,{item:!0,xs:12,children:(0,v.jsx)(w,{value:i})})})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,v.jsx)(m.Z,{title:"Linear Determinate",children:(0,v.jsx)(j.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,v.jsx)(j.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{variant:"determinate",value:i})})})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,v.jsx)(m.Z,{title:"Linear Buffer",children:(0,v.jsx)(j.ZP,{container:!0,spacing:2,justifyContent:"center",children:(0,v.jsx)(j.ZP,{item:!0,xs:12,children:(0,v.jsx)(x.Z,{variant:"buffer",value:i,valueBuffer:P})})})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,v.jsx)(m.Z,{title:"Color",children:(0,v.jsxs)(j.ZP,{container:!0,direction:"column",spacing:3,children:[(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,children:(0,v.jsx)(x.Z,{variant:"determinate",color:"secondary",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.success.main},children:(0,v.jsx)(x.Z,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.error.main},children:(0,v.jsx)(x.Z,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.warning.main},children:(0,v.jsx)(x.Z,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.info.main},children:(0,v.jsx)(x.Z,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})})]})})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,sm:6,children:(0,v.jsx)(m.Z,{title:"Color With Height",children:(0,v.jsxs)(j.ZP,{container:!0,direction:"column",spacing:3,children:[(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,children:(0,v.jsx)(k,{variant:"determinate",color:"secondary",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.success.main},children:(0,v.jsx)(k,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.error.main},children:(0,v.jsx)(k,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.warning.main},children:(0,v.jsx)(k,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})}),(0,v.jsx)(j.ZP,{item:!0,xs:12,md:6,children:(0,v.jsxs)(j.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsx)(h.Z,{variant:"caption",children:"Progress"})}),(0,v.jsx)(j.ZP,{item:!0,xs:!0,sx:{color:e.palette.info.main},children:(0,v.jsx)(k,{color:"inherit",variant:"determinate",value:i})}),(0,v.jsx)(j.ZP,{item:!0,children:(0,v.jsxs)(h.Z,{variant:"h6",children:[Math.round(i),"%"]})})]})})]})})})]})})};O.Layout="authGuard",r.default=O},98043:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-element/advance/progress",function(){return t(97715)}])}},function(e){e.O(0,[440,9774,2888,179],(function(){return r=98043,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
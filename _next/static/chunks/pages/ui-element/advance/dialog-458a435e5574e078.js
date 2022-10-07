(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3309],{84189:function(e,t,r){"use strict";var n=r(2734),i=r(21023),s=r(49990),o=r(50122),a=r(18776),c=r(85893);t.Z=function(e){var t=e.title,r=e.link,l=e.icon,u=(0,n.Z)();return(0,c.jsx)(i.Z,{title:t||"Reference",placement:"left",children:(0,c.jsxs)(s.Z,{disableRipple:!0,children:[!l&&(0,c.jsx)(a.Z,{component:o.Z,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,c.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,c.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:u.palette.primary[800]}),(0,c.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:u.palette.primary.main}),(0,c.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:u.palette.primary[800]}),(0,c.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:u.palette.primary.main})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0",children:(0,c.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&(0,c.jsx)(a.Z,{component:o.Z,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}},18776:function(e,t,r){"use strict";var n=r(59499),i=r(4730),s=r(2734),o=r(87952),a=r(85893),c=["className","color","outline","size","sx"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){e.className;var t=e.color,r=e.outline,n=e.size,l=e.sx,d=(0,i.Z)(e,c),m=(0,s.Z)(),j=t&&!r&&{color:m.palette.background.paper,bgcolor:"".concat(t,".main")},h=r&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:m.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},p={};switch(n){case"badge":p={width:m.spacing(3.5),height:m.spacing(3.5)};break;case"xs":p={width:m.spacing(4.25),height:m.spacing(4.25)};break;case"sm":p={width:m.spacing(5),height:m.spacing(5)};break;case"lg":p={width:m.spacing(9),height:m.spacing(9)};break;case"xl":p={width:m.spacing(10.25),height:m.spacing(10.25)};break;case"md":p={width:m.spacing(7.5),height:m.spacing(7.5)};break;default:p={}}return(0,a.jsx)(o.Z,u({sx:u(u(u(u({},j),h),p),l)},d))}},83786:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return De}});var n=r(86886),i=r(16835),s=r(67294),o=r(64666),a=r(37645),c=r(66242),l=r(44267),u=r(78462),d=r(98619),m=r(18987),j=r(87952),h=r(59334),p=r(67720),x=r(11057),g=r(96540),Z=r(85893),b=[{email:"username@company.com",avatar:"user-1.png"},{email:"user02@company.com",avatar:"user-2.png"}];function f(e){var t=e.onClose,r=e.selectedValue,n=e.open,i=function(e){t(e)};return(0,Z.jsx)(o.Z,{onClose:function(){t(r)},"aria-labelledby":"simple-dialog-title",open:n,children:n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{style:{cursor:"move"},id:"draggable-dialog-title",children:"User Account"}),(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(l.Z,{sx:{pt:0},children:(0,Z.jsxs)(u.Z,{children:[b.map((function(e,t){return(0,Z.jsxs)(s.Fragment,{children:[(0,Z.jsxs)(d.Z,{onClick:function(){return i(e.email)},children:[(0,Z.jsx)(m.Z,{children:(0,Z.jsx)(j.Z,{alt:"User 1",src:"".concat("/assets/images/profile","/").concat(e.avatar)})}),(0,Z.jsx)(h.Z,{primary:e.email})]}),(0,Z.jsx)(p.Z,{})]},t)})),(0,Z.jsxs)(d.Z,{autoFocus:!0,onClick:function(){return i("addAccount")},children:[(0,Z.jsx)(m.Z,{children:(0,Z.jsx)(j.Z,{sx:{width:32,height:32,border:"2px solid",color:"grey.500",borderColor:"grey.500",bgcolor:"transparent"},children:(0,Z.jsx)(g.Z,{})})}),(0,Z.jsx)(h.Z,{primary:"Add New Account"})]})]})})})]})})}function v(){var e=s.useState(!1),t=(0,i.Z)(e,2),r=t[0],n=t[1],o=s.useState(b[0].email),a=(0,i.Z)(o,2),c=a[0],l=a[1];return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x.Z,{variant:"contained",onClick:function(){n(!0)},children:"Open simple dialog"}),(0,Z.jsx)(f,{selectedValue:c,open:r,onClose:function(e){n(!1),l(e)}})]})}var y=r(2734),C=r(6514),P=r(58951),O=r(15861),w=r(31425);function k(){var e=(0,y.Z)(),t=s.useState(!1),r=(0,i.Z)(t,2),n=r[0],c=r[1],l=function(){c(!1)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){c(!0)},children:"Open alert dialog"}),(0,Z.jsx)(o.Z,{open:n,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{p:3},children:n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{id:"alert-dialog-title",children:"Use Google's location service?"}),(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(P.Z,{id:"alert-dialog-description",children:(0,Z.jsx)(O.Z,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})})}),(0,Z.jsxs)(w.Z,{sx:{pr:2.5},children:[(0,Z.jsx)(x.Z,{sx:{color:e.palette.error.dark,borderColor:e.palette.error.dark},onClick:l,color:"secondary",children:"Disagree"}),(0,Z.jsx)(x.Z,{variant:"contained",size:"small",onClick:l,autoFocus:!0,children:"Agree"})]})]})})]})}var D=r(59499),S=r(54776);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var F=s.forwardRef((function(e,t){return(0,Z.jsx)(S.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,D.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({direction:"up",ref:t},e))}));function M(){var e=(0,y.Z)(),t=s.useState(!1),r=(0,i.Z)(t,2),n=r[0],c=r[1],l=function(){c(!1)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){c(!0)},children:"Slide in alert dialog"}),(0,Z.jsx)(o.Z,{open:n,TransitionComponent:F,keepMounted:!0,onClose:l,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{id:"alert-dialog-slide-title1",children:"Use Google's location service?"}),(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(P.Z,{id:"alert-dialog-slide-description1",children:(0,Z.jsx)(O.Z,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})})}),(0,Z.jsxs)(w.Z,{sx:{pr:2.5},children:[(0,Z.jsx)(x.Z,{sx:{color:e.palette.error.dark,borderColor:e.palette.error.dark},onClick:l,color:"secondary",children:"Disagree"}),(0,Z.jsx)(x.Z,{variant:"contained",size:"small",onClick:l,children:"Agree"})]})]})})]})}var E=r(26447),L=r(50135);function z(){var e=(0,y.Z)(),t=s.useState(!1),r=(0,i.Z)(t,2),n=r[0],c=r[1],l=function(){c(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){c(!0)},children:"Open form dialog"}),(0,Z.jsx)(o.Z,{open:n,onClose:l,"aria-labelledby":"form-dialog-title",children:n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{id:"form-dialog-title",children:"Subscribe"}),(0,Z.jsx)(C.Z,{children:(0,Z.jsxs)(E.Z,{spacing:3,children:[(0,Z.jsx)(P.Z,{children:(0,Z.jsx)(O.Z,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,Z.jsx)(L.Z,{autoFocus:!0,size:"small",id:"name",label:"Email Address",type:"email",fullWidth:!0})]})}),(0,Z.jsxs)(w.Z,{sx:{pr:2.5},children:[(0,Z.jsx)(x.Z,{sx:{color:e.palette.error.dark},onClick:l,color:"secondary",children:"Cancel"}),(0,Z.jsx)(x.Z,{variant:"contained",size:"small",onClick:l,children:"Subscribe"})]})]})})]})}var V=r(4730),T=r(90948),_=r(93946),A=r(50594),R=["children","onClose"];function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,D.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=(0,T.ZP)(o.Z)((function(e){var t=e.theme;return{"& .MuDialogContent-root":{padding:t.spacing(2)},"& .MuDialogActions-root":{padding:t.spacing(1)}}})),W=function(e){var t=e.children,r=e.onClose,n=(0,V.Z)(e,R);return(0,Z.jsxs)(a.Z,N(N({sx:{m:0,p:2}},n),{},{children:[t,r?(0,Z.jsx)(_.Z,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:10,top:10,color:function(e){return e.palette.grey[500]}},children:(0,Z.jsx)(A.Z,{})}):null]}))};function B(){var e=s.useState(!1),t=(0,i.Z)(e,2),r=t[0],n=t[1],o=function(){n(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){n(!0)},children:"Open dialog"}),(0,Z.jsxs)(U,{onClose:o,"aria-labelledby":"customized-dialog-title",open:r,children:[(0,Z.jsx)(W,{id:"customized-dialog-title",onClose:o,children:"Modal title"}),(0,Z.jsxs)(C.Z,{dividers:!0,children:[(0,Z.jsx)(O.Z,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),(0,Z.jsx)(O.Z,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),(0,Z.jsx)(O.Z,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(x.Z,{autoFocus:!0,onClick:o,children:"Save changes"})})]})]})}var H=r(42293),I=r(10155);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Y=s.forwardRef((function(e,t){return(0,Z.jsx)(S.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,D.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({direction:"up",ref:t},e))}));function J(){var e=s.useState(!1),t=(0,i.Z)(e,2),r=t[0],n=t[1],a=function(){n(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){n(!0)},children:"Open full-screen dialog"}),(0,Z.jsx)(o.Z,{fullScreen:!0,open:r,onClose:a,TransitionComponent:Y,children:r&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(H.Z,{sx:{position:"relative"},children:(0,Z.jsxs)(I.Z,{children:[(0,Z.jsx)(_.Z,{edge:"start",color:"inherit",onClick:a,"aria-label":"close",size:"large",children:(0,Z.jsx)(A.Z,{})}),(0,Z.jsx)(O.Z,{variant:"h3",color:"inherit",sx:{ml:2,flex:1},children:"Sound"}),(0,Z.jsx)(x.Z,{autoFocus:!0,color:"inherit",onClick:a,children:"SAVE"})]})}),(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(O.Z,{variant:"subtitle1",children:"Phone Ringtone"}),secondary:(0,Z.jsx)(O.Z,{variant:"caption",children:"Titania"})})}),(0,Z.jsx)(p.Z,{}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(O.Z,{variant:"subtitle1",children:"Default Notification Ringtone"}),secondary:(0,Z.jsx)(O.Z,{variant:"caption",children:"Tethys"})})}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(O.Z,{variant:"subtitle1",children:"Phone Ringtone"}),secondary:(0,Z.jsx)(O.Z,{variant:"caption",children:"Titania"})})}),(0,Z.jsx)(p.Z,{}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(O.Z,{variant:"subtitle1",children:"Default Notification Ringtone"}),secondary:(0,Z.jsx)(O.Z,{variant:"caption",children:"Tethys"})})})]})]})})]})}var K=r(87357),Q=r(94054),$=r(47312),ee=r(18360),te=r(18972),re=r(50480),ne=r(72852);function ie(){var e=s.useState(!1),t=(0,i.Z)(e,2),r=t[0],n=t[1],c=s.useState(!0),l=(0,i.Z)(c,2),u=l[0],d=l[1],m=s.useState("sm"),j=(0,i.Z)(m,2),h=j[0],p=j[1],g=function(){n(!1)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){n(!0)},children:"Open max-width dialog"}),(0,Z.jsx)(o.Z,{fullWidth:u,maxWidth:h,open:r,onClose:g,children:r&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{children:"Optional sizes"}),(0,Z.jsxs)(C.Z,{children:[(0,Z.jsx)(P.Z,{children:"You can set my maximum width and whether to adapt or not."}),(0,Z.jsxs)(K.Z,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:[(0,Z.jsxs)(Q.Z,{sx:{mt:2,minWidth:120},children:[(0,Z.jsx)($.Z,{htmlFor:"max-width",children:"maxWidth"}),(0,Z.jsxs)(ee.Z,{autoFocus:!0,value:h,onChange:function(e){p(e.target.value)},label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[(0,Z.jsx)(te.Z,{value:!1,children:"false"}),(0,Z.jsx)(te.Z,{value:"xs",children:"xs"}),(0,Z.jsx)(te.Z,{value:"sm",children:"sm"}),(0,Z.jsx)(te.Z,{value:"md",children:"md"}),(0,Z.jsx)(te.Z,{value:"lg",children:"lg"}),(0,Z.jsx)(te.Z,{value:"xl",children:"xl"})]})]}),(0,Z.jsx)(re.Z,{sx:{mt:1},control:(0,Z.jsx)(ne.Z,{checked:u,onChange:function(e){d(e.target.checked)}}),label:"Full width"})]})]}),(0,Z.jsx)(w.Z,{children:(0,Z.jsx)(x.Z,{onClick:g,children:"Close"})})]})})]})}var se=r(98396);function oe(){var e=(0,y.Z)(),t=(0,se.Z)(e.breakpoints.down("md")),r=s.useState(!1),n=(0,i.Z)(r,2),c=n[0],l=n[1],u=function(){l(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){l(!0)},children:"Open responsive dialog"}),(0,Z.jsx)(o.Z,{fullScreen:t,open:c,onClose:u,"aria-labelledby":"responsive-dialog-title",children:c&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{id:"responsive-dialog-title",children:"Use Google's location service?"}),(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(P.Z,{children:(0,Z.jsx)(O.Z,{variant:"body2",component:"span",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})})}),(0,Z.jsxs)(w.Z,{sx:{pr:2.5},children:[(0,Z.jsx)(x.Z,{sx:{color:e.palette.error.dark},autoFocus:!0,onClick:u,color:"secondary",children:"Disagree"}),(0,Z.jsx)(x.Z,{variant:"contained",size:"small",onClick:u,autoFocus:!0,children:"Agree"})]})]})})]})}var ae=r(55113),ce=r(31255),le=r.n(ce);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,D.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e){return(0,Z.jsx)(le(),{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:(0,Z.jsx)(ae.Z,de({},e))})}function je(){var e=(0,y.Z)(),t=s.useState(!1),r=(0,i.Z)(t,2),n=r[0],c=r[1],l=function(){c(!1)};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x.Z,{variant:"outlined",onClick:function(){c(!0)},children:"Open Draggable Dialog"}),(0,Z.jsx)(o.Z,{open:n,onClose:l,PaperComponent:me,"aria-labelledby":"draggable-dialog-title",children:n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Subscribe"}),(0,Z.jsx)(C.Z,{children:(0,Z.jsx)(P.Z,{children:(0,Z.jsx)(O.Z,{variant:"body2",component:"span",children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."})})}),(0,Z.jsxs)(w.Z,{children:[(0,Z.jsx)(x.Z,{sx:{color:e.palette.error.dark},autoFocus:!0,onClick:l,color:"secondary",children:"Cancel"}),(0,Z.jsx)(x.Z,{variant:"contained",size:"small",onClick:l,children:"Subscribe"})]})]})})]})}function he(){var e=(0,y.Z)(),t=s.useState(!1),r=(0,i.Z)(t,2),c=r[0],l=r[1],u=s.useState("paper"),d=(0,i.Z)(u,2),m=d[0],j=d[1],h=function(e){return function(){l(!0),j(e)}},p=function(){l(!1)},g=s.useRef(null);return s.useEffect((function(){if(c){var e=g.current;null!==e&&(null===e||void 0===e||e.focus())}}),[c]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x.Z,{onClick:h("paper"),children:"Content Scroll"}),(0,Z.jsx)(x.Z,{onClick:h("body"),children:"Body Scroll"}),(0,Z.jsx)(o.Z,{open:c,onClose:p,scroll:m,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:c&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{id:"scroll-dialog-title",children:"Subscribe"}),(0,Z.jsx)(C.Z,{dividers:"paper"===m,children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:3,children:[(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})}),(0,Z.jsx)(n.ZP,{item:!0,children:(0,Z.jsxs)(O.Z,{variant:"body2",children:[" ","Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."]})})]})}),(0,Z.jsxs)(w.Z,{sx:{pr:2.5,pt:2.5},children:[(0,Z.jsx)(x.Z,{sx:{color:e.palette.error.dark},onClick:p,color:"secondary",children:"Cancel"}),(0,Z.jsx)(x.Z,{variant:"contained",size:"small",onClick:p,children:"Subscribe"})]})]})})]})}var pe=r(68061),xe=r(36872),ge=["_onClose","value","open"];function Ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(r),!0).forEach((function(t){(0,D.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var fe=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function ve(e){var t=e._onClose,r=e.value,n=e.open,c=(0,V.Z)(e,ge),l=(0,y.Z)(),u=s.useState(r),d=(0,i.Z)(u,2),m=d[0],j=d[1],h=s.useRef(null);s.useEffect((function(){n||j(r)}),[r,n]);return(0,Z.jsx)(o.Z,be(be({TransitionProps:{onEntering:function(){var e;null!=h.current&&(null===(e=h.current)||void 0===e||e.focus())}},"aria-labelledby":"confirmation-dialog-title",open:n},c),{},{children:n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),(0,Z.jsx)(C.Z,{dividers:!0,children:(0,Z.jsx)(pe.Z,{ref:h,"aria-label":"ringtone",name:"ringtone",value:m,onChange:function(e){j(e.target.value)},children:fe.map((function(e){return(0,Z.jsx)(re.Z,{value:e,control:(0,Z.jsx)(xe.Z,{}),label:e},e)}))})}),(0,Z.jsxs)(w.Z,{sx:{pr:2.5,pt:2.5},children:[(0,Z.jsx)(x.Z,{sx:{color:l.palette.error.dark},autoFocus:!0,color:"secondary",onClick:function(){t()},children:"Cancel"}),(0,Z.jsx)(x.Z,{variant:"contained",size:"small",onClick:function(){t(m)},children:"Done"})]})]})}))}function ye(){var e=s.useState(!1),t=(0,i.Z)(e,2),r=t[0],n=t[1],o=s.useState("Hangouts Call"),a=(0,i.Z)(o,2),c=a[0],l=a[1];return(0,Z.jsx)("div",{children:(0,Z.jsxs)(u.Z,{component:"div",role:"group",children:[(0,Z.jsx)(d.Z,{divider:!0,disabled:!0,children:(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(O.Z,{variant:"subtitle1",children:"Interruptions"})})}),(0,Z.jsx)(d.Z,{divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:function(){n(!0)},children:(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(O.Z,{variant:"subtitle1",children:"Phone Ringtone"}),secondary:(0,Z.jsx)(O.Z,{variant:"caption",children:c})})}),(0,Z.jsx)(d.Z,{divider:!0,disabled:!0,children:(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(O.Z,{variant:"subtitle1",children:"Default Notification Ringtone"}),secondary:(0,Z.jsx)(O.Z,{variant:"caption",children:"Tethys"})})}),(0,Z.jsx)(ve,{id:"ringtone-menu",keepMounted:!0,open:r,_onClose:function(e){n(!1),e&&l(e)},value:c})]})})}var Ce=r(7941),Pe=r(84003),Oe=r(84189),we=r(86924),ke=function(){return(0,Z.jsx)(Ce.Z,{title:"Dialog",secondary:(0,Z.jsx)(Oe.Z,{link:"https://next.material-ui.com/components/dialogs/"}),children:(0,Z.jsxs)(n.ZP,{container:!0,spacing:we.dv,children:[(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Simple Dialog",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(v,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Sweet Alert",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(k,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Dialog Animation",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(M,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Form Dialogs",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(z,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Customized Dialogs",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(B,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Full Screen Dialogs",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(J,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Dialogs Size",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(ie,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Responsive Fullscreen Dialogs",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(oe,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Draggable Dialogs",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(je,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Scrolling Dialogs",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(he,{})})})}),(0,Z.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(Pe.Z,{title:"Confirmation Dialogs",children:(0,Z.jsx)(n.ZP,{container:!0,justifyContent:"center",children:(0,Z.jsx)(ye,{})})})})]})})};ke.Layout="authGuard";var De=ke},86824:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-element/advance/dialog",function(){return r(83786)}])}},function(e){e.O(0,[7914,6192,9774,2888,179],(function(){return t=86824,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
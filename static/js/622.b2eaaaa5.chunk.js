"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[622],{622:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r,i,a,o=t(168),u=t(7691),s=u.ZP.div(r||(r=(0,o.Z)(["\n  margin: 0 auto;\n  text-align: center;\n"]))),l=(u.ZP.ul(i||(i=(0,o.Z)(["\n  list-style: none;\n"]))),t(885)),c=t(5299),d=t(9434),m=function(e){return e.contacts.users},p=function(e){return e.filter.filter},x=t(4315),f=u.ZP.form(a||(a=(0,o.Z)(["\n  & input {\n    /* position: relative;\n    border-radius: 10px;\n    height: 20px;\n    border: 1px dashed black;\n    padding-left: 20px; */\n  }\n"]))),h=t(8640),b=t(6151),v=t(184),j=t(2791).useState,g=function(e){e.onSubmit;var n=j(""),t=(0,l.Z)(n,2),r=t[0],i=t[1],a=j(""),o=(0,l.Z)(a,2),u=o[0],s=o[1],p=(0,d.I0)(),g=(0,d.v9)(m),Z={name:i,number:s},y=function(e){var n=e.target.name;Z[n](e.target.value)};return(0,v.jsxs)(f,{onSubmit:function(e){e.preventDefault();var n={};n.name=r,n.number=u;var t=n.name.toLowerCase();g.find((function(e){return e.name.toLowerCase().includes(t)}))?c.Report.failure("".concat(n.name," is already in contacts")):p((0,x.je)(n)),i(""),s("")},children:[(0,v.jsx)(h.Z,{id:"outlined-required",type:"text",name:"name",label:"Name",value:r,onChange:y,size:"small",inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},helperText:"Name may contain only letters",required:!0}),(0,v.jsx)("br",{}),(0,v.jsx)(h.Z,{id:"outlined-number",type:"tel",name:"number",label:"Number",value:u,onChange:y,inputProps:{inputMode:"numeric",pattern:"[0-9, +, -]*"},size:"small",helperText:"Number may contain only digit",required:!0}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsx)(b.Z,{variant:"contained",type:"submit",children:"Add Contact"}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{})]})},Z=t(4852),y=t(2791),C=function(e){e.options;var n=(0,d.I0)(),t=(0,d.v9)(p);(0,y.useEffect)((function(){n((0,x.aH)({}))}),[n]);var r=(0,d.v9)(m),i=function(){var e=null===t||void 0===t?void 0:t.toLowerCase();return null===r||void 0===r?void 0:r.filter((function(n){return n.name.toLowerCase().includes(e)}))}(),a=function(e){n((0,x.ku)(e.target.id))};return(0,v.jsx)(v.Fragment,{children:null===i||void 0===i?void 0:i.map((function(e){return(0,v.jsxs)(Z.ZP,{dense:!0,sx:{width:"100%",bgcolor:"background.paper",display:"flex",justifyContent:"center",gap:"10px"},className:"list__item",children:[(0,v.jsxs)("span",{children:[e.name," "]}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{children:e.number}),(0,v.jsx)(b.Z,{variant:"outlined",type:"button",id:e.id,onClick:a,size:"small",children:"Delete"})]},e.id)}))})},k=t(1273),_=function(){var e=(0,d.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(h.Z,{type:"text",label:"Enter contact name",onChange:function(n){e((0,k.I)(n.target.value))},size:"small",id:"outlined-required",helperText:"Find contact by Name"})})},w=t(493),z=function(){return(0,v.jsxs)(s,{children:[(0,v.jsx)("h2",{children:"Phonebook"}),(0,v.jsx)(g,{}),(0,v.jsx)(_,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(w.Z,{children:(0,v.jsx)(C,{})})]})}}}]);
//# sourceMappingURL=622.b2eaaaa5.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[784],{608:function(e,n,t){t.d(n,{Z:function(){return i}});var r="Button_btn__W1TTO",a=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"submit":t;return(0,a.jsx)("button",{type:i,className:r,children:n})}},259:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=t(791),l="TextField_wrapper__Fj6lB",o="TextField_field__5yQD3",s="TextField_label__LloB8",u=t(184),c=["label","handleChange"],d=function(e){var n=e.label,t=e.handleChange,d=a(e,c),h=(0,i.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)("label",{className:s,htmlFor:h,children:n}),(0,u.jsx)("input",(0,r.Z)({className:o,onChange:t},d))]})}},943:function(e,n,t){var r=t(942),a=t(413),i=t(439),l=t(791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,o=(0,l.useState)((0,a.Z)({},n)),s=(0,i.Z)(o,2),u=s[0],c=s[1],d=(0,l.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))}),[c]);return{state:u,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},u)),c((0,a.Z)({},n))}}}},784:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(434),a=t(413),i=t(943),l="RegisterForm_container__kVfjz",o={name:"",email:"",password:""},s=t(259),u={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},c=t(608),d=t(184),h=function(e){var n=e.onSubmit,t=(0,i.Z)({initialState:o,onSubmit:n}),r=t.handleChange,h=t.handleSubmit,m=t.state,f=m.name,p=m.email,b=m.password;return(0,d.jsx)("div",{className:l,children:(0,d.jsxs)("form",{onSubmit:h,children:[(0,d.jsx)(s.Z,(0,a.Z)({value:f,onChange:r},u.name)),(0,d.jsx)(s.Z,(0,a.Z)({value:p,onChange:r},u.email)),(0,d.jsx)(s.Z,(0,a.Z)({value:b,onChange:r},u.password)),(0,d.jsx)(c.Z,{children:"Register"})]})})},m=t(724),f="RegisterPage_container__1TYXg",p=function(){var e=(0,r.I0)();return(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)("h1",{children:"This is the RegisterPage."}),(0,d.jsx)("p",{children:"Please join us to continue "}),(0,d.jsx)(h,{onSubmit:function(n){e((0,m.IU)(n))}})]})}}}]);
//# sourceMappingURL=784.140287c1.chunk.js.map
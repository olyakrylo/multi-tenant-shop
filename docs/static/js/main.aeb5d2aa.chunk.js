(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c(1),n=c.n(i),s=c(20),r=c.n(s),l=(c(29),c(7)),d=(c(30),c(21)),o=c.n(d),u=(c(31),c(32),c(10)),j=c(22);function _(e){var t=e.inputEmitter;return Object(a.jsxs)("div",{className:"search",children:[Object(a.jsxs)("span",{className:"search__title",children:[Object(a.jsx)(u.a,{icon:j.a}),"\xa0\xa0search"]}),Object(a.jsx)("input",{className:"search__field",onChange:function(e){return t(e.target.value)}})]})}c(38);function b(e){var t=e.name,c=e.price,i=e.img,n=e.isAvailable;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:"./img/".concat(i),className:"card__image",alt:""}),Object(a.jsx)("div",{className:"card__name",children:t}),Object(a.jsx)("div",{className:"card__price",children:c}),!n&&Object(a.jsx)("div",{className:"card__availability",children:" \u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 "})]})}var m=[{item_id:"0001",price:"100$",is_available:!0,name:"\u0411\u0443\u043a\u0435\u0442 #1",picture:"b1.jpg"},{item_id:"0002",price:"100$",is_available:!0,name:"\u0411\u0443\u043a\u0435\u0442 #2",picture:"b2.jpg"},{item_id:"0003",price:"105$",is_available:!1,name:"\u041c\u0435\u0433\u0430 \u0431\u0443\u043a\u0435\u0442",picture:"b3.jpg"},{item_id:"0004",price:"112$",is_available:!0,name:"\u0421\u0443\u043f\u0435\u0440 \u0431\u0443\u043a\u0435\u0442",picture:"b4.jpg"},{item_id:"0005",price:"100$",is_available:!0,name:"\u0411\u0443\u043a\u0435\u0442 #1",picture:"b1.jpg"},{item_id:"0006",price:"100$",is_available:!0,name:"\u0411\u0443\u043a\u0435\u0442 #2",picture:"b2.jpg"},{item_id:"0007",price:"99$",is_available:!1,name:"\u041c\u0435\u0433\u0430 \u0431\u0443\u043a\u0435\u0442",picture:"b3.jpg"},{item_id:"0008",price:"80$",is_available:!0,name:"\u0421\u0443\u043f\u0435\u0440 \u0431\u0443\u043a\u0435\u0442",picture:"b4.jpg"},{item_id:"0009",price:"103$",is_available:!0,name:"\u0411\u0443\u043a\u0435\u0442 #1",picture:"b1.jpg"},{item_id:"0010",price:"100$",is_available:!0,name:"\u0411\u0443\u043a\u0435\u0442 #2",picture:"b2.jpg"},{item_id:"0011",price:"35$",is_available:!1,name:"\u041c\u0435\u0433\u0430 \u0431\u0443\u043a\u0435\u0442",picture:"b3.jpg"},{item_id:"0012",price:"83$",is_available:!0,name:"\u0421\u0443\u043f\u0435\u0440 \u0431\u0443\u043a\u0435\u0442",picture:"b4.jpg"}];function p(){var e=Object(i.useState)(m),t=Object(l.a)(e,2),c=t[0],n=t[1];var s=c.sort((function(e,t){return parseInt(e.price,10)-parseInt(t.price,10)})).map((function(e,t){var c=e.name,i=e.price,n=e.picture,s=e.is_available;return Object(a.jsx)(b,{name:c,price:i,img:n,isAvailable:s},t)}));return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(_,{inputEmitter:function(e){var t=e.trim().toLowerCase();n(m.filter((function(e){return e.name.toLowerCase().includes(t)})))}}),Object(a.jsxs)("div",{className:"content__count",children:["Total count: ",c.length]}),Object(a.jsx)(o.a,{columnClassName:"results__col",className:"results",breakpointCols:{default:4,1500:3,700:2,500:1},children:s})]})}c(39),c(40),c(41);var O=c(16);c(42);function v(e){var t=e.available,c=e.setAvailable;return Object(a.jsxs)("div",{className:"status",children:[Object(a.jsx)("div",{className:"status__option ".concat(t&&"status__option_selected_green"),onClick:function(){return c(!0)},children:"Available"}),Object(a.jsx)("div",{className:"status__option ".concat(!t&&"status__option_selected_red"),onClick:function(){return c(!1)},children:"Not available"})]})}function h(e){var t=e.editMode,c=e.setEditMode;return Object(a.jsxs)("div",{className:"product__control",children:[Object(a.jsx)("button",{className:"product__control-btn",onClick:function(){return c(!t)},children:Object(a.jsx)(u.a,{icon:O.a})}),Object(a.jsx)("button",{className:"product__control-btn product__control-btn_red",children:Object(a.jsx)(u.a,{icon:O.b})})]})}function x(e){var t=e.item_id,c=e.name,n=e.price,s=e.picture,r=e.is_available,d=Object(i.useState)(!1),o=Object(l.a)(d,2),u=o[0],j=o[1],_=Object(i.useState)(r),b=Object(l.a)(_,2),m=b[0],p=b[1];return Object(a.jsxs)("div",{className:"product ".concat(u&&"product_edit"),children:[Object(a.jsxs)("div",{className:"product__image ".concat(u&&"product__image_edit"),children:[Object(a.jsx)("img",{className:"product__image-item__image-item",alt:"",src:"./img/".concat(s)}),u&&Object(a.jsx)("input",{type:"file",className:"product__image-input",onInput:function(e){var t=window.URL.createObjectURL(e.nativeEvent.target.files[0]);document.querySelector(".edit__image-item").src=t}})]}),Object(a.jsx)("div",{className:"product__id ".concat(u&&"product__id_edit"),children:t}),u?Object(a.jsx)("input",{className:"product__input product__name_edit",placeholder:"Name",defaultValue:c}):Object(a.jsx)("div",{className:"product__name",children:c}),u?Object(a.jsx)("input",{className:"product__input product__price_edit",defaultValue:n}):Object(a.jsxs)("div",{className:"product__price",children:[n,"\xa0\xa0\xa0",r&&Object(a.jsx)("span",{className:"product__status_available",children:"Available"}),!r&&Object(a.jsx)("span",{className:"product__status_not-available",children:"Not available"})]}),u&&Object(a.jsx)("div",{className:"product__av",children:Object(a.jsx)(v,{available:m,setAvailable:p})}),u&&Object(a.jsx)("button",{className:"product__save",children:"Save"}),Object(a.jsx)(h,{editMode:u,setEditMode:j})]})}c(43);function f(e){var t=e.setAddOpened,c=Object(i.useState)(!0),n=Object(l.a)(c,2),s=n[0],r=n[1];return Object(a.jsxs)("form",{className:"add__form",children:[Object(a.jsxs)("div",{className:"form-field form__name",children:[Object(a.jsx)("span",{className:"form-field__title",children:"name"}),Object(a.jsx)("input",{className:"form-field__input"})]}),Object(a.jsxs)("div",{className:"form__price",children:[Object(a.jsxs)("div",{className:"form-field",children:[Object(a.jsx)("span",{className:"form-field__title",children:"price"}),Object(a.jsx)("input",{className:"form-field__input"})]}),Object(a.jsxs)("select",{className:"form__select",children:[Object(a.jsx)("option",{value:"\u20bd",children:"\u20bd"}),Object(a.jsx)("option",{value:"$",children:"$"}),Object(a.jsx)("option",{value:"\u20ac",children:"\u20ac"})]})]}),Object(a.jsx)(v,{available:s,setAvailable:r}),Object(a.jsxs)("div",{className:"form__buttons",children:[Object(a.jsx)("button",{className:"form__btn form__btn_solid",children:"Add"}),Object(a.jsx)("button",{className:"form__btn form__btn_transparent",onClick:function(){return t(!1)},children:"Cancel"})]}),Object(a.jsxs)("div",{className:"form__image",children:[Object(a.jsx)("img",{className:"form__image-item",alt:"",style:{width:230,height:230}}),Object(a.jsx)("input",{type:"file",className:"form__image-input",onInput:function(e){var t=window.URL.createObjectURL(e.nativeEvent.target.files[0]);document.querySelector(".form__image-item").src=t}})]})]})}c(44);var N=c(3);function g(e){var t=e.setToken,c=Object(N.f)();return Object(a.jsxs)("form",{className:"auth",children:[Object(a.jsx)("input",{id:"login",className:"auth__input",placeholder:"login",autoFocus:!0}),Object(a.jsx)("input",{id:"password",type:"password",className:"auth__input",placeholder:"password"}),Object(a.jsxs)("div",{className:"auth__buttons",children:[Object(a.jsx)("button",{className:"auth__button auth__button_solid",onClick:function(){var e=document.querySelector("#login").value;t(e)},children:"Auth"}),Object(a.jsx)("button",{className:"auth__button auth__button_transparent",onClick:function(){return c.push("/")},children:"Cancel"})]})]})}function C(e){var t=e.token,c=e.setToken,n=Object(i.useState)(m),s=Object(l.a)(n,2),r=s[0],d=s[1],o=Object(i.useState)(!1),u=Object(l.a)(o,2),j=u[0],b=u[1];return t?Object(a.jsxs)("div",{className:"admin",children:[Object(a.jsxs)("div",{className:"admin__header ".concat(j?"admin__header_blocked":""),children:[Object(a.jsx)("button",{className:"admin__header-add",onClick:function(){return b(!0)},children:"Add product"}),Object(a.jsx)(_,{inputEmitter:function(e){var t=e.trim().toLowerCase(),c=m.filter((function(e){return e.name.toLowerCase().includes(t)||e.item_id.includes(t)}));d(c)}})]}),Object(a.jsx)("div",{className:"admin__add ".concat(j&&"admin__add_open"),children:Object(a.jsx)(f,{setAddOpened:b})}),Object(a.jsx)("ul",{className:"admin__list ".concat(j?"admin__list_blocked":""),children:r.map((function(e,t){return Object(a.jsx)("li",{className:"admin__product",children:Object(a.jsx)(x,{item_id:e.item_id,price:e.price,is_available:e.is_available,name:e.name,picture:e.picture})},t)}))})]}):Object(a.jsx)(g,{setToken:c})}var k="\u041c\u0438\u0440 \u0431\u0443\u043a\u0435\u0442\u043e\u0432";var w=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(N.f)();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("div",{className:"header__logo",children:k}),c?Object(a.jsx)("button",{className:"header__admin-btn",onClick:function(){return n("")},children:"log out"}):Object(a.jsx)("button",{className:"header__admin-btn",onClick:function(){return s.push("/admin")},children:"admin"})]}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(N.c,{children:[Object(a.jsx)(N.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(p,{})}}),Object(a.jsx)(N.a,{exact:!0,path:"/admin",render:function(){return Object(a.jsx)(C,{token:c,setToken:n})}})]})})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))},A=c(12);r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(A.a,{children:Object(a.jsx)(w,{})})}),document.getElementById("root")),$()}},[[47,1,2]]]);
//# sourceMappingURL=main.aeb5d2aa.chunk.js.map
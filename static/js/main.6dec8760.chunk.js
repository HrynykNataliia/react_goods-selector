(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(4),c=n.n(s),o=(n(14),n(3)),a=n(5),r=n(6),i=n(9),l=n(8),d=n(1),u=n.n(d),b=n(7),p=n.n(b),j=(n(15),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:["Jam"]},e.getListInformation=function(){var t=e.state.selectedGoods,n=Object(o.a)(t),s=n.pop();switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");case 2:return"".concat(t.join(" and ")," are selected");default:return"".concat(n.join(", ")," and ").concat(s," are selected")}},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"App_title box title",children:this.getListInformation()}),Object(j.jsxs)("div",{className:"App_box box",children:[!!this.state.selectedGoods.length&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-outlined",onClick:function(){return e.setState({selectedGoods:[]})},children:"X"}),Object(j.jsx)("ul",{className:"App_list",children:h.map((function(t){return Object(j.jsxs)("li",{className:p()("App_list-item box",{"has-background-primary-light":e.state.selectedGoods.includes(t)}),children:[t," ",e.state.selectedGoods.includes(t)?Object(j.jsx)("button",{type:"button",className:"button is-danger is-outlined",onClick:function(){return e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},children:"Remove"}):Object(j.jsx)("button",{type:"button",className:"button is-primary is-outlined",onClick:function(){return e.setState((function(e){var n=e.selectedGoods;return{selectedGoods:[].concat(Object(o.a)(n),[t])}}))},children:"Add"})]},t)}))})]})]})}}]),n}(u.a.Component),f=m;c.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6dec8760.chunk.js.map
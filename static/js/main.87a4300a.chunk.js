(this.webpackJsonpnativejs_advanced=this.webpackJsonpnativejs_advanced||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n(0),u=n.n(a),s=n(8),i=n.n(s),o=(n(27),n(28),function(e){var t=e.currenciesName,n=e.currentCurrency,c=e.currencyRate,a=e.isBuying,s=e.amountOfBYN,i=e.amountOfCurrency,o=e.changeCurrencyField,l=e.changeAction,j=e.changeCurrentCurrency,d=a?Object(r.jsxs)(u.a.Fragment,{children:[Object(r.jsxs)("label",{children:["You give the next amount of BYN:",Object(r.jsx)("input",{value:s,"data-currency":"byn",onChange:o})]}),Object(r.jsxs)("label",{children:["You get the next amount of ",n,":",Object(r.jsx)("input",{value:i,"data-currency":"currency",onChange:o})]})]}):Object(r.jsxs)(u.a.Fragment,{children:[Object(r.jsxs)("label",{children:["You give the next amount of ",n,":",Object(r.jsx)("input",{value:i,"data-currency":"currency",onChange:o})]}),Object(r.jsxs)("label",{children:["You get the next amount of BYN:",Object(r.jsx)("input",{value:s,"data-currency":"byn",onChange:o})]})]});return Object(r.jsxs)("div",{className:"currency",children:[Object(r.jsx)("h2",{children:"Currency exchange"}),Object(r.jsxs)("div",{className:"currency-names",children:[Object(r.jsx)("p",{children:"Current currency:"}),Object(r.jsx)("ul",{children:t.map((function(e,t){return Object(r.jsx)("li",{className:"currencies ".concat(n===e?"activeCurrency":null),onClick:j,"data-currency":e,children:e},"".concat(t,"-").concat(e))}))})]}),Object(r.jsxs)("div",{className:"currency-action",children:[Object(r.jsx)("span",{className:a?"active":"","data-action":"buy",onClick:l,children:"Buy"}),Object(r.jsx)("span",{className:a?"":"active","data-action":"sell",onClick:l,children:"Sell"})]}),Object(r.jsxs)("div",{className:"fields",children:[Object(r.jsxs)("p",{children:["Currency rate: ",c]}),d]})]})}),l=n(4);!function(e){e.CHANGE_CURRENCY_FIELD_TYPE="CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE",e.CHANGE_CHANGE_ACTION="CurrencyExchange/CHANGE_CHANGE_ACTION",e.CHANGE_CURRENT_CURRENCY="CurrencyExchange/CHANGE_CURRENT_CURRENCY"}(c||(c={}));var j=function(e,t){return{type:c.CHANGE_CURRENCY_FIELD_TYPE,payload:{amountOfBYN:e,amountOfCurrency:t}}},d=function(e){return{type:c.CHANGE_CHANGE_ACTION,payload:{isBuying:e}}},b={currencies:[{currencyName:"USD",buyRate:2.62,sellRate:2.58},{currencyName:"EUR",buyRate:3.1,sellRate:3.06},{currencyName:"RUR",buyRate:.0345,sellRate:.0341}],currentCurrency:"USD",isBuying:!0,amountOfBYN:"",amountOfCurrency:""},h=function(e){return e.currency},y=n(6),O=function(){var e=Object(y.c)(h),t=e.currencies,n=e.currentCurrency,a=e.isBuying,s=e.amountOfBYN,i=e.amountOfCurrency,l=Object(y.b)(),b=0,O=t.map((function(e){return e.currencyName===n&&(b=a?e.buyRate:e.sellRate),e.currencyName}));return Object(r.jsx)(u.a.Fragment,{children:Object(r.jsx)(o,{currenciesName:O,currentCurrency:n,currencyRate:b,isBuying:a,amountOfBYN:s,amountOfCurrency:i,changeCurrencyField:function(e){var t=e.currentTarget.value;if(isFinite(+t)&&e.currentTarget.dataset.currency){var n=e.currentTarget.dataset.currency;l("byn"===n?j(t,""===t?t:(+Number(t).toFixed(2)/b).toFixed(2)):j(""===t?t:(+Number(t).toFixed(2)*b).toFixed(2),t))}},changeAction:function(e){"buy"===e.currentTarget.dataset.action?l(d(!0)):l(d(!1))},changeCurrentCurrency:function(e){e.currentTarget.dataset.currency&&l(function(e){return{type:c.CHANGE_CURRENT_CURRENCY,payload:{currentCurrency:e}}}(e.currentTarget.dataset.currency))}})})},C=function(){return Object(r.jsx)(u.a.Fragment,{children:Object(r.jsx)(O,{})})},f=n(7),p=n(3),x=n.n(p),N={baseURL:"http://www.omdbapi.com"},m="9fe4584a",g=x.a.create(N),v={searchFilmsByTitle:function(e){return g.get(N.baseURL+"?t=".concat(e,"&apikey=").concat(m))},searchFilmsByType:function(e,t){return g.get(N.baseURL+"?t=".concat(e,"&type=").concat(t,"&apikey=").concat(m))}};console.log("lesson 3"),x.a.get("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.data})).then((function(e){return console.log(e)})),x.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.data})).then((function(e){return console.log(e)})),x.a.post("https://jsonplaceholder.typicode.com/posts",{title:"foo",body:"bar",userId:1}).then((function(e){return e.data})).then((function(e){return console.log(e)})),x.a.put("https://jsonplaceholder.typicode.com/posts/1",{id:1,title:"foo",body:"bar",userId:1}).then((function(e){return e.data})).then((function(e){return console.log(e)})),x.a.delete("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.data})).then((function(e){return console.log(e)}));var E=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),s=Object(f.a)(u,2),i=s[0],o=s[1],l=Object(a.useState)(""),j=Object(f.a)(l,2),d=j[0],b=j[1],h=Object(a.useState)(""),y=Object(f.a)(h,2),O=y[0],C=y[1],p=function(e){var t=e.currentTarget.dataset.t?e.currentTarget.dataset.t:"";v.searchFilmsByType(d,t).then((function(e){C(JSON.stringify(e))}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Promises"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsx)("p",{children:"Search by name:"})}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.currentTarget.value)}}),Object(r.jsx)("button",{onClick:function(){v.searchFilmsByTitle(n).then((function(e){o(JSON.stringify(e))}))},children:"Search"}),Object(r.jsx)("div",{children:i})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsx)("p",{children:"Search by type:"})}),Object(r.jsx)("input",{type:"text",value:d,onChange:function(e){return b(e.currentTarget.value)}}),Object(r.jsx)("button",{onClick:p,"data-t":"movie",children:"Movie"}),Object(r.jsx)("button",{onClick:p,"data-t":"series",children:"Series"}),Object(r.jsx)("div",{children:O})]})]})};var R=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(C,{}),Object(r.jsx)(E,{})]})},_=n(5),T=Object(_.b)({currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.CHANGE_CURRENCY_FIELD_TYPE:return Object(l.a)(Object(l.a)({},e),t.payload);case c.CHANGE_CHANGE_ACTION:case c.CHANGE_CURRENT_CURRENCY:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{amountOfBYN:"",amountOfCurrency:""});default:return e}}}),Y=Object(_.c)(T);i.a.render(Object(r.jsx)(y.a,{store:Y,children:Object(r.jsx)(R,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.87a4300a.chunk.js.map
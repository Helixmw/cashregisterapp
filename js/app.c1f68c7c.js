(function(t){function i(i){for(var s,c,o=i[0],r=i[1],l=i[2],d=0,h=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(i);while(h.length)h.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,i=0;i<n.length;i++){for(var e=n[i],s=!0,o=1;o<e.length;o++){var r=e[o];0!==a[r]&&(s=!1)}s&&(n.splice(i--,1),t=c(c.s=e[0]))}return t}var s={},a={app:0},n=[];function c(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,i,e){c.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,i){if(1&i&&(t=c(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)c.d(e,s,function(i){return t[i]}.bind(null,s));return e},c.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(i,"a",i),i},c.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},c.p="/cashregisterapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=i,o=o.slice();for(var l=0;l<o.length;l++)i(o[l]);var u=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";e("27fb")},1985:function(t,i,e){},"22ad":function(t,i,e){},"247b":function(t,i,e){"use strict";e("6ce0")},"27fb":function(t,i,e){},"2b72":function(t,i,e){"use strict";e("f137")},"2c74":function(t,i,e){"use strict";e("8645")},"3ae7":function(t,i,e){"use strict";e("b1b8")},"3bfe":function(t,i,e){"use strict";e("527f")},"527f":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);var s=e("2b0e"),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],c={name:"App",components:{}},o=c,r=(e("034f"),e("2877")),l=Object(r["a"])(o,a,n,!1,null,null,null),u=l.exports,d=e("8c4f"),h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"contain"},[e("div",{staticClass:"message"},[e("div",{staticClass:"large-text"},[t._v("Whoops!")]),e("div",{staticClass:"notfound"},[t._v("It seems this page is unavailable.")]),e("div",{staticClass:"main-app"},[e("router-link",{staticClass:"link",attrs:{to:"/cashregisterapp"}},[t._v("Back to Main App")])],1)])])},v=[],p=(e("ab55"),{}),m=Object(r["a"])(p,h,v,!1,null,"6abe8a07",null),f=m.exports,g=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"container-1"},[e("div",{staticClass:"box1"},[e("SideNav")],1),e("div",{staticClass:"box2"},[e("Calculator"),e("div",{attrs:{id:"options"}},[e("Options")],1)],1)])])},b=[],C=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"side"},[e("div",{staticClass:"container-1"},[e("div",{staticClass:"box1"},[e("ShoppingCart")],1),e("div",{staticClass:"box2"},[e("br"),e("Menu")],1),t._m(0)])])},y=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box2"},[e("div",{staticClass:"tag"},[e("div",{staticClass:"small-text"},[t._v("DEVELOPED BY")]),e("div",{staticClass:"tagname"},[e("a",{attrs:{href:"https://www.linkedin.com/in/wongani-chipofya-896106221/",target:"_blank"}},[t._v("Wongani Helix Chipofya")])])])])}],_=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Cart"},[e("div",{attrs:{id:"label"}},[t._v("Shopping Cart")]),e("div",{staticClass:"labelling",style:t.labelling},[e("small",[t._v("Purchase items will appear below.")])]),e("div",{staticClass:"cart-section",style:t.cart},[e("div",{staticClass:"listing"},t._l(t.items,(function(i){return e("div",{key:i.id,staticClass:"cards"},[e("div",{staticClass:"box1 itemname"},[t._v(t._s(i.name))]),e("div",{staticClass:"box2"},[t._v(t._s(i.price))]),e("div",{staticClass:"box3"},[t._v(t._s(i.quant))]),e("div",{staticClass:"box4"},[e("div",{staticStyle:{color:"white",cursor:"pointer"},attrs:{id:"cancel"},on:{click:function(e){return t.removeItem(i.id,i.price,i.quant)}}},[e("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)])])})),0),e("div",{staticClass:"bttns"},[e("button",{staticClass:"bttn btn btn-default",staticStyle:{border:"1px solid white","background-color":"rgba(0,0,0,0.2)",color:"white","border-radius":"0px"},on:{click:function(i){return t.checkOut()}}},[t._v("Check Out")]),e("div",{staticClass:"bttn",staticStyle:{"margin-left":"0.4em","padding-left":"1em","padding-right":"1em"},on:{click:function(i){return t.clear()}}},[t._v("Reset")])])])])},S=[],w={data:function(){return{items:[],labelling:"opacity:1;",cart:"opacity:0;",received:0,cummprice:0}},mounted:function(){this.recieveItems(),this.ifCartEmpty()},methods:{clear:function(){this.$root.$emit("clearChange",0),this.$root.$emit("clearPaid","0"),this.$root.$emit("clearCumm",0),this.$root.$emit("emptyTotal","0"),this.$root.$emit("emptySearch",""),this.cummprice=0,this.items.splice(0,this.items.length),this.labelling="opacity:1;",this.cart="opacity:0;"},recieveItems:function(){var t=this;this.$root.$on("addingToCart",(function(i){var e=i.price*i.quant;t.cummprice=t.cummprice+e,t.$root.$emit("addToTotal",t.cummprice),t.items.push(i),t.items.length>0&&(t.labelling="opacity:0;",t.cart="opacity:1;")}))},removeItem:function(t,i,e){var s=i*e;this.cummprice=this.cummprice-s,this.$root.$emit("removeFromTotal",this.cummprice),this.$root.$emit("editChange",0);var a=this.items.findIndex((function(i){return i.id===t}));this.items.splice(a,1)},ifCartEmpty:function(){this.items==[]&&this.$root.emit("ifCartHasNoItems",0)},checkOut:function(){this.$root.$emit("clearChange",0),this.$root.$emit("clearPaid","0"),this.$root.$emit("clearCumm",0),this.$root.$emit("emptyTotal","0"),this.$root.$emit("emptySearch",""),this.cummprice=0,this.items.splice(0,this.items.length),this.labelling="opacity:1;",this.cart="opacity:0;"}}},$=w,x=(e("247b"),Object(r["a"])($,_,S,!1,null,"ce4cc718",null)),k=x.exports,O=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"menu options"},[s("div",{staticClass:"track"},[s("div",{staticClass:"slider",on:{click:function(i){return t.toggle()}}})]),s("div",{staticClass:"color",on:{click:function(i){return t.accentToggle()}}},[t._v("\n                     Accent\n                 ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.acc,expression:"acc"}],staticClass:"tray"},[s("div",{staticClass:"col one",on:{click:t.one}}),s("div",{staticClass:"col two",on:{click:t.two}}),s("div",{staticClass:"col three",on:{click:t.three}}),s("div",{staticClass:"col four",on:{click:t.four}}),s("div",{staticClass:"col five",on:{click:t.five}})])]),s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/user"}},[s("div",{staticClass:"menu"},[s("div",{staticClass:"sel-img"},[s("img",{staticClass:"img-fluid",staticStyle:{height:"27px"},attrs:{src:e("71ca")}})]),s("div",{staticClass:"sel"},[s("h5",[t._v("User")])])])]),s("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/logout"}},[s("div",{staticClass:"menu"},[s("div",{staticClass:"sel-img"},[s("img",{staticClass:"img-fluid",staticStyle:{height:"27px"},attrs:{src:e("e546")}})]),s("div",{staticClass:"sel"},[s("h5",[t._v("Logout")])])])])],1)},q=[],T={data:function(){return{int:0,acc:!1}},mounted:function(){console.log.bind();var t=document.querySelector(".slider");switch(this.int=num,this.int){case 0:document.body.classList.remove("darkmode"),t.classList.remove("right");break;case 1:document.body.classList.add("darkmode"),t.classList.add("right");break}},methods:{toggle:function(){var t=document.querySelector(".slider");switch(this.int){case 0:this.int=1,document.body.classList.add("slow"),document.body.classList.add("darkmode"),t.classList.add("right");break;case 1:this.int=0,document.body.classList.add("slow"),document.body.classList.remove("darkmode"),t.classList.remove("right");break}},one:function(){var t=document.querySelector(":root");t.style.setProperty("--main-color","#ec8530")},two:function(){var t=document.querySelector(":root");t.style.setProperty("--main-color","#1988aa")},three:function(){var t=document.querySelector(":root");t.style.setProperty("--main-color","#66e65b")},four:function(){var t=document.querySelector(":root");t.style.setProperty("--main-color","#4e4bfa")},five:function(){var t=document.querySelector(":root");t.style.setProperty("--main-color","#ff3434")},accentToggle:function(){switch(this.acc){case!0:this.acc=!1;break;case!1:this.acc=!0;break}}}},j=T,E=(e("f361"),Object(r["a"])(j,O,q,!1,null,"00f071dc",null)),L=E.exports,M={name:"SideNav",components:{ShoppingCart:k,Menu:L}},P=M,I=(e("9164"),Object(r["a"])(P,C,y,!1,null,"97967458",null)),N=I.exports,V=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"side"},[e("div",{staticClass:"container-2"},[e("div",{staticClass:"left"},[e("div",{staticClass:"container-1"},[e("div",{staticClass:"button",on:{click:function(i){return t.one()}}},[e("h1",[t._v("1")])]),e("div",{staticClass:"button",on:{click:function(i){return t.two()}}},[e("h1",[t._v("2")])]),e("div",{staticClass:"button",on:{click:function(i){return t.three()}}},[e("h1",[t._v("3")])])]),e("div",{staticClass:"container-1"},[e("div",{staticClass:"button",on:{click:function(i){return t.four()}}},[e("h1",[t._v("4")])]),e("div",{staticClass:"button",on:{click:function(i){return t.five()}}},[e("h1",[t._v("5")])]),e("div",{staticClass:"button",on:{click:function(i){return t.six()}}},[e("h1",[t._v("6")])])]),e("div",{staticClass:"container-1"},[e("div",{staticClass:"button",on:{click:function(i){return t.seven()}}},[e("h1",[t._v("7")])]),e("div",{staticClass:"button",on:{click:function(i){return t.eight()}}},[e("h1",[t._v("8")])]),e("div",{staticClass:"button",on:{click:function(i){return t.nine()}}},[e("h1",[t._v("9")])])]),e("div",{staticClass:"container-1"},[e("div",{staticClass:"button",staticStyle:{width:"12em"},on:{click:function(i){return t.zero()}}},[e("h1",[t._v("0")])]),e("div",{staticClass:"button",staticStyle:{"background-color":"var(--dim-grey)",color:"var(--text-grey)"},on:{click:function(i){return t.clear()}}},[e("h1",[t._v("C")])])])]),e("div",{staticClass:"right"},[e("div",{staticClass:"fields"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.paid,expression:"paid"}],staticClass:"form-control input",attrs:{type:"text"},domProps:{value:t.paid},on:{keyup:function(i){return t.filterValues(t.paid)},input:function(i){i.target.composing||(t.paid=i.target.value)}}})]),e("div",{staticClass:"set"},[e("div",{staticClass:"set1"},[t._v("Total:")]),e("div",{staticClass:"set2"},[t._v(t._s(t.cum.toLocaleString("en-US")))])]),e("div",{staticClass:"set"},[e("div",{staticClass:"set1"},[t._v("Paid:")]),e("div",{staticClass:"set2"},[t._v(t._s(t.total.toLocaleString("en-US")))])]),e("div",{staticClass:"set"},[e("div",{staticClass:"set1"},[t._v("Change:")]),e("div",{staticClass:"set2"},[t._v(t._s(t.change.toLocaleString("en-US")))])]),e("div",{staticClass:"set"},[e("div",{staticClass:"set1",staticStyle:{"padding-top":"0em"}}),e("div",{staticClass:"set1"},[e("div",{staticClass:"cal",on:{click:function(i){return t.calculate()}}},[t._v("Calculate")])])])]),e("div",{staticClass:"far-right"},[e("div",{staticClass:"searcharea"},[e("div",{staticClass:"container-3"},[e("b-dropdown",{staticClass:"m-2",staticStyle:{"background-color":"var(--main-color)",color:"var(--white)",height:"2.9em"},attrs:{id:"dropdown-dropright",dropright:"",text:"Item Categories",variant:"default"}},[e("b-dropdown-item",{on:{click:function(i){return t.itemsSearch(t.men)}}},[t._v("Men's clothes")]),e("b-dropdown-item",{on:{click:function(i){return t.itemsSearch(t.women)}}},[t._v("Momen's clothes")]),e("b-dropdown-item",{on:{click:function(i){return t.itemsSearch(t.jewelery)}}},[t._v("Jewelery")]),e("b-dropdown-item",{on:{click:function(i){return t.itemsSearch(t.electronics)}}},[t._v("Electronics")])],1)],1),e("div",{staticClass:"results"},[e("NoSearch",{directives:[{name:"show",rawName:"v-show",value:t.noSearch,expression:"noSearch"}]}),e("ActiveSearch",{directives:[{name:"show",rawName:"v-show",value:t.activeSearch,expression:"activeSearch"}]}),e("ItemSearch",{directives:[{name:"show",rawName:"v-show",value:t.itemSearch,expression:"itemSearch"}]})],1)])])])])},z=[],R=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"label"}},[e("h4",[t._v("Search results will appear here.")])])}],A={},B=A,J=(e("9b6d"),Object(r["a"])(B,R,H,!1,null,"264a2f96",null)),F=J.exports,U=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"result"}},t._l(t.items,(function(i){return e("div",{key:i.id,attrs:{id:"card"}},[e("div",{staticClass:"container-1"},[e("div",{staticClass:"box1 itemname"},[t._v(t._s(i.name))]),e("div",{staticClass:"box2"},[t._v(t._s(i.price))]),e("div",{staticClass:"box3"},[e("b-form-spinbutton",{staticStyle:{height:"2em",border:"0px"},attrs:{id:"sb-inline",inline:""},model:{value:i.quant,callback:function(e){t.$set(i,"quant",e)},expression:"item.quant"}})],1),e("div",{staticClass:"box4"},[e("div",{staticClass:"bttn",on:{click:function(e){return t.addToCart(i.id,i.name,i.price,i.quant)}}},[e("center",[t._v("Add")])],1)])])])})),0)},D=[],G={data:function(){return{val:0,items:[]}},mounted:function(){var t=this;this.$root.$on("activeSearchValues",(function(i){0!=t.items.length&&(t.items=[]);for(var e=0;e<=i.length;e++)t.items.push(i)}))},methods:{addToCart:function(t,i,e,s){if(0==s){var a=s+1,n={id:t,name:i,quant:a,price:e};this.$root.$emit("addingToCart",n)}else{var c={id:t,name:i,quant:s,price:e};this.$root.$emit("addingToCart",c)}}}},W=G,X=(e("2c74"),Object(r["a"])(W,U,D,!1,null,"3001e100",null)),Q=X.exports,Y=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.stockmsg,expression:"stockmsg"}],staticClass:"notify"},[e("div",{staticClass:"popup"},[e("center",[t._v("List is out of stock")])],1)]),e("div",{attrs:{id:"result"}},t._l(t.items,(function(i){return e("div",{key:i.id,attrs:{id:"card"}},[e("div",{staticClass:"container-1"},[e("div",{staticClass:"box1 itemname"},[t._v(t._s(i.name))]),e("div",{staticClass:"box2"},[t._v(t._s(i.price))]),e("div",{staticClass:"box3"},[e("b-form-spinbutton",{staticStyle:{height:"2em",border:"0px",background:"var(--light-grey)",color:"var(--foreground)"},attrs:{id:"sb-inline",inline:""},model:{value:i.quant,callback:function(e){t.$set(i,"quant",e)},expression:"item.quant"}})],1),e("div",{staticClass:"box4"},[e("div",{staticClass:"bttn",on:{click:function(e){return t.addToCart(i.id,i.name,i.price,i.quant,i.category,i.brand)}}},[e("center",[t._v("Add")])],1)])])])})),0)])},Z=[],K={data:function(){return{val:0,items:[],category:"",test:"",stockmsg:!1}},mounted:function(){var t=this;this.$root.$on("searchForByCategory",(function(i){t.category=i,t.loadResults()}))},methods:{loadResults:function(){var t=this;try{var i=new XMLHttpRequest;i.open("GET","https://fakestoreapi.com/products"),i.onload=function(){var e=JSON.parse(i.response);t.filterResults(e)},i.send()}catch(e){console.log("Error: "+e)}},filterResults:function(t){0!=this.items.length&&(this.items=[]);for(var i=0;i<=t.length;i++)if(t[i].category==this.category){var e=t[i].id,s=t[i].title,a=t[i].category,n=t[i].price,c={id:e,name:s,category:a,price:n,quant:0};this.items.push(c)}},addToCart:function(t,i,e,s,a,n){if(0==s){var c=s+1,o={id:t,name:i,quant:c,price:e,category:a,brand:n};this.$root.$emit("addingToCart",o)}else{var r={id:t,name:i,quant:s,price:e,category:a,brand:n};this.$root.$emit("addingToCart",r)}},increaseQuant:function(t){console.log(t)},getRequest:function(){}}},tt=K,it=(e("d270"),Object(r["a"])(tt,Y,Z,!1,null,"8c2a6cf0",null)),et=it.exports,st={name:"Calculator",components:{NoSearch:F,ActiveSearch:Q,ItemSearch:et},data:function(){return{noSearch:!0,activeSearch:!1,itemSearch:!1,cum:0,total:0,change:0,paid:"0",search:"",categories:[],items:[],men:"men's clothing",women:"women's clothing",jewelery:"jewelery",electronics:"electronics"}},mounted:function(){var t=this;this.$root.$on("clearChange",(function(i){t.change=i})),this.$root.$on("clearPaid",(function(i){t.total=i})),this.$root.$on("clearCumm",(function(i){t.cum=i})),this.$root.$on("emptyTotal",(function(i){t.paid=i})),this.$root.$on("addToTotal",(function(i){t.cum=i})),this.$root.$on("removeFromTotal",(function(i){t.cum=i})),this.$root.$on("editChange",(function(i){t.change=i})),this.$root.$on("ifCartHasNoItems",(function(i){t.cum=i})),this.$root.$on("emptySearch",(function(i){t.search=i,t.noSearch=!0,t.activeSearch=!1,t.itemSearch=!1}))},methods:{takingCummToSubtraction:function(){},itemsSearch:function(t){this.noSearch=!1,this.activeSearch=!1,this.itemSearch=!0,this.$root.$emit("searchForByCategory",t)},activeSearching:function(){var t=this;this.noSearch=!1,this.activeSearch=!0,this.itemSearch=!1;var i=this.search.trim();""==i&&(this.noSearch=!0,this.activeSearch=!1,this.itemSearch=!1);try{var e=new XMLHttpRequest;e.open("GET","https://fakestoreapi.com/products"),e.onload=function(){var s=JSON.parse(e.response);t.filterResults(s,i)},e.send()}catch(s){console.log("Error: "+s)}},filterResults:function(t,i){console.log(i),0!=this.items.length&&(this.items=[]);for(var e=0;e<=t.length;e++)if(1==t.includes(i,e)){var s=t[e].id,a=t[e].title,n=t[e].category,c=t[e].price,o={id:s,name:a,category:n,price:c,quant:0};this.items.push(o)}this.$root.$emit("activeSearchValues",this.items)},filterValues:function(t){var i=t.replace(/([a-zA-Z])/g,"");this.paid=i.trim()},calculate:function(){this.total=parseInt(this.paid);var t=this.total-this.cum;this.change=t<0?0:t},one:function(){"0"==this.paid?this.paid="1":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"1")},two:function(){"0"==this.paid?this.paid="2":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"2")},three:function(){"0"==this.paid?this.paid="3":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"3")},four:function(){"0"==this.paid?this.paid="4":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"4")},five:function(){"0"==this.paid?this.paid="5":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"5")},six:function(){"0"==this.paid?this.paid="6":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"6")},seven:function(){"0"==this.paid?this.paid="7":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"7")},eight:function(){"0"==this.paid?this.paid="8":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"8")},nine:function(){"0"==this.paid?this.paid="9":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"9")},zero:function(){"0"==this.paid?this.paid="0":null!=this.paid&&"0"!=this.paid&&(this.paid=this.paid+"0")},clear:function(){this.paid="0",this.total=0,this.change=0}}},at=st,nt=(e("3bfe"),Object(r["a"])(at,V,z,!1,null,"3403bf14",null)),ct=nt.exports,ot=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container-options"},[e("div",{staticClass:"box sales"},[e("Sales")],1),e("div",{staticClass:"box inv"},[e("Inventory")],1),e("div",{staticClass:"box rep"},[e("Report")],1)])},rt=[],lt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/inventory"}},[e("div",{attrs:{id:"report"}},[e("center",[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"var(--main-color)",d:"M440.8 129.5L261.7 49.2c-3.6-1.6-7.7-1.6-11.3 0L71.2 129.5c-6 2.7-6.2 11.8-.4 14.8l178.7 94.1c4.1 2.2 8.9 2.2 13 0l178.7-94.1c5.8-3 5.6-12.1-.4-14.8zM280.2 462.9l180.1-95.3c2.2-1.4 3.6-4 3.6-6.8V175.9c0-5.9-5.8-9.7-10.7-7.1l-180.1 92.8c-2.6 1.3-4.2 4.1-4.2 7.1V456c.1 6.2 6.4 10 11.3 6.9zM48 175.9v184.8c0 2.8 1.4 5.4 3.6 6.8l180.1 95.3c5 3.2 11.2-.6 11.2-6.8V268.7c0-3-1.6-5.8-4.2-7.1l-180-92.8c-4.9-2.6-10.7 1.3-10.7 7.1z"}})])]),e("center",[e("h2",{staticStyle:{"margin-top":"0.7em",color:"var(--main-color)"}},[t._v("Inventory")])])],1)])},ut=[],dt={},ht=dt,vt=(e("3ae7"),Object(r["a"])(ht,lt,ut,!1,null,"8f29399c",null)),pt=vt.exports,mt=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/inventory"}},[e("div",{attrs:{id:"report"}},[e("center",[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"var(--main-color)",d:"M184 448h48c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8zM88 448h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zM280.1 448h47.8c4.5 0 8.1-3.6 8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1v207.8c0 4.5 3.6 8.1 8.1 8.1zM368 136.1v303.8c0 4.5 3.6 8.1 8.1 8.1h47.8c4.5 0 8.1-3.6 8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1z"}})])]),e("center",[e("h2",{staticStyle:{"margin-top":"0.7em",color:"var(--main-color)"}},[t._v("Sales")])])],1)])},ft=[],gt={},bt=gt,Ct=(e("2b72"),Object(r["a"])(bt,mt,ft,!1,null,"3bd1f39f",null)),yt=Ct.exports,_t=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/inventory"}},[e("div",{attrs:{id:"report"}},[e("center",[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"var(--main-color)",d:"M480 119c0-13.3-9.4-23-22.8-23H198.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H56.7C42.9 64 32 74.3 32 87v73.7c0 1.6 1.7 1.5 3 .7s5-1.4 7-1.4h428c2 0 5.7.6 7 1.4 1.3.8 3 .9 3-.7V119zM32 416.4c0 17.5 14.2 31.6 31.6 31.6H448c17.6 0 32-14.4 32-32V204c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v212.4z"}})])]),e("center",[e("h2",{staticStyle:{"margin-top":"0.7em",color:"var(--main-color)"}},[t._v("Inventory")])])],1)])},St=[],wt={},$t=wt,xt=(e("a255"),Object(r["a"])($t,_t,St,!1,null,"722f23f2",null)),kt=xt.exports,Ot={components:{Inventory:pt,Sales:yt,Report:kt}},qt=Ot,Tt=(e("f742"),Object(r["a"])(qt,ot,rt,!1,null,null,null)),jt=Tt.exports,Et={components:{SideNav:N,Calculator:ct,Options:jt}},Lt=Et,Mt=(e("ca9d"),Object(r["a"])(Lt,g,b,!1,null,"0cb1a558",null)),Pt=Mt.exports,It=e("5f5b"),Nt=e("b1e0"),Vt=(e("f9e3"),e("2dd8"),e("62c3")),zt=e.n(Vt),Rt=e("ecee"),Ht=e("c074"),At=e("ad3d"),Bt=e("1321"),Jt=e.n(Bt);Rt["c"].add(Ht["a"]),Rt["c"].add(Ht["c"]),Rt["c"].add(Ht["d"]),Rt["c"].add(Ht["b"]),s["default"].component("font-awesome-icon",At["a"]),s["default"].use(Jt.a),s["default"].component("apexchart",Jt.a),s["default"].use(zt.a),s["default"].use(It["a"]),s["default"].use(Nt["a"]),s["default"].use(d["a"]);var Ft=new d["a"]({routes:[{path:"/cashregisterapp",component:Pt,name:"pos"},{path:"/sales",component:f},{path:"/inventory",component:f},{path:"/reports",component:f},{path:"/user",component:f},{path:"/logout",component:f},{path:"/help",component:f}],mode:"history"});s["default"].config.productionTip=!1,new s["default"]({router:Ft,render:function(t){return t(u)}}).$mount("#app")},"58fb":function(t,i,e){},"6ce0":function(t,i,e){},"71ca":function(t,i,e){t.exports=e.p+"img/user.658eb062.png"},8645:function(t,i,e){},9164:function(t,i,e){"use strict";e("e350")},9373:function(t,i,e){},"9b6d":function(t,i,e){"use strict";e("ca90")},a255:function(t,i,e){"use strict";e("1985")},ab55:function(t,i,e){"use strict";e("22ad")},acc0:function(t,i,e){},b1b8:function(t,i,e){},ca90:function(t,i,e){},ca9d:function(t,i,e){"use strict";e("d505")},d270:function(t,i,e){"use strict";e("9373")},d505:function(t,i,e){},e350:function(t,i,e){},e546:function(t,i,e){t.exports=e.p+"img/ilogout.5f1735fc.png"},f137:function(t,i,e){},f361:function(t,i,e){"use strict";e("58fb")},f742:function(t,i,e){"use strict";e("acc0")}});
//# sourceMappingURL=app.c1f68c7c.js.map
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/vegifruit.9cd2e61a.png"},118:function(e,t,a){e.exports=a.p+"static/media/greencity.978665f2.png"},119:function(e,t,a){e.exports=a.p+"static/media/saladasmais.0273522e.jpg"},120:function(e,t,a){e.exports=a.p+"static/media/sandesBase.69a34ba3.jpg"},121:function(e,t,a){e.exports=a.p+"static/media/pratoCarne.92d38d67.jpg"},122:function(e,t,a){e.exports=a.p+"static/media/pratoPeixe.20f9cfe0.jpg"},233:function(e,t,a){e.exports=a.p+"static/media/xmaspromo.1e866ef4.jpg"},234:function(e,t,a){e.exports=a.p+"static/media/newYearPromo.40cdf873.jpg"},280:function(e,t,a){"use strict";a.d(t,"c",(function(){return Ge})),a.d(t,"d",(function(){return Me})),a.d(t,"a",(function(){return Ye})),a.d(t,"b",(function(){return Je}));var n=a(5),r=a.n(n),o=a(0),i=a.n(o),c=a(40),l=a(3),s=a(2),u=a(4),d=a(48),m=a(452),f=a(69),g=a(453),p=a(34),y=a(31),E=a(26),b=a(27),v=a(33);a(93),a(94),a(95);function h(e){var t=e.route,a=e.navigation,n=Object(o.useState)(""),l=r()(n,2),m=l[0],f=l[1],g=t.params.cart,p=t.params.user,y="";return i.a.createElement(s.a,{style:D.container},i.a.createElement(u.a,{style:D.title},"Nutrilink"),i.a.createElement(s.a,{style:D.containerColumn},i.a.createElement(s.a,{style:D.inputView},i.a.createElement(u.a,{style:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"white"}},"Pratos:"),Object.keys(g).map((function(e){return y=g[e].Restaurante,i.a.createElement(s.a,{key:g[e].Id},i.a.createElement(u.a,{style:{color:"white",paddingHorizontal:10}},g[e].Name))}))),i.a.createElement(s.a,{style:D.inputView},i.a.createElement(u.a,{style:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"white"}},"Restaurante:"),i.a.createElement(u.a,{style:{color:"white",paddingHorizontal:10}},y)),i.a.createElement(s.a,{style:D.inputView},i.a.createElement(c.a,{placeholder:"Morada",style:D.input,onChangeText:function(e){return f(e)}})),i.a.createElement(s.a,{style:D.containerRow},i.a.createElement(d.a,{style:D.payButtonContainer,onPress:function(){Ye.ref("restaurantes/"+y+"/pedidos").push({Id:"cart"+m,Pratos:g,Status:"ordered",Morada:m}),Ye.ref("Users/"+p+"/cart").set({}),a.goBack()}},i.a.createElement(u.a,{style:D.payButtonText},"Confirmar")))))}function O(e){var t=e.navigation,a=Object(o.useState)({}),n=r()(a,2),c=n[0],l=n[1],m=Me.getState().cartReducer.user;Object(p.b)();x(m,l),Object(o.useEffect)((function(){setTimeout((function(){return x(m,l)}),1e3),null==c&&setTimeout((function(){return l({})}),1e3)}),[c]);var f=function(){if(null==c)return 0;for(var e=0,t=0,a=Object.keys(c);t<a.length;t++){var n=a[t];e+=c[n].Preco}return e};return null==c?i.a.createElement(s.a,null,i.a.createElement(u.a,{style:D.restaurantesOffer},"Pre\xe7o total: ",f(),"\u20ac"),i.a.createElement(d.a,{style:D.payButtonContainer},i.a.createElement(u.a,{style:D.payButtonText},"Pagar"))):i.a.createElement(s.a,null,i.a.createElement(y.a,null,Object.keys(c).map((function(e){return i.a.createElement(b.a,{underlayColor:"#DDDDDD",style:D.button,key:e},i.a.createElement(s.a,{style:D.containerRow},i.a.createElement(s.a,{style:D.containerRow},i.a.createElement(E.a,{style:D.image,source:C(c[e].image)})),i.a.createElement(s.a,{style:D.containerColumn},i.a.createElement(u.a,{style:D.restaurantesOffer},c[e].Name),i.a.createElement(u.a,{style:D.foodText},"Op\xe7\xf5es : ",c[e].Opcoes,"\n","Pre\xe7o : ",c[e].Preco," \u20ac")),i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:D.delButton,onPress:function(){Ye.ref("Users/"+m+"/cart/"+e).remove(),Ye.ref("Users/"+m+"/cart").once("value").then((function(e){l(e.val())}))}},i.a.createElement(v.a,{name:"delete",size:25}))))}))),i.a.createElement(u.a,{style:D.restaurantesOffer},"Pre\xe7o total: ",f(),"\u20ac"),i.a.createElement(d.a,{style:D.payButtonContainer,onPress:function(){return t.push("Pedido",{cart:c,user:m})}},i.a.createElement(u.a,{style:D.payButtonText},"Pagar")))}var S=Object(m.a)();function x(e,t){Ye.ref("Users/"+e+"/cart").once("value").then((function(e){t(e.val())}))}function P(e){return i.a.createElement(S.Navigator,{initialroute:"Carrinho",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(S.Screen,{name:"Carrinho",component:O}),i.a.createElement(S.Screen,{name:"Pedido",component:h}))}var C=function(e){var t=Ge[e];return null!=t?t:Ge.default},D=l.a.create({container:{backgroundColor:"darkcyan",alignItems:"center",flex:1},containerRow:{flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},loginContainer:{backgroundColor:"darkcyan",alignItems:"center",justifyContent:"center",flex:1},title:{borderTopWidth:100,borderTopColor:"darkcyan",fontSize:40,fontWeight:"bold",color:"cornsilk"},inputView:{borderBottomWidth:10,borderBottomColor:"darkcyan"},input:{backgroundColor:"darkgray",padding:15,borderRadius:5},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7,backgroundColor:"#DDDDDD"},delButton:{flex:1,flexDirection:"row",justifyContent:"center",alignSelf:"center"},image:{width:150,height:100},payButtonContainer:{elevation:8,backgroundColor:"#009688",borderRadius:10,paddingVertical:10,paddingHorizontal:12},payButtonText:{fontSize:18,color:"#fff",fontWeight:"bold",alignSelf:"center",textTransform:"uppercase"}}),w=a(245),j=a(65),k=a(8),R=a.n(k),T=a(82);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){R()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A={cart:[],restaurant:"",isLogged:!1,user:""},I=function(e){return{type:"setLogged",payload:e}},L=function(e){return{type:"setUser",payload:e}};var V=Object(T.b)({cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addPrato":var a="";for(var n in void 0)for(var r in n.Pratos)r===t.payload&&(a=n.name);if(""!=e.restaurant&&e.restaurant!=a)return;return B(B({},e),{},{cart:e.cart.concat(t.payload)});case"delPrato":return B(B({},e),{},{cart:e.cart.filter((function(e){return e!==t.payload}))});case"setLogged":return B(B({},e),{},{isLogged:t.payload});case"setUser":return B(B({},e),{},{user:t.payload});default:return e}}});function N(e){var t=e.route.params.restaurante.Name,a=Object(o.useState)({}),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)([]),m=r()(d,2),f=m[0],g=m[1],v=Me.getState().cartReducer.user;Object(o.useEffect)((function(){Ye.ref("Users/"+v+"/cart").once("value").then((function(e){g(e.val())})),Ye.ref("restaurantes/"+t+"/Pratos").once("value").then((function(e){return l(e.val())}))}),[]);Object(p.b)();return i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:W.restaurantesOffer},"Pratos Dispon\xedveis:"),i.a.createElement(y.a,null,Object.keys(c).map((function(e){return i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:W.button,key:c[e].Id,onPress:function(){(function(e,t){if(null==e)return!0;for(var a in Object.values(e))if(a.Restaurante!=t)return!1;return!0})(f,t)&&Ye.ref("Users/"+v+"/cart").push(c[e])}},i.a.createElement(s.a,{style:W.containerRow},i.a.createElement(E.a,{style:W.image,source:U(c[e].image)}),i.a.createElement(s.a,{style:W.containerColumn},i.a.createElement(u.a,{style:W.restaurantesOffer},c[e].Name),i.a.createElement(u.a,{style:W.foodText},"Op\xe7\xf5es : ",c[e].Opcoes,"\n","Pre\xe7o : ",c[e].Preco," \u20ac"))))}))))}var U=function(e){var t=Ge[e];return null!=t?t:Ge.default};var W=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}});function F(e){var t=e.navigation,a=(e.route,Object(o.useState)({})),n=r()(a,2),c=n[0],l=n[1];return Object(o.useEffect)((function(){Ye.ref("restaurantes").once("value").then((function(e){return l(e.val())}))}),[]),console.log(c),i.a.createElement(s.a,{style:{flex:1,padding:20}},i.a.createElement(y.a,{style:q.container},Object.keys(c).map((function(e){return i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:q.button,key:c[e].id,onPress:function(){return t.push("Pratos",{restaurante:c[e]})}},i.a.createElement(s.a,{style:q.restaurante},i.a.createElement(E.a,{source:H(c[e].image),style:q.image}),i.a.createElement(s.a,{style:{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}},i.a.createElement(u.a,{style:q.username},e),i.a.createElement(u.a,{style:q.bio},c[e].PricePoint,c[e].Tags.map((function(e){return" \u2e0e "+e}))))))}))))}var H=function(e){var t=Ge[e];return null!=t?t:Ge.default},q=l.a.create({container:{paddingBottom:10},restaurante:{flexDirection:"row",paddingBottom:10},username:{fontSize:15,fontWeight:"bold",textAlign:"center"},bio:{fontSize:10,padding:5,textAlign:"left",justifyContent:"flex-start"},button:{padding:7},image:{width:150,height:100}}),G=Object(m.a)();function Q(e){var t="";return console.log(e),e.params&&(t=e.params.restaurante),i.a.createElement(G.Navigator,{initialroute:"Restaurantes",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(G.Screen,{name:"Restaurantes",component:F}),i.a.createElement(G.Screen,{name:"Pratos",component:N,initialParams:{restaurante:t}}))}l.a.create({image:{height:300}});var M=a(270);function Y(e){var t=e.navigation,a=(e.route,Object(o.useState)({})),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)({}),m=r()(d,2),f=m[0],g=m[1];return Object(o.useEffect)((function(){Ye.ref("restaurantes").once("value").then((function(e){return l(e.val())})),Ye.ref("promos").once("value").then((function(e){return g(e.val())}))}),[]),i.a.createElement(y.a,{style:{flex:1}},i.a.createElement(s.a,{style:{flexDirection:"column",flex:1,padding:20}},i.a.createElement(u.a,{style:Z.restaurantesOffer},"Destaques:"),i.a.createElement(y.a,{style:{flexDirection:"row",flex:1},horizontal:!0},Object.keys(f).map((function(e){return i.a.createElement(s.a,{style:Z.restaurantesPromo},i.a.createElement(b.a,{underlayColor:"#DDDDD",activeOpacity:.3,style:Z.button,key:f[e].id,onPress:function(){}},i.a.createElement(s.a,{key:f[e].id,style:Z.restaurantesPromo},i.a.createElement(s.a,{style:{flexDirection:"column"}},i.a.createElement(E.a,{source:J(f[e].image),style:Z.image}),i.a.createElement(u.a,{style:Z.restaurantesTitle},f[e].Name),i.a.createElement(u.a,{style:Z.restaurantesDescr},f[e].descr)))))}))),i.a.createElement(u.a,{style:Z.restaurantesOffer},"Restaurantes favoritos:"),i.a.createElement(y.a,{style:{flexDirection:"row",flex:1},horizontal:!0},Object.keys(c).map((function(e){return i.a.createElement(s.a,{style:Z.restaurantesPromo},i.a.createElement(b.a,{underlayColor:"#DDDDD",activeOpacity:.3,style:Z.button,key:c[e].id,onPress:function(){return t.push("Pratos",{restaurante:c[e]})}},i.a.createElement(s.a,{key:c[e].Id,style:Z.restaurantesPromo},i.a.createElement(s.a,{style:{flexDirection:"column"}},i.a.createElement(E.a,{source:J(c[e].image),style:Z.image}),i.a.createElement(u.a,{style:Z.restaurantesTitle},c[e].Name)))))}))),i.a.createElement(u.a,{style:Z.restaurantesOffer,onPress:function(){return M.a.openURL("https://micro-site-ams.herokuapp.com/")}},"Visite o nosso site!")))}var J=function(e){var t=Ge[e];return null!=t?t:Ge.default},Z=l.a.create({restaurantesPromo:{flexDirection:"column",padding:5,width:160,height:200},image:{width:150,height:100},restaurantesTitle:{fontSize:15,fontWeight:"bold",textAlign:"center"},restaurantesDescr:{fontSize:13,textAlign:"center"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},button:{padding:7,height:160}}),K=Object(m.a)();function X(e){e.route;return i.a.createElement(K.Navigator,{initialroute:"Home",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(K.Screen,{name:"Home",component:Y}),i.a.createElement(K.Screen,{name:"Pratos",component:N}))}a(233),a(234),a(117),a(118),a(119),a(93),a(94),a(95),a(120),a(121),a(122);function $(e){e.navigation;return Object(f.a)(),i.a.createElement(i.a.Fragment,null)}var _=Object(g.a)();function ee(){Object(p.b)()(I(!1));var e=Me.getState().cartReducer.user;return console.log(e),i.a.createElement(w.a,{independent:!0},i.a.createElement(_.Navigator,{initialRouteName:"Home",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a,n=e.color,r=e.size;if("Home"===t.name)a="ios-home";else if("Restaurantes"===t.name)a="ios-restaurant";else{if("Carrinho"!==t.name)return i.a.createElement(v.a,{name:"logout",size:r,color:n});a="md-cart"}return i.a.createElement(j.a,{name:a,size:r,color:n})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement(_.Screen,{name:"Restaurantes",component:Q}),i.a.createElement(_.Screen,{name:"Home",component:X}),i.a.createElement(_.Screen,{name:"Carrinho",component:P}),i.a.createElement(_.Screen,{name:"Logout",component:$})))}var te=a(10),ae=a.n(te);function ne(e){e.route;var t=Me.getState().cartReducer.user,a=Object(o.useState)(""),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)({}),m=r()(d,2),f=m[0],g=m[1];return oe(t,l,g),""==c||0==Object.keys(f).length?i.a.createElement(s.a,null,i.a.createElement(u.a,null,"Sorry")):i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:ie.restaurantesOffer},"Pratos Disponibilizados:"),i.a.createElement(y.a,null,Object.keys(f[c].Pratos).map((function(e){return i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ie.button,key:f[c].Pratos[e].Id,onPress:function(){}},i.a.createElement(s.a,{style:ie.containerRow},i.a.createElement(s.a,{style:ie.containerRow},i.a.createElement(E.a,{style:ie.image,source:re(f[c].Pratos[e].image)})),i.a.createElement(s.a,{style:ie.containerColumn},i.a.createElement(u.a,{style:ie.restaurantesOffer},f[c].Pratos[e].Name),i.a.createElement(u.a,{style:ie.foodText},"Op\xe7\xf5es : ",f[c].Pratos[e].Opcoes,"\n","Pre\xe7o : ",f[c].Pratos[e].Preco," \u20ac")),i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ie.delButton,onPress:function(){Ye.ref("restaurantes/"+c+"/Pratos/"+e).remove(),oe(t,l,g)}},i.a.createElement(v.a,{name:"delete",size:25}))))}))))}var re=function(e){var t=Ge[e];return null!=t?t:Ge.default};function oe(e,t,a){return ae.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ae.a.awrap(Ye.ref("Users/"+e).once("value").then((function(e){return t(e.val().restaurante)})));case 2:return n.next=4,ae.a.awrap(Ye.ref("restaurantes").once("value").then((function(e){return a(e.val())})));case 4:case"end":return n.stop()}}),null,null,null,Promise)}var ie=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100},delButton:{flex:1,flexDirection:"row",justifyContent:"center",alignSelf:"auto"}}),ce=Object(m.a)();function le(e){e.route;return i.a.createElement(ce.Navigator,{initialroute:"Pratos",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(ce.Screen,{name:"Pratos",component:ne}))}function se(e){e.route;var t=Me.getState().cartReducer.user,a=Object(o.useState)(""),n=r()(a,2),c=n[0],l=n[1],d=Object(o.useState)({}),m=r()(d,2),f=m[0];return function(e,t,a){ae.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ae.a.awrap(Ye.ref("Users/"+e).once("value").then((function(e){return t(e.val().restaurante)})));case 2:return n.next=4,ae.a.awrap(Ye.ref("restaurantes").once("value").then((function(e){return a(e.val())})));case 4:case"end":return n.stop()}}),null,null,null,Promise)}(t,l,m[1]),""==c||0==Object.keys(f).length?i.a.createElement(s.a,null,i.a.createElement(u.a,null,"Sorry")):i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:ue.restaurantesOffer},"Pedidos:"),i.a.createElement(y.a,null,Object.keys(f[c].pedidos).map((function(e){return i.a.createElement(s.a,{style:ue.button,key:f[c].pedidos[e].Id},i.a.createElement(s.a,{style:ue.containerRow},i.a.createElement(v.a,{name:"new-box",size:50,style:{alignSelf:"center",paddingHorizontal:20}}),i.a.createElement(s.a,{style:ue.containerColumn},i.a.createElement(u.a,{style:ue.restaurantesOffer},f[c].pedidos[e].Morada),i.a.createElement(u.a,{style:ue.foodText},"Pratos : "),i.a.createElement(s.a,{style:ue.containerRow},Object.keys(f[c].pedidos[e].Pratos).map((function(t){return i.a.createElement(s.a,{key:f[c].pedidos[e].Pratos[t].Id},i.a.createElement(u.a,{style:{paddingLeft:10}},f[c].pedidos[e].Pratos[t].Name))}))),i.a.createElement(s.a,{style:ue.containerRow},i.a.createElement(u.a,null,"Status:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},f[c].pedidos[e].Status)),f[c].pedidos[e].Estafeta&&i.a.createElement(s.a,{style:ue.containerRow},i.a.createElement(u.a,null,"Estafeta:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},f[c].pedidos[e].Estafeta)),i.a.createElement(s.a,{style:ue.containerRow},!f[c].pedidos[e].Estafeta&&i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ue.button,onPress:function(){var t=f[c].pedidos[e];t.Status="waiting",t.Restaurante=c,Ye.ref("restaurantes/"+c+"/pedidos/"+e).set(t),Ye.ref("Pedidos").push(f[c].pedidos[e])}},i.a.createElement(v.a,{name:"check-bold",size:15,style:{borderRightWidth:5,borderRightColor:"rgba(0,0,0,0)"}})),i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ue.button,onPress:function(){Ye.ref("restaurantes/"+c+"/pedidos/"+e).remove()}},i.a.createElement(v.a,{name:"delete",size:15}))))))}))))}var ue=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}}),de=Object(m.a)();function me(e){e.route;return i.a.createElement(de.Navigator,{initialroute:"Orders",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(de.Screen,{name:"Pedidos",component:se}))}a(117),a(118),a(119),a(93),a(94),a(95),a(120),a(121),a(122);var fe=Object(g.a)();function ge(){return Object(p.b)()(I(!1)),i.a.createElement(w.a,{independent:!0},i.a.createElement(fe.Navigator,{initialRouteName:"Restaurante",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a=e.color,n=e.size;return"Restaurante"===t.name?i.a.createElement(j.a,{name:"ios-restaurant",size:n,color:a}):"Pedidos"===t.name?i.a.createElement(v.a,{name:"food",size:n,color:a}):i.a.createElement(v.a,{name:"logout",size:n,color:a})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement(fe.Screen,{name:"Restaurante",component:le}),i.a.createElement(fe.Screen,{name:"Pedidos",component:me}),i.a.createElement(fe.Screen,{name:"Logout",component:pe})))}function pe(e){e.navigation;return Object(f.a)(),i.a.createElement(i.a.Fragment,null)}var ye=function(){return Object(T.c)(V)},Ee=a(281);function be(e){e.route;var t=Me.getState().cartReducer.user,a=Object(o.useState)({}),n=r()(a,2),c=n[0];return function(e,t){ae.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.awrap(Ye.ref("Pedidos").once("value").then((function(e){t(e.val())})));case 2:case"end":return e.stop()}}),null,null,null,Promise)}(0,n[1]),null==c||0==Object.keys(c).length?i.a.createElement(s.a,null,i.a.createElement(u.a,{style:ve.restaurantesOffer},"N\xe3o h\xe1 pedidos de momento!")):i.a.createElement(s.a,{style:{flex:1}},i.a.createElement(u.a,{style:ve.restaurantesOffer},"Pedidos:"),i.a.createElement(y.a,null,Object.keys(c).map((function(e){return i.a.createElement(s.a,{style:ve.button,key:c[e].Id},i.a.createElement(s.a,{style:ve.containerRow},i.a.createElement(v.a,{name:"new-box",size:50,style:{alignSelf:"center",paddingHorizontal:20}}),i.a.createElement(s.a,{style:ve.containerColumn},i.a.createElement(u.a,{style:ve.restaurantesOffer},c[e].Morada),i.a.createElement(u.a,{style:ve.foodText},"Pratos : "),i.a.createElement(s.a,{style:ve.containerRow},c[e].Pratos.map((function(t){return i.a.createElement(s.a,{key:c[e].Id},i.a.createElement(u.a,{style:{paddingLeft:10}},t))}))),i.a.createElement(s.a,{style:ve.containerRow},i.a.createElement(u.a,null,"Status:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},c[e].Status)),c[e].Restaurante&&i.a.createElement(s.a,{style:ve.containerRow},i.a.createElement(u.a,null,"Restaurante:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},c[e].Restaurante)),c[e].Estafeta&&i.a.createElement(s.a,{style:ve.containerRow},i.a.createElement(u.a,null,"Estafeta:","\n"),i.a.createElement(u.a,{style:{paddingLeft:10}},c[e].Estafeta)),i.a.createElement(s.a,{style:ve.containerRow},!c[e].Estafeta&&i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ve.button,onPress:function(){var a=c[e];a.Status="A entregar",a.Estafeta=t,Ye.ref("/Pedidos/"+e).set(a),Ye.ref("/restaurantes/"+c[e].Restaurante+"/pedidos/"+c[e].Id).set(a)}},i.a.createElement(v.a,{name:"check-bold",size:15,style:{borderRightWidth:5,borderRightColor:"rgba(0,0,0,0)"}})),c[e].Estafeta&&"Entregue"!=c[e].Status&&i.a.createElement(b.a,{underlayColor:"#DDDDDD",activeOpacity:.3,style:ve.button,onPress:function(){var t=c[e];t.Status="Entregue",Ye.ref("/Pedidos/"+e).set(t),Ye.ref("/restaurantes/"+c[e].Restaurante+"/pedidos/"+c[e].Id).set(t)}},i.a.createElement(u.a,null,"Finalizar Encomenda!"))))))}))))}var ve=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:7},image:{width:150,height:100}}),he=Object(m.a)();function Oe(e){var t=e.route,a="";return t.params&&(a=t.params.estafeta),i.a.createElement(he.Navigator,{initialroute:"Orders",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(he.Screen,{name:"Pedidos",component:be,initialParams:a={estafeta:a}}))}var Se=a(189);function xe(e,t){var a;if("undefined"===typeof Symbol||null==e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return Pe(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Pe(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e["function"===typeof Symbol?Symbol.iterator:"@@iterator"]()).next.bind(a)}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Ce(e){var t=e.route;console.log(t);var a=t.params.estafeta,n=function(){for(var e,t=0,n=0,r=xe(a.feedback);!(e=r()).done;){var o=e.value;console.log(o),t+=o.rating,n+=1}return 1*t/n}();return console.log(n),i.a.createElement(s.a,null,i.a.createElement(u.a,{style:De.restaurantesOffer},"Feedback das entregas:"),i.a.createElement(y.a,null,a.feedback.map((function(e){return i.a.createElement(s.a,{style:De.button,key:e.id},i.a.createElement(s.a,{style:De.containerRow},i.a.createElement(E.a,{style:De.image,source:Ve[e.restaurante].image}),i.a.createElement(s.a,{style:De.containerColumn},i.a.createElement(u.a,{style:De.restaurantesOffer},e.restaurante),i.a.createElement(u.a,{style:De.foodText},"Rating:","\n"," "),i.a.createElement(Se.a,{type:"star",readonly:!0,startingValue:e.rating,tintColor:"rgb(242,242,242)",style:De.rating,imageSize:15}))))})),i.a.createElement(s.a,null,i.a.createElement(u.a,{style:De.restaurantesOffer},"Average Rating: "),i.a.createElement(s.a,{style:De.containerRow},i.a.createElement(Se.a,{type:"star",readonly:!0,tintColor:"rgb(242,242,242)",startingValue:n}),i.a.createElement(u.a,{style:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black",alignSelf:"center"}},n.toFixed(2),"/5!")))))}var De=l.a.create({containerRow:{paddingBottom:10,flexDirection:"row"},containerColumn:{paddingLeft:10,paddingBottom:10,flexDirection:"column"},restaurantesOffer:{fontSize:15,fontWeight:"bold",textAlign:"left",color:"black"},foodText:{fontSize:12,textAlign:"left"},button:{padding:5,borderRadius:13},image:{width:150,height:100},rating:{borderRightWidth:500,borderRightColor:"rgba(0,0,0,0)"}}),we=Object(m.a)();function je(e){var t=e.route,a="";return t.params&&(a=t.params.estafeta),i.a.createElement(we.Navigator,{initialroute:"Feedback",screenOptions:{headerTitleAlign:"center",headerStyle:{backgroundColor:"darkcyan"},headerTintColor:"white"}},i.a.createElement(we.Screen,{name:"Feedback",component:Ce,initialParams:a}))}var ke=a(117),Re=a(118),Te=a(119),ze=a(93),Be=a(94),Ae=a(95),Ie=a(120),Le=a(121),Ve={Vegifruit:{name:"Vegifruit",id:0,PricePoint:"\u20ac",Address:"Rua de S\xe3o Sebasti\xe3o, 122 3810 - 187 Aveiro",Tags:["Vegan","Saladas","Biologico"],Pratos:{"Salada de queijo da serra":{name:"Salada de queijo da serra",id:0,"Pre\xe7o":7,"Op\xe7oes":["Extra azeitonas"],image:Ae},"Quiche Vegetariana s/Gl\xfaten":{name:"Quiche Vegetariana s/Gl\xfaten",id:1,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:ze},"Creme de espinafres":{name:"Creme de espinafres",id:2,"Pre\xe7o":6.5,"Op\xe7\xf5es":[],image:Be}},image:ke},"Green City quiches & saladas, co.":{name:"Green City quiches & saladas, co.",id:1,PricePoint:"\u20ac",Address:"R. de Castro Matoso 28 A, 3810-079 Aveiro",Tags:["Vegan","Saladas","Quiches","Biologico"],Pratos:{"Quiche especial":{name:"Quiche especial",id:0,"Pre\xe7o":6,"Op\xe7oes":["Tamanho grande"],image:Re}},image:Re},"Saladas+":{name:"Saladas+",id:2,PricePoint:"\u20ac",Address:"R. de S\xe3o Sebasti\xe3o 31, 3810-187 Aveiro",Tags:["Vegan","Saladas",,"Biologico"],Pratos:{"Sandes Base":{name:"Sandes Base",id:0,"Pre\xe7o":3.1,"Op\xe7oes":["Extra ovo"],image:Ie},"Prato do dia Peixe":{name:"Prato do dia Peixe",id:1,"Pre\xe7o":7.45,"Op\xe7oes":["Extra tempero"],image:a(122)},"Prato do dia Carne":{name:"Prato do dia Carne",id:2,"Pre\xe7o":7.45,"Op\xe7oes":["Extra acompanhamento"],image:Le}},image:Te}},Ne=ye();function Ue(e){return i.a.createElement(p.a,{store:Ne},i.a.createElement(Fe,{restaurante:e}))}var We=Object(g.a)();function Fe(e){var t=e.restaurante,a=Object(p.b)(),n=t.estafeta;return a(I(!1)),i.a.createElement(w.a,{independent:!0},i.a.createElement(We.Navigator,{initialRouteName:"Pedidos",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a=e.color,n=e.size;return"Pedidos"===t.name?i.a.createElement(j.a,{name:"ios-restaurant",size:n,color:a}):"Feedback"===t.name?i.a.createElement(Ee.a,{name:"feedback",size:n,color:a}):i.a.createElement(v.a,{name:"logout",size:n,color:a})}}},tabBarOptions:{activeTintColor:"tomato",inactiveTintColor:"gray"}},i.a.createElement(We.Screen,{name:"Pedidos",component:Oe,initialParams:n={estafeta:n}}),i.a.createElement(We.Screen,{name:"Feedback",component:je,initialParams:n={estafeta:n}}),i.a.createElement(We.Screen,{name:"Logout",component:He})))}function He(e){e.navigation;return Object(f.a)(),i.a.createElement(i.a.Fragment,null)}a(240);var qe=a(240);a(432);var Ge={xmasPromo:a(233),newYearPromo:a(234),imgVegifruit:a(117),imgGreenCity:a(118),imgSaladasmais:a(119),imgQuichVeg:a(93),imgCremeEspi:a(94),imgSaladaQSerra:a(95),imgSandesBase:a(120),imgPratoCarne:a(121),imgPratoPeixe:a(122),default:a(435)},Qe={cliente:{type:"cliente",password:"cliente"},restaurante:{type:"restaurante",password:"restaurante",restaurante:"Vegifruit"},estafeta:{type:"estafeta",password:"estafeta",feedback:[{id:1,restaurante:"Vegifruit",rating:5},{id:2,restaurante:"Saladas+",rating:4},{id:3,restaurante:"Green City quiches & saladas, co.",rating:4}],pedidos:[{id:1,restaurante:"Saladas+",prato:"Prato do dia Peixe",morada:"Universidade de Aveiro, DECA"},{id:2,restaurante:"Vegifruit",prato:"Salada de queijo da serra",morada:"Universidade de Aveiro, DETI"},{id:3,restaurante:"Green City quiches & saladas, co.",prato:"Quiche especial",morada:"Universidade de Aveiro, CP"}]}},Me=ye();qe.initializeApp({apiKey:"AIzaSyDNVW5qZxXnfqYfnNUvpFUH9dAeQfRmHu4",authDomain:"appams-f22a3.firebaseapp.com",projectId:"appams-f22a3",storageBucket:"appams-f22a3.appspot.com",databaseURL:"https://appams-f22a3-default-rtdb.firebaseio.com/",messagingSenderId:"184182571952",appId:"1:184182571952:web:576eed43083fbf07fc8c75",measurementId:"G-CHN6Z9P409"});var Ye=qe.database();function Je(e){return i.a.createElement(p.a,{store:Me},i.a.createElement(Ze,null))}Object(m.a)();function Ze(){var e=Object(o.useState)(!1),t=r()(e,2),a=t[0],n=t[1],c=Object(o.useState)(!1),l=r()(c,2),s=l[0],u=l[1],d=Object(o.useState)(!1),m=r()(d,2),f=m[0],g=m[1],p=Object(o.useState)(!1),y=r()(p,2),E=y[0],b=y[1],v=Me.getState(),h=v.cartReducer.user;return v=v.cartReducer.isLogged,i.a.createElement(i.a.Fragment,null,v&&i.a.createElement(i.a.Fragment,null,a&&i.a.createElement(ee,{setIsLogged:!0}),s&&i.a.createElement(ge,{restaurante:Qe[h],setIsLogged:!0}),f&&i.a.createElement(Ue,{estafeta:Qe[h],setIsLogged:!0})),!v&&!E&&i.a.createElement(Xe,{user:h,setUser:L,setIsCliente:n,setIsRestaurante:u,setIsEstafeta:g,setToRegister:b}),!v&&E&&i.a.createElement(Ke,{setToRegister:b}))}function Ke(e){var t=e.setToRegister,a=Object(o.useState)(""),n=r()(a,2),l=n[0],m=n[1],g=Object(o.useState)(""),p=r()(g,2),y=p[0],E=p[1],b=Object(o.useState)(""),v=r()(b,2),h=v[0],O=v[1],S=Object(o.useState)({}),x=r()(S,2),P=x[0],C=x[1];return Object(o.useEffect)((function(){qe.database().ref("Users").once("value").then((function(e){return C(e.val())}))}),[]),i.a.createElement(s.a,{style:$e.container},i.a.createElement(u.a,{style:$e.title},"Nutrilink"),i.a.createElement(s.a,{style:$e.loginContainer},i.a.createElement(s.a,{style:$e.inputView},i.a.createElement(c.a,{placeholder:"Username",style:$e.input,onChangeText:function(e){return m(e)}})),i.a.createElement(s.a,{style:$e.inputView},i.a.createElement(c.a,{placeholder:"Password",style:$e.input,onChangeText:function(e){return E(e)},secureTextEntry:!0})),i.a.createElement(s.a,{style:$e.inputView},i.a.createElement(c.a,{placeholder:"Confirm Password",style:$e.input,onChangeText:function(e){return O(e)},secureTextEntry:!0})),i.a.createElement(s.a,{style:$e.containerRow},i.a.createElement(d.a,{style:$e.loginButtonContainer,onPress:function(){if(y==h){var e=P;e[l]={type:"cliente",password:y},Ye.ref("Users").set(e),t(!1),Object(f.a)()}}},i.a.createElement(u.a,{style:$e.loginButtonText},"Confirmar")))))}function Xe(e){e.navigation,e.setIsLogged;var t=e.setIsCliente,a=e.setIsRestaurante,n=e.setIsEstafeta,l=(e.user,e.setUser),m=e.setToRegister,f=Object(o.useState)(""),g=r()(f,2),y=g[0],E=g[1],b=Object(o.useState)({}),v=r()(b,2),h=v[0],O=v[1],S=Object(p.b)();return Object(o.useEffect)((function(){qe.database().ref("Users").once("value").then((function(e){return O(e.val())}))}),[]),i.a.createElement(s.a,{style:$e.container},i.a.createElement(u.a,{style:$e.title},"Nutrilink"),i.a.createElement(s.a,{style:$e.loginContainer},i.a.createElement(s.a,{style:$e.inputView},i.a.createElement(c.a,{placeholder:"Username",style:$e.input,onChangeText:function(e){return S(l(e))}})),i.a.createElement(s.a,{style:$e.inputView},i.a.createElement(c.a,{placeholder:"Password",style:$e.input,onChangeText:function(e){return E(e)},secureTextEntry:!0})),i.a.createElement(s.a,{style:$e.containerRow},i.a.createElement(d.a,{style:$e.loginButtonContainer,onPress:function(){var e=Me.getState().cartReducer.user;qe.database().ref("Users").once("value").then((function(e){return O(e.val())}));for(var r=0,o=Object.keys(h);r<o.length;r++){if(e===o[r]&&y===h[e].password)switch(h[e].type){case"cliente":S(I(!0)),t(!0);break;case"restaurante":S(I(!0)),a(!0),l(h[e].restaurante);break;case"estafeta":S(I(!0)),n(!0)}}}},i.a.createElement(u.a,{style:$e.loginButtonText},"Login")),i.a.createElement(d.a,{style:$e.loginButtonContainer,onPress:function(){m(!0),S(I(!1))}},i.a.createElement(u.a,{style:$e.loginButtonText},"Registar")))))}var $e=l.a.create({container:{backgroundColor:"darkcyan",alignItems:"center",flex:1},containerRow:{paddingTop:20,flexDirection:"row"},loginContainer:{backgroundColor:"darkcyan",alignItems:"center",justifyContent:"center",flex:1},title:{borderTopWidth:100,borderTopColor:"darkcyan",fontSize:40,fontWeight:"bold",color:"cornsilk"},inputView:{borderBottomWidth:10,borderBottomColor:"darkcyan"},input:{backgroundColor:"darkgray",padding:15,borderRadius:5},loginButtonContainer:{elevation:8,backgroundColor:"#009688",borderRadius:28,paddingVertical:15,paddingHorizontal:25},loginButtonText:{fontSize:18,color:"#fff",fontWeight:"bold",alignSelf:"center",textTransform:"uppercase"}})},289:function(e,t,a){a(290),e.exports=a(438)},290:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},435:function(e,t,a){e.exports=a.p+"static/media/favicon.fa4783d1.png"},93:function(e,t,a){e.exports=a.p+"static/media/quicheVegsGluten.cfd4c587.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/cremedeespinafres.d64f4c65.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/saladaqueijoserra.b0d06c06.jpg"}},[[289,1,2]]]);
//# sourceMappingURL=app.d7e29062.chunk.js.map
(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),o=t(26),i=t.n(o),a=t(13),s=t(49),l=t(7),d=t(6),h=t(17),j=t(8),b=t(27),u="https://api.coinpaprika.com/v1";function x(){return fetch("".concat(u,"/coins")).then((function(n){return n.json()}))}function p(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(u,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}var m=t(43),f=t.n(m),O=t(1);var g,v=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return p(e)}),{refetchInterval:1e4}),c=t.isLoading,r=t.data;return Object(O.jsx)("div",{children:c?"Loading chart...":Object(O.jsx)(f.a,{type:"candlestick",series:[{data:null===r||void 0===r?void 0:r.map((function(n){return[Date.parse(n.time_close),n.open.toFixed(2),n.high.toFixed(2),n.low.toFixed(2),n.close.toFixed(2)]}))}],options:{chart:{type:"candlestick",height:300,width:500,toolbar:{show:!1},background:"transparent"},stroke:{curve:"smooth",width:1},yaxis:{show:!1},xaxis:{type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close})),labels:{style:{colors:"#9c88ff"}}},plotOptions:{candlestick:{colors:{downward:"#3C90EB",upward:"#DF7D46"}}}}})})},y=d.c.div(g||(g=Object(l.a)(["\n  table {\n    width: 100%;\n    border: 3px solid ",";\n    background-color: ",";\n    th,\n    td {\n      border: 3px solid ",";\n    }\n    thead {\n      th {\n        color: ",";\n        padding: 2px;\n      }\n    }\n    tbody {\n      tr {\n        td {\n          text-align: center;\n          padding: 2px;\n          color: ",";\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.boxColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor}),(function(n){return n.theme.textColor}));var C,w,k,L,I,F,T,S,q,D,Q=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcvForPrice",e],(function(){return p(e)}),{refetchInterval:1e4}),c=t.isLoading,r=t.data;return Object(O.jsx)("div",{children:c?"Loading price...":Object(O.jsx)(y,{children:Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("th",{children:"High"}),Object(O.jsx)("th",{children:"Low"}),Object(O.jsx)("th",{children:"Close"})]}),Object(O.jsx)("tbody",{children:null===r||void 0===r?void 0:r.slice(0).reverse().map((function(n){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:n.time_close.slice(0,10)}),Object(O.jsxs)("td",{children:["$",n.high.toFixed(2)]}),Object(O.jsxs)("td",{children:["$",n.low.toFixed(2)]}),Object(O.jsxs)("td",{children:["$",n.close.toFixed(2)]})]})}))})]})})})},z=d.c.h1(C||(C=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),P=d.c.span(w||(w=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),M=d.c.div(k||(k=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),$=d.c.header(L||(L=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),_=d.c.div(I||(I=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  padding: 10px 20px;\n  border-radius: 10px;\n"])),(function(n){return n.theme.boxColor})),R=d.c.div(F||(F=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),A=d.c.p(T||(T=Object(l.a)(["\n  margin: 20px 0px;\n"]))),H=d.c.div(S||(S=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),B=d.c.span(q||(q=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.theme.boxColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),E=d.c.div(D||(D=Object(l.a)(["\n  margin-bottom: 20px;\n"])));var J,K,N,U,G,V,W,X=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),r=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(u,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),o=r.isLoading,i=r.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(u,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,d=s.data,x=o||l;return Object(O.jsxs)(M,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:x?"Loading...":null===i||void 0===i?void 0:i.name})}),Object(O.jsx)($,{children:Object(O.jsx)(z,{children:(null===e||void 0===e?void 0:e.name)?e.name:x?"Loading...":null===i||void 0===i?void 0:i.name})}),Object(O.jsx)(E,{children:Object(O.jsx)(h.b,{to:{pathname:"".concat("/react-masterclass","/")},children:"\u2190 Return"})}),x?Object(O.jsx)(P,{children:"Loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(_,{children:[Object(O.jsxs)(R,{children:[Object(O.jsx)("span",{children:"Rank:"}),Object(O.jsx)("span",{children:null===i||void 0===i?void 0:i.rank})]}),Object(O.jsxs)(R,{children:[Object(O.jsx)("span",{children:"Symbol:"}),Object(O.jsxs)("span",{children:["$",null===i||void 0===i?void 0:i.symbol]})]}),Object(O.jsxs)(R,{children:[Object(O.jsx)("span",{children:"Price:"}),Object(O.jsxs)("span",{children:["$",null===d||void 0===d?void 0:d.quotes.USD.price.toFixed(3)]})]})]}),Object(O.jsx)(A,{children:null===i||void 0===i?void 0:i.description}),Object(O.jsxs)(_,{children:[Object(O.jsxs)(R,{children:[Object(O.jsx)("span",{children:"Total Supply:"}),Object(O.jsx)("span",{children:null===d||void 0===d?void 0:d.total_supply})]}),Object(O.jsxs)(R,{children:[Object(O.jsx)("span",{children:"Max Supply:"}),Object(O.jsx)("span",{children:null===d||void 0===d?void 0:d.max_supply})]})]}),Object(O.jsxs)(H,{children:[Object(O.jsx)(B,{isActive:null!==c,children:Object(O.jsx)(h.b,{to:"".concat("/react-masterclass","/").concat(n,"/chart"),children:"Chart"})}),Object(O.jsx)(B,{isActive:null!==t,children:Object(O.jsx)(h.b,{to:"".concat("/react-masterclass","/").concat(n,"/price"),children:"Price"})})]}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"".concat("/react-masterclass","/:coinId/price"),children:Object(O.jsx)(Q,{coinId:n})}),Object(O.jsx)(j.a,{path:"".concat("/react-masterclass","/:coinId/chart"),children:Object(O.jsx)(v,{coinId:n})})]})]})]})},Y=d.c.div(J||(J=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),Z=d.c.header(K||(K=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),nn=d.c.ul(N||(N=Object(l.a)([""]))),en=d.c.li(U||(U=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.boxColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),tn=d.c.h1(G||(G=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),cn=d.c.span(V||(V=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),rn=d.c.img(W||(W=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var on=function(){var n=Object(a.useQuery)("allCoins",x),e=n.isLoading,t=n.data;return Object(O.jsxs)(Y,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("title",{children:"\ucf54\uc778"})}),Object(O.jsx)(Z,{children:Object(O.jsx)(tn,{children:"\ucf54\uc778"})}),e?Object(O.jsx)(cn,{children:"Loading..."}):Object(O.jsx)(nn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(O.jsx)(en,{children:Object(O.jsxs)(h.b,{to:{pathname:"".concat("/react-masterclass","/").concat(n.id),state:{name:n.name}},children:[Object(O.jsx)(rn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var an,sn,ln=function(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"".concat("/react-masterclass","/:coinId"),children:Object(O.jsx)(X,{})}),Object(O.jsx)(j.a,{path:"".concat("/react-masterclass","/"),children:Object(O.jsx)(on,{})})]})})},dn=t(48),hn={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",boxColor:"rgba(0,0,0,0.5)"},jn={bgColor:"#f5f6fa",textColor:"#2f3640",accentColor:"#9c88ff",boxColor:"white"},bn=Object(d.b)(an||(an=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",';\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\nbutton{\n  display:flex;\n  margin: 0;\n  padding: 0.5rem 1rem;\n\n  font-family: "Noto Sans KR", sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: center;\n  text-decoration: none;\n\n  display: inline-block;\n  width: auto;\n\n  border: 1px;\n  border-radius: 4px;\n  background-color: ',";\n  color:",";\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),un=d.c.div(sn||(sn=Object(l.a)(["\n  display: flex;\n  justify-content: end;\n"])));function xn(n){var e=n.toggleTheme;return Object(O.jsx)(un,{children:Object(O.jsx)("button",{onClick:e,children:"Toggle Theme"})})}var pn=function(){var n=Object(c.useState)("LightTheme"),e=Object(s.a)(n,2),t=e[0],r=e[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(d.a,{theme:"LightTheme"===t?jn:hn,children:[Object(O.jsx)(bn,{}),Object(O.jsx)(xn,{toggleTheme:function(){r("LightTheme"===t?"DarkTheme":"LightTheme")}}),Object(O.jsx)(ln,{}),Object(O.jsx)(dn.ReactQueryDevtools,{initialIsOpen:!0})]})})},mn=new a.QueryClient;i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(a.QueryClientProvider,{client:mn,children:Object(O.jsx)(pn,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.cc7a6d02.chunk.js.map
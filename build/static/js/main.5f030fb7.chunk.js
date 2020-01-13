(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(75)},36:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a.n(r),i=(a(36),a(8)),s=a(5),o=a(10),u=a(7),m=a(9),p=a(28),d=a.n(p),E=a(12),h=a.n(E),g=(a(68),function(e){return e}),v=function(e){return c.a.createElement(i.b,{to:"/cities/".concat(e)},c.a.createElement("div",null,e))},f=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(m.a)(l,2),o=i[0],u=i[1],p=Object(s.f)(),E={placeholder:"City...",value:a,onChange:function(e,t){var a=t.newValue;r(a)},autoFocus:!0},f=function(e){var t="https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".concat(e,"&types=(cities)&key=").concat("AIzaSyCVfiQ54AOkAtg73o3QXz8etvQCzCAFquw");h.a.get(t).then((function(e){var t=e.data.predictions.map((function(e){return e.description}));u(t)})).catch((function(){return u([])}))};return c.a.createElement("div",{className:"search-container"},c.a.createElement("h1",null,"Weather app"),c.a.createElement("h3",{style:{textAlign:"center"}},"Helps you find weather conditions in chosen City"),c.a.createElement(d.a,{suggestions:o,onSuggestionsFetchRequested:function(e){var t=e.value;f(t)},onSuggestionsClearRequested:function(){u([])},getSuggestionValue:g,renderSuggestion:v,inputProps:E,onSuggestionSelected:function(e,t){var a=t.suggestion;"enter"===t.method&&p.push("/cities/".concat(a))},alwaysRenderSuggestions:!0,highlightFirstSuggestion:!0}))},y=a(6),b=(a(74),function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),u=o[0],p=o[1],d=Object(s.g)().city;Object(n.useEffect)((function(){var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(d,"&appid=").concat("aa1142eac2cd6d762d231d2777fe6959","&units=metric");h.a.get(e).then((function(e){var t=e.data;r({temperature:t.main.temp,city:t.name,country:t.sys.country,humidity:t.main.humidity,description:t.weather[0].description,feelsLike:t.main.feels_like})})).catch((function(e){var t=e.response.data.message,a=t.charAt(0).toUpperCase()+t.slice(1);p(a)}))}),[d]);var E=a.temperature,g=a.country,v=a.humidity,f=a.description,b=a.feelsLike;return c.a.createElement("div",{className:"result"},u?c.a.createElement("p",{className:"error-msg"},u):c.a.createElement("ul",{className:"result-list"},c.a.createElement("div",{className:"result-item"},c.a.createElement(y.a,{icon:"temperature-high"}),c.a.createElement("li",null,"Temperature:",c.a.createElement("span",{className:"result-value"},E," \u2103"))),c.a.createElement("div",{className:"result-item"},c.a.createElement(y.a,{icon:"city"}),c.a.createElement("li",null,"City:",c.a.createElement("span",{className:"result-value"},d))),c.a.createElement("div",{className:"result-item"},c.a.createElement(y.a,{icon:"globe"}),c.a.createElement("li",null,"Country:",c.a.createElement("span",{className:"result-value"},g))),c.a.createElement("div",{className:"result-item"},c.a.createElement(y.a,{icon:"water"}),c.a.createElement("li",null,"Humidity:",c.a.createElement("span",{className:"result-value"},v))),c.a.createElement("div",{className:"result-item"},c.a.createElement(y.a,{icon:"cloud-sun-rain"}),c.a.createElement("li",null,"Description:",c.a.createElement("span",{className:"result-value"},f))),c.a.createElement("div",{className:"result-item"},b>=5?c.a.createElement(y.a,{icon:"smile"}):c.a.createElement(y.a,{icon:"frown"}),c.a.createElement("li",null,"Feels-like:",c.a.createElement("span",{className:"result-value"},b)))),c.a.createElement(i.b,{to:"/",className:"back"},c.a.createElement("button",{className:"back-button"},"Back to Home Page")))});o.b.add(u.f,u.a,u.d,u.g,u.b,u.e,u.c);var w=function(){return c.a.createElement(i.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:f}),c.a.createElement(s.a,{path:"/cities/:city",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.5f030fb7.chunk.js.map
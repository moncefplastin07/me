(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1833:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=n(7294),u=n(9008),f=n(1664);function d(e){return(0,r.jsx)("button",{onClick:e.onClick,className:"text-4xl z-50\tduration-200 ease-in-out fixed right-1.5\ttop-1.5\t".concat("dark"==e.displayTheme?"rotate-360":""),children:"dark"==e.displayTheme?"\ud83c\udf1d":"\ud83c\udf1a"})}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(i,e);var t,n,c,s=h(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=s.call(this,e)).state={displayTheme:"light"},t}return t=i,(n=[{key:"componentDidMount",value:function(){this.setState({displayTheme:window.localStorage.displayTheme||"light"}),document.getElementById("__next").classList.add(window.localStorage.displayTheme||"light"),document.querySelector("html").style.scrollBehavior="smooth"}},{key:"toggleDisplayTheme",value:function(){var e="light"==this.state.displayTheme?"dark":"light";return document.getElementById("__next").classList.replace(this.state.displayTheme,e),window.localStorage.setItem("displayTheme",e),e}},{key:"render",value:function(){var e=this;return(0,r.jsxs)("div",{className:"min-h-screen\tw-full font-mono transition-colors duration-500\t ease-linear dark:bg-black dark:text-gray-300 ",children:[(0,r.jsxs)(u.default,{children:[(0,r.jsx)("title",{children:this.props.title}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"icon",href:"https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?s=512"})]}),(0,r.jsxs)("div",{className:"m-auto max-w-4xl sm:w-full",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"p-5",children:[(0,r.jsx)(f.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})," ","|"," ",(0,r.jsx)(f.default,{href:"/about",children:(0,r.jsx)("a",{children:"About me"})})]})}),(0,r.jsx)(d,{onClick:function(){return e.setState({displayTheme:e.toggleDisplayTheme()})},displayTheme:this.state.displayTheme}),this.props.children]})]})}}])&&o(t.prototype,n),c&&o(t,c),i}(l.Component)},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),s=n(4651),i=n(7426);var l={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],s=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,g=i.useIntersection({rootMargin:"200px"}),j=r(g,2),w=j[0],k=j[1],_=a.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);a.default.useEffect((function(){var e=k&&n&&c.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(o,d,h,{locale:t})}),[h,d,k,b,n,o]);var N={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:s}))}(e,o,d,h,m,y,v,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,T=o&&o.isLocaleDomain&&c.getDomainLocale(h,E,o&&o.locales,o&&o.domainLocales);N.href=T||c.addBasePath(c.addLocale(h,E,o&&o.defaultLocale))}return a.default.cloneElement(t,N)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=o.useRef(),l=o.useState(!1),u=r(l,2),f=u[0],d=u[1],h=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[h,f]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var s=new Map},2562:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1833);t.default=function(){return(0,r.jsxs)(o.Z,{title:"Moncef Gaha",children:[(0,r.jsxs)("div",{className:"w-80 m-auto rounded-full mb-10 border-gray-300 relative",children:[(0,r.jsx)("img",{src:"https://www.gravatar.com/avatar/ea52ed86c481ca2816b8403acdbc9169?s=512",className:"w-80 m-auto rounded-full"}),(0,r.jsxs)("p",{className:"absolute -right-24 -bottom-10 xs:right-0 xs:-bottom-5 transform -rotate-12 rounded-md\tbg-opacity-20 bg-red-200 border border-red-300 py-1 px-2 inline-flex",children:[(0,r.jsx)("span",{className:"relative text-sm p-1 font-bold",children:"Hi there"}),(0,r.jsx)("p",{className:"delay-75\tease-in-out animate-roll",children:"\ud83d\udc4b"})]})]}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h1",{className:"text-5xl font-bold",children:"Moncef Gaha"}),(0,r.jsxs)("p",{className:"text-gray-800 p-5",children:[(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:"https://github.com/moncefplastin07",className:"hover:text-gray-600",children:"Github"})}),(0,r.jsxs)("span",{children:[" ","."," "]}),(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:"https://twitter.com/moncefplastin07/",className:"hover:text-gray-600",children:"Twitter"})}),(0,r.jsxs)("span",{children:[" ","."," "]}),(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:"https://facebook.com/moncefplastin07/",className:"hover:text-gray-600",children:"Facebook"})}),(0,r.jsxs)("span",{children:[" ","."," "]}),(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:"https://instagram.com/moncefplastin07/",className:"hover:text-gray-600",children:"Instagram"})})]}),(0,r.jsx)("p",{className:"text-xl p-4",children:"Web backend Developer from Biskra/Algeria"}),(0,r.jsxs)("p",{className:"text-md p-5",children:["Email:"," ",(0,r.jsx)("a",{href:"mailto:x@moncefgaha.me",className:"font-bold p-2 rounded-md border border-green-300 bg-green-300 bg-opacity-20",children:"x@moncefgaha.me"})]})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
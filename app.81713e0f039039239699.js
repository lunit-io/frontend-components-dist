!function(t){function e(e){for(var n,a,i=e[0],c=e[1],l=e[2],h=0,u=[];h<i.length;h++)a=i[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(d&&d(e);u.length;)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={0:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;s.push([187,1]),o()}([,,,,,,,,,,,,,,,,function(t,e,o){"use strict";function n(){try{return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}catch(t){return console.error(t),!1}}o.d(e,"a",(function(){return n}))},,,function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o(0),r=o.n(n);const s=Object(n.createContext)({contentWindow:window});function a({stateRef:t}){return r.a.createElement(s.Consumer,null,e=>{t(e)})}},,,,,,,,,,,,function(t,e,o){"use strict";var n=o(96);o.o(n,"CornerstoneSingleImage")&&o.d(e,"CornerstoneSingleImage",(function(){return n.CornerstoneSingleImage})),o.o(n,"InsightViewer")&&o.d(e,"InsightViewer",(function(){return n.InsightViewer})),o.o(n,"globalStyle")&&o.d(e,"globalStyle",(function(){return n.globalStyle})),o.o(n,"installWADOImageLoader")&&o.d(e,"installWADOImageLoader",(function(){return n.installWADOImageLoader})),o.o(n,"unloadImage")&&o.d(e,"unloadImage",(function(){return n.unloadImage})),o.o(n,"useViewerInteractions")&&o.d(e,"useViewerInteractions",(function(){return n.useViewerInteractions}));var r=o(97);o.d(e,"installWADOImageLoader",(function(){return r.a}));o(98);var s=o(99);o.d(e,"unloadImage",(function(){return s.a}));var a=o(100);o.d(e,"InsightViewer",(function(){return a.a}));o(102),o(59),o(103),o(134),o(133),o(104),o(105),o(136),o(106),o(107),o(108),o(109),o(110),o(111),o(113),o(114),o(115),o(116),o(61),o(62),o(63);var i=o(117);o.d(e,"useViewerInteractions",(function(){return i.a}));o(118),o(119),o(60),o(120),o(135),o(121),o(122),o(123),o(47);var c=o(64);o.d(e,"CornerstoneSingleImage",(function(){return c.a}));o(124),o(33),o(125),o(126),o(127),o(128),o(129),o(137),o(130);var l=o(65);o.d(e,"globalStyle",(function(){return l.a}));o(131),o(19)},,function(t,e,o){"use strict";async function n(t){return new Promise(e=>{setTimeout(e,t)})}o.d(e,"a",(function(){return r}));class r{constructor(t={}){this.options=t,this.loadImage=({imageId:t,options:e})=>"number"===typeof this.options.timeout?Promise.race([cornerstone.loadImage(t,e),n(this.options.timeout).then(()=>{throw new Error("TIMEOUT")})]):cornerstone.loadImage(t,e)}}},,,,,,,,,,,,,,function(t,e,o){"use strict";function n(t){const e=t.detail;if(e&&"string"===typeof e.url&&"string"===typeof e.imageId&&"number"===typeof e.loaded&&"number"===typeof e.total&&"number"===typeof e.percentComplete)return e}o.d(e,"a",(function(){return n}))},function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n=o(2);const r=n.e`
  to {
    stroke-dashoffset: 0;
  }
`,s=n.c`
  stroke-dasharray: 10, 10;
  stroke-dashoffset: 1000;
  animation: ${r} 10s linear infinite;
`},,,,,,,,,,,function(t,e,o){"use strict";o.d(e,"a",(function(){return h}));var n=o(16),r=o(0),s=o.n(r),a=o(2),i=o(19),c=o(70),l=o(48);function d(t,e){return e.map(([e,o])=>{const n=cornerstone.pixelToCanvas(t,{x:e,y:o});return n.x+","+n.y}).join(" ")}class h extends r.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({draw:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({draw:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&("touch-only"!==this.props.device&&"stylus-only"!==this.props.device&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw)),Object(n.a)()&&"mouse-only"!==this.props.device&&this.element.addEventListener("touchstart",this.onTouchStartToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("touchstart",this.onTouchStartToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=t=>{t.stopPropagation(),this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(c.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=t=>{t.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onTouchStartToStartDraw=t=>{if(("stylus-only"===this.props.device||"mouse-and-stylus"===this.props.device)&&"stylus"!==t.targetTouches[0].touchType)return;if(t.targetTouches.length>1)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(t=>({...t,polygon:[]}));if(1!==t.targetTouches.length)return;if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY,this.deactivateInitialEvents(),this.activateTouchDrawEvents();const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.targetTouches[0].pageX,t.targetTouches[0].pageY);this.setState(t=>({...t,polygon:[[o,n]]}))},this.activateTouchDrawEvents=()=>{this.element&&(this.element.addEventListener("touchmove",this.onTouchMoveToDraw),this.element.addEventListener("touchend",this.onTouchEndToEndDraw),this.element.addEventListener("touchcancel",this.onTouchEndToEndDraw),window.addEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.deactivateTouchDrawEvents=()=>{this.element&&(this.element.removeEventListener("touchmove",this.onTouchMoveToDraw),this.element.removeEventListener("touchend",this.onTouchEndToEndDraw),this.element.removeEventListener("touchcancel",this.onTouchEndToEndDraw),window.removeEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.onTouchMoveToDraw=t=>{if(1!==t.targetTouches.length||1!==t.changedTouches.length)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(t=>({...t,polygon:[]}));if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(t.targetTouches[0].pageX-this.startX),Math.abs(t.targetTouches[0].pageY-this.startY))>20&&(this.preventClickEvent=!0);const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.targetTouches[0].pageX,t.targetTouches[0].pageY);this.setState(t=>({...t,polygon:[...t.polygon,[o,n]]}))},this.onTouchEndToEndDraw=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,t),this.setState(t=>({...t,polygon:[]}))},this.onKeyDownToCancelTouchDraw=t=>{"escape"===t.key.toLowerCase()&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.cancelTouchDraw())},this.cancelTouchDraw=()=>{this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.setState(t=>({...t,polygon:[]}))},this.onMouseDownToStartDraw=t=>{if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=t.pageX,this.startY=t.pageY,this.deactivateInitialEvents(),this.activateMouseDrawEvents();const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,polygon:[[o,n]]}))},this.activateMouseDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.deactivateMouseDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.onMouseMoveToDraw=t=>{if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(t.pageX-this.startX),Math.abs(t.pageY-this.startY))>20&&(this.preventClickEvent=!0);const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,polygon:[...t.polygon,[o,n]]}))},this.onMouseUpToEndDraw=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.props.onAdd(this.state.polygon,t),this.setState(t=>({...t,polygon:[]}))},this.onMouseLeaveToCancelDraw=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.cancelMouseDraw()},this.onKeyDownToCancelMouseDraw=t=>{"escape"===t.key.toLowerCase()&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.cancelMouseDraw())},this.cancelMouseDraw=()=>{this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.setState(t=>({...t,polygon:[]}))},this.state={polygon:[]}}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),s.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.polygon&&this.state.polygon.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("polyline",{points:d(this.props.cornerstoneRenderData.element,this.state.polygon)}),!1!==this.props.animateStroke&&s.a.createElement("polyline",{points:d(this.props.cornerstoneRenderData.element,this.state.polygon),"data-highlight":"highlight"}))))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents())}}h.defaultProps={device:"all"};Object(a.d)(h)`
  position: absolute;
  top: 0;
  left: 0;

  --color: rgb(255, 224, 0);
  --stroke-width: 4px;
  --fill-color: rgba(255, 224, 0, 0.2);

  > polyline:first-child {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: var(--contour-drawer-fill-color, var(--fill-color));
  }

  > polyline[data-highlight] {
    stroke: #ffffff;
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: transparent;
    ${l.a}
  }
`},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(0);function r(t){const[e,o]=Object(n.useState)(null);return Object(n.useEffect)(()=>{if(t){const e=t.progress.subscribe(t=>{o(t<1?t:null)});return()=>{e.unsubscribe()}}o(null)},[t]),e}},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(66);const r=({element:t}={})=>({getElement:e,getCurrentViewport:o,updateViewport:r,getContentWindow:s})=>(t||(t=e()),Object(n.a)({element:t,getCurrentViewport:o,onMove:t=>r({voi:t}),onEnd:()=>{},contentWindow:s()}))},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(67);const r=({element:t}={})=>({getElement:e,getCurrentViewport:o,getContentWindow:r,updateViewport:s})=>(t||(t=e()),Object(n.a)({element:t,getCurrentViewport:o,onMove:t=>s({translation:t}),onEnd:()=>{},contentWindow:r()}))},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(68);const r=({element:t}={})=>({getElement:e,updateViewport:o,getCurrentViewport:r,getContentWindow:s,getMinScale:a,getMaxScale:i})=>(t||(t=e()),Object(n.a)({element:t,getMinMaxScale:()=>[a(),i()],getCurrentViewport:r,onZoom:t=>o(t),contentWindow:s()}))},function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o(28),r=o(33),s=o(47),a=o(82);const i=new r.a;class c{constructor(t,e={}){this.imageId=t,this.options=e,this._imageSubject=void 0,this._progressSubject=void 0,this._cancel=[],this._loader=void 0,this._destoyed=!1,this.destroy=()=>{this.options&&"function"===typeof this.options.unload&&this.options.unload(this.imageId),cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._cancel.forEach(t=>t()),this._destoyed=!0},this.onProgress=t=>{const e=Object(s.a)(t);e&&e.imageId===this.imageId&&this._progressSubject.next(Math.min(e.loaded/e.total,.99))},this.loadImage=async t=>{try{const e=await this._loader.loadImage({imageId:t,options:{loader:Object(a.a)(t=>this._cancel.push(t))}});cornerstone.events.removeEventListener("cornerstoneimageloadprogress",this.onProgress),this._destoyed||(this._imageSubject.next(e),this._progressSubject.next(1))}catch(e){this._destoyed||(console.warn(`It will retry loadImage(${t}):`,e),this.loadImage(t))}},this._imageSubject=new n.a(null),this._progressSubject=new n.a(0),this._loader=e.loader||i,cornerstone.events.addEventListener("cornerstoneimageloadprogress",this.onProgress),this.loadImage(t)}get image(){return this._imageSubject.asObservable()}get progress(){return this._progressSubject.asObservable()}}},function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n=o(2);const r=n.c`
  --contour-viewer-color: #ffffff;
  --contour-viewer-focused-color: rgb(255, 194, 17);
  --contour-viewer-stroke-width: 3px;
  --contour-viewer-focused-stroke-width: 6px;
  --contour-viewer-fill-color: rgba(0, 0, 0, 0.2);
  --contour-viewer-focused-fill-color: rgba(0, 0, 0, 0.4);

  --contour-drawer-color: rgb(255, 224, 0);
  --contour-drawer-stroke-width: 4px;
  --contour-drawer-fill-color: rgba(255, 224, 0, 0.2);

  --pin-color: #ffffff;
  --pin-focused-color: rgb(255, 194, 17);
`,s=n.c`
  :root {
    ${r};
  }
`},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(16);function r({element:t,getCurrentViewport:e,onMove:o,onEnd:r,contentWindow:s}){let a,i,c,l;function d(){t.addEventListener("mousedown",m),Object(n.a)()&&t.addEventListener("touchstart",u)}function h(){t.removeEventListener("mousedown",m),t.removeEventListener("touchstart",u)}function u(t){if(t.targetTouches.length>1)return s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v),void d();if(1!==t.targetTouches.length)return;t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const o=e();o&&(h(),a=t.targetTouches[0].pageX,i=t.targetTouches[0].pageY,c=o.voi.windowCenter,l=o.voi.windowWidth,s.addEventListener("touchmove",p),s.addEventListener("touchend",v),s.addEventListener("touchcancel",v))}function p(t){if(1!==t.targetTouches.length||1!==t.changedTouches.length)return s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v),void d();if(t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault(),!e())return;const n=t.targetTouches[0].pageX-a,r=t.targetTouches[0].pageY-i;o({windowWidth:Math.max(l+n,1),windowCenter:Math.max(c+r,1)})}function v(t){s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v),d(),r()}function m(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=e();n&&(h(),a=o.pageX,i=o.pageY,c=n.voi.windowCenter,l=n.voi.windowWidth,s.addEventListener("mousemove",f),s.addEventListener("mouseup",g),t.addEventListener("mouseleave",g))}function f(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const e=t.pageX-a,n=t.pageY-i;o({windowWidth:Math.max(l+e,1),windowCenter:Math.max(c+n,1)})}function g(e){0===e.button&&(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),s.removeEventListener("mousemove",f),s.removeEventListener("mouseup",g),t.removeEventListener("mouseleave",g),d(),r())}return d(),()=>{t.removeEventListener("mousedown",m),t.removeEventListener("touchstart",u),s.removeEventListener("mousemove",f),s.removeEventListener("mouseup",g),t.removeEventListener("mouseleave",g),s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v)}}},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n=o(16);function r({element:t,getCurrentViewport:e,onMove:o,onEnd:r,contentWindow:s}){let a,i,c,l;function d(){t.addEventListener("mousedown",m),Object(n.a)()&&t.addEventListener("touchstart",u)}function h(){t.removeEventListener("mousedown",m),t.removeEventListener("touchstart",u)}function u(t){if(t.targetTouches.length>1)return s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v),void d();if(1!==t.targetTouches.length)return;t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const o=e();o&&(h(),a=t.targetTouches[0].pageX,i=t.targetTouches[0].pageY,c=o.translation.x,l=o.translation.y,s.addEventListener("touchmove",p),s.addEventListener("touchend",v),s.addEventListener("touchcancel",v))}function p(t){if(1!==t.targetTouches.length||1!==t.changedTouches.length)return s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v),void d();t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const n=e();if(!n)return;const r=(t.targetTouches[0].pageX-a)/n.scale,h=(t.targetTouches[0].pageY-i)/n.scale;o({x:c+r,y:l+h})}function v(t){s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v),d(),r()}function m(o){if(0!==o.button)return;o.stopPropagation(),o.stopImmediatePropagation(),o.preventDefault();const n=e();n&&(h(),a=o.pageX,i=o.pageY,c=n.translation.x,l=n.translation.y,s.addEventListener("mousemove",f),s.addEventListener("mouseup",g),t.addEventListener("mouseleave",g))}function f(t){t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const n=e();if(!n)return;const r=(t.pageX-a)/n.scale,s=(t.pageY-i)/n.scale;o({x:c+r,y:l+s})}function g(e){0===e.button&&(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),s.removeEventListener("mousemove",f),s.removeEventListener("mouseup",g),t.removeEventListener("mouseleave",g),d(),r())}return d(),()=>{t.removeEventListener("mousedown",m),s.removeEventListener("mousemove",f),s.removeEventListener("mouseup",g),t.removeEventListener("mouseleave",g),t.removeEventListener("touchstart",u),s.removeEventListener("touchmove",p),s.removeEventListener("touchend",v),s.removeEventListener("touchcancel",v)}}},function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var n=o(16),r=o(157),s=o(156);function a({element:t,getMinMaxScale:e,getCurrentViewport:o,onZoom:a,contentWindow:i}){function c(n){n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation();const[r,s]=e(),c=o();if(!c)return;const l=n.deltaY>0?1:-1,d=Math.max(r,Math.min(s,c.scale-.03*l));if(c.scale===d)return;const{top:h,left:u,width:p,height:v}=t.getBoundingClientRect(),m=n.pageX-i.scrollX-(u+p/2),f=n.pageY-i.scrollY-(h+v/2),g=(1-d/c.scale)*m,w=(1-d/c.scale)*f;a({translation:{x:c.translation.x+g/d,y:c.translation.y+w/d},scale:d})}let l,d,h,u;function p(e){if(2!==e.targetTouches.length)return;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const n=o();if(!n)return;u=n.scale,h=n.translation,l=[{x:e.targetTouches[0].pageX,y:e.targetTouches[0].pageY},{x:e.targetTouches[1].pageX,y:e.targetTouches[1].pageY}];const r=Math.abs(l[0].x-l[1].x),s=Math.abs(l[0].y-l[1].y);d=Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),t.removeEventListener("touchstart",p),t.addEventListener("touchmove",v),t.addEventListener("touchend",m),t.addEventListener("touchcancel",m)}function v(t){if(2!==t.targetTouches.length||2!==t.changedTouches.length)return;t.stopPropagation(),t.stopImmediatePropagation(),t.preventDefault();const e=[{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY},{x:t.changedTouches[1].pageX,y:t.changedTouches[1].pageY}],o=Math.abs(e[0].x-e[1].x),n=Math.abs(e[0].y-e[1].y),r=Math.sqrt(Math.pow(o,2)+Math.pow(n,2)),s=u*(r/d),i=((e[0].x+e[1].x)/2-(l[0].x+l[1].x)/2)/s,c=((e[0].y+e[1].y)/2-(l[0].y+l[1].y)/2)/s;a({translation:{x:h.x+i,y:h.y+c},scale:s})}function m(n){const i=o();if(!i)return;const[c,l]=e();if(i.scale<c){const t=Object(s.a)(e=>{const o=Object(r.a)(e/500);e>500?(a({translation:i.translation,scale:c}),t.stop()):a({translation:i.translation,scale:i.scale+(c-i.scale)*o})})}else if(i.scale>l){const t=Object(s.a)(e=>{const o=Object(r.a)(e/500);e>500?(a({translation:i.translation,scale:l}),t.stop()):a({translation:i.translation,scale:i.scale+(l-i.scale)*o})})}t.removeEventListener("touchmove",v),t.removeEventListener("touchend",m),t.removeEventListener("touchcancel",m),t.addEventListener("touchstart",p)}return t.addEventListener("wheel",c),Object(n.a)()&&t.addEventListener("touchstart",p),()=>{t.removeEventListener("wheel",c),t.removeEventListener("touchstart",p),t.removeEventListener("touchmove",v),t.removeEventListener("touchend",m),t.removeEventListener("touchcancel",m)}}},,function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n=o(141),r=o.n(n);function s(t,e){return t.find(t=>r()(e,t.polygon))||null}},,,,,,function(t,e,o){"use strict";function n(t,e){return t.find(t=>{const[[o,n],[r,s]]=t.polygon,[a,i]=e,c=Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(s-n),2));return Math.sqrt(Math.pow(Math.abs(a-o),2)+Math.pow(Math.abs(i-n),2))<=c})||null}o.d(e,"a",(function(){return n}))},,,,,,function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));const n=t=>(e,o,n={},r={})=>{const{cornerstone:s}=cornerstoneWADOImageLoader.external,a=new XMLHttpRequest;return new Promise((i,c)=>{a.open("get",e,!0),a.responseType="arraybuffer",Object.keys(n).forEach(t=>{a.setRequestHeader(t,n[t])}),r.deferred={resolve:i,reject:c},r.url=e,r.imageId=o,"function"===typeof t&&t((function(){try{a.abort()}catch(t){}})),a.onreadystatechange=()=>{4===a.readyState&&200===a.status&&i(a.response)},a.onloadstart=()=>{const t={url:e,imageId:o};s&&s.triggerEvent(s.events,"cornerstoneimageloadstart",t)},a.onloadend=()=>{const t={url:e,imageId:o};s.triggerEvent(s.events,"cornerstoneimageloadend",t)},a.onprogress=({loaded:t,lengthComputable:n,total:r})=>{let a;n&&(a=Math.round(t/r*100));const i={url:e,imageId:o,loaded:t,total:r,percentComplete:a};s.triggerEvent(s.events,"cornerstoneimageloadprogress",i)},a.send()})}},,,,,,,,,,,,,,function(t,e){},function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));let n=!1;function r(){n||(n=!0,cornerstoneWADOImageLoader.external.dicomParser=dicomParser,cornerstoneWADOImageLoader.external.cornerstone=cornerstone)}},function(t,e,o){"use strict"},function(t,e,o){"use strict";function n(t){function e(t){var e,o,n;/^wadouri:/.test(t)&&(null===(e=cornerstoneWADOImageLoader)||void 0===e||null===(o=e.wadouri)||void 0===o||null===(n=o.dataSetCacheManager)||void 0===n||n.unload(t))}Array.isArray(t)?t.forEach(t=>e(t)):"string"===typeof t&&e(t)}o.d(e,"a",(function(){return n}))},function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var n=o(0),r=o.n(n),s=o(19),a=o(66),i=o(67),c=o(68);class l extends n.Component{constructor(...t){super(...t),this.element=void 0,this.currentViewport=null,this.currentImage=null,this.teardownPanInteraction=null,this.teardownAdjustInteraction=null,this.teardownZoomInteraction=null,this.imageSubscription=null,this.needImageInitialize=!0,this.contentWindow=window,this.elementRef=t=>{this.element=t,t&&(!0===this.props.pan&&this.startPanInteraction(this.props.pan),!0===this.props.adjust&&this.startAdjustInteraction(this.props.adjust),!0===this.props.zoom&&this.startZoomInteraction(this.props.zoom))},this.initImage=t=>{cornerstone.disable(this.element),cornerstone.enable(this.element,{renderer:"webgl"});let e=this.getDefaultViewport(t,this.element);if(!e)throw new Error("defaultViewport\ub294 null\uc77c \uc218 \uc5c6\ub2e4.");if(Array.isArray(this.props.defaultViewportTransforms)){const t=e.scale;for(const o of this.props.defaultViewportTransforms){const n=o({element:this.element,currentViewport:e,minScale:t,maxScale:3});e={...e,...n}}}e={...e,hflip:this.props.flip,invert:this.props.invert},cornerstone.displayImage(this.element,t,e),this.setImage(t),this.setViewport(e),this.startPanInteraction(this.props.pan),this.startAdjustInteraction(this.props.adjust),this.startZoomInteraction(this.props.zoom)},this.subscribeImage=t=>{if(t)if(t.voiLUT=void 0,this.needImageInitialize)this.needImageInitialize=!1,this.initImage(t);else{if(!this.currentViewport)throw new Error("\uc5b4\ub5a4 \uc0c1\ud669\uc778\uc9c0 \ud655\uc778 \ud544\uc694!!!");cornerstone.displayImage(this.element,t,this.currentViewport)}},this.onImageRenderered=t=>{const e=t.detail;e&&e.canvasContext&&e.element&&e.enabledElement&&e.image&&"number"===typeof e.renderTimeInMs&&e.viewport?(this.currentViewport=e.viewport,this.props.updateCornerstoneRenderData(e)):console.error("CornerstoneEventData\uc5d0 \uc5c6\ub294 \uc815\ubcf4\uac00 \uc788\ub2e4???",e)},this.startPanInteraction=t=>{this.teardownPanInteraction&&this.teardownPanInteraction();const e=t instanceof this.contentWindow.HTMLElement?t:!0===t?this.element:null;e&&(this.teardownPanInteraction=Object(i.a)({element:e,getCurrentViewport:()=>this.currentViewport,onMove:t=>this.updateCurrentViewport({translation:t}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startAdjustInteraction=t=>{this.teardownAdjustInteraction&&this.teardownAdjustInteraction();const e=t instanceof this.contentWindow.HTMLElement?t:!0===t?this.element:null;e&&(this.teardownAdjustInteraction=Object(a.a)({element:e,getCurrentViewport:()=>this.currentViewport,onMove:t=>this.updateCurrentViewport({voi:t}),onEnd:()=>{},contentWindow:this.contentWindow}))},this.startZoomInteraction=t=>{this.teardownZoomInteraction&&this.teardownZoomInteraction();const e=t instanceof this.contentWindow.HTMLElement?t:!0===t?this.element:null;e&&(this.teardownZoomInteraction=Object(c.a)({element:e,getMinMaxScale:()=>[this.getMinScale(),this.getMaxScale()],getCurrentViewport:()=>this.currentViewport,onZoom:t=>this.updateCurrentViewport(t),contentWindow:this.contentWindow}))},this.getElement=()=>this.element,this.getContentWindow=()=>this.contentWindow,this.getCurrentViewport=()=>this.currentViewport,this.getDefaultViewport=(t,e)=>t&&e?cornerstone.getDefaultViewportForImage(e,t):null,this.getMinScale=()=>{const t=this.getDefaultViewport(this.currentImage,this.element);if(!t)throw new Error("viewport\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc640\uc57c\ub9cc \ud55c\ub2e4");return t.scale},this.getMaxScale=()=>3,this.updateViewport=t=>{this.currentViewport&&this.updateCurrentViewport(t)},this.getViewportTransformParams=()=>({element:this.element,minScale:this.getMinScale(),maxScale:this.getMaxScale(),currentViewport:this.currentViewport}),this.setCornerstoneImage=t=>{this.needImageInitialize=!0,this.setImage(null),this.imageSubscription&&(this.imageSubscription.unsubscribe(),this.imageSubscription=null),this.imageSubscription=t.image.subscribe(this.subscribeImage)},this.setImage=t=>{this.currentImage=t},this.setViewport=t=>{this.currentViewport=t,cornerstone.setViewport(this.element,this.currentViewport)},this.updateCurrentViewport=t=>{if(!this.currentViewport)throw new Error("viewport\uac00 \uc5c6\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uc2e4\ud589\ub418\uba74 \uc548\ub41c\ub2e4");const e="function"===typeof t?t(this.currentViewport):t;this.currentViewport={...this.currentViewport,...e},cornerstone.setViewport(this.element,this.currentViewport)}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("div",{ref:this.elementRef,style:{width:this.props.width,height:this.props.height}}))}componentDidMount(){this.element.addEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),this.setCornerstoneImage(this.props.image)}componentWillUnmount(){this.element.removeEventListener(cornerstone.EVENTS.IMAGE_RENDERED,this.onImageRenderered),cornerstone.disable(this.element),this.imageSubscription&&this.imageSubscription.unsubscribe(),this.teardownPanInteraction&&this.teardownPanInteraction(),this.teardownAdjustInteraction&&this.teardownAdjustInteraction(),this.teardownZoomInteraction&&this.teardownZoomInteraction()}componentDidUpdate(t){const{width:e,height:o,flip:n,invert:r,pan:s,adjust:a,zoom:i,resetTime:c,image:l}=this.props,d=this.getDefaultViewport(this.currentImage,this.element);if(t.pan!==s&&this.startPanInteraction(s),t.adjust!==a&&this.startAdjustInteraction(a),t.zoom!==i&&this.startZoomInteraction(i),d&&(t.resetTime!==c?this.updateCurrentViewport({...d,hflip:n,invert:d.invert?!r:r}):t.flip===n&&t.invert===r||this.updateCurrentViewport({hflip:n,invert:d.invert?!r:r})),(t.width!==e||t.height!==o)&&this.currentImage){cornerstone.resize(this.element);const t=cornerstone.getViewport(this.element);if(!t)throw new Error("getViewport() is returns not a Viewport");this.setViewport(t)}t.image!==l&&this.setCornerstoneImage(l)}}},,function(t,e,o){"use strict";var n=o(69),r=o.n(n),s=o(0),a=o.n(s),i=o(2);class c extends s.Component{constructor(...t){super(...t),this.svgRef=Object(s.createRef)()}render(){const{cornerstoneRenderData:t,contours:e,focusedContour:o}=this.props;return a.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},e.length>0&&t&&t.element&&e.map(e=>{const n=function(t,e){return e.map(([e,o])=>{const n=cornerstone.pixelToCanvas(t,{x:e,y:o});return[n.x,n.y]})}(t.element,e.polygon),i=r()([n],1),c=e===o,l=e.dataAttrs||{};return a.a.createElement(s.Fragment,{key:"polygon"+e.id},!0===this.props.border&&a.a.createElement("polygon",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,points:n.map(([t,e])=>`${t},${e}`).join(" ")})),a.a.createElement("polygon",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,points:n.map(([t,e])=>`${t},${e}`).join(" ")})),!0===this.props.border&&a.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:i[0],y:i[1]}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id),a.a.createElement("text",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:i[0],y:i[1]}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id))}))}}c.defaultProps={border:!0};Object(i.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;

  --color: #ffffff;
  --focused-color: rgb(255, 194, 17);
  --stroke-width: 3px;
  --focused-stroke-width: 6px;
  --fill-color: rgba(0, 0, 0, 0.2);
  --focused-fill-color: rgba(0, 0, 0, 0.4);

  > polygon {
    stroke-width: var(--contour-viewer-stroke-width, var(--stroke-width));
    stroke: var(--contour-viewer-color, var(--color));
    fill: var(--contour-viewer-fill-color, var(--fill-color));
    transition: stroke 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      stroke-width: var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width));
      stroke: var(--contour-viewer-focused-color, var(--focused-color));
      fill: var(--contour-viewer-focused-fill-color, var(--focused-fill-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)) + 2px);
      stroke: #000000;
      fill: transparent;

      &[data-focused] {
        stroke-width: calc(var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width)) + 2px);
        stroke: #000000;
      }
    }
  }

  > text {
    fill: var(--contour-viewer-color, var(--color));
    font-family: proximanova, noto_sans, sans-serif;
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
    transition: fill 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
      fill: transparent;
    }
  }
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2),a=o(19),i=o(70);class c extends n.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({hover:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({hover:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=t=>{this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(i.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={polygon:[]}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(s.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
`},function(t,e,o){"use strict";var n=o(2);n.d.div`
  background-color: #000000;
  position: relative;
  width: ${({width:t})=>t}px;
  height: ${({height:t})=>t}px;
`,n.d.div`
  position: absolute;
  left: 5px;
  top: 5px;
`,n.d.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
`,n.d.div`
  position: absolute;
  right: 5px;
  top: 5px;
`,n.d.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`},function(t,e,o){"use strict";o(158);var n=o(0),r=o(2);o(60);Object(n.createContext)({inProgress:!1,setProgress:()=>{},unsetProgress:()=>{}});r.d.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2);class a extends n.Component{constructor(...t){super(...t),this.svgRef=Object(n.createRef)()}render(){const{cornerstoneRenderData:t,contours:e,focusedContour:o}=this.props;return r.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},e.length>0&&t&&t.element&&e.map(e=>{const{cx:s,cy:a,r:i}=function(t,e){const{x:o,y:n}=cornerstone.pixelToCanvas(t,{x:e[0][0],y:e[0][1]}),{x:r,y:s}=cornerstone.pixelToCanvas(t,{x:e[1][0],y:e[1][1]});return{cx:o,cy:n,r:Math.sqrt(Math.pow(Math.abs(r-o),2)+Math.pow(Math.abs(s-n),2))}}(t.element,e.polygon),c=e===o,l=e.dataAttrs||{};return r.a.createElement(n.Fragment,{key:"circle"+e.id},!0===this.props.border&&r.a.createElement("circle",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,cx:s,cy:a,r:i})),r.a.createElement("circle",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,cx:s,cy:a,r:i})),!0===this.props.border&&r.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:s,y:a}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id),r.a.createElement("text",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:s,y:a}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id))}))}}a.defaultProps={border:!0};Object(s.d)(a)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;

  --color: #ffffff;
  --focused-color: rgb(255, 194, 17);
  --stroke-width: 3px;
  --focused-stroke-width: 6px;
  --fill-color: rgba(0, 0, 0, 0.2);
  --focused-fill-color: rgba(0, 0, 0, 0.4);

  > circle {
    stroke-width: var(--contour-viewer-stroke-width, var(--stroke-width));
    stroke: var(--contour-viewer-color, var(--color));
    fill: var(--contour-viewer-fill-color, var(--fill-color));
    transition: stroke 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      stroke-width: var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width));
      stroke: var(--contour-viewer-focused-color, var(--focused-color));
      fill: var(--contour-viewer-focused-fill-color, var(--focused-fill-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)) + 2px);
      stroke: #000000;
      fill: transparent;

      &[data-focused] {
        stroke-width: calc(var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width)) + 2px);
        stroke: #000000;
      }
    }
  }

  > text {
    fill: var(--contour-viewer-color, var(--color));
    font-family: proximanova, noto_sans, sans-serif;
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
    transition: fill 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
      fill: transparent;
    }
  }
`},function(t,e,o){"use strict";var n=o(16),r=o(0),s=o.n(r),a=o(2),i=o(19),c=o(76),l=o(48);class d extends r.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.preventClickEvent=!1,this.startX=0,this.startY=0,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({draw:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({draw:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&("touch-only"!==this.props.device&&"stylus-only"!==this.props.device&&(this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.addEventListener("mousedown",this.onMouseDownToStartDraw)),Object(n.a)()&&"mouse-only"!==this.props.device&&this.element.addEventListener("touchstart",this.onTouchStartToStartDraw),this.element.addEventListener("click",this.onMouseClickToRemove))},this.deactivateInitialEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus),this.element.removeEventListener("mousedown",this.onMouseDownToStartDraw),this.element.removeEventListener("touchstart",this.onTouchStartToStartDraw),this.element.removeEventListener("click",this.onMouseClickToRemove))},this.onMouseMoveToFindFocus=t=>{t.stopPropagation(),this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(c.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.onMouseClickToRemove=t=>{t.stopPropagation(),this.focused&&!this.preventClickEvent&&this.props.onRemove(this.focused)},this.onTouchStartToStartDraw=t=>{if(("stylus-only"===this.props.device||"mouse-and-stylus"===this.props.device)&&"stylus"!==t.targetTouches[0].touchType)return;if(t.targetTouches.length>1)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(t=>({...t,p1:null,p2:null}));if(1!==t.targetTouches.length)return;if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=t.targetTouches[0].pageX,this.startY=t.targetTouches[0].pageY,this.deactivateInitialEvents(),this.activateTouchDrawEvents();const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.targetTouches[0].pageX,t.targetTouches[0].pageY);this.setState(t=>({...t,p1:[o,n]}))},this.activateTouchDrawEvents=()=>{this.element&&(this.element.addEventListener("touchmove",this.onTouchMoveToDraw),this.element.addEventListener("touchend",this.onTouchEndToEndDraw),this.element.addEventListener("touchcancel",this.onTouchEndToEndDraw),window.addEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.deactivateTouchDrawEvents=()=>{this.element&&(this.element.removeEventListener("touchmove",this.onTouchMoveToDraw),this.element.removeEventListener("touchend",this.onTouchEndToEndDraw),this.element.removeEventListener("touchcancel",this.onTouchEndToEndDraw),window.removeEventListener("keydown",this.onKeyDownToCancelTouchDraw))},this.onTouchMoveToDraw=t=>{if(1!==t.targetTouches.length||1!==t.changedTouches.length)return this.deactivateTouchDrawEvents(),this.activateInitialEvents(),void this.setState(t=>({...t,p1:null,p2:null}));if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(t.targetTouches[0].pageX-this.startX),Math.abs(t.targetTouches[0].pageY-this.startY))>20&&(this.preventClickEvent=!0);const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.targetTouches[0].pageX,t.targetTouches[0].pageY);this.setState(t=>({...t,p2:[o,n]}))},this.onTouchEndToEndDraw=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],t),this.setState(t=>({...t,p1:null,p2:null}))},this.onKeyDownToCancelTouchDraw=t=>{"escape"===t.key.toLowerCase()&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.cancelTouchDraw())},this.cancelTouchDraw=()=>{this.deactivateTouchDrawEvents(),this.activateInitialEvents(),this.setState(t=>({...t,p1:null,p2:null}))},this.onMouseDownToStartDraw=t=>{if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");this.preventClickEvent=!1,this.startX=t.pageX,this.startY=t.pageY,this.deactivateInitialEvents(),this.activateMouseDrawEvents();const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,p1:[o,n]}))},this.activateMouseDrawEvents=()=>{this.element&&(this.element.addEventListener("mousemove",this.onMouseMoveToDraw),this.element.addEventListener("mouseup",this.onMouseUpToEndDraw),this.element.addEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.addEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.deactivateMouseDrawEvents=()=>{this.element&&(this.element.removeEventListener("mousemove",this.onMouseMoveToDraw),this.element.removeEventListener("mouseup",this.onMouseUpToEndDraw),this.element.removeEventListener("mouseleave",this.onMouseLeaveToCancelDraw),window.removeEventListener("keydown",this.onKeyDownToCancelMouseDraw))},this.onMouseMoveToDraw=t=>{if(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!this.props.cornerstoneRenderData)throw new Error("cornerstoneRenderEventData\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub2e4!");!this.preventClickEvent&&Math.max(Math.abs(t.pageX-this.startX),Math.abs(t.pageY-this.startY))>20&&(this.preventClickEvent=!0);const e=this.props.cornerstoneRenderData.element,{x:o,y:n}=cornerstone.pageToPixel(e,t.pageX,t.pageY);this.setState(t=>({...t,p2:[o,n]}))},this.onMouseUpToEndDraw=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.state.p1&&this.state.p2&&this.props.onAdd([this.state.p1,this.state.p2],t),this.setState(t=>({...t,p1:null,p2:null}))},this.onMouseLeaveToCancelDraw=t=>{t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.cancelMouseDraw()},this.onKeyDownToCancelMouseDraw=t=>{"escape"===t.key.toLowerCase()&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.cancelMouseDraw())},this.cancelMouseDraw=()=>{this.deactivateMouseDrawEvents(),this.activateInitialEvents(),this.setState(t=>({...t,p1:null,p2:null}))},this.state={p1:null,p2:null}}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),s.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className,style:this.props.style},this.props.cornerstoneRenderData&&this.state.p1&&this.state.p2&&(()=>{const{x:t,y:e}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p1[0],y:this.state.p1[1]}),{x:o,y:n}=cornerstone.pixelToCanvas(this.props.cornerstoneRenderData.element,{x:this.state.p2[0],y:this.state.p2[1]}),r=Math.sqrt(Math.pow(Math.abs(o-t),2)+Math.pow(Math.abs(n-e),2));return s.a.createElement(s.a.Fragment,null,s.a.createElement("circle",{cx:t,cy:e,r:r}),!1!==this.props.animateStroke&&s.a.createElement("circle",{cx:t,cy:e,r:r,"data-highlight":"highlight"}),s.a.createElement("line",{x1:t,y1:e,x2:o,y2:n}))})()))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.draw!==this.props.draw&&(this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents()),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&(this.deactivateInitialEvents(),this.deactivateMouseDrawEvents())}}d.defaultProps={device:"all"};Object(a.d)(d)`
  position: absolute;
  top: 0;
  left: 0;

  --color: rgb(255, 224, 0);
  --stroke-width: 4px;
  --fill-color: rgba(255, 224, 0, 0.2);

  > circle:first-child {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: var(--contour-drawer-fill-color, var(--fill-color));
  }

  > circle[data-highlight] {
    stroke: #ffffff;
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: transparent;
    ${l.a}
  }

  > line {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
  }
`},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2),a=o(19),i=o(76);class c extends n.Component{constructor(t){super(t),this.svg=null,this.element=null,this.focused=null,this.contentWindow=window,this.svgRef=t=>{t&&this.svg&&this.element&&(this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.svg=t,this.element=this.getElement(this.props),this.activateInitialEvents())),this.svg=t},this.getElement=({hover:t})=>t instanceof this.contentWindow.HTMLElement?t:this.svg,this.canActivate=({hover:t})=>t instanceof this.contentWindow.HTMLElement||!0===t,this.activateInitialEvents=()=>{this.element&&this.element.addEventListener("mousemove",this.onMouseMoveToFindFocus)},this.deactivateInitialEvents=()=>{this.element&&this.element.removeEventListener("mousemove",this.onMouseMoveToFindFocus)},this.onMouseMoveToFindFocus=t=>{this.findFocus(t.pageX,t.pageY)},this.findFocus=(t,e)=>{if(!this.props.contours||0===this.props.contours.length||!this.props.cornerstoneRenderData)return;const o=this.props.cornerstoneRenderData.element,{x:n,y:r}=cornerstone.pageToPixel(o,t,e);this.focused=Object(i.a)(this.props.contours,[n,r]),this.props.onFocus(this.focused)},this.state={p1:null,p2:null}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{stateRef:({contentWindow:t})=>this.contentWindow=t}),r.a.createElement("svg",{ref:this.svgRef,role:"figure",width:this.props.width,height:this.props.height,className:this.props.className}))}componentDidMount(){if(!this.svg)throw new Error("<svg> is not initialized");this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents())}componentDidUpdate(t){t.hover!==this.props.hover&&(this.element&&this.deactivateInitialEvents(),this.canActivate(this.props)&&(this.element=this.getElement(this.props),this.activateInitialEvents()))}componentWillUnmount(){this.element&&this.deactivateInitialEvents()}}Object(s.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
`},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0);o(2).d.div`
  display: inline-block;
  background-color: #000000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`},function(t,e,o){"use strict";var n=o(193),r=(o(190),o(161),o(164),o(160),o(162),o(165),o(27),o(31),o(0),o(2));Object(r.d)(n.a)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
`},,function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";var n=o(0);o(19);n.Component},function(t,e,o){"use strict";var n=o(2),r=o(48),s=o(59);Object(n.d)(s.a)`
  position: absolute;
  top: 0;
  left: 0;

  --color: rgb(255, 224, 0);
  --stroke-width: 4px;

  > polyline:first-child {
    stroke: var(--contour-drawer-color, var(--color));
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: transparent;
  }

  > polyline[data-highlight] {
    stroke: #ffffff;
    stroke-width: var(--contour-drawer-stroke-width, var(--stroke-width));
    fill: transparent;
    ${r.a}
  }
`},function(t,e,o){"use strict";var n=o(69),r=o.n(n),s=o(0),a=o.n(s),i=o(2);class c extends s.Component{constructor(...t){super(...t),this.svgRef=Object(s.createRef)()}render(){const{cornerstoneRenderData:t,contours:e,focusedContour:o}=this.props;return a.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},e.length>0&&t&&t.element&&e.map(e=>{const n=function(t,e){return e.map(([e,o])=>{const n=cornerstone.pixelToCanvas(t,{x:e,y:o});return[n.x,n.y]})}(t.element,e.polygon),i=r()([n],1),c=e===o,l=e.dataAttrs||{};return a.a.createElement(s.Fragment,{key:"polygon"+e.id},!0===this.props.border&&a.a.createElement("polyline",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,points:n.map(([t,e])=>`${t},${e}`).join(" ")})),a.a.createElement("polyline",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,points:n.map(([t,e])=>`${t},${e}`).join(" ")})),!0===this.props.border&&a.a.createElement("text",Object.assign({},l,{"data-border":"border","data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:i[0],y:i[1]}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id),a.a.createElement("text",Object.assign({},l,{"data-id":e.id,"data-focused":c||void 0,fontSize:14*Math.max(1,t.viewport.scale),x:i[0],y:i[1]}),e.label?"function"===typeof e.label?e.label(e):e.label:e.id))}))}}c.defaultProps={border:!0};Object(i.d)(c)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;

  --color: #ffffff;
  --focused-color: rgb(255, 194, 17);
  --stroke-width: 3px;
  --focused-stroke-width: 6px;

  > polyline {
    stroke-width: var(--contour-viewer-stroke-width, var(--stroke-width));
    stroke: var(--contour-viewer-color, var(--color));
    transition: stroke 120ms ease-out, stroke-width 120ms ease-out;
    fill: transparent;

    &[data-focused] {
      stroke-width: var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width));
      stroke: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)) + 2px);
      stroke: #000000;

      &[data-focused] {
        stroke-width: calc(var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width)) + 2px);
        stroke: #000000;
      }
    }
  }

  > text {
    fill: var(--contour-viewer-color, var(--color));
    font-family: proximanova, noto_sans, sans-serif;
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
    transition: fill 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
      fill: transparent;
    }
  }
`},function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=o(0),r=o(61),s=o(62),a=o(63);function i(t,{element:e}={}){return Object(n.useMemo)(()=>t.map(t=>{switch(t){case"pan":return Object(s.a)({element:e});case"adjust":return Object(r.a)({element:e});case"zoom":return Object(a.a)({element:e});default:return}}),[e,...t])}},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(16),o(0)},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";o(0),o(192),o(90)},function(t,e,o){"use strict";var n=o(0);o(64);const r=Object(n.createContext)();r.Consumer},function(t,e,o){"use strict";o(28),o(90);var n=o(33);o(47),o(82);new n.a},function(t,e,o){"use strict"},function(t,e,o){"use strict";o(28)},function(t,e,o){"use strict";o(28)},function(t,e,o){"use strict";o(28),o(90);new(o(33).a)},function(t,e,o){"use strict";o(28)},function(t,e,o){"use strict"},function(t,e,o){"use strict";o(0);var n=o(2),r=o(65);n.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${r.a}
`},,function(t,e,o){"use strict";var n=o(0);n.Component;o(2).d.canvas`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`},function(t,e,o){"use strict";function n(t){const e=180*((o=t)<0?2*Math.PI+o:o)/Math.PI;var o;return e<45?"east":e<135?"south":e<225?"west":e<315?"north":"east"}const r={east:"middle",south:"text-after-edge",west:"middle",north:"text-before-edge"},s={east:"start",south:"middle",west:"end",north:"middle"};var a=o(0),i=o.n(a),c=o(2);function l(t,e){return e.map(([e,o])=>{const n=cornerstone.pixelToCanvas(t,{x:e,y:o});return[n.x,n.y]})}class d extends a.Component{constructor(...t){super(...t),this.svgRef=Object(a.createRef)()}render(){const{cornerstoneRenderData:t,contours:e,focusedContour:o}=this.props;return i.a.createElement("svg",{ref:this.svgRef,className:this.props.className,style:this.props.style,width:this.props.width,height:this.props.height},e.length>0&&t&&t.element&&e.map(e=>{const c=l(t.element,e.polygon),d=l(t.element,function({start:t,end:e,lineWidth:o,arrowWidth:n,arrowDepth:r}){const s=Math.atan2(t[1]-e[1],t[0]-e[0]),a={south:s,north:s+Math.PI,east:s+1.5*Math.PI,west:s+.5*Math.PI},i=[r*Math.cos(a.north)+t[0],r*Math.sin(a.north)+t[1]];return[t,[n/2*Math.cos(a.east)+i[0],n/2*Math.sin(a.east)+i[1]],[o/2*Math.cos(a.east)+i[0],o/2*Math.sin(a.east)+i[1]],[o/2*Math.cos(a.east)+e[0],o/2*Math.sin(a.east)+e[1]],[o/2*Math.cos(a.west)+e[0],o/2*Math.sin(a.west)+e[1]],[o/2*Math.cos(a.west)+i[0],o/2*Math.sin(a.west)+i[1]],[n/2*Math.cos(a.west)+i[0],n/2*Math.sin(a.west)+i[1]]]}({start:e.arrowStart,end:e.arrowEnd,lineWidth:this.props.lineWidth,arrowDepth:this.props.arrowDepth,arrowWidth:this.props.arrowWidth})),h=e===o,u=e.dataAttrs||{},p=Math.floor(this.props.baseFontSize*Math.max(1,t.viewport.scale)),[v,m]=l(t.element,[e.arrowStart,e.arrowEnd]),f=function({start:t,end:e,fontSize:o}){const a=Math.atan2(t[1]-e[1],t[0]-e[0]),i=n(a+Math.PI),c=o*Math.cos(a+Math.PI)+e[0],l=o*Math.sin(a+Math.PI)+e[1];return{x:c,y:"north"===i?l-o:"south"===i?l+o:l,textAnchor:s[i],dominantBaseline:r[i],"data-direction":i}}({start:v,end:m,fontSize:p});return i.a.createElement(a.Fragment,{key:"polygon"+e.id},!0===this.props.border&&i.a.createElement("polygon",Object.assign({},u,{"data-polygon":"contour","data-border":"border","data-id":e.id,"data-focused":h||void 0,points:c.map(([t,e])=>`${t},${e}`).join(" ")})),i.a.createElement("polygon",Object.assign({},u,{"data-polygon":"contour","data-id":e.id,"data-focused":h||void 0,points:c.map(([t,e])=>`${t},${e}`).join(" ")})),!0===this.props.border&&i.a.createElement("polygon",Object.assign({},u,{"data-polygon":"arrow","data-border":"border","data-id":e.id,"data-focused":h||void 0,points:d.map(([t,e])=>`${t},${e}`).join(" ")})),i.a.createElement("polygon",Object.assign({},u,{"data-polygon":"arrow","data-id":e.id,"data-focused":h||void 0,points:d.map(([t,e])=>`${t},${e}`).join(" ")})),!0===this.props.border&&i.a.createElement("text",Object.assign({},u,{"data-border":"border","data-id":e.id,"data-focused":h||void 0,fontSize:p},f),e.label?"function"===typeof e.label?e.label(e):e.label:e.id),i.a.createElement("text",Object.assign({},u,{"data-id":e.id,"data-focused":h||void 0,fontSize:p},f),e.label?"function"===typeof e.label?e.label(e):e.label:e.id))}))}}d.defaultProps={border:!0,arrowDepth:7,arrowWidth:10,lineWidth:3,baseFontSize:18};Object(c.d)(d)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;

  --color: #ffffff;
  --focused-color: rgb(255, 194, 17);
  --stroke-width: 3px;
  --focused-stroke-width: 6px;
  --fill-color: rgba(0, 0, 0, 0.2);
  --focused-fill-color: rgba(0, 0, 0, 0.4);

  > polygon[data-polygon='contour'] {
    stroke-width: var(--contour-viewer-stroke-width, var(--stroke-width));
    stroke: var(--contour-viewer-color, var(--color));
    fill: var(--contour-viewer-fill-color, var(--fill-color));
    transition: stroke 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      stroke-width: var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width));
      stroke: var(--contour-viewer-focused-color, var(--focused-color));
      fill: var(--contour-viewer-focused-fill-color, var(--focused-fill-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)) + 2px);
      stroke: #000000;
      fill: transparent;

      &[data-focused] {
        stroke-width: calc(var(--contour-viewer-focused-stroke-width, var(--focused-stroke-width)) + 2px);
        stroke: #000000;
      }
    }
  }

  > polygon[data-polygon='arrow'] {
    fill: var(--contour-viewer-color, var(--color));
    transition: fill 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: calc(var(--contour-viewer-stroke-width, var(--stroke-width)));
      stroke: #000000;
      fill: transparent;
    }
  }

  > text {
    fill: var(--contour-viewer-color, var(--color));
    font-family: proximanova, noto_sans, sans-serif;
    font-weight: 600;
    transition: fill 120ms ease-out, stroke-width 120ms ease-out;

    &[data-focused] {
      fill: var(--contour-viewer-focused-color, var(--focused-color));
    }

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
      fill: transparent;
    }
  }
`},function(t,e,o){"use strict";o(0)},function(t,e,o){"use strict";var n=o(0),r=o.n(n),s=o(2);Object(s.d)((function({x:t,y:e,label:o,onEnter:s,onLeave:a,onRemove:i,...c}){const l=Object(n.useCallback)(t=>{t.stopPropagation(),t.nativeEvent.stopImmediatePropagation(),t.preventDefault(),i()},[i]);return r.a.createElement("g",Object.assign({},c,{transform:`translate(${t} ${e})`,onMouseEnter:s,onMouseLeave:a,onClick:l}),r.a.createElement("circle",{cx:0,cy:0,r:4}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)","data-border":"border"}),r.a.createElement("path",{d:"M8,16c0,0,6-5.582,6-10s-2.686-6-6-6S2,1.582,2,6S8,16,8,16z M5,5c0-1.657,1.343-3,3-3s3,1.343,3,3S9.657,8,8,8S5,6.657,5,5  z",transform:"translate(-8 -16)"}),o&&r.a.createElement("g",{transform:"translate(0 -25)"},r.a.createElement("text",null,o),r.a.createElement("text",null,o)))}))`
  cursor: pointer;

  color: var(--pin-color, #ffffff);

  &[data-focused] {
    color: var(--pin-focused-color, rgb(255, 194, 17));
  }

  > circle {
    fill: #000000;
  }

  > path {
    fill: currentColor;

    &[data-border] {
      stroke-width: 4px;
      stroke: #000000;
    }
  }

  > g {
    text {
      text-anchor: middle;
      font-size: 14px;
      font-weight: bold;
    }

    text:first-child {
      stroke-width: 4px;
      stroke: #000000;
    }

    text:last-child {
      fill: currentColor;
    }
  }
`;n.Component},function(t,e,o){"use strict";o(30)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";o.r(e);var n=o(31),r=o(0),s=o.n(r),a=o(14),i=o(2);const c=i.c`
  --button-background-color: rgba(255, 255, 255, 0.2);
  --button-label-color: rgba(255, 255, 255, 0.7);
  --button-background-color-hover: rgba(255, 255, 255, 0.35);
  --button-label-color-hover: rgba(255, 255, 255, 0.9);
  --button-background-color-selected: #00a4c8;
  --button-label-color-selected: #ffffff;
  --button-background-color-disabled: rgba(255, 255, 255, 0.12);
  --button-label-color-disabled: rgba(255, 255, 255, 0.2);

  --panel-background-color: #242e3e;
  --panel-header-background-color: rgba(255, 255, 255, 0.03);
  --panel-icon-color: #8694b1;
  --panel-icon-color-hover: #c5d8f8;
  --panel-title-color: #ffffff;

  --slider-rail-color: rgba(255, 255, 255, 0.4);
  --slider-thumb-color: #ffffff;
  --slider-track-color: rgba(255, 255, 255, 0.6);
  --slider-value-label-color: rgba(0, 0, 0, 0.4);

  --tooltip-background-color: rgba(0, 0, 0, 0.7);
  --tooltip-label-color: #ffffff;

  --snackbar-background-color: rgba(0, 0, 0, 0.7);
  --snackbar-label-color: #ffffff;

  --switch-color: #eeeeee;
  --switch-track-color: rgba(255, 255, 255, 0.2);
  --switch-color-checked: #00a5c8;
  --switch-track-color-checked: rgba(255, 255, 255, 0.2);
`,l=i.c`
  :root {
    ${c};
  }

  body {
    color: white;
    background-color: #222232;
  }

  body,
  button,
  input,
  optgroup,
  select,
  textarea,
  pre {
    font-family: proximanova, noto_sanslight, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.6px;
  }
`;i.b`
  ${l}
`;o(226),o(219);var d=o(153);Object(d.a)({palette:{type:"dark"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}});i.b`
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  ${l}
`;var h=o(163),u=o(145),p=o.n(u);const v=s.a.createElement(p.a,null),m="LunitButton-label",f="LunitButton-icon",g="LunitButton-check";function w({label:t,icon:e,check:o=v,className:n="",selected:a,onChange:i,onClick:c,hideCheck:l,style:d={},disabled:u=!1,...p}){const w=Object(r.useCallback)(t=>{"boolean"===typeof a&&"function"===typeof i&&i(!a),"function"===typeof c&&c(t)},[a,i,c]);return s.a.createElement(h.a,Object.assign({},p,{className:n,"aria-selected":!0===a,style:d,onClick:w,disabled:u}),e&&s.a.createElement("span",{className:f},e),t&&s.a.createElement("span",{className:m},t),!0!==l&&!0===a&&s.a.createElement("span",{className:g},o))}Object(i.d)(w).attrs(t=>{if(!t.label||!t.icon)throw new Error("the props label and icon are required to <IconAndLabelButton>");return"left"===t.layout&&console.warn("<IconAndLabelButton> layout prop is only support 'center'"),!1===t.hideCheck&&console.warn("<IconAndLabelButton> hideCheck prop is only support 'true'"),{...t,hideCheck:!0,layout:"center"}})`
  && {
    flex: 1;
    justify-content: center;

    height: 54px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);
    flex-direction: column;

    .${f} {
      font-size: 21px;
      display: block;
      text-align: center;

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${m} {
      display: block;
      text-align: center;
      margin-bottom: -2px;
    }

    &:hover {
      background-color: var(--button-background-color-hover);
      color: var(--button-label-color-hover);
    }

    &[aria-selected='true'] {
      background-color: var(--button-background-color-selected);
      color: var(--button-label-color-selected);
    }

    &:disabled {
      background-color: var(--button-background-color-disabled);
      color: var(--button-label-color-disabled);
    }
  }
`,Object(i.d)(w)`
  && {
    justify-content: ${({layout:t})=>t};
    padding-left: ${({layout:t})=>"left"===t?"13px":0};

    height: 40px;

    font-size: 13px;
    color: var(--button-label-color);
    background-color: var(--button-background-color);

    .${f} {
      font-size: 21px;
      margin-right: ${({label:t})=>t?"8px":0};
      transform: translateY(2px);

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    .${g} {
      ${({layout:t})=>"left"!==t?"display: none":""};
      position: absolute;
      font-size: 21px;
      right: 5px;
      top: 8px;

      .MuiSvgIcon-root {
        font-size: 1em;
      }
    }

    &:hover {
      background-color: var(--button-background-color-hover);
      color: var(--button-label-color-hover);
    }

    &[aria-selected='true'] {
      background-color: var(--button-background-color-selected);
      color: var(--button-label-color-selected);
    }

    &:disabled {
      background-color: var(--button-background-color-disabled);
      color: var(--button-label-color-disabled);
    }
  }
`,i.c`
  font-size: 13px;
  color: var(--button-label-color);
  background-color: var(--button-background-color);

  &:hover {
    background-color: var(--button-background-color-hover);
    color: var(--button-label-color-hover);
  }

  &[aria-selected='true'] {
    background-color: var(--button-background-color-selected);
    color: var(--button-label-color-selected);
  }

  &:disabled {
    background-color: var(--button-background-color-disabled);
    color: var(--button-label-color-disabled);
  }
`;var b=o(146),E=o.n(b);const y="LunitPanel-header",x="LunitPanel-icon",k="LunitPanel-title",M="LunitPanel-content";const T=Object(i.d)(E.a)`
  transition: transform 0.3s ease-out;
`,D=i.c`
  background-color: var(--panel-background-color);
  position: relative;

  &[aria-disabled='true'] {
  }

  .${y} {
    height: 25px;
    background-color: var(--panel-header-background-color);
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 1px 14px 0 14px;

    .${x} {
      color: var(--panel-icon-color);
      margin-left: -8px;
      margin-right: 6px;
      transform: translateY(2px);
    }

    .${k} {
      color: var(--panel-title-color);
      letter-spacing: 0.2em;
    }
  }

  .${M} {
    padding: 14px;
  }
`,I=i.c`
  .${y} {
    .${x} {
      cursor: pointer;

      &:hover {
        color: var(--panel-icon-color-hover);
      }
    }
  }
`,L=Object(i.d)((function({className:t="",expanded:e,onChange:o,style:n={},title:a,icon:i,children:c,disabled:l}){const d=Object(r.useCallback)(()=>{"boolean"===typeof e&&"function"===typeof o&&o(!e)},[e,o]),h="function"===typeof c?c(!0===e):c,u=function(t,e){const o="function"===typeof t?t(!0===e):t;return o||("boolean"!==typeof e?null:e?s.a.createElement(T,null):s.a.createElement(T,{style:{transform:"rotate(180deg)"}}))}(i,e);return s.a.createElement("div",{className:t,"aria-expanded":!0===e,"aria-disabled":!0===l,style:n},s.a.createElement("div",{className:y},u&&s.a.createElement("span",{className:x,onClick:d},u),s.a.createElement("span",{className:k},"function"===typeof a?a(!0===e):a)),h&&s.a.createElement("div",{className:M},h))}))`
  ${({disabled:t})=>t?i.c`
        opacity: 0.4;
        pointer-events: none;
        user-select: none;
      `:i.c`
        opacity: 1;
      `}
  ${D}
  ${({onChange:t})=>"function"===typeof t?I:""}
`;Object(i.d)((function({sessionId:t,defaultExpanded:e=!0,onChange:o,...n}){const a=Object(r.useMemo)(()=>`__sidebar_panel_${t}__`,[t]),[i,c]=Object(r.useState)(()=>{const t=localStorage.getItem(a);return"string"===typeof t?"open"===t:e}),l=Object(r.useCallback)(t=>{localStorage.setItem(a,t?"open":"close"),c(t),"function"===typeof o&&o(t)},[a,o]);return s.a.createElement(L,Object.assign({},n,{expanded:i,onChange:l}))}))`
  opacity: ${({disabled:t})=>t?.4:1};
  ${D}
  ${I}s
`,i.d.p`
  font-size: 12px;
  margin-top: 0;
  color: #ffffff;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
  }
`,i.d.h3`
  font-size: 12px;
  font-weight: normal;
  margin: 5px 0 4px 0;
  color: currentColor;

  > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 6px;
    transform: translateY(3px);
  }
`;Object(i.d)((function({children:t,className:e=""}){return s.a.createElement("div",{className:e},t)}))`
  position: absolute;
  height: ${25}px;
  display: flex;
  align-items: center;
  top: 0;
  padding-top: 1px;
  right: 12px;
`,i.d.span`
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 11px;
  border-radius: 10px;
`;const j=({gap:t=2})=>i.c`
  display: flex;
  flex-flow: column;

  > :not(:last-child) {
    margin-bottom: ${t}px;
  }
`,C=({gap:t=2})=>i.c`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  > :not(:last-child) {
    margin-right: ${t}px;
  }
`;Object(i.d)((function({className:t="",children:e,style:o}){return s.a.createElement("div",{className:t,style:o},e)}))`
  ${({direction:t})=>"horizontal"===t?C:j};
`;var S=o(165);Object(i.d)(S.a).attrs({valueLabelDisplay:"on"})`
  && {
    color: var(--slider-rail-color);
    height: 19px;

    .MuiSlider-thumb {
      width: 28px;
      height: 19px;
      background-color: var(--slider-thumb-color);
      border-radius: 10px;
      margin-top: -7px;
      margin-left: -14px;
    }

    .MuiSlider-active {
      cursor: none;
    }

    .MuiSlider-valueLabel {
      left: 0;
      top: -7px;
      transform: none;

      * {
        text-align: center;
        width: 28px;
        margin: 0;
        padding: 0;
        transform: none;
        background: transparent;
        color: var(--slider-value-label-color);
        font-size: 13px;
      }
    }

    ,
    .MuiSlider-rail {
      height: 5px;
      border-radius: 2px;
    }

    .MuiSlider-track {
      background-color: var(--slider-track-color);
      height: 5px;
      border-radius: 2px;
    }
  }
`;var P=o(148),O=o.n(P),R=o(86),W=o.n(R),V=o(229),$=o(228);function z({className:t,...e}){const{arrow:o,popper:n,...a}=A(e),[i,c]=s.a.useState(null);return s.a.createElement(V.a,Object.assign({classes:a,PopperProps:{className:n+" "+(t||""),popperOptions:{modifiers:{arrow:{enabled:Boolean(i),element:i}}}}},e,{title:s.a.createElement(r.Fragment,null,e.title,s.a.createElement("span",{className:o,ref:c}))}))}const A=Object($.a)({tooltip:{position:"relative",borderRadius:0,color:"var(--tooltip-label-color)",backgroundColor:"var(--tooltip-background-color)"},arrow:{position:"absolute",fontSize:6,"&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}},popper:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-1.45em",width:"2em",height:"1em","&::before":{borderWidth:"0 1em 1.5em 1em",borderColor:"transparent transparent var(--tooltip-background-color) transparent"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.95em",width:"2em",height:"1em","&::before":{borderWidth:"1.5em 1em 0 1em",borderColor:"var(--tooltip-background-color) transparent transparent transparent"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-1.45em",height:"2em",width:"1em","&::before":{borderWidth:"1em 1.5em 1em 0",borderColor:"transparent var(--tooltip-background-color) transparent transparent"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.95em",height:"2em",width:"1em","&::before":{borderWidth:"1em 0 1em 1.5em",borderColor:"transparent transparent transparent var(--tooltip-background-color)"}}}}),F=(Object(i.d)(z).attrs({children:s.a.createElement(W.a,{style:{color:"rgba(255, 255, 255, 0.6)"}})})`
  --tooltip-background-color: rgba(255, 255, 255, 0.6);
  --tooltip-label-color: #030a18;
`,Object(i.d)(z).attrs({children:s.a.createElement(W.a,{style:{color:"#00a4c8"}})})`
  --tooltip-background-color: #00a4c8;
  --tooltip-label-color: #ffffff;
`,i.e`
  0% {
    opacity: 0.7;
  }
  
  49% {
    opacity: 0.7;
  }
  
  50% {
    opacity: 1;
  }
`),Y=Object(i.d)(O.a)`
  animation: ${F} 1s infinite;
`;Object(i.d)(z).attrs({children:s.a.createElement(Y,{style:{color:"#d6ae41"}})})`
  --tooltip-background-color: #d6ae41;
  --tooltip-label-color: #ffffff;
`,Object(i.d)(z).attrs({children:s.a.createElement(Y,{style:{color:"#c9434b"}})})`
  --tooltip-background-color: #c9434b;
  --tooltip-label-color: #ffffff;
`;o(16),o(85);r.Component;o(190),o(154);var X=o(161);Object(i.d)(X.a)`
  && {
    .MuiSwitch-track {
      opacity: 1;
      background-color: var(--switch-track-color);
    }

    .MuiSwitch-switchBase {
      color: var(--switch-color);

      &.Mui-checked {
        color: var(--switch-color-checked);
      }
    }

    .Mui-checked + .MuiSwitch-track {
      opacity: 1;
      background-color: var(--switch-track-color-checked);
    }
  }
`;var _=o(191);const N=i.c`
  color: #242e3e;

  --button-background-color: #00a4c8;
  --button-label-color: rgba(255, 255, 255, 0.8);
  --button-background-color-hover: #008cb0;
  --button-label-color-hover: rgba(255, 255, 255, 1);
  --button-background-color-selected: #007294;
  --button-label-color-selected: rgba(255, 255, 255, 1);
  --button-background-color-disabled: rgba(0, 164, 200, 0.65);
  --button-label-color-disabled: rgba(255, 255, 255, 0.2);

  --slider-rail-color: rgba(86, 81, 136, 0.4);
  --slider-thumb-color: #6b6b9b;
  --slider-track-color: rgba(86, 81, 136, 0.6);
  --slider-value-label-color: #ffffff;
`;Object(d.a)({palette:{type:"light"},typography:{fontFamily:"proximanova,noto_sanslight,sans-serif",fontWeightLight:200,fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700},overrides:{MuiTooltip:{tooltip:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.5)"}}}}),Object(i.d)(_.a)`
  ${N};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`;var U=o(227);o(221),o(222),o(223),o(224);Object(i.d)(U.a)`
  && {
    .MuiDialog-paper {
      ${N};

      background-color: #ffffff;

      border-radius: 0;

      padding: 30px 50px;

      .MuiDialogTitle-root {
        color: inherit;
        padding: 0;
        margin: 0 0 15px 0;
      }

      .MuiDialogContent-root {
        color: inherit;
        padding: 0;
        margin: 0;
        overflow: unset;
      }

      .MuiDialogActions-root {
        padding: 0;
        margin: 15px 0 0 0;
        justify-content: center;
      }

      .MuiTypography-root {
        color: inherit;
      }
    }
  }
`;var B=o(189);o(152),o(151),o(150);i.d.div`
  ${({soloEnabled:t,width:e,height:o})=>t?K:e/o<1.2?Z:H};
`;const H=i.c`
  display: flex;
  background-color: #1c2331; // line color

  > div {
    flex: 1;

    position: relative;
    overflow: hidden;

    &:not(:last-of-type) {
      margin-right: 1px;
    }
  }
`,Z=i.c`
  display: grid;
  background-color: #1c2331; // line color

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;

  > div {
    position: relative;
    overflow: hidden;
  }
`,K=i.c`
  display: block;
  position: relative;

  > div[data-solo='true'] {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  > div[data-solo='false'] {
    position: absolute;
    left: 100vw;
    top: 0;
    width: 200px;
    height: 300px;
  }
`;Object(i.d)(B.a)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0;
  padding: 4px 6px;
  color: #8694b1;
  font-size: 18px;

  .MuiSvgIcon-root {
    font-size: 1em;
  }
`;i.d.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 10px;
  }

  > :last-child {
    flex: 1;
    text-align: right;
  }
`;var q=o(225);const G=Object(i.d)(q.a)`
  && {
    border-radius: 0;
    background-color: var(--snackbar-background-color);
    color: var(--snackbar-label-color);

    .MuiButton-label,
    .MuiIconButton-label {
      opacity: 0.6;
    }
  }
`;Object(i.d)(G)`
  --snackbar-background-color: rgba(255, 255, 255, 0.6);
  --snackbar-label-color: #030a18;
`,Object(i.d)(G)`
  --snackbar-background-color: #00a4c8;
  --snackbar-label-color: #ffffff;
`,Object(i.d)(G)`
  --snackbar-background-color: #d6ae41;
  --snackbar-label-color: #ffffff;
`,Object(i.d)(G)`
  --snackbar-background-color: #c9434b;
  --snackbar-label-color: #ffffff;
`;const J=i.e`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;Object(i.d)((function({source:t,children:e,...o}){return s.a.createElement("div",o,s.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},t),e)}))`
  position: relative;
  overflow: hidden;

  > * {
    position: relative;
  }

  > video {
    top: 50%;
    left: 50%;
    position: absolute;
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    transform: translate3d(-50%, -50%, 0);

    animation: ${J} 1s ease-out;
  }
`;const Q=i.b`
  ${l}
  ${n.globalStyle}
  
  html {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  #app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;function tt(){const t=Object(r.useMemo)(()=>new n.CornerstoneSingleImage("wadouri:https://fixtures.front.lunit.io/dcm-files/series/CT000010.dcm",{unload:n.unloadImage}),[]);return s.a.createElement("div",null,s.a.createElement(Q,null),s.a.createElement(n.InsightViewer,{width:700,height:600,invert:!1,flip:!1,pan:!0,adjust:!1,zoom:!0,resetTime:Date.now(),image:t,updateCornerstoneRenderData:()=>{}}))}Object(n.installWADOImageLoader)(),Object(a.render)(s.a.createElement(tt,null),document.querySelector("#app"))}]);
//# sourceMappingURL=app.81713e0f039039239699.js.map
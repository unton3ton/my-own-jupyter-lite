"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5788],{850:(o,c,n)=>{n.d(c,{Z:()=>a});var r=n(1799),e=n.n(r),t=n(82609),s=n.n(t)()(e());s.push([o.id,"/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/hopscotch.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,4BAA4B,mBAAmB,EAAE,cAAc,CAAC;AAChE,yCAAyC,8BAA8B,CAAC;AACxE,qCAAqC,mBAAmB,EAAE,iBAAiB,CAAC;AAC5E,wCAAwC,cAAc,CAAC;AACvD,oCAAoC,yCAAyC,CAAC;;AAE9E,iCAAiC,cAAc,CAAC;AAChD,8BAA8B,cAAc,CAAC;AAC7C,gCAAgC,cAAc,CAAC;;AAE/C,qEAAqE,cAAc,CAAC;AACpF,iCAAiC,cAAc,CAAC;AAChD,gCAAgC,cAAc,CAAC;;AAE/C,kCAAkC,cAAc,CAAC;AACjD,oCAAoC,cAAc,CAAC;AACnD,6BAA6B,cAAc,CAAC;AAC5C,+BAA+B,mBAAmB,EAAE,cAAc,CAAC;AACnE,iCAAiC,cAAc,CAAC;AAChD,6BAA6B,cAAc,CAAC;AAC5C,8BAA8B,cAAc,CAAC;;AAE7C,8CAA8C,0BAA0B,EAAE,uBAAuB,CAAC;AAClG,oDAAoD,mBAAmB,EAAE",sourcesContent:["/*\n\n    Name:       Hopscotch\n    Author:     Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}\n.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}\n.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}\n.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}\n.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}\n\n.cm-s-hopscotch span.cm-comment {color: #b33508;}\n.cm-s-hopscotch span.cm-atom {color: #c85e7c;}\n.cm-s-hopscotch span.cm-number {color: #c85e7c;}\n\n.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}\n.cm-s-hopscotch span.cm-keyword {color: #dd464c;}\n.cm-s-hopscotch span.cm-string {color: #fdcc59;}\n\n.cm-s-hopscotch span.cm-variable {color: #8fc13e;}\n.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}\n.cm-s-hopscotch span.cm-def {color: #fd8b19;}\n.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}\n.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}\n.cm-s-hopscotch span.cm-tag {color: #dd464c;}\n.cm-s-hopscotch span.cm-link {color: #c85e7c;}\n\n.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }\n"],sourceRoot:""}]);const a=s},82609:o=>{o.exports=function(o){var c=[];return c.toString=function(){return this.map((function(c){var n=o(c);return c[2]?"@media ".concat(c[2]," {").concat(n,"}"):n})).join("")},c.i=function(o,n,r){"string"==typeof o&&(o=[[null,o,""]]);var e={};if(r)for(var t=0;t<this.length;t++){var s=this[t][0];null!=s&&(e[s]=!0)}for(var a=0;a<o.length;a++){var i=[].concat(o[a]);r&&e[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),c.push(i))}},c}},1799:o=>{function c(o,c){(null==c||c>o.length)&&(c=o.length);for(var n=0,r=new Array(c);n<c;n++)r[n]=o[n];return r}o.exports=function(o){var n,r,e=(r=4,function(o){if(Array.isArray(o))return o}(n=o)||function(o,c){var n=o&&("undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"]);if(null!=n){var r,e,t=[],s=!0,a=!1;try{for(n=n.call(o);!(s=(r=n.next()).done)&&(t.push(r.value),!c||t.length!==c);s=!0);}catch(o){a=!0,e=o}finally{try{s||null==n.return||n.return()}finally{if(a)throw e}}return t}}(n,r)||function(o,n){if(o){if("string"==typeof o)return c(o,n);var r=Object.prototype.toString.call(o).slice(8,-1);return"Object"===r&&o.constructor&&(r=o.constructor.name),"Map"===r||"Set"===r?Array.from(o):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(o,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=e[1],s=e[3];if(!s)return t;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),A="/*# ".concat(i," */"),h=s.sources.map((function(o){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(o," */")}));return[t].concat(h).concat([A]).join("\n")}return[t].join("\n")}},95788:(o,c,n)=>{n.r(c),n.d(c,{default:()=>s});var r=n(46062),e=n.n(r),t=n(850);e()(t.Z,{insert:"head",singleton:!1});const s=t.Z.locals||{}},46062:(o,c,n)=>{var r,e=function(){var o={};return function(c){if(void 0===o[c]){var n=document.querySelector(c);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(o){n=null}o[c]=n}return o[c]}}(),t=[];function s(o){for(var c=-1,n=0;n<t.length;n++)if(t[n].identifier===o){c=n;break}return c}function a(o,c){for(var n={},r=[],e=0;e<o.length;e++){var a=o[e],i=c.base?a[0]+c.base:a[0],A=n[i]||0,h="".concat(i," ").concat(A);n[i]=A+1;var m=s(h),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:h,updater:u(p,c),references:1}),r.push(h)}return r}function i(o){var c=document.createElement("style"),r=o.attributes||{};if(void 0===r.nonce){var t=n.nc;t&&(r.nonce=t)}if(Object.keys(r).forEach((function(o){c.setAttribute(o,r[o])})),"function"==typeof o.insert)o.insert(c);else{var s=e(o.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(c)}return c}var A,h=(A=[],function(o,c){return A[o]=c,A.filter(Boolean).join("\n")});function m(o,c,n,r){var e=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(o.styleSheet)o.styleSheet.cssText=h(c,e);else{var t=document.createTextNode(e),s=o.childNodes;s[c]&&o.removeChild(s[c]),s.length?o.insertBefore(t,s[c]):o.appendChild(t)}}function p(o,c,n){var r=n.css,e=n.media,t=n.sourceMap;if(e?o.setAttribute("media",e):o.removeAttribute("media"),t&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}var l=null,d=0;function u(o,c){var n,r,e;if(c.singleton){var t=d++;n=l||(l=i(c)),r=m.bind(null,n,t,!1),e=m.bind(null,n,t,!0)}else n=i(c),r=p.bind(null,n,c),e=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(n)};return r(o),function(c){if(c){if(c.css===o.css&&c.media===o.media&&c.sourceMap===o.sourceMap)return;r(o=c)}else e()}}o.exports=function(o,c){(c=c||{}).singleton||"boolean"==typeof c.singleton||(c.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(o=o||[],c);return function(o){if(o=o||[],"[object Array]"===Object.prototype.toString.call(o)){for(var r=0;r<n.length;r++){var e=s(n[r]);t[e].references--}for(var i=a(o,c),A=0;A<n.length;A++){var h=s(n[A]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}n=i}}}}}]);
//# sourceMappingURL=5788.a587cd27e984eeed1b8a.js.map
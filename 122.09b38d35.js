(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{254:function(n,t,e){(function(n){function e(n,t){for(var e=0,r=n.length-1;r>=0;r--){var i=n[r];"."===i?n.splice(r,1):".."===i?(n.splice(r,1),e++):e&&(n.splice(r,1),e--)}if(t)for(;e--;e)n.unshift("..");return n}function r(n,t){if(n.filter)return n.filter(t);for(var e=[],r=0;r<n.length;r++)t(n[r],r,n)&&e.push(n[r]);return e}t.resolve=function(){for(var t="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var u=o>=0?arguments[o]:n.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,i="/"===u.charAt(0))}return(i?"/":"")+(t=e(r(t.split("/"),(function(n){return!!n})),!i).join("/"))||"."},t.normalize=function(n){var o=t.isAbsolute(n),u="/"===i(n,-1);return(n=e(r(n.split("/"),(function(n){return!!n})),!o).join("/"))||o||(n="."),n&&u&&(n+="/"),(o?"/":"")+n},t.isAbsolute=function(n){return"/"===n.charAt(0)},t.join=function(){var n=Array.prototype.slice.call(arguments,0);return t.normalize(r(n,(function(n,t){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},t.relative=function(n,e){function r(n){for(var t=0;t<n.length&&""===n[t];t++);for(var e=n.length-1;e>=0&&""===n[e];e--);return t>e?[]:n.slice(t,e-t+1)}n=t.resolve(n).substr(1),e=t.resolve(e).substr(1);for(var i=r(n.split("/")),o=r(e.split("/")),u=Math.min(i.length,o.length),a=u,s=0;s<u;s++)if(i[s]!==o[s]){a=s;break}var c=[];for(s=a;s<i.length;s++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var t=n.charCodeAt(0),e=47===t,r=-1,i=!0,o=n.length-1;o>=1;--o)if(47===(t=n.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?e?"/":".":e&&1===r?"/":n.slice(0,r)},t.basename=function(n,t){var e=function(n){"string"!=typeof n&&(n+="");var t,e=0,r=-1,i=!0;for(t=n.length-1;t>=0;--t)if(47===n.charCodeAt(t)){if(!i){e=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":n.slice(e,r)}(n);return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},t.extname=function(n){"string"!=typeof n&&(n+="");for(var t=-1,e=0,r=-1,i=!0,o=0,u=n.length-1;u>=0;--u){var a=n.charCodeAt(u);if(47!==a)-1===r&&(i=!1,r=u+1),46===a?-1===t?t=u:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){e=u+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===e+1?"":n.slice(t,r)};var i="b"==="ab".substr(-1)?function(n,t,e){return n.substr(t,e)}:function(n,t,e){return t<0&&(t=n.length+t),n.substr(t,e)}}).call(this,e(251))},274:function(n,t,e){"use strict";var r=e(13),i=e(28),o=e(304),u="".endsWith;r(r.P+r.F*e(305)("endsWith"),"String",{endsWith:function(n){var t=o(this,n,"endsWith"),e=arguments.length>1?arguments[1]:void 0,r=i(t.length),a=void 0===e?r:Math.min(i(e),r),s=String(n);return u?u.call(t,s,a):t.slice(a-s.length,a)===s}})},859:function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"plugin",(function(){return a})),e.d(t,"validate",(function(){return s}));e(274);var r=e(268),i=e.n(r),o=(e(243),e(26),e(21),e(22),e(52),e(264),e(269)),u=e(254),a=function(){var t=Object(o.a)(i.a.mark((function t(e,r,o){var a,s,c,f,l,h,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.modulePathPrefix,s=void 0===a?"":a,c=o.relativeToCwd,f=o.prefix,l=void 0===f?"*/":f,h=!0===c,p=r.reduce((function(t,e){var r,i=h?Object(u.relative)(n.cwd(),e.location):Object(u.basename)(e.location);return t[i]||(t[i]=[]),(r=t[i]).push.apply(r,e.document.definitions.filter((function(n){return"OperationDefinition"===n.kind||"FragmentDefinition"===n.kind}))),t}),{}),t.abrupt("return",Object.keys(p).filter((function(n){return p[n].length>0})).map((function(n){var t=p[n];return"\ndeclare module '"+l+s+n+"' {\n  import { DocumentNode } from 'graphql';\n  const defaultDocument: DocumentNode;\n  "+t.filter((function(n){return n.name&&n.name.value})).map((function(n){return"export const "+n.name.value+": DocumentNode;"})).join("\n")+"\n\n  export default defaultDocument;\n}\n    "})).join("\n"));case 4:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),s=function(){var n=Object(o.a)(i.a.mark((function n(t,e,r,o){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o.endsWith(".d.ts")){n.next=2;break}throw new Error('Plugin "typescript-graphql-files-modules" requires extension to be ".d.ts"!');case 2:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()}.call(this,e(251))}}]);
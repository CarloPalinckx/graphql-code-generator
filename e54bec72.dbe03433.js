(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),p=(a(0),a(242)),i={id:"typescript-graphql-files-modules",title:"TypeScript GraphQL Files Modules"},o={id:"plugins/typescript-graphql-files-modules",title:"TypeScript GraphQL Files Modules",description:"If you wish to have a simpler integration in a Webpack project, use graphql-let, it uses this plugin behind the scenes, and provides simpler developer experience.",source:"@site/docs/plugins/typescript-graphql-files-modules.md",permalink:"/docs/plugins/typescript-graphql-files-modules",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-graphql-files-modules.md",sidebar:"sidebar",previous:{title:"TypeScript 1.0 Compatibility",permalink:"/docs/plugins/typescript-compatibility"},next:{title:"TypeScript document nodes",permalink:"/docs/plugins/typescript-document-nodes"}},c=[{value:"Pre-Requirements",id:"pre-requirements",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(p.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Webpack Integration")),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("p",{parentName:"div"},"If you wish to have a simpler integration in a Webpack project, use ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/piglovesyou/graphql-let"}),Object(p.b)("inlineCode",{parentName:"a"},"graphql-let")),", it uses this plugin behind the scenes, and provides simpler developer experience."))),Object(p.b)("h2",{id:"pre-requirements"},"Pre-Requirements"),Object(p.b)("p",null,"To use this template, make sure you are using ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"}),Object(p.b)("inlineCode",{parentName:"a"},"graphql-tag/loader"))," with Webpack."),Object(p.b)("p",null,Object(p.b)("p",{parentName:"p"},"This plugin generates TypeScript typings for ",Object(p.b)("inlineCode",{parentName:"p"},".graphql")," files containing GraphQL documents, which later on can be consumed using ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"}),Object(p.b)("inlineCode",{parentName:"a"},"graphql-tag/loader")),", and get type-check and type-safety for your imports. This means that any time you import objects from ",Object(p.b)("inlineCode",{parentName:"p"},".graphql")," files, your IDE will provide auto-complete."),Object(p.b)("p",{parentName:"p"},"This plugin also handles ",Object(p.b)("inlineCode",{parentName:"p"},".graphql")," files containing multiple GraphQL documents, and name the imports according to the operation name."),Object(p.b)("blockquote",{parentName:"p"},Object(p.b)("p",{parentName:"blockquote"},"\u26a0 Fragments are not generated with named imports, only as default imports, due to ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-tag/loader")," behavior.")),Object(p.b)("h2",{parentName:"p"},"Installation"),Object(p.b)("div",Object(n.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-graphql-files-modules\n")))),Object(p.b)("h2",{parentName:"p"},"API Reference"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"modulePathPrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Allows specifying a module definition path prefix to provide distinction\nbetween generated types."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),'generates: src/api/user-service/queries.d.ts\n documents: src/api/user-service/queries.graphql\n plugins:\n   - typescript\n   - typescript-graphql-files-modules\n config:\n   # resulting module definition path glob: "*\\/api/user-service/queries.graphql"\n   modulePathPrefix: "/api/user-service/"\n')),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"relativeToCwd")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"By default, only the filename is being used to generate TS module declarations. Setting this to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," will generate it with a full path based on the CWD."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"prefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"*\\/")),Object(p.b)("p",{parentName:"p"},"By default, a wildcard is being added as prefix, you can change that to a custom prefix")),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("p",null,"Given that you have a query named ",Object(p.b)("inlineCode",{parentName:"p"},"MyQuery")," in ",Object(p.b)("inlineCode",{parentName:"p"},"my-query.graphql")," file, this template will generate the following code:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"declare module '*/my-query.graphql' {\n  import { DocumentNode } from 'graphql';\n  const MyQuery: DocumentNode;\n\n  export { MyQuery };\n\n  export default defaultDocument;\n}\n")),Object(p.b)("p",null,"Accordingly, you can import the generated types and use it in your code:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import myQuery from './my-query.graphql';\n\n// OR\n\nimport { myQuery } from './my-query.graphql';\n")))}s.isMDXComponent=!0},242:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||p;return a?r.a.createElement(u,o(o({ref:t},l),{},{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
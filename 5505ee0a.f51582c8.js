(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(4),r=n(11),p=(n(0),n(394)),i={id:"typescript-graphql-request",title:"TypeScript GraphQL-Request"},c={id:"plugins/typescript-graphql-request",title:"TypeScript GraphQL-Request",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typescript-graphql-request.md",permalink:"/docs/plugins/typescript-graphql-request",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-graphql-request.md",sidebar:"sidebar",previous:{title:"TypeScript Resolvers",permalink:"/docs/plugins/typescript-resolvers"},next:{title:"TypeScript React Apollo",permalink:"/docs/plugins/typescript-react-apollo"}},o=[{value:"Usage Example",id:"usage-example",children:[]},{value:"Simple Request Middleware",id:"simple-request-middleware",children:[{value:"Examples of Middleware",id:"examples-of-middleware",children:[]}]}],b={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-caution alert alert--warning"}),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Usage Requirements")),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",Object(p.b)("inlineCode",{parentName:"p"},"query")," / ",Object(p.b)("inlineCode",{parentName:"p"},"mutation")," / ",Object(p.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(p.b)("inlineCode",{parentName:"p"},"fragment"),") set as ",Object(p.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(p.b)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Make sure you have ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," plugin and ",Object(p.b)("inlineCode",{parentName:"p"},"typescript-operations")," as well in your configuration:")),Object(p.b)("p",null,Object(p.b)("p",{parentName:"p"},"This plugin generates ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-request"}),Object(p.b)("inlineCode",{parentName:"a"},"graphql-request"))," ready-to-use SDK, which is fully-typed."),Object(p.b)("h2",{parentName:"p"},"Installation"),Object(p.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-graphql-request\n")))),Object(p.b)("h2",{parentName:"p"},"API Reference"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"rawRequest")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"By default the ",Object(p.b)("inlineCode",{parentName:"p"},"request")," method return the ",Object(p.b)("inlineCode",{parentName:"p"},"data")," or ",Object(p.b)("inlineCode",{parentName:"p"},"errors")," key from the response. If you need to access the ",Object(p.b)("inlineCode",{parentName:"p"},"extensions")," key you can use the ",Object(p.b)("inlineCode",{parentName:"p"},"rawRequest")," method."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-graphql-request\n config:\n   rawRequest: true\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"noExport")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"DocumentMode")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"scalars")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("h5",{parentName:"p"},"Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h5",{parentName:"p"},"Keep names as is"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h5",{parentName:"p"},"Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(p.b)("h2",{id:"usage-example"},"Usage Example"),Object(p.b)("p",null,"For the given input:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query continents {\n  continents {\n    name\n    countries {\n      ...CountryFields\n    }\n  }\n}\nfragment CountryFields on Country {\n  name\n  currency\n}\n")),Object(p.b)("p",null,"It generates SDK you can import and wrap your ",Object(p.b)("inlineCode",{parentName:"p"},"GraphQLClient")," instance, and get fully-typed SDK based on your operations:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphQLClient } from 'graphql-request';\nimport { getSdk } from './sdk'; // THIS FILE IS THE GENERATED FILE\n\nasync function main() {\n  const client = new GraphQLClient('https://countries.trevorblades.com/');\n  const sdk = getSdk(client);\n  const { continents } = await sdk.continents(); // This is fully typed, based on the query\n\n  console.log(`GraphQL data:`, continents);\n}\n")),Object(p.b)("h2",{id:"simple-request-middleware"},"Simple Request Middleware"),Object(p.b)("p",null,"The generated sdk accepts an optional middleware function to wrap the requests the ",Object(p.b)("inlineCode",{parentName:"p"},"client")," makes."),Object(p.b)("p",null,"This can enable scenarios like request failure retries and logging at the sdk level."),Object(p.b)("p",null,"To use middleware, just pass an ",Object(p.b)("inlineCode",{parentName:"p"},"SdkFunctionWrapper")," as the second argument to\n",Object(p.b)("inlineCode",{parentName:"p"},"getSdk"),"."),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"// `SdkFunctionWrapper` is a type we provide. `action` is the `client` request execution generated by this template. The wrapper MUST invoke `action()` and should return the promise returned by `action`, or its resolution.\n\ntype SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;\n")),Object(p.b)("h3",{id:"examples-of-middleware"},"Examples of Middleware"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"This example shows a naive request timing logger.")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const client = new GraphQLClient('');\nconst clientTimingWrapper: SdkFunctionWrapper = async <T>(action: () => Promise<T>): Promise<T> => {\n  const startTime = new Date();\n  const result = await action();\n  console.log('request duration (ms)', new Date() - startTime)\n  return result;\n}\n\nconst sdk = getSdk(client, clientTimingWrapper);\n")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"This example uses ",Object(p.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mauricedb/polly-js"}),"polly-js")," to define a failure retry wrapper. (this is the use case for which i originally intended to add this capability)")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const withRetries: RetryWrapper = <T>(action: () => Promise<T>) =>\n  polly()\n    .handle((err: Error) => {\n      warn('GraphqlClient:NetworkError', err);\n      return err.message.includes('connect ETIMEDOUT');\n    })\n    .waitAndRetry(3)\n    .executeForPromise(info => {\n      if (info.count === 3) {\n        error('GraphqlClient:MaxRetries', null, {\n          ...info,\n          action: action.toString(),\n        });\n      } else if (info.count > 0) {\n        warn('GraphqlClient:RetryingCall', null, {\n          ...info,\n          action: action.toString(),\n        });\n      }\n\n      return action();\n    });\n\nconst sdk = getSdk(client, withRetries);\n")))}l.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||p;return n?r.a.createElement(u,c(c({ref:t},b),{},{components:n})):r.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<p;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
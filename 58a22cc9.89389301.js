(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(9),o=(t(0),t(242)),l={},r={id:"generated-config/typescript-apollo-angular",title:"typescript-apollo-angular",description:"This plugin generates Apollo services (Query, Mutation and Subscription) with TypeScript typings.",source:"@site/docs/generated-config/typescript-apollo-angular.md",permalink:"/docs/generated-config/typescript-apollo-angular",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-apollo-angular.md"},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>ngModule</code>",id:"ngmodule",children:[]},{value:"<code>namedClient</code>",id:"namedclient",children:[]},{value:"<code>serviceName</code>",id:"servicename",children:[]},{value:"<code>serviceProvidedInRoot</code>",id:"serviceprovidedinroot",children:[]},{value:"<code>sdkClass</code>",id:"sdkclass",children:[]},{value:"<code>querySuffix</code>",id:"querysuffix",children:[]},{value:"<code>mutationSuffix</code>",id:"mutationsuffix",children:[]},{value:"<code>subscriptionSuffix</code>",id:"subscriptionsuffix",children:[]},{value:"<code>apolloAngularPackage</code>",id:"apolloangularpackage",children:[]},{value:"<code>noGraphQLTag</code>",id:"nographqltag",children:[]},{value:"<code>gqlImport</code>",id:"gqlimport",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[]},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[]},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[]},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[]},{value:"<code>documentMode</code>",id:"documentmode",children:[]},{value:"<code>importOperationTypesFrom</code>",id:"importoperationtypesfrom",children:[]},{value:"<code>importDocumentNodeExternallyFrom</code>",id:"importdocumentnodeexternallyfrom",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],p={rightToc:c};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This plugin generates Apollo services (",Object(o.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Mutation")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Subscription"),") with TypeScript typings."),Object(o.b)("p",null,"It will generate a strongly typed Angular service for every defined query, mutation or subscription. The generated Angular services are ready to inject and use within your Angular component."),Object(o.b)("p",null,"It extends the basic TypeScript plugins: ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),Object(o.b)("p",null,"To shed some more light regards this template, it's recommended to go through the this article: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://apollographql.com/docs/angular/basics/services.html"}),"http://apollographql.com/docs/angular/basics/services.html")," , and to read the Code Generation with Apollo Angular: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://the-guild.dev/blog/apollo-angular-12"}),"https://the-guild.dev/blog/apollo-angular-12")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("div",{className:"admonition admonition-shell"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-apollo-angular\n")))),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("h3",{id:"ngmodule"},Object(o.b)("inlineCode",{parentName:"h3"},"ngModule")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"Allows to define ",Object(o.b)("inlineCode",{parentName:"p"},"ngModule")," as part of the plugin's config so it's globally available."),Object(o.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  ngModule: ./path/to/module#MyModule\n")),Object(o.b)("h3",{id:"namedclient"},Object(o.b)("inlineCode",{parentName:"h3"},"namedClient")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined the global value of ",Object(o.b)("inlineCode",{parentName:"p"},"namedClient"),"."),Object(o.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namedClient: 'customName'\n")),Object(o.b)("h3",{id:"servicename"},Object(o.b)("inlineCode",{parentName:"h3"},"serviceName")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"Defined the global value of ",Object(o.b)("inlineCode",{parentName:"p"},"serviceName"),"."),Object(o.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  serviceName: 'MySDK'\n")),Object(o.b)("h3",{id:"serviceprovidedinroot"},Object(o.b)("inlineCode",{parentName:"h3"},"serviceProvidedInRoot")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defined the global value of ",Object(o.b)("inlineCode",{parentName:"p"},"serviceProvidedInRoot"),"."),Object(o.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  serviceProvidedInRoot: false\n")),Object(o.b)("h3",{id:"sdkclass"},Object(o.b)("inlineCode",{parentName:"h3"},"sdkClass")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," in order to generate a SDK service class that uses all generated services."),Object(o.b)("h3",{id:"querysuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"querySuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"GQL")),Object(o.b)("p",null,"Allows to define a custom suffix for query operations."),Object(o.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  querySuffix: 'QueryService'\n")),Object(o.b)("h3",{id:"mutationsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"mutationSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"GQL")),Object(o.b)("p",null,"Allows to define a custom suffix for mutation operations."),Object(o.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  mutationSuffix: 'MutationService'\n")),Object(o.b)("h3",{id:"subscriptionsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"subscriptionSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"GQL")),Object(o.b)("p",null,"Allows to define a custom suffix for Subscription operations."),Object(o.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  subscriptionSuffix: 'SubscriptionService'\n")),Object(o.b)("h3",{id:"apolloangularpackage"},Object(o.b)("inlineCode",{parentName:"h3"},"apolloAngularPackage")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"'apollo-angular'")),Object(o.b)("p",null,"Allows to define a custom Apollo-Angular package to import types from."),Object(o.b)("h3",{id:"nographqltag"},Object(o.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("h3",{id:"gqlimport"},Object(o.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"noexport"},Object(o.b)("inlineCode",{parentName:"h3"},"noExport")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("h3",{id:"dedupeoperationsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("h3",{id:"omitoperationsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("h3",{id:"operationresultsuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"documentvariableprefix"},Object(o.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"documentvariablesuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"fragmentvariableprefix"},Object(o.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"fragmentvariablesuffix"},Object(o.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"documentmode"},Object(o.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"DocumentMode")),Object(o.b)("h3",{id:"importoperationtypesfrom"},Object(o.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"importdocumentnodeexternallyfrom"},Object(o.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("h3",{id:"scalars"},Object(o.b)("inlineCode",{parentName:"h3"},"scalars")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(o.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(o.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(o.b)("h3",{id:"namingconvention"},Object(o.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(o.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(o.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(o.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(o.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(o.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(o.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(o.b)("h5",{id:"override-all-names"},"Override All Names"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(o.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(o.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(o.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(o.b)("h3",{id:"typesprefix"},Object(o.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(o.b)("p",null,"Prefixes all the generated types."),Object(o.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(o.b)("h3",{id:"skiptypename"},Object(o.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(o.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(o.b)("h3",{id:"nonoptionaltypename"},Object(o.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",null,"Automatically adds ",Object(o.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(o.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")))}b.isMDXComponent=!0},242:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||s[u]||o;return t?i.a.createElement(m,r(r({ref:n},p),{},{components:t})):i.a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
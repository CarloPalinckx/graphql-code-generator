(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(10),i=(n(0),n(249)),o={},c={id:"generated-config/typescript-mongodb",title:"typescript-mongodb",description:"### dbTypeSuffix (`string`, default value: `DbObject`)",source:"@site/docs/generated-config/typescript-mongodb.md",permalink:"/docs/generated-config/typescript-mongodb",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-mongodb.md"},l=[{value:"dbTypeSuffix (<code>string</code>, default value: <code>DbObject</code>)",id:"dbtypesuffix-string-default-value-dbobject",children:[]},{value:"dbInterfaceSuffix (<code>string</code>, default value: <code>DbObject</code>)",id:"dbinterfacesuffix-string-default-value-dbobject",children:[]},{value:"objectIdType (<code>string</code>, default value: <code>mongodb#ObjectId</code>)",id:"objectidtype-string-default-value-mongodbobjectid",children:[]},{value:"idFieldName (<code>string</code>, default value: <code>_id</code>)",id:"idfieldname-string-default-value-_id",children:[]},{value:"enumsAsString (<code>boolean</code>, default value: <code>true</code>)",id:"enumsasstring-boolean-default-value-true",children:[]},{value:"avoidOptionals (<code>boolean</code>, default value: <code>false</code>)",id:"avoidoptionals-boolean-default-value-false",children:[]}],d={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"dbtypesuffix-string-default-value-dbobject"},"dbTypeSuffix (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"DbObject"),")"),Object(i.b)("p",null,"Customize the suffix for the generated GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"type"),"s."),Object(i.b)("h4",{id:"usage-example"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbTypeSuffix: MyType\n")),Object(i.b)("h3",{id:"dbinterfacesuffix-string-default-value-dbobject"},"dbInterfaceSuffix (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"DbObject"),")"),Object(i.b)("p",null,"Customize the suffix for the generated GraphQL ",Object(i.b)("inlineCode",{parentName:"p"},"interface"),"s."),Object(i.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  dbInterfaceSuffix: MyInterface\n")),Object(i.b)("h3",{id:"objectidtype-string-default-value-mongodbobjectid"},"objectIdType (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"mongodb#ObjectId"),")"),Object(i.b)("p",null,"Customize the type of ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," fields. You can either specify a type name, or specify ",Object(i.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(i.b)("h4",{id:"usage-example-2"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  objectIdType: ./my-models.ts#MyIdType\n")),Object(i.b)("h3",{id:"idfieldname-string-default-value-_id"},"idFieldName (",Object(i.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"_id"),")"),Object(i.b)("p",null,"Customize the name of the id field generated after using ",Object(i.b)("inlineCode",{parentName:"p"},"@id")," directive over a GraphQL field."),Object(i.b)("h4",{id:"usage-example-3"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  idFieldName: id\n")),Object(i.b)("h3",{id:"enumsasstring-boolean-default-value-true"},"enumsAsString (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(i.b)("p",null,"Replaces generated ",Object(i.b)("inlineCode",{parentName:"p"},"enum")," values with ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"."),Object(i.b)("h4",{id:"usage-example-4"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  enumsAsString: false\n")),Object(i.b)("h3",{id:"avoidoptionals-boolean-default-value-false"},"avoidOptionals (",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(i.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(i.b)("p",null,"This will cause the generator to avoid using TypeScript optionals (",Object(i.b)("inlineCode",{parentName:"p"},"?"),"), so the following definition: ",Object(i.b)("inlineCode",{parentName:"p"},"type A { myField: String }")," will output ",Object(i.b)("inlineCode",{parentName:"p"},"myField: Maybe<string>")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"myField?: Maybe<string>"),"."),Object(i.b)("h4",{id:"usage-example-5"},"Usage Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-mongodb\n config:\n   avoidOptionals: true\n")))}b.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=b(n),s=a,f=p["".concat(o,".").concat(s)]||p[s]||u[s]||i;return n?r.a.createElement(f,c({ref:t},d,{components:n})):r.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);
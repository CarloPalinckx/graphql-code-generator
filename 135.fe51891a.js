(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{253:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__.d(__webpack_exports__,"a",(function(){return ApolloFederation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DetailedError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return addFederationReferencesToSchema})),__webpack_require__.d(__webpack_exports__,"d",(function(){return federationSpec})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getBaseType})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isComplexPluginOutput})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isUsingTypes})),__webpack_require__.d(__webpack_exports__,"h",(function(){return removeFederation})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resolveExternalModuleAndFn}));var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(248),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(265),core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(77),core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(52),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(251),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(247),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(249),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(250),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(252),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(26),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(21),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(22),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(53),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(78),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14__),param_case__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(262),graphql__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(263),graphql__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(331),graphql__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(273),graphql__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(376),graphql__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(933);function resolveExternalModuleAndFn(pointer){var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")};if("function"==typeof pointer)return pointer;var _pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName=Object(param_case__WEBPACK_IMPORTED_MODULE_15__.a)(functionName));var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var _={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var r,n;"string"==typeof e?_.content+=e:(_.content+=e.content,(r=_.prepend).push.apply(r,e.prepend||[]),(n=_.append).push.apply(n,e.append||[]))})),[].concat(_.prepend,[_.content],_.append).join("\n")}function isWrapperType(e){return Object(graphql__WEBPACK_IMPORTED_MODULE_16__.J)(e)||Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var _;return"string"==typeof e?[(_={},_[e]={},_)]:Array.isArray(e)?e.map((function(e){var _;return"string"==typeof e?((_={})[e]={},_):e})):"object"==typeof e?Object.keys(e).reduce((function(_,r){var n;return[].concat(_,[(n={},n[r]=e[r],n)])}),[]):[]}function hasNullableTypeRecursively(e){return!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e)||!(!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.J)(e)&&!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,_,r){var n=0,t=[];return Object(graphql__WEBPACK_IMPORTED_MODULE_17__.c)(e,{SelectionSet:{enter:function(e,n,i,a){if(!a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))){var o=e.selections||[];if(r&&o.length>0){var s=function(){if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FRAGMENT_DEFINITION)return i.typeCondition.name.value;if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FIELD){var e=t[t.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var _=e.getFields()[i.name.value];if(!_)throw new Error('Unable to find field "'+i.name.value+'" on type "'+e+'"!');return getBaseType(_.type).name}if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.OPERATION_DEFINITION){if("query"===i.operation)return r.getQueryType().name;if("mutation"===i.operation)return r.getMutationType().name;if("subscription"===i.operation)return r.getSubscriptionType().name}else if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.INLINE_FRAGMENT&&i.typeCondition)return i.typeCondition.name.value;return null}();t.push(r.getType(s))}}},leave:function(e){var _=e.selections||[];r&&_.length>0&&t.pop()}},Field:{enter:function(e,i,a,o,s){if(!e.name.value.startsWith("__")&&!s.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))){var u=e.selectionSet&&e.selectionSet.selections||[],c=u.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FRAGMENT_SPREAD&&!_.includes(e.name.value)}));if((0===u.length||c.length>0)&&n++,r){var l=t[t.length-1];if(l&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(l)){var p=l.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+l+'"!');hasNullableTypeRecursively(p.type)&&n++}}}}},enter:{VariableDefinition:function(e,r,t,i,a){a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))||n++},InputValueDefinition:function(e,r,t,i,a){a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))||n++}}}),n>0}var federationSpec=Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var _=e.getTypeMap();for(var r in _){var n=e.getType(r);if(Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(n)&&isFederationObjectType(n)){var t,i=n.toConfig();i.fields=Object.assign(((t={})[resolveReferenceFieldName]={type:n},t),i.fields);var a=new graphql__WEBPACK_IMPORTED_MODULE_16__.f(i);a.astNode=a.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_20__.c)(a)).definitions[0],a.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAME,value:r}}}),_[r]=a}}return e}function removeFederation(e){var _=e.getQueryType().getFields();delete _._entities,delete _._service;var r=e.getTypeMap();return delete r._Service,delete r._Entity,delete r._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var _=e.enabled,r=e.schema;this.enabled=!1,this.enabled=_,this.schema=r,this.providesMap=this.createMapOfProvides()}var _=e.prototype;return _.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},_.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},_.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},_.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},_.skipField=function(e){var _=e.fieldNode,r=e.parentType;return!!(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(r)&&isFederationObjectType(r))&&this.isExternalAndNotProvided(_,r)},_.isResolveReferenceField=function(e){var _="string"==typeof e.name?e.name:e.name.value;return this.enabled&&_===resolveReferenceFieldName},_.transformParentType=function(e){var _=this,r=e.fieldNode,n=e.parentType,t=e.parentTypeSignature;if(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(n)&&isFederationObjectType(n)&&r.name.value===resolveReferenceFieldName){var i=getDirectivesByName("key",n);if(i.length){var a=["{ __typename: '"+n.name+"' } &"],o=getDirectivesByName("requires",r).map(this.extractFieldSet).reduce((function(e,_){return[].concat(e,_)}),[]).map((function(e){return{name:e,required:Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(n.getFields()[e].type)}})),s=this.translateFieldSet(o,t),u=i.map((function(e){var r=_.extractFieldSet(e).map((function(e){return{name:e,required:!0}}));return _.translateFieldSet(r,t)})),c=u.length>1?["(",")"]:["",""],l=c[0],p=c[1];return a.push([l,u.join(" | "),p].join("")),o.length&&a.push("& "+s),a.join(" ")}}return t},_.isExternalAndNotProvided=function(e,_){return this.isExternal(e)&&!this.hasProvides(_,e)},_.isExternal=function(e){return getDirectivesByName("external",e).length>0},_.hasProvides=function(e,_){var r=this.providesMap[Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(e)?e.name:e.name.value];return!(!r||!r.length)&&r.includes(_.name.value)},_.translateFieldSet=function(e,_){return"Pick<"+_+", "+e.map((function(e){return"'"+e.name+"'"})).join(" | ")+">"},_.extractFieldSet=function(e){var _=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(_))throw new Error("Nested fields in _FieldSet is not supported");return deduplicate(_.split(/\s+/g))},_.createMapOfProvides=function(){var e=this,_={};return Object.keys(this.schema.getTypeMap()).forEach((function(r){var n=e.schema.getType(r);Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(n)&&Object.values(n.getFields()).forEach((function(r){var n,t=getDirectivesByName("provides",r.astNode).map(e.extractFieldSet).reduce((function(e,_){return[].concat(e,_)}),[]),i=getBaseType(r.type);_[i.name]||(_[i.name]=[]),(n=_[i.name]).push.apply(n,t)}))})),_},e}();function isFederationObjectType(e){var _=Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_20__.c)(e)).definitions[0]:e,r=_.name.value,n=_.directives,t=!["Query","Mutation","Subscription"].includes(r),i=!r.startsWith("__"),a=n.some((function(e){return"key"===e.name.value}));return t&&i&&a}function deduplicate(e){return e.filter((function(_,r){return e.indexOf(_)===r}))}function getDirectivesByName(e,_){var r;return(r=Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(_)?_.astNode:_)&&r.directives?r.directives.filter((function(_){return _.name.value===e})):[]}var DetailedError=function(e){function _(r,n,t){var i;return(i=e.call(this,r)||this).message=r,i.details=n,i.source=t,Object.setPrototypeOf(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),_.prototype),Error.captureStackTrace(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),_),i}return Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(_,e),_}(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Error));function isDetailedError(e){return e.details}}).call(this,__webpack_require__(254))},274:function(e,_){function r(e){return Promise.resolve().then((function(){var _=new Error("Cannot find module '"+e+"'");throw _.code="MODULE_NOT_FOUND",_}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=274},275:function(e,_){function r(e){var _=new Error("Cannot find module '"+e+"'");throw _.code="MODULE_NOT_FOUND",_}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=275},280:function(e,_){},963:function(e,_,r){"use strict";r.r(_),r.d(_,"plugin",(function(){return c})),r.d(_,"validate",(function(){return l}));var n=r(278),t=r.n(n),i=(r(271),r(279)),a=r(933),o=r(253),s=r(258),u=r(346),c=function(){var e=Object(i.a)(t.a.mark((function e(_,r,n){var i,s,c,l,p,d;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.commentDescriptions,s=void 0!==i&&i,c=n.includeDirectives,l=void 0!==c&&c,p=n.federation,d=p?Object(o.h)(_):_,!l){e.next=4;break}return e.abrupt("return",Object(u.h)(d));case 4:return e.abrupt("return",Object(a.b)(d,{commentDescriptions:s}));case 5:case"end":return e.stop()}}),e)})));return function(_,r,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(t.a.mark((function e(_,r,n,i,a){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(1===a.length)||".graphql"===Object(s.extname)(i)){e.next=3;break}throw new Error('Plugin "schema-ast" requires extension to be ".graphql"!');case 3:case"end":return e.stop()}}),e)})));return function(_,r,n,t,i){return e.apply(this,arguments)}}()}}]);
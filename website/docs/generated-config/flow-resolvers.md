This plugin generates resolvers signature based on your `GraphQLSchema`.

It generates types for your entire schema: types, input types, enum, interface, scalar and union.

This plugin requires you to use `@graphql-codegen/flow` as well, because it depends on it's types.

## Installation

:::shell Using `yarn`

    $ yarn add -D @graphql-codegen/flow-resolvers

:::

## API Reference

### `addUnderscoreToArgsType`

type: `boolean`

Adds `_` to generated `Args` types in order to avoid duplicate identifiers.

#### Usage Examples

```yml
  config:
    addUnderscoreToArgsType: true
```

### `contextType`

type: `string`

Use this configuration to set a custom type for your `context`, and it will
effect all the resolvers, without the need to override it using generics each time.
If you wish to use an external type and import it from another file, you can use `add` plugin
and add the required `import` statement, or you can use a `module#type` syntax.

#### Usage Examples

##### Custom Context Type
```yml
plugins
  config:
    contextType: MyContext
```

##### Custom Context Type
```yml
plugins
  config:
    contextType: ./my-types#MyContext
```

### `fieldContextTypes`

type: `Array_1`

Use this to set a custom type for a specific field `context`.
It will only affect the targeted resolvers.
You can either use `Field.Path#ContextTypeName` or `Field.Path#ExternalFileName#ContextTypeName`

#### Usage Examples

##### Custom Field Context Types
```
plugins
  config:
    fieldContextTypes:
      - MyType.foo#CustomContextType
      - MyType.bar#./my-file#ContextTypeOne
```

### `rootValueType`

type: `string`

Use this configuration to set a custom type for the `rootValue`, and it will
effect resolvers of all root types (Query, Mutation and Subscription), without the need to override it using generics each time.
If you wish to use an external type and import it from another file, you can use `add` plugin
and add the required `import` statement, or you can use both `module#type` or `module#namespace#type` syntax.

#### Usage Examples

##### Custom RootValue Type
```yml
plugins
  config:
    rootValueType: MyRootValue
```
##### Custom RootValue Type
```yml
plugins
  config:
    rootValueType: ./my-types#MyRootValue
```

### `mapperTypeSuffix`

type: `string`

Adds a suffix to the imported names to prevent name clashes.

#### Usage Examples

```yml
plugins
  config:
    mapperTypeSuffix: Model
```

### `mappers`

type: `object`

Replaces a GraphQL type usage with a custom type, allowing you to return custom object from
your resolvers.
You can use both `module#type` and `module#namespace#type` syntax.

#### Usage Examples

##### Custom Context Type
```yml
plugins
  config:
    mappers:
      User: ./my-models#UserDbObject
      Book: ./my-models#Collections#Book
```

### `defaultMapper`

type: `string`

Allow you to set the default mapper when it's not being override by `mappers` or generics.
You can specify a type name, or specify a string in `module#type` or `module#namespace#type` format.
The default value of mappers it the TypeScript type generated by `typescript` package.

#### Usage Examples

##### Replace with any
```yml
plugins
  config:
    defaultMapper: any
```

##### Custom Base Object
```yml
plugins
  config:
    defaultMapper: ./my-file#BaseObject
```

##### Wrap default types with Partial
You can also specify a custom wrapper for the original type, without overriding the original generated types, use "{T}" to specify the identifier. (for flow, use `$Shape<{T}>`)
```yml
plugins
  config:
    defaultMapper: Partial<{T}>
```

##### Allow deep partial with `utility-types`
```yml
plugins
 plugins:
   - "typescript"
   - "typescript-resolvers"
   - add: "import { DeepPartial } from 'utility-types';"
 config:
   defaultMapper: DeepPartial<{T}>
```

### `avoidOptionals`

type: `boolean`
default: `false`

This will cause the generator to avoid using optionals (`?`),
so all field resolvers must be implemented in order to avoid compilation errors.

#### Usage Examples

```yml
generates:
path/to/file.ts:
 plugins:
   - typescript
   - typescript-resolvers
 config:
   avoidOptionals: true
```

### `showUnusedMappers`

type: `boolean`
default: `true`

Warns about unused mappers.

#### Usage Examples

```yml
generates:
path/to/file.ts:
 plugins:
   - typescript
   - typescript-resolvers
 config:
   showUnusedMappers: true
```

### `enumValues`

type: `EnumValuesMap`

Overrides the default value of enum values declared in your GraphQL schema, supported
in this plugin because of the need for integration with `typescript` package.
See documentation under `typescript` plugin for more information and examples.


### `resolverTypeWrapperSignature`

type: `string`
default: `Promise<T> | T`

Allow you to override `resolverTypeWrapper` definition.


### `federation`

type: `boolean`
default: `false`

Supports Apollo Federation


### `enumPrefix`

type: `boolean`
default: `true`

Allow you to disable prefixing for generated enums, works in combination with `typesPrefix`.

#### Usage Examples

##### Disable enum prefixes
```yml
  config:
    typesPrefix: I
    enumPrefix: false
```

### `optionalResolveType`

type: `boolean`
default: `false`

Sets the `__resolveType` field as optional field.


### `immutableTypes`

type: `boolean`
default: `false`

Generates immutable types by adding `readonly` to properties and uses `ReadonlyArray`.


### `scalars`

type: `ScalarsMap`

Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type.

#### Usage Examples

```yml
config:
  scalars:
    DateTime: Date
    JSON: "{ [key: string]: any }"
```

### `namingConvention`

type: `NamingConvention`
default: `pascal-case#pascalCase`

Allow you to override the naming convention of the output.
You can either override all namings, or specify an object with specific custom naming convention per output.
The format of the converter must be a valid `module#method`.
Allowed values for specific output are: `typeNames`, `enumValues`.
You can also use "keep" to keep all GraphQL names as-is.
Additionally you can set `transformUnderscore` to `true` if you want to override the default behavior,
which is to preserves underscores.

#### Usage Examples

##### Override All Names
```yml
config:
  namingConvention: lower-case#lowerCase
```

##### Upper-case enum values
```yml
config:
  namingConvention:
    typeNames: pascal-case#pascalCase
    enumValues: upper-case#upperCase
```

##### Keep names as is
```yml
config:
  namingConvention: keep
```

##### Remove Underscores
```yml
config:
  namingConvention:
    typeNames: pascal-case#pascalCase
    transformUnderscore: true
```

### `typesPrefix`

type: `string`
default: ``

Prefixes all the generated types.

#### Usage Examples

```yml
config:
  typesPrefix: I
```

### `skipTypename`

type: `boolean`
default: `false`

Does not add __typename to the generated types, unless it was specified in the selection set.

#### Usage Examples

```yml
config:
  skipTypename: true
```

### `nonOptionalTypename`

type: `boolean`
default: `false`

Automatically adds `__typename` field to the generated types, even when they are not specified
in the selection set, and makes it non-optional

#### Usage Examples

```yml
config:
  nonOptionalTypename: true
```
# requirejson
Require JSON files with a file extension other than `.json`.

# Install
```
$ npm install @chharvey/requirejson
```

# Use

## Asynchronously
```js
const {requireJSON} = require('@chharvey/requirejson');

requireJSON('./my-file.jsonld').then((my_json_object) => {
	console.log(my_json_object['@type']);
});
```

## Synchronously
```js
const {requireJSONSync} = require('@chharvey/requirejson');

const my_json_object = requireJSONSync('./my-file.jsonld');
console.log(my_json_object['@type']);
```

# API
```ts
import {
	requireJSON,
	requireJSONSync,
	JSONValue,
	JSONObject,
	JSONArray,
	JSONPrimitive,
} from '@chharvey/requirejson';

const my_json_object: Promise<JSONValue> = requireJSON('./my-file.jsonld');
const my_json_object_sync: JSONValue = requireJSONSync('./my-file.jsonld');
```

## Functions

### `requireJSON(filepath: string): Promise<JSONValue>`
Asynchronously returns a JSON value that is the result of parsing the file contents.

#### Parameters:
- `filepath`: the path of the file to read, relative to current working directory

#### Returns:
A Promise resolving to a JSON value parsed from the file contents.

### `requireJSONSync(filepath: string): JSONValue`
Synchronously returns a JSON value that is the result of parsing the file contents.

#### Parameters:
- `filepath`: the path of the file to read, relative to current working directory

#### Returns:
A JSON value parsed from the file contents.

## Types
type name | definition | description
----------|------------|------------
JSONValue | `JSONObject or JSONArray or JSONPrimitive` | Any valid [JSON](http://json.org/) value.
JSONObject | `{[key: string]?: JSONValue}` | A general JSON object, with string keys and JSONValue values.
JSONArray | `JSONValue[]` | A JSON array, with JSONValue entries.
JSONPrimitive | `string or number or boolean or null` | A JSON primitive.

import { JSONValue } from './json.d'


/**
 * Like node.js `require()`, but can be used on `.jsonld` files.
 * @param   filepath the relative path of the file to read
 * @returns a JSON value that is the result of parsing the file contents
 */
export declare function requireJSON(filepath: string): Promise<JSONValue>;


/**
 * Synchronous {@link requireJSONLD}.
 * @param   filepath the relative path of the file to read
 * @returns a JSON value that is the result of parsing the file contents
 */
export declare function requireJSONSync(filepath: string): JSONValue;


export { JSONValue, JSONObject, JSONArray, JSONPrimitive } from './json.d'
export { JSONSchema, JSONSchemaObject } from './json-schema.d'
export { JSONLDObject } from './json-ld.d'

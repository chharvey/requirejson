import { JSONValue } from './json.d'


/**
 * Like node.js `require()`, but can be used on files that might not have a `.json` extension.
 * @param   filepath the path of the file to read, relative to cwd
 * @returns a JSON value that is the result of parsing the file contents
 */
export declare const requireJSON: (filepath: string) => Promise<JSONValue>;


/**
 * Synchronous {@link requireJSONLD}.
 * @param   filepath the path of the file to read, relative to cwd
 * @returns a JSON value that is the result of parsing the file contents
 */
export declare const requireJSONSync: (filepath: string) => JSONValue;


export { JSONValue, JSONObject, JSONArray, JSONPrimitive } from './json.d'
export { JSONLDDocument, JSONLDObject } from './json-ld.d'
export {
	JSONSchema,
	JSONSchemaObject,
	JSONSchema7Definition,
	JSONSchema7,
} from './json-schema.d' // WARNING{DEPRECATED} - you should import from `@types/json-schema` directly

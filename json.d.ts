/**
 * Any JSON value.
 */
export type JSONValue = JSONObject|JSONArray|JSONPrimitive

/**
 * Any JSON object.
 */
export interface JSONObject {
	[key: string]: JSONValue|undefined;
}

/**
 * Any JSON array.
 */
export interface JSONArray extends Array<JSONValue> {}

/**
 * Any non-object, non-array JSON value.
 */
export type JSONPrimitive = string|number|boolean|null

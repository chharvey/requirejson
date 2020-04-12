import type {JSONObject, JSONPrimitive} from './json.d'


/**
 * A single JSON-LD document.
 * @see https://github.com/json-ld/json-ld.org/blob/1.0/schemas/jsonld-schema.json
 */
export interface JSONLDDocument extends JSONLDObject {
	'@context'?: Context[]|Context|null;
	'@graph'?: { [key: string]: JSONLDObject; }|JSONLDObject[];
	[key: string]: (JSONLDObject|JSONPrimitive)[]|JSONLDObject|JSONPrimitive|undefined;
}

type Context = {
	[key: string]: {
		'@id': string;
		'@type': '@id';
	}|{
		'@reverse': string;
	}|string;
}|string

export interface JSONLDObject extends JSONObject {
	/**
	 * @format uri
	 */
	'@base'?: string|null;
	'@container'?: '@index'|'@list'|'@set'|null;
	/**
	 * @format uri
	 */
	'@id'?: string;
	'@language'?: string|null;
	'@list'?: JSONLDObject[];
	'@reverse'?: { [key: string]: JSONLDObject; }|string|null;
	'@set'?: JSONLDObject[];
	'@type'?: string[]|string|null;
	'@value'?: string|number|boolean|null;
	/**
	 * @format uri
	 */
	'@vocab'?: string|null;
	[key: string]: (JSONLDObject|JSONPrimitive)[]|JSONLDObject|JSONPrimitive|undefined;
}

const fs   = require('fs')
const util = require('util')


module.exports.requireJSON = async function requireJSON(filepath) {
	let data = await util.promisify(fs.readFile)(filepath, 'utf8')
	let object;
	try {
		object = JSON.parse(data)
	} catch (e) {
		e.filename = filepath
		console.error(e)
		throw e
	}
	return object
}


module.exports.requireJSONSync = function requireJSONSync(filepath) {
	let data = fs.readFileSync(filepath, 'utf8')
	let object;
	try {
		object = JSON.parse(data)
	} catch (e) {
		e.filename = filepath
		console.error(e)
		throw e
	}
	return object
}

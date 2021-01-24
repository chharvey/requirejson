const fs = require('fs')


module.exports.requireJSON = async (filepath) => {
	const data = fs.promises.readFile(filepath, 'utf8');
	let object;
	try {
		object = JSON.parse(await data);
	} catch (err) {
		err.filename = filepath;
		console.error(err);
		throw err;
	}
	return object;
}


module.exports.requireJSONSync = (filepath) => {
	const data = fs.readFileSync(filepath, 'utf8');
	let object;
	try {
		object = JSON.parse(data);
	} catch (err) {
		err.filename = filepath;
		console.error(err);
		throw err;
	}
	return object;
}

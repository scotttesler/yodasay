var path = require("path");
var fs = require("fs");
var replacer = require("./replacer");

var textCache = {};

exports.get = function (character) {
	var text = textCache[character];

	if (!text) {
		var filePath;
		if (character.indexOf("/") === -1) {
			filePath = path.join(__dirname, "/../characters", character) + ".character";
		} else {
			filePath = path.relative(process.cwd(), character);
		}
		text = fs.readFileSync(filePath, "utf-8");
		textCache[character] = text;
	}

	return function (options) {
		return replacer(text, options);
	};
}

exports.list = function (callback) {
	fs.readdir(path.join(__dirname, "../characters"), function (err, files) {
		if (err) return callback(err);

		var characters = files.map(function (character) {
			return path.basename(character, ".character");
		});

		return callback(null, characters);
	});
}

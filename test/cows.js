var characterFormat = "#Comment \
# just some other comment, it's going to be ignored anyway ...\
$the_character = <<EOC;\n\
 $thoughts\
   $thoughts\
chars($eyes) \
$tongue\
\nEOC\n\
\
";

// They are the same...
var plainText = "\
 $thoughts\
   $thoughts\
chars($eyes) \
$tongue";

var expected = " ||   ||chars(oo) U ";

var replacer = require("../lib/replacer");
exports.characterFormat = function (test) {
	test.expect(1);

	var character = replacer(characterFormat, {
		thoughts : "||",
		eyes : "oo",
		tongue : "U "
	});

	test.equal(character, expected);

	test.done();
};

exports.plainText = function (test) {
	test.expect(1);

	var character = replacer(plainText, {
		thoughts : "||",
		eyes : "oo",
		tongue : "U "
	});

	test.equal(character, expected);

	test.done();
};
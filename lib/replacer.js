module.exports = function (character, variables) {
	var eyes = escapeRe(variables.eyes);
	var tongue = escapeRe(variables.tongue);

	if (character.indexOf("$the_character") !== -1) {
		character = extractTheCharacter(character);
	}

	return character
		.replace(/\$thoughts/g, variables.thoughts)
		.replace(/\$eyes/g, eyes)
		.replace(/\$tongue/g, tongue)
		.replace(/\$\{eyes\}/g, eyes)
		.replace(/\$\{tongue\}/g, tongue)
	;
};

/*
 * "$" dollar signs must be doubled before being used in a regex replace
 * This can occur in eyes or tongue.
 * For example:
 *
 * yodasay -g Moo!
 *
 * yodasay -e "\$\$" Moo!
 */
function escapeRe (s) {
	if (s && s.replace) {
		return s.replace(/\$/g, "$$$$");
	}
	return s;
}

function extractTheCharacter (character) {
	character = character.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');
	var match = /\$the_character\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(character);

	if (!match) {
		console.error("Cannot parse character file\n", character);
		return character;
	} else {
		return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
	}
}

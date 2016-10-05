#!/usr/bin/env node
var argv = require("optimist")
	.usage("Usage: $0 [-e eye_string] [-f creature_name] [-h] [-l] [-n] [-T tongue_string] [-W column] [-bdgpstwy] text\n\n" +
		"If any command-line arguments are left over after all switches have been processed, they become the creature's message.\n\n" +
		"If the program is invoked as yodathink then the creature will think its message instead of saying it.")
	.options({
		"e" : {
			default : "oo"
		},
		"T" : {
			default : "  "
		},
		"W" : {
			default : 40
		},
		"f" : {
			default : "yoda"
		}
	})
	.describe({
		"b" : "Mode: Borg",
		"d" : "Mode: Dead",
		"g" : "Mode: Greedy",
		"p" : "Mode: Paranoia",
		"s" : "Mode: Stoned",
		"t" : "Mode: Tired",
		"w" : "Mode: Wired",
		"y" : "Mode: Youthful",
		"e" : "Select the appearance of the creature's eyes.",
		"T" : "The tongue is configurable similarly to the eyes through -T and tongue_string.",
		"h" : "Display this help message",
		"n" : "If it is specified, the given message will not be word-wrapped.",
		"W" : "Specifies roughly where the message should be wrapped. The default is equivalent to -W 40 i.e. wrap words at or before the 40th column.",
		"f" : "Specifies a creature to use. It can be either a path to a creature file or the name of one of creatures included in the package.",
		"l" : "List all creatures included in this package."
	})
	.boolean(["b", "d", "g", "p", "s", "t", "w", "y", "n", "h", "l"])
	.argv;

if (argv.l) {
	listCreatures();
} else if (argv.h) {
	showHelp();
} else if (argv._.length) {
	say();
} else {
	require("get-stdin")(function (data) {
		if (data) {
			argv._ = [data];
			say();
		} else {
			showHelp();
		}
	});
}

function say () {
	var module = require("./index");

	var think = /think$/.test(argv["$0"]);

	console.log(think ? module.think(argv) : module.say(argv));
}

function listCreatures () {
	require("./index").list(function(err, list) {
	if (err) throw new Error(err);
	console.log(list.join("  "));
  });
}

function showHelp () {
	require("optimist").showHelp();
}

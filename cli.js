#!/usr/bin/env node
var argv = require("optimist")
  .usage("Usage: $0 [-h] [-l] [-n] [-W column] text\n\n" +
    "If any command-line arguments are left over after all switches have been processed, they become the character's message.\n\n" +
    "If the program is invoked as yodathink then the character will think its message instead of saying it.")
  .describe({
    "h" : "Display this help message",
    "n" : "If it is specified, the given message will not be word-wrapped.",
    "W" : "Specifies roughly where the message should be wrapped. The default is equivalent to -W 40 i.e. wrap words at or before the 40th column.",
    "l" : "List all characters included in this package."
  })
  .argv;

if (argv.l) {
  listCharacters();
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

function listCharacters () {
  require("./index").list(function(err, list) {
  if (err) throw new Error(err);
  console.log(list.join("  "));
  });
}

function showHelp () {
  require("optimist").showHelp();
}

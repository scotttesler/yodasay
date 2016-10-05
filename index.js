var baloon = require("./lib/balloon");
var characters = require("./lib/characters");
var faces = require("./lib/faces");

exports.say = function (options) {
  return doIt(options, true);
};

exports.think = function (options) {
  return doIt(options, false);
};

exports.list = characters.list;

function doIt (options, sayAloud) {
  var character = characters.get(options.f || "yoda");
  var face = faces(options);
  face.thoughts = sayAloud ? "\\" : "o";

  var action = sayAloud ? "say" : "think";
  return baloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + character(face);
}

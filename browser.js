import baloon from "./lib/balloon";
import replacer from "./lib/replacer";
import faces from "./lib/faces";

import DEFAULT_COW from './cows/default.cow';

export { default as BOBA } from './cows/boba.cow';
export { default as CHEWBACCA } from './cows/chewbacca.cow';
export { default as DEFAULT } from './cows/default.cow';
export { default as HAN } from './cows/han.cow';
export { default as JOSHUABELL } from './cows/joshuabell.cow';
export { default as LEIA } from './cows/leia.cow';
export { default as LUKE } from './cows/luke.cow';
export { default as R2D2 } from './cows/R2D2.cow';
export { default as VADER } from './cows/vader.cow';
export { default as VADER2 } from './cows/vader2.cow';

function converToCliOptions(browserOptions) {
  const cliOptions = {
    e: browserOptions.eyes || 'oo',
    T: browserOptions.tongue || '  ',
    n: browserOptions.wrap,
    W: browserOptions.wrapLength || 40,
    text: browserOptions.text || '',
    _: browserOptions.text || [],
    f: browserOptions.cow,
  };
  if (browserOptions.mode) {
    // converts mode: 'b' to b: true
    cliOptions[browserOptions.mode] = true;
  }
  return cliOptions;
}

function doIt (options, sayAloud) {
  const cow = options.f || DEFAULT_COW;
	const face = faces(options);
	face.thoughts = sayAloud ? "\\" : "o";

	const action = sayAloud ? "say" : "think";
	return baloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + replacer(cow, face);
}

export function say(browserOptions) {
  return doIt(converToCliOptions(browserOptions), true);
}

export function think(browserOptions) {
  return doIt(converToCliOptions(browserOptions), false);
}

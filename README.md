# yodasay

```
 ________________________
< Use yodasay, you will. >
 ------------------------
      \
       \
          .--.
  \`--._,'.::.`._.--'/
    .  ` __::__ '  .
      -:.`'..`'.:-
        \ `--' /
          ----
```

yodasay is a talking yoda (plus other Star Wars characters)!

This project is a fork of [https://github.com/piuccio/cowsay](https://github.com/piuccio/cowsay).
The ASCII art was taken from [Christopher Johnson](http://www.chris.com/ascii/index.php?art=movies/star%20wars)'s website.

## Install
```bash
npm i -g yodasay
```

## Usage
```bash
yodasay JavaScript FTW!
```

or
```bash
yodathink Node.js is cool
```

It acts in the same way as cowsay, so consult `yodasay(1)` or run `yodasay -h`.

TIP: Pipe the output through [lolcatjs](https://github.com/robertboloc/lolcatjs) for an awesome effect.

<img alt="Multi-color Yoda 0" src="https://i.imgur.com/krE8t6n.png" width="190">

<img alt="Multi-color Dark Vader 0" src="https://i.imgur.com/fA0KefY.png" width="320">

<img alt="Multi-color Dark Vader 1" src="https://i.imgur.com/I3ZIt7k.png" width="260">

## Usage as a module

yodasay can be used as any other npm dependency

```js
var yodasay = require('yodasay');

console.log(yodasay.say({
  text : 'Use yodasay, you will.'
}));

// or yodasay.think()
```

## Pipe from standard input
```bash
echo please repeat | yodasay
```

## Usage in the browser

yodasay works in your browser too with rollup / webpack / browserify / you name it.

```js
import { say } from 'yodasay';

console.log(say({ text: 'meditating in the browser' }));
```

You can customize the character by importing the relevant one

```js
import { think, R2D2 } from 'yodasay';

console.log(think({
  text: 'meditating in the browser',
  cow: R2D2,
  eyes: 'pp',
  tongue: ';;'
}));
```

All characters are included in the bundle, but you can use rollup / webpack tree-shake feature to reduce the final bundle size.

### Browser options

```js
say({
  text: 'hello',
  cow: '', // Template for a character, get inspiration from `./cows`
  wrap: false, // If it is specified, the given message will not be word-wrapped. equivalent to yodasay -n
  wrapLength: 40, // Specifies roughly where the message should be wrapped. equivalent to yodasay -W
  mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
});
```

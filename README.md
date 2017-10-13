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

yodasay is a configurable talking yoda, originally written in Perl by [Tony Monroe](https://github.com/tnalpgge/rank-amateur-cowsay) and then re-written in Node.js by [Fabio Crisci](https://github.com/piuccio).

This project is a fork of https://github.com/piuccio/cowsay.
The Yoda ASCII art was taken from [Christopher Johnson](http://www.chris.com/ascii/index.php?art=movies/star%20wars)'s website.

## Install

    npm install -g yodasay

## Usage

    yodasay JavaScript FTW!

or

    yodathink Node.js is cool

It acts in the same way as cowsay, so consult `yodasay(1)` or run `yodasay -h`

```
 ________
< indeed >
 --------
       \
        \
                       .-.
                      |_:_|
                     /(_Y_)\
                    ( \/M\/ )
 '.               _.'-/'-'\-'._
   ':           _/.--'[[[[]'--.\_
     ':        /_'  : |::"| :  '.\
       ':     //   ./ |oUU| \.'  :\
         ':  _:'..' \_|___|_/ :   :|
           ':.  .'  |_[___]_|  :.':\
            [::\ |  :  | |  :   ; : \
             '-'   \/'.| |.' \  .;.' |
             |\_    \  '-'   :       |
             |  \    \ .:    :   |   |
             |   \    | '.   :    \  |
             /       \   :. .;       |
            /     |   |  :__/     :  \\
           |  |   |    \:   | \   |   ||
          /    \  : :  |:   /  |__|   /|
      snd |     : : :_/_|  /'._\  '--|_\
          /___.-/_|-'   \  \
                         '-'
```

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

    echo please repeat | yodasay

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
  eyes: 'oo', // Select the appearance of the character's eyes, equivalent to yodasay -e
  tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to yodasay -T
  wrap: false, // If it is specified, the given message will not be word-wrapped. equivalent to yodasay -n
  wrapLength: 40, // Specifies roughly where the message should be wrapped. equivalent to yodasay -W
  mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
});
```

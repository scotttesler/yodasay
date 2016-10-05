#WIP

---

# yodasay

````
 _______________________
< use yodasay, you will >
 -----------------------
        \
         \
          .--.
::\`--._,'.::.`._.--'/::
::::.  ` __::__ '  .::::
::::::-:.`'..`'.:-::::::
::::::::\ `--' /::::::::
````

yodasay is a configurable talking yoda, based on cowsay, originally written in Perl by [Tony Monroe](http://www.nog.net/~tony/).

This project is a fork of https://github.com/piuccio/cowsay - a translation in JavaScript of the original program and an attempt to bring the same silliness to node.js.

## Install

    npm install -g yodasay

## Usage

    yodasay JavaScript FTW!

or

    yodathink node.js is cool

It acts in the same way as the original yodasay, so consult `yodasay(1)` or run `yodasay -h`

## Usage as a module

yodasay can be used as any other npm dependency

    var yodasay = require("yodasay");

    console.log(yodasay.say({
    	text : "I'm a moooodule",
    	e : "oO",
    	T : "U "
    }));

    // or yodasay.think()

## Pipe from standard input

    echo please repeat | yodasay

# yodasay

````
 _______________________
< Use yodasay, you will. >
 -----------------------
        \
         \
          .--.
::\`--._,'.::.`._.--'/::
::::.  ` __::__ '  .::::
::::::-:.`'..`'.:-::::::
::::::::\ `--' /::::::::
````

yodasay is a (currently non-configurable) talking yoda, based on charactersay, originally written in Perl by [Tony Monroe](http://www.nog.net/~tony/) and then re-written in Node.js by [Fabio Crisci](https://github.com/piuccio).

This project is a fork of https://github.com/piuccio/charactersay.

## Install

    npm install -g yodasay

## Usage

    yodasay JavaScript FTW!

or

    yodathink Node.js is cool

It acts (well, it will eventually) in the same way as charactersay, so consult `charactersay(1)` or run `charactersay -h`

## Usage as a module

yodasay can be used as any other npm dependency

    var yodasay = require("yodasay");

    console.log(yodasay.say({
      text : "Use yodasay, you will."
    }));

    // or yodasay.think()

## Pipe from standard input

    echo please repeat | yodasay

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

yodasay is a (currently non-configurable) talking yoda, based on cowsay, originally written in Perl by [Tony Monroe](http://www.nog.net/~tony/) and then re-written in Node.js by [Fabio Crisci](https://github.com/piuccio).

This project is a fork of https://github.com/piuccio/cowsay.
The Yoda ASCII art was taken from [Christopher Johnson](http://www.chris.com/ascii/index.php?art=movies/star%20wars)'s website.

## Install

    npm install -g yodasay

## Usage

    yodasay JavaScript FTW!

or

    yodathink Node.js is cool

It acts (well, it will eventually) in the same way as cowsay, so consult `cowsay(1)` or run `cowsay -h`

## Usage as a module

yodasay can be used as any other npm dependency

    var yodasay = require("yodasay");

    console.log(yodasay.say({
      text : "Use yodasay, you will."
    }));

    // or yodasay.think()

## Pipe from standard input

    echo please repeat | yodasay

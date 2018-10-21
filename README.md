welcome
js.browser-detection
====================

Browser detection API on the client side

### Setup

Include browser-detection.js/coffee in your list of javascript files, preferrably at
the top.

### Usage

An object, window.browser, is created when browser-detection library
is loaded. This object gives access to a number of methods such as,

browser.is_chrome()

browser.on_tablet()

browser.on_mac()

etc.

Checkout sample.html and tests for some more examples.

### Background

In the search of a straightforward browser detection api (though not
recommeneded but useful in certain cases), I came across fnando's
Browser (https://raw.github.com/fnando/browser). But my website was
behind CloudFront and having a backend browser detection could risk serving cached "sorry, your website
is not supported" pages.

So I migrated his code to javascript and this library was born.

### License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## The End
Feel free to contact me in any case. Thank you for using.

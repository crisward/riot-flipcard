<img src="https://cdn.rawgit.com/crisward/riot-flipcard/master/riot-flipcard.svg" height="140" />

A small riot tag which flips the content in 3d using css transforms.

## Install

```
npm install riot-flipcard
```

## Demo

https://crisward.github.io/riot-flipcard/

## Usage

You'll need too add `style="display:none"` to prevent the flash on content load.
You can also add `<style>flipcard{display:none}</style>` to the head of your document.

```html
<flipcard style="display:none">
  <div class="front">
    <p>Your Front Content</p>
    <button onclick="{toggle}">Flip</button>
  </div>
  <div class="back">
    <p>Your Back Content</p>
    <button onclick="{toggle}">Flip</button>
  </div>
</flipcard>
````

There are three methods you can call within the flipcard tag

|Methos    | Description          |
|-----     |------                |
|toggle    | swaps front to back  |
|front     | switches to front    |
|back      | switches to back     |


Front and back can be useful for hover effects ie.

```html
<flipcard>
  <div class="front" onmouseover="{back}">
    <p>Your Front Content</p>
  </div>
  <div class="back" onmouseleave="{front}">
    <p>Your Back Content</p>
  </div>
</flipcard>
````

### Styling

You can style flipcard any way you like. 

Either add a class

```html
<flipcard class="mycard">...</flipcard>
```
Or add an inline style

```html
<flipcard style="width:300px;height:300px;">...</flipcard>
```

### Direction

By default flipcard flips horizontally. 

But it can also flip vertically

```html
<flipcard direction="y">...</flipcard>
```
Or Diagonally
```html
<flipcard direction="xy">...</flipcard>
```

## License

(The MIT License)

Copyright (c) 2015 Cris Ward

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


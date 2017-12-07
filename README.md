# grow-element-fn

Update textarea height to its content with lines number customization.

#### Demo: [link](https://www.webpackbin.com/bins/-L-lOgKNYmW7vFRyuAKH)
#### GitHub: [link](https://github.com/Snowshield/grow-element-fn)
#### NPM: [link](https://www.npmjs.com/package/grow-element-fn)

## Summary
Library to auto-grow and auto-shrink textarea to fit its content. Works perfect with vertical scrollbar.
##### Recomended textarea styles:

```css
word-wrap: break-word;
word-break: break-all;
line-height: 30px; // should be defined
```


#### Install via NPM
```
npm install --save grow-element-fn
```

#### Browser compatibility

Chrome | Firefox | IE | EDGE | Safari | iOS Safari | Android | Opera Mini | Windows Phone IE
------ | --------|------|----|--------|------------|---------|------------|------------------
yes    | 57    | 10 | +   | ?    | ?        | ?       | ?          | ?

#### Usage

```javascript
import growElementFn from 'grow-element-fn';
const textarea = document.getElementById("my-textarea");

function growTextarea() {
  growElementFn({
    el: textarea,
    minLines: 1,
    maxLines: 4,
    extraLine: true,
  });
}

growTextarea();
textarea.addEventListener('focus', growTextarea);
textarea.addEventListener('blur', growTextarea);
textarea.addEventListener('input', growTextarea);
```


#### Options:

el (Element, required): reference to DOM element.

minLines (Number = 1): minimum lines of textarea.

maxLines (Number = 0): maximum lines of textarea to display no scrollbar. If maxLines is 0 textarea won't have maximum lines limit.

extraLine (boolean = false): add extra line in the bottom of textarea. Usefull to remove content jumping on slow devices.


#### License: [MIT](http://www.opensource.org/licenses/mit-license.php)

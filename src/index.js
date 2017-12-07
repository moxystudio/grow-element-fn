import getAutoHeight from './getAutoHeight';
import getSafeLineHeight from './getSafeLineHeight';
import toPx from './toPx';
import updateLimits from './updateLimits';

// NOTE
// line-height css property of params.el element should be defined
//
// Recomended styles:
// word-wrap: break-word;
// word-break: break-all;
//
// EXAMPLE
// import growElementFn from 'grow-element-fn';
// const textarea = document.getElementById("my-textarea");
//
// function growTextarea() {
//   growElementFn({
//     el: textarea,
//     minLines: 1,
//     maxLines: 4,
//     extraLine: true,
//   });
// }
//
// growTextarea();
// textarea.addEventListener('focus', growTextarea);
// textarea.addEventListener('blur', growTextarea);
// textarea.addEventListener('input', growTextarea);

export default function growElementFn(params) {
  const {
    el,
    minLines,
    maxLines,
    extraLine,
  } = params;

  let height = getAutoHeight(el);
  if (extraLine) {
    height += getSafeLineHeight(el);
  }
  el.style.setProperty('height', toPx(height));

  updateLimits({ el, minLines, maxLines });
}

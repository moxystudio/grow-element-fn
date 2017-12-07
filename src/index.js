import getAutoHeight from './getAutoHeight';
import getSafeLineHeight from './getSafeLineHeight';
import toPx from './toPx';
import updateLimits from './updateLimits';

// EXAMPLE
// NOTE line-height css property of params.el element should be defined
//
// function resizeTextarea() {
//   const textarea = document.getElementById("my-textarea");
//
//   const growTextarea = () => growElementFn({
//     el: el,
//     minLines: 1,
//     maxLines: 8,
//     extraLine: true,
//   });
//   //
//   window.requestAnimationFrame(growTextarea);
// },

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

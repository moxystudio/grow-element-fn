
import parsedComputedProperty from './parsedComputedProperty';

export default function getSafeLineHeight(
  el,
  style = getComputedStyle(el)
) {
  const lineHeight = style.getPropertyValue('line-height');

  if (lineHeight === 'normal') {
    console.warn(`safeLineHeight. Element should have 'line-height' style property`);

    return parsedComputedProperty('font-size', el, style);
  }
  return parseInt(lineHeight, 10);
}

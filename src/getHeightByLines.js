import haveBorderBox from './haveBorderBox';
import parsedComputedProperties from './parsedComputedProperties';
import getSafeLineHeight from './getSafeLineHeight';

export default function getHeightByLines({ el, lines }) {
  if (!lines) {
    return 0;
  }
  const style = getComputedStyle(el);
  const lineHeight = getSafeLineHeight(el, style);

  if (!haveBorderBox(el, style)) {
    return (lineHeight * lines);
  }

  const parsedProps = parsedComputedProperties([
    'padding-top',
    'padding-bottom',
    'border-top',
    'border-bottom',
  ], el, style);

  // console.log(
  //   'getHeightByLines',
  //   `(${lineHeight} * ${lines}) + ${
  //     parsedProps['padding-top'] + parsedProps['padding-bottom']
  //   } + ${
  //     parsedProps['border-top'] + parsedProps['border-bottom']
  //   } = ${
  //   (lineHeight * lines)
  //   + parsedProps['padding-top']
  //   + parsedProps['padding-bottom']
  //   + parsedProps['border-top']
  //   + parsedProps['border-bottom']
  //   }`
  // );

  return (lineHeight * lines)
  + parsedProps['padding-top']
  + parsedProps['padding-bottom']
  + parsedProps['border-top']
  + parsedProps['border-bottom'];
}

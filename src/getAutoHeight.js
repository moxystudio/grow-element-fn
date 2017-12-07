import haveBorderBox from './haveBorderBox';
import parsedComputedProperties from './parsedComputedProperties';

export default function getAutoHeight(el) {
  // NOTE clone to preserve scroll

  // NOTE send true to copy textarea value in IE and EDGE
  const clone = el.cloneNode(true);

  const width = getComputedStyle(el).getPropertyValue('width');
  clone.style.setProperty('width', width);
  clone.style.setProperty('height', '0');
  clone.style.setProperty('min-height', 'auto');
  clone.style.setProperty('max-height', 'auto');
  document.body.appendChild(clone);

  const style = getComputedStyle(clone);

  const parsedProps = parsedComputedProperties([
    'padding-top',
    'padding-bottom',
    'border-top-width',
    'border-bottom-width',
  ], clone, style);

  let height;
  if (!haveBorderBox(clone, style)) {
    height = clone.scrollHeight
    - parsedProps["padding-top"]
    - parsedProps["padding-bottom"];

    // NOTE for debug
    // console.log(
    //   'getAutoHeight 1',
    //   `${clone.scrollHeight} - ${
    //     parsedProps["padding-top"] + parsedProps["padding-bottom"]
    //   } = ${height}`,
    //   style.getPropertyValue('box-sizing'),
    //   clone.getAttribute('class')
    // );
  } else {
    height = clone.scrollHeight
    + parsedProps["border-top-width"]
    + parsedProps["border-bottom-width"];

    // NOTE for debug
    // console.log(
    //   'getAutoHeight 2',
    //   `${clone.scrollHeight} + ${
    //     parsedProps["border-top-width"] + parsedProps["border-bottom-width"]
    //   } = ${height}`
    // );
  }

  // clone.remove();
  document.body.removeChild(clone);
  return height;
}

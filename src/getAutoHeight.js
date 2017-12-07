import haveBorderBox from './haveBorderBox';
import parsedComputedProperties from './parsedComputedProperties';

export default function getAutoHeight(el) {
  // NOTE clone to preserve scroll
  const clone = el.cloneNode();

  const width = getComputedStyle(el).getPropertyValue('width');
  clone.style.setProperty('width', width);
  clone.style.setProperty('height', '0');
  clone.style.setProperty('min-height', 'auto');
  clone.style.setProperty('max-height', 'auto');
  document.body.append(clone);

  const style = getComputedStyle(clone);

  const parsedProps = parsedComputedProperties([
    'padding-top',
    'padding-bottom',
    'border-top',
    'border-bottom',
  ], clone, style);

  let height;
  if (!haveBorderBox(clone, style)) {
    height = clone.scrollHeight
    - parsedProps["padding-top"]
    - parsedProps["padding-bottom"];

    // NOTE for debug
    // console.log(
    //   'getAutoHeight',
    //   `${clone.scrollHeight} - ${
    //     parsedProps["padding-top"] + parsedProps["padding-bottom"]
    //   } = ${height}`
    // );
  } else {
    height = clone.scrollHeight
    + parsedProps["border-top"]
    + parsedProps["border-bottom"];

    // NOTE for debug
    // console.log(
    //   'getAutoHeight',
    //   `${clone.scrollHeight} + ${
    //     parsedProps["border-top"] + parsedProps["border-bottom"]
    //   } = ${height}`
    // );
  }

  clone.remove();
  return height;
}

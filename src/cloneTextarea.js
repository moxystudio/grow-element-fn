const properties = [
  'boxSizing',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'direction',
  'fontFamily',
  'fontSize',
  'fontSizeAdjust',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'textAlign',
  'textDecoration',
  'textTransform',
  'wordBreak',
  'wordSpacing',
  'wordWrap',
];

export default function cloneTextarea(element) {
  const computedStyles = getComputedStyle(element);
  const clonedElement = element.cloneNode(true);

  properties.forEach((property) => {
    clonedElement.style[property] = computedStyles[property];
  });

  const width = computedStyles.getPropertyValue('width');

  clonedElement.style.setProperty('width', width);
  clonedElement.style.setProperty('height', '0');
  clonedElement.style.setProperty('min-height', 'auto');
  clonedElement.style.setProperty('max-height', 'none');

  return clonedElement;
}




export default function parsedComputedProperty(
  propName,
  el,
  style = getComputedStyle(el)
) {
  return parseInt(
    style.getPropertyValue(propName),
    10
  );
}

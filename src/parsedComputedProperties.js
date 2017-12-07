
import parsedComputedProperty from './parsedComputedProperty';

export default function parsedComputedProperties(
  propNames,
  el,
  style = getComputedStyle(el)
) {
  return propNames.reduce((res, propName) => {
    res[propName] = parsedComputedProperty(propName, el, style);
    return res;
  }, {});
}

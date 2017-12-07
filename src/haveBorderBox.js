


export default function haveBorderBox(
  el,
  style = getComputedStyle(el)
) {
  return (style.getPropertyValue('box-sizing') === 'border-box');
}

import getHeightByLines from './getHeightByLines';
import toPx from './toPx';

export default function updateLimits(params) {
  const {
    el,
    minLines = 1,
    maxLines = 0,
  } = params;

  const minHeight = getHeightByLines({ el, lines: minLines });
  const maxHeight = getHeightByLines({ el, lines: maxLines });

  const limitless = (maxLines === 0) || (minHeight >= maxHeight);

  // css2-compatible setProperty method
  el.style.setProperty('min-height', toPx(minHeight));
  if (limitless) {
    el.style.setProperty('max-height', 'none');
  } else {
    el.style.setProperty('max-height', toPx(maxHeight));
  }

  // NOTE bad solution (sometimes appears scroll)
  // if (limitless) {
  //   el.style.setProperty('overflow-y', 'hidden');
  // } else {
  //   el.style.setProperty('overflow-y', 'auto');
  // }

  if (limitless) {
    el.style.setProperty('overflow-y', 'hidden');
  } else if (el.scrollHeight > el.clientHeight) {
    el.style.setProperty('overflow-y', 'scroll');
  } else {
    el.style.setProperty('overflow-y', 'hidden');
  }
}

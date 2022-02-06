/* eslint-disable react/no-find-dom-node */
import ReactDOM from 'react-dom';
import isMicrosoftBrowser from './browser';

const SCROLL_TOP_WHITE_SPACE = 0;
const IS_IE = isMicrosoftBrowser();

const getRefDomBounding = (ref) => {
  if (ref && ref.current) {
    const node = ReactDOM.findDOMNode(ref.current);
    return node && node.getBoundingClientRect ? node.getBoundingClientRect() : undefined;
  }
  return undefined;
};

const scrollTo = (top, offset = 0) => {
  if (top) {
    if (IS_IE) {
      window.scrollTo(0, window.pageYOffset + top - offset);
    } else {
      window.scrollTo({
        top: window.pageYOffset + top - offset,
        behavior: 'smooth'
      });
    }
  }
};

const scrollToRef = (ref, offset = 75) => {
  if (ref) {
    scrollTo(getRefDomBounding(ref).top, offset + SCROLL_TOP_WHITE_SPACE);
  }
};

const scrollToElement = (element, offset = 0) => {
  if (element) {
    const bounding = element.getBoundingClientRect();
    scrollTo(bounding.top, offset + SCROLL_TOP_WHITE_SPACE);
  }
};

export { getRefDomBounding, scrollTo, scrollToElement, scrollToRef };

const vendors = ['webkit', 'moz', 'ms', 'o'];

function getJsProperty(cssProperty) {
  cssProperty = cssProperty.replace(/^-/, '');
  const arr = cssProperty.split('-');

  if (arr.length > 1) {
    return arr.map((word, i) => {
      if (i > 0) {
        return word.replace(/^\w/, word.charAt(0).toUpperCase());
      }
      return word;
    }).join('');
  }
  return cssProperty;
}

export default function(cssProperty) {
  if (typeof window === 'undefined') {
    return;
  }
  const el = document.createElement('div');
  let vendorCssProperty, i = 0;
  let jsProperty = getJsProperty(cssProperty);

  if (jsProperty in el.style) {
    return cssProperty;
  }

  const len = vendors.length;

  for (; i < len; i++) {
    vendorCssProperty = `-${vendors[i]}-${cssProperty}`;
    jsProperty = getJsProperty(vendorCssProperty);
    if (jsProperty in el.style) {
      return vendorCssProperty;
    }
  }

  if (!vendorCssProperty) {
    throw new Error(`your browser not support the css property: ${cssProperty}`);
  }
}

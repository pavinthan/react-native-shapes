import { forEach } from 'lodash';
import variable from './../variables/platform';

export default (variables = variable) => {
  const theme = {
    variables,
  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    forEach(parent, (style, styleName) => {
      if (
        styleName.indexOf('.') === 0 &&
        parentKey &&
        parentKey.indexOf('.') === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (style && typeof style === 'object' && styleName !== 'fontVariant') {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};

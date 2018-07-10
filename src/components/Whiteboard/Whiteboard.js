import React from 'react';
import snakeCase from 'lodash/snakeCase';
import camelCase from 'lodash/camelCase';
import { View } from 'native-base';
import Circle from '../Circle';
import Invalid from '../Invalid';
import IsoscelesTriangle from '../IsoscelesTriangle';
import Oval from '../Oval';
import Parallelogram from '../Parallelogram';
import Polygon from '../Polygon';
import Rectangle from '../Rectangle';
import styles from './styles';
import {
  CIRCLE,
  HEPTAGON,
  HEXAGON,
  ISOSCELES_TRIANGLE,
  OCTAGON,
  OVAL,
  PARALLELOGRAM,
  PENTAGON,
  RECTANGLE,
  SQUARE,
} from '../../constants';

const Whiteboard = ({ fill, measurements, shape, values }) => {
  let props = {};
  let shapeComponent = null;
  measurements.forEach((m, i) => (props[camelCase(m)] = values[i]));

  switch (snakeCase(shape).toUpperCase()) {
    case CIRCLE:
      shapeComponent = <Circle fill={fill} {...props} />;
      break;
    case OVAL:
      shapeComponent = <Oval fill={fill} {...props} />;
      break;
    case ISOSCELES_TRIANGLE:
      shapeComponent = <IsoscelesTriangle fill={fill} {...props} />;
      break;
    case PARALLELOGRAM:
      shapeComponent = <Parallelogram fill={fill} {...props} />;
      break;
    case RECTANGLE:
      shapeComponent = <Rectangle fill={fill} {...props} />;
      break;
    case SQUARE:
      shapeComponent = <Polygon sides={4} fill={fill} {...props} />;
      break;
    case PENTAGON:
      shapeComponent = <Polygon sides={5} fill={fill} {...props} />;
      break;
    case HEXAGON:
      shapeComponent = <Polygon sides={6} fill={fill} {...props} />;
      break;
    case HEPTAGON:
      shapeComponent = <Polygon sides={7} fill={fill} {...props} />;
      break;
    case OCTAGON:
      shapeComponent = <Polygon sides={8} fill={fill} {...props} />;
      break;
    default:
      shapeComponent = <Invalid fill={fill} />;
      break;
  }

  return <View style={[styles.container]}>{shapeComponent}</View>;
};

export default Whiteboard;

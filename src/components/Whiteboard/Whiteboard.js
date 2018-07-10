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
import ScaleneTriangle from '../ScaleneTriangle';
import styles from './styles';
import {
  CIRCLE,
  HEPTAGON,
  HEXAGON,
  EQUILATERAL_TRIANGLE,
  ISOSCELES_TRIANGLE,
  SCALENE_TRIANGLE,
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
      if (props.radius) {
        shapeComponent = <Circle fill={fill} {...props} />;
      }
      break;
    case OVAL:
      if (props.width && props.height) {
        shapeComponent = <Oval fill={fill} {...props} />;
      }
      break;
    case EQUILATERAL_TRIANGLE:
      if (props.length) {
        shapeComponent = (
          <Polygon sides={3} sideLength={props.length} fill={fill} {...props} />
        );
      }
      break;
    case ISOSCELES_TRIANGLE:
      if (props.width && props.height) {
        shapeComponent = <IsoscelesTriangle fill={fill} {...props} />;
      }
      break;
    case SCALENE_TRIANGLE:
      if (props.width && props.height) {
        shapeComponent = <ScaleneTriangle fill={fill} {...props} />;
      }
      break;
    case PARALLELOGRAM:
      if (props.width && props.height) {
        shapeComponent = <Parallelogram fill={fill} {...props} />;
      }
      break;
    case RECTANGLE:
      if (props.width && props.height) {
        shapeComponent = <Rectangle fill={fill} {...props} />;
      }
      break;
    case SQUARE:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={4} fill={fill} {...props} />;
      }
      break;
    case PENTAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={5} fill={fill} {...props} />;
      }
      break;
    case HEXAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={6} fill={fill} {...props} />;
      }
      break;
    case HEPTAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={7} fill={fill} {...props} />;
      }
      break;
    case OCTAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={8} fill={fill} {...props} />;
      }
      break;
    default:
      break;
  }

  if (!shapeComponent) {
    shapeComponent = <Invalid fill={fill} />;
  }

  return <View style={[styles.container]}>{shapeComponent}</View>;
};

export default Whiteboard;

import React from 'react';
import { snakeCase, camelCase } from 'lodash';
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

  // set measurements and values for props.
  measurements.forEach((m, i) => (props[camelCase(m)] = values[i]));

  switch (snakeCase(shape).toUpperCase()) {
    // circle component
    case CIRCLE:
      if (props.radius) {
        shapeComponent = <Circle fill={fill} {...props} />;
      }
      break;
    // oval component
    case OVAL:
      if (props.width && props.height) {
        shapeComponent = <Oval fill={fill} {...props} />;
      }
      break;
    // equilateral triangle component
    case EQUILATERAL_TRIANGLE:
      if (props.length) {
        shapeComponent = (
          <Polygon sides={3} sideLength={props.length} fill={fill} {...props} />
        );
      }
      break;
    // isosceles triangle component
    case ISOSCELES_TRIANGLE:
      if (props.width && props.height) {
        shapeComponent = <IsoscelesTriangle fill={fill} {...props} />;
      }
      break;
    // scalene triangle component
    case SCALENE_TRIANGLE:
      if (props.width && props.height) {
        shapeComponent = <ScaleneTriangle fill={fill} {...props} />;
      }
      break;
    // parallelogram component
    case PARALLELOGRAM:
      if (props.width && props.height) {
        shapeComponent = <Parallelogram fill={fill} {...props} />;
      }
      break;
    // rectangle component
    case RECTANGLE:
      if (props.width && props.height) {
        shapeComponent = <Rectangle fill={fill} {...props} />;
      }
      break;
    // square component
    case SQUARE:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={4} fill={fill} {...props} />;
      }
      break;
    // pentagon component
    case PENTAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={5} fill={fill} {...props} />;
      }
      break;
    // hexagon component
    case HEXAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={6} fill={fill} {...props} />;
      }
      break;
    // heptagon component
    case HEPTAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={7} fill={fill} {...props} />;
      }
      break;
    // octagon component
    case OCTAGON:
      if (props.sideLength) {
        shapeComponent = <Polygon sides={8} fill={fill} {...props} />;
      }
      break;
    default:
      break;
  }

  // set invalid component to render if not valid.
  if (!shapeComponent) {
    shapeComponent = <Invalid fill={fill} />;
  }

  return <View style={[styles.container]}>{shapeComponent}</View>;
};

export default Whiteboard;

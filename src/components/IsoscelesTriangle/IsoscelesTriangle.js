import React from 'react';
import { Svg, Polygon } from 'react-native-svg';

const IsoscelesTriangle = ({ width, height, fill }) => (
  <Svg height={height} width={width}>
    <Polygon points={`${width / 2},${height} ${width},0 0,0`} fill={fill} />
  </Svg>
);

export default IsoscelesTriangle;

import React from 'react';
import { Svg, Polygon } from 'react-native-svg';

const ScaleneTriangle = ({ width, height, fill }) => (
  <Svg height={height} width={width}>
    <Polygon points={`0,${height} ${width},0 ${width * 2},0`} fill={fill} />
  </Svg>
);

export default ScaleneTriangle;

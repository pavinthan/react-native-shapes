import React from 'react';
import Svg, { Circle as BasicCircle } from 'react-native-svg';

const Circle = ({ radius, fill }) => (
  <Svg height={radius * 2} width={radius * 2}>
    <BasicCircle cx={radius} cy={radius} r={radius} fill={fill} />
  </Svg>
);

export default Circle;

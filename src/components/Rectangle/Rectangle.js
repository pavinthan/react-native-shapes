import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const Rectangle = ({ width, height, fill }) => (
  <Svg height={height} width={width}>
    <Rect x="0" y="0" width={width} height={height} fill={fill} />
  </Svg>
);

export default Rectangle;
